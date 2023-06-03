(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[733,225],{73567:function(e,t,a){"use strict";var n=a(27378),l=a(58391),s=a(85403),r=a(59363);const c="3773363936";t.Z=function(){const{components:e}=(0,l.useStaticQuery)(c),{all:t}=e;return n.createElement(s.Z,{className:"py-3 bg-light-200 border-top border-light-300"},n.createElement(s.Z,{size:"xl",className:"py-5"},n.createElement("div",{className:"pgn-doc__menu-all-components pt-5"},n.createElement("h3",{className:"mb-4"},"All components (A-Z)"),n.createElement("ul",{className:"pgn-doc__menu-component-list list-unstyled small mb-4"},t.map((e=>n.createElement(r.T,Object.assign({key:e.id},e))))))))}},67136:function(e,t,a){"use strict";a.d(t,{Z:function(){return R}});var n=a(27378),l=a(23615),s=a.n(l),r=a(58391),c=a(71134),i=a(48898),o=a(85403),m=a(53738),u=a(57231),d=a(58247),p=a(28169),g=a(73567),h=a(81804),E=a(59363),f=a(87836),b=a(2742),v=a(53870),N=a(72756),Z=a(38505),S=a(68702),k=a(12834),_=a(40504);function x(e){let{showMinimizedTitle:t}=e;const{settings:a,handleSettingsChange:l,showSettings:s,closeSettings:c}=(0,n.useContext)(_.SettingsContext);return n.createElement(f.ZP,{position:"right",show:s,variant:"light",onClose:c},n.createElement("div",{className:"pgn-doc__settings"},n.createElement("div",{className:"pgn-doc__settings-title"},n.createElement("h3",{className:"mb-0"},"Settings"),n.createElement(b.Z,{src:S.Close,iconAs:v.Z,alt:"Close settings",onClick:c,size:"sm"})),n.createElement(N.Z,{gap:1},n.createElement(Z.ZP.Group,{className:"pgn-doc__settings-direction"},n.createElement(Z.ZP.Label,{className:"pgn-doc__settings-label"},"Text direction"),n.createElement(Z.ZP.RadioSet,{name:"direction",onChange:e=>l("direction",e.target.value),value:a.direction},n.createElement(Z.ZP.Radio,{value:"ltr"},"Left to right"),n.createElement(Z.ZP.Radio,{value:"rtl"},"Right to left"))),n.createElement(Z.ZP.Group,null,n.createElement(Z.ZP.Label,{className:"pgn-doc__settings-label"},"Language"),n.createElement(Z.ZP.Control,{as:"select",value:a.language,onChange:e=>l("language",e.target.value)},k.LANGUAGES.map((e=>n.createElement("option",{key:e.code,value:e.code},e.label))))),!t&&n.createElement(Z.ZP.Group,null,n.createElement(Z.ZP.Label,{className:"pgn-doc__settings-label"},"Container Width"),n.createElement(Z.ZP.Control,{as:"select",value:a.containerWidth,onChange:e=>l("containerWidth",e.target.value)},n.createElement("option",{value:"xs"},"xs"),n.createElement("option",{value:"sm"},"sm"),n.createElement("option",{value:"md"},"md (default)"),n.createElement("option",{value:"lg"},"lg"),n.createElement("option",{value:"xl"},"xl"))),n.createElement(p.ZP,{className:"pgn-doc__settings-nav--items"},n.createElement(p.ZP.Item,null,n.createElement(r.Link,{className:"nav-link",to:"/changelog"},"Changelog")),n.createElement(p.ZP.Item,null,n.createElement(p.ZP.Link,{href:"https://github.com/openedx/paragon"},"GitHub"))))))}x.defaultProps={showMinimizedTitle:!1};var C=x,P=a(60042),y=a.n(P);function w(e){let{data:t,className:a}=e;const{0:l,1:s}=(0,n.useState)(""),r=(0,n.useRef)();(0,n.useEffect)((()=>{r.current=new IntersectionObserver((e=>{e[0].intersectionRatio>=.5&&s(e[0].target.id)}),{rootMargin:"-50px 0px -80% 0px",threshold:.5});return document.querySelectorAll("main h2, main h3, main h4, main h5, main h6").forEach((e=>{var t;return null===(t=r.current)||void 0===t?void 0:t.observe(e)})),()=>{var e;return null===(e=r.current)||void 0===e?void 0:e.disconnect()}}),[t]);const c=e=>{var t;return null!=e&&null!==(t=e.items)&&void 0!==t&&t.length?n.createElement("ul",{className:"pgn-doc__toc-list"},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement("a",{href:e.url,className:y()({active:`#${l}`===e.url})},e.title),!!e.items&&c(e))))):null},i=c(t);return i?n.createElement(d.Z,{offset:6,className:y()("pgn-doc__toc",a)},n.createElement("p",{className:"pgn-doc__toc-header"},"Contents"),i):null}const T={url:s().string,title:s().string,items:s().array};T.items=s().arrayOf(s().shape(T)),w.defaultProps={className:void 0};var L=w;function M(e){const t=`https://github.com/openedx/paragon/issues/new?title=%5Bparagon-openedx.netlify.app%5D%20Feedback%20(on%20${"undefined"!=typeof window?window.location.pathname:""})&amp;labels=docs&template=feedback_template.md`;return n.createElement(p.ZP.Link,Object.assign({onClick:()=>{a.g.analytics.track("openedx.paragon.docs.leave_feedback.clicked")},href:t,target:"_blank"},e),"Leave feedback")}M.defaultProps={className:"muted-link"};var O=M;function I(e){var t;let{children:a,showMinimizedTitle:l,hideFooterComponentMenu:s,isMdx:f,tocData:b}=e;const v=(0,c.useMediaQuery)({maxWidth:i.Z.extraLarge.minWidth}),{settings:N}=(0,n.useContext)(_.SettingsContext),Z=(0,r.useStaticQuery)("3649515864");return n.createElement("div",{className:"d-flex flex-column"},n.createElement(h.Z,{siteTitle:(null===(t=Z.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",showMinimizedTitle:v||l}),n.createElement(C,{showMinimizedTitle:l}),f||!s?n.createElement(o.Z,{fluid:!0},n.createElement(m.Z,{className:"flex-xl-nowrap"},n.createElement(u.Z,{className:"d-none d-xl-block p-0",xl:"xl"===N.containerWidth?"auto":2},n.createElement(d.Z,{offset:6,className:"pgn-doc__toc p-0 pt-3"},n.createElement(E.Z,null))),n.createElement(u.Z,{xl:"xl"===N.containerWidth?10:8,lg:9,md:12,as:"main",className:"flex-grow-1"},a,n.createElement(o.Z,{size:"md"},n.createElement("hr",null),n.createElement(O,{className:"pgn__docs-page-feedback-link"}))),n.createElement(u.Z,{xl:2,lg:3,as:L,data:b,className:"d-none d-lg-block"}))):n.createElement("main",{className:"flex-grow-1"},a),!s&&n.createElement(g.Z,null),n.createElement(o.Z,{as:"footer",className:"py-3 border-top border-light-300"},n.createElement(p.ZP,{className:"d-flex align-items-center"},n.createElement(p.ZP.Item,null,n.createElement(r.Link,{className:"nav-link muted-link",to:"/status"},"Library status")),n.createElement(p.ZP.Item,null,n.createElement(r.Link,{className:"nav-link muted-link",to:"/insights"},"Usage insights")),n.createElement(p.ZP.Item,null,n.createElement(p.ZP.Link,{className:"muted-link",href:"https://github.com/openedx/.github/blob/master/CODE_OF_CONDUCT.md"},"Code of Conduct")),n.createElement(p.ZP.Item,null,n.createElement(p.ZP.Link,{className:"muted-link",href:"https://open.edx.org/"},"Open edX")),n.createElement(p.ZP.Item,null,n.createElement(O,null)),n.createElement("div",{className:"flex-grow-1"}),n.createElement("a",{href:"https://www.netlify.com"},n.createElement("img",{src:"https://www.netlify.com/img/global/badges/netlify-light.svg",alt:"Deploys by Netlify"})))))}const A={url:s().string,title:s().string,items:s().array};A.items=s().arrayOf(s().shape(A)),I.defaultProps={tocData:{},showMinimizedTitle:!1,hideFooterComponentMenu:!1,isMdx:!1};var R=I},74001:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var n=a(27378),l=a(58391),s=a(85403),r=a(77423);function c(e){let{status:t,noLeftMargin:a}=e;return t?n.createElement("span",{className:`status-indicator ${a&&"status-no-left-margin"} ${t.toLowerCase().replace(" ","-")}`},n.createElement("span",null,t)):null}c.defaultProps={noLeftMargin:!1};var i=a(42980),o=a(67136);function m(){return n.createElement(o.Z,null,n.createElement(s.Z,{size:"md",className:"py-5"},n.createElement(i.Z,{title:"Status"}),n.createElement("h1",null,"Library Status"),n.createElement("h3",null,"Components Status"),n.createElement(l.StaticQuery,{query:"1053756292",render:e=>{let{allMdx:t}=e;if(!t||!t.nodes)return null;const a=t.nodes.map((e=>{let{frontmatter:t}=e;return t})).filter((e=>{let{title:t}=e;return"My Component"!==t}));return n.createElement(r.Z,{data:a.map((e=>{let{title:t,status:a,designStatus:l,devStatus:s,notes:r}=e;return{name:n.createElement("div",{className:"status-indicator-wrapper"},n.createElement("h5",null,t," ",n.createElement(c,{status:a})),n.createElement("pre",null,r)),designStatus:n.createElement(c,{status:l}),devStatus:n.createElement(c,{status:s})}})),columns:[{Header:"Component",accessor:"name"},{Header:"Design",accessor:"designStatus"},{Header:"Development",accessor:"devStatus"}]},n.createElement(r.Z.Table,null))}})))}},12834:function(e,t,a){a(21704);const n=Object.freeze({SUMMARY:"Summary",PROJECTS:"Projects",COMPONENTS:"Components",HOOKS:"Hooks",UTILS:"Utils",ICONS:"Icons"}),l=[{tab:n.SUMMARY,path:"/insights"},{tab:n.PROJECTS,path:"/insights/projects"},{tab:n.COMPONENTS,path:"/insights/components"},{tab:n.HOOKS,path:"/insights/hooks"},{tab:n.UTILS,path:"/insights/utils"},{tab:n.ICONS,path:"/insights/icons"}];e.exports={INSIGHTS_TABS:n,INSIGHTS_PAGES:l,FEATURES:{},LANGUAGES:[{label:"English",code:"en"},{label:"Arabic",code:"ar"},{label:"Catalan",code:"ca"},{label:"Chinese",code:"zh-cn"},{label:"French",code:"fr"},{label:"Hebrew",code:"he"},{label:"Indonesian",code:"id"},{label:"Italian (Italy)",code:"it-it"},{label:"Polish",code:"pl"},{label:"Portuguese (Portugal)",code:"pt-pt"},{label:"Russian",code:"ru"},{label:"Spanish",code:"es-419"},{label:"Spanish (Argentina)",code:"es-ar"},{label:"Spanish (Spain)",code:"es-es"},{label:"Thai",code:"th"},{label:"Ukrainian",code:"uk"},{label:"Turkish (Turkey)",code:"tr-tr"}]}},21704:function(e,t,a){e.exports=function(e){const{location:t}=a.g;return!!t&&new URLSearchParams(t.search).getAll("feature").includes(e)}}}]);
//# sourceMappingURL=component---src-pages-status-tsx-4ac0ede1285001169fa6.js.map