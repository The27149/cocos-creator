import { Vec2 } from "cc";

export interface IBallConfig {
    /**球的名称 */
    name: string;
    /**球的半径 */
    radius: number;
    /**球的质量 */
    mass: number;
    /**球的颜色 */
    color?: number;
    /**球的初始速度 */
    initSpeed?: Vec2;
    /**球的初始位置 */
    initPos?: Vec2;
}