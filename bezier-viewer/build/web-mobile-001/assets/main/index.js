System.register("chunks:///_virtual/main",["./NodeFactory.ts","./Paper.ts","./Point.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/NodeFactory.ts",["cc"],(function(o){"use strict";var t,e,n,r;return{setters:[function(o){t=o.cclegacy,e=o._decorator,n=o.instantiate,r=o.NodePool}],execute:function(){var i;t._RF.push({},"a6879dPmetKb5ET18ePUefs","NodeFactory",void 0);var s=e.ccclass;e.property,o("default",s(i=function(){function o(o){this.prefab=null,this.nodePool=new r,this.prefab=o}var t=o.prototype;return t.init=function(o){for(var t=0;t<o;t++)this.nodePool.put(n(this.prefab))},t.getNode=function(){return this.nodePool.size()>0?this.nodePool.get():n(this.prefab)},t.putNode=function(o){var t=this.getNode();o.name===t.name?this.nodePool.put(o):console.warn("节点放回到错误的节点池：",o,this.nodePool)},t.clear=function(){this.nodePool&&this.nodePool.clear()},o}())||i);t._RF.pop()}}}));

System.register("chunks:///_virtual/Paper.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeFactory.ts","./Point.ts"],(function(t){"use strict";var n,e,i,o,r,l,a,s,h,c,u,p,d,f,C,v,b,m,g,P,y,w,L;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){l=t.cclegacy,a=t._decorator,s=t.Prefab,h=t.Color,c=t.CCFloat,u=t.Node,p=t.Label,d=t.Button,f=t.director,C=t.Canvas,v=t.NodeEventType,b=t.v2,m=t.Sprite,g=t.UITransform,P=t.Graphics,y=t.Component},function(t){w=t.default},function(t){L=t.Point}],execute:function(){var E,M,T,S,I,z,N,W,B,K,k,D,x,H,U,O,_,F,R,A,V,Y,j,G,q,J,Q,X,Z,$,tt,nt,et,it,ot;l._RF.push({},"bcfd8l1w8RKP4obhVS16PMB","Paper",void 0);var rt=a.ccclass,lt=a.property;t("Paper",(E=rt("Paper"),M=lt(s),T=lt(h),S=lt(c),I=lt(c),z=lt(u),N=lt(u),W=lt(u),B=lt(p),K=lt(d),k=lt(d),D=lt(d),x=lt(d),H=lt(d),U=lt(d),O=lt(d),_=lt(u),E((A=n((R=function(t){function n(){for(var n,e=arguments.length,i=new Array(e),l=0;l<e;l++)i[l]=arguments[l];return n=t.call.apply(t,[this].concat(i))||this,o(n,"pointPre",A,r(n)),o(n,"lineColor",V,r(n)),o(n,"lineWidth",Y,r(n)),o(n,"sampleNum",j,r(n)),o(n,"lineContainer",G,r(n)),o(n,"ctrlContainer",q,r(n)),o(n,"graphicsContainer",J,r(n)),o(n,"paperScale",Q,r(n)),o(n,"addCtrlPoint",X,r(n)),o(n,"removeCtrlPoint",Z,r(n)),o(n,"standardBtn",$,r(n)),o(n,"scaleUp",tt,r(n)),o(n,"scaleDown",nt,r(n)),o(n,"helpBtn",et,r(n)),o(n,"helpCloseBtn",it,r(n)),o(n,"helpContent",ot,r(n)),n.canvasNode=null,n.pointPool=null,n.ctrlPoints=[],n.curCtrlPoint=null,n.curLineWidth=1,n.stageMultiList=[1,1,2,6,24,120,720,5040,40320,362880,3628800],n}e(n,t);var l=n.prototype;return l.onLoad=function(){this.canvasNode=f.getScene().getComponentInChildren(C).node,this.addEvents(),this.curLineWidth=this.lineWidth,this.pointPool=new w(this.pointPre),this.pointPool.init(this.sampleNum),this.randomDraw(3)},l.onDestroy=function(){this.removeEvents()},l.addEvents=function(){this.canvasNode.on(v.TOUCH_MOVE,this.onTouchMove,this),this.canvasNode.on(v.MOUSE_WHEEL,this.onMouseWheel,this),this.addCtrlPoint.node.on(d.EventType.CLICK,this.onAddCtrl,this),this.removeCtrlPoint.node.on(d.EventType.CLICK,this.onRemoveCtrl,this),this.standardBtn.node.on(d.EventType.CLICK,this.onStandard,this),this.scaleUp.node.on(d.EventType.CLICK,this.onClickScaleUp,this),this.scaleDown.node.on(d.EventType.CLICK,this.onClickScaleDown,this),this.helpBtn.node.on(d.EventType.CLICK,this.onClickHelp,this),this.helpCloseBtn.node.on(d.EventType.CLICK,this.onClosekHelp,this)},l.removeEvents=function(){this.canvasNode.off(v.TOUCH_MOVE,this.onTouchMove,this),this.canvasNode.off(v.MOUSE_WHEEL,this.onMouseWheel,this),this.addCtrlPoint.node.off(d.EventType.CLICK,this.onAddCtrl,this),this.removeCtrlPoint.node.off(d.EventType.CLICK,this.onRemoveCtrl,this),this.standardBtn.node.off(d.EventType.CLICK,this.onStandard,this),this.scaleUp.node.off(d.EventType.CLICK,this.onClickScaleUp,this),this.scaleDown.node.off(d.EventType.CLICK,this.onClickScaleDown,this),this.helpBtn.node.off(d.EventType.CLICK,this.onClickHelp,this),this.helpCloseBtn.node.off(d.EventType.CLICK,this.onClosekHelp,this)},l.onTouchMove=function(t){var n=t.touch.getDelta();this.node.position=this.node.position.add3f(n.x,n.y,0)},l.onMouseWheel=function(t){var n=t.getScrollY();this.scalePaper(n>0)},l.scalePaper=function(t){var n=this.node.scale.x*(t?1.1:.9),e=n.toFixed(3);n=parseFloat(e),this.paperScale.string=e,this.node.setScale(n,n),this.curLineWidth=this.lineWidth*(1/this.node.scale.x),this.draw()},l.randomDraw=function(t){void 0===t&&(t=3);for(var n=0;n<t+1;n++){var e=Math.round(this.random(-960,960)),i=Math.round(this.random(-540,540));this.ctrlPoints.push(b(e,i))}this.draw()},l.random=function(t,n){return Math.random()*(n-t)+t},l.updateCtrls=function(){this.ctrlPoints.length=this.ctrlContainer.children.length;for(var t=0;t<this.ctrlPoints.length;t++){var n=this.ctrlContainer.children[t],e=this.ctrlPoints[t];e||(e=b()),e.x=n.position.x,e.y=n.position.y,this.ctrlPoints[t]=e}this.draw()},l.draw=function(){this.drawCtrls();for(var t=this.ctrlPoints,n=t.length-1,e=0,i=this.sampleNum;e<i;e++){for(var o=e/i,r=0,l=0,a=void 0,s=void 0,h=0;h<n+1;h++)a=this.comb(n,h)*Math.pow(1-o,n-h)*Math.pow(o,h),r+=(s=t[h]).x*a,l+=s.y*a;this.drawLines(r,l,e)}},l.drawCtrls=function(){for(var t=this.ctrlContainer.children,n=this.ctrlPoints;t.length>n.length;){var e=t[t.length-1];this.pointPool.putNode(e)}for(var i=0;i<n.length;i++){var o=t[i];if(!o){(o=this.pointPool.getNode()).parent=this.ctrlContainer,o.setSiblingIndex(i),o.getComponent(m).color=h.YELLOW,o.getComponent(L).init(this);var r=o.getComponent(g);r.width=r.height=5*this.lineWidth}var l=n[i].x,a=n[i].y,s=o.getComponent(L);s.reset(i,l,a),s.scaleSelf(1/this.node.scale.x)}},l.drawLines=function(t,n,e){var i=this.graphicsContainer.getComponent(P);i.lineWidth=this.curLineWidth,0===e?(i.clear(),i.moveTo(t,n)):i.lineTo(t,n),e===this.sampleNum-1&&i.stroke()},l.stageMulti=function(t){var n=this.stageMultiList[t];return n||(n=t*this.stageMulti(t-1),this.stageMultiList[t]=n),n},l.comb=function(t,n){return this.stageMulti(t)/this.stageMulti(n)/this.stageMulti(t-n)},l.onAddCtrl=function(){var t;if(this.curCtrlPoint){var n=this.curCtrlPoint.index,e=this.ctrlPoints.splice(n+1),i=Math.round(this.random(-960,960)),o=Math.round(this.random(-540,540));this.ctrlPoints.push(b(i,o)),(t=this.ctrlPoints).push.apply(t,e),this.draw()}},l.onRemoveCtrl=function(){if(this.curCtrlPoint&&!(this.ctrlPoints.length<2)){var t=this.curCtrlPoint.index;this.ctrlPoints.splice(t,1),this.draw()}},l.onStandard=function(){this.node.setPosition(0,0);var t=this.ctrlPoints[0].clone();if(t){for(var n,e=i(this.ctrlPoints);!(n=e()).done;){n.value.subtract(t)}this.draw()}},l.onClickScaleUp=function(){this.scalePaper(!0)},l.onClickScaleDown=function(){this.scalePaper(!1)},l.onClickHelp=function(){this.helpContent.active=!0},l.onClosekHelp=function(){this.helpContent.active=!1},n}(y)).prototype,"pointPre",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=n(R.prototype,"lineColor",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=n(R.prototype,"lineWidth",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),j=n(R.prototype,"sampleNum",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1e3}}),G=n(R.prototype,"lineContainer",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=n(R.prototype,"ctrlContainer",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=n(R.prototype,"graphicsContainer",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=n(R.prototype,"paperScale",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=n(R.prototype,"addCtrlPoint",[K],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Z=n(R.prototype,"removeCtrlPoint",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$=n(R.prototype,"standardBtn",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),tt=n(R.prototype,"scaleUp",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),nt=n(R.prototype,"scaleDown",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),et=n(R.prototype,"helpBtn",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),it=n(R.prototype,"helpCloseBtn",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ot=n(R.prototype,"helpContent",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=R))||F));l._RF.pop()}}}));

System.register("chunks:///_virtual/Point.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,i,n,e,s,h,c,r,u,a,d,p,l;return{setters:[function(t){o=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,e=t.assertThisInitialized},function(t){s=t.cclegacy,h=t._decorator,c=t.Label,r=t.Node,u=t.NodeEventType,a=t.UITransform,d=t.v3,p=t.v2,l=t.Component}],execute:function(){var f,T,P,v,_,C,g;s._RF.push({},"fdfc0z0VztDzZHKDrV8vmp+","Point",void 0);var y=h.ccclass,E=h.property;t("Point",(f=y("Point"),T=E(c),P=E(r),f((C=o((_=function(t){function o(){for(var o,i=arguments.length,s=new Array(i),h=0;h<i;h++)s[h]=arguments[h];return o=t.call.apply(t,[this].concat(s))||this,n(o,"coordinate",C,e(o)),n(o,"checkTag",g,e(o)),o.touchPos=p(),o.touchPos_world=d(),o.touchPos_node=d(),o.paper=null,o.index=0,o}i(o,t);var s=o.prototype;return s.init=function(t){this.paper=t},s.onLoad=function(){this.addEvents()},s.onDestroy=function(){this.removeEvents()},s.addEvents=function(){this.node.on(u.TOUCH_MOVE,this.onTouchMove,this),this.node.on(u.TOUCH_START,this.onTouchStart,this),this.node.on(u.TOUCH_END,this.onTouchEnd,this)},s.removeEvents=function(){this.node.off(u.TOUCH_MOVE,this.onTouchMove,this),this.node.off(u.TOUCH_START,this.onTouchStart,this),this.node.off(u.TOUCH_END,this.onTouchEnd,this)},s.onTouchMove=function(t){t.propagationStopped=!0,this.updateCtrls(t)},s.onTouchStart=function(){},s.onTouchEnd=function(t){this.updateCtrls(t,!0);var o=this.paper.curCtrlPoint;o&&o!==this&&o.hideCheckTag(),this.paper.curCtrlPoint=this,this.showCheckTag()},s.updateCtrls=function(t,o){void 0===o&&(o=!1),t.touch.getUILocation(this.touchPos),this.touchPos_world.x=this.touchPos.x,this.touchPos_world.y=this.touchPos.y,this.node.parent.getComponent(a).convertToNodeSpaceAR(this.touchPos_world,this.touchPos_node),o&&(this.touchPos_node.x=Math.round(this.touchPos_node.x),this.touchPos_node.y=Math.round(this.touchPos_node.y)),this.node.setPosition(this.touchPos_node.x,this.touchPos_node.y),this.paper.updateCtrls()},s.reset=function(t,o,i){this.index=t,this.node.setPosition(d(o,i)),this.coordinate.string="P"+t+"(x:"+o+", y:"+i+")",this!==this.paper.curCtrlPoint&&this.hideCheckTag()},s.showCheckTag=function(){this.checkTag.active=!0},s.hideCheckTag=function(){this.checkTag.active=!1},s.scaleSelf=function(t){this.node.setScale(d(t,t,1))},o}(l)).prototype,"coordinate",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=o(_.prototype,"checkTag",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=_))||v));s._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});