"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[4789],{86419:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),i=a(25487),o=a(86023);const l={id:"core-parser",title:"@yozora/core-parser",sidebar_label:"core-parser"},k=void 0,p={unversionedId:"package/core-parser",id:"version-2.x.x/package/core-parser",title:"@yozora/core-parser",description:"<img",source:"@site/versioned_docs/version-2.x.x/package/core-parser.mdx",sourceDirName:"package",slug:"/package/core-parser",permalink:"/docs/package/core-parser",draft:!1,tags:[],version:"2.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1683986667,formattedLastUpdatedAt:"May 13, 2023",frontMatter:{id:"core-parser",title:"@yozora/core-parser",sidebar_label:"core-parser"},sidebar:"API",previous:{title:"core-tokenizer",permalink:"/docs/package/core-tokenizer"},next:{title:"GFM Examples",permalink:"/docs/example/gfm"}},m={},d=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"DefaultParser Options",id:"defaultparser-options",level:3},{value:"Lifecycle",id:"lifecycle",level:2},{value:"math-block",id:"math-block",level:3},{value:"parse-block",id:"parse-block",level:3},{value:"match-inline",id:"match-inline",level:3},{value:"parse-inline",id:"parse-inline",level:3},{value:"Related",id:"related",level:2}],s={toc:d};function N(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("header",null,(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/core-parser"},(0,n.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/core-parser/latest"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/core-parser"},(0,n.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/core-parser.svg"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/core-parser"},(0,n.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/core-parser.svg"})),(0,n.kt)("a",{href:"#install"},(0,n.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,n.kt)("a",{href:"https://github.com/nodejs/node"},(0,n.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/core-parser"})),(0,n.kt)("a",{href:"https://github.com/prettier/prettier"},(0,n.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./core-parser"},"@yozora/core-parser")," provides a plug-in system that can load tokenizer for\ncollaborative processing in the ",(0,n.kt)("a",{parentName:"p",href:"#lifecycle"},"lifecycles"),"."),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/core-parser\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/core-parser\n"))),(0,n.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @yozora/core-parser\n")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./core-parser"},"@yozora/core-parser")," provides a default ",(0,n.kt)("inlineCode",{parentName:"p"},"Parser")," implementation\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/fbbaf365ad9a16130cc14d40da845908e0099549/packages/core-parser/src/parser.ts#L34"},"DefaultParser"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { DefaultParser } from '@yozora/core-parser'\nimport EmphasisTokenizer from '@yozora/tokenizer-emphasis'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\n\nconst parser = new DefaultParser({ shouldReservePosition: true })\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n\n  // add custom tokenizers through `useTokenizer()`\n  .useTokenizer(new EmphasisTokenizer())\n\n// Parse literal string\nparser.parse('source content such as **emphasis**')\n\n// Parse literal string lists\nparser.parse(['source content', 'additional *content*'])\n\n// Parse iterable string\n// The Parser will processing at every time a line is read.\nfunction* genContents () {\n  yield 'source content1\\n'\n  yield 'source content2\\n'\n  return 'source content3\\n'\n}\nparser.parse(genContents())\n\n// Reserve the positions\nparser.parse('source content', { shouldReservePosition: true })\n")),(0,n.kt)("h3",{id:"defaultparser-options"},"DefaultParser Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Constructor Options"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"blockFallbackTokenizer")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"null")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/yozorajs/yozora/blob/fbbaf365ad9a16130cc14d40da845908e0099549/packages/core-tokenizer/src/types/tokenizer.ts#L67"},"BlockFallbackTokenizer")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"null"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"inlineFallbackTokenizer")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"null")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/yozorajs/yozora/blob/fbbaf365ad9a16130cc14d40da845908e0099549/packages/core-tokenizer/src/types/tokenizer.ts#L86"},"InlineFallbackTokenizer")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"null"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"defaultParseOptions")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},"See below"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Parse Options")))),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"blockFallbackTokenizer"),": Fallback tokenizer on processing block structure phase.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"inlineFallbackTokenizer"),": Fallback tokenizer on processing inline structure phase.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"defaultParseOptions"),": Default options for ",(0,n.kt)("inlineCode",{parentName:"p"},"parse()"),". Default:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  presetDefinitions: [],\n  presetFootnoteDefinitions: [],\n  shouldReservePosition: false\n}\n"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Parse Options"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"presetDefinitions")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"defaultParserOptions.presetDefinitions")),(0,n.kt)("td",{parentName:"tr",align:"center"},"[Association][src-Association]"," list.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"presetFootnoteDefinitions")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"defaultParserOptions.presetFootnoteDefinitions")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"shouldReservePosition")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"defaultParserOptions.shouldReservePosition")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"presetDefinitions"),": Preset definition meta data list."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"presetFootnoteDefinitions"),": Preset footnote definition meta data list."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"shouldReservePosition"),": Whether it is necessary to reserve the position of the Node parsed.")))),(0,n.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,n.kt)("h3",{id:"math-block"},"math-block"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"API: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/fbbaf365ad9a16130cc14d40da845908e0099549/packages/core-tokenizer/src/types/match-block/api.ts#L7"},"IMatchBlockPhaseApi")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"extractPhrasingLines")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Extract phrasing content lines from block token.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"rollbackPhrasingLines")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Re-match token from phrasing content lines.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"registerDefinitionIdentifier")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Register a definition identifier.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"registerFootnoteDefinitionIdentifier")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Register a footnote definition identifier."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hook: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/fbbaf365ad9a16130cc14d40da845908e0099549/packages/core-tokenizer/src/types/match-block/hook.ts#L16"},"IMatchBlockHook")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"isContainingBlock")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Whether if it is a container block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"eatOpener")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Try to match new block data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"eatAndInterruptPreviousSibling")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Try to interrupt the eatContinuationText action of the last sibling node.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"eatContinuationText")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Try to eat the Continuation Text, and check if it is still satisfied to current opening MatchToken")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"eatLazyContinuationText")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Try to eat the Laziness Continuation Text, and check if it is still satisfied to current opening MatchToken")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"onClose")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Called when the token is saturated."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Example tokenizers:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-admonition"},"@yozora/tokenizer-admonition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-blockquote"},"@yozora/tokenizer-blockquote")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-fenced-code"},"@yozora/tokenizer-fenced-code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-heading"},"@yozora/tokenizer-heading")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-html-block"},"@yozora/tokenizer-html-block")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-indented-code"},"@yozora/tokenizer-indented-code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-definition"},"@yozora/tokenizer-definition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-list"},"@yozora/tokenizer-list")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-math"},"@yozora/tokenizer-math")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-paragraph"},"@yozora/tokenizer-paragraph")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-setext-heading"},"@yozora/tokenizer-setext-heading")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-table"},"@yozora/tokenizer-table")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-thematic-break"},"@yozora/tokenizer-thematic-break"))))),(0,n.kt)("h3",{id:"parse-block"},"parse-block"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"API: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/fbbaf365ad9a16130cc14d40da845908e0099549/packages/core-tokenizer/src/types/parse-block/api.ts#L8"},"IParseBlockPhaseApi")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"shouldReservePosition")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Whether it is necessary to reserve the position in the Node produced.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"processInlines")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Process node points into inline nodes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"parseBlockTokens")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Parse block tokens to Yozora AST nodes."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hook: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/fbbaf365ad9a16130cc14d40da845908e0099549/packages/core-tokenizer/src/types/parse-block/hook.ts#L16"},"IParseBlockHook")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"parse")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Processing a specified token list to Node list."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Example tokenizers:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-admonition"},"@yozora/tokenizer-admonition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-blockquote"},"@yozora/tokenizer-blockquote")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-fenced-code"},"@yozora/tokenizer-fenced-code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-heading"},"@yozora/tokenizer-heading")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-html-block"},"@yozora/tokenizer-html-block")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-indented-code"},"@yozora/tokenizer-indented-code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-definition"},"@yozora/tokenizer-definition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-list"},"@yozora/tokenizer-list")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-math"},"@yozora/tokenizer-math")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-paragraph"},"@yozora/tokenizer-paragraph")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-setext-heading"},"@yozora/tokenizer-setext-heading")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-table"},"@yozora/tokenizer-table")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-thematic-break"},"@yozora/tokenizer-thematic-break"))))),(0,n.kt)("h3",{id:"match-inline"},"match-inline"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"API: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/fbbaf365ad9a16130cc14d40da845908e0099549/packages/core-tokenizer/src/types/match-inline/api.ts#L7"},"IMatchInlinePhaseApi")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"hasDefinition")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Check if there is exists a definition with the given identifier.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"hasFootnoteDefinition")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Check if there is exists a footnote definition with the given identifier.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"getNodePoints")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Get the node points.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"getBlockStartIndex")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Start index of current block token.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"getBlockEndIndex")),(0,n.kt)("td",{parentName:"tr",align:"center"},"End index of current block token.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"resolveFallbackTokens")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Resolve fallback inline tokens.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"resolveInternalTokens")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Resolve raw contents with the fallback inline tokenizer."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hook: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/fbbaf365ad9a16130cc14d40da845908e0099549/packages/core-tokenizer/src/types/match-inline/hook.ts#L16"},"IMatchInlineHook")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"findDelimiter")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Find an inline token delimiter.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"isDelimiterPair")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Check if the given two delimiters can be combined into a pair.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"processDelimiterPair")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Process a pair of delimiters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"processSingleDelimiter")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Process a single delimiter (its type should be one of 'both' and 'full')."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Example tokenizers:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-autolink"},"@yozora/tokenizer-autolink")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-autolink-extension"},"@yozora/tokenizer-autolink-extension")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-break"},"@yozora/tokenizer-break")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-delete"},"@yozora/tokenizer-delete")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-emphasis"},"@yozora/tokenizer-emphasis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-html-inline"},"@yozora/tokenizer-html-inline")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-image"},"@yozora/tokenizer-image")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-image-reference"},"@yozora/tokenizer-image-reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-inline-code"},"@yozora/tokenizer-inline-code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-inline-math"},"@yozora/tokenizer-inline-math")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-link"},"@yozora/tokenizer-link")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-link-reference"},"@yozora/tokenizer-link-reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-text"},"@yozora/tokenizer-text"))))),(0,n.kt)("h3",{id:"parse-inline"},"parse-inline"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"API: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/fbbaf365ad9a16130cc14d40da845908e0099549/packages/core-tokenizer/src/types/parse-inline/api.ts#L8"},"IParseInlinePhaseApi")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"shouldReservePosition")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Whether it is necessary to reserve the position in the Node produced.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"getNodePoints")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Get the node points.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"calcPosition")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Calculate position of token.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"hasDefinition")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Check if there is exists a definition with the given identifier.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"hasFootnoteDefinition")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Check if there is exists a footnote definition with the given identifier.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"parseInlineTokens")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Parse inline tokens to Yozora AST nodes."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hook: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/fbbaf365ad9a16130cc14d40da845908e0099549/packages/core-tokenizer/src/types/parse-inline/hook.ts#L16"},"IParseInlineHook")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"parse")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Processing token list to Node list."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Example tokenizers:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-autolink"},"@yozora/tokenizer-autolink")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-autolink-extension"},"@yozora/tokenizer-autolink-extension")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-break"},"@yozora/tokenizer-break")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-delete"},"@yozora/tokenizer-delete")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-emphasis"},"@yozora/tokenizer-emphasis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-html-inline"},"@yozora/tokenizer-html-inline")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-image"},"@yozora/tokenizer-image")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-image-reference"},"@yozora/tokenizer-image-reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-inline-code"},"@yozora/tokenizer-inline-code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-inline-math"},"@yozora/tokenizer-inline-math")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-link"},"@yozora/tokenizer-link")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-link-reference"},"@yozora/tokenizer-link-reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-text"},"@yozora/tokenizer-text"))))),(0,n.kt)("h2",{id:"related"},"Related"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/packages/core-parser"},"Sourcecode"))))}N.isMDXComponent=!0}}]);