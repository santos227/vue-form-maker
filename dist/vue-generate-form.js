!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueGenerateForm=t():e.VueGenerateForm=t()}(window,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),n=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1],e.component("VueGenerateForm",o.default)},s={install:n,version:"1.0.8"};"undefined"!=typeof window&&window.Vue&&n(window.Vue),t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n=function(e){return e&&e.__esModule?e:{default:e}}(r(2));function s(e,t,r,o,s,u){var p=n.default[u](t,r,o,s),l=n.default.formItem(t,o,p);e.push(n.default.col(t,o,l))}t.default={props:{options:{type:Object,required:!0}},render:function(e){var t=this,r=this.options,u=r.formData;if(!r.formItem)return e("div");var p=r.formItem.map(function(r){var o=n.default[r.type],s=o?o.call(t,e,u,r,t):null,p=n.default.formItem(e,r,s);return n.default.col(e,r,p)});return r.submit&&s(p,e,u,r.submit,this,"submit"),r.reset&&s(p,e,u,r.reset,this,"reset"),e("Form",{ref:u,props:o({model:u},r.formProps),class:"vue-generate-form"},[e("Row",{props:r.rowProps},p)])}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n={input:function(e,t,r,s){var u=r.key?r.key:"",p=[];return r.children&&(p=r.children.map(function(r){var o=void 0;if("span"==r.type)o=e("span",{slot:r.slot},[r.text]);else{var u=n[r.type];o=u?u.call(s,e,t,r,s):null}return o})),e("Input",{props:o({value:u?t[u]:""},r.props),style:r.style,on:o({},r.events,{input:function(e){u&&(t[u]=e)}}),slot:r.slot},p)},button:function(e,t,r){return e("Button",{props:r.props,slot:r.slot,style:r.style,on:r.events},[r.text])},buttonGroup:function(e,t,r){var o=r.children.map(function(t){return e("Button",{props:t.props?t.props:t,slot:t.slot,style:t.style,on:t.events},[t.text])});return e("ButtonGroup",{props:r.props,style:r.style,slot:r.slot},[o])},reset:function(e,t,r,o){return e("Button",{props:r.props,style:r.style,slot:r.slot,on:{click:function(){o.$refs[t].resetFields()}}},[r.text])},submit:function(e,t,r,n){var s=[],u=e("Button",{props:r.props,style:r.style,on:{click:function(){n.$refs[t].validate(function(e){e?r.success.call(n,t):r.fail.call(n,t)})}}},[r.text]);if(s.push(u),r.reset){var p=e("Button",{props:r.reset.props,style:o({marginLeft:"10px"},r.style),on:{click:function(){n.$refs[t].resetFields()}}},[r.reset.text]);s.push(p)}return e("div",s)},icon:s,radio:function(e,t,r){var n=r.key?r.key:"";return e("Radio",{props:o({value:!!n&&t[n]},r.props),style:r.style,slot:r.slot,on:o({},r.events,{input:function(e){n&&(t[n]=e)}})},[r.text])},radioGroup:function(e,t,r){var n=[],s=r.key?r.key:"";return r.children&&(n=r.children.map(function(t){return e("Radio",{props:t.props?t.props:t},[t.text])})),e("RadioGroup",{props:o({value:s?t[s]:""},r.props),style:r.style,slot:r.slot,on:o({},r.events,{input:function(e){s&&(t[s]=e)}})},[n])},checkbox:function(e,t,r){var n=r.key?r.key:"";return e("Checkbox",{props:o({value:n?t[n]:""},r.props),style:r.style,slot:r.slot,on:o({},r.events,{input:function(e){n&&(t[n]=e)}})},[r.text])},checkboxGroup:function(e,t,r,n){var s=[],u=r.key?r.key:"";return r.children&&(s=r.children.map(function(t){return e("Checkbox",{props:t.props?t.props:t},[t.text])})),e("CheckboxGroup",{props:o({value:u?t[u]:[]},r.props),style:r.style,slot:r.slot,on:o({},r.events,{input:function(e){u&&(t[u]=e)}})},[s])},switch:function(e,t,r){var n=r.key?r.key:"",u=[];return r.children&&(u=r.children.map(function(r){var o=void 0;return"icon"==r.type?o=s(e,t,r):"span"==r.type&&(o=e("span",{slot:r.slot},[r.text])),o})),e("i-switch",{props:o({value:!!n&&t[n]},r.props),style:r.style,slot:r.slot,on:o({},r.events,{input:function(e){n&&(t[n]=e)}})},u)},select:function(e,t,r){var n=r.key?r.key:"",s=[];return r.children&&(s=r.children.map(function(t){return"optionGroup"==t.type?e("OptionGroup",{props:t.props?t.props:t},t.children.map(function(t){return e("Option",{props:t.props?t.props:t})})):e("Option",{props:t.props?t.props:t})})),e("Select",{props:o({value:t[n]},r.props),style:r.style,on:o({},r.events,{input:function(e){n&&(t[n]=e)}}),slot:r.slot},s)},slider:function(e,t,r){var n=r.key?r.key:"";return e("Slider",{props:o({value:t[n]},r.props),style:r.style,slot:r.slot,on:o({},r.events,{input:function(e){n&&(t[n]=e)}})})},date:function(e,t,r){var n=r.key?r.key:"",s=r.props.type;return e("DatePicker",{props:o({value:n?t[n]:""},r.props),style:r.style,slot:r.slot,on:o({},r.events,{input:function(e){n&&(s.includes("datetime")?Array.isArray(e)?t[n]=e?e.map(function(e){return e?e.toLocaleDateString()+" "+e.toTimeString().split(" ")[0]:""}):[]:t[n]=e?e.toLocaleDateString()+" "+e.toTimeString().split(" ")[0]:"":Array.isArray(e)?t[n]=e?e.map(function(e){return e?e.toLocaleDateString():""}):[]:t[n]=e?e.toLocaleDateString():"")}})})},time:function(e,t,r){var n=r.key?r.key:"";return e("TimePicker",{props:o({value:n?t[n]:""},r.props),style:r.style,slot:r.slot,on:o({},r.events,{input:function(e){n&&(t[n]=e)}})})},cascader:function(e,t,r){var n=r.key?r.key:"";return e("Cascader",{props:o({value:n?t[n]:[]},r.props),style:r.style,slot:r.slot,on:o({},r.events,{input:function(e){n&&(t[n]=e)}})})},inputNumber:function(e,t,r){var n=r.key?r.key:"";return e("InputNumber",{props:o({value:n?t[n]:null},r.props),style:r.style,slot:r.slot,on:o({},r.events,{input:function(e){n&&(t[n]=e)}})})},rate:function(e,t,r){var n=r.key?r.key:"";return e("Rate",{props:o({value:n?t[n]:0},r.props),slot:r.slot,style:r.style,on:o({},r.events,{input:function(e){n&&(t[n]=e)}})})},upload:function(e,t,r,o){var s=[];return r.children&&(s=r.children.map(function(r){var s=n[r.type];return s?s.call(o,e,t,r,o):null})),e("Upload",{props:r.props,style:r.style,slot:r.slot},s)},colorPicker:function(e,t,r){var n=r.key?r.key:"";return e("ColorPicker",{props:o({value:n?t[n]:""},r.props),style:r.style,slot:r.slot,on:o({},r.events,{input:function(e){n&&(t[n]=e)}})})},col:function(e,t,r){return e("Col",{props:{span:t.span,push:t.push,pull:t.pull,offset:t.offset,order:t.order,"class-name":t["class-name"],xs:t.xs,sm:t.sm,md:t.md,lg:t.lg}},[r])},formItem:function(e,t,r){return e("FormItem",{props:{label:t.label,rules:t.rules,prop:t.key?t.key:"","label-width":t["label-width"],"label-for":t["label-for"],error:t.error,"show-message":t["show-message"]}},[r])}};function s(e,t,r){return e("Icon",{props:r.props,style:r.style,slot:r.slot})}t.default=n}])});
//# sourceMappingURL=vue-generate-form.js.map