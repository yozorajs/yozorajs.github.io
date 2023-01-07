"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[3660],{62358:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>k});var a=o(87462),n=(o(67294),o(3905)),r=o(94828),i=o(86023);o(10629);const s={id:"tokenizer-footnote",title:"@yozora/tokenizer-footnote",sidebar_label:"footnote"},p=void 0,l={unversionedId:"package/tokenizer-footnote",id:"version-1.x.x/package/tokenizer-footnote",title:"@yozora/tokenizer-footnote",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/tokenizer-footnote.mdx",sourceDirName:"package",slug:"/package/tokenizer-footnote",permalink:"/docs/1.x.x/package/tokenizer-footnote",draft:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1673091576,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{id:"tokenizer-footnote",title:"@yozora/tokenizer-footnote",sidebar_label:"footnote"},sidebar:"Docs",previous:{title:"fenced-code",permalink:"/docs/1.x.x/package/tokenizer-fenced-code"},next:{title:"footnote-definition",permalink:"/docs/1.x.x/package/tokenizer-footnote-definition"}},m={},k=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],d={toc:k};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("header",null,(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-footnote"},(0,n.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-footnote/v1.x.x"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-footnote"},(0,n.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-footnote.svg"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-footnote"},(0,n.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-footnote.svg"})),(0,n.kt)("a",{href:"#install"},(0,n.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,n.kt)("a",{href:"https://github.com/nodejs/node"},(0,n.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-footnote"})),(0,n.kt)("a",{href:"https://github.com/facebook/jest"},(0,n.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,n.kt)("a",{href:"https://github.com/prettier/prettier"},(0,n.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,n.kt)("br",null),(0,n.kt)("admonition",{title:"github flavor markdown spec",type:"note"}),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-footnote\n"))),(0,n.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-footnote\n")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"./tokenizer-footnote"},"@yozora/tokenizer-footnote")," has been integrated into ",(0,n.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser"),",\nso you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"YozoraParser")," directly.")),(0,n.kt)(r.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"basic-usage",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./tokenizer-footnote"},"@yozora/tokenizer-footnote")," cannot be used alone, it needs to be\nregistered in ",(0,n.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport FootnoteTokenizer from '@yozora/tokenizer-footnote'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new FootnoteTokenizer())\n\n// parse source markdown content\nparser.parse(`\n^[inline footnote]\n\n^[footnote with *emphasis* and $x^2+y^2$ and `inline code`]\n`)\n"))),(0,n.kt)(i.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n^[inline footnote]\n\n^[footnote with *emphasis* and $x^2+y^2$ and `inline code`]\n`)\n"))),(0,n.kt)(i.Z,{value:"GfmParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{2,5}","{2,5}":!0},"import GfmParser from '@yozora/parser-gfm'\nimport FootnoteTokenizer from '@yozora/tokenizer-footnote'\n\nconst parser = new GfmParser()\nparser.useTokenizer(new FootnoteTokenizer())\n\n// parse source markdown content\nparser.parse(`\n^[inline footnote]\n\n^[footnote with *emphasis* and $x^2+y^2$ and `inline code`]\n`)\n"))),(0,n.kt)(i.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{2,5}","{2,5}":!0},"import GfmExParser from '@yozora/parser-gfm-ex'\nimport FootnoteTokenizer from '@yozora/tokenizer-footnote'\n\nconst parser = new GfmExParser()\nparser.useTokenizer(new FootnoteTokenizer())\n\n// parse source markdown content\nparser.parse(`\n^[inline footnote]\n\n^[footnote with *emphasis* and $x^2+y^2$ and `inline code`]\n`)\n")))),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-footnote"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"priority")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.LINKS"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,n.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,n.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Exception:")," Delimiters of type ",(0,n.kt)("inlineCode",{parentName:"p"},"full")," are always processed before other type\ndelimiters."))),(0,n.kt)("h3",{id:"types"},"Types"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./tokenizer-footnote"},"@yozora/tokenizer-footnote")," produce ",(0,n.kt)("a",{parentName:"p",href:"./ast#footnote"},"Footnote")," type nodes.\nSee ",(0,n.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { YastParent } from '@yozora/ast'\n\nexport const FootnoteType = 'footnote'\nexport type FootnoteType = typeof FootnoteType\n\n/**\n * Footnote represents content relating to the document that is outside its flow.\n * @see https://github.com/syntax-tree/mdast#footnote\n */\nexport type Footnote = YastParent<FootnoteType>\n")),(0,n.kt)("h2",{id:"live-examples"},"Live Examples"),(0,n.kt)("h2",{id:"related"},"Related"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/footnote-definitions#readme"},"@yozora/react-footnote-definitions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/footnote-reference#readme"},"@yozora/react-footnote-reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/tokenizers/footnote"},"Sourcecode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast#footnote"},"Footnote | Yozora AST"))))}c.isMDXComponent=!0}}]);