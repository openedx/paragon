"use strict";(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[474],{83615:function(e,t,n){var a=n(27378);t.Z=function(e){let{h:t,children:n,id:i}=e;const r=`h${t}`;return a.createElement(r,{id:i,className:"pgn-doc__heading"},n)}},90834:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(27378),i=n(77423),r=n(15341),o=n(52911);function s(e){let t,n,a;if(e.startsWith("#")){let i=e.slice(1);3===i.length&&(i=i.split("").map((e=>e+e)).join("")),[t,n,a]=function(e){if(6!==e.length)throw new Error("Invalid HEX color, it must contain only 6 digits and be without starting #.");return e.match(/.{1,2}/g).map((e=>parseInt(e,16)))}(i)}else{if(!e.startsWith("rgb"))throw new Error("Invalid color - expected HEX or RGB/RGBA format.");[t,n,a]=e.match(/(?<=rgba?\()(.*)(?=\))/g)[0].split(",").map(Number)}return(299*t+587*n+114*a)/1e3>=128?"#000":"#FFF"}function l(e){return function(e){return e.includes("rgb")||e.includes("#")}(e)?e.split(" ").map(((e,t,n)=>{if(e.startsWith("#"))return a.createElement("mark",{key:e,className:"mr-1",style:{backgroundColor:e,color:s(e)}},e);if(e.startsWith("rgb")){const i="a"===e[3]?3:2,r=n.slice(t,t+i+1).join(" ");for(let e=1;e<=i;e++)delete n[t+e];return a.createElement("mark",{key:r,className:"mr-1",style:{backgroundColor:r,color:s(r)}},r)}return a.createElement("span",{key:e,className:"mr-1"},e)})):e}function d(e){let{declaration:t,handleMouseEnter:n,handleMouseLeave:i}=e;const[r,o,s]=t.split(/:|!/);return function(e){return e.includes("var(")}(o)?a.createElement("code",{style:{fontSize:"14px"},key:t,className:"mb-0 text-muted"},a.createElement("span",null,r,": "),a.createElement("span",{onMouseEnter:e=>n(e,t),onMouseLeave:()=>i(),style:{cursor:"pointer",textDecoration:"underline dotted"}},l(o.trim())),s&&a.createElement("span",null," !important;")):a.createElement("code",{style:{fontSize:"14px"},key:t,className:"mb-0 text-muted"},l(t))}function c(e){let{selectors:t}=e;const{0:n,1:s}=(0,a.useState)(!1),{0:c,1:m}=(0,a.useState)(void 0),{0:u,1:p}=(0,a.useState)("");(0,a.useEffect)((()=>{const e=document.createElement("div");return e.id="dummyDiv",document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[]);const h=(e,t)=>{m(e.target),s(!0);const n=t.split(":")[0],a=document.getElementById("dummyDiv");a.style.cssText=t;const i=getComputedStyle(a).getPropertyValue(n);p(i)},w=()=>{s(!1),m(void 0);document.getElementById("dummyDiv").style.cssText="",p("")};return a.createElement("div",{className:"mb-4"},a.createElement(i.Z,{data:t.map((e=>{let{selector:t,declarations:n}=e;return{selector:a.createElement("code",{style:{fontSize:"14px"}},".",t),declarations:a.createElement("div",null,n.map((e=>a.createElement(d,{key:e,declaration:e,handleMouseEnter:h,handleMouseLeave:w}))))}})),itemCount:t.length,columns:[{Header:"Utility Class Name",accessor:"selector"},{Header:"Styles",accessor:"declarations"}]},a.createElement(i.Z.Table,null)),a.createElement(r.Z,{show:n,target:c,placement:"top"},a.createElement(o.ZP,{id:"css-variable-value-popover"},a.createElement(o.ZP.Content,null,u?l(u):"Computing..."))))}c.defaultProps={selectors:[]};var m=c},78115:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(27378),i=n(35318),r=n(58391),o=n(85403),s=n(7552),l=n(27818),d=n(42980),c=n(83615);const m={h1:e=>a.createElement(c.Z,Object.assign({h:"1"},e)),h2:e=>a.createElement(c.Z,Object.assign({h:"2"},e)),h3:e=>a.createElement(c.Z,Object.assign({h:"3"},e)),h4:e=>a.createElement(c.Z,Object.assign({h:"4"},e)),h5:e=>a.createElement(c.Z,Object.assign({h:"5"},e)),h6:e=>a.createElement(c.Z,Object.assign({h:"6"},e)),pre:e=>a.createElement("div",e),code:s.Z,Link:r.Link};function u(e){var t;let{children:n,pageContext:r}=e;return a.createElement(l.Z,null,a.createElement(d.Z,{title:null==r||null===(t=r.frontmatter)||void 0===t?void 0:t.title}),a.createElement(o.Z,{size:"md",className:"py-5"},a.createElement(i.MDXProvider,{components:m},n)))}},27969:function(e,t){t.Z=(e,t)=>{if(!t)return e;const n=RegExp(t);return e.filter((e=>n.test(e.selector)))}},8590:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return u}});var a=n(53782),i=(n(27378),n(35318)),r=n(78115),o=n(27969),s=n(90834);const l=["components"],d={},c={pageQuery:"3842887750",_frontmatter:d},m=r.Z;function u(e){let{components:t}=e,n=(0,a.Z)(e,l);return(0,i.mdx)(m,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"css-utilities"},"CSS Utilities",(0,i.mdx)("a",{parentName:"h1","aria-hidden":"true",tabIndex:-1,href:"#css-utilities"},(0,i.mdx)("span",{parentName:"a",className:"pgn-doc__anchor"},"#"))),(0,i.mdx)("h3",{id:"utility-classes"},"Utility Classes",(0,i.mdx)("a",{parentName:"h3","aria-hidden":"true",tabIndex:-1,href:"#utility-classes"},(0,i.mdx)("span",{parentName:"a",className:"pgn-doc__anchor"},"#"))),(0,i.mdx)("p",null,"Hover on styles with CSS variables to view computed values."),(0,i.mdx)(s.Z,{selectors:(0,o.Z)(n.data.utilities.nodes).concat([{selector:"w-xs-25",declarations:["@media(min-width: 0px) { width: 25% !important; }"]},{selector:"w-xs-50",declarations:["@media(min-width: 0px) { width: 50% !important; }"]},{selector:"w-xs-75",declarations:["@media(min-width: 0px) { width: 75% !important; }"]},{selector:"w-xs-100",declarations:["@media(min-width: 0px) { width: 100% !important; }"]},{selector:"w-xs-auto",declarations:["@media(min-width: 0px) { width: auto !important; }"]},{selector:"w-sm-25",declarations:["@media(min-width: 576px) { width: 25% !important; }"]},{selector:"w-sm-50",declarations:["@media(min-width: 576px) { width: 50% !important; }"]},{selector:"w-sm-75",declarations:["@media(min-width: 576px) { width: 75% !important; }"]},{selector:"w-sm-100",declarations:["@media(min-width: 576px) { width: 100% !important; }"]},{selector:"w-sm-auto",declarations:["@media(min-width: 576px) { width: auto !important; }"]},{selector:"w-md-25",declarations:["@media(min-width: 768px) { width: 25% !important; }"]},{selector:"w-md-50",declarations:["@media(min-width: 768px) { width: 50% !important; }"]},{selector:"w-md-75",declarations:["@media(min-width: 768px) { width: 75% !important; }"]},{selector:"w-md-100",declarations:["@media(min-width: 768px) { width: 100% !important; }"]},{selector:"w-md-auto",declarations:["@media(min-width: 768px) { width: auto !important; }"]},{selector:"w-lg-25",declarations:["@media(min-width: 992px) { width: 25% !important; }"]},{selector:"w-lg-50",declarations:["@media(min-width: 992px) { width: 50% !important; }"]},{selector:"w-lg-75",declarations:["@media(min-width: 992px) { width: 75% !important; }"]},{selector:"w-lg-100",declarations:["@media(min-width: 992px) { width: 100% !important; }"]},{selector:"w-lg-auto",declarations:["@media(min-width: 992px) { width: auto !important; }"]},{selector:"w-xl-25",declarations:["@media(min-width: 1200px) { width: 25% !important; }"]},{selector:"w-xl-50",declarations:["@media(min-width: 1200px) { width: 50% !important; }"]},{selector:"w-xl-75",declarations:["@media(min-width: 1200px) { width: 75% !important; }"]},{selector:"w-xl-100",declarations:["@media(min-width: 1200px) { width: 100% !important; }"]},{selector:"w-xl-auto",declarations:["@media(min-width: 1200px) { width: auto !important; }"]}]),mdxType:"CSSUtilitiesTable"}))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-foundations-css-utilities-mdx-8b3077b7d8dc232112c2.js.map