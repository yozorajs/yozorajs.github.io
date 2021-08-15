"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[8180],{2511:function(e,n,r){r.d(n,{Z:function(){return v}});var t=r(3366),i=r(7294),u=r(3727),a=r(9962),o=r(2735),l=r(6136),c=(0,i.createContext)({collectLink:function(){}}),s=r(9524),f=r(3905),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var n,r,v=e.isNavLink,m=e.to,p=e.href,h=e.activeClassName,y=e.isActive,k=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,E=void 0===g||g,b=(0,t.Z)(e,d),Z=(0,a.Z)().siteConfig,N=Z.trailingSlash,R=Z.baseUrl,C=(0,s.C)().withBaseUrl,M=(0,i.useContext)(c),w=m||p,P=(0,o.Z)(w),_=null==w?void 0:w.replace("pathname://",""),j=void 0!==_?(r=_,E&&function(e){return e.startsWith("/")}(r)?C(r):r):void 0;j&&P&&(j=(0,f.applyTrailingSlash)(j,{trailingSlash:N,baseUrl:R}));var x,S=(0,i.useRef)(!1),T=v?u.OL:u.rU,U=l.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!U&&P&&null!=j&&window.docusaurus.prefetch(j),function(){U&&x&&x.disconnect()}}),[j,U,P]);var I=null!==(n=null==j?void 0:j.startsWith("#"))&&void 0!==n&&n,L=!j||!P||I;return j&&P&&!I&&!k&&M.collectLink(j),L?i.createElement("a",Object.assign({href:j},w&&!P&&{target:"_blank",rel:"noopener noreferrer"},b)):i.createElement(T,Object.assign({},b,{onMouseEnter:function(){S.current||null==j||(window.docusaurus.preload(j),S.current=!0)},innerRef:function(e){var n,r;U&&e&&P&&(n=e,r=function(){null!=j&&window.docusaurus.prefetch(j)},(x=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.unobserve(n),x.disconnect(),r())}))}))).observe(n))},to:j||""},v&&{isActive:y,activeClassName:h}))}},2735:function(e,n,r){function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!t(e)}r.d(n,{b:function(){return t},Z:function(){return i}})},9524:function(e,n,r){r.d(n,{C:function(){return u},Z:function(){return a}});var t=r(9962),i=r(2735);function u(){var e=(0,t.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,u=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,t){var u=void 0===t?{}:t,a=u.forcePrependBaseUrl,o=void 0!==a&&a,l=u.absolute,c=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(o)return n+r;var s=r.startsWith(n)?r:n+r.replace(/^\//,"");return c?e+s:s}(u,r,e,n)}}}function a(e,n){return void 0===n&&(n={}),(0,u().withBaseUrl)(e,n)}},4136:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var r=n.trailingSlash,t=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var i,u=e.split(/[#?]/)[0],a="/"===u||u===t?u:(i=u,r?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(u,a)}},3905:function(e,n,r){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var i=r(4136);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return t(i).default}});var u=r(3509);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return t(u).default}})},3509:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},8180:function(e,n,r){r.r(n),r.d(n,{GraphvizRunner:function(){return R},Markdown:function(){return q},MarkdownProvider:function(){return A},MathRunner:function(){return I},default:function(){return W},defaultCustomRendererMap:function(){return E},lazyLoad:function(){return j},useAsyncRunnerScopes:function(){return x},useCodeRunners:function(){return O},useJsxRunner:function(){return T}});var t=r(7281),i=r(7861),u=r(7294),a=r(7462),o=r(3366),l=r(6010),c=r(5697),s=r.n(c),f={url:s().string.isRequired,title:s().string,children:s().node,className:s().string,rel:s().string,style:s().object,target:s().string},d=["children","className","url","rel","target","title"];function v(e){var n=e.children,r=e.className,t=e.url,i=e.rel,c=void 0===i?"noopener,noreferrer":i,s=e.target,f=void 0===s?"_blank":s,v=e.title,m=(0,o.Z)(e,d);return u.createElement("a",(0,a.Z)({},m,{className:(0,l.Z)("kyokuya-react-link","kyokuya-react-link--external",r),href:t,title:v,target:f,rel:c}),n)}v.propTypes=f,v.displayName="KyokuyaExternalLink";var m=r(2511),p=["children","className","url","title"];function h(e){var n=e.children,r=e.className,t=e.url,i=e.title,c=(0,o.Z)(e,p);return u.createElement(m.Z,(0,a.Z)({},c,{className:(0,l.Z)("kyokuya-react-link","kyokuya-react-link--internal",r),to:t,title:i}),n)}function y(e){return/^#/.test(e.url)?u.createElement("a",{title:e.title,href:e.url},e.children):/^(\w+:[/]{2})/.test(e.url)?u.createElement(v,e):u.createElement(h,e)}h.propTypes=f,h.displayName="KyokuyaInternalLink",y.displayName="KyokuyaReactLink",y.propTypes=f;var k,g=y,E=((k={})[t.Un]=function(e){var n=e.url,r=e.title;return u.createElement(i.NN.Consumer,null,(function(t){var i=t.renderYozoraNodes;return u.createElement(g,{url:n,title:r},i(e.children))}))},k[t.DS]=function(e){return u.createElement(i.NN.Consumer,null,(function(n){var r,t=n.getDefinition,i=n.renderYozoraNodes,a=t(e.identifier),o=null!=(r=null==a?void 0:a.url)?r:"",l=null==a?void 0:a.title;return u.createElement(g,{url:o,title:l},i(e.children))}))},k),b=r(684),Z=r(8002),N=(0,b.ZP)((function(){return Promise.all([r.e(9328),r.e(6650)]).then(r.bind(r,9328))})),R=function(e){var n=e.value,r=e.meta,t=void 0===r?{}:r,i=e.onError;return u.createElement(N,{code:n,engine:t.engine,onError:i})};R.propTypes={value:s().string.isRequired,meta:s().any,onError:s().func.isRequired},R.displayName="GraphvizRunner";var C=R,M=r(8906),w=r(2399),P=r(9163),_=[];function j(e,n,r){void 0===r&&(r=[]);var t=e.moduleName,i=e.defaultImport,u=e.namedImports,a=function(){for(var e,n=(0,M.Z)(_);!(e=n()).done;){var r=e.value,i=r.regex.exec(t);if(null!=i)return r.importFunc(i)}return null}();if(null===a)return null;if(/\.[jt]sx$/.test(t)){null!=i&&(n[i]=(0,b.ZP)(a,{cacheKey:function(){return t+"__default"}}));for(var o,l=function(){var e=o.value,r=e.src,i=e.alias;n[null!=i?i:r]=(0,b.ZP)(a,{cacheKey:function(){return t+"__"+r},resolveComponent:function(e){return e[r]}})},c=(0,M.Z)(u);!(o=c()).done;)l();return null}if(/\.[jt]s$/.test(t))return new Promise((function(e){r.push((0,b.ZP)(a,{cacheKey:function(){return t},resolveComponent:function(r){null!=i&&(n[i]=r);for(var t,a=(0,M.Z)(u);!(t=a()).done;){var o=t.value,l=o.src,c=o.alias;n[null!=c?c:l]=r[l]}return e(),"div"}}))}));throw new TypeError("Cannot find module "+t+". (A .ts / .tsx / .js / .jsx suffix is required)")}function x(e){return(0,w.NY)((function(){for(var n,r={styled:P.ZP,useCallback:u.useCallback,useEffect:u.useEffect,useMemo:u.useMemo,useState:u.useState},t=[],i=[],a=(0,M.Z)(e);!(n=a()).done;){var o=j(n.value,r,i);null!==o&&t.push(o)}return{scope:r,pending:t.length<=0||Promise.all(t),Placeholders:i}}),[e])}var S=(0,b.ZP)((function(){return Promise.resolve().then(r.bind(r,9131))}));function T(e){var n=x(e),r=n.scope,t=n.pending,i=n.Placeholders,a=(0,u.useState)(!0===t),o=a[0],l=a[1];return(0,u.useEffect)((function(){if(!0!==t){var e=!1;return t.then((function(){return!e&&l(!0)})),function(){e=!0}}}),[t]),(0,u.useCallback)((function(e){var n=e.value,t=e.onError,a=e.meta,l=void 0===a?{}:a,c=null==l.jsxMode||"inline"===l.jsxMode;return o?u.createElement(S,{code:n,inline:c,scope:r,onError:t}):u.createElement(u.Fragment,null,i.map((function(e,n){return u.createElement(e,{key:n,className:"hidden"})})))}),[r,o,i])}var U=r(6454),I=function(e){var n=e.value.replace(/^[\s\n]*([$]+)([\s\S]+)*\1[\s\n]*$/,"$2").trim();return u.createElement(U.C,{value:n})};I.propTypes={value:s().string.isRequired},I.displayName="MathRunner";var L=I;function O(e){var n=T(e);return(0,u.useMemo)((function(){return[{title:"jsx",pattern:/^jsx$/,runner:n},{title:"graphviz",pattern:/^graphviz|dot$/,runner:C},{title:"math",pattern:/^tex|latex|math|mathjax$/,runner:L}]}),[n])}var z=["ecmaImports","children","customRendererMap","codeRunners","darken"],$=(0,b.ZP)((function(){return r.e(1285).then(r.t.bind(r,1285,23))}));function A(e){var n=(0,Z.Z)().isDarkTheme,r=e.ecmaImports,t=e.children,l=e.customRendererMap,c=e.codeRunners,s=e.darken,f=void 0===s?n:s,d=(0,o.Z)(e,z),v=O(r);return u.createElement(i.$Z,(0,a.Z)({},d,{darken:f,codeRunners:null!=c?c:v,customRendererMap:null!=l?l:E}),t,u.createElement(i.aT,{ImageViewer:$}))}var B=A,D=u.createElement(g,{url:"#footnote-definitions"},u.createElement("span",{id:"footnote-definitions"},"footnote-definitions"));function q(e){var n=e.definitionMap,r=e.footnoteDefinitionMap,t=e.codeRunners,a=e.customRendererMap,o=e.darken,l=e.ast,c=e.footnoteDefinitionsTitle,s=void 0===c?D:c,f=e.className,d=e.style,v=e.ecmaImports;return u.createElement(B,{definitionMap:n,footnoteDefinitionMap:r,codeRunners:t,customRendererMap:a,darken:o,ecmaImports:v},u.createElement(i.j,{ast:l,footnoteDefinitionsTitle:s,className:f,style:d}))}var W=q}}]);