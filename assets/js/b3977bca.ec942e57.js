"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[2130],{2736:function(e,r,a){a.r(r),a.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return k},default:function(){return z}});var t=a(7462),o=a(3366),n=(a(7294),a(4137)),i=a(7225),m=a(8448),p=a(9430),s=["components"],l={id:"tokenizer-ecma-import",title:"@yozora/tokenizer-ecma-import",sidebar_label:"ecma-import"},c=void 0,d={unversionedId:"package/tokenizer-ecma-import",id:"package/tokenizer-ecma-import",title:"@yozora/tokenizer-ecma-import",description:"<img",source:"@site/docs/package/tokenizer-ecma-import.mdx",sourceDirName:"package",slug:"/package/tokenizer-ecma-import",permalink:"/docs/next/package/tokenizer-ecma-import",tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1642080905,formattedLastUpdatedAt:"1/13/2022",frontMatter:{id:"tokenizer-ecma-import",title:"@yozora/tokenizer-ecma-import",sidebar_label:"ecma-import"},sidebar:"Docs",previous:{title:"delete",permalink:"/docs/next/package/tokenizer-delete"},next:{title:"emphasis",permalink:"/docs/next/package/tokenizer-emphasis"}},k=[{value:"Install",id:"install",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[],level:3},{value:"Types",id:"types",children:[],level:3}],level:2},{value:"Live Examples",id:"live-examples",children:[],level:2},{value:"Related",id:"related",children:[],level:2}],u={toc:k};function z(e){var r=e.components,a=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("header",null,(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-ecma-import"},(0,n.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-ecma-import/latest"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-ecma-import"},(0,n.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-ecma-import.svg"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-ecma-import"},(0,n.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-ecma-import.svg"})),(0,n.kt)("a",{href:"#install"},(0,n.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,n.kt)("a",{href:"https://github.com/nodejs/node"},(0,n.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-ecma-import"})),(0,n.kt)("a",{href:"https://github.com/facebook/jest"},(0,n.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,n.kt)("a",{href:"https://github.com/prettier/prettier"},(0,n.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,n.kt)("br",null),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"github flavor markdown spec")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./tokenizer-ecma-import"},"@yozora/tokenizer-ecma-import")," parse ECMAScript ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," statement. It should\nbe noted that only single-line ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," statements are supported. in addition\n",(0,n.kt)("inlineCode",{parentName:"p"},"* as")," and type import are not support. For example, the following ",(0,n.kt)("inlineCode",{parentName:"p"},"import"),"\nstatements are supported:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import '@yozora/parser'\nimport Parser from '@yozora/parser'\nimport Parser, { YozoraParserProps } from '@yozora/parser'\nimport { YozoraParserProps } from '@yozora/parser'\nimport { YozoraParser, YozoraParser as Parser } from '@yozora/parser'\n")),(0,n.kt)("p",null,"And here is the not supported case:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as Parser '@yozora/parser'\nimport {\n  Parser\n} from '@yozora/parser'\n")),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(m.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-ecma-import\n"))),(0,n.kt)(m.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-ecma-import\n")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("a",{parentName:"p",href:"./tokenizer-ecma-import"},"@yozora/tokenizer-ecma-import")," has been integrated into ",(0,n.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser"),",\nso you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"YozoraParser")," directly."))),(0,n.kt)(i.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,n.kt)(m.Z,{value:"basic-usage",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./tokenizer-ecma-import"},"@yozora/tokenizer-ecma-import")," cannot be used alone, it needs to be\nregistered in ",(0,n.kt)("em",{parentName:"p"},"Parser")," as a plugin-in before it can be used."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport EcmaImportTokenizer from '@yozora/tokenizer-ecma-import'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new EcmaImportTokenizer())\n\n// parse source markdown content\nparser.parse(`\nimport { Parser } from '@yozora/parser'\nimport { Button } from '@mui/material'\nimport Markdown from '@yozora/react-markdown'\n`)\n"))),(0,n.kt)(m.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\nimport { Parser } from '@yozora/parser'\nimport { Button } from '@mui/material'\nimport Markdown from '@yozora/react-markdown'\n`)\n"))),(0,n.kt)(m.Z,{value:"GfmParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{2,5}","{2,5}":!0},"import GfmParser from '@yozora/parser-gfm'\nimport EcmaImportTokenizer from '@yozora/tokenizer-ecma-import'\n\nconst parser = new GfmParser()\nparser.useTokenizer(new EcmaImportTokenizer())\n\n// parse source markdown content\nparser.parse(`\nimport { Parser } from '@yozora/parser'\nimport { Button } from '@mui/material'\nimport Markdown from '@yozora/react-markdown'\n`)\n"))),(0,n.kt)(m.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{2,5}","{2,5}":!0},"import GfmExParser from '@yozora/parser-gfm-ex'\nimport EcmaImportTokenizer from '@yozora/tokenizer-ecma-import'\n\nconst parser = new GfmExParser()\nparser.useTokenizer(new EcmaImportTokenizer())\n\n// parse source markdown content\nparser.parse(`\nimport { Parser } from '@yozora/parser'\nimport { Button } from '@mui/material'\nimport Markdown from '@yozora/react-markdown'\n`)\n")))),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-ecma-import"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"priority")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,n.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,n.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."))),(0,n.kt)("h3",{id:"types"},"Types"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * import { YozoraParserProps, YozoraParser as Parser } from '@yozora/parser'\n * ==>  [\n *        { src: 'YozoraParserProps', alias: null },\n *        { src: 'YozoraParser', alias: 'Parser' },\n *      ]\n */\nexport interface EcmaImportNamedImport {\n  src: string\n  alias: string | null\n}\n\n/**\n * import Parser from '@yozora/parser'\n * import Parser, { YozoraParserProps } from '@yozora/parser'\n * import { YozoraParserProps } from '@yozora/parser'\n * import { YozoraParser as Parser } from '@yozora/parser'\n */\nexport interface EcmaImport extends Node<EcmaImportType> {\n  /**\n   * import Parser from '@yozora/parser'\n   * ==> { moduleName: '@yozora/parser' }\n   */\n  moduleName: string\n  /**\n   * import Parser, { YozoraParserProps } from '@yozora/parser'\n   * ==> { defaultImport: 'Parser' }\n   */\n  defaultImport: string | null\n  /**\n   * import { YozoraParserProps, YozoraParser as Parser } from '@yozora/parser'\n   * ==>  {\n   *        namedImports: [\n   *          { src: 'YozoraParserProps', alias: null },\n   *          { src: 'YozoraParser', alias: 'Parser' },\n   *        ]\n   *      }\n   */\n  namedImports: EcmaImportNamedImport[]\n}\n")),(0,n.kt)("h2",{id:"live-examples"},"Live Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Basic."),(0,n.kt)(p.Z,{ids:"1-4",parsers:["yozora"],sourceType:"ecmaImport",mdxType:"YozoraGFMLive"}))),(0,n.kt)("h2",{id:"related"},"Related"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/definition"},"Sourcecode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast#ecmaimport"},"EcmaImport| Yozora AST"))))}z.isMDXComponent=!0}}]);