"use strict";(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[637],{63114:function(e,t,l){var n=l(27378),a=l(40504);const r={};function c(e){let{properties:t,renderBefore:l,renderAfter:c,children:m}=e;const{settings:E}=(0,n.useContext)(a.SettingsContext),{theme:u}=E,{0:s,1:o}=(0,n.useState)(r),d=(0,n.useRef)();return(0,n.useEffect)((()=>{o(r);const e=setTimeout((()=>{if(!d.current)return;const e=getComputedStyle(d.current),l=t.reduce(((t,l)=>(t[l]=e.getPropertyValue(l),t)),{});o(l)}),1e3);return()=>clearTimeout(e)}),[u,t]),n.createElement(n.Fragment,null,l?l(s):null,n.cloneElement(m,{ref:d}),c?c(s):null)}c.defaultProps={properties:[],renderBefore:void 0,renderAfter:void 0},t.Z=c},68428:function(e,t,l){l.r(t),l.d(t,{default:function(){return o}});var n=l(27378),a=l(85403),r=l(42980),c=l(63114),m=l(46197),E=l(40504);const u={200:"Light",300:"Light",400:"Regular",500:"Medium",600:"Medium",700:"Bold",800:"Black"},s={properties:["font-size","line-height","font-family","font-weight"],renderAfter:e=>{const t=e["font-family"]?e["font-family"].split(",")[0]:null,l=u[e["font-weight"]],a=Math.round(10*Number.parseFloat(e["font-size"]))/10,r=Math.round(10*Number.parseFloat(e["line-height"]))/10;return n.createElement("p",{className:"m-0 text-muted"},n.createElement("span",{className:"mr-2"},t," ",l),a,"px / ",r,"px")}};function o(e){let{pageContext:t}=e;const{settings:l}=(0,n.useContext)(E.SettingsContext);return n.createElement(m.Z,{isAutoToc:!0,githubEditPath:t.githubEditPath},n.createElement(r.Z,{title:"Typography"}),n.createElement(a.Z,{size:l.containerWidth,className:"py-5"},n.createElement("h1",null,"Typography"),n.createElement("table",{className:"w-100 table pgn-doc__status-table"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:3},n.createElement("h2",{className:"mt-3"},"Headings"))),n.createElement("tr",null,n.createElement("th",null,"Desktop"),n.createElement("th",null,"Mobile"),n.createElement("th",null,"CSS Class")),[1,2,3,4,5,6].map((e=>n.createElement("tr",{key:e},n.createElement("td",null,n.createElement(c.Z,s,n.createElement("p",{className:`m-0 h${e}`},"Heading ",e))),n.createElement("td",{className:"mobile-type"},n.createElement(c.Z,s,n.createElement("p",{className:`m-0 h${e}`},"Heading ",e))),n.createElement("td",null,n.createElement("code",null,".h",e))))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement(c.Z,s,n.createElement("p",{className:"heading-label"},"Heading Label")),"A heading label is usually paired with and proceeds a Heading."),n.createElement("td",null,n.createElement("code",null,".heading-label")))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:3},n.createElement("h2",{className:"mt-3"},"Body"))),n.createElement("tr",null,n.createElement("th",{colSpan:2},"Desktop & Mobile"),n.createElement("th",null,"CSS Class")),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement(c.Z,s,n.createElement("p",{className:"lead m-0"},"Large Body"))),n.createElement("td",null,n.createElement("code",null,".lead"))),n.createElement("tr",null,n.createElement("td",{colSpan:3},n.createElement(c.Z,s,n.createElement("p",{className:"m-0"},"Body")))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement(c.Z,s,n.createElement("p",{className:"small m-0"},"Small Body"))),n.createElement("td",null,n.createElement("code",null,".small"))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement(c.Z,s,n.createElement("p",{className:"x-small m-0"},"Extra Small Body"))),n.createElement("td",null,n.createElement("code",null,".x-small"))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement(c.Z,s,n.createElement("p",{className:"micro m-0"},"Micro Body"))),n.createElement("td",null,n.createElement("code",null,".micro")))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:3},n.createElement("h2",{className:"mt-3"},"Display"))),n.createElement("tr",null,n.createElement("th",null,"Desktop"),n.createElement("th",null,"Mobile"),n.createElement("th",null,"CSS Class")),[1,2,3,4].map((e=>n.createElement("tr",{key:e},n.createElement("td",null,n.createElement(c.Z,s,n.createElement("p",{className:`m-0 display-${e}`},"Display ",e))),n.createElement("td",{className:"mobile-type"},n.createElement(c.Z,s,n.createElement("p",{className:`m-0 display-${e}`},"Display ",e))),n.createElement("td",null,n.createElement("code",null,".display-",e)))))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:3},n.createElement("h2",{className:"mt-3"},"Links"))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement("a",{href:"#"},"Standalone Link")),n.createElement("td",null,n.createElement("small",null,"The default style for ",n.createElement("code",null,"a")," tags that don't appear in a ",n.createElement("code",null,"p")," tag."))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement("p",null,"An"," ",n.createElement("a",{className:"inline-link",href:"#"},"inline link")," ","in a sentence.")),n.createElement("td",null,n.createElement("small",null,"For links inside a ",n.createElement("code",null,"p")," or with the"," ",n.createElement("code",null,".inline-link")," class name."))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement("a",{className:"muted-link",href:"#"},"Muted, Standalone Link")),n.createElement("td",null,n.createElement("small",null,n.createElement("code",null,".muted-link")," not in a ",n.createElement("code",null,"p")," tag."))),n.createElement("tr",null,n.createElement("td",{colSpan:2},n.createElement("p",null,"An"," ",n.createElement("a",{className:"muted-link inline-link",href:"#"},"muted, inline link")," ","in a sentence.")),n.createElement("td",null,n.createElement("small",null,"For ",n.createElement("code",null,".muted-link")," links inside a ",n.createElement("code",null,"p")," or with the ",n.createElement("code",null,".inline-link")," class name."))))),n.createElement("table",{className:"w-100 table pgn-doc__status-table"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:2},n.createElement("h2",null,"Decoration and Emphasis"))),n.createElement("tr",null,n.createElement("th",null,"Style"),n.createElement("th",null,"CSS Class")),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-lowercase"},"Lowercase text.")),n.createElement("td",null,n.createElement("code",null,".text-lowercase"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-uppercase"},"uppercase text.")),n.createElement("td",null,n.createElement("code",null,".text-uppercase"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-capitalize"},"capitalize text.")),n.createElement("td",null,n.createElement("code",null,".text-capitalize"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-decoration-none"},"No decorations.")),n.createElement("td",null,n.createElement("code",null,".text-decoration-none"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-italic"},"Italic text.")),n.createElement("td",null,n.createElement("code",null,".text-italic"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"font-weight-bold"},"Bold text.")),n.createElement("td",null,n.createElement("code",null,".font-weight-bold"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"font-weight-normal"},"Regular text.")),n.createElement("td",null,n.createElement("code",null,".font-weight-normal"))))),n.createElement("table",{className:"w-100 table pgn-doc__status-table"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:2},n.createElement("h2",null,"Alignment"))),n.createElement("tr",null,n.createElement("th",null,"Style"),n.createElement("th",null,"CSS Class")),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-left"},"left text.")),n.createElement("td",null,n.createElement("code",null,".text-left"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-right"},"right text.")),n.createElement("td",null,n.createElement("code",null,".text-right"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-center"},"center text.")),n.createElement("td",null,n.createElement("code",null,".text-center"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-justify"},"justify text."),n.createElement("p",{className:"text-justify text-muted small",style:{maxWidth:"20rem"}},"At the edge of forever tendrils of gossamer clouds corpus callosum culture Vangelis dispassionate extraterrestrial observer.")),n.createElement("td",null,n.createElement("code",null,".text-justify"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-wrap"},"wrap text.")),n.createElement("td",null,n.createElement("code",null,".text-wrap"))),n.createElement("tr",null,n.createElement("td",null,n.createElement("p",{className:"text-nowrap"},"nowrap text.")),n.createElement("td",null,n.createElement("code",null,".text-nowrap")))))))}}}]);
//# sourceMappingURL=component---src-pages-foundations-typography-tsx-0b943bcce954309ce296.js.map