(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[280],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},23646:function(e,t,n){var r=n(67228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},69100:function(e,t,n){var r=n(99489),o=n(57067);function a(t,n,c){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},59713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},57067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},6479:function(e,t,n){var r=n(37316);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,n){var r=n(23646),o=n(46860),a=n(60379),c=n(98206);e.exports=function(e){return r(e)||o(e)||a(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},60379:function(e,t,n){var r=n(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},935:function(e,t,n){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,i=parseInt,s="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,l=s||u||Function("return this")(),p=Object.prototype.toString,f=Math.max,d=Math.min,m=function(){return l.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||c.test(e)?i(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,a,c,i,s,u=0,l=!1,p=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function x(t){var n=r,a=o;return r=o=void 0,u=t,c=e.apply(a,n)}function b(e){return u=e,i=setTimeout(g,t),l?x(e):c}function _(e){var n=e-s;return void 0===s||n>=t||n<0||p&&e-u>=a}function g(){var e=m();if(_(e))return E(e);i=setTimeout(g,function(e){var n=t-(e-s);return p?d(n,a-(e-u)):n}(e))}function E(e){return i=void 0,h&&r?x(e):(r=o=void 0,c)}function O(){var e=m(),n=_(e);if(r=arguments,o=this,s=e,n){if(void 0===i)return b(s);if(p)return i=setTimeout(g,t),x(s)}return void 0===i&&(i=setTimeout(g,t)),c}return t=y(t)||0,v(n)&&(l=!!n.leading,a=(p="maxWait"in n)?f(y(n.maxWait)||0,t):a,h="trailing"in n?!!n.trailing:h),O.cancel=function(){void 0!==i&&clearTimeout(i),u=0,r=s=o=i=void 0},O.flush=function(){return void 0===i?c:E(m())},O}},56842:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return O},default:function(){return R}});var r=n(45987),o=n(67294),a=n(64983),c=n(21379),i=n(25444),s=(n(27361),n(15785)),u=n(4942),l=n(935),p=n.n(l),f=n(47499),d=n(69657),m=n(70206),v=n(32837);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const x=Object.keys(v),b=e=>{let{iconName:t,setCurrentIcon:n,previewRef:r}=e;const a=()=>{n(t),r.current&&r.current.scrollIntoView({behavior:"smooth",block:"center"})};return t?o.createElement("div",{role:"button",key:t,className:"pgn-doc__icons-table__cell",onKeyPress:a,onClick:a,tabIndex:0},o.createElement(f.Z,{key:t,src:v[t]}),o.createElement("span",{className:"pgn-doc__icons-table__cell-text"},t)):null},_=e=>{let{rowIndex:t,columnsCount:n,iconsList:r,data:a}=e;const c=t*n,i=c+n;if(c>r.length)return null;return r.slice(c,i).map((e=>o.createElement(b,{key:e,iconName:e,setCurrentIcon:a.setCurrentIcon,previewRef:a.previewRef})))};var g=()=>{const e=o.useRef(null),t=o.useRef(null),r=o.useRef(null),{0:a,1:c}=(0,o.useState)(""),{0:i,1:u}=(0,o.useState)(0),{0:l,1:y}=(0,o.useState)({iconsList:x,rowsCount:24}),{0:b,1:g}=(0,o.useState)(x[0]),{0:E,1:O}=(0,o.useState)(!1),j=`import { ${b} } from '@edx/paragon/icons';`,{rowsCount:w,iconsList:R}=l,P=(0,o.useMemo)((()=>Math.floor(i/150)),[i]),N=e=>{navigator.clipboard.writeText(e),O(!0),n.g.analytics.track("openedx.paragon.icons-table.selected-icon.copied",{name:b})},C=(0,o.useCallback)(p()((e=>{n.g.analytics.track("openedx.paragon.icons-table.search",{value:a}),y({rowsCount:24,iconsList:e})}),250,{leading:!1}),[]);(0,o.useEffect)((()=>{if(t.current){const e=new IntersectionObserver((e=>{let[t]=e;t.intersectionRatio>0&&y((e=>h(h({},e),{},{rowsCount:e.rowsCount+24})))}),{root:null,rootMargin:"0px",threshold:[1]}),n=new ResizeObserver((e=>{for(let t=0;t<e.length;t++)u(e[t].contentRect.width)}));return e.observe(r.current),n.observe(t.current),()=>{e.disconnect(),n.disconnect()}}}),[]),(0,o.useEffect)((()=>{C(x.filter((e=>e.toLowerCase().includes(a.toLowerCase()))))}),[a,C]);const q=(0,o.useMemo)((()=>(0,s.Z)(Array(w).keys())),[w]);return o.createElement(o.Fragment,null,o.createElement(d.ZP,{onSubmit:()=>{},onChange:e=>c(e),placeholder:"Search icons"}),b&&o.createElement("div",{className:"pgn-doc__icons-table__preview",ref:e},o.createElement("div",{role:"presentation",className:"pgn-doc__icons-table__preview-title",onClick:()=>N(b)},o.createElement("h3",{className:"rounded"},b),o.createElement(f.Z,{key:"ContentCopy",src:v.ContentCopy})),o.createElement(f.Z,{key:b,src:v[b]}),o.createElement("div",{role:"presentation",className:"pgn-doc__icons-table__preview-footer",onClick:()=>N(j)},o.createElement("code",{className:"rounded"},o.createElement("small",null,j)),o.createElement(f.Z,{key:"ContentCopy",src:v.ContentCopy}))),o.createElement("div",{className:"pgn-doc__icons-table",ref:t},R.length?o.createElement(o.Fragment,null,q.map((t=>o.createElement(_,{key:`row${t}`,columnsCount:P,rowIndex:t,iconsList:R,data:{setCurrentIcon:g,previewRef:e}})))):o.createElement("span",{className:"pgn-doc__icons-table__not-found"},"No result for ",`"${a}"`)),o.createElement("div",{ref:r}),o.createElement(m.ZP,{onClose:()=>O(!1),show:E,delay:2e3},"Copied to clipboard!"))};n(58053);const E=["components"],O={},j={_frontmatter:O},w=c.Z;function R(e){let{components:t}=e,n=(0,r.Z)(e,E);return(0,a.mdx)(w,Object.assign({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"icons"},"Icons",(0,a.mdx)("a",{parentName:"h2","aria-hidden":"true",tabIndex:-1,href:"#icons"},(0,a.mdx)("span",{parentName:"a",className:"pgn-doc__anchor"},"#"))),(0,a.mdx)("p",null,"Displays an svg icon from ",(0,a.mdx)("inlineCode",{parentName:"p"},"@edx/paragon/icons"),". See the ",(0,a.mdx)(i.Link,{to:"/components/icon",mdxType:"Link"},"Icon Component")," for more information."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// Included in this live jsx scope:\n// import { Add, AddCircle } from '@edx/paragon/icons';\n<Icon src={Add} />\n")),(0,a.mdx)("p",null,"Many of the icons below are sourced from ",(0,a.mdx)("a",{href:"https://material.io/resources/icons/"},"Material Design Sharp Icons"),". They are designed to be sharp at 24px by 24px."),(0,a.mdx)("br",null),(0,a.mdx)(g,{mdxType:"IconsTable"}))}R.isMDXComponent=!0},21274:function(e,t,n){const r=n(41048);e.exports={MDXRenderer:r}},41048:function(e,t,n){var r=n(69100),o=n(319),a=n(59713),c=n(6479);const i=["scope","children"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const l=n(67294),{mdx:p}=n(64983),{useMDXScope:f}=n(93191);e.exports=function(e){let{scope:t,children:n}=e,a=c(e,i);const s=f(t),d=l.useMemo((()=>{if(!n)return null;const e=u({React:l,mdx:p},s),t=Object.keys(e),a=t.map((t=>e[t]));return r(Function,["_fn"].concat(o(t),[`${n}`])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return l.createElement(d,u({},a))}},60955:function(e,t,n){"use strict";var r=n(67294);const o=e=>{let{h:t,children:n,id:o}=e;const a=`h${t}`;return r.createElement(a,{id:o,className:"pgn-doc__heading"},n)};o.defaultProps={},t.Z=o},58053:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(67294),o=n(21274),a=n(41902);const c=e=>{let{isRequired:t}=e;return t?r.createElement(r.Fragment,null," ",r.createElement(a.Z,{variant:"light"},"Required")):null};c.defaultProps={isRequired:!1};const i=e=>{let{name:t,isRequired:n}=e;return r.createElement("span",null,r.createElement("code",null,t),r.createElement(c,{isRequired:n}))};i.defaultProps={isRequired:!1};const s=e=>{let{name:t,value:n,isRequired:o}=e;return r.createElement("span",null,r.createElement("code",null,t),r.createElement(c,{isRequired:o}),r.createElement("span",{className:"text-monospace small ml-2"},n.map?n.map((e=>{let{value:t}=e;return t})).join(" | "):JSON.stringify(n)))};s.defaultProps={isRequired:!1};const u=e=>{let{value:t,isRequired:n}=e;return r.createElement("span",null,t.map((e=>r.createElement(h,Object.assign({key:e.name},e)))).reduce(((e,t)=>[e," | ",t])),r.createElement(c,{isRequired:n}))};u.defaultProps={isRequired:!1};const l=e=>{let{value:t,isRequired:n}=e;return r.createElement("span",null,r.createElement("code",null,t),r.createElement(c,{isRequired:n}))};l.defaultProps={isRequired:!1};const p=e=>{let{value:t,isRequired:n}=e;return r.createElement("span",null,r.createElement(h,t),r.createElement("code",null,"[]"),r.createElement(c,{isRequired:n}))};p.defaultProps={isRequired:!1};const f=e=>{let{value:t,isRequired:n}=e;return r.createElement("span",null,r.createElement("code",null,"Object.","<",r.createElement(h,t),">"),r.createElement(c,{isRequired:n}))};f.defaultProps={isRequired:!1};const d=e=>{let{name:t,value:n,isRequired:o}=e;return r.createElement("span",{className:"small"},r.createElement("code",null,t),r.createElement(c,{isRequired:o})," {",Object.entries(n).map((e=>{let[t,n]=e;return r.createElement("div",{className:"text-monospace pl-3",key:t},t,": ",r.createElement(h,n),",")})),"}")};d.defaultProps={isRequired:!1};const m=e=>{let{name:t,value:n,isRequired:o}=e;return r.createElement("span",{className:"small"},r.createElement("code",null,t),r.createElement(c,{isRequired:o})," {",Object.entries(n).map((e=>{let[t,n]=e;return r.createElement("div",{className:"text-monospace pl-3"},t,": ",r.createElement(h,n),",")})),"}")};m.defaultProps={isRequired:!1};const v=e=>{let{raw:t,isRequired:n}=e;return r.createElement("span",null,r.createElement("code",null,t),r.createElement(c,{isRequired:n}))};v.defaultProps={isRequired:!1,raw:""};const y={array:i,bool:i,func:i,number:i,object:i,string:i,any:i,element:i,node:i,symbol:i,elementType:i,enum:s,union:u,instanceOf:l,arrayOf:p,objectOf:f,shape:d,exact:m,custom:v},h=e=>{let{name:t,value:n,required:o,raw:a}=e;const c=y[t];return c?r.createElement(c,{value:n,name:t,isRequired:o,raw:a}):"unknown type"};var x=h,b=n(76532);const _=["intl"],g=e=>{let{value:t}=e;return t&&"undefined"!==t?r.createElement(r.Fragment,null,r.createElement(a.Z,{variant:"light"},"Default"),r.createElement("span",{className:"small text-monospace ml-2"},t)):null};g.defaultProps={value:void 0};const E=e=>{let{name:t,type:n,required:c,defaultValue:i,description:s}=e;return r.createElement("li",{className:"px-4 border-top border-light-300"},r.createElement("div",{className:"my-3"},r.createElement("div",{className:"mb-2"},r.createElement("span",{className:"mr-2 font-weight-bold"},`${t} `),r.createElement(x,n),c&&r.createElement(r.Fragment,null," ",r.createElement(a.Z,{variant:"light"},"Required"))),r.createElement("div",{className:"x-small"},s?r.createElement(o.MDXRenderer,null,s.childMdx.body):null),r.createElement(g,i)))};E.defaultProps={required:!1,defaultValue:{},description:void 0};const O=e=>{let{props:t,displayName:n,content:o}=e;return r.createElement(b.ZP,{className:"mb-5",id:`props-api-table-${n}`},r.createElement(b.ZP.Header,{as:"h3",title:`${n} Props API`,className:"pb-1"}),o&&r.createElement("div",{className:"small mb-3"},o),t.length>0?r.createElement("ul",{className:"list-unstyled"},t.filter((e=>!_.includes(e.name))).map((e=>r.createElement(E,Object.assign({key:e.name},e))))):r.createElement("div",{className:"pb-3 pl-4"},"This component does not receive any props."))};O.defaultProps={props:[],content:void 0,displayName:void 0};var j=O},21379:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(67294),o=n(64983),a=n(25444),c=n(82298),i=n(4949),s=n(29900),u=n(14959),l=n(60955);const p={h1:e=>r.createElement(l.Z,Object.assign({h:"1"},e)),h2:e=>r.createElement(l.Z,Object.assign({h:"2"},e)),h3:e=>r.createElement(l.Z,Object.assign({h:"3"},e)),h4:e=>r.createElement(l.Z,Object.assign({h:"4"},e)),h5:e=>r.createElement(l.Z,Object.assign({h:"5"},e)),h6:e=>r.createElement(l.Z,Object.assign({h:"6"},e)),pre:e=>r.createElement("div",e),code:i.Z,Link:a.Link};function f(e){var t;let{children:n,pageContext:a}=e;return r.createElement(s.Z,null,r.createElement(u.Z,{title:null==a||null===(t=a.frontmatter)||void 0===t?void 0:t.title}),r.createElement(c.Z,{size:"md",className:"py-5"},r.createElement(o.MDXProvider,{components:p},n)))}},1989:function(e,t,n){var r=n(51789),o=n(80401),a=n(57667),c=n(21327),i=n(81866);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=c,s.prototype.set=i,e.exports=s},38407:function(e,t,n){var r=n(27040),o=n(14125),a=n(82117),c=n(67518),i=n(13399);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=c,s.prototype.set=i,e.exports=s},57071:function(e,t,n){var r=n(10852)(n(55639),"Map");e.exports=r},83369:function(e,t,n){var r=n(24785),o=n(11285),a=n(96e3),c=n(49916),i=n(95265);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=c,s.prototype.set=i,e.exports=s},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},29932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},18470:function(e,t,n){var r=n(77813);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},97786:function(e,t,n){var r=n(71811),o=n(40327);e.exports=function(e,t){for(var n=0,a=(t=r(t,e)).length;null!=e&&n<a;)e=e[o(t[n++])];return n&&n==a?e:void 0}},44239:function(e,t,n){var r=n(62705),o=n(89607),a=n(2333),c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?o(e):a(e)}},28458:function(e,t,n){var r=n(23560),o=n(15346),a=n(13218),c=n(80346),i=/^\[object .+?Constructor\]$/,s=Function.prototype,u=Object.prototype,l=s.toString,p=u.hasOwnProperty,f=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?f:i).test(c(e))}},80531:function(e,t,n){var r=n(62705),o=n(29932),a=n(1469),c=n(33448),i=r?r.prototype:void 0,s=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(c(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},71811:function(e,t,n){var r=n(1469),o=n(15403),a=n(55514),c=n(79833);e.exports=function(e,t){return r(e)?e:o(e,t)?[e]:a(c(e))}},14429:function(e,t,n){var r=n(55639)["__core-js_shared__"];e.exports=r},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},45050:function(e,t,n){var r=n(37019);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},10852:function(e,t,n){var r=n(28458),o=n(47801);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},89607:function(e,t,n){var r=n(62705),o=Object.prototype,a=o.hasOwnProperty,c=o.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(s){}var o=c.call(e);return r&&(t?e[i]=n:delete e[i]),o}},47801:function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},51789:function(e,t,n){var r=n(94536);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},80401:function(e){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},57667:function(e,t,n){var r=n(94536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(t,e)?t[e]:void 0}},21327:function(e,t,n){var r=n(94536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},81866:function(e,t,n){var r=n(94536);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},15403:function(e,t,n){var r=n(1469),o=n(33448),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(c.test(e)||!a.test(e)||null!=t&&e in Object(t))}},37019:function(e){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},15346:function(e,t,n){var r,o=n(14429),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},27040:function(e){e.exports=function(){this.__data__=[],this.size=0}},14125:function(e,t,n){var r=n(18470),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0)&&(n==t.length-1?t.pop():o.call(t,n,1),--this.size,!0)}},82117:function(e,t,n){var r=n(18470);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},67518:function(e,t,n){var r=n(18470);e.exports=function(e){return r(this.__data__,e)>-1}},13399:function(e,t,n){var r=n(18470);e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},24785:function(e,t,n){var r=n(1989),o=n(38407),a=n(57071);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},11285:function(e,t,n){var r=n(45050);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},96e3:function(e,t,n){var r=n(45050);e.exports=function(e){return r(this,e).get(e)}},49916:function(e,t,n){var r=n(45050);e.exports=function(e){return r(this,e).has(e)}},95265:function(e,t,n){var r=n(45050);e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},24523:function(e,t,n){var r=n(88306);e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},94536:function(e,t,n){var r=n(10852)(Object,"create");e.exports=r},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},55514:function(e,t,n){var r=n(24523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,c=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,n,r,o){t.push(r?o.replace(a,"$1"):n||e)})),t}));e.exports=c},40327:function(e,t,n){var r=n(33448);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},80346:function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(n){}try{return e+""}catch(n){}}return""}},77813:function(e){e.exports=function(e,t){return e===t||e!=e&&t!=t}},27361:function(e,t,n){var r=n(97786);e.exports=function(e,t,n){var o=null==e?void 0:r(e,t);return void 0===o?n:o}},1469:function(e){var t=Array.isArray;e.exports=t},23560:function(e,t,n){var r=n(44239),o=n(13218);e.exports=function(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},88306:function(e,t,n){var r=n(83369);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var c=e.apply(this,r);return n.cache=a.set(o,c)||a,c};return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},79833:function(e,t,n){var r=n(80531);e.exports=function(e){return null==e?"":r(e)}}}]);
//# sourceMappingURL=component---src-pages-foundations-icons-mdx-5434a778cd00c2bc3181.js.map