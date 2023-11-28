
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/LocalData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93f1fLpuMpPRr9/GFw+sA5T', 'LocalData');
// script/common/LocalData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocalData = /** @class */ (function () {
    function LocalData(name) {
        this.libName = name;
        this.syncFromLocalStorage();
        if (!this.data) {
            this.data = {};
            this.syncToLocalStorage();
        }
    }
    /**数据同步到localStorage */
    LocalData.prototype.syncToLocalStorage = function () {
        var data = JSON.stringify(this.data);
        cc.sys.localStorage.setItem(this.libName, data);
    };
    /**数据从localStorage更新*/
    LocalData.prototype.syncFromLocalStorage = function () {
        var str = cc.sys.localStorage.getItem(this.libName);
        this.data = JSON.parse(str);
    };
    /**存入数据 */
    LocalData.prototype.setData = function (key, value) {
        this.data[key] = value;
        this.syncToLocalStorage();
    };
    /**获取数据 */
    LocalData.prototype.getData = function (key) {
        return this.data[key];
    };
    return LocalData;
}());
exports.default = LocalData;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXExvY2FsRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBTUksbUJBQVksSUFBWTtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQsdUJBQXVCO0lBQ2Ysc0NBQWtCLEdBQTFCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHNCQUFzQjtJQUNkLHdDQUFvQixHQUE1QjtRQUNJLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxVQUFVO0lBQ0gsMkJBQU8sR0FBZCxVQUFlLEdBQVcsRUFBRSxLQUFVO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxVQUFVO0lBQ0gsMkJBQU8sR0FBZCxVQUFlLEdBQVc7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTCxnQkFBQztBQUFELENBckNBLEFBcUNDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxEYXRhIHtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBsaWJOYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGRhdGE6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmxpYk5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc3luY0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICBpZiAoIXRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5zeW5jVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pWw5o2u5ZCM5q2l5YiwbG9jYWxTdG9yYWdlICovXHJcbiAgICBwcml2YXRlIHN5bmNUb0xvY2FsU3RvcmFnZSgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubGliTmFtZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pWw5o2u5LuObG9jYWxTdG9yYWdl5pu05pawKi9cclxuICAgIHByaXZhdGUgc3luY0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmxpYk5hbWUpO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2Uoc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlrZjlhaXmlbDmja4gKi9cclxuICAgIHB1YmxpYyBzZXREYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnN5bmNUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluaVsOaNriAqL1xyXG4gICAgcHVibGljIGdldERhdGEoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFba2V5XTtcclxuICAgIH1cclxufVxyXG4iXX0=