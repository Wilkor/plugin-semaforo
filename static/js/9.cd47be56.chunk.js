(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[9],{58:function(t,e,o){"use strict";o.r(e),o.d(e,"bds_accordion_group",(function(){return c}));var n=o(9),r=function(t,e,o,n){function r(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,i){function c(t){try{l(n.next(t))}catch(e){i(e)}}function a(t){try{l(n.throw(t))}catch(e){i(e)}}function l(t){t.done?o(t.value):r(t.value).then(c,a)}l((n=n.apply(t,e||[])).next())}))},i=function(t,e){var o,n,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(t){return function(e){return l([t,e])}}function l(i){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,n=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(a){i=[6,a],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},c=function(){function t(t){Object(n.r)(this,t),this.accordionElement=null,this.collapse="single"}return t.prototype.closeAll=function(t){return r(this,void 0,void 0,(function(){var e;return i(this,(function(o){if("multiple"!=this.collapse)for(e=0;e<this.accordionElement.length;e++)t!=e&&this.accordionElement[e].close();return[2]}))}))},t.prototype.componentWillRender=function(){this.accordionElement=this.element.getElementsByTagName("bds-accordion");for(var t=0;t<this.accordionElement.length;t++)this.accordionElement[t].reciveNumber(t)},t.prototype.render=function(){return Object(n.h)("div",{class:"accordion_group"},Object(n.h)("slot",null))},Object.defineProperty(t.prototype,"element",{get:function(){return Object(n.g)(this)},enumerable:!1,configurable:!0}),t}();c.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); .accordion_header{display:grid;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:#202c44;cursor:pointer}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:#c226fb}.accordion_header .accButton:hover{background-color:#f2f2f2}.accordion_header .accButton:active{background-color:#e6e6e6}.accordion_body{height:0;overflow:hidden;border-bottom:1px solid #b9cbd3;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.accordion_body .container{padding:0 24px 48px;position:relative;color:#202c44}'}}]);
//# sourceMappingURL=9.cd47be56.chunk.js.map