import { Color, InstanceMaterialType, Material, PipelineStateManager, Rect, Root, UIVertexFormat, _decorator, director, gfx, pipeline, renderer } from 'cc';
const { ccclass } = _decorator;

@ccclass('DrawByGfx')
export class DrawByGfx {

    private device: gfx.Device = null;
    //顶点格式
    private attribute = [];
    //单顶点步长(字节长)
    private stride: number = 0;
    private material: Material = null;
    private assembler: gfx.InputAssembler = null;



    public init(material: Material) {
        this.material = material;
        // console.log(`is Material instance`, material instanceof InstanceMaterialType);
        this.device = gfx.deviceManager.gfxDevice;

        let api = this.device.gfxAPI;
        console.log(api);
        console.log(gfx.API, gfx.API[api]);

        this.attribute = UIVertexFormat.vfmtPosColor;
        this.stride = UIVertexFormat.getAttributeStride(this.attribute);
        console.log(`this.stride:`, this.stride);
    }

    public prepare() {
        //单个缓冲区内顶点个数不能超过 2**16 = 65536
        const vertexData = this.getVertexData();
        const vertexBuffer = this.device.createBuffer(new gfx.BufferInfo(//创建顶点buffer
            gfx.BufferUsageBit.VERTEX | gfx.BufferUsageBit.TRANSFER_DST,//buffer使用方式
            gfx.MemoryUsageBit.DEVICE,//内存使用方式  device缓冲内存分配在gpu上; host: cpu
            vertexData.length * Float32Array.BYTES_PER_ELEMENT,//buffer长度，
            this.stride
        ))
        vertexBuffer.update(vertexData);

        //输入装配器
        const IAInfo = new gfx.InputAssemblerInfo(this.attribute, [vertexBuffer]);
        const assembler = this.device.createInputAssembler(IAInfo);
        this.assembler = assembler;

        // //创建材质
        // const material = new Material();
        // material.copy(this.materialSrc);
    }

    /**顶点数据 */
    private getVertexData(): Float32Array {
        let vertexData = new Float32Array([
            0, 0, 0, // 点的位置
            1, 0, 0, 1// 点的颜色 (红色)
        ]);
        return vertexData;
    }


    public render() {
        let swapchain = gfx.deviceManager.swapchain;
        //准备交换链缓冲，作为渲染目标
        this.device.acquire([swapchain]);

        //获取默认命令缓冲
        const cmdBuffer = this.device.commandBuffer;
        const renderArea = new gfx.Rect(0, 0, swapchain.width, swapchain.height);
        const frameBuffer = director.root.mainWindow.framebuffer;
        cmdBuffer.begin();
        cmdBuffer.beginRenderPass(frameBuffer.renderPass, frameBuffer, renderArea, [new gfx.Color(0, 0, 0, 0)], 1.0, 0)

        const pass = this.material.passes[0];
        const shader = pass.getShaderVariant();
        const pipelineState = PipelineStateManager.getOrCreatePipelineState(this.device, pass, shader, frameBuffer.renderPass, this.assembler);

        cmdBuffer.bindPipelineState(pipelineState);
        cmdBuffer.bindDescriptorSet(pipeline.SetIndex.MATERIAL, pass.descriptorSet);
        cmdBuffer.bindInputAssembler(this.assembler);
        cmdBuffer.draw(this.assembler);
        cmdBuffer.endRenderPass();
        cmdBuffer.end();

        this.device.queue.submit([cmdBuffer]);
        this.device.present();
    }




    // customDraw() {
    //     let device = gfx.deviceManager.gfxDevice;



    //     let vertexBufferInfo = new gfx.BufferInfo()

    //     let vertexBuffer = device.createBuffer(vertexData)

    //     // 创建一个输入装配器（InputAssembler）
    //     let inputAssemblerInfo = new gfx.InputAssemblerInfo();
    //     inputAssemblerInfo.vertexBuffers = [
    //         {
    //             attributes: [
    //                 {
    //                     name: gfx.AttributeName.ATTR_POSITION,
    //                     format: gfx.Format.RGB32F
    //                 }
    //             ],
    //             stride: 24, // 每个顶点的大小（字节）
    //             buffer: device.createBuffer(gfx.BufferInfo.FLOAT32, vertexData, gfx.BufferUsageBit.VERTEX)
    //         }
    //     ];
    //     inputAssemblerInfo.vertexCount = 1; // 点的数量
    //     inputAssemblerInfo.primitiveMode = gfx.PrimitiveMode.POINTS; // 指定绘制点

    //     let inputAssembler = device.createInputAssembler(inputAssemblerInfo);

    //     let commandInfo = new gfx.CommandBufferInfo();
    //     // 创建一个绘制命令
    //     let cmdBuff = device.createCommandBuffer(commandInfo);
    //     cmdBuff.beginRenderPass(renderPass);

    //     // 执行绘制命令
    //     cmdBuff.bindInputAssembler(inputAssembler);
    //     cmdBuff.draw(inputAssembler);

    //     cmdBuff.endRenderPass();
    //     device.queue.submit([cmdBuff]);
    // }
}

export const drawByGfx = new DrawByGfx();

