(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[862],{4328:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return k},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return s}});var r=a(2122),n=a(9756),i=(a(7294),a(4137)),o=a(7358),l=a(8448),k={id:"core-parser",title:"@yozora/core-parser",sidebar_label:"core-parser"},p=void 0,m={unversionedId:"package/core-parser",id:"package/core-parser",isDocsHomePage:!1,title:"@yozora/core-parser",description:"<img",source:"@site/docs/package/core-parser.mdx",sourceDirName:"package",slug:"/package/core-parser",permalink:"/docs/package/core-parser",version:"current",lastUpdatedAt:1626174113,formattedLastUpdatedAt:"7/13/2021",frontMatter:{id:"core-parser",title:"@yozora/core-parser",sidebar_label:"core-parser"},sidebar:"API",previous:{title:"core-tokenizer",permalink:"/docs/package/core-tokenizer"},next:{title:"GFM Examples",permalink:"/docs/example/gfm"}},c=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[]}]},{value:"Lifecycle",id:"lifecycle",children:[{value:"match-block",id:"match-block",children:[]},{value:"post-match-block",id:"post-match-block",children:[]},{value:"parse-block",id:"parse-block",children:[]},{value:"match-inline",id:"match-inline",children:[]},{value:"parse-inline",id:"parse-inline",children:[]}]},{value:"Related",id:"related",children:[]}],d={toc:c};function s(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("header",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/core-parser"},(0,i.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/core-parser.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/core-parser"},(0,i.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/core-parser.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/core-parser"},(0,i.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/core-parser.svg"})),(0,i.kt)("a",{href:"#install"},(0,i.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,i.kt)("a",{href:"https://github.com/nodejs/node"},(0,i.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/core-parser"})),(0,i.kt)("a",{href:"https://github.com/prettier/prettier"},(0,i.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/package/core-parser"},"@yozora/core-parser")," provides a plug-in system that can load tokenizer for\ncollaborative processing in the ",(0,i.kt)("a",{parentName:"p",href:"#lifecycle"},"lifecycles"),"."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(o.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/core-parser\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/core-parser\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/package/core-parser"},"@yozora/core-parser")," provides a default ",(0,i.kt)("inlineCode",{parentName:"p"},"YastParser")," implementation\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/core-parser/src/parser.ts#L73"},"DefaultYastParser"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { DefaultYastParser } from '@yozora/core-parser'\nimport EmphasisTokenizer from '@yozora/tokenizer-emphasis'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\n\nconst parser = new DefaultYastParser({ shouldReservePosition: true })\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n\n  // add custom tokenizers through `useTokenizer()`\n  .useTokenizer(new EmphasisTokenizer())\n\n// Parse content\nparser.parse('source content')\n\n// Specify the content range\nparser.parse('source content', 0, 10)\n\n// Remove the positions from the YastNode.\nparser.parse('source content', undefined, undefined, false)\n\n// Reserve the positions\nparser.parse('source content', undefined, undefined, true)\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"blockFallbackTokenizer")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/tokenziercore/src/types/tokenizer.ts#L39"},"BlockFallbackTokenizer")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"null"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"inlineFallbackTokenizer")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/tokenziercore/src/types/tokenizer.ts#L54"},"InlineFallbackTokenizer")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"null"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"lazinessTypes")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},"See below"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string[]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"shouldReservePosition")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"blockFallbackTokenizer"),": Fallback tokenizer on processing block structure phase.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"inlineFallbackTokenizer"),": Fallback tokenizer on processing inline structure phase.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"lazinessTypes"),": Types of YastNode which could has laziness contents."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Default: result of ",(0,i.kt)("inlineCode",{parentName:"li"},"[PhrasingContentType].concat(blockFallbackTokenizer.uniqueTypes)"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"shouldReservePosition"),": Whether it is necessary to reserve the position of\nthe YastNode parsed."))),(0,i.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,i.kt)("h3",{id:"match-block"},"match-block"),(0,i.kt)("p",null,"  See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/tokenziercore/src/types/lifecycle/match-block.ts"},"TokenizerMatchBlockHook")," for Details."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"isContainerBlock")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"interruptableTypes")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string[]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"eatOpener")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"eatAndInterruptPreviousSibling")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"eatContinuationText")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"eatLazyContinuationText")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"onClose")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"extractPhrasingContentLines")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"buildBlockState")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Examples"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-admonition"},"@yozora/tokenizer-admonition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-blockquote"},"@yozora/tokenizer-blockquote")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-fenced-code"},"@yozora/tokenizer-fenced-code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-heading"},"@yozora/tokenizer-heading")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-html-block"},"@yozora/tokenizer-html-block")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-indented-code"},"@yozora/tokenizer-indented-code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-definition"},"@yozora/tokenizer-definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-list-item"},"@yozora/tokenizer-list-item")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-math"},"@yozora/tokenizer-math")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-paragraph"},"@yozora/tokenizer-paragraph")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-setext-heading"},"@yozora/tokenizer-setext-heading")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-table"},"@yozora/tokenizer-table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-thematic-break"},"@yozora/tokenizer-thematic-break"))))),(0,i.kt)("h3",{id:"post-match-block"},"post-match-block"),(0,i.kt)("p",null,"  See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/tokenziercore/src/types/lifecycle/post-match-block.ts"},"TokenizerPostMatchBlockHook")," for Details."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"transformMatch")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Examples"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-list"},"@yozora/tokenizer-list"))))),(0,i.kt)("h3",{id:"parse-block"},"parse-block"),(0,i.kt)("p",null,"  See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/tokenziercore/src/types/lifecycle/parse-block.ts"},"TokenizerParseBlockHook")," for Details."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"parseBlock")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"parseMeta")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Examples"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-admonition"},"@yozora/tokenizer-admonition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-blockquote"},"@yozora/tokenizer-blockquote")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-fenced-code"},"@yozora/tokenizer-fenced-code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-heading"},"@yozora/tokenizer-heading")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-html-block"},"@yozora/tokenizer-html-block")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-indented-code"},"@yozora/tokenizer-indented-code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-definition"},"@yozora/tokenizer-definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-list-item"},"@yozora/tokenizer-list-item")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-list"},"@yozora/tokenizer-list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-math"},"@yozora/tokenizer-math")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-paragraph"},"@yozora/tokenizer-paragraph")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-setext-heading"},"@yozora/tokenizer-setext-heading")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-table"},"@yozora/tokenizer-table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-thematic-break"},"@yozora/tokenizer-thematic-break"))))),(0,i.kt)("h3",{id:"match-inline"},"match-inline"),(0,i.kt)("p",null,"  See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/tokenziercore/src/types/lifecycle/match-inline.ts"},"TokenizerMatchInlineHook")," for Details."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"priority")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"delimiterGroup")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"findDelimiter")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"isDelimiterPair")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"processDelimiterPair")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"processFullDelimiter")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Examples"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-autolink"},"@yozora/tokenizer-autolink")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-autolink-extension"},"@yozora/tokenizer-autolink-extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-break"},"@yozora/tokenizer-break")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-delete"},"@yozora/tokenizer-delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-emphasis"},"@yozora/tokenizer-emphasis")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-html-inline"},"@yozora/tokenizer-html-inline")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-image"},"@yozora/tokenizer-image")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-image-reference"},"@yozora/tokenizer-image-reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-inline-code"},"@yozora/tokenizer-inline-code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-inline-math"},"@yozora/tokenizer-inline-math")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-link"},"@yozora/tokenizer-link")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-link-reference"},"@yozora/tokenizer-link-reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-text"},"@yozora/tokenizer-text"))))),(0,i.kt)("h3",{id:"parse-inline"},"parse-inline"),(0,i.kt)("p",null,"  See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/tokenziercore/src/types/lifecycle/parse-inline.ts"},"TokenizerParseInlineHook")," for Details."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"processToken")),(0,i.kt)("td",{parentName:"tr",align:"center"},"true"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"<Function>"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Examples"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-autolink"},"@yozora/tokenizer-autolink")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-autolink-extension"},"@yozora/tokenizer-autolink-extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-break"},"@yozora/tokenizer-break")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-delete"},"@yozora/tokenizer-delete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-emphasis"},"@yozora/tokenizer-emphasis")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-html-inline"},"@yozora/tokenizer-html-inline")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-image"},"@yozora/tokenizer-image")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-image-reference"},"@yozora/tokenizer-image-reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-inline-code"},"@yozora/tokenizer-inline-code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-inline-math"},"@yozora/tokenizer-inline-math")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-link"},"@yozora/tokenizer-link")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-link-reference"},"@yozora/tokenizer-link-reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-text"},"@yozora/tokenizer-text"))))),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser"},"@yozora/parser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/packages/core-parser"},"Sourcecode"))))}s.isMDXComponent=!0}}]);