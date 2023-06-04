"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[8596],{14090:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>k,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>h});var r=t(87462),n=(t(67294),t(3905)),p=t(25487),o=t(86023),i=t(10629);const s={id:"tokenizer-paragraph",title:"@yozora/tokenizer-paragraph",sidebar_label:"paragraph"},l=void 0,m={unversionedId:"package/tokenizer-paragraph",id:"package/tokenizer-paragraph",title:"@yozora/tokenizer-paragraph",description:"<img",source:"@site/docs/package/tokenizer-paragraph.mdx",sourceDirName:"package",slug:"/package/tokenizer-paragraph",permalink:"/docs/next/package/tokenizer-paragraph",draft:!1,tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1685862233,formattedLastUpdatedAt:"Jun 4, 2023",frontMatter:{id:"tokenizer-paragraph",title:"@yozora/tokenizer-paragraph",sidebar_label:"paragraph"},sidebar:"Docs",previous:{title:"math",permalink:"/docs/next/package/tokenizer-math"},next:{title:"setext-heading",permalink:"/docs/next/package/tokenizer-setext-heading"}},k={},h=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],d={toc:h},g="wrapper";function c(e){let{components:a,...t}=e;return(0,n.kt)(g,(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("header",null,(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-paragraph"},(0,n.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-paragraph/latest"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-paragraph"},(0,n.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-paragraph.svg"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-paragraph"},(0,n.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-paragraph.svg"})),(0,n.kt)("a",{href:"#install"},(0,n.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,n.kt)("a",{href:"https://github.com/nodejs/node"},(0,n.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-paragraph"})),(0,n.kt)("a",{href:"https://github.com/facebook/jest"},(0,n.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,n.kt)("a",{href:"https://github.com/prettier/prettier"},(0,n.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,n.kt)("br",null),(0,n.kt)("admonition",{title:"github flavor markdown spec",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"A sequence of non-blank lines that cannot be interpreted as other kinds of\nblocks forms a ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#paragraph"},"paragraph"),". The contents of the paragraph are the\nresult of parsing the paragraph\u2019s raw content as inlines. The paragraph\u2019s raw\ncontent is formed by concatenating the lines and removing initial and final\n",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),"."),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#paragraph"},"github flavor markdown spec"))," for details."),(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression."))),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(p.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-paragraph\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-paragraph\n"))),(0,n.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @yozora/tokenizer-paragraph\n")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"./tokenizer-paragraph"},"@yozora/tokenizer-paragraph")," has been integrated into ",(0,n.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,n.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,n.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly.")),(0,n.kt)(p.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"basic-usage",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./tokenizer-paragraph"},"@yozora/tokenizer-paragraph")," cannot be used alone, it needs to be\nregistered in ",(0,n.kt)("em",{parentName:"p"},"Parser")," as a plugin-in before it can be used."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new ParagraphTokenizer())\n\n// parse source markdown content\nparser.parse(`\naaa\n\nbbb\n`)\n"))),(0,n.kt)(o.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\naaa\n\nbbb\n`)\n"))),(0,n.kt)(o.Z,{value:"GfmParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\naaa\n\nbbb\n`)\n"))),(0,n.kt)(o.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\naaa\n\nbbb\n`)\n")))),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-paragraph"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"priority")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.FALLBACK"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,n.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,n.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."))),(0,n.kt)("h3",{id:"types"},"Types"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./tokenizer-paragraph"},"@yozora/tokenizer-paragraph")," produce ",(0,n.kt)("a",{parentName:"p",href:"./ast#paragraph"},"Paragraph")," type nodes.\nSee ",(0,n.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Parent } from '@yozora/ast'\n\nexport const ParagraphType = 'paragraph'\nexport type ParagraphType = typeof ParagraphType\n\n/**\n * Paragraph represents a unit of discourse dealing with a particular\n * point or idea.\n * @see https://github.com/syntax-tree/mdast#paragraph\n * @see https://github.github.com/gfm/#paragraphs\n */\nexport type Paragraph = Parent<ParagraphType>\n")),(0,n.kt)("h2",{id:"live-examples"},"Live Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Basic."),(0,n.kt)(i.Z,{ids:"189",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Paragraphs can contain multiple lines, but no blank lines."),(0,n.kt)(i.Z,{ids:"190",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Multiple blank lines between paragraph have no effect."),(0,n.kt)(i.Z,{ids:"191",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Leading spaces are skipped."),(0,n.kt)(i.Z,{ids:"192",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Lines after the first may be indented any amount, since indented code\nblocks cannot interrupt paragraphs."),(0,n.kt)(i.Z,{ids:"193",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"However, the first line may be indented at most three spaces, or an\nindented code block will be triggered."),(0,n.kt)(i.Z,{ids:"194-195",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Final spaces are stripped before inline parsing, so a paragraph that ends\nwith two or more spaces will not end with a ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#hard-line-break"},"hard line break"),"."),(0,n.kt)(i.Z,{ids:"196",mdxType:"YozoraGFMLive"}))),(0,n.kt)("h2",{id:"related"},"Related"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/paragraph#readme"},"@yozora/react-paragraph")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/paragraph"},"Sourcecode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast#paragraph"},"Paragraph | Yozora AST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#paragraph"},"Paragraphs | Github Flavor Markdown Spec")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#paragraph"},"Paragraph | Mdast"))))}c.isMDXComponent=!0}}]);