export class EBUtils {
    /**带颜色的打印 */
    public static log(...params) {
        // return;
        console.log('%c >>>>>>>>>>>', 'color: orange', ...params);
    }

    /**随机整数 */
    static randomInt(...nums: number[]) {
        let min = Math.floor(Math.min(...nums));
        let max = Math.floor(Math.max(...nums));
        return Math.floor(Math.random() * (++max - min)) + min;
    }

    /**
     * 随机生成字符串
     * @param len 字符串长度
     * @param type 字符串类型，默认为1（ 1：数字，小写，大写；2：纯数字；3：大小写纯字母）
     */
    static randomString(len: number, type: number = 1): string {
        let nums = `0123456789`;
        let letters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
        let source = ``;
        switch (type) {
            case 1: source = nums + letters; break;
            case 2: source = nums; break;
            case 3: source = letters; break;
        }
        let str = ``;
        for (let i = 0; i < len; i++) {
            let item = source.charAt(Math.floor(Math.random() * source.length));
            str += item;
        }
        return str;
    }

    ///////////////////////////////////数组方法扩展 start//////////////////////////////////////////////////////////////////
    /**去重 */
    static clearArrRepeat(arr: any[]): any[] {
        let list: any[] = [];
        //@ts-ignore
        if (Set) list.push(...new Set(arr));
        else {
            arr.reduce((pre, cur) => {
                if (!pre.includes(cur)) pre.push(cur);
                return pre;
            }, list);
        }
        return list;
    }

    /**合并n个数组再去重 */
    static concatArrsAndNoRepeat(...arrs: any[][]): any[] {
        let list: any[] = [];
        arrs.forEach(arr => { list = list.concat(arr) })
        return this.clearArrRepeat(list);
    }

    /**提取n个数组中重复的部分 */
    static getRepeatInArrs(...arrs: any[][]): any[] {
        let list = arrs[0].filter(item => {
            let tag = true;
            for (let i = 1; i < arrs.length; i++) {
                tag = arrs[i].includes(item);
                if (!tag) break;
            }
            return tag;
        })
        return list;
    }

    /**删除数组中的一部分（删除的部分用数组表示） */
    static spliceArr(sourceArr: any[], deleteArr: any[]) {
        deleteArr.forEach(item => {
            let idx = sourceArr.indexOf(item);
            if (idx >= 0) sourceArr.splice(idx, 1);
        })
    }

    /**从数组中随机取出n项 默认取一项 */
    static randomItemOfArr<T>(list: T[], count: number = 1): T[] {
        let res: T[] = [];
        let copyList = [...list];
        count = Math.min(count, copyList.length);
        for (let i = 0; i < count; i++) {
            let idx = EBUtils.randomInt(0, copyList.length - 1);
            let ele = copyList.splice(idx, 1)[0]
            res.push(ele);
        }
        return res;
    }

    /**是否为数组 */
    static isArr(arr: any): boolean {
        if (Array[`isArray`]) {
            return Array.isArray(arr);
        } else {
            return Object.prototype.toString.call(arr) === `[object Array]`;
        }
    }

    /**扁平化n层数组 默认无限层*/
    static flatArr(list: any[], depth: number = -1): any[] {
        return list.reduce((pre, cur) => {
            let isArr = this.isArr(cur);
            if (isArr) {
                switch (true) {
                    case depth < 0:
                        pre.push(...this.flatArr(cur, -1));
                        break;
                    case depth > 0:
                        pre.push(...this.flatArr(cur, depth - 1));
                        break;
                    case depth === 0:
                        pre.push(cur);
                        break;
                }
            } else {
                pre.push(cur);
            }
            return pre;
        }, []);
    }
    ///////////////////////////////////数组方法扩展 end//////////////////////////////////////////////////////////////////
}
