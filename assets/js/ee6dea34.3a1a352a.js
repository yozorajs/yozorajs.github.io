"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[1172],{1208:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var i=r(7624),t=r(4552),l=r(6212),s=r(2440);const c={id:"core-parser",title:"@yozora/core-parser",sidebar_label:"core-parser"},d=void 0,o={id:"package/core-parser",title:"@yozora/core-parser",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/core-parser.mdx",sourceDirName:"package",slug:"/package/core-parser",permalink:"/docs/1.x.x/package/core-parser",draft:!1,unlisted:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1706961465,formattedLastUpdatedAt:"Feb 3, 2024",frontMatter:{id:"core-parser",title:"@yozora/core-parser",sidebar_label:"core-parser"},sidebar:"API",previous:{title:"core-tokenizer",permalink:"/docs/1.x.x/package/core-tokenizer"},next:{title:"GFM Examples",permalink:"/docs/1.x.x/example/gfm"}},h={},a=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Lifecycle",id:"lifecycle",level:2},{value:"match-block",id:"match-block",level:3},{value:"post-match-block",id:"post-match-block",level:3},{value:"parse-block",id:"parse-block",level:3},{value:"match-inline",id:"match-inline",level:3},{value:"parse-inline",id:"parse-inline",level:3},{value:"Related",id:"related",level:2}];function x(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{align:"center",children:[(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/core-parser",children:(0,i.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/core-parser/v1.x.x"})}),(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/core-parser",children:(0,i.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/core-parser.svg"})}),(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/core-parser",children:(0,i.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/core-parser.svg"})}),(0,i.jsx)("a",{href:"#install",children:(0,i.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,i.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,i.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/core-parser"})}),(0,i.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,i.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"./core-parser",children:"@yozora/core-parser"})," provides a plug-in system that can load tokenizer for\ncollaborative processing in the ",(0,i.jsx)(n.a,{href:"#lifecycle",children:"lifecycles"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsxs)(l.c,{groupId:"npm2yarn",children:[(0,i.jsx)(s.c,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save @yozora/core-parser\n"})})}),(0,i.jsx)(s.c,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @yozora/core-parser\n"})})}),(0,i.jsx)(s.c,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @yozora/core-parser\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"./core-parser",children:"@yozora/core-parser"})," provides a default ",(0,i.jsx)(n.code,{children:"YastParser"})," implementation\n",(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/core-parser/src/parser.ts#L73",children:"DefaultYastParser"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { DefaultYastParser } from '@yozora/core-parser'\nimport EmphasisTokenizer from '@yozora/tokenizer-emphasis'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\n\nconst parser = new DefaultYastParser({ shouldReservePosition: true })\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n\n  // add custom tokenizers through `useTokenizer()`\n  .useTokenizer(new EmphasisTokenizer())\n\n// Parse content\nparser.parse('source content')\n\n// Specify the content range\nparser.parse('source content', 0, 10)\n\n// Remove the positions from the YastNode.\nparser.parse('source content', undefined, undefined, false)\n\n// Reserve the positions\nparser.parse('source content', undefined, undefined, true)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Default"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"blockFallbackTokenizer"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"null"})}),(0,i.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/tokenziercore/src/types/tokenizer.ts#L39",children:"BlockFallbackTokenizer"})," | ",(0,i.jsx)(n.code,{children:"null"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"inlineFallbackTokenizer"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"null"})}),(0,i.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/tokenziercore/src/types/tokenizer.ts#L54",children:"InlineFallbackTokenizer"})," | ",(0,i.jsx)(n.code,{children:"null"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"lazinessTypes"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"See below"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"string[]"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"shouldReservePosition"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"boolean"})})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"blockFallbackTokenizer"}),": Fallback tokenizer on processing block structure phase."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"inlineFallbackTokenizer"}),": Fallback tokenizer on processing inline structure phase."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"lazinessTypes"}),": Types of YastNode which could has laziness contents."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Default: result of ",(0,i.jsx)(n.code,{children:"[PhrasingContentType].concat(blockFallbackTokenizer.uniqueTypes)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"shouldReservePosition"}),": Whether it is necessary to reserve the position of\nthe YastNode parsed."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"lifecycle",children:"Lifecycle"}),"\n",(0,i.jsx)(n.h3,{id:"match-block",children:"match-block"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/tokenziercore/src/types/lifecycle/match-block.ts",children:"TokenizerMatchBlockHook"})," for Details."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"isContainerBlock"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"interruptableTypes"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"string[]"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"eatOpener"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"eatAndInterruptPreviousSibling"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"eatContinuationText"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"eatLazyContinuationText"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"onClose"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"extractPhrasingContentLines"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"buildBlockState"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-admonition",children:"@yozora/tokenizer-admonition"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-blockquote",children:"@yozora/tokenizer-blockquote"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-fenced-code",children:"@yozora/tokenizer-fenced-code"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-heading",children:"@yozora/tokenizer-heading"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-html-block",children:"@yozora/tokenizer-html-block"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-indented-code",children:"@yozora/tokenizer-indented-code"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-definition",children:"@yozora/tokenizer-definition"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-list-item",children:"@yozora/tokenizer-list-item"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-math",children:"@yozora/tokenizer-math"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-paragraph",children:"@yozora/tokenizer-paragraph"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-setext-heading",children:"@yozora/tokenizer-setext-heading"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-table",children:"@yozora/tokenizer-table"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-thematic-break",children:"@yozora/tokenizer-thematic-break"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"post-match-block",children:"post-match-block"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/tokenziercore/src/types/lifecycle/post-match-block.ts",children:"TokenizerPostMatchBlockHook"})," for Details."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"transformMatch"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-list",children:"@yozora/tokenizer-list"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"parse-block",children:"parse-block"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/tokenziercore/src/types/lifecycle/parse-block.ts",children:"TokenizerParseBlockHook"})," for Details."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"parseBlock"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"parseMeta"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-admonition",children:"@yozora/tokenizer-admonition"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-blockquote",children:"@yozora/tokenizer-blockquote"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-fenced-code",children:"@yozora/tokenizer-fenced-code"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-heading",children:"@yozora/tokenizer-heading"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-html-block",children:"@yozora/tokenizer-html-block"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-indented-code",children:"@yozora/tokenizer-indented-code"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-definition",children:"@yozora/tokenizer-definition"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-list-item",children:"@yozora/tokenizer-list-item"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-list",children:"@yozora/tokenizer-list"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-math",children:"@yozora/tokenizer-math"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-paragraph",children:"@yozora/tokenizer-paragraph"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-setext-heading",children:"@yozora/tokenizer-setext-heading"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-table",children:"@yozora/tokenizer-table"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-thematic-break",children:"@yozora/tokenizer-thematic-break"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"match-inline",children:"match-inline"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/tokenziercore/src/types/lifecycle/match-inline.ts",children:"TokenizerMatchInlineHook"})," for Details."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"priority"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"delimiterGroup"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"findDelimiter"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"isDelimiterPair"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"processDelimiterPair"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"processFullDelimiter"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-autolink",children:"@yozora/tokenizer-autolink"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-autolink-extension",children:"@yozora/tokenizer-autolink-extension"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-break",children:"@yozora/tokenizer-break"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-delete",children:"@yozora/tokenizer-delete"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-emphasis",children:"@yozora/tokenizer-emphasis"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-html-inline",children:"@yozora/tokenizer-html-inline"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-image",children:"@yozora/tokenizer-image"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-image-reference",children:"@yozora/tokenizer-image-reference"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-inline-code",children:"@yozora/tokenizer-inline-code"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-inline-math",children:"@yozora/tokenizer-inline-math"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-link",children:"@yozora/tokenizer-link"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-link-reference",children:"@yozora/tokenizer-link-reference"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-text",children:"@yozora/tokenizer-text"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"parse-inline",children:"parse-inline"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/blob/v1.0.0-alpha.5/packages/tokenziercore/src/types/lifecycle/parse-inline.ts",children:"TokenizerParseInlineHook"})," for Details."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"processToken"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"true"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"<Function>"})})]})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-autolink",children:"@yozora/tokenizer-autolink"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-autolink-extension",children:"@yozora/tokenizer-autolink-extension"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-break",children:"@yozora/tokenizer-break"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-delete",children:"@yozora/tokenizer-delete"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-emphasis",children:"@yozora/tokenizer-emphasis"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-html-inline",children:"@yozora/tokenizer-html-inline"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-image",children:"@yozora/tokenizer-image"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-image-reference",children:"@yozora/tokenizer-image-reference"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-inline-code",children:"@yozora/tokenizer-inline-code"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-inline-math",children:"@yozora/tokenizer-inline-math"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-link",children:"@yozora/tokenizer-link"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-link-reference",children:"@yozora/tokenizer-link-reference"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-text",children:"@yozora/tokenizer-text"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./parser",children:"@yozora/parser"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/packages/core-parser",children:"Sourcecode"})}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}}}]);