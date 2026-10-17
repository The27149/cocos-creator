export class globalData {
    /**距离缩放 1px = n米 */
    public static distanceScale: number = 1000 * 1000;
    public static timeScale: number = 2000 * 10;
}

export class globalFunc {
    /**将米转换为像素 */
    public static pxToM(px: number): number {
        return px * globalData.distanceScale;
    }
    /**将像素转换为米 */
    public static mToPx(m: number): number {
        return m / globalData.distanceScale;
    }
}