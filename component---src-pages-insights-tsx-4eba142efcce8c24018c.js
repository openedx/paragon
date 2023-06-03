(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[225],{73567:function(e,t,a){"use strict";var n=a(27378),l=a(58391),s=a(85403),i=a(59363);const c="3773363936";t.Z=function(){const{components:e}=(0,l.useStaticQuery)(c),{all:t}=e;return n.createElement(s.Z,{className:"py-3 bg-light-200 border-top border-light-300"},n.createElement(s.Z,{size:"xl",className:"py-5"},n.createElement("div",{className:"pgn-doc__menu-all-components pt-5"},n.createElement("h3",{className:"mb-4"},"All components (A-Z)"),n.createElement("ul",{className:"pgn-doc__menu-component-list list-unstyled small mb-4"},t.map((e=>n.createElement(i.T,Object.assign({key:e.id},e))))))))}},67136:function(e,t,a){"use strict";a.d(t,{Z:function(){return R}});var n=a(27378),l=a(23615),s=a.n(l),i=a(58391),c=a(71134),o=a(48898),r=a(85403),m=a(53738),d=a(57231),u=a(58247),g=a(28169),p=a(73567),h=a(81804),E=a(59363),b=a(87836),f=a(2742),v=a(53870),N=a(72756),Z=a(38505),k=a(68702),_=a(12834),x=a(40504);function P(e){let{showMinimizedTitle:t}=e;const{settings:a,handleSettingsChange:l,showSettings:s,closeSettings:c}=(0,n.useContext)(x.SettingsContext);return n.createElement(b.ZP,{position:"right",show:s,variant:"light",onClose:c},n.createElement("div",{className:"pgn-doc__settings"},n.createElement("div",{className:"pgn-doc__settings-title"},n.createElement("h3",{className:"mb-0"},"Settings"),n.createElement(f.Z,{src:k.Close,iconAs:v.Z,alt:"Close settings",onClick:c,size:"sm"})),n.createElement(N.Z,{gap:1},n.createElement(Z.ZP.Group,{className:"pgn-doc__settings-direction"},n.createElement(Z.ZP.Label,{className:"pgn-doc__settings-label"},"Text direction"),n.createElement(Z.ZP.RadioSet,{name:"direction",onChange:e=>l("direction",e.target.value),value:a.direction},n.createElement(Z.ZP.Radio,{value:"ltr"},"Left to right"),n.createElement(Z.ZP.Radio,{value:"rtl"},"Right to left"))),n.createElement(Z.ZP.Group,null,n.createElement(Z.ZP.Label,{className:"pgn-doc__settings-label"},"Language"),n.createElement(Z.ZP.Control,{as:"select",value:a.language,onChange:e=>l("language",e.target.value)},_.LANGUAGES.map((e=>n.createElement("option",{key:e.code,value:e.code},e.label))))),!t&&n.createElement(Z.ZP.Group,null,n.createElement(Z.ZP.Label,{className:"pgn-doc__settings-label"},"Container Width"),n.createElement(Z.ZP.Control,{as:"select",value:a.containerWidth,onChange:e=>l("containerWidth",e.target.value)},n.createElement("option",{value:"xs"},"xs"),n.createElement("option",{value:"sm"},"sm"),n.createElement("option",{value:"md"},"md (default)"),n.createElement("option",{value:"lg"},"lg"),n.createElement("option",{value:"xl"},"xl"))),n.createElement(g.ZP,{className:"pgn-doc__settings-nav--items"},n.createElement(g.ZP.Item,null,n.createElement(i.Link,{className:"nav-link",to:"/changelog"},"Changelog")),n.createElement(g.ZP.Item,null,n.createElement(g.ZP.Link,{href:"https://github.com/openedx/paragon"},"GitHub"))))))}P.defaultProps={showMinimizedTitle:!1};var S=P,C=a(60042),y=a.n(C);function w(e){let{data:t,className:a}=e;const{0:l,1:s}=(0,n.useState)(""),i=(0,n.useRef)();(0,n.useEffect)((()=>{i.current=new IntersectionObserver((e=>{e[0].intersectionRatio>=.5&&s(e[0].target.id)}),{rootMargin:"-50px 0px -80% 0px",threshold:.5});return document.querySelectorAll("main h2, main h3, main h4, main h5, main h6").forEach((e=>{var t;return null===(t=i.current)||void 0===t?void 0:t.observe(e)})),()=>{var e;return null===(e=i.current)||void 0===e?void 0:e.disconnect()}}),[t]);const c=e=>{var t;return null!=e&&null!==(t=e.items)&&void 0!==t&&t.length?n.createElement("ul",{className:"pgn-doc__toc-list"},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement("a",{href:e.url,className:y()({active:`#${l}`===e.url})},e.title),!!e.items&&c(e))))):null},o=c(t);return o?n.createElement(u.Z,{offset:6,className:y()("pgn-doc__toc",a)},n.createElement("p",{className:"pgn-doc__toc-header"},"Contents"),o):null}const T={url:s().string,title:s().string,items:s().array};T.items=s().arrayOf(s().shape(T)),w.defaultProps={className:void 0};var O=w;function I(e){const t=`https://github.com/openedx/paragon/issues/new?title=%5Bparagon-openedx.netlify.app%5D%20Feedback%20(on%20${"undefined"!=typeof window?window.location.pathname:""})&amp;labels=docs&template=feedback_template.md`;return n.createElement(g.ZP.Link,Object.assign({onClick:()=>{a.g.analytics.track("openedx.paragon.docs.leave_feedback.clicked")},href:t,target:"_blank"},e),"Leave feedback")}I.defaultProps={className:"muted-link"};var L=I;function M(e){var t;let{children:a,showMinimizedTitle:l,hideFooterComponentMenu:s,isMdx:b,tocData:f}=e;const v=(0,c.useMediaQuery)({maxWidth:o.Z.extraLarge.minWidth}),{settings:N}=(0,n.useContext)(x.SettingsContext),Z=(0,i.useStaticQuery)("3649515864");return n.createElement("div",{className:"d-flex flex-column"},n.createElement(h.Z,{siteTitle:(null===(t=Z.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",showMinimizedTitle:v||l}),n.createElement(S,{showMinimizedTitle:l}),b||!s?n.createElement(r.Z,{fluid:!0},n.createElement(m.Z,{className:"flex-xl-nowrap"},n.createElement(d.Z,{className:"d-none d-xl-block p-0",xl:"xl"===N.containerWidth?"auto":2},n.createElement(u.Z,{offset:6,className:"pgn-doc__toc p-0 pt-3"},n.createElement(E.Z,null))),n.createElement(d.Z,{xl:"xl"===N.containerWidth?10:8,lg:9,md:12,as:"main",className:"flex-grow-1"},a,n.createElement(r.Z,{size:"md"},n.createElement("hr",null),n.createElement(L,{className:"pgn__docs-page-feedback-link"}))),n.createElement(d.Z,{xl:2,lg:3,as:O,data:f,className:"d-none d-lg-block"}))):n.createElement("main",{className:"flex-grow-1"},a),!s&&n.createElement(p.Z,null),n.createElement(r.Z,{as:"footer",className:"py-3 border-top border-light-300"},n.createElement(g.ZP,{className:"d-flex align-items-center"},n.createElement(g.ZP.Item,null,n.createElement(i.Link,{className:"nav-link muted-link",to:"/status"},"Library status")),n.createElement(g.ZP.Item,null,n.createElement(i.Link,{className:"nav-link muted-link",to:"/insights"},"Usage insights")),n.createElement(g.ZP.Item,null,n.createElement(g.ZP.Link,{className:"muted-link",href:"https://github.com/openedx/.github/blob/master/CODE_OF_CONDUCT.md"},"Code of Conduct")),n.createElement(g.ZP.Item,null,n.createElement(g.ZP.Link,{className:"muted-link",href:"https://open.edx.org/"},"Open edX")),n.createElement(g.ZP.Item,null,n.createElement(L,null)),n.createElement("div",{className:"flex-grow-1"}),n.createElement("a",{href:"https://www.netlify.com"},n.createElement("img",{src:"https://www.netlify.com/img/global/badges/netlify-light.svg",alt:"Deploys by Netlify"})))))}const A={url:s().string,title:s().string,items:s().array};A.items=s().arrayOf(s().shape(A)),M.defaultProps={tocData:{},showMinimizedTitle:!1,hideFooterComponentMenu:!1,isMdx:!1};var R=M},12834:function(e,t,a){a(21704);const n=Object.freeze({SUMMARY:"Summary",PROJECTS:"Projects",COMPONENTS:"Components",HOOKS:"Hooks",UTILS:"Utils",ICONS:"Icons"}),l=[{tab:n.SUMMARY,path:"/insights"},{tab:n.PROJECTS,path:"/insights/projects"},{tab:n.COMPONENTS,path:"/insights/components"},{tab:n.HOOKS,path:"/insights/hooks"},{tab:n.UTILS,path:"/insights/utils"},{tab:n.ICONS,path:"/insights/icons"}];e.exports={INSIGHTS_TABS:n,INSIGHTS_PAGES:l,FEATURES:{},LANGUAGES:[{label:"English",code:"en"},{label:"Arabic",code:"ar"},{label:"Catalan",code:"ca"},{label:"Chinese",code:"zh-cn"},{label:"French",code:"fr"},{label:"Hebrew",code:"he"},{label:"Indonesian",code:"id"},{label:"Italian (Italy)",code:"it-it"},{label:"Polish",code:"pl"},{label:"Portuguese (Portugal)",code:"pt-pt"},{label:"Russian",code:"ru"},{label:"Spanish",code:"es-419"},{label:"Spanish (Argentina)",code:"es-ar"},{label:"Spanish (Spain)",code:"es-es"},{label:"Thai",code:"th"},{label:"Ukrainian",code:"uk"},{label:"Turkish (Turkey)",code:"tr-tr"}]}},21704:function(e,t,a){e.exports=function(e){const{location:t}=a.g;return!!t&&new URLSearchParams(t.search).getAll("feature").includes(e)}}}]);
//# sourceMappingURL=component---src-pages-insights-tsx-4eba142efcce8c24018c.js.map