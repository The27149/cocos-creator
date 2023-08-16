System.register("chunks:///_virtual/main",["./NodeFactory.ts","./Paper.ts","./Point.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/NodeFactory.ts",["cc"],(function(o){"use strict";var t,e,n,r;return{setters:[function(o){t=o.cclegacy,e=o._decorator,n=o.instantiate,r=o.NodePool}],execute:function(){var i;t._RF.push({},"a6879dPmetKb5ET18ePUefs","NodeFactory",void 0);var s=e.ccclass;e.property,o("default",s(i=function(){function o(o){this.prefab=null,this.nodePool=new r,this.prefab=o}var t=o.prototype;return t.init=function(o){for(var t=0;t<o;t++)this.nodePool.put(n(this.prefab))},t.getNode=function(){return this.nodePool.size()>0?this.nodePool.get():n(this.prefab)},t.putNode=function(o){var t=this.getNode();o.name===t.name?this.nodePool.put(o):console.warn("节点放回到错误的节点池：",o,this.nodePool)},t.clear=function(){this.nodePool&&this.nodePool.clear()},o}())||i);t._RF.pop()}}}));

System.register("chunks:///_virtual/Paper.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeFactory.ts","./Point.ts"],(function(t){"use strict";var n,e,i,o,r,l,a,s,h,u,c,p,d,f,C,v,g,m,b,P,y,w,M;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){l=t.cclegacy,a=t._decorator,s=t.Prefab,h=t.Color,u=t.CCFloat,c=t.Node,p=t.Label,d=t.Button,f=t.director,C=t.Canvas,v=t.NodeEventType,g=t.v2,m=t.UITransform,b=t.Sprite,P=t.Graphics,y=t.Component},function(t){w=t.default},function(t){M=t.Point}],execute:function(){var E,L,S,T,N,z,I,B,x,H,K,W,O,_,D,R,k,F,U,A,V,Y,j,G,X,q,J,Q,Z;l._RF.push({},"bcfd8l1w8RKP4obhVS16PMB","Paper",void 0);var $=a.ccclass,tt=a.property;t("Paper",(E=$("Paper"),L=tt(s),S=tt(h),T=tt(u),N=tt(u),z=tt(c),I=tt(c),B=tt(c),x=tt(p),H=tt(d),K=tt(d),W=tt(d),O=tt(d),_=tt(c),E((k=n((R=function(t){function n(){for(var n,e=arguments.length,i=new Array(e),l=0;l<e;l++)i[l]=arguments[l];return n=t.call.apply(t,[this].concat(i))||this,o(n,"pointPre",k,r(n)),o(n,"lineColor",F,r(n)),o(n,"lineWidth",U,r(n)),o(n,"sampleNum",A,r(n)),o(n,"lineContainer",V,r(n)),o(n,"ctrlContainer",Y,r(n)),o(n,"graphicsContainer",j,r(n)),o(n,"paperScale",G,r(n)),o(n,"addCtrlPoint",X,r(n)),o(n,"removeCtrlPoint",q,r(n)),o(n,"standardBtn",J,r(n)),o(n,"helpBtn",Q,r(n)),o(n,"helpContent",Z,r(n)),n.canvasNode=null,n.pointPool=null,n.ctrlPoints=[],n.curCtrlPoint=null,n.stageMultiList=[1,1,2,6,24,120,720,5040,40320,362880,3628800],n}e(n,t);var l=n.prototype;return l.onLoad=function(){this.canvasNode=f.getScene().getComponentInChildren(C).node,this.addEvents(),this.pointPool=new w(this.pointPre),this.pointPool.init(this.sampleNum),this.randomDraw(3)},l.onDestroy=function(){this.removeEvents()},l.addEvents=function(){this.canvasNode.on(v.TOUCH_MOVE,this.onTouchMove,this),this.canvasNode.on(v.MOUSE_WHEEL,this.onMouseWheel,this),this.addCtrlPoint.node.on(d.EventType.CLICK,this.onAddCtrl,this),this.removeCtrlPoint.node.on(d.EventType.CLICK,this.onRemoveCtrl,this),this.standardBtn.node.on(d.EventType.CLICK,this.onStandard,this),this.helpBtn.node.on(d.EventType.CLICK,this.onClickHelp,this)},l.removeEvents=function(){this.canvasNode.off(v.TOUCH_MOVE,this.onTouchMove,this),this.canvasNode.off(v.MOUSE_WHEEL,this.onMouseWheel,this),this.addCtrlPoint.node.off(d.EventType.CLICK,this.onAddCtrl,this),this.removeCtrlPoint.node.off(d.EventType.CLICK,this.onRemoveCtrl,this),this.standardBtn.node.off(d.EventType.CLICK,this.onStandard,this),this.helpBtn.node.off(d.EventType.CLICK,this.onClickHelp,this)},l.onTouchMove=function(t){var n=t.touch.getDelta();this.node.position=this.node.position.add3f(n.x,n.y,0)},l.onMouseWheel=function(t){console.log("滚动：",t,t.getScrollX(),t.getScrollY());var n=t.getScrollY(),e=this.node.scale.x,i=n>0?1.1*e:.9*e;this.paperScale.string=i.toString(),this.node.setScale(i,i)},l.randomDraw=function(t){void 0===t&&(t=3);for(var n=0;n<t+1;n++){var e=Math.round(this.random(-960,960)),i=Math.round(this.random(-540,540));this.ctrlPoints.push(g(e,i))}this.draw()},l.random=function(t,n){return Math.random()*(n-t)+t},l.updateCtrls=function(){this.ctrlPoints.length=this.ctrlContainer.children.length;for(var t=0;t<this.ctrlPoints.length;t++){var n=this.ctrlContainer.children[t],e=this.ctrlPoints[t];e||(e=g()),e.x=n.position.x,e.y=n.position.y,this.ctrlPoints[t]=e}this.draw()},l.draw=function(){this.drawCtrls();for(var t=this.ctrlPoints,n=t.length-1,e=0,i=this.sampleNum;e<i;e++){for(var o=e/i,r=0,l=0,a=void 0,s=void 0,h=0;h<n+1;h++)a=this.comb(n,h)*Math.pow(1-o,n-h)*Math.pow(o,h),r+=(s=t[h]).x*a,l+=s.y*a;this.drawLines(r,l,e)}},l.drawCtrls=function(){for(var t=this.ctrlContainer.children,n=this.ctrlPoints;t.length>n.length;){var e=t[t.length-1];this.pointPool.putNode(e)}for(var i=0;i<n.length;i++){var o=t[i];if(!o){(o=this.pointPool.getNode()).parent=this.ctrlContainer,o.setSiblingIndex(i);var r=o.getComponent(m);r.width=r.height=5*this.lineWidth,o.getComponent(b).color=h.YELLOW,o.getComponent(M).init(this)}var l=n[i].x,a=n[i].y;o.getComponent(M).reset(i,l,a)}},l.drawLines=function(t,n,e){var i=this.graphicsContainer.getComponent(P);0===e?(i.clear(),i.moveTo(t,n)):i.lineTo(t,n),e===this.sampleNum-1&&i.stroke()},l.stageMulti=function(t){var n=this.stageMultiList[t];return n||(n=t*this.stageMulti(t-1),this.stageMultiList[t]=n),n},l.comb=function(t,n){return this.stageMulti(t)/this.stageMulti(n)/this.stageMulti(t-n)},l.onAddCtrl=function(){var t;if(this.curCtrlPoint){var n=this.curCtrlPoint.index,e=this.ctrlPoints.splice(n+1);this.ctrlPoints.push(g()),(t=this.ctrlPoints).push.apply(t,e),this.draw()}},l.onRemoveCtrl=function(){if(this.curCtrlPoint&&!(this.ctrlPoints.length<2)){var t=this.curCtrlPoint.index;this.ctrlPoints.splice(t,1),this.draw()}},l.onStandard=function(){var t=this.ctrlPoints[0].clone();if(t){for(var n,e=i(this.ctrlPoints);!(n=e()).done;){n.value.subtract(t)}this.draw()}},l.onClickHelp=function(){this.helpContent.active=!this.helpContent.active},n}(y)).prototype,"pointPre",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=n(R.prototype,"lineColor",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=n(R.prototype,"lineWidth",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),A=n(R.prototype,"sampleNum",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1e3}}),V=n(R.prototype,"lineContainer",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=n(R.prototype,"ctrlContainer",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=n(R.prototype,"graphicsContainer",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=n(R.prototype,"paperScale",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=n(R.prototype,"addCtrlPoint",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=n(R.prototype,"removeCtrlPoint",[K],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=n(R.prototype,"standardBtn",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=n(R.prototype,"helpBtn",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Z=n(R.prototype,"helpContent",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=R))||D));l._RF.pop()}}}));

System.register("chunks:///_virtual/Point.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var o,n,i,e,s,c,h,r,u,a,d,p,l;return{setters:[function(t){o=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,e=t.assertThisInitialized},function(t){s=t.cclegacy,c=t._decorator,h=t.Label,r=t.Node,u=t.NodeEventType,a=t.UITransform,d=t.v3,p=t.v2,l=t.Component}],execute:function(){var f,T,v,P,g,_,y;s._RF.push({},"fdfc0z0VztDzZHKDrV8vmp+","Point",void 0);var C=c.ccclass,E=c.property;t("Point",(f=C("Point"),T=E(h),v=E(r),f((_=o((g=function(t){function o(){for(var o,n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return o=t.call.apply(t,[this].concat(s))||this,i(o,"coordinate",_,e(o)),i(o,"checkTag",y,e(o)),o.touchPos=p(),o.touchPos_world=d(),o.touchPos_node=d(),o.paper=null,o.index=0,o}n(o,t);var s=o.prototype;return s.init=function(t){this.paper=t},s.onLoad=function(){this.addEvents()},s.onDestroy=function(){this.removeEvents()},s.addEvents=function(){this.node.on(u.TOUCH_MOVE,this.onTouchMove,this),this.node.on(u.TOUCH_START,this.onTouchStart,this),this.node.on(u.TOUCH_END,this.onTouchEnd,this)},s.removeEvents=function(){this.node.off(u.TOUCH_MOVE,this.onTouchMove,this),this.node.off(u.TOUCH_START,this.onTouchStart,this),this.node.off(u.TOUCH_END,this.onTouchEnd,this)},s.onTouchMove=function(t){t.propagationStopped=!0,t.touch.getUILocation(this.touchPos),this.touchPos_world.x=this.touchPos.x,this.touchPos_world.y=this.touchPos.y,this.node.parent.getComponent(a).convertToNodeSpaceAR(this.touchPos_world,this.touchPos_node),this.node.setPosition(this.touchPos_node.x,this.touchPos_node.y),this.paper.updateCtrls()},s.onTouchStart=function(){},s.onTouchEnd=function(){var t=this.paper.curCtrlPoint;t&&t.hideCheckTag(),this.paper.curCtrlPoint=this,this.showCheckTag()},s.reset=function(t,o,n){this.index=t,this.node.setPosition(d(o,n)),this.coordinate.string="P"+t+"(x:"+o+", y:"+n+")"},s.showCheckTag=function(){this.checkTag.active=!0},s.hideCheckTag=function(){this.checkTag.active=!1},o}(l)).prototype,"coordinate",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=o(g.prototype,"checkTag",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=g))||P));s._RF.pop()}}}));

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