"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[2423],{52423:(e,t,n)=>{n.r(t),n.d(t,{GraphvizRunner:()=>j,Markdown:()=>Y,MarkdownProvider:()=>L,MathRunner:()=>q,default:()=>Y,defaultCustomRendererMap:()=>y,useCodeRunners:()=>F,useJsxRunner:()=>k});var r=n(82231),o=n(4878),s=n(67294),a=n(87462),i=n(86010),l=n(45697),c=n.n(l);const u={url:c().string.isRequired,title:c().string,children:c().node,className:c().string,rel:c().string,style:c().object,target:c().string};function p(e){const{children:t,className:n,url:r,rel:o="noopener,noreferrer",target:l="_blank",title:c,...u}=e;return s.createElement("a",(0,a.Z)({},u,{className:(0,i.Z)("kyokuya-react-link","kyokuya-react-link--external",n),href:r,title:c,target:l,rel:o}),t)}p.propTypes=u,p.displayName="KyokuyaExternalLink";var d=n(19372);function m(e){const{children:t,className:n,url:r,title:o,...l}=e;return s.createElement(d.Z,(0,a.Z)({},l,{className:(0,i.Z)("kyokuya-react-link","kyokuya-react-link--internal",n),to:r,title:o}),t)}function h(e){return/^#/.test(e.url)?s.createElement("a",{title:e.title,href:e.url},e.children):/^(\w+:[/]{2})/.test(e.url)?s.createElement(p,e):s.createElement(m,e)}m.propTypes=u,m.displayName="KyokuyaInternalLink",h.displayName="KyokuyaReactLink",h.propTypes=u;const f=h,y={[r.Un]:function(e){const{url:t,title:n}=e;return s.createElement(f,{url:t,title:n},s.createElement(o.Dm,{nodes:e.children}))},[r.DS]:function(e){return s.createElement(o.oo.Consumer,null,(t=>{let{definitionMap:n}=t;const r=n[e.identifier],a=(null==r?void 0:r.url)??"",i=null==r?void 0:r.title;return s.createElement(f,{url:a,title:i},s.createElement(o.Dm,{nodes:e.children}))}))}};var g=n(1731),x=n(40684),b=n(23165);const E={lang:l.string.isRequired,value:l.string.isRequired,meta:l.any,scope:l.any,onError:l.func.isRequired};function M(e,t,n,r){const{moduleName:o,defaultImport:s,namedImports:a}=e,i=r.find((e=>e.regex.test(o)));if(null==i)return null;const l=i.importFunc(i.regex.exec(o));if(/\.[jt]sx$/.test(o)){null!=s&&(t[s]=(0,x.ZP)(l,{cacheKey:()=>o+"__default"}));for(const{src:e,alias:n}of a){t[n??e]=(0,x.ZP)(l,{cacheKey:()=>o+"__"+e,resolveComponent:t=>t[e]})}return null}if(/\.[jt]s$/.test(o))return new Promise((e=>{n.push((0,x.ZP)(l,{cacheKey:()=>o,resolveComponent:n=>{null!=s&&(t[s]=n);for(const{src:e,alias:r}of a)t[r??e]=n[e];return e(),"div"}}))}));throw new TypeError(`Cannot find module ${o}. (A .ts / .tsx / .js / .jsx suffix is required)`)}const j=function(e){const t=t=>{const{value:n,meta:r={},onError:o}=t;return s.createElement(e,{code:n,engine:r.engine,onError:o})};return t.displayName="YozoraGraphvizRunner",t.propTypes=E,t}((0,x.ZP)((()=>Promise.all([n.e(9328),n.e(6650)]).then(n.bind(n,29328))))),v=j;var N=n(16829);const R=(0,x.ZP)((()=>Promise.resolve().then(n.bind(n,49131)))),k=function(e,t,n,r){return function(o){const{scope:a,pending:i,Placeholders:l}=(0,b.NY)((()=>{const n={...e},r=[],s=[];for(const e of o){const o=M(e,n,r,t);null!==o&&s.push(o)}return{scope:n,pending:s.length<=0||Promise.all(s),Placeholders:r}}),[o]),[c,u]=s.useState(!0===i);return s.useEffect((()=>{if(!0===i)return;let e=!1;return i.then((()=>!e&&u(!0))),()=>{e=!0}}),[i]),s.useMemo((()=>{const e=e=>{const{value:t,onError:o,meta:i={}}=e,u="inline"===(i.renderMode??r);return c?s.createElement(n,{code:t,inline:u,scope:a,onError:o}):s.createElement(s.Fragment,null,l.map(((e,t)=>s.createElement(e,{key:t,className:"hidden",style:{display:"none",visibility:"hidden"}}))))};return e.displayName="YozoraJsxRunner",e.propTypes=E,e}),[a,c,l])}}({styled:N.Z,useCallback:s.useCallback,useEffect:s.useEffect,useMemo:s.useMemo,useState:s.useState},[],R,"block");var C=n(49090),P=n.n(C);const S={language:"tex",MathJax:null},w=s.createContext(S);let O=null;let T=[],J=[],H=!1;function Z(e,t,n){T.push(t),null!=n&&J.push(n),H||(H=!0,setTimeout((function(){e.Hub.Queue((()=>{const t=e.Hub.elementScripts;e.Hub.elementScripts=()=>T;try{return e.Hub.Process(null,(()=>{J.forEach((e=>{e()})),T=[],J=[],H=!1}))}finally{e.Hub.elementScripts=t}}))}),0))}class D extends s.Component{constructor(e){super(e),this.state={loaded:!1,context:Object.assign({},S)}}render(){return!this.state.loaded&&this.props.loading?this.props.loading:s.createElement(w.Provider,{value:this.state.context},this.props.children)}componentDidMount(){var e;(e=this.props.mathjaxSrc,null!=O||(O=new Promise((t=>{P()(e,(function(){const e="undefined"==typeof globalThis?window:globalThis;t(e.MathJax)}))})).catch((t=>{throw console.error(`Oops! Cannot load MathJax from ${e}!`),t}))),O).then((e=>{const{mathjaxConfig:t,mathjaxOptions:n,onLoad:r}=this.props,{processSectionDelay:o=0}=null!=n?n:{};e.Hub.Config(t),e.Hub.Register.StartupHook("End",(()=>{e.Hub.processSectionDelay=o,null!=r&&r(e),this.setState((t=>({loaded:!0,context:Object.assign(Object.assign({},t.context),{MathJax:e})})))})),e.Hub.Register.MessageHook("Math Processing Error",(t=>{this.props.onError&&this.props.onError(e,t)}))}))}}D.propTypes={children:c().node,loading:c().node,mathjaxSrc:c().string,mathjaxConfig:c().object,mathjaxOptions:c().object,onLoad:c().func,onError:c().func},D.defaultProps={loading:null,mathjaxSrc:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS-MML_SVG",mathjaxConfig:{tex2jax:{inlineMath:[]},SVG:{blacker:1},showMathMenu:!1,showMathMenuMSIE:!1}};class $ extends s.Component{constructor(){super(...arguments),this.nodeRef=s.createRef(),this.scriptNode=null}render(){const{className:e,style:t,inline:n}=this.props,r=n?"span":"div";return s.createElement(r,{ref:this.nodeRef,className:e,style:t})}componentDidMount(){this.typeset(!1)}componentDidUpdate(e){const t=this.shouldComponentUpdate(e);this.typeset(t)}shouldComponentUpdate(e){const t=this.props;return e.formula!==t.formula||e.inline!==t.inline}componentWillUnmount(){this.clear()}clear(){const{MathJax:e}=this.props;if(null==e||null==this.scriptNode)return;const t=e.Hub.getJaxFor(this.scriptNode);null!=t&&t.Remove()}typeset(e){const{MathJax:t}=this.props;if(null==t)return void console.warn("Cannot find MathJax instance!");e&&this.clear();const{formula:n,onRender:r}=this.props;if(e||null==this.scriptNode)return this.setFormula(n),void Z(t,this.scriptNode,r);t.Hub.Queue((()=>{const e=t.Hub.getJaxFor(this.scriptNode);null!=e?e.Text(n,r):(this.setFormula(n),Z(t,this.scriptNode,r))}))}setFormula(e){const t=this.nodeRef.current;if(null==t)return;const{language:n,inline:r}=this.props;if(null==this.scriptNode){const e=document.createElement("script");e.type=`math/${n}; ${r?"":"mode=display"}`,t.appendChild(e),this.scriptNode=e}this.scriptNode.textContent=e}}$.propTypes={language:c().oneOf(["tex","asciimath"]).isRequired,MathJax:c().object.isRequired,formula:c().node.isRequired,inline:c().bool,className:c().string,style:c().object},$.defaultProps={inline:!1};class z extends s.PureComponent{render(){return s.createElement(w.Consumer,null,(({MathJax:e,language:t})=>{if(!e){const e=this.props,{formula:t,inline:n}=e,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["formula","inline"]),o=n?"span":"div";return s.createElement(o,Object.assign({},r),t)}return s.createElement($,Object.assign({},this.props,{MathJax:e,language:t}))}))}}const _=e=>{const{value:t,className:n,style:r}=e;return s.createElement(z,{className:(0,i.Z)("yozora-math",n),style:r,inline:!1,formula:t})};_.propTypes={className:c().string,style:c().object,value:c().string.isRequired},_.displayName="YozoraMath";const q=function(e){const t=t=>{const n=t.value.replace(/^[\s\n]*([$]+)([\s\S]+)*\1[\s\n]*$/,"$2").trim();return s.createElement(e,{type:r.N1,value:n})};return t.displayName="YozoraMathRunner",t.propTypes=E,t}(_),I=q;function F(e){const t=k(e);return(0,s.useMemo)((()=>[{title:"jsx",pattern:/^jsx$/,runner:t},{title:"graphviz",pattern:/^graphviz|dot$/,runner:v},{title:"math",pattern:/^tex|latex|math|mathjax$/,runner:I}]),[t])}const K=(0,x.ZP)((()=>n.e(1285).then(n.t.bind(n,51285,23))));function L(e){const{ecmaImports:t,children:n,customRendererMap:r,codeRunners:o,...i}=e,l=F(t);return s.createElement(g.yF,(0,a.Z)({},i,{codeRunners:o??l,customRendererMap:r??y,ImageViewer:K}),n)}const U=L,G=s.createElement(f,{url:"#footnote-definitions"},s.createElement("span",{id:"footnote-definitions"},"footnote-definitions"));class Y extends s.PureComponent{render(){const{definitionMap:e,footnoteDefinitionMap:t,codeRunners:n,customRendererMap:r,ast:o,footnoteDefinitionsTitle:a=G,className:i,style:l,ecmaImports:c}=this.props;return s.createElement(U,{definitionMap:e,footnoteDefinitionMap:t,codeRunners:n,customRendererMap:r,ecmaImports:c},s.createElement(g.UG,{ast:o,footnoteDefinitionsTitle:a,className:i,style:l}))}}}}]);