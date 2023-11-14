(globalThis.webpackChunkparagon_pattern_library_documentation=globalThis.webpackChunkparagon_pattern_library_documentation||[]).push([[493],{363:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=363,e.exports=t},3198:(e,t,n)=>{var r=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,p="object"==typeof self&&self&&self.Object===Object&&self,m=u||p||Function("return this")(),f=Object.prototype.toString,d=Math.max,w=Math.min,b=function(){return m.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return r;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=i.test(e);return n||s.test(e)?l(e.slice(2),n?2:8):c.test(e)?r:+e}e.exports=function(e,t,n){var r,o,a,c,i,s,l=0,u=!1,p=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,a=o;return r=o=void 0,l=t,c=e.apply(a,n)}function _(e){var n=e-s;return void 0===s||n>=t||n<0||p&&e-l>=a}function g(){var e=b();if(_(e))return E(e);i=setTimeout(g,function(e){var n=t-(e-s);return p?w(n,a-(e-l)):n}(e))}function E(e){return i=void 0,m&&r?f(e):(r=o=void 0,c)}function y(){var e=b(),n=_(e);if(r=arguments,o=this,s=e,n){if(void 0===i)return function(e){return l=e,i=setTimeout(g,t),u?f(e):c}(s);if(p)return i=setTimeout(g,t),f(s)}return void 0===i&&(i=setTimeout(g,t)),c}return t=v(t)||0,h(n)&&(u=!!n.leading,a=(p="maxWait"in n)?d(v(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),y.cancel=function(){void 0!==i&&clearTimeout(i),l=0,r=s=o=i=void 0},y.flush=function(){return void 0===i?c:E(b())},y}},9279:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7378),o=n(2026),a=n(2687);n(8226);class c extends r.Component{state={error:null,invalidCode:null,errorInfo:null};componentDidCatch(e,t){const{code:n=null}=this.props;this.setState({invalidCode:n,error:e,errorInfo:t})}render(){const{invalidCode:e,error:t,errorInfo:n}=this.state,{code:c,children:i}=this.props;if(c!==e||!t)return i;const s=n?n.componentStack.split("\n").filter((e=>/RenderCode/.test(e))).map((e=>e.replace(/ \(created by .*/g,""))):[],l=s.slice(0,s.length-1);return r.createElement("div",{className:"_1bcwwp21i _1bcwwp21j _1bcwwp21k _1bcwwp21l _1bcwwp22a _1bcwwp22i _1bcwwp22q _1bcwwp22y _1bcwwp21h _1bcwwp23x"},r.createElement(o.x,{size:"large",tone:"critical"},r.createElement(a.c,null,t.message),l.map(((e,t)=>r.createElement("span",{key:t},e)))))}}},81:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7378),o=n(85),a=n.n(o),c=n(3198),i=n.n(c);function s(e){let{code:t,scope:n}=e;return a()(t,{...{Children:r.Children,Fragment:r.Fragment,Suspense:r.Suspense,cloneElement:r.cloneElement,createContext:r.createContext,createRef:r.createRef,forwardRef:r.forwardRef,isValidElement:r.isValidElement,lazy:r.lazy,memo:r.memo,useCallback:r.useCallback,useContext:r.useContext,useEffect:r.useEffect,useImperativeHandle:r.useImperativeHandle,useLayoutEffect:r.useLayoutEffect,useMemo:r.useMemo,useReducer:r.useReducer,useRef:r.useRef,useState:r.useState,debounce:i()}??{},...n,React:r})}},2029:(e,t,n)=>{const r=n(3561);e.exports=r.default||r},7065:(e,t,n)=>{"use strict";var r={};n.r(r),n.d(r,{animationDelay:()=>f,animationDuration:()=>d,animationIterationCount:()=>w,hideSplash:()=>b,root:()=>h,size:()=>v,trace:()=>_});var o=n(7378),a=n(7580),c=n(7728),i=n.n(c),s=n(46),l=n(6501),u=n(42),p=n.n(u);const m=e=>{let{size:t=100}=e;return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 390 290",focusable:"false",width:t},o.createElement("path",{d:"M385,285H5V179.42H385ZM92.51,5H5V179.42H92.51ZM210.45,5H92.51V179.42H210.45ZM385,5H210.45V179.42H385Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"4"}))};n(8226);var f=500,d=1300,w=2,b="_1bcwwp24c _1bcwwp248",h="_1ag4tjg1 _1bcwwp21i _1bcwwp21j _1bcwwp21k _1bcwwp21l _1bcwwp21h _1bcwwp21n _1bcwwp222 _1bcwwp21w _1bcwwp24r _1bcwwp244",v="_1ag4tjg5",_="_1ag4tjg3";const{animationDuration:g,animationDelay:E,animationIterationCount:y,...C}=r,O=()=>{const[e,t]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{const e=setTimeout((()=>t(!0)),E+g*y);return()=>clearTimeout(e)}),[]),o.createElement("div",{className:p()(C.root,{[C.hideSplash]:e}),"data-testid":"splashscreen"},o.createElement("div",{className:p()(C.trace,C.size)},o.createElement(m,{size:"100%"})))};var x=n(9279),j=n(81);const N=e=>{let{themes:t,components:n,FrameComponent:r}=e;const{themeName:a,code:c}=(0,s.UO)((e=>{if(e.code){const t=JSON.parse(i().decompressFromEncodedURIComponent(String(e.code))??"");return{code:(0,l.jw)(t.code),themeName:t.theme}}return{}})),u=a?t[a]:null;return o.createElement(x.Z,{code:c},o.createElement("div",{className:"_1bcwwp21g _1bcwwp24d"},o.createElement(r,{themeName:a||"__PLAYROOM__NO_THEME__",theme:u},o.createElement(j.Z,{code:c,scope:n}))),o.createElement("div",{className:"_1bcwwp21g _1bcwwp24e"},o.createElement(O,null)))},k=document.createElement("div");document.body.appendChild(k),function(){let{themes:e=n(9240),components:t=n(8748),FrameComponent:r=n(2029)}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.l)(o.createElement(N,{components:t,themes:e,FrameComponent:r}),k)}()},85:function(e){(function(){var t={}.hasOwnProperty,n=[].slice;e.exports=function(e,r){var o,a,c,i;for(o in a=[],i=[],r)t.call(r,o)&&(c=r[o],"this"!==o&&(a.push(o),i.push(c)));return Function.apply(null,n.call(a).concat(["return eval("+JSON.stringify(e)+")"])).apply(r.this,i)}}).call(this)}},e=>{e.O(0,[465,874,53],(()=>(7065,e(e.s=7065)))),e.O()}]);