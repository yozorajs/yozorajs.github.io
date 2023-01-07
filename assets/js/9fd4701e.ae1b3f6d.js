"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[2256],{51851:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>k,contentTitle:()=>s,default:()=>z,frontMatter:()=>m,metadata:()=>l,toc:()=>c});var t=a(87462),o=(a(67294),a(3905)),n=a(94828),i=a(86023),p=a(10629);const m={id:"tokenizer-ecma-import",title:"@yozora/tokenizer-ecma-import",sidebar_label:"ecma-import"},s=void 0,l={unversionedId:"package/tokenizer-ecma-import",id:"version-2.x.x/package/tokenizer-ecma-import",title:"@yozora/tokenizer-ecma-import",description:"<img",source:"@site/versioned_docs/version-2.x.x/package/tokenizer-ecma-import.mdx",sourceDirName:"package",slug:"/package/tokenizer-ecma-import",permalink:"/docs/package/tokenizer-ecma-import",draft:!1,tags:[],version:"2.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1673091576,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{id:"tokenizer-ecma-import",title:"@yozora/tokenizer-ecma-import",sidebar_label:"ecma-import"},sidebar:"Docs",previous:{title:"delete",permalink:"/docs/package/tokenizer-delete"},next:{title:"emphasis",permalink:"/docs/package/tokenizer-emphasis"}},k={},c=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],d={toc:c};function z(e){let{components:r,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("header",null,(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-ecma-import"},(0,o.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-ecma-import/latest"})),(0,o.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-ecma-import"},(0,o.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-ecma-import.svg"})),(0,o.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-ecma-import"},(0,o.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-ecma-import.svg"})),(0,o.kt)("a",{href:"#install"},(0,o.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,o.kt)("a",{href:"https://github.com/nodejs/node"},(0,o.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-ecma-import"})),(0,o.kt)("a",{href:"https://github.com/facebook/jest"},(0,o.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,o.kt)("a",{href:"https://github.com/prettier/prettier"},(0,o.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,o.kt)("br",null),(0,o.kt)("admonition",{title:"github flavor markdown spec",type:"note"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./tokenizer-ecma-import"},"@yozora/tokenizer-ecma-import")," parse ECMAScript ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statement. It should\nbe noted that only single-line ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statements are supported. in addition\n",(0,o.kt)("inlineCode",{parentName:"p"},"* as")," and type import are not support. For example, the following ",(0,o.kt)("inlineCode",{parentName:"p"},"import"),"\nstatements are supported:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import '@yozora/parser'\nimport Parser from '@yozora/parser'\nimport Parser, { YozoraParserProps } from '@yozora/parser'\nimport { YozoraParserProps } from '@yozora/parser'\nimport { YozoraParser, YozoraParser as Parser } from '@yozora/parser'\n")),(0,o.kt)("p",null,"And here is the not supported case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as Parser '@yozora/parser'\nimport {\n  Parser\n} from '@yozora/parser'\n")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)(n.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-ecma-import\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-ecma-import\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"./tokenizer-ecma-import"},"@yozora/tokenizer-ecma-import")," has been integrated into ",(0,o.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser"),",\nso you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"YozoraParser")," directly.")),(0,o.kt)(n.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"basic-usage",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./tokenizer-ecma-import"},"@yozora/tokenizer-ecma-import")," cannot be used alone, it needs to be\nregistered in ",(0,o.kt)("em",{parentName:"p"},"Parser")," as a plugin-in before it can be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport EcmaImportTokenizer from '@yozora/tokenizer-ecma-import'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new EcmaImportTokenizer())\n\n// parse source markdown content\nparser.parse(`\nimport { Parser } from '@yozora/parser'\nimport { Button } from '@mui/material'\nimport Markdown from '@yozora/react-markdown'\n`)\n"))),(0,o.kt)(i.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\nimport { Parser } from '@yozora/parser'\nimport { Button } from '@mui/material'\nimport Markdown from '@yozora/react-markdown'\n`)\n"))),(0,o.kt)(i.Z,{value:"GfmParser",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{2,5}","{2,5}":!0},"import GfmParser from '@yozora/parser-gfm'\nimport EcmaImportTokenizer from '@yozora/tokenizer-ecma-import'\n\nconst parser = new GfmParser()\nparser.useTokenizer(new EcmaImportTokenizer())\n\n// parse source markdown content\nparser.parse(`\nimport { Parser } from '@yozora/parser'\nimport { Button } from '@mui/material'\nimport Markdown from '@yozora/react-markdown'\n`)\n"))),(0,o.kt)(i.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{2,5}","{2,5}":!0},"import GfmExParser from '@yozora/parser-gfm-ex'\nimport EcmaImportTokenizer from '@yozora/tokenizer-ecma-import'\n\nconst parser = new GfmExParser()\nparser.useTokenizer(new EcmaImportTokenizer())\n\n// parse source markdown content\nparser.parse(`\nimport { Parser } from '@yozora/parser'\nimport { Button } from '@mui/material'\nimport Markdown from '@yozora/react-markdown'\n`)\n")))),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-ecma-import"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"priority")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,o.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."))),(0,o.kt)("h3",{id:"types"},"Types"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * import { YozoraParserProps, YozoraParser as Parser } from '@yozora/parser'\n * ==>  [\n *        { src: 'YozoraParserProps', alias: null },\n *        { src: 'YozoraParser', alias: 'Parser' },\n *      ]\n */\nexport interface EcmaImportNamedImport {\n  src: string\n  alias: string | null\n}\n\n/**\n * import Parser from '@yozora/parser'\n * import Parser, { YozoraParserProps } from '@yozora/parser'\n * import { YozoraParserProps } from '@yozora/parser'\n * import { YozoraParser as Parser } from '@yozora/parser'\n */\nexport interface EcmaImport extends Node<EcmaImportType> {\n  /**\n   * import Parser from '@yozora/parser'\n   * ==> { moduleName: '@yozora/parser' }\n   */\n  moduleName: string\n  /**\n   * import Parser, { YozoraParserProps } from '@yozora/parser'\n   * ==> { defaultImport: 'Parser' }\n   */\n  defaultImport: string | null\n  /**\n   * import { YozoraParserProps, YozoraParser as Parser } from '@yozora/parser'\n   * ==>  {\n   *        namedImports: [\n   *          { src: 'YozoraParserProps', alias: null },\n   *          { src: 'YozoraParser', alias: 'Parser' },\n   *        ]\n   *      }\n   */\n  namedImports: EcmaImportNamedImport[]\n}\n")),(0,o.kt)("h2",{id:"live-examples"},"Live Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Basic."),(0,o.kt)(p.Z,{ids:"1-4",parsers:["yozora"],sourceType:"ecmaImport",mdxType:"YozoraGFMLive"}))),(0,o.kt)("h2",{id:"related"},"Related"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/definition"},"Sourcecode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./ast#ecmaimport"},"EcmaImport| Yozora AST"))))}z.isMDXComponent=!0}}]);