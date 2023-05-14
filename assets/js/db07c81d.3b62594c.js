"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[2856],{15089:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),i=a(73992),l=a(18679),o=a(32707);const s={id:"parser-gfm",title:"@yozora/parser-gfm",sidebar_label:"parser-gfm"},k=void 0,p={unversionedId:"package/parser-gfm",id:"version-1.x.x/package/parser-gfm",title:"@yozora/parser-gfm",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/parser-gfm.mdx",sourceDirName:"package",slug:"/package/parser-gfm",permalink:"/docs/1.x.x/package/parser-gfm",draft:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1684057460,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{id:"parser-gfm",title:"@yozora/parser-gfm",sidebar_label:"parser-gfm"},sidebar:"Docs",previous:{title:"parser",permalink:"/docs/1.x.x/package/parser"},next:{title:"parser-gfm-ex",permalink:"/docs/1.x.x/package/parser-gfm-ex"}},m={},d=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Overview",id:"overview",level:2},{value:"Live Examples",id:"live-examples",level:2},{value:"Thematic break",id:"thematic-break",level:3},{value:"ATX headings",id:"atx-headings",level:3},{value:"Setext headings",id:"setext-headings",level:3},{value:"Indented code blocks",id:"indented-code-blocks",level:3},{value:"Fenced code blocks",id:"fenced-code-blocks",level:3},{value:"HTML blocks",id:"html-blocks",level:3},{value:"Link reference definitions",id:"link-reference-definitions",level:3},{value:"Paragraphs",id:"paragraphs",level:3},{value:"Tables (extension)",id:"tables-extension",level:3},{value:"Block quotes",id:"block-quotes",level:3},{value:"List items",id:"list-items",level:3},{value:"Task list items (extension)",id:"task-list-items-extension",level:3},{value:"Lists",id:"lists",level:3},{value:"Code spans",id:"code-spans",level:3},{value:"Emphasis and strong emphasis",id:"emphasis-and-strong-emphasis",level:3},{value:"Strikethrough (extension)",id:"strikethrough-extension",level:3},{value:"Links",id:"links",level:3},{value:"Reference links",id:"reference-links",level:3},{value:"Images",id:"images",level:3},{value:"Reference images",id:"reference-images",level:3},{value:"Autolinks",id:"autolinks",level:3},{value:"Autolinks (extension)",id:"autolinks-extension",level:3},{value:"Raw HTML",id:"raw-html",level:3},{value:"Hard line breaks",id:"hard-line-breaks",level:3},{value:"Soft line breaks",id:"soft-line-breaks",level:3},{value:"Textual content",id:"textual-content",level:3},{value:"Related",id:"related",level:2}],f={toc:d},h="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("header",null,(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/parser-gfm"},(0,n.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/parser-gfm/v1.x.x"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/parser-gfm"},(0,n.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/parser-gfm.svg"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/parser-gfm"},(0,n.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/parser-gfm.svg"})),(0,n.kt)("a",{href:"#install"},(0,n.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,n.kt)("a",{href:"https://github.com/nodejs/node"},(0,n.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/parser-gfm"})),(0,n.kt)("a",{href:"https://github.com/facebook/jest"},(0,n.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,n.kt)("a",{href:"https://github.com/prettier/prettier"},(0,n.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,n.kt)("br",null),(0,n.kt)("p",null,"A markdown parser with built-in tokenizers to fully support GFM (without GFM extensions)."),(0,n.kt)("admonition",{title:"github flavor markdown spec",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/"},"github flavor markdown spec"))," for details."),(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"../example/gfm"},"GFM Live Examples"))," for an intuitive impression."))),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/parser-gfm\n"))),(0,n.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/parser-gfm\n"))),(0,n.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @yozora/parser-gfm\n")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Basic"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse markdown source content.\nparser.parse('source markdown content')\n\n// parse markdown source content with custom options.\nparser.parse(\n  'source markdown content',  // markdown source contents, `string|Iterable<string>`\n  {},                         // ParseOptions, optional.\n)\n\n// parse multiple markdown source content pieces.\nparser.parse(['source', 'contents'])\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use withing generator: "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n/**\n * String stream is supported through the iterator API.\n */\nfunction* source () {\n  yield 'hello',\n  yield 'world',\n}\n\nparser.parse(source())\n")))),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Constructor Options"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"blockFallbackTokenizer")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"BlockFallbackTokenizer")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fallback tokenizer on processing block structure phase")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"inlineFallbackTokenizer")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"InlineFallbackTokenizer")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fallback tokenizer on processing inline structure phase")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"defaultParseOptions")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ParseOptions")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Default options for ",(0,n.kt)("inlineCode",{parentName:"td"},"parse()")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"ParseOptions")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"shouldReservePosition")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Whether it is necessary to reserve the position in the YastNode produced")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"presetDefinitions")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Array<Omit<Definition, 'type'>")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Preset definitions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"presetFootnoteDefinitions")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Array<Omit<FootnoteDefinition, 'type'>")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Preset footnote definition")))))),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Built-in tokenizers"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Tokenizer"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-autolink"},"@yozora/tokenizer-autolink")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#autolinks"},"GFM Autolinks"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-blockquote"},"@yozora/tokenizer-blockquote")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#block-quotes"},"GFM blockquotes"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-break"},"@yozora/tokenizer-break")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#hard-line-break"},"GFM hard line breaks")," and ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#soft-line-breaks"},"GFM soft line breaks"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-definition"},"@yozora/tokenizer-definition")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#reference-link"},"GFM link reference definitions"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-emphasis"},"@yozora/tokenizer-emphasis")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#can-open-emphasis"},"GFM emphasis and strong emphasis"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-fenced-code"},"@yozora/tokenizer-fenced-code")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#fenced-code-block"},"GFM fenced code blocks"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-heading"},"@yozora/tokenizer-heading")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#atx-heading"},"GFM ATX headings"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-html-block"},"@yozora/tokenizer-html-block")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#html-block"},"GFM HTML blocks"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-html-inline"},"@yozora/tokenizer-html-inline")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#raw-html"},"GFM raw HTML"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-image"},"@yozora/tokenizer-image")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#images"},"GFM images"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-image-reference"},"@yozora/tokenizer-image-reference")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#example-590"},"GFM reference images"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-indented-code"},"@yozora/tokenizer-indented-code")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#indented-code-block"},"GFM indented code blocks"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-inline-code"},"@yozora/tokenizer-inline-code")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#code-span"},"GFM code spans"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-link"},"@yozora/tokenizer-link")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#inline-link"},"GFM links"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-link-reference"},"@yozora/tokenizer-link-reference")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#reference-link"},"GFM reference links"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-list"},"@yozora/tokenizer-list")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#lists"},"GFM lists"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-list-item"},"@yozora/tokenizer-list-item")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#list-items"},"GFM list items"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-paragraph"},"@yozora/tokenizer-paragraph")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#paragraph"},"GFM paragraphs"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-setext-heading"},"@yozora/tokenizer-setext-heading")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#setext-heading"},"GFM setext headings"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-text"},"@yozora/tokenizer-text")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#soft-line-breaks"},"GFM textual contents"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"./tokenizer-thematic-break"},"@yozora/tokenizer-thematic-break")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,n.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#thematic-break"},"GFM thematic breaks"))))))),(0,n.kt)("h2",{id:"live-examples"},"Live Examples"),(0,n.kt)("h3",{id:"thematic-break"},"Thematic break"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-thematic-break"},"@yozora/tokenizer-thematic-break")," for details."),(0,n.kt)(o.Z,{ids:"13-31",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"atx-headings"},"ATX headings"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-heading"},"@yozora/tokenizer-heading")," for details."),(0,n.kt)(o.Z,{ids:"32-49",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"setext-headings"},"Setext headings"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-setext-heading"},"@yozora/tokenizer-setext-heading")," for details."),(0,n.kt)(o.Z,{ids:"50-76",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"indented-code-blocks"},"Indented code blocks"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-indented-code"},"@yozora/tokenizer-indented-code")," for details."),(0,n.kt)(o.Z,{ids:"77-88",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"fenced-code-blocks"},"Fenced code blocks"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-fenced-code"},"@yozora/tokenizer-fenced-code")," for details."),(0,n.kt)(o.Z,{ids:"89-117",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"html-blocks"},"HTML blocks"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-html-block"},"@yozora/tokenizer-html-block")," for details."),(0,n.kt)(o.Z,{ids:"118-160",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"link-reference-definitions"},"Link reference definitions"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-definition"},"@yozora/tokenizer-definition")," for details."),(0,n.kt)(o.Z,{ids:"161-188",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"paragraphs"},"Paragraphs"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-paragraph"},"@yozora/tokenizer-paragraph")," for details."),(0,n.kt)(o.Z,{ids:"189-196",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"tables-extension"},"Tables (extension)"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-table"},"@yozora/tokenizer-table")," for details."),(0,n.kt)(o.Z,{ids:"198-205",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"block-quotes"},"Block quotes"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-blockquote"},"@yozora/tokenizer-blockquote")," for details."),(0,n.kt)(o.Z,{ids:"206-230",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"list-items"},"List items"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-list-item"},"@yozora/tokenizer-list-item")," for details."),(0,n.kt)(o.Z,{ids:"231-278",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"task-list-items-extension"},"Task list items (extension)"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-list-item"},"@yozora/tokenizer-list-item")," for details."),(0,n.kt)(o.Z,{ids:"279-280",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"lists"},"Lists"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-list"},"@yozora/tokenizer-list")," for details."),(0,n.kt)(o.Z,{ids:"281-306",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"code-spans"},"Code spans"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-inline-code"},"@yozora/tokenizer-inline-code")," for details."),(0,n.kt)(o.Z,{ids:"338-359",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"emphasis-and-strong-emphasis"},"Emphasis and strong emphasis"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-emphasis"},"@yozora/tokenizer-emphasis")," for details."),(0,n.kt)(o.Z,{ids:"360-490",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"strikethrough-extension"},"Strikethrough (extension)"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-delete"},"@yozora/tokenizer-delete")," for details."),(0,n.kt)(o.Z,{ids:"491-492",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"links"},"Links"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-link"},"@yozora/tokenizer-link")," for details."),(0,n.kt)(o.Z,{ids:"493-534",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"reference-links"},"Reference links"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-link-reference"},"@yozora/tokenizer-link-reference")," for details."),(0,n.kt)(o.Z,{ids:"535-579",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"images"},"Images"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-image"},"@yozora/tokenizer-image")," for details."),(0,n.kt)(o.Z,{ids:"580-589",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"reference-images"},"Reference images"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-image-reference"},"@yozora/tokenizer-image-reference")," for details."),(0,n.kt)(o.Z,{ids:"590-601",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"autolinks"},"Autolinks"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-autolink"},"@yozora/tokenizer-autolink")," for details."),(0,n.kt)(o.Z,{ids:"602-620",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"autolinks-extension"},"Autolinks (extension)"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-autolink-extension"},"@yozora/tokenizer-autolink-extension")," for details."),(0,n.kt)(o.Z,{ids:"621-631",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"raw-html"},"Raw HTML"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-html-inline"},"@yozora/tokenizer-html-inline")," for details."),(0,n.kt)(o.Z,{ids:"632-652",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"hard-line-breaks"},"Hard line breaks"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-break"},"@yozora/tokenizer-break")," for details."),(0,n.kt)(o.Z,{ids:"654-668",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"soft-line-breaks"},"Soft line breaks"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-break"},"@yozora/tokenizer-break")," for details."),(0,n.kt)(o.Z,{ids:"669-670",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h3",{id:"textual-content"},"Textual content"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./tokenizer-text"},"@yozora/tokenizer-text")," for details."),(0,n.kt)(o.Z,{ids:"671-673",initialParserType:"gfm",mdxType:"YozoraGFMLive"}),(0,n.kt)("h2",{id:"related"},"Related"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./core-parser"},"@yozora/core-parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/packages/parser-gfm"},"Sourcecode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#thematicbreak"},"Mdast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/"},"Github Flavor Markdown Spec"))))}g.isMDXComponent=!0}}]);