(()=>{"use strict";var t={426:(t,i,e)=>{e.d(i,{Z:()=>o});var n=e(81),s=e.n(n),r=e(645),a=e.n(r)()(s());a.push([t.id,"body {\n    margin: 0;\n    background-image: linear-gradient(0deg, #CCC9DC, #0C1821);\n}\n\ncanvas {\n    vertical-align: bottom;\n}\n\n#nebula {\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n\ncanvas + div {\n    position: absolute;\n    top: 0;\n    right: 12px;\n    font-size: 2.5vw;\n    font-family: 'Arial';\n    color: white;\n}\n\n@media screen and (max-width: 1000px){\n    canvas + div {\n        font-size: 24px;\n        top: 12px;\n        right: 0;\n        text-align: center;\n        width: 100%;\n    }\n}",""]);const o=a},645:t=>{t.exports=function(t){var i=[];return i.toString=function(){return this.map((function(i){var e="",n=void 0!==i[5];return i[4]&&(e+="@supports (".concat(i[4],") {")),i[2]&&(e+="@media ".concat(i[2]," {")),n&&(e+="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {")),e+=t(i),n&&(e+="}"),i[2]&&(e+="}"),i[4]&&(e+="}"),e})).join("")},i.i=function(t,e,n,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var o=0;o<this.length;o++){var h=this[o][0];null!=h&&(a[h]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);n&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),i.push(l))}},i}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var i=[];function e(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function n(t,n){for(var r={},a=[],o=0;o<t.length;o++){var h=t[o],c=n.base?h[0]+n.base:h[0],l=r[c]||0,d="".concat(c," ").concat(l);r[c]=l+1;var u=e(d),f={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(-1!==u)i[u].references++,i[u].updater(f);else{var y=s(f,n);n.byIndex=o,i.splice(o,0,{identifier:d,updater:y,references:1})}a.push(d)}return a}function s(t,i){var e=i.domAPI(i);return e.update(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap&&i.supports===t.supports&&i.layer===t.layer)return;e.update(t=i)}else e.remove()}}t.exports=function(t,s){var r=n(t=t||[],s=s||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var o=e(r[a]);i[o].references--}for(var h=n(t,s),c=0;c<r.length;c++){var l=e(r[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=h}}},569:t=>{var i={};t.exports=function(t,e){var n=function(t){if(void 0===i[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}i[t]=e}return i[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}},216:t=>{t.exports=function(t){var i=document.createElement("style");return t.setAttributes(i,t.attributes),t.insert(i,t.options),i}},565:(t,i,e)=>{t.exports=function(t){var i=e.nc;i&&t.setAttribute("nonce",i)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var i=t.insertStyleElement(t);return{update:function(e){!function(t,i,e){var n="";e.supports&&(n+="@supports (".concat(e.supports,") {")),e.media&&(n+="@media ".concat(e.media," {"));var s=void 0!==e.layer;s&&(n+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),n+=e.css,s&&(n+="}"),e.media&&(n+="}"),e.supports&&(n+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),i.styleTagTransform(n,t,i.options)}(i,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)}}}},589:t=>{t.exports=function(t,i){if(i.styleSheet)i.styleSheet.cssText=t;else{for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(document.createTextNode(t))}}}},i={};function e(n){var s=i[n];if(void 0!==s)return s.exports;var r=i[n]={id:n,exports:{}};return t[n](r,r.exports,e),r.exports}e.n=t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},e.d=(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},e.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),e.nc=void 0,(()=>{var t=e(379),i=e.n(t),n=e(795),s=e.n(n),r=e(569),a=e.n(r),o=e(565),h=e.n(o),c=e(216),l=e.n(c),d=e(589),u=e.n(d),f=e(426),y={};y.styleTagTransform=u(),y.setAttributes=h(),y.insert=a().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=l(),i()(f.Z,y),f.Z&&f.Z.locals&&f.Z.locals;const p=document.querySelector("canvas"),x=p.getContext("2d"),g=document.getElementById("nebula"),v=g.getContext("2d");p.width=innerWidth,p.height=innerHeight,g.width=innerWidth,g.height=innerHeight;const m=new Image;m.src="nebula.png";const w=()=>{const t=m.height/m.width,i=window.innerWidth*t;v.drawImage(m,0,(window.innerHeight-i)/2,window.innerWidth,i)};m.addEventListener("load",(()=>{w()}),!1),window.addEventListener("resize",(()=>{v.reset(),p.width=innerWidth,p.height=innerHeight,g.width=innerWidth,g.height=innerHeight}));const b=["#FFFFFF","#0C1821","#1B2A41","#324A5F","#CCC9DC"];class M{constructor(t){this.data=t,this.before=null,this.after=null}}class C{constructor(){this.head=null,this.tail=null,this.length=0,this.maxLength=Math.floor(12*Math.random()+2)}enqueue(t){const i=new M({x:t.x,y:t.y,radius:t.radius});null===this.head&&null===this.tail?(this.head=i,this.tail=i,this.length+=1):(this.length===this.maxLength&&this.dequeue(),this.tail.after=i,i.before=this.tail,this.tail=i,this.length+=1)}dequeue(){this.head=this.head.after,this.head.before=null,this.length-=1}}function T(t,i,e,n){const[s,r]=t,[a,o]=i,[h,c]=e,[l,d]=n,u=(c-d)*(a-l)+(l-h)*(o-d),f=((c-d)*(s-l)+(l-h)*(r-d))/u,y=((d-o)*(s-l)+(a-l)*(r-d))/u;return f>=0&&y>=0&&1-f-y>=0}const F=(t,i)=>{const e=p.width/2-t,n=p.height/2-i;return t>p.width/2&&i>p.height/2?e/n:t>p.width/2||i>p.height/2?e/n*-1:e/n};class S{constructor(t,i,e){this.x=t,this.y=i,this.color="red",this.activeColor=b[Math.floor(5*Math.random()+1)],this.mobile=!!e,this.radius=1*Math.random()+1,this.centered=!1,this.slope=(p.height/2-i)/(p.width/2-t),this.velocity={x:F(this.x,this.y),y:1},this.oldPositions=new C}draw(){if(this.mobile&&this.oldPositions.enqueue({x:this.x,y:this.y,radius:this.radius}),this.oldPositions.length>0){let t=this.oldPositions.tail;for(;null!==t.before;)T([t.data.x,t.data.y],[P.a.x,P.a.y],[P.b.x,P.b.y],[P.c.x,P.c.y])?this.color=this.activeColor:this.color="red",x.beginPath(),x.arc(t.data.x,t.data.y,t.data.radius,0,2*Math.PI,!1),x.fillStyle=this.color,x.fill(),x.strokeStyle=this.color,x.stroke(),t=t.before}T([this.x,this.y],[P.a.x,P.a.y],[P.b.x,P.b.y],[P.c.x,P.c.y])?this.color=this.activeColor:this.color="red",x.beginPath(),x.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),x.fillStyle=this.color,x.fill(),x.strokeStyle=this.color,x.stroke()}update(){this.mobile&&(this.radius-.025<0?this.centered=!0:this.radius=this.radius-.025,this.x-this.velocity.x>p.width/2-.25?this.x-=this.velocity.x:this.x+this.velocity.x<p.width/2+.25?this.x+=this.velocity.x:this.centered=!0,this.y-this.velocity.y>p.height/2+.25?this.y-=this.velocity.y:this.y+this.velocity.y<p.height/2-.25?this.y+=this.velocity.y:this.centered=!0),this.draw()}}const P=new class{constructor(t){this.a={x:t.x,y:t.y,radians:10.476143473464266},this.b={x:this.a.x+100,y:this.a.y+100,radians:5.784247455941374},this.c={x:this.b.x-200,y:this.b.y,radians:4.013302743504613},this.velocity={a:{x:.0125,y:.0125},b:{x:-.0125,y:.0125},c:{x:.0125,y:-.0125}}}draw(){x.beginPath(),x.moveTo(this.a.x,this.a.y),x.lineTo(this.b.x,this.b.y),x.lineTo(this.c.x,this.c.y),x.lineTo(this.a.x,this.a.y),x.fillStyle="black",x.fill(),x.strokeStyle="#FFFFFF80",x.stroke(),v.reset(),v.beginPath(),v.moveTo(this.a.x,this.a.y),v.lineTo(this.b.x,this.b.y),v.lineTo(this.c.x,this.c.y),v.lineTo(this.a.x,this.a.y),v.clip(),w()}update(){this.a.radians+=this.velocity.a.x,this.b.radians+=this.velocity.b.x,this.c.radians+=this.velocity.b.x,this.a.x=p.width/2+Math.cos(this.a.radians+.75)*p.width/3,this.a.y=p.height/2+Math.sin(this.a.radians)*p.height/2,this.b.x=p.width/2+Math.cos(this.b.radians)*p.width/3,this.b.y=p.height/2+Math.sin(this.b.radians)*p.height/2,this.c.x=p.width/2+Math.cos(this.c.radians)*p.width/3,this.c.y=p.height/2+Math.sin(this.c.radians)*p.height/2,this.draw()}}(p.width/2,p.height/2);let I=[],A=[];for(let t=0;t<1;t+=1){const t=Math.random()*p.width/2+p.width/4,i=Math.random()*p.height,e=Math.floor(2*Math.random()),n=new S(t,i,0);1===e&&A.push(n),I.push(n)}const $=I[0];!function t(){requestAnimationFrame(t),x.clearRect(0,0,p.width,p.height),x.font="12px Arial",x.fillStyle="white",x.fillText(`height: ${p.height}, width: ${p.width}`,12,12),x.fillText(`n-height: ${g.height}, width: ${g.width}`,12,30),x.fillText(`w-height: ${window.innerHeight}, w-width: ${window.innerWidth}`,12,48),x.fillText(`star count: ${I.length}`,12,66),x.fillText(`random star: ${$.x}, ${$.y}`,12,84),x.fillText(`random star color: ${$.color}`,12,102),P.update(),x.save();for(let t=0;t<I.length;t+=1)if(I[t].draw(),I[t].centered){I=I.slice(0,t).concat(I.slice(t+1));let i=Math.random()*p.width,e=Math.random()*p.height;I.push(new S(i,e,!0))}x.restore()}()})()})();