"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[1628],{9600:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>h,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>x});var t=s(7624),n=s(4552),r=s(6212),l=s(2440),d=s(7360);const a={id:"parser-gfm",title:"@yozora/parser-gfm",sidebar_label:"parser-gfm"},h=void 0,o={id:"package/parser-gfm",title:"@yozora/parser-gfm",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/parser-gfm.mdx",sourceDirName:"package",slug:"/package/parser-gfm",permalink:"/docs/1.x.x/package/parser-gfm",draft:!1,unlisted:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1706961465,formattedLastUpdatedAt:"Feb 3, 2024",frontMatter:{id:"parser-gfm",title:"@yozora/parser-gfm",sidebar_label:"parser-gfm"},sidebar:"Docs",previous:{title:"parser",permalink:"/docs/1.x.x/package/parser"},next:{title:"parser-gfm-ex",permalink:"/docs/1.x.x/package/parser-gfm-ex"}},c={},x=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Overview",id:"overview",level:2},{value:"Live Examples",id:"live-examples",level:2},{value:"Thematic break",id:"thematic-break",level:3},{value:"ATX headings",id:"atx-headings",level:3},{value:"Setext headings",id:"setext-headings",level:3},{value:"Indented code blocks",id:"indented-code-blocks",level:3},{value:"Fenced code blocks",id:"fenced-code-blocks",level:3},{value:"HTML blocks",id:"html-blocks",level:3},{value:"Link reference definitions",id:"link-reference-definitions",level:3},{value:"Paragraphs",id:"paragraphs",level:3},{value:"Tables (extension)",id:"tables-extension",level:3},{value:"Block quotes",id:"block-quotes",level:3},{value:"List items",id:"list-items",level:3},{value:"Task list items (extension)",id:"task-list-items-extension",level:3},{value:"Lists",id:"lists",level:3},{value:"Code spans",id:"code-spans",level:3},{value:"Emphasis and strong emphasis",id:"emphasis-and-strong-emphasis",level:3},{value:"Strikethrough (extension)",id:"strikethrough-extension",level:3},{value:"Links",id:"links",level:3},{value:"Reference links",id:"reference-links",level:3},{value:"Images",id:"images",level:3},{value:"Reference images",id:"reference-images",level:3},{value:"Autolinks",id:"autolinks",level:3},{value:"Autolinks (extension)",id:"autolinks-extension",level:3},{value:"Raw HTML",id:"raw-html",level:3},{value:"Hard line breaks",id:"hard-line-breaks",level:3},{value:"Soft line breaks",id:"soft-line-breaks",level:3},{value:"Textual content",id:"textual-content",level:3},{value:"Related",id:"related",level:2}];function j(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("header",{children:(0,t.jsxs)("div",{align:"center",children:[(0,t.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/parser-gfm",children:(0,t.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/parser-gfm/v1.x.x"})}),(0,t.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/parser-gfm",children:(0,t.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/parser-gfm.svg"})}),(0,t.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/parser-gfm",children:(0,t.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/parser-gfm.svg"})}),(0,t.jsx)("a",{href:"#install",children:(0,t.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,t.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,t.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/parser-gfm"})}),(0,t.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,t.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,t.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,t.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(i.p,{children:"A markdown parser with built-in tokenizers to fully support GFM (without GFM extensions)."}),"\n",(0,t.jsx)(i.admonition,{title:"github flavor markdown spec",type:"note",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["See ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/",children:"github flavor markdown spec"})})," for details."]}),"\n",(0,t.jsxs)(i.li,{children:["See ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"../example/gfm",children:"GFM Live Examples"})})," for an intuitive impression."]}),"\n"]})}),"\n",(0,t.jsx)(i.h2,{id:"install",children:"Install"}),"\n",(0,t.jsxs)(r.c,{groupId:"npm2yarn",children:[(0,t.jsx)(l.c,{value:"npm",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"npm install --save @yozora/parser-gfm\n"})})}),(0,t.jsx)(l.c,{value:"yarn",label:"Yarn",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"yarn add @yozora/parser-gfm\n"})})}),(0,t.jsx)(l.c,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"pnpm add @yozora/parser-gfm\n"})})})]}),"\n",(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Basic"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse markdown source content.\nparser.parse('source markdown content')\n\n// parse markdown source content with custom options.\nparser.parse(\n  'source markdown content',  // markdown source contents, `string|Iterable<string>`\n  {},                         // ParseOptions, optional.\n)\n\n// parse multiple markdown source content pieces.\nparser.parse(['source', 'contents'])\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Use withing generator:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n/**\n * String stream is supported through the iterator API.\n */\nfunction* source () {\n  yield 'hello',\n  yield 'world',\n}\n\nparser.parse(source())\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Constructor Options"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Required"}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"blockFallbackTokenizer"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"BlockFallbackTokenizer"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"false"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Fallback tokenizer on processing block structure phase"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"inlineFallbackTokenizer"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"InlineFallbackTokenizer"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"false"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Fallback tokenizer on processing inline structure phase"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"defaultParseOptions"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"ParseOptions"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"false"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Default options for ",(0,t.jsx)(i.code,{children:"parse()"})]})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"ParseOptions"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Required"}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"shouldReservePosition"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"boolean"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"false"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Whether it is necessary to reserve the position in the YastNode produced"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"presetDefinitions"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"Array<Omit<Definition, 'type'>"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"false"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Preset definitions"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"presetFootnoteDefinitions"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"Array<Omit<FootnoteDefinition, 'type'>"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.code,{children:"false"})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Preset footnote definition"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Built-in tokenizers"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Tokenizer"}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-autolink",children:"@yozora/tokenizer-autolink"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#autolinks",children:"GFM Autolinks"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-blockquote",children:"@yozora/tokenizer-blockquote"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#block-quotes",children:"GFM blockquotes"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-break",children:"@yozora/tokenizer-break"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#hard-line-break",children:"GFM hard line breaks"})," and ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#soft-line-breaks",children:"GFM soft line breaks"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-definition",children:"@yozora/tokenizer-definition"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#reference-link",children:"GFM link reference definitions"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-emphasis",children:"@yozora/tokenizer-emphasis"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#can-open-emphasis",children:"GFM emphasis and strong emphasis"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-fenced-code",children:"@yozora/tokenizer-fenced-code"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#fenced-code-block",children:"GFM fenced code blocks"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-heading",children:"@yozora/tokenizer-heading"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#atx-heading",children:"GFM ATX headings"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-html-block",children:"@yozora/tokenizer-html-block"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#html-block",children:"GFM HTML blocks"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-html-inline",children:"@yozora/tokenizer-html-inline"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#raw-html",children:"GFM raw HTML"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-image",children:"@yozora/tokenizer-image"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#images",children:"GFM images"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-image-reference",children:"@yozora/tokenizer-image-reference"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#example-590",children:"GFM reference images"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-indented-code",children:"@yozora/tokenizer-indented-code"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#indented-code-block",children:"GFM indented code blocks"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-inline-code",children:"@yozora/tokenizer-inline-code"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#code-span",children:"GFM code spans"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-link",children:"@yozora/tokenizer-link"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#inline-link",children:"GFM links"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-link-reference",children:"@yozora/tokenizer-link-reference"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#reference-link",children:"GFM reference links"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-list",children:"@yozora/tokenizer-list"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#lists",children:"GFM lists"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-list-item",children:"@yozora/tokenizer-list-item"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#list-items",children:"GFM list items"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-paragraph",children:"@yozora/tokenizer-paragraph"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#paragraph",children:"GFM paragraphs"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-setext-heading",children:"@yozora/tokenizer-setext-heading"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#setext-heading",children:"GFM setext headings"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-text",children:"@yozora/tokenizer-text"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#soft-line-breaks",children:"GFM textual contents"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.a,{href:"./tokenizer-thematic-break",children:"@yozora/tokenizer-thematic-break"})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Resolve ",(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/#thematic-break",children:"GFM thematic breaks"})]})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,t.jsx)(i.h3,{id:"thematic-break",children:"Thematic break"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-thematic-break",children:"@yozora/tokenizer-thematic-break"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"13-31",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"atx-headings",children:"ATX headings"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-heading",children:"@yozora/tokenizer-heading"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"32-49",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"setext-headings",children:"Setext headings"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-setext-heading",children:"@yozora/tokenizer-setext-heading"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"50-76",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"indented-code-blocks",children:"Indented code blocks"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-indented-code",children:"@yozora/tokenizer-indented-code"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"77-88",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"fenced-code-blocks",children:"Fenced code blocks"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-fenced-code",children:"@yozora/tokenizer-fenced-code"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"89-117",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"html-blocks",children:"HTML blocks"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-html-block",children:"@yozora/tokenizer-html-block"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"118-160",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"link-reference-definitions",children:"Link reference definitions"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-definition",children:"@yozora/tokenizer-definition"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"161-188",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"paragraphs",children:"Paragraphs"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-paragraph",children:"@yozora/tokenizer-paragraph"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"189-196",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"tables-extension",children:"Tables (extension)"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-table",children:"@yozora/tokenizer-table"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"198-205",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"block-quotes",children:"Block quotes"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-blockquote",children:"@yozora/tokenizer-blockquote"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"206-230",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"list-items",children:"List items"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-list-item",children:"@yozora/tokenizer-list-item"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"231-278",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"task-list-items-extension",children:"Task list items (extension)"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-list-item",children:"@yozora/tokenizer-list-item"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"279-280",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"lists",children:"Lists"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-list",children:"@yozora/tokenizer-list"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"281-306",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"code-spans",children:"Code spans"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-inline-code",children:"@yozora/tokenizer-inline-code"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"338-359",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"emphasis-and-strong-emphasis",children:"Emphasis and strong emphasis"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-emphasis",children:"@yozora/tokenizer-emphasis"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"360-490",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"strikethrough-extension",children:"Strikethrough (extension)"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-delete",children:"@yozora/tokenizer-delete"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"491-492",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"links",children:"Links"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-link",children:"@yozora/tokenizer-link"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"493-534",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"reference-links",children:"Reference links"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-link-reference",children:"@yozora/tokenizer-link-reference"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"535-579",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"images",children:"Images"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-image",children:"@yozora/tokenizer-image"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"580-589",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"reference-images",children:"Reference images"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-image-reference",children:"@yozora/tokenizer-image-reference"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"590-601",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"autolinks",children:"Autolinks"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-autolink",children:"@yozora/tokenizer-autolink"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"602-620",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"autolinks-extension",children:"Autolinks (extension)"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-autolink-extension",children:"@yozora/tokenizer-autolink-extension"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"621-631",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"raw-html",children:"Raw HTML"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-html-inline",children:"@yozora/tokenizer-html-inline"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"632-652",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"hard-line-breaks",children:"Hard line breaks"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-break",children:"@yozora/tokenizer-break"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"654-668",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"soft-line-breaks",children:"Soft line breaks"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-break",children:"@yozora/tokenizer-break"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"669-670",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h3,{id:"textual-content",children:"Textual content"}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"./tokenizer-text",children:"@yozora/tokenizer-text"})," for details."]}),"\n",(0,t.jsx)(d.c,{ids:"671-673",initialParserType:"gfm"}),"\n",(0,t.jsx)(i.h2,{id:"related",children:"Related"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"./core-parser",children:"@yozora/core-parser"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/packages/parser-gfm",children:"Sourcecode"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/syntax-tree/mdast#thematicbreak",children:"Mdast"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.github.com/gfm/",children:"Github Flavor Markdown Spec"})}),"\n"]})]})}function f(e={}){const{wrapper:i}={...(0,n.M)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}}}]);