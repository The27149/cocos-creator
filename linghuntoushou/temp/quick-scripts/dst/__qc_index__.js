
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/customComponents/rank/scriipt/Rank');
require('./assets/customComponents/rank/scriipt/RankData');
require('./assets/customComponents/shop/script/Shop');
require('./assets/customComponents/shop/script/ShopData');
require('./assets/customComponents/shop/script/ShopItem');
require('./assets/script/Ball');
require('./assets/script/Basket');
require('./assets/script/Clock');
require('./assets/script/CoinMgr');
require('./assets/script/Game');
require('./assets/script/Launch');
require('./assets/script/Main');
require('./assets/script/Settle');
require('./assets/script/SoundMgr');
require('./assets/script/common/EventMgr');
require('./assets/script/common/Global');
require('./assets/script/common/LocalData');
require('./assets/script/common/Module');
require('./assets/script/common/Move');
require('./assets/script/common/NodeFactory');
require('./assets/script/common/Utils');

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