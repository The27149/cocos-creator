"use strict";
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