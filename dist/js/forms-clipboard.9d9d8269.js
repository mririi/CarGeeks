(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["forms-clipboard"],{"4eb5":function(t,e,o){var r=o("6981"),n={autoSetContainer:!1,appendToBody:!0},a={install:function(t){var e="3."===t.version.slice(0,2)?t.config.globalProperties:t.prototype;e.$clipboardConfig=n,e.$copyText=function(t,e){return new Promise((function(o,a){var s=document.createElement("button"),i=new r(s,{text:function(){return t},action:function(){return"copy"},container:"object"===typeof e?e:document.body});i.on("success",(function(t){i.destroy(),o(t)})),i.on("error",(function(t){i.destroy(),a(t)})),n.appendToBody&&document.body.appendChild(s),s.click(),n.appendToBody&&document.body.removeChild(s)}))},t.directive("clipboard",{bind:function(t,e,o){if("success"===e.arg)t._vClipboard_success=e.value;else if("error"===e.arg)t._vClipboard_error=e.value;else{var a=new r(t,{text:function(){return e.value},action:function(){return"cut"===e.arg?"cut":"copy"},container:n.autoSetContainer?t:void 0});a.on("success",(function(e){var o=t._vClipboard_success;o&&o(e)})),a.on("error",(function(e){var o=t._vClipboard_error;o&&o(e)})),t._vClipboard=a}},update:function(t,e){"success"===e.arg?t._vClipboard_success=e.value:"error"===e.arg?t._vClipboard_error=e.value:(t._vClipboard.text=function(){return e.value},t._vClipboard.action=function(){return"cut"===e.arg?"cut":"copy"})},unbind:function(t,e){t._vClipboard&&("success"===e.arg?delete t._vClipboard_success:"error"===e.arg?delete t._vClipboard_error:(t._vClipboard.destroy(),delete t._vClipboard))}})},config:n};t.exports=a},6981:function(t,e,o){
/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function(e,o){t.exports=o()}(0,(function(){return e={686:function(t,e,o){"use strict";o.d(e,{default:function(){return b}});e=o(279);var r=o.n(e),n=(e=o(370),o.n(e)),a=(e=o(817),o.n(e));function s(t){try{return document.execCommand(t)}catch(t){return}}var i=function(t){return t=a()(t),s("cut"),t},c=function(t){var e,o,r,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body},i="";return"string"==typeof t?(e=t,o="rtl"===document.documentElement.getAttribute("dir"),(r=document.createElement("textarea")).style.fontSize="12pt",r.style.border="0",r.style.padding="0",r.style.margin="0",r.style.position="absolute",r.style[o?"right":"left"]="-9999px",o=window.pageYOffset||document.documentElement.scrollTop,r.style.top="".concat(o,"px"),r.setAttribute("readonly",""),r.value=e,r=r,n.container.appendChild(r),i=a()(r),s("copy"),r.remove()):(i=a()(t),s("copy")),i};function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.action,o=void 0===e?"copy":e,r=t.container;e=t.target,t=t.text;if("copy"!==o&&"cut"!==o)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==e){if(!e||"object"!==l(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===o&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===o&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return t?c(t,{container:r}):e?"cut"===o?i(e):c(e,{container:r}):void 0};function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(e){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var t,r=v(e);return t=o?(t=v(this).constructor,Reflect.construct(r,arguments,t)):r.apply(this,arguments),r=this,!(t=t)||"object"!==d(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(r):t}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){if(t="data-clipboard-".concat(t),e.hasAttribute(t))return e.getAttribute(t)}var b=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(s,r());var t,e,o,a=h(s);function s(t,e){var o;return function(t){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}(this),(o=a.call(this)).resolveOptions(e),o.listenClick(t),o}return t=s,o=[{key:"copy",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body};return c(t,e)}},{key:"cut",value:function(t){return i(t)}},{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e=(t="string"==typeof t?[t]:t,!!document.queryCommandSupported);return t.forEach((function(t){e=e&&!!document.queryCommandSupported(t)})),e}}],(e=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=n()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,o=this.action(e)||"copy";t=u({action:o,container:this.container,target:this.target(e),text:this.text(e)});this.emit(t?"success":"error",{action:o,text:t,trigger:e,clearSelection:function(){e&&e.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return m("action",t)}},{key:"defaultTarget",value:function(t){if(t=m("target",t),t)return document.querySelector(t)}},{key:"defaultText",value:function(t){return m("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&p(t.prototype,e),o&&p(t,o),s}()},828:function(t){var e;"undefined"==typeof Element||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,o){var r=o(828);function n(t,e,o,n,a){var s=function(t,e,o,n){return function(o){o.delegateTarget=r(o.target,e),o.delegateTarget&&n.call(t,o)}}.apply(this,arguments);return t.addEventListener(o,s,a),{destroy:function(){t.removeEventListener(o,s,a)}}}t.exports=function(t,e,o,r,a){return"function"==typeof t.addEventListener?n.apply(null,arguments):"function"==typeof o?n.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return n(t,e,o,r,a)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var o=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===o||"[object HTMLCollection]"===o)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,o){var r=o(879),n=o(438);t.exports=function(t,e,o){if(!t&&!e&&!o)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(o))throw new TypeError("Third argument must be a Function");if(r.node(t))return l=e,u=o,(c=t).addEventListener(l,u),{destroy:function(){c.removeEventListener(l,u)}};if(r.nodeList(t))return a=t,s=e,i=o,Array.prototype.forEach.call(a,(function(t){t.addEventListener(s,i)})),{destroy:function(){Array.prototype.forEach.call(a,(function(t){t.removeEventListener(s,i)}))}};if(r.string(t))return t=t,e=e,o=o,n(document.body,t,e,o);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var a,s,i,c,l,u}},817:function(t){t.exports=function(t){var e,o="SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),o=window.getSelection(),(e=document.createRange()).selectNodeContents(t),o.removeAllRanges(),o.addRange(e),o.toString());return o}},279:function(t){function e(){}e.prototype={on:function(t,e,o){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:o}),this},once:function(t,e,o){var r=this;function n(){r.off(t,n),e.apply(o,arguments)}return n._=e,this.on(t,n,o)},emit:function(t){for(var e=[].slice.call(arguments,1),o=((this.e||(this.e={}))[t]||[]).slice(),r=0,n=o.length;r<n;r++)o[r].fn.apply(o[r].ctx,e);return this},off:function(t,e){var o=this.e||(this.e={}),r=o[t],n=[];if(r&&e)for(var a=0,s=r.length;a<s;a++)r[a].fn!==e&&r[a].fn._!==e&&n.push(r[a]);return n.length?o[t]=n:delete o[t],this}},t.exports=e,t.exports.TinyEmitter=e}},o={},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,{a:o}),o},t.d=function(e,o){for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t(686).default;function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{}};return e[r](n,n.exports,t),n.exports}var e,o}))},c89d:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("portal",{attrs:{to:"breadcrumb"}},[o("ul",{staticClass:"navbar-nav flex-row"},[o("li",[o("div",{staticClass:"page-header"},[o("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[o("ol",{staticClass:"breadcrumb"},[o("li",{staticClass:"breadcrumb-item"},[o("a",{attrs:{href:"javascript:;"}},[t._v("Forms")])]),o("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[o("span",[t._v("Clipboard")])])])])])])])]),o("div",{staticClass:"container"},[o("div",{staticClass:"nav sidenav"},[o("scrollactive",{staticClass:"sidenav-content",attrs:{tag:"div","active-class":"active",offset:120,modifyUrl:!1,highlightFirstItem:!0}},[o("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#fclCopyInput"}},[t._v("Copy form Input")]),o("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#fclCopyTextarea"}},[t._v("Copy form Textarea")]),o("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#fclCoyParagraph"}},[t._v("Copy Text from Paragraph")]),o("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#fclAdvance"}},[t._v("Advanced")])])],1),o("div",{staticClass:"row layout-top-spacing"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"},[o("svg",{staticClass:"feather feather-bell",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("path",{attrs:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}}),o("path",{attrs:{d:"M13.73 21a2 2 0 0 1-3.46 0"}})]),t._v(" Documentation: "),o("a",{staticClass:"text-info",attrs:{target:"_blank",href:"https://www.npmjs.com/package/vue-clipboard2"}},[t._v(" https://www.npmjs.com/package/vue-clipboard2 ")])])])]),o("div",{staticClass:"row layout-top-spacing"},[o("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"fclCopyInput"}},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(0),o("div",{staticClass:"panel-body clipboard-copy-input"},[o("div",{staticClass:"clipboard"},[o("b-form",{staticClass:"form-horizontal"},[o("b-input",{staticClass:"mb-4",attrs:{value:"http://www.admin-dashboard.com"},model:{value:t.message1,callback:function(e){t.message1=e},expression:"message1"}}),o("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.message1,expression:"message1",arg:"copy"}],staticClass:"mb-1 mx-1",attrs:{variant:"primary"},on:{click:function(e){return t.show_message()}}},[o("svg",{staticClass:"feather feather-copy",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("rect",{attrs:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}}),o("path",{attrs:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}})]),t._v(" Copy from Input ")]),o("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.message1,expression:"message1",arg:"copy"}],staticClass:"mb-1 mx-1",attrs:{variant:"dark"},on:{click:function(e){return t.show_message()},blur:function(e){t.message1=""}}},[o("svg",{staticClass:"feather feather-edit-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("path",{attrs:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}})]),t._v(" Cut from Input ")])],1)],1),o("div",{staticClass:"code-section-container show-code"},[o("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code1")}}},[o("span",[t._v("Code")])]),t.code_arr.includes("code1")?o("div",{staticClass:"code-section text-left"},[o("highlight",[o("pre",[t._v('<div class="clipboard">\n    <b-form class="form-horizontal">\n        <b-input class="mb-4" value="http://www.admin-dashboard.com" v-model="message1"></b-input>\n        <b-button variant="primary" class="mb-1 mx-1" v-clipboard:copy="message1" @click="show_message();">\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy from Input\n        </b-button>\n        <b-button variant="dark" class="mb-1 mx-1" v-clipboard:copy="message1" @click="show_message();" @blur="message1 = \'\';">\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Cut from Input\n        </b-button>\n    </b-form>\n</div>\n')])])],1):t._e()],1)])])]),o("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"fclCopyTextarea"}},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(1),o("div",{staticClass:"panel-body clipboard-copy-textarea"},[o("div",{staticClass:"clipboard"},[o("b-form",{staticClass:"form-horizontal"},[o("b-textarea",{staticClass:"mb-4",attrs:{rows:"3"},model:{value:t.message2,callback:function(e){t.message2=e},expression:"message2"}},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit...")]),o("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.message2,expression:"message2",arg:"copy"}],staticClass:"mb-1 mx-1",attrs:{variant:"primary"},on:{click:function(e){return t.show_message()}}},[o("svg",{staticClass:"feather feather-copy",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("rect",{attrs:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}}),o("path",{attrs:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}})]),t._v(" Copy from Input ")]),o("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.message2,expression:"message2",arg:"copy"}],staticClass:"mb-1 mx-1",attrs:{variant:"dark"},on:{click:function(e){return t.show_message()},blur:function(e){t.message2=""}}},[o("svg",{staticClass:"feather feather-edit-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("path",{attrs:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}})]),t._v(" Cut from Input ")])],1)],1),o("div",{staticClass:"code-section-container show-code"},[o("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code2")}}},[o("span",[t._v("Code")])]),t.code_arr.includes("code2")?o("div",{staticClass:"code-section text-left"},[o("highlight",[o("pre",[t._v('<div class="clipboard">\n    <b-form class="form-horizontal">\n        <b-textarea class="mb-4" rows="3" v-model="message2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</b-textarea>\n        <b-button variant="primary" class="mb-1 mx-1" v-clipboard:copy="message2" @click="show_message();">\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy from Input\n        </b-button>\n        <b-button variant="dark" class="mb-1 mx-1" v-clipboard:copy="message2" @click="show_message();" @blur="message2 = \'\';">\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Cut from Input\n        </b-button>\n    </b-form>\n</div>\n')])])],1):t._e()],1)])])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"fclCoyParagraph"}},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(2),o("div",{staticClass:"panel-body clipboard-copy-para"},[o("div",{staticClass:"clipboard copy-txt"},[t._m(3),o("p",{staticClass:"mb-4"},[t._v("Please do not share it to anyone")]),o("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:22991,expression:"22991",arg:"copy"}],staticClass:"mb-1",attrs:{variant:"primary"},on:{click:function(e){return t.show_message()}}},[o("svg",{staticClass:"feather feather-copy",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("rect",{attrs:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}}),o("path",{attrs:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}})]),t._v(" Copy from Input ")])],1),o("div",{staticClass:"code-section-container show-code"},[o("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code3")}}},[o("span",[t._v("Code")])]),t.code_arr.includes("code3")?o("div",{staticClass:"code-section text-left"},[o("highlight",[o("pre",[t._v('<div class="clipboard copy-txt">\n    <p class="otp-pass">Here is your OTP <span>22991</span>.</p>\n    <p class="mb-4">Please do not share it to anyone</p>\n    <b-button variant="primary" class="mb-1" v-clipboard:copy="22991" @click="show_message()">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy from Input\n    </b-button>\n</div>\n')])])],1):t._e()],1)])])]),o("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"fclAdvance"}},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(4),o("div",{staticClass:"panel-body paragraph-advance"},[o("div",{staticClass:"clipboard copy-txt"},[t._m(5),o("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:"http://www.admin-dashboard.com/code",expression:"'http://www.admin-dashboard.com/code'",arg:"copy"}],staticClass:"mb-1 mx-1",attrs:{variant:"primary"},on:{click:function(e){return t.show_message()}}},[o("svg",{staticClass:"feather feather-copy",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("rect",{attrs:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}}),o("path",{attrs:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}})]),t._v(" Copy Link ")]),o("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:2291,expression:"2291",arg:"copy"}],staticClass:"mb-1 mx-1",attrs:{variant:"dark"},on:{click:function(e){return t.show_message()}}},[o("svg",{staticClass:"feather feather-copy",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("rect",{attrs:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}}),o("path",{attrs:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}})]),t._v(" Copy Hidden Code ")])],1),o("div",{staticClass:"code-section-container show-code"},[o("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code4")}}},[o("span",[t._v("Code")])]),t.code_arr.includes("code4")?o("div",{staticClass:"code-section text-left"},[o("highlight",[o("pre",[t._v('<div class="clipboard copy-txt">\n    <p class="mb-4">Link -> <span>http://www.admin-dashboard.com/code</span></p>\n    <b-button variant="primary" class="mb-1 mx-1" v-clipboard:copy="\'http://www.admin-dashboard.com/code\'" @click="show_message()">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link\n    </b-button>\n    <b-button variant="dark" class="mb-1" v-clipboard:copy="2291" @click="show_message()">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Hidden Code\n    </b-button>\n</div>\n')])])],1):t._e()],1)])])])])])],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v("Copy from input")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v("Copy from Text Area")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v("Copy Text from Paragraph")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"otp-pass"},[t._v("Here is your OTP "),o("span",[t._v("22991")]),t._v(".")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v("Copy Hidden Text (Advanced)")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"mb-4"},[t._v("Link -> "),o("span",[t._v("http://www.admin-dashboard.com/code")])])}],a=(o("caad"),o("2532"),o("4de4"),o("d3b7"),o("2b0e")),s=o("4eb5"),i=o.n(s),c=(o("0706"),o("fbab"),o("e706"));a["default"].use(i.a);var l={metaInfo:{title:"Clipboard"},components:{highlight:c["a"]},data:function(){return{code_arr:[],message1:"http://www.admin-dashboard.com",message2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}},mounted:function(){},methods:{toggleCode:function(t){this.code_arr.includes(t)?this.code_arr=this.code_arr.filter((function(e){return e!=t})):this.code_arr.push(t)},show_message:function(){this.$bvToast.toast("copied successfully.",{headerClass:"d-none",bodyClass:"toast-success",toaster:"b-toaster-top-center",autoHideDelay:2e3})}}},u=l,d=o("2877"),p=Object(d["a"])(u,r,n,!1,null,null,null);e["default"]=p.exports},fbab:function(t,e,o){}}]);
//# sourceMappingURL=forms-clipboard.9d9d8269.js.map