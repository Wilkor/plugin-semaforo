(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[55],{124:function(e,t,s){"use strict";s.r(t),s.d(t,"bds_switch",(function(){return r}));var i=s(10),o=0,r=function(){function e(e){var t=this;Object(i.r)(this,e),this.bdsChange=Object(i.c)(this,"bdsChange",7),this.size="standard",this.checked=!1,this.disabled=!1,this.dataTest=null,this.onClick=function(){t.checked=!t.checked},this.refNativeInput=function(e){t.nativeInput=e},this.getStyleState=function(){return t.checked&&!t.disabled?"slider--selected":t.checked||t.disabled?t.checked&&t.disabled?"slider--selected-disabled":!t.checked&&t.disabled?"slider--deselected-disabled":"":"slider--deselected"}}return e.prototype.connectedCallback=function(){this.switchId=this.refer||"bds-switch-".concat(o++)},e.prototype.checkedChanged=function(e){this.bdsChange.emit({checked:e})},e.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)},e.prototype.getValue=function(){return Promise.resolve(this.nativeInput.checked)},e.prototype.getSizeClass=function(){return"switch switch--size-".concat(this.size," ")},e.prototype.getSizeSliderClass=function(){return"slider slider--size-".concat(this.size," round ")},e.prototype.render=function(){var e,t,s=this.getSizeClass(),o=this.getSizeSliderClass(),r=this.getStyleState();return Object(i.h)("label",{class:(e={},e[s]=!0,e)},Object(i.h)("input",{type:"checkbox",ref:this.refNativeInput,id:this.switchId,name:this.name,onClick:this.onClick,checked:this.checked,disabled:this.disabled,"data-test":this.dataTest}),Object(i.h)("span",{class:(t={},t[o]=!0,t[r]=!0,t)}))},Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedChanged"]}},enumerable:!1,configurable:!0}),e}();r.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); .switch{position:relative;display:inline-block}.switch--size-tall{width:56px;height:32px}.switch--size-standard{width:42px;height:24px}.switch--size-short{width:32px;height:18px}.switch input{opacity:100;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#b9cbd3;-webkit-transition:0.4s;transition:0.4s;border-radius:34px}.slider--size-tall::before{position:absolute;content:" ";left:4px;bottom:4px;top:4px;background-color:#ffffff;-webkit-transition:0.4s;transition:0.4s;border-radius:50%;width:24px;height:24px}.slider--size-standard::before{position:absolute;content:" ";left:3px;bottom:3px;top:3px;background-color:#ffffff;-webkit-transition:0.4s;transition:0.4s;border-radius:50%;width:18px;height:18px}.slider--size-short::before{position:absolute;content:" ";left:2.25px;bottom:2.25px;top:2.25px;background-color:#ffffff;-webkit-transition:0.4s;transition:0.4s;border-radius:50%;width:13.5px;height:13.5px}.slider--deselected-disabled{cursor:not-allowed;background-color:#d2dfe6}input:checked+.slider{background-color:#3f7de8}input:checked+.slider--selected-disabled{cursor:not-allowed;background-color:#b3d4ff}input:focus+.slider{-webkit-box-shadow:0 0 1px #3f7de8;box-shadow:0 0 1px #3f7de8}input:focus+.slider--selected-disabled{-webkit-box-shadow:0 0 1px #b9cbd3;box-shadow:0 0 1px #b9cbd3}input:focus+.slider--deselected-disabled{-webkit-box-shadow:0 0 1px #d2dfe6;box-shadow:0 0 1px #d2dfe6}input:checked+.slider--size-tall::before{-webkit-transform:translateX(24px);-ms-transform:translateX(24px);transform:translateX(24px)}input:checked+.slider--size-standard::before{-webkit-transform:translateX(18px);-ms-transform:translateX(18px);transform:translateX(18px)}input:checked+.slider--size-short::before{-webkit-transform:translateX(13.75px);-ms-transform:translateX(13.75px);transform:translateX(13.75px)}'}}]);