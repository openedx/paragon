(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[295,225],{73567:function(e,t,l){"use strict";var n=l(27378),a=l(58391),r=l(85403),c=l(59363);t.Z=function(){const{components:e}=(0,a.useStaticQuery)("3773363936"),{all:t}=e;return n.createElement(r.Z,{className:"py-3 bg-light-200 border-top border-light-300"},n.createElement(r.Z,{size:"xl",className:"py-5"},n.createElement("div",{className:"pgn-doc__menu-all-components pt-5"},n.createElement("h3",{className:"mb-4"},"All components (A-Z)"),n.createElement("ul",{className:"pgn-doc__menu-component-list list-unstyled small mb-4"},t.map((e=>n.createElement(c.T,Object.assign({key:e.id},e))))))))}},63114:function(e,t,l){"use strict";var n=l(27378),a=l(40504);const r={};function c(e){let{properties:t,renderBefore:l,renderAfter:c,children:s}=e;const{settings:i}=(0,n.useContext)(a.SettingsContext),{theme:o}=i,{0:m,1:u}=(0,n.useState)(r),d=(0,n.useRef)();return(0,n.useEffect)((()=>{u(r);const e=setTimeout((()=>{if(!d.current)return;const e=getComputedStyle(d.current),l=t.reduce(((t,l)=>(t[l]=e.getPropertyValue(l),t)),{});u(l)}),1e3);return()=>clearTimeout(e)}),[o,t]),n.createElement(n.Fragment,null,l?l(m):null,n.cloneElement(s,{ref:d}),c?c(m):null)}c.defaultProps={properties:[],renderBefore:void 0,renderAfter:void 0},t.Z=c},27818:function(e,t,l){"use strict";l.d(t,{Z:function(){return L}});var n=l(27378),a=l(23615),r=l.n(a),c=l(58391),s=l(71134),i=l(6832),o=l(85403),m=l(53738),u=l(57231),d=l(58247),p=l(28169),E=l(73567),g=l(81804),h=l(59363),f=l(87836),b=l(73495),v=l(53870),N=l(72756),y=l(38505),x=l(87394),Z=l(12834),S=l(40504);function C(e){let{showMinimizedTitle:t}=e;const{settings:l,handleSettingsChange:a,showSettings:r,closeSettings:s}=(0,n.useContext)(S.SettingsContext);return n.createElement(f.ZP,{position:"right",show:r,variant:"light",onClose:s},n.createElement("div",{className:"pgn-doc__settings"},n.createElement("div",{className:"pgn-doc__settings-title"},n.createElement("h3",{className:"mb-0"},"Settings"),n.createElement(b.Z,{src:x.Close,iconAs:v.Z,alt:"Close settings",onClick:s,size:"sm"})),n.createElement(N.Z,{gap:1},n.createElement(y.ZP.Group,{className:"pgn-doc__settings-direction"},n.createElement(y.ZP.Label,{className:"pgn-doc__settings-label"},"Text direction"),n.createElement(y.ZP.RadioSet,{name:"direction",onChange:e=>a("direction",e.target.value),value:l.direction},n.createElement(y.ZP.Radio,{value:"ltr"},"Left to right"),n.createElement(y.ZP.Radio,{value:"rtl"},"Right to left"))),n.createElement(y.ZP.Group,null,n.createElement(y.ZP.Label,{className:"pgn-doc__settings-label"},"Language"),n.createElement(y.ZP.Control,{as:"select",value:l.language,onChange:e=>a("language",e.target.value)},Z.LANGUAGES.map((e=>n.createElement("option",{key:e.code,value:e.code},e.label))))),!t&&n.createElement(y.ZP.Group,null,n.createElement(y.ZP.Label,{className:"pgn-doc__settings-label"},"Container Width"),n.createElement(y.ZP.Control,{as:"select",value:l.containerWidth,onChange:e=>a("containerWidth",e.target.value)},n.createElement("option",{value:"xs"},"xs"),n.createElement("option",{value:"sm"},"sm"),n.createElement("option",{value:"md"},"md (default)"),n.createElement("option",{value:"lg"},"lg"),n.createElement("option",{value:"xl"},"xl"))),n.createElement(p.ZP,{className:"pgn-doc__settings-nav--items"},n.createElement(p.ZP.Item,null,n.createElement(c.Link,{className:"nav-link",to:"/changelog"},"Changelog")),n.createElement(p.ZP.Item,null,n.createElement(p.ZP.Link,{href:"https://github.com/openedx/paragon"},"GitHub"))))))}C.defaultProps={showMinimizedTitle:!1};var P=C,k=l(60042),_=l.n(k);function T(e){let{data:t,className:l}=e;const{0:a,1:r}=(0,n.useState)(""),c=(0,n.useRef)();(0,n.useEffect)((()=>{c.current=new IntersectionObserver((e=>{e[0].intersectionRatio>=.5&&r(e[0].target.id)}),{rootMargin:"-50px 0px -80% 0px",threshold:.5});return document.querySelectorAll("main h2, main h3, main h4, main h5, main h6").forEach((e=>{var t;return null===(t=c.current)||void 0===t?void 0:t.observe(e)})),()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.disconnect()}}),[t]);const s=e=>{var t;return null!=e&&null!==(t=e.items)&&void 0!==t&&t.length?n.createElement("ul",{className:"pgn-doc__toc-list"},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement("a",{href:e.url,className:_()({active:`#${a}`===e.url})},e.title),!!e.items&&s(e))))):null},i=s(t);return i?n.createElement(d.Z,{offset:6,className:_()("pgn-doc__toc",l)},n.createElement("p",{className:"pgn-doc__toc-header"},"Contents"),i):null}const w={url:r().string,title:r().string,items:r().array};w.items=r().arrayOf(r().shape(w)),T.defaultProps={className:void 0};var M=T;function A(e){var t;let{children:l,showMinimizedTitle:a,hideFooterComponentMenu:r,isMdx:f,tocData:b}=e;const v=(0,s.useMediaQuery)({maxWidth:i.Z.extraLarge.minWidth}),{settings:N}=(0,n.useContext)(S.SettingsContext),y=(0,c.useStaticQuery)("3649515864");return n.createElement("div",{className:"d-flex flex-column"},n.createElement(g.Z,{siteTitle:(null===(t=y.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",showMinimizedTitle:v||a}),n.createElement(P,{showMinimizedTitle:a}),f||!r?n.createElement(o.Z,{fluid:!0},n.createElement(m.Z,{className:"flex-xl-nowrap"},n.createElement(u.Z,{className:"d-none d-xl-block p-0",xl:"xl"===N.containerWidth?"auto":2},n.createElement(d.Z,{offset:6,className:"pgn-doc__toc p-0 pt-3"},n.createElement(h.Z,null))),n.createElement(u.Z,{xl:"xl"===N.containerWidth?10:8,lg:9,md:12,as:"main",className:"flex-grow-1"},l),n.createElement(u.Z,{xl:2,lg:3,as:M,data:b,className:"d-none d-lg-block"}))):n.createElement("main",{className:"flex-grow-1"},l),!r&&n.createElement(E.Z,null),n.createElement(o.Z,{as:"footer",className:"py-3 border-top border-light-300"},n.createElement(p.ZP,{className:"d-flex align-items-center"},n.createElement(p.ZP.Item,null,n.createElement(c.Link,{className:"nav-link muted-link",to:"/status"},"Library status")),n.createElement(p.ZP.Item,null,n.createElement(c.Link,{className:"nav-link muted-link",to:"/insights"},"Usage insights")),n.createElement(p.ZP.Item,null,n.createElement(p.ZP.Link,{className:"muted-link",href:"https://github.com/openedx/.github/blob/master/CODE_OF_CONDUCT.md"},"Code of Conduct")),n.createElement(p.ZP.Item,null,n.createElement(p.ZP.Link,{className:"muted-link",href:"https://open.edx.org/"},"Open edX")),n.createElement("div",{className:"flex-grow-1"}),n.createElement("a",{href:"https://www.netlify.com"},n.createElement("img",{src:"https://www.netlify.com/img/global/badges/netlify-light.svg",alt:"Deploys by Netlify"})))))}const I={url:r().string,title:r().string,items:r().array};I.items=r().arrayOf(r().shape(I)),A.defaultProps={tocData:{},showMinimizedTitle:!1,hideFooterComponentMenu:!1,isMdx:!1};var L=A},886:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return v}});var n=l(4769),a=l(27378),r=l(60042),c=l.n(r),s=l(85403),i=l(77423),o=l(38505),m=l(42980),u=l(27818),d=l(63114);const p=[{key:"",name:"all"},{key:"t",name:"top"},{key:"r",name:"right"},{key:"b",name:"bottom"},{key:"l",name:"left"},{key:"x",name:"x direction"},{key:"y",name:"y direction"}],E=[0,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6],g=[].concat((0,n.Z)(E.slice(1).reverse()),(0,n.Z)(E.map((e=>-e)))),h=(e,t,l)=>`${e}${t}-${l<0?"n":""}${Math.abs(l)}`;function f(e){let{spacer:t}=e;return a.createElement(d.Z,{properties:["margin"],renderAfter:e=>a.createElement("code",null,e.margin)},a.createElement("div",{style:{display:"none"},className:`m-${t}`}))}function b(e){let{utilityClass:t}=e;return a.createElement("code",{className:c()(t),style:{display:"flex",alignItems:"center",justifyContent:"center",height:"5rem",textAlign:"center",width:"10rem",background:"rgba(0,0,0,.1)"}},t?`.${t}`:null)}function v(){const{0:e,1:t}=(0,a.useState)(3),{0:l,1:n}=(0,a.useState)("r"),r=h("m",l,e),c=E.map((e=>({spacer:e,pixelValue:a.createElement(f,{spacer:e})})));return a.createElement(u.Z,null,a.createElement(s.Z,{size:"md",className:"py-5"},a.createElement(m.Z,{title:"Spacing"}),a.createElement("h1",null,"Spacing"),a.createElement("h2",null,"Spacing according to pixels"),a.createElement(i.Z,{className:"pgn-doc__spacing-table",data:c,columns:[{Header:"Spacer value",accessor:"spacer"},{Header:"Pixel value",accessor:"pixelValue"}]},a.createElement(i.Z.Table,null)),a.createElement("h3",{className:"mt-3"},"Margin"),a.createElement("p",null,"Margin utilities are structured as"," ",a.createElement("code",null,".m{direction}-{level}"),". Negative numbers are represented as ",a.createElement("code",null,"n1"),", ",a.createElement("code",null,"n2"),", ",a.createElement("code",null,"n3"),", etc. Choose a direction and spacing level to change the margin applied to the center block below."),a.createElement("div",{className:"border p-4"},a.createElement("div",{className:"d-flex flex-column align-items-center"},a.createElement("h4",null,"Direction"),a.createElement("div",{className:"d-flex flex-wrap mt-2"},p.map((e=>{let{key:t,name:l}=e;return a.createElement(o.ZP.Radio,{key:t,className:"mx-2 mb-3",name:"direction",value:t,onChange:e=>n(e.target.value)},l)}))),a.createElement(o.ZP.Group,null,a.createElement(o.ZP.Label,{className:"d-block"},a.createElement("span",{className:"d-block text-center"},"Spacing Level: ",e)),a.createElement("div",{className:"d-flex align-items-center",style:{maxWidth:"20rem"}},"-6",a.createElement(o.ZP.Control,{className:"mx-2",type:"range",min:-6,step:.5,max:6,value:e,onChange:e=>t(parseInt(e.target.value,10))}),"6"))),a.createElement("div",{className:"d-flex justify-content-center"},a.createElement(b,null)),a.createElement("div",{className:"d-flex justify-content-center"},a.createElement(b,null),a.createElement("div",{className:"border border-danger  p-0",style:{}},a.createElement(b,{utilityClass:r})),a.createElement(b,null)),a.createElement("div",{className:"d-flex justify-content-center"},a.createElement(b,null))),a.createElement("h3",null,"Padding"),a.createElement("p",null,"Padding utilities are structured the same way:"," ",a.createElement("code",null,".p{direction}-{level}"),"."),a.createElement("h3",null,"All Spacing Utility Classes"),a.createElement("table",{className:"table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"All directions"),a.createElement("th",null,"Top"),a.createElement("th",null,"Right"),a.createElement("th",null,"Bottom"),a.createElement("th",null,"Left"),a.createElement("th",null,"X Direction"),a.createElement("th",null,"Y Direction"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",{colSpan:7},"Margin")),a.createElement("tr",null,p.map((e=>{let{key:t}=e;return a.createElement("td",null,g.map((e=>a.createElement("code",{className:"d-block"},".",h("m",t,e)))))}))),a.createElement("tr",null,a.createElement("th",{colSpan:7},"Padding")),a.createElement("tr",null,p.map((e=>{let{key:t}=e;return a.createElement("td",null,g.map((e=>a.createElement("code",{className:"d-block"},".",h("p",t,e)))))})))))))}b.defaultProps={utilityClass:""}},12834:function(e,t,l){l(21704);const n=Object.freeze({SUMMARY:"Summary",PROJECTS:"Projects",COMPONENTS:"Components",HOOKS:"Hooks",UTILS:"Utils",ICONS:"Icons"}),a=[{tab:n.SUMMARY,path:"/insights"},{tab:n.PROJECTS,path:"/insights/projects"},{tab:n.COMPONENTS,path:"/insights/components"},{tab:n.HOOKS,path:"/insights/hooks"},{tab:n.UTILS,path:"/insights/utils"},{tab:n.ICONS,path:"/insights/icons"}];e.exports={INSIGHTS_TABS:n,INSIGHTS_PAGES:a,FEATURES:{},LANGUAGES:[{label:"English",code:"en"},{label:"Arabic",code:"ar"},{label:"Catalan",code:"ca"},{label:"Chinese",code:"zh-cn"},{label:"French",code:"fr"},{label:"Hebrew",code:"he"},{label:"Indonesian",code:"id"},{label:"Italian (Italy)",code:"it-it"},{label:"Polish",code:"pl"},{label:"Portuguese (Portugal)",code:"pt-pt"},{label:"Russian",code:"ru"},{label:"Spanish",code:"es-419"},{label:"Spanish (Argentina)",code:"es-ar"},{label:"Spanish (Spain)",code:"es-es"},{label:"Thai",code:"th"},{label:"Ukrainian",code:"uk"},{label:"Turkish (Turkey)",code:"tr-tr"}]}},21704:function(e,t,l){e.exports=function(e){const{location:t}=l.g;return!!t&&new URLSearchParams(t.search).getAll("feature").includes(e)}}}]);
//# sourceMappingURL=component---src-pages-foundations-spacing-tsx-1d6de930c5055b3c1afe.js.map