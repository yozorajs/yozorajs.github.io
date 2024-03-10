"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[4453],{1055:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var o=a(4848),n=a(8453),s=a(9489),t=a(7227),i=a(7874);const l={id:"tokenizer-ecma-import",title:"@yozora/tokenizer-ecma-import",sidebar_label:"ecma-import"},c=void 0,m={id:"package/tokenizer-ecma-import",title:"@yozora/tokenizer-ecma-import",description:"<img",source:"@site/versioned_docs/version-2.x.x/package/tokenizer-ecma-import.mdx",sourceDirName:"package",slug:"/package/tokenizer-ecma-import",permalink:"/docs/package/tokenizer-ecma-import",draft:!1,unlisted:!1,tags:[],version:"2.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1710076334,formattedLastUpdatedAt:"Mar 10, 2024",frontMatter:{id:"tokenizer-ecma-import",title:"@yozora/tokenizer-ecma-import",sidebar_label:"ecma-import"},sidebar:"Docs",previous:{title:"delete",permalink:"/docs/package/tokenizer-delete"},next:{title:"emphasis",permalink:"/docs/package/tokenizer-emphasis"}},p={},d=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{align:"center",children:[(0,o.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-ecma-import",children:(0,o.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-ecma-import/latest"})}),(0,o.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-ecma-import",children:(0,o.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-ecma-import.svg"})}),(0,o.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-ecma-import",children:(0,o.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-ecma-import.svg"})}),(0,o.jsx)("a",{href:"#install",children:(0,o.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,o.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,o.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-ecma-import"})}),(0,o.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,o.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,o.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,o.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(r.admonition,{title:"github flavor markdown spec",type:"note"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"./tokenizer-ecma-import",children:"@yozora/tokenizer-ecma-import"})," parse ECMAScript ",(0,o.jsx)(r.code,{children:"import"})," statement. It should\nbe noted that only single-line ",(0,o.jsx)(r.code,{children:"import"})," statements are supported. in addition\n",(0,o.jsx)(r.code,{children:"* as"})," and type import are not support. For example, the following ",(0,o.jsx)(r.code,{children:"import"}),"\nstatements are supported:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"import '@yozora/parser'\nimport Parser from '@yozora/parser'\nimport Parser, { YozoraParserProps } from '@yozora/parser'\nimport { YozoraParserProps } from '@yozora/parser'\nimport { YozoraParser, YozoraParser as Parser } from '@yozora/parser'\n"})}),"\n",(0,o.jsx)(r.p,{children:"And here is the not supported case:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"import * as Parser '@yozora/parser'\nimport {\n  Parser\n} from '@yozora/parser'\n"})}),"\n",(0,o.jsx)(r.h2,{id:"install",children:"Install"}),"\n",(0,o.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,o.jsx)(t.A,{value:"npm",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"npm install --save @yozora/tokenizer-ecma-import\n"})})}),(0,o.jsx)(t.A,{value:"yarn",label:"Yarn",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"yarn add @yozora/tokenizer-ecma-import\n"})})}),(0,o.jsx)(t.A,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"pnpm add @yozora/tokenizer-ecma-import\n"})})})]}),"\n",(0,o.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(r.admonition,{type:"tip",children:(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"./tokenizer-ecma-import",children:"@yozora/tokenizer-ecma-import"})," has been integrated into ",(0,o.jsx)(r.a,{href:"./parser",children:"@yozora/parser"}),",\nso you can use ",(0,o.jsx)(r.code,{children:"YozoraParser"})," directly."]})}),"\n",(0,o.jsxs)(s.A,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],children:[(0,o.jsxs)(t.A,{value:"basic-usage",children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"./tokenizer-ecma-import",children:"@yozora/tokenizer-ecma-import"})," cannot be used alone, it needs to be\nregistered in ",(0,o.jsx)(r.em,{children:"Parser"})," as a plugin-in before it can be used."]}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",metastring:"{4,9}",children:"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport EcmaImportTokenizer from '@yozora/tokenizer-ecma-import'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new EcmaImportTokenizer())\n\n// parse source markdown content\nparser.parse(`\nimport { Parser } from '@yozora/parser'\nimport { Button } from '@mui/material'\nimport Markdown from '@yozora/react-markdown'\n`)\n"})})]}),(0,o.jsx)(t.A,{value:"YozoraParser",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\nimport { Parser } from '@yozora/parser'\nimport { Button } from '@mui/material'\nimport Markdown from '@yozora/react-markdown'\n`)\n"})})}),(0,o.jsx)(t.A,{value:"GfmParser",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",metastring:"{2,5}",children:"import GfmParser from '@yozora/parser-gfm'\nimport EcmaImportTokenizer from '@yozora/tokenizer-ecma-import'\n\nconst parser = new GfmParser()\nparser.useTokenizer(new EcmaImportTokenizer())\n\n// parse source markdown content\nparser.parse(`\nimport { Parser } from '@yozora/parser'\nimport { Button } from '@mui/material'\nimport Markdown from '@yozora/react-markdown'\n`)\n"})})}),(0,o.jsx)(t.A,{value:"GfmExParser",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",metastring:"{2,5}",children:"import GfmExParser from '@yozora/parser-gfm-ex'\nimport EcmaImportTokenizer from '@yozora/tokenizer-ecma-import'\n\nconst parser = new GfmExParser()\nparser.useTokenizer(new EcmaImportTokenizer())\n\n// parse source markdown content\nparser.parse(`\nimport { Parser } from '@yozora/parser'\nimport { Button } from '@mui/material'\nimport Markdown from '@yozora/react-markdown'\n`)\n"})})})]}),"\n",(0,o.jsx)(r.h3,{id:"options",children:"Options"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{style:{textAlign:"center"},children:"Name"}),(0,o.jsx)(r.th,{style:{textAlign:"center"},children:"Type"}),(0,o.jsx)(r.th,{style:{textAlign:"center"},children:"Required"}),(0,o.jsx)(r.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"center"},children:(0,o.jsx)(r.code,{children:"name"})}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:(0,o.jsx)(r.code,{children:"string"})}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:(0,o.jsx)(r.code,{children:"false"})}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:(0,o.jsx)(r.code,{children:'"@yozora/tokenizer-ecma-import"'})})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"center"},children:(0,o.jsx)(r.code,{children:"priority"})}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:(0,o.jsx)(r.code,{children:"number"})}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:(0,o.jsx)(r.code,{children:"false"})}),(0,o.jsx)(r.td,{style:{textAlign:"center"},children:(0,o.jsx)(r.code,{children:"TokenizerPriority.ATOMIC"})})]})]})]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"name"}),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,o.jsx)(r.em,{children:"matching / parsing"})," phase."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"priority"}),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,o.jsx)(r.code,{children:"match-block"}),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"types",children:"Types"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"/**\n * import { YozoraParserProps, YozoraParser as Parser } from '@yozora/parser'\n * ==>  [\n *        { src: 'YozoraParserProps', alias: null },\n *        { src: 'YozoraParser', alias: 'Parser' },\n *      ]\n */\nexport interface EcmaImportNamedImport {\n  src: string\n  alias: string | null\n}\n\n/**\n * import Parser from '@yozora/parser'\n * import Parser, { YozoraParserProps } from '@yozora/parser'\n * import { YozoraParserProps } from '@yozora/parser'\n * import { YozoraParser as Parser } from '@yozora/parser'\n */\nexport interface EcmaImport extends Node<EcmaImportType> {\n  /**\n   * import Parser from '@yozora/parser'\n   * ==> { moduleName: '@yozora/parser' }\n   */\n  moduleName: string\n  /**\n   * import Parser, { YozoraParserProps } from '@yozora/parser'\n   * ==> { defaultImport: 'Parser' }\n   */\n  defaultImport: string | null\n  /**\n   * import { YozoraParserProps, YozoraParser as Parser } from '@yozora/parser'\n   * ==>  {\n   *        namedImports: [\n   *          { src: 'YozoraParserProps', alias: null },\n   *          { src: 'YozoraParser', alias: 'Parser' },\n   *        ]\n   *      }\n   */\n  namedImports: EcmaImportNamedImport[]\n}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Basic."}),"\n",(0,o.jsx)(i.Rr,{ids:"1-4",parsers:["yozora"],sourceType:"ecmaImport"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"related",children:"Related"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"./parser",children:"@yozora/parser"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/definition",children:"Sourcecode"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"./ast#ecmaimport",children:"EcmaImport| Yozora AST"})}),"\n"]})]})}function x(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);