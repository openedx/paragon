"use strict";(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[353],{90865:function(e,a,t){t.r(a),t.d(a,{default:function(){return O}});var l=t(4769),o=t(60141),n=t(27378),r=t(90448),c=t(38505),s=t(96320),d=t(47844),i=t(53870),m=t(29486),b=t(85403),p=t(67354),u=t(6469),h=t(27499),g=t(42980),x=t(46197),E=t(40504);function w(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function y(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?w(Object(t),!0).forEach((function(a){(0,o.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}const v=["down","up","right","left","centered"],k=[1,2,3,4,5],_="0px 0px 0px #000",f=[{key:"x",name:"Offset X"},{key:"y",name:"Offset Y"},{key:"blur",name:"Blur"},{key:"spread",name:"Spread"},{key:"color",name:"Color"}];function N(){const{0:e,1:a}=(0,n.useState)(!1),t=(e,t)=>{navigator.clipboard.writeText(`@include pgn-box-shadow(${e}, "${t}");`),a(!0)},l=k.map((e=>v.map((a=>n.createElement("div",{key:a,role:"button",className:`pgn-doc__box-shadow-cell box-shadow-${a}-${e}`,tabIndex:0,"aria-label":`Box-shadow cell ${a}-${e}`,onClick:()=>t(e,a),onKeyDown:l=>{"Enter"===l.key&&t(e,a)}})))));return n.createElement("div",{className:"pgn-doc__box-shadow-cells"},l,n.createElement(r.ZP,{className:"pgn-doc__box-shadow--toast",onClose:()=>a(!1),show:e,delay:2e3},"Box-shadow copied to clipboard!"))}function $(e){let{id:a,updateBoxShadow:l,removeBoxShadowLayer:o,disableBoxShadowLayer:r,enableBoxShadowLayer:m,isDisabled:b,canDelete:g}=e;const{0:x,1:E}=(0,n.useState)({x:0,y:0,blur:0,spread:0,color:"#000",inset:!1}),w=(e,o)=>{t.g.analytics.track("openedx.paragon.docs.elevation.generator.updated",{property:e,value:o});const n=y(y({},x),{},{[e]:o});E(n),l(n,a)};return n.createElement("section",{className:"pgn-doc__box-shadow-toolkit--controls-box"},f.map((e=>{let{key:t,name:l}=e;return n.createElement(c.ZP.Label,{className:"d-block",key:t,htmlFor:`toolkit-control-${t}`},l,n.createElement(s.Z,{id:`toolkit-control-${t}-${a}`,key:t,min:"x"===t||"y"===t?"-100":"0",max:"100",type:"color"===t?"color":"range",defaultValue:"0",onChange:e=>w(t,e.target.value),disabled:b}))})),n.createElement("div",{className:"pgn-doc__box-shadow-toolkit--controls-box--disable-btn-wrapper"},n.createElement(c.ZP.Checkbox,{onChange:()=>w("inset",!x.inset),floatLabelLeft:!0,disabled:b},"Inset:"),n.createElement("div",null,b?n.createElement(d.E,{tooltipPlacement:"top",tooltipContent:"Enable layer",src:p.Z,iconAs:i.Z,alt:"Enable layer",onClick:()=>m(a),variant:"success",className:"pgn-doc__box-shadow-toolkit--controls-box--disable-btn"}):n.createElement(d.E,{tooltipPlacement:"top",tooltipContent:"Disable layer",src:u.Z,iconAs:i.Z,alt:"Disable layer",onClick:()=>r(a),variant:"secondary",className:"pgn-doc__box-shadow-toolkit--controls-box--disable-btn"}),g&&n.createElement(d.E,{tooltipPlacement:"top",tooltipContent:"Remove layer",src:h.Z,iconAs:i.Z,alt:"Remove layer",onClick:()=>o(a),variant:"danger",className:"pgn-doc__box-shadow-toolkit--controls-box--remove-btn"}))))}function C(){const{0:e,1:a}=(0,n.useState)([{id:1,enabled:!0,style:_}]),o=(t,l)=>{a(e.map((e=>l===e.id?y(y({},e),{},{style:t.inset?`inset ${t.x}px ${t.y}px ${t.blur}px ${t.spread}px ${t.color}`:`${t.x}px ${t.y}px ${t.blur}px ${t.spread}px ${t.color}`}):y({},e))))},r=l=>{t.g.analytics.track("openedx.paragon.elevation.shadow-generator.layer.removed"),a(e.filter((e=>e.id!==l)))},c=l=>{t.g.analytics.track("openedx.paragon.elevation.shadow-generator.layer.disabled");const o=e.map((e=>e.id===l?y(y({},e),{},{enabled:!1}):e));a(o)},s=l=>{t.g.analytics.track("openedx.paragon.elevation.shadow-generator.layer.enabled");const o=e.map((e=>e.id===l?y(y({},e),{},{enabled:!0}):e));a(o)};return n.createElement("section",{className:"pgn-doc__box-shadow-generator"},n.createElement("div",{className:"pgn-doc__box-shadow-generator__preview"},n.createElement("div",{className:"pgn-doc__box-shadow-generator__preview-box border",style:{boxShadow:e.filter((e=>e.enabled)).map((e=>e.style)).join(",")}})),n.createElement("div",{className:"pgn-doc__box-shadow-generator--toolkit"},n.createElement("div",{className:"d-flex overflow-auto mb-2"},e.map((a=>n.createElement($,{key:a.id,id:a.id,updateBoxShadow:o,removeBoxShadowLayer:r,disableBoxShadowLayer:c,enableBoxShadowLayer:s,isDisabled:!a.enabled,canDelete:e.length>1})))),n.createElement("div",{className:"d-flex justify-content-between flex-column flex-md-row"},n.createElement("code",{className:"pgn-doc__box-shadow-generator--toolkit-code mb-3 mb-md-0"},e.filter((e=>e.enabled)).length>0?`box-shadow: ${e.filter((e=>e.enabled)).map((e=>e.style)).join(",")};`:"No styles applied"),n.createElement(m.ZP,{onClick:()=>{t.g.analytics.track("openedx.paragon.elevation.generator.layer.added"),a([].concat((0,l.Z)(e),[{id:e[e.length-1].id+1,enabled:!0,style:_}]))},variant:"dark"},"Add New Layer"))))}function O(){const{settings:e}=(0,n.useContext)(E.SettingsContext),a=k.map((e=>n.createElement("p",{key:e,className:"pgn-doc__box-shadow-level-title h3"},"Level ",e))),t=v.map((e=>n.createElement("p",{key:e,className:"pgn-doc__box-shadow-side-title h3"},e.charAt(0).toUpperCase()+e.substring(1))));return n.createElement(x.Z,{isAutoToc:!0},n.createElement(g.Z,{title:"Elevation"}),n.createElement(b.Z,{size:e.containerWidth,className:"py-5"},n.createElement("h1",{className:"mb-3"},"Elevation & Shadow"),n.createElement("p",{className:"mb-5"},"You can quickly add a ",n.createElement("code",null,"box-shadow")," with the Clickable Box-Shadow Grid. Click on the ",n.createElement("code",null,"box-shadow")," you like and it will be copied to your clipboard."),n.createElement("div",{className:"pgn-doc__box-shadow-wrapper"},n.createElement("div",{className:"d-flex pt-1"},n.createElement("div",{className:"pgn-doc__box-shadow-level-titles"},a),n.createElement(N,null)),n.createElement("div",{className:"pgn-doc__box-shadow-side-titles"},n.createElement("h3",{className:"pgn-doc__box-shadow-side-title"},"Direction"),t)),n.createElement("h3",null,"Box-shadow Usage"),n.createElement("p",null,"Include these box-shadows colors in scss files in this ways:"),n.createElement("h4",null,"Mixin"),n.createElement("code",{className:"d-block mb-4 lead bg-gray-100 p-3"},"pgn-box-shadow($level, $side)"),n.createElement("div",{className:"pgn-doc__box-shadow--table-wrapper"},n.createElement("table",{className:"pgn-doc__table table"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("strong",null,"Direction name")),n.createElement("td",null,v.map((e=>n.createElement("code",{key:e,className:"mr-2"},e))))),n.createElement("tr",null,n.createElement("td",null,n.createElement("strong",null,"Levels"),n.createElement("br",null),n.createElement("p",null,"Box-shadows elevation levels")),n.createElement("td",null,k.map((e=>n.createElement("code",{key:e,className:"mr-2"},e)))))))),n.createElement("h4",null,"Example classes usage"),n.createElement("p",null,"Classes are available with following pattern: "),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},".box-shadow-{direction}-{level}"),n.createElement("p",null,"For example:"),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},".box-shadow-right-2"),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},".box-shadow-up-3"),n.createElement("br",null),n.createElement("h4",null,"Example mixin usage"),n.createElement("p",null,"Mixin can be used as follows: "),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},"@include pgn-box-shadow(level, side);"),n.createElement("p",null,"For example:"),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},'@include pgn-box-shadow(1, "down");'),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},'@include pgn-box-shadow(3, "left");'),n.createElement("br",null),n.createElement("h4",null,"Example variables usage"),n.createElement("p",null,"Variables are available with following pattern: "),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},"$box-shadow-{direction}-{level}"),n.createElement("p",null,"For example:"),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},"$box-shadow-right-2"),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},"$box-shadow-up-3"),n.createElement("br",null),n.createElement("h3",{className:"mt-5"},"Box-shadow generator"),n.createElement("p",null,"Use the sliders and the color picker to set the values and watch the live preview until you reach the desired effect. Select the ",n.createElement("code",null,"right-down shift"),", ",n.createElement("code",null,"spread"),", ",n.createElement("code",null,"blur"),", and ",n.createElement("code",null,"color"),". Pick a custom color for the preview background and your object. Web browsers allow us to add more than one shadow to our design and so does this online tool. Use the Add New Layer button to save the current line and set up a new one."),n.createElement(C,null)))}}}]);
//# sourceMappingURL=component---src-pages-foundations-elevation-jsx-1faee3ffe4af7a5df71b.js.map