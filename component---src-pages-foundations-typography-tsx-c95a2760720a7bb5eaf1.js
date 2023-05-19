(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[637,225],{73567:function(e,t,l){"use strict";var n=l(27378),a=l(58391),r=l(85403),c=l(59363);const m="3773363936";t.Z=function(){const{components:e}=(0,a.useStaticQuery)(m),{all:t}=e;return n.createElement(r.Z,{className:"py-3 bg-light-200 border-top border-light-300"},n.createElement(r.Z,{size:"xl",className:"py-5"},n.createElement("div",{className:"pgn-doc__menu-all-components pt-5"},n.createElement("h3",{className:"mb-4"},"All components (A-Z)"),n.createElement("ul",{className:"pgn-doc__menu-component-list list-unstyled small mb-4"},t.map((e=>n.createElement(c.T,Object.assign({key:e.id},e))))))))}},63114:function(e,t,l){"use strict";var n=l(27378),a=l(40504);const r={};function c(e){let{properties:t,renderBefore:l,renderAfter:c,children:m}=e;const{settings:s}=(0,n.useContext)(a.SettingsContext),{theme:o}=s,{0:i,1:u}=(0,n.useState)(r),d=(0,n.useRef)();return(0,n.useEffect)((()=>{u(r);const e=setTimeout((()=>{if(!d.current)return;const e=getComputedStyle(d.current),l=t.reduce(((t,l)=>(t[l]=e.getPropertyValue(l),t)),{});u(l)}),1e3);return()=>clearTimeout(e)}),[o,t]),n.createElement(n.Fragment,null,l?l(i):null,n.cloneElement(m,{ref:d}),c?c(i):null)}c.defaultProps={properties:[],renderBefore:void 0,renderAfter:void 0},t.Z=c},67136:function(e,t,l){"use strict";l.d(t,{Z:function(){return z}});var n=l(27378),a=l(23615),r=l.n(a),c=l(58391),m=l(71134),s=l(89784),o=l(85403),i=l(53738),u=l(57231),d=l(58247),E=l(28169),p=l(73567),h=l(81804),g=l(59363),f=l(87836),b=l(47844),N=l(53870),x=l(72756),S=l(38505),y=l(87394),k=l(12834),Z=l(40504);function v(e){let{showMinimizedTitle:t}=e;const{settings:l,handleSettingsChange:a,showSettings:r,closeSettings:m}=(0,n.useContext)(Z.SettingsContext);return n.createElement(f.ZP,{position:"right",show:r,variant:"light",onClose:m},n.createElement("div",{className:"pgn-doc__settings"},n.createElement("div",{className:"pgn-doc__settings-title"},n.createElement("h3",{className:"mb-0"},"Settings"),n.createElement(b.Z,{src:y.Close,iconAs:N.Z,alt:"Close settings",onClick:m,size:"sm"})),n.createElement(x.Z,{gap:1},n.createElement(S.ZP.Group,{className:"pgn-doc__settings-direction"},n.createElement(S.ZP.Label,{className:"pgn-doc__settings-label"},"Text direction"),n.createElement(S.ZP.RadioSet,{name:"direction",onChange:e=>a("direction",e.target.value),value:l.direction},n.createElement(S.ZP.Radio,{value:"ltr"},"Left to right"),n.createElement(S.ZP.Radio,{value:"rtl"},"Right to left"))),n.createElement(S.ZP.Group,null,n.createElement(S.ZP.Label,{className:"pgn-doc__settings-label"},"Language"),n.createElement(S.ZP.Control,{as:"select",value:l.language,onChange:e=>a("language",e.target.value)},k.LANGUAGES.map((e=>n.createElement("option",{key:e.code,value:e.code},e.label))))),!t&&n.createElement(S.ZP.Group,null,n.createElement(S.ZP.Label,{className:"pgn-doc__settings-label"},"Container Width"),n.createElement(S.ZP.Control,{as:"select",value:l.containerWidth,onChange:e=>a("containerWidth",e.target.value)},n.createElement("option",{value:"xs"},"xs"),n.createElement("option",{value:"sm"},"sm"),n.createElement("option",{value:"md"},"md (default)"),n.createElement("option",{value:"lg"},"lg"),n.createElement("option",{value:"xl"},"xl"))),n.createElement(E.ZP,{className:"pgn-doc__settings-nav--items"},n.createElement(E.ZP.Item,null,n.createElement(c.Link,{className:"nav-link",to:"/changelog"},"Changelog")),n.createElement(E.ZP.Item,null,n.createElement(E.ZP.Link,{href:"https://github.com/openedx/paragon"},"GitHub"))))))}v.defaultProps={showMinimizedTitle:!1};var w=v,C=l(60042),_=l.n(C);function P(e){let{data:t,className:l}=e;const{0:a,1:r}=(0,n.useState)(""),c=(0,n.useRef)();(0,n.useEffect)((()=>{c.current=new IntersectionObserver((e=>{e[0].intersectionRatio>=.5&&r(e[0].target.id)}),{rootMargin:"-50px 0px -80% 0px",threshold:.5});return document.querySelectorAll("main h2, main h3, main h4, main h5, main h6").forEach((e=>{var t;return null===(t=c.current)||void 0===t?void 0:t.observe(e)})),()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.disconnect()}}),[t]);const m=e=>{var t;return null!=e&&null!==(t=e.items)&&void 0!==t&&t.length?n.createElement("ul",{className:"pgn-doc__toc-list"},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement("a",{href:e.url,className:_()({active:`#${a}`===e.url})},e.title),!!e.items&&m(e))))):null},s=m(t);return s?n.createElement(d.Z,{offset:6,className:_()("pgn-doc__toc",l)},n.createElement("p",{className:"pgn-doc__toc-header"},"Contents"),s):null}const T={url:r().string,title:r().string,items:r().array};T.items=r().arrayOf(r().shape(T)),P.defaultProps={className:void 0};var L=P;function M(e){const t=`https://github.com/openedx/paragon/issues/new?title=%5Bparagon-openedx.netlify.app%5D%20Feedback%20(on%20${"undefined"!=typeof window?window.location.pathname:""})&amp;labels=docs&template=feedback_template.md`;return n.createElement(E.ZP.Link,Object.assign({onClick:()=>{l.g.analytics.track("openedx.paragon.docs.leave_feedback.clicked")},href:t,target:"_blank"},e),"Leave feedback")}M.defaultProps={className:"muted-link"};var A=M;function O(e){var t;let{children:l,showMinimizedTitle:a,hideFooterComponentMenu:r,isMdx:f,tocData:b}=e;const N=(0,m.useMediaQuery)({maxWidth:s.Z.extraLarge.minWidth}),{settings:x}=(0,n.useContext)(Z.SettingsContext),S=(0,c.useStaticQuery)("3649515864");return n.createElement("div",{className:"d-flex flex-column"},n.createElement(h.Z,{siteTitle:(null===(t=S.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",showMinimizedTitle:N||a}),n.createElement(w,{showMinimizedTitle:a}),f||!r?n.createElement(o.Z,{fluid:!0},n.createElement(i.Z,{className:"flex-xl-nowrap"},n.createElement(u.Z,{className:"d-none d-xl-block p-0",xl:"xl"===x.containerWidth?"auto":2},n.createElement(d.Z,{offset:6,className:"pgn-doc__toc p-0 pt-3"},n.createElement(g.Z,null))),n.createElement(u.Z,{xl:"xl"===x.containerWidth?10:8,lg:9,md:12,as:"main",className:"flex-grow-1"},l,n.createElement(o.Z,{size:"md"},n.createElement("hr",null),n.createElement(A,{className:"pgn__docs-page-feedback-link"}))),n.createElement(u.Z,{xl:2,lg:3,as:L,data:b,className:"d-none d-lg-block"}))):n.createElement("main",{className:"flex-grow-1"},l),!r&&n.createElement(p.Z,null),n.createElement(o.Z,{as:"footer",className:"py-3 border-top border-light-300"},n.createElement(E.ZP,{className:"d-flex align-items-center"},n.createElement(E.ZP.Item,null,n.createElement(c.Link,{className:"nav-link muted-link",to:"/status"},"Library status")),n.createElement(E.ZP.Item,null,n.createElement(c.Link,{className:"nav-link muted-link",to:"/insights"},"Usage insights")),n.createElement(E.ZP.Item,null,n.createElement(E.ZP.Link,{className:"muted-link",href:"https://github.com/openedx/.github/blob/master/CODE_OF_CONDUCT.md"},"Code of Conduct")),n.createElement(E.ZP.Item,null,n.createElement(E.ZP.Link,{className:"muted-link",href:"https://open.edx.org/"},"Open edX")),n.createElement(E.ZP.Item,null,n.createElement(A,null)),n.createElement("div",{className:"flex-grow-1"}),n.createElement("a",{href:"https://www.netlify.com"},n.createElement("img",{src:"https://www.netlify.com/img/global/badges/netlify-light.svg",alt:"Deploys by Netlify"})))))}const I={url:r().string,title:r().string,items:r().array};I.items=r().arrayOf(r().shape(I)),O.defaultProps={tocData:{},showMinimizedTitle:!1,hideFooterComponentMenu:!1,isMdx:!1};var z=O},68428:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return i}});var n=l(27378),a=l(85403),r=l(42980),c=l(63114),m=l(67136);const s={200:"Light",300:"Light",400:"Regular",500:"Medium",600:"Medium",700:"Bold",800:"Black"},o={properties:["font-size","line-height","font-family","font-weight"],renderAfter:e=>{const t=e["font-family"]?e["font-family"].split(",")[0]:null,l=s[e["font-weight"]],a=Math.round(10*Number.parseFloat(e["font-size"]))/10,r=Math.round(10*Number.parseFloat(e["line-height"]))/10;return n.createElement("p",{className:"m-0 text-muted"},n.createElement("span",{className:"mr-2"},t," ",l),a,"px / ",r,"px")}};function i(){return n.createElement(m.Z,null,n.createElement(a.Z,{size:"xl",className:"py-5"},n.createElement(r.Z,{title:"Typography"}),n.createElement("h1",null,"Typography"),n.createElement("table",{className:"w-100 table pgn-doc__status-table"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:3},n.createElement("h2",{className:"mt-3"},"Headings"))),n.createElement("tr",null,n.createElement("th",null,"Desktop"),n.createElement("th",null,"Mobile"),n.createElement("th",null,"CSS Class")),[1,2,3,4,5,6].map((e=>n.createElement("tr",null,n.createElement("td",null,n.createElement(c.Z,o,n.createElement("p",{className:`m-0 h${e}`},"Heading ",e))),n.createElement("td",{className:"mobile-type"},n.createElement(c.Z,o,n.createElement("p",{className:`m-0 h${e}`},"Heading ",e))),n.createElement("td",null,n.createElement("code",null,".h",e))))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement(c.Z,o,n.createElement("p",{className:"heading-label"},"Heading Label")),"A heading label is usually paired with and proceeds a Heading."),n.createElement("td",null,n.createElement("code",null,".heading-label")))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:3},n.createElement("h2",{className:"mt-3"},"Body"))),n.createElement("tr",null,n.createElement("th",{colSpan:2},"Desktop & Mobile"),n.createElement("th",null,"CSS Class")),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement(c.Z,o,n.createElement("p",{className:"lead m-0"},"Large Body"))),n.createElement("td",null,n.createElement("code",null,".lead"))),n.createElement("tr",null,n.createElement("td",{colSpan:3},n.createElement(c.Z,o,n.createElement("p",{className:"m-0"},"Body")))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement(c.Z,o,n.createElement("p",{className:"small m-0"},"Small Body"))),n.createElement("td",null,n.createElement("code",null,".small"))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement(c.Z,o,n.createElement("p",{className:"x-small m-0"},"Extra Small Body"))),n.createElement("td",null,n.createElement("code",null,".x-small"))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement(c.Z,o,n.createElement("p",{className:"micro m-0"},"Micro Body"))),n.createElement("td",null,n.createElement("code",null,".micro")))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:3},n.createElement("h2",{className:"mt-3"},"Display"))),n.createElement("tr",null,n.createElement("th",null,"Desktop"),n.createElement("th",null,"Mobile"),n.createElement("th",null,"CSS Class")),[1,2,3,4].map((e=>n.createElement("tr",null,n.createElement("td",null,n.createElement(c.Z,o,n.createElement("p",{className:`m-0 display-${e}`},"Display ",e))),n.createElement("td",{className:"mobile-type"},n.createElement(c.Z,o,n.createElement("p",{className:`m-0 display-${e}`},"Display ",e))),n.createElement("td",null,n.createElement("code",null,".display-",e)))))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:3},n.createElement("h2",{className:"mt-3"},"Links"))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement("a",{href:"#"},"Standalone Link")),n.createElement("td",null,n.createElement("small",null,"The default style for ",n.createElement("code",null,"a")," tags that don't appear in a ",n.createElement("code",null,"p")," tag."))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement("p",null,"An"," ",n.createElement("a",{className:"inline-link",href:"#"},"inline link")," ","in a sentence.")),n.createElement("td",null,n.createElement("small",null,"For links inside a ",n.createElement("code",null,"p")," or with the"," ",n.createElement("code",null,".inline-link")," class name."))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement("a",{className:"muted-link",href:"#"},"Muted, Standalone Link")),n.createElement("td",null,n.createElement("small",null,n.createElement("code",null,".muted-link")," not in a ",n.createElement("code",null,"p")," tag."))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement("p",null,"An"," ",n.createElement("a",{className:"muted-link inline-link",href:"#"},"muted, inline link")," ","in a sentence.")),n.createElement("td",null,n.createElement("small",null,"For ",n.createElement("code",null,".muted-link")," links inside a ",n.createElement("code",null,"p")," or with the ",n.createElement("code",null,".inline-link")," class name."))))),n.createElement("table",{className:"w-100 table pgn-doc__status-table"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:2},n.createElement("h2",null,"Decoration and Emphasis"))),n.createElement("tr",null,n.createElement("th",null,"Style"),n.createElement("th",null,"CSS Class")),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-lowercase"},"Lowercase text.")),n.createElement("td",null,n.createElement("code",null,".text-lowercase"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-uppercase"},"uppercase text.")),n.createElement("td",null,n.createElement("code",null,".text-uppercase"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-capitalize"},"capitalize text.")),n.createElement("td",null,n.createElement("code",null,".text-capitalize"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-decoration-none"},"No decorations.")),n.createElement("td",null,n.createElement("code",null,".text-decoration-none"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-italic"},"Italic text.")),n.createElement("td",null,n.createElement("code",null,".text-italic"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"font-weight-bold"},"Bold text.")),n.createElement("td",null,n.createElement("code",null,".font-weight-bold"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"font-weight-normal"},"Regular text.")),n.createElement("td",null,n.createElement("code",null,".font-weight-normal"))))),n.createElement("table",{className:"w-100 table pgn-doc__status-table"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:2},n.createElement("h2",null,"Alignment"))),n.createElement("tr",null,n.createElement("th",null,"Style"),n.createElement("th",null,"CSS Class")),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-left"},"left text.")),n.createElement("td",null,n.createElement("code",null,".text-left"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-right"},"right text.")),n.createElement("td",null,n.createElement("code",null,".text-right"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-center"},"center text.")),n.createElement("td",null,n.createElement("code",null,".text-center"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-justify"},"justify text."),n.createElement("p",{className:"text-justify text-muted small",style:{maxWidth:"20rem"}},"At the edge of forever tendrils of gossamer clouds corpus callosum culture Vangelis dispassionate extraterrestrial observer.")),n.createElement("td",null,n.createElement("code",null,".text-justify"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-wrap"},"wrap text.")),n.createElement("td",null,n.createElement("code",null,".text-wrap"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-nowrap"},"nowrap text.")),n.createElement("td",null,n.createElement("code",null,".text-nowrap")))))))}},12834:function(e,t,l){l(21704);const n=Object.freeze({SUMMARY:"Summary",PROJECTS:"Projects",COMPONENTS:"Components",HOOKS:"Hooks",UTILS:"Utils",ICONS:"Icons"}),a=[{tab:n.SUMMARY,path:"/insights"},{tab:n.PROJECTS,path:"/insights/projects"},{tab:n.COMPONENTS,path:"/insights/components"},{tab:n.HOOKS,path:"/insights/hooks"},{tab:n.UTILS,path:"/insights/utils"},{tab:n.ICONS,path:"/insights/icons"}];e.exports={INSIGHTS_TABS:n,INSIGHTS_PAGES:a,FEATURES:{},LANGUAGES:[{label:"English",code:"en"},{label:"Arabic",code:"ar"},{label:"Catalan",code:"ca"},{label:"Chinese",code:"zh-cn"},{label:"French",code:"fr"},{label:"Hebrew",code:"he"},{label:"Indonesian",code:"id"},{label:"Italian (Italy)",code:"it-it"},{label:"Polish",code:"pl"},{label:"Portuguese (Portugal)",code:"pt-pt"},{label:"Russian",code:"ru"},{label:"Spanish",code:"es-419"},{label:"Spanish (Argentina)",code:"es-ar"},{label:"Spanish (Spain)",code:"es-es"},{label:"Thai",code:"th"},{label:"Ukrainian",code:"uk"},{label:"Turkish (Turkey)",code:"tr-tr"}]}},21704:function(e,t,l){e.exports=function(e){const{location:t}=l.g;return!!t&&new URLSearchParams(t.search).getAll("feature").includes(e)}}}]);
//# sourceMappingURL=component---src-pages-foundations-typography-tsx-c95a2760720a7bb5eaf1.js.map