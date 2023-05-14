"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[5407],{16275:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>k,toc:()=>d});var r=t(87462),n=(t(67294),t(3905)),o=t(73992),i=t(18679),p=t(32707);const s={id:"tokenizer-break",title:"@yozora/tokenizer-break",sidebar_label:"break"},l=void 0,k={unversionedId:"package/tokenizer-break",id:"package/tokenizer-break",title:"@yozora/tokenizer-break",description:"<img",source:"@site/docs/package/tokenizer-break.mdx",sourceDirName:"package",slug:"/package/tokenizer-break",permalink:"/docs/next/package/tokenizer-break",draft:!1,tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1684057460,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{id:"tokenizer-break",title:"@yozora/tokenizer-break",sidebar_label:"break"},sidebar:"Docs",previous:{title:"blockquote",permalink:"/docs/next/package/tokenizer-blockquote"},next:{title:"definition",permalink:"/docs/next/package/tokenizer-definition"}},m={},d=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Hard line breaks",id:"hard-line-breaks-1",level:3},{value:"Soft line breaks",id:"soft-line-breaks-1",level:3},{value:"Related",id:"related",level:2}],h={toc:d},b="wrapper";function c(e){let{components:a,...t}=e;return(0,n.kt)(b,(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("header",null,(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-break"},(0,n.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-break/latest"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-break"},(0,n.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-break.svg"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-break"},(0,n.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-break.svg"})),(0,n.kt)("a",{href:"#install"},(0,n.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,n.kt)("a",{href:"https://github.com/nodejs/node"},(0,n.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-break"})),(0,n.kt)("a",{href:"https://github.com/facebook/jest"},(0,n.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,n.kt)("a",{href:"https://github.com/prettier/prettier"},(0,n.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,n.kt)("br",null),(0,n.kt)("admonition",{title:"github flavor markdown spec",type:"note"},(0,n.kt)("h2",{parentName:"admonition",id:"hard-line-breaks"},"Hard line breaks"),(0,n.kt)("p",{parentName:"admonition"},"A line break (not in a code span or HTML tag) that is preceded by two or more\n",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"spaces")," and does not occur at the end of a block is parsed as a\n",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#hard-line-break"},"hard line break")," (rendered in HTML as a ",(0,n.kt)("inlineCode",{parentName:"p"},"<br />")," tag)."),(0,n.kt)("h2",{parentName:"admonition",id:"soft-line-breaks"},"Soft line breaks"),(0,n.kt)("p",{parentName:"admonition"},"A regular line break (not in a code span or HTML tag) that is not preceded by\ntwo or more ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"spaces")," or a backslash is parsed as a ","[softbreak]","gfm-softbreak.\n(A softbreak may be rendered in HTML either as a ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#line-ending"},"line ending"),"\nor as a space. The result will be the same in browsers. In the examples here,\na ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#line-ending"},"line ending")," will be used.)"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#hard-line-break"},"github flavor markdown spec"))," for details."),(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression."))),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-break\n"))),(0,n.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-break\n"))),(0,n.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @yozora/tokenizer-break\n")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"./tokenizer-break"},"@yozora/tokenizer-break")," has been integrated into ",(0,n.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,n.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,n.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly.")),(0,n.kt)(o.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"basic-usage",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./tokenizer-break"},"@yozora/tokenizer-break")," cannot be used alone, it needs to be\nregistered in ",(0,n.kt)("em",{parentName:"p"},"Parser")," as a plugin-in before it can be used."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport BreakTokenizer from '@yozora/tokenizer-break'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new BreakTokenizer())\n\n// parse source markdown content\nparser.parse(`\nfoo  \nbaz\n\nfoo\\\nbaz\n\nfoo\nbaz\n`)\n"))),(0,n.kt)(i.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\nfoo  \nbaz\n\nfoo\\\nbaz\n\nfoo\nbaz\n`)\n"))),(0,n.kt)(i.Z,{value:"GfmParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\nfoo  \nbaz\n\nfoo\\\nbaz\n\nfoo\nbaz\n`)\n"))),(0,n.kt)(i.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\nfoo  \nbaz\n\nfoo\\\nbaz\n\nfoo\nbaz\n`)\n")))),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-break"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"priority")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,n.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,n.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Exception:")," Delimiters of type ",(0,n.kt)("inlineCode",{parentName:"p"},"full")," are always processed before other type\ndelimiters."))),(0,n.kt)("h3",{id:"types"},"Types"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./tokenizer-break"},"@yozora/tokenizer-break")," produce ",(0,n.kt)("a",{parentName:"p",href:"./ast#break"},"Break")," type nodes.\nSee ",(0,n.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Node } from '@yozora/ast'\n\nexport const BreakType = 'break'\nexport type BreakType = typeof BreakType\n\n/**\n * Break represents a line break, such as in poems or addresses.\n * @see https://github.com/syntax-tree/mdast#break\n * @see https://github.github.com/gfm/#hard-line-breaks\n * @see https://github.github.com/gfm/#soft-line-breaks\n */\nexport type Break = Node<BreakType>\n")),(0,n.kt)("h2",{id:"live-examples"},"Live Examples"),(0,n.kt)("h3",{id:"hard-line-breaks-1"},"Hard line breaks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Basic."),(0,n.kt)(p.Z,{ids:"654",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For a more visible alternative, a backslash before the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#line-ending"},"line ending")," may be used instead of two ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"spaces"),"."),(0,n.kt)(p.Z,{ids:"655",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"More than two spaces can be used."),(0,n.kt)(p.Z,{ids:"656",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Leading spaces at the beginning of the next line are ignored."),(0,n.kt)(p.Z,{ids:"657-658",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Line breaks can occur inside emphasis, links, and other constructs that\nallow inline content."),(0,n.kt)(p.Z,{ids:"659-660",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Line breaks do not occur inside ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#code-span"},"code spans")," or or HTML tags."),(0,n.kt)(p.Z,{ids:"661-664",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hard line breaks are for separating inline content within a block. Neither\nsyntax for hard line breaks works at the end of a paragraph or other block\nelement."),(0,n.kt)(p.Z,{ids:"665-668",mdxType:"YozoraGFMLive"}))),(0,n.kt)("h3",{id:"soft-line-breaks-1"},"Soft line breaks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Basic."),(0,n.kt)(p.Z,{ids:"669",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Spaces at the end of the line and beginning of the next line are removed."),(0,n.kt)(p.Z,{ids:"670",mdxType:"YozoraGFMLive"}))),(0,n.kt)("h2",{id:"related"},"Related"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/break#readme"},"@yozora/react-break")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/break/"},"Sourcecode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast#break"},"Break | Yozora AST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#hard-line-break"},"Hard line breaks | Github Flavor Markdown Spec")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#soft-line-breaks"},"Soft line breaks | Github Flavor Markdown Spec")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#break"},"Break | Mdast"))))}c.isMDXComponent=!0}}]);