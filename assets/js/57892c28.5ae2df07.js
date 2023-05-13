"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[1870],{41617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(25487),i=n(86023);n(10629);const s={id:"tokenizer-footnote-reference",title:"@yozora/tokenizer-footnote-reference",sidebar_label:"footnote-reference"},p=void 0,l={unversionedId:"package/tokenizer-footnote-reference",id:"version-2.x.x/package/tokenizer-footnote-reference",title:"@yozora/tokenizer-footnote-reference",description:"<img",source:"@site/versioned_docs/version-2.x.x/package/tokenizer-footnote-reference.mdx",sourceDirName:"package",slug:"/package/tokenizer-footnote-reference",permalink:"/docs/package/tokenizer-footnote-reference",draft:!1,tags:[],version:"2.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1683986667,formattedLastUpdatedAt:"May 13, 2023",frontMatter:{id:"tokenizer-footnote-reference",title:"@yozora/tokenizer-footnote-reference",sidebar_label:"footnote-reference"},sidebar:"Docs",previous:{title:"footnote-definition",permalink:"/docs/package/tokenizer-footnote-definition"},next:{title:"heading",permalink:"/docs/package/tokenizer-heading"}},m={},c=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],k={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("header",null,(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-footnote-reference"},(0,a.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-footnote-reference/latest"})),(0,a.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-footnote-reference"},(0,a.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-footnote-reference.svg"})),(0,a.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-footnote-reference"},(0,a.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-footnote-reference.svg"})),(0,a.kt)("a",{href:"#install"},(0,a.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,a.kt)("a",{href:"https://github.com/nodejs/node"},(0,a.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-footnote-reference"})),(0,a.kt)("a",{href:"https://github.com/facebook/jest"},(0,a.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,a.kt)("a",{href:"https://github.com/prettier/prettier"},(0,a.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"note"}),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-footnote-reference\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-footnote-reference\n"))),(0,a.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @yozora/tokenizer-footnote-reference\n")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"./tokenizer-footnote-reference"},"@yozora/tokenizer-footnote-reference")," has been integrated into ",(0,a.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser"),",\nso you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"YozoraParser")," directly.")),(0,a.kt)(o.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"basic-usage",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./tokenizer-footnote-reference"},"@yozora/tokenizer-footnote-reference")," cannot be used alone, it needs to be\nregistered in ",(0,a.kt)("em",{parentName:"p"},"Parser")," as a plugin-in before it can be used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport FootnoteReferenceTokenizer from '@yozora/tokenizer-footnote-reference'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new FootnoteReferenceTokenizer())\n\n// parse source markdown content\nparser.parse(`\n  Here is a footnote reference,[^1]\n  another,[^long note],\n  \n  [^big footnote]: Here's one with multiple paragraphs and code.\n  \n      Indent paragraphs to include them in the footnote.\n  \n      \\`\\`\\`\n      Fenced coding\n      \\`\\`\\`\n  \n      ## heading\n  \n      Add as many paragraphs as you like.\n  `)\n"))),(0,a.kt)(i.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n  Here is a footnote reference,[^1]\n  another,[^long note],\n  \n  [^big footnote]: Here's one with multiple paragraphs and code.\n  \n      Indent paragraphs to include them in the footnote.\n  \n      \\`\\`\\`\n      Fenced coding\n      \\`\\`\\`\n  \n      ## heading\n  \n      Add as many paragraphs as you like.\n  `)\n"))),(0,a.kt)(i.Z,{value:"GfmParser",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{2,5}","{2,5}":!0},"import GfmParser from '@yozora/parser-gfm'\nimport FootnoteReferenceTokenizer from '@yozora/tokenizer-footnote-reference'\n\nconst parser = new GfmParser()\nparser.useTokenizer(new FootnoteReferenceTokenizer())\n\n// parse source markdown content\nparser.parse(`\n  Here is a footnote reference,[^1]\n  another,[^long note],\n  \n  [^big footnote]: Here's one with multiple paragraphs and code.\n  \n      Indent paragraphs to include them in the footnote.\n  \n      \\`\\`\\`\n      Fenced coding\n      \\`\\`\\`\n  \n      ## heading\n  \n      Add as many paragraphs as you like.\n  `)\n"))),(0,a.kt)(i.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{2,5}","{2,5}":!0},"import GfmExParser from '@yozora/parser-gfm-ex'\nimport FootnoteReferenceTokenizer from '@yozora/tokenizer-footnote-reference'\n\nconst parser = new GfmExParser()\nparser.useTokenizer(new FootnoteReferenceTokenizer())\n\n// parse source markdown content\nparser.parse(`\n  Here is a footnote reference,[^1]\n  another,[^long note],\n  \n  [^big footnote]: Here's one with multiple paragraphs and code.\n  \n      Indent paragraphs to include them in the footnote.\n  \n      \\`\\`\\`\n      Fenced coding\n      \\`\\`\\`\n  \n      ## heading\n  \n      Add as many paragraphs as you like.\n  `)\n")))),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"name")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-footnote-reference"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"priority")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,a.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,a.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Exception:")," Delimiters of type ",(0,a.kt)("inlineCode",{parentName:"p"},"full")," are always processed before other type\ndelimiters."))),(0,a.kt)("h3",{id:"types"},"Types"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./tokenizer-footnote-reference"},"@yozora/tokenizer-footnote-reference")," produce ",(0,a.kt)("a",{parentName:"p",href:"./ast#footnote-reference"},"FootnoteReference")," type nodes.\nSee ",(0,a.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Association, Node } from '@yozora/ast'\n\nexport const FootnoteReferenceType = 'footnoteReference'\nexport type FootnoteReferenceType = typeof FootnoteReferenceType\n\n/**\n * FootnoteReference represents a marker through association.\n *\n * Similar to imageReference and linkReference, the difference is that it has\n * only 'collapsed' reference type instead of 'full' and 'shortcut'\n * @see https://github.com/syntax-tree/mdast#footnotereference\n * @see https://github.com/syntax-tree/mdast#imagereference\n * @see https://github.com/syntax-tree/mdast#linkreference\n */\nexport interface FootnoteReference\n  extends Node<FootnoteReferenceType>, Association {}\n")),(0,a.kt)("h2",{id:"live-examples"},"Live Examples"),(0,a.kt)("h2",{id:"related"},"Related"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./tokenizer-definition"},"@yozora/tokenizer-definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./tokenizer-footnote"},"@yozora/tokenizer-footnote")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/footnote-definitions#readme"},"@yozora/react-footnote-definitions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/footnote-reference#readme"},"@yozora/react-footnote-reference")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/footnote-reference"},"Sourcecode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./ast#footnote-reference"},"FootnoteReference | Yozora AST"))))}d.isMDXComponent=!0}}]);