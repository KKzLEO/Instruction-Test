(this.webpackJsonpcode=this.webpackJsonpcode||[]).push([[0],[,,,function(e,t,n){e.exports={container:"tabItem_container__3IDGJ",icon:"tabItem_icon__2C4v1",icon__completed:"tabItem_icon__completed__WKVX9",icon__active:"tabItem_icon__active__2H6s2",icon__inactive:"tabItem_icon__inactive__30vrP",title:"tabItem_title__1WZIR",title__completed:"tabItem_title__completed__2ewrv",title__active:"tabItem_title__active__1CNkU",title__inactive:"tabItem_title__inactive__1TLV9"}},,,,,,function(e,t,n){e.exports={standard:"camera_standard__nF5uE",leftImage:"camera_leftImage__19A_e",rightImage:"camera_rightImage__KUxEe",container:"camera_container__ttjiX",title:"camera_title__3bhCM",divider:"camera_divider__2OcnB",imageContainer:"camera_imageContainer__T8KC1"}},,,,,function(e,t,n){e.exports={container:"footer_container__VQ2H1",confirmBtn:"footer_confirmBtn__2YC0z",skipBtn:"footer_skipBtn__21GKC"}},function(e,t,n){e.exports={container:"introduce_container__36Kkk",child:"introduce_child__1IOon",fade:"introduce_fade__1dpl4",fadeInOut:"introduce_fadeInOut__1A9hh"}},,,,,,function(e,t,n){e.exports={container:"header_container__mfbwC"}},function(e,t,n){e.exports={container:"tab_container__rR-sW"}},function(e,t,n){e.exports={container:"basic_container__ZOhf6"}},function(e,t,n){e.exports={img:"image_img__1iO8S"}},function(e,t,n){e.exports=n.p+"static/media/camera.83862cfc.png"},function(e,t,n){e.exports=n.p+"static/media/video.cdcc1d47.png"},function(e,t,n){e.exports=n.p+"static/media/put-flag-at-the-road.8b3e7c0c.png"},function(e,t,n){e.exports=n.p+"static/media/move-car.a7bacbe8.png"},function(e,t,n){e.exports={container:"main_container__3HZD9"}},,,function(e,t,n){e.exports=n(49)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),i=n.n(c),o=(n(37),n(38),n(39),n(40),n(41),n(42),n(4)),l=n(2),u=n(5),s=n(6),m=n(8),f=n(21),p=n.n(f),_=n(1),d=n(12),v=n.n(d),b=n(3),E=n.n(b),h=n(61),O=function(e){var t,n,a=e.isCompleted,c=e.isActive,i=e.number,o=e.children,l=e.handleTabClick,u=v()(E.a.icon,(t={},Object(_.a)(t,E.a.icon__inactive,!c),Object(_.a)(t,E.a.icon__completed,a),Object(_.a)(t,E.a.icon__active,c),t)),s=v()(E.a.title,(n={},Object(_.a)(n,E.a.title__inactive,!c),Object(_.a)(n,E.a.title__completed,a),Object(_.a)(n,E.a.title__active,c),n));return r.a.createElement("div",{className:E.a.container,onClick:function(){return l(i)}},r.a.createElement("div",{className:u},a?r.a.createElement(h.a,null):i),r.a.createElement("div",{className:s},o.props.children))},g=n(22),j=n.n(g),N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.activeTabNumber,n=e.handleTabClick;return r.a.createElement("div",{className:j.a.container},this.props.children.map((function(e,a){return r.a.createElement(O,{key:a,number:a+1,isActive:t>=a+1,isCompleted:t>a+1,handleTabClick:n},e)})))}}]),t}(a.PureComponent),k={START:-1,HINT:0,ONE:1,TWO:2,THREE:3,FOUR:4,END:5},y="https://line.me/R/ti/p/%40032vmcng";function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(_.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=r.a.createContext(),x=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).setStateByActiveNumber=function(){var e=n.state.activeNumber,t="",a=!1,r=n.nextPage;switch(e){case k.START:t="Skip",a=!0;break;case k.HINT:t="\u5df2\u4e86\u89e3",a=!0;break;case k.ONE:case k.TWO:case k.THREE:case k.FOUR:t="\u5df2\u5b8c\u6210",a=!0;break;case k.END:t="\u56de\u5230 LINE \u7d66\u8b66\u5bdf",a=!0,r=n.backToLineBot}n.setState({confirmBtnText:t,isShowConfirmBtn:a,handleClickConfirmBtn:r,isShowSkip:!1})},n.backToLineBot=function(){window.open(y)},n.setActiveNumber=function(e){n.setState({activeNumber:e})},n.prevPage=function(){n.setState((function(e){return{activeNumber:e.activeNumber-1}}))},n.nextPage=function(){n.setState((function(e){return{activeNumber:e.activeNumber+1}}))},n.state={activeNumber:k.START,setActiveNumber:n.setActiveNumber,prevPage:n.prevPage,nextPage:n.nextPage,confirmBtnText:"\u5df2\u4e86\u89e3",isShowConfirmBtn:!1,handleClickConfirmBtn:n.nextPage,isShowSkip:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setStateByActiveNumber()}},{key:"componentDidUpdate",value:function(e,t){this.setStateByActiveNumber()}},{key:"render",value:function(){return r.a.createElement(P.Provider,{value:C({},this.state)},this.props.children)}}]),t}(a.PureComponent),S=function(e){return function(t){return r.a.createElement(P.Consumer,null,(function(n){return r.a.createElement(e,Object.assign({},t,{mainCtx:n}))}))}},T=S((function(e){var t=e.mainCtx,n=t.activeNumber,a=t.setActiveNumber;return r.a.createElement("div",{className:p.a.container},r.a.createElement(N,{activeTabNumber:n,handleTabClick:a},r.a.createElement(O,null,"\u653e\u7f6e\u6545\u969c\u6a19\u8a8c"),r.a.createElement(O,null,"\u62cd\u651d\u5168\u666f"),r.a.createElement(O,null,"\u62cd\u651d\u78b0\u649e\u9ede\u8eca\u640d\u90e8\u4f4d"),r.a.createElement(O,null,"\u76e1\u901f\u5c07\u8eca\u79fb\u81f3\u5b89\u5168\u5730\u9ede"),r.a.createElement(O,null,"\u5b8c\u6210")))})),I=n(14),B=n.n(I),A=S((function(e){var t=e.mainCtx,n=t.nextPage,a=(t.prevPage,t.confirmBtnText),c=t.isShowConfirmBtn,i=t.handleClickConfirmBtn,o=t.isShowSkip;return r.a.createElement("div",{className:B.a.container},o&&r.a.createElement("span",{onClick:n,className:B.a.skipBtn},"Skip"),c&&r.a.createElement("button",{className:B.a.confirmBtn,onClick:i},a),r.a.createElement("h5",null,"\u203b\u6b64\u6559\u5b78\u4e26\u4e0d\u6703\u5b58\u653e\u4efb\u4f55\u60a8\u7684\u6a94\u6848\u53ca\u8cc7\u6599"),r.a.createElement("h5",null,"\u65b0\u5317\u5e02\u653f\u5e9c\u8b66\u5bdf\u5c40 - \u8f15\u5fae\u8eca\u798d\u62cd\u7167\u3001\u9304\u5f71\u4e94\u539f\u5247"))})),D=n(23),R=n.n(D),L=function(e){var t=e.children;return r.a.createElement("div",{className:R.a.container},t)},W=n(15),H=n.n(W);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var F,K=function(e){var t=e.children,n=e.onAnimationEnd,a=e.fade,c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach((function(t){Object(_.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:v()(H.a.container,Object(_.a)({},H.a.fade,a))},n&&{onAnimationEnd:n}),i=function(){return r.a.createElement("div",c,t.map((function(e,t){return r.a.createElement("div",{className:H.a.child,key:"intro_page-".concat(t)},e)})))};return r.a.createElement(L,null,r.a.createElement(i,null))},J=n(24),M=n.n(J),V=function(e){var t=e.title,n=e.imageSrc;return r.a.createElement(K,null,r.a.createElement("span",null,t),r.a.createElement("img",{className:M.a.img,src:n,alt:""}))},Z=n(9),z=n.n(Z),G=n(25),X=n.n(G),Q=n(26),Y=n.n(Q),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"image",t=document.createElement("input");t.type="file",t.accept="".concat(e,"/*"),t.capture="camera",t.click()},q=function(e){var t=e.title;return r.a.createElement(L,null,r.a.createElement("div",{className:z.a.container},r.a.createElement("div",{className:z.a.title},r.a.createElement("span",null,t)),r.a.createElement("div",{className:z.a.imageContainer},r.a.createElement("div",{className:z.a.leftImage,onClick:$},r.a.createElement("img",{src:X.a}),r.a.createElement("h4",null,"\u62cd\u7167")),r.a.createElement("div",{className:z.a.divider}),r.a.createElement("div",{className:z.a.rightImage,onClick:function(){return $("video")}},r.a.createElement("img",{src:Y.a}),r.a.createElement("h4",null,"\u9304\u5f71")))))},ee=n(27),te=n.n(ee),ne=n(28),ae=n.n(ne),re=function(e){var t=e.nextPage;return r.a.createElement(K,{fade:!0,onAnimationEnd:t},r.a.createElement("span",null,"\u767c\u751f\u8f15\u5fae\u8eca\u798d\u4e86\u55ce\uff1f"),r.a.createElement("span",null,"\u5225\u64d4\u5fc3\uff0c\u6b64\u6559\u5b78\u5c07\u6703\u7d66\u4e88\u60a8\u6b63\u78ba\u7684\u6307\u793a"))},ce=r.a.createElement(K,null,r.a.createElement("span",null,"\u8acb\u6ce8\u610f\u5b89\u5168"),r.a.createElement("span",null,"\u4e26\u4f9d\u7167\u4ee5\u4e0b\u6307\u793a\u64cd\u4f5c")),ie=r.a.createElement(V,{imageSrc:te.a,title:"\u8acb\u653e\u7f6e\u6545\u969c\u6a19\u8a8c"}),oe=r.a.createElement(q,{title:"\u62cd\u651d\u5168\u666f\uff08\u542b\u6a19\u7dda\uff09"}),le=r.a.createElement(q,{title:"\u62cd\u651d\u78b0\u649e\u9ede\u53ca\u8eca\u640d\u90e8\u4f4d"}),ue=r.a.createElement(V,{imageSrc:ae.a,title:"\u76e1\u901f\u5c07\u8eca\u79fb\u81f3\u5b89\u5168\u5730\u9ede"}),se=r.a.createElement(K,null,r.a.createElement("span",null,"\u5df2\u5b8c\u6210"),r.a.createElement("span",null,"\u8acb\u60a8\u4fdd\u5b58\u597d\u6a94\u6848"),r.a.createElement("span",null,"\u4e26\u63d0\u4f9b\u7d66\u76f8\u95dc\u55ae\u4f4d\u8655\u7406")),me=S((function(e){var t=e.mainCtx,n={activeNumber:t.activeNumber,nextPage:t.nextPage,prevPage:t.prevPage};return r.a.createElement(a.Fragment,null,function(e){var t=e.activeNumber,n=e.nextPage;switch(t){case k.START:return r.a.createElement(re,{nextPage:n});case k.HINT:return ce;case k.ONE:return ie;case k.TWO:return oe;case k.THREE:return le;case k.FOUR:return ue;case k.END:return se;default:return r.a.createElement(L,null)}}(n))})),fe=n(29),pe=n.n(fe),_e=n(30),de=n(17),ve=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={isOpendByLiff:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.liff.init((function(t){Object(de.isEmpty)(Object(de.result)(t,"context.userId"))||(e.setState({isOpendByLiff:!0}),window.liff.openWindow({url:"https://kkzleo.github.io/Instruction-Test/",external:!0}),window.liff.closeWindow())}))}},{key:"render",value:function(){return!this.state.isOpendByLiff&&r.a.createElement(x,null,r.a.createElement("div",{className:pe.a.container},r.a.createElement(T,null),r.a.createElement(me,null),r.a.createElement(A,null)))}}]),t}(a.PureComponent),be=(F="https://d.line-scdn.net/liff/1.0/sdk.js",function(e){var t=function(){return null};return function(n){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(s.a)(a).call(this,e))).state={isScriptLoaded:!1},t}return Object(m.a)(a,n),Object(l.a)(a,[{key:"render",value:function(){var n=this,a=Object(_e.a)(F)(t);return this.state.isScriptLoaded?r.a.createElement(e,this.props):r.a.createElement(a,{asyncScriptOnLoad:function(){n.setState({isScriptLoaded:!0})}})}}]),a}(a.PureComponent)})(ve);var Ee=function(){return r.a.createElement(be,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[32,1,2]]]);
//# sourceMappingURL=main.b4a33d9d.chunk.js.map