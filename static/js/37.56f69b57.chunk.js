(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[37],{103:function(t,e,n){"use strict";n.r(e),n.d(e,"bds_menu_action",(function(){return o}));var i=n(10),o=function(){function t(t){var e=this;Object(i.r)(this,t),this.openSubMenu=!1,this.stateSubMenu="close",this.delaySubMenu=!1,this.zIndex=0,this.delay=null,this.buttonText="",this.subMenu=!1,this.iconLeft=null,this.lipstick=!1,this.onCloseSubMenu=function(){e.stateSubMenu="close"}}return t.prototype.openSubMenuChanged=function(t){0==t&&(this.stateSubMenu="pending",this.delay=setTimeout(this.onCloseSubMenu,1e3)),1==t&&(clearTimeout(this.delay),this.delay=null,this.stateSubMenu="open")},t.prototype.stateSubMenuChanged=function(t){switch(t){case"open":case"pending":this.delaySubMenu=!0;break;case"close":this.delaySubMenu=!1}},t.prototype.render=function(){var t,e=this,n=this.iconLeft&&!this.subMenu,o=this.subMenu&&!this.iconLeft,u=this.iconLeft&&this.subMenu,s={zIndex:"".concat(this.zIndex)};return Object(i.h)("div",{class:{menuaction:!0},onMouseOver:function(){1==e.subMenu&&(e.zIndex=1,e.openSubMenu=!0)},onMouseOut:function(){1==e.subMenu&&(e.zIndex=0,e.openSubMenu=!1)}},Object(i.h)("button",{class:(t={menuaction__button:!0},t.menuaction__button__activeicleft=n,t.menuaction__button__activeicright=o,t.menuaction__button__activeicleftright=u,t.menuaction__button__lipstick=this.lipstick,t)},this.iconLeft&&Object(i.h)("bds-icon",{class:"icon-item",name:this.iconLeft,theme:"outline",size:"small"}),Object(i.h)("bds-typo",{class:"typo-item",variant:"fs-16",tag:"span"},this.buttonText),this.subMenu&&Object(i.h)("bds-icon",{class:"arrow-right",name:"arrow-right",theme:"outline",size:"small"})),this.subMenu&&Object(i.h)("div",{class:{menuaction__submenu:!0,menuaction__submenu__open:this.delaySubMenu},style:s},Object(i.h)("slot",null)))},Object.defineProperty(t,"watchers",{get:function(){return{openSubMenu:["openSubMenuChanged"],stateSubMenu:["stateSubMenuChanged"]}},enumerable:!1,configurable:!0}),t}();o.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); .menuaction{position:relative}.menuaction__button{display:grid;grid-template-columns:1fr;gap:12px;-ms-flex-align:center;align-items:center;background-color:#ffffff;border:0;border-radius:8px;padding:12px 18px;width:100%;text-align:left;cursor:pointer}.menuaction__button__activeicleft{grid-template-columns:auto 1fr}.menuaction__button__activeicright{grid-template-columns:1fr auto}.menuaction__button__activeicleftright{grid-template-columns:auto 1fr auto}.menuaction__button .icon-item{justify-self:start;color:#505f79}.menuaction__button .typo-item{justify-self:start;width:100%;color:#0a0f1a}.menuaction__button .arrow-right{justify-self:end;color:#0a0f1a}.menuaction__button__lipstick .icon-item{color:#a01c2c}.menuaction__button__lipstick .typo-item{color:#a01c2c}.menuaction__button__lipstick .arrow-right{color:#a01c2c}.menuaction__button:hover{background-color:#f3f6fa}.menuaction__submenu{position:absolute;top:-16px;left:100%;pointer-events:none;display:block;padding:16px 2px;background-color:#ffffff;border-radius:8px;-webkit-box-shadow:0px 4px 16px rgba(7, 71, 166, 0.12);box-shadow:0px 4px 16px rgba(7, 71, 166, 0.12);min-width:128px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s}.menuaction__submenu__open{pointer-events:auto;opacity:1}'}}]);