(this.webpackJsonpfartmasterflex=this.webpackJsonpfartmasterflex||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports={"container-fluid":"Home_container-fluid__324ud","container-item":"Home_container-item__2a7Ji","input-required":"Home_input-required__peqKv","scroll-container":"Home_scroll-container__36FAP","scroll-container-timer":"Home_scroll-container-timer__Kv1nw",steps:"Home_steps__2nxdP","checkout-container":"Home_checkout-container__PunVU"}},,,,,,,function(e,t,n){e.exports={"image__logo--footer":"Footer_image__logo--footer__p3GB1","ftr-copyright":"Footer_ftr-copyright__2nI3q","icon-info":"Footer_icon-info__3SPH0"}},,,,,function(e,t,n){e.exports={button:"Button_button__2Lf63","button-primary":"Button_button-primary__1rm1L","button-continue":"Button_button-continue__1K9Wu","button-enabled":"Button_button-enabled__2asMO"}},function(e,t,n){},function(e,t,n){e.exports={logo:"Logo_logo__3IG6m"}},,function(e,t,n){e.exports=n.p+"static/media/hot-97.46c918e7.mp3"},function(e,t,n){e.exports=n.p+"static/media/full-throttle.0c2eea46.mp3"},function(e,t,n){e.exports=n.p+"static/media/loud-farts.2e33d75c.mp3"},function(e,t,n){e.exports=n.p+"static/media/yo-check-pants.455e9118.mp3"},function(e,t,n){e.exports=n.p+"static/media/bomb-drop.7f0f51b4.mp3"},function(e,t,n){e.exports={"about-txt":"About_about-txt__TzgRD"}},function(e,t,n){e.exports={item:"ProcessFart_item__31WgN","item-process":"ProcessFart_item-process__1b9WZ",spin:"ProcessFart_spin__oZaX2"}},,,function(e,t,n){e.exports=n(49)},,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(13),r=n.n(i),o=n(10),l=n(6),s=(n(46),n(35)),m=n(2),u=(n(47),n(12)),d=n.n(u),f=n(24),p=n.n(f),h=n(8),E=n.n(h),_=E.a.bind(p.a),b=function(e){var t=e.children,n=e.handleClick,a=e.type,i=e.className,r=e.continueButton,o=e.primary,l=e.accent,s=e.selectedFart,m=e.selectedTimer;return c.a.createElement("button",{type:a,onClick:n,className:_("button",i,{"button-primary":o,"button-continue":r,"button-accent":l,"button-enabled":"".concat(s&&m)})},t)};b.defaultPropTypes={type:"button"};var y=b,v=n(25),g=n.n(v),k=n(36),x=function(e){var t=e.dimensions,n=e.fill,a=e.identifier,i=e.onClick,r=e.styles,o=e.viewBox,l={play:["M112,111V401c0,17.44,17,28.52,31,20.16l247.9-148.37c12.12-7.25,12.12-26.33,0-33.58L143,90.84C129,82.48,112,93.56,112,111Z"],record:["M256 152a104 104 0 1 0 104 104 104 104 0 0 0-104-104zm0 128a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-272C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 376a128 128 0 1 1 128-128 128 128 0 0 1-128 128z"],info:["M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"]},s=t?{height:"".concat(t.height,"px"),width:"".concat(t.width,"px")}:null,m=n?Object(k.a)({},s,{fill:n}):t;return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:o||"0 0 1024 1024",className:r,onClick:i,fill:n,style:m},function(){var e=a.split(" "),t=[];return e.forEach((function(e){t.push(l[e].map((function(e,t){return c.a.createElement("path",{key:t,d:e})})))})),t}())},w=E.a.bind(g.a),T=function(e){var t=e.handleClick,n=e.isFart,a=e.items,i=e.selected,r=e.isTimer;return c.a.createElement(c.a.Fragment,null,a.map((function(e){return c.a.createElement("div",{key:e.key,onClick:function(){return t(e.name)},className:w("item",{"item-timer":r,"item-clicked":i===e.name})},i===e.name&&c.a.createElement(x,{identifier:"record",viewBox:"0 0 512 512",dimensions:{width:30,height:30},fill:"#e82e37",styles:"item-selected-txt"}),n&&c.a.createElement(x,{identifier:"play",viewBox:"0 0 512 512",dimensions:{width:60,height:60},fill:"#e82e37"}),c.a.createElement("p",{className:w("item-title",{"item-title-clicked":i===e.name})},e.name))})))},F=n(26),N=n.n(F),R=function(){var e=Object(l.c)(),t=Object(m.f)();return c.a.createElement("h3",{onClick:function(){t.push("/"),e({type:"RESET_FART"}),e({type:"RESET_TIMER"})},className:N.a.logo},"fM")},C=n(28),O=n.n(C),j=n(29),S=n.n(j),B=n(30),M=n.n(B),A=n(31),H=n.n(A),I=n(32),P=n.n(I),z="",L=[{key:1,name:"Hot 97",media:new Audio(O.a)},{key:2,name:"Full Throttle",media:new Audio(S.a)},{key:3,name:"Loud Farts",media:new Audio(M.a)},{key:4,name:"Yo! Check yo pants",media:new Audio(H.a)},{key:5,name:"Bomb Drop",media:new Audio(P.a)}],V=[{key:1,name:"15sec"},{key:2,name:"30sec"},{key:3,name:"1min"},{key:4,name:"1min 30secs"},{key:5,name:"2mins"}],W=function(e){switch(e){case"Hot 97":return L[0].media.play();case"Full Throttle":return L[1].media.play();case"Loud Farts":return L[2].media.play();case"Yo! Check yo pants":return L[3].media.play();case"Bomb Drop":return L[4].media.play()}},q=function(e){switch(e){case"15sec":return 15e3;case"30sec":return 3e4;case"1min":return 6e4;case"1min 30secs":return 9e4;case"2mins":return 12e4;default:return 0}},D=n(19),J=n.n(D),K=function(){var e=Object(m.f)();return c.a.createElement("footer",null,c.a.createElement("div",{onClick:function(){e.push("/about")},className:J.a["icon-info"]},c.a.createElement(x,{identifier:"info",viewBox:"0 0 300 512",dimensions:{width:20,height:20},fill:"#e82e37"})),c.a.createElement("div",{className:J.a["ftr-copyright"]},"FartMasterFlex \xa9 ",(new Date).getFullYear()))},Y=E.a.bind(d.a),Z=Object(l.b)((function(e){return{selectedFart:e.fartReducer,selectedTimer:e.timerReducer}}))((function(e){var t=e.selectedFart,n=e.selectedTimer,i=Object(m.f)(),r=Object(l.c)();return Object(a.useEffect)((function(){r({type:"RESET_FART"}),r({type:"RESET_TIMER"})}),[]),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"container-main"},c.a.createElement("div",{className:"heading-container"},c.a.createElement(R,null),c.a.createElement("h1",{className:"txt-heading"},"Fartmaster Flex")),c.a.createElement("h3",{className:d.a.steps},"Select fart:"),c.a.createElement("div",{className:d.a["scroll-container"]},c.a.createElement(T,{items:L,handleClick:function(e){r({type:"SET_FART",payload:e}),W(e)},selected:t,isFart:!0})),c.a.createElement("h3",{className:d.a.steps},"Select timer:"),c.a.createElement("div",{className:Y("scroll-container","scroll-container-timer")},c.a.createElement(T,{items:V,handleClick:function(e){r({type:"SET_TIMER",payload:e})},selected:n,isTimer:!0})),c.a.createElement("div",{className:"btn-checkout-container"},c.a.createElement(y,{type:"button",handleClick:function(){var e;t&&n&&(e=t,z=setTimeout((function(){W(e)}),q(n)),i.push("/makefart"))},selectedFart:t,selectedTimer:n,primary:!0},"Start Fart Timer")),c.a.createElement(K,null)))})),G=n(33),U=n.n(G),X=function(){return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"container-main"},c.a.createElement("div",{className:"heading-container"},c.a.createElement(R,null),c.a.createElement("h1",{className:"txt-heading"},"About Me")),c.a.createElement("p",{className:U.a["about-txt"]},"Hi, my name is Simran and I am 6 years old. My dad helped me build this site during the corona virus. I want to build games when I get older. I also like farts."),c.a.createElement(K,null)))},$=n(20),Q=n(34),ee=n.n(Q),te=E.a.bind(ee.a),ne=Object(l.b)((function(e){return{selectedFart:e.fartReducer,selectedTimer:e.timerReducer}}))((function(e){var t=e.selectedFart,n=e.selectedTimer,i=Object(a.useState)("Cancel Fart Mix"),r=Object($.a)(i,2),o=r[0],l=r[1],s=Object(a.useState)({primary:"primary"}),u=Object($.a)(s,2),d=u[0],f=u[1],p=Object(m.f)(),h="";return Object(a.useEffect)((function(){t&&n||p.push("/"),function(){var e=q(n);h=setTimeout((function(){l("Create New Fart Remix"),f({continueButton:"continue"})}),e)}()}),[]),Object(a.useEffect)((function(){return function(){clearTimeout(h)}}),[]),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"container-main"},c.a.createElement("div",{className:"heading-container"},c.a.createElement(R,null),c.a.createElement("h1",{className:"txt-heading"},"Fart Mix Processing")),c.a.createElement("div",{className:te("item",{"item-process":"Cancel Fart Mix"===o})},c.a.createElement(x,{identifier:"record",viewBox:"0 0 512 512",dimensions:{width:140,height:140},fill:"#e82e37"})),c.a.createElement("div",{className:"btn-checkout-container"},c.a.createElement(y,Object.assign({type:"button",handleClick:function(){clearTimeout(z),p.push("/")}},d),o)),c.a.createElement(K,null)))})),ae=function(){return c.a.createElement(s.a,null,c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,component:Z}),c.a.createElement(m.a,{path:"/makefart",exact:!0,component:ne}),c.a.createElement(m.a,{path:"/about",exact:!0,component:X})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FART":return t.payload;case"RESET_FART":return"";default:return e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TIMER":return t.payload;case"RESET_TIMER":return"";default:return e}},re=Object(o.b)({fartReducer:ce,timerReducer:ie}),oe=Object(o.c)(re);r.a.render(c.a.createElement(l.a,{store:oe},c.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[37,1,2]]]);
//# sourceMappingURL=main.842994c6.chunk.js.map