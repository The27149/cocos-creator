import { random, v2 } from "cc";
import { IBallConfig } from "./globalDefine";

export class config {
    public static G: number = 6.67 * 10 ** -11;   
    public static minShowRadius: number = 5;
}

    /**天体配置 */
export const ballConfigs: Record<string, IBallConfig> = {
    
    earth: {
        name: 'earth',
        mass: 5.97e24,        // kg
        radius: 6371 * 1000,  // m
    },
    rocket: {
        name: 'rocket',
        mass: 1000 * 100,           // kg，火箭真实量级，别用地球质量
        radius: 20,           // m
        initPos: v2(6.371e6 + 1000e3, 0), // 地表上方 400km，比如近地轨道
        initSpeed: v2(0, 9e3),          // 该高度的环绕速度约 7.66 km/s
    },
    moon: {
        name: 'moon',
        mass: 7.35 * 10 ** 22,           // kg
        radius: 1737 * 1000,             // m
        initPos: v2(384400 * 1000 - 4671 * 1000, 0), // 月心位置
        initSpeed: v2(0, -1022),         // m/s，月球轨道速度
    },
    mirror: {
        name: 'mirrorEarth',
        mass: 5.97e24,        // kg
        radius: 6371 * 1000,  // m
        initPos:v2(6e6 * 5, 0),
        initSpeed: v2(0, 5000)
    }
}


