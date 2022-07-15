"use strict";(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[353],{56778:function(e,t,a){var o=a(87462),l=a(63366),n=a(67294),r=a(57715),s=a.n(r),c=["label","onClick","className"],i=n.forwardRef((function(e,t){var a=e.label,r=e.onClick,i=e.className,d=(0,l.Z)(e,c);return n.createElement("button",(0,o.Z)({ref:t,type:"button",className:s()("close",i),onClick:r},d),n.createElement("span",{"aria-hidden":"true"},"×"),n.createElement("span",{className:"sr-only"},a))}));i.displayName="CloseButton",i.defaultProps={label:"Close"},t.Z=i},29785:function(e,t,a){a.d(t,{Z:function(){return r}});var o=a(67294),l=a(25333),n=a(85861);function r(){var e=o.useContext(l._y);return(0,n.lq)(e),e}},13378:function(e,t,a){var o=a(4942),l=a(45987),n=a(51721),r=a(67294),s=a(57715),c=a.n(s);const i=["value","label","group"],d=["type","className","options","forwardedRef"];function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){(0,o.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}let p=function(e){function t(){return e.apply(this,arguments)||this}(0,n.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){0},a.getHTMLTagForType=function(){const{type:e}=this.props;return"select"===e||"textarea"===e?e:"input"},a.getClassNameForType=function(){switch(this.props.type){case"file":return"form-control-file";case"checkbox":case"radio":return"form-check-input";default:return"form-control"}},a.setRef=function(e){return e},a.checkHasLabel=function(){this.inputEl.labels.length>0||null===this.inputEl.getAttribute("aria-label")&&null===this.inputEl.getAttribute("aria-labelledby")&&console&&console.warn("Input[a11y]: There is no associated label for this Input")},a.renderOptions=function(e){return e.map((e=>{const{value:t,label:a,group:o}=e,n=(0,l.Z)(e,i);return o?r.createElement("optgroup",Object.assign({key:`optgroup-${a}`,label:a},n),this.renderOptions(o)):r.createElement("option",Object.assign({key:t,value:t},n),a)}),this)},a.render=function(){const e=this.props,{type:t,className:a,options:o,forwardedRef:n}=e,s=(0,l.Z)(e,d),i=this.getHTMLTagForType(),m=u(u({className:c()(this.getClassNameForType(),a),type:"input"===i?t:void 0},s),{},{ref:this.setRef(n)}),p="select"===t?this.renderOptions(o):null;return r.createElement(i,m,p)},t}(r.Component);p.defaultProps={className:void 0,options:[]};const b=r.forwardRef(((e,t)=>r.createElement(p,Object.assign({forwardedRef:t},e))));t.Z=b},70206:function(e,t,a){a.d(t,{vZ:function(){return $},qH:function(){return B},ZP:function(){return S}});var o=a(45987),l=a(67294),n=a(57715),r=a.n(n),s=a(87462),c=a(63366),i=a(72420),d=a(52690),m=a(51654),u=a(88498),p=a(56778),b=l.createContext({onClose:function(){}}),h=["bsPrefix","closeLabel","closeButton","className","children"],f=l.forwardRef((function(e,t){var a=e.bsPrefix,o=e.closeLabel,n=e.closeButton,i=e.className,d=e.children,f=(0,c.Z)(e,h);a=(0,u.vE)(a,"toast-header");var E=(0,l.useContext)(b),g=(0,m.Z)((function(e){E&&E.onClose&&E.onClose(e)}));return l.createElement("div",(0,s.Z)({ref:t},f,{className:r()(a,i)}),d,n&&l.createElement(p.Z,{label:o,onClick:g,className:"ml-2 mb-1","data-dismiss":"toast"}))}));f.displayName="ToastHeader",f.defaultProps={closeLabel:"Close",closeButton:!0};var E=f,g=(0,a(91731).Z)("toast-body"),y=["bsPrefix","className","children","transition","show","animation","delay","autohide","onClose"],w=l.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,n=e.children,m=e.transition,p=void 0===m?d.Z:m,h=e.show,f=void 0===h||h,E=e.animation,g=void 0===E||E,w=e.delay,v=void 0===w?3e3:w,x=e.autohide,N=void 0!==x&&x,k=e.onClose,_=(0,c.Z)(e,y);a=(0,u.vE)(a,"toast");var C=(0,l.useRef)(v),O=(0,l.useRef)(k);(0,l.useEffect)((function(){C.current=v,O.current=k}),[v,k]);var Z=(0,i.Z)(),P=!(!N||!f),j=(0,l.useCallback)((function(){P&&(null==O.current||O.current())}),[P]);(0,l.useEffect)((function(){Z.set(j,C.current)}),[Z,j]);var $=(0,l.useMemo)((function(){return{onClose:k}}),[k]),B=!(!p||!g),L=l.createElement("div",(0,s.Z)({},_,{ref:t,className:r()(a,o,!B&&(f?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}),n);return l.createElement(b.Provider,{value:$},B&&p?l.createElement(p,{in:f,unmountOnExit:!0},L):L)}));w.displayName="Toast";var v=Object.assign(w,{Body:g,Header:E}),x=a(29785),N=a(51721),k=a(73935);var _=function(e){function t(t){var a;if((a=e.call(this,t)||this).toastRootName="toast-root","undefined"==typeof document)a.rootElement=null;else if(document.getElementById(a.toastRootName))a.rootElement=document.getElementById(a.toastRootName);else{const e=document.createElement("div");e.setAttribute("id",a.toastRootName),e.setAttribute("class","toast-container"),e.setAttribute("role","alert"),e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),a.rootElement=document.body.appendChild(e)}return a}return(0,N.Z)(t,e),t.prototype.render=function(){return this.rootElement?k.createPortal(this.props.children,this.rootElement):null},t}(l.Component),C=a(59366),O=a(47499),Z=a(43254),P=a(99462);const j=["action","children","className","closeLabel","onClose","show"],$="Close",B=5e3;function L(e){let{action:t,children:a,className:n,closeLabel:s,onClose:c,show:i}=e,d=(0,o.Z)(e,j);const m=(0,x.Z)(),{0:u,1:p}=(0,l.useState)(!0),b=s||m.formatMessage({id:"pgn.Toast.closeLabel",defaultMessage:"Close",description:"Close label for Toast component"});return l.createElement(_,null,l.createElement(v,Object.assign({autohide:u,className:r()("pgn__toast",n),onClose:c,onBlur:()=>p(!0),onFocus:()=>p(!1),onMouseOut:()=>p(!0),onMouseOver:()=>p(!1),show:i},d),l.createElement("div",{className:"toast-header"},l.createElement("p",{className:"small"},a),l.createElement("div",{className:"toast-header-btn-container"},l.createElement(C.Z,{iconAs:O.Z,alt:b,className:"align-self-start",src:P.Close,onClick:c,variant:"primary",invertColors:!0}))),t&&l.createElement(Z.ZP,{as:t.href?"a":"button",href:t.href,onClick:t.onClick,size:"sm",variant:"inverse-outline-primary"},t.label)))}L.defaultProps={action:null,closeLabel:void 0,delay:B,className:void 0};var S=L},87529:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var o=a(15785),l=a(4942),n=a(67294),r=a(14959),s=a(77918),c=a(70206),i=a(61078),d=a(13378),m=a(43254),u=a(82298),p=a(99462),b=a(59366),h=a(47499);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){(0,l.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const g=["down","up","right","left","centered"],y=[1,2,3,4,5],w="0px 0px 0px #000",v=[{key:"x",name:"Offset X"},{key:"y",name:"Offset Y"},{key:"blur",name:"Blur"},{key:"spread",name:"Spread"},{key:"color",name:"Color"}],x=()=>{const{0:e,1:t}=(0,n.useState)(!1),a=(e,a)=>{navigator.clipboard.writeText(`@include pgn-box-shadow(${e}, "${a}");`),t(!0)},o=y.map((e=>g.map((t=>n.createElement("div",{key:t,role:"button",className:`pgn-doc__box-shadow-cell box-shadow-${t}-${e}`,tabIndex:0,"aria-label":`Box-shadow cell ${t}-${e}`,onClick:()=>a(e,t),onKeyDown:o=>{"Enter"===o.key&&a(e,t)}})))));return n.createElement("div",{className:"pgn-doc__box-shadow-cells"},o,n.createElement(c.ZP,{className:"pgn-doc__box-shadow--toast",onClose:()=>t(!1),show:e,delay:2e3},"Box-shadow copied to clipboard!"))},N=e=>{let{id:t,updateBoxShadow:o,removeBoxShadowLayer:l,disableBoxShadowLayer:r,enableBoxShadowLayer:s,isDisabled:c,canDelete:m}=e;const{0:u,1:f}=(0,n.useState)({x:0,y:0,blur:0,spread:0,color:"#000",inset:!1}),g=(e,l)=>{a.g.analytics.track("openedx.paragon.elevation.generator.updated",{property:e,value:l});const n=E(E({},u),{},{[e]:l});f(n),o(n,t)};return n.createElement("section",{className:"pgn-doc__box-shadow-toolkit--controls-box"},v.map((e=>{let{key:a,name:o}=e;return n.createElement(i.ZP.Label,{className:"d-block",key:a,htmlFor:`toolkit-control-${a}`},o,n.createElement(d.Z,{id:`toolkit-control-${a}-${t}`,key:a,min:"x"===a||"y"===a?"-100":"0",max:"100",type:"color"===a?"color":"range",defaultValue:"0",onChange:e=>g(a,e.target.value),disabled:c}))})),n.createElement("div",{className:"pgn-doc__box-shadow-toolkit--controls-box--disable-btn-wrapper"},n.createElement(i.ZP.Checkbox,{onChange:()=>g("inset",!u.inset),floatLabelLeft:!0,disabled:c},"Inset:"),n.createElement("div",null,c?n.createElement(b.E,{tooltipPlacement:"top",tooltipContent:"Enable layer",src:p.WbSunny,iconAs:h.Z,alt:"Enable layer",onClick:()=>s(t),variant:"success",className:"pgn-doc__box-shadow-toolkit--controls-box--disable-btn"}):n.createElement(b.E,{tooltipPlacement:"top",tooltipContent:"Disable layer",src:p.DoDisturb,iconAs:h.Z,alt:"Disable layer",onClick:()=>r(t),variant:"secondary",className:"pgn-doc__box-shadow-toolkit--controls-box--disable-btn"}),m&&n.createElement(b.E,{tooltipPlacement:"top",tooltipContent:"Remove layer",src:p.Close,iconAs:h.Z,alt:"Remove layer",onClick:()=>l(t),variant:"danger",className:"pgn-doc__box-shadow-toolkit--controls-box--remove-btn"}))))},k=()=>{const{0:e,1:t}=(0,n.useState)([{id:1,enabled:!0,style:w}]),l=(a,o)=>{t(e.map((e=>o===e.id?E(E({},e),{},{style:a.inset?`inset ${a.x}px ${a.y}px ${a.blur}px ${a.spread}px ${a.color}`:`${a.x}px ${a.y}px ${a.blur}px ${a.spread}px ${a.color}`}):E({},e))))},r=o=>{a.g.analytics.track("openedx.paragon.elevation.shadow-generator.layer.removed"),t(e.filter((e=>e.id!==o)))},s=o=>{a.g.analytics.track("openedx.paragon.elevation.shadow-generator.layer.disabled");const l=e.map((e=>e.id===o?E(E({},e),{},{enabled:!1}):e));t(l)},c=o=>{a.g.analytics.track("openedx.paragon.elevation.shadow-generator.layer.enabled");const l=e.map((e=>e.id===o?E(E({},e),{},{enabled:!0}):e));t(l)};return n.createElement("section",{className:"pgn-doc__box-shadow-generator"},n.createElement("div",{className:"pgn-doc__box-shadow-generator__preview"},n.createElement("div",{className:"pgn-doc__box-shadow-generator__preview-box border",style:{boxShadow:e.filter((e=>e.enabled)).map((e=>e.style)).join(",")}})),n.createElement("div",{className:"pgn-doc__box-shadow-generator--toolkit"},n.createElement("div",{className:"d-flex overflow-auto mb-2"},e.map((t=>n.createElement(N,{key:t.id,id:t.id,updateBoxShadow:l,removeBoxShadowLayer:r,disableBoxShadowLayer:s,enableBoxShadowLayer:c,isDisabled:!t.enabled,canDelete:e.length>1})))),n.createElement("div",{className:"d-flex justify-content-between flex-column flex-md-row"},n.createElement("code",{className:"pgn-doc__box-shadow-generator--toolkit-code mb-3 mb-md-0"},e.filter((e=>e.enabled)).length>0?`box-shadow: ${e.filter((e=>e.enabled)).map((e=>e.style)).join(",")};`:"No styles applied"),n.createElement(m.ZP,{onClick:()=>{a.g.analytics.track("openedx.paragon.elevation.generator.layer.added"),t([].concat((0,o.Z)(e),[{id:e[e.length-1].id+1,enabled:!0,style:w}]))},variant:"dark"},"Add New Layer"))))};function _(){const e=y.map((e=>n.createElement("h3",{key:e,className:"pgn-doc__box-shadow-level-title"},"Level ",e))),t=g.map((e=>n.createElement("h3",{key:e,className:"pgn-doc__box-shadow-side-title"},e.charAt(0).toUpperCase()+e.substring(1))));return n.createElement(s.Z,null,n.createElement(u.Z,{className:"py-5",size:"md"},n.createElement(r.Z,{title:"Elevation"}),n.createElement("h1",{className:"mb-3"},"Elevation & Shadow"),n.createElement("p",{className:"mb-5"},"You can quickly add a ",n.createElement("code",null,"box-shadow")," with the Clickable Box-Shadow Grid. Click on the ",n.createElement("code",null,"box-shadow")," you like and it will be copied to your clipboard."),n.createElement("div",{className:"pgn-doc__box-shadow-wrapper"},n.createElement("div",{className:"d-flex pt-1"},n.createElement("div",{className:"pgn-doc__box-shadow-level-titles"},e),n.createElement(x,null)),n.createElement("div",{className:"pgn-doc__box-shadow-side-titles"},n.createElement("h3",{className:"pgn-doc__box-shadow-side-title"},"Direction"),t)),n.createElement("h3",null,"Box-shadow Usage"),n.createElement("p",null,"Include these box-shadows colors in scss files in this ways:"),n.createElement("h4",null,"Mixin"),n.createElement("code",{className:"d-block mb-4 lead bg-gray-100 p-3"},"pgn-box-shadow($level, $side)"),n.createElement("div",{className:"pgn-doc__box-shadow--table-wrapper"},n.createElement("table",{className:"pgn-doc__table table"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("strong",null,"Direction name")),n.createElement("td",null,g.map((e=>n.createElement("code",{key:e,className:"mr-2"},e))))),n.createElement("tr",null,n.createElement("td",null,n.createElement("strong",null,"Levels"),n.createElement("br",null),n.createElement("p",null,"Box-shadows elevation levels")),n.createElement("td",null,y.map((e=>n.createElement("code",{key:e,className:"mr-2"},e)))))))),n.createElement("h4",null,"Example classes usage"),n.createElement("p",null,"Classes are available with following pattern: "),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},".box-shadow-{direction}-{level}"),n.createElement("p",null,"For example:"),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},".box-shadow-right-2"),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},".box-shadow-up-3"),n.createElement("br",null),n.createElement("h4",null,"Example mixin usage"),n.createElement("p",null,"Mixin can be used as follows: "),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},"@include pgn-box-shadow(level, side);"),n.createElement("p",null,"For example:"),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},'@include pgn-box-shadow(1, "down");'),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},'@include pgn-box-shadow(3, "left");'),n.createElement("br",null),n.createElement("h4",null,"Example variables usage"),n.createElement("p",null,"Variables are available with following pattern: "),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},"$box-shadow-{direction}-{level}"),n.createElement("p",null,"For example:"),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},"$box-shadow-right-2"),n.createElement("code",{className:"d-block mb-2 bg-gray-100 p-3"},"$box-shadow-up-3"),n.createElement("br",null),n.createElement("h3",{className:"mt-5"},"Box-shadow generator"),n.createElement("p",null,"Use the sliders and the color picker to set the values and watch the live preview until you reach the desired effect. Select the ",n.createElement("code",null,"right-down shift"),", ",n.createElement("code",null,"spread"),", ",n.createElement("code",null,"blur"),", and ",n.createElement("code",null,"color"),". Pick a custom color for the preview background and your object. Web browsers allow us to add more than one shadow to our design and so does this online tool. Use the Add New Layer button to save the current line and set up a new one."),n.createElement(k,null)))}}}]);
//# sourceMappingURL=component---src-pages-foundations-elevation-jsx-1f9bf42d9d8a347a8099.js.map