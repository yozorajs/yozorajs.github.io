"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[9133],{5209:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>h,toc:()=>x});var i=r(4848),t=r(8453),s=r(9489),l=r(7227),o=r(7874);const c={id:"tokenizer-html-block",title:"@yozora/tokenizer-html-block",sidebar_label:"html-block"},d=void 0,h={id:"package/tokenizer-html-block",title:"@yozora/tokenizer-html-block",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/tokenizer-html-block.mdx",sourceDirName:"package",slug:"/package/tokenizer-html-block",permalink:"/docs/1.x.x/package/tokenizer-html-block",draft:!1,unlisted:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1710076334,formattedLastUpdatedAt:"Mar 10, 2024",frontMatter:{id:"tokenizer-html-block",title:"@yozora/tokenizer-html-block",sidebar_label:"html-block"},sidebar:"Docs",previous:{title:"heading",permalink:"/docs/1.x.x/package/tokenizer-heading"},next:{title:"html-inline",permalink:"/docs/1.x.x/package/tokenizer-html-inline"}},a={},x=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}];function j(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{align:"center",children:[(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-html-block",children:(0,i.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-html-block/v1.x.x"})}),(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-html-block",children:(0,i.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-html-block.svg"})}),(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-html-block",children:(0,i.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-html-block.svg"})}),(0,i.jsx)("a",{href:"#install",children:(0,i.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,i.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,i.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-html-block"})}),(0,i.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,i.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,i.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,i.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.admonition,{title:"github flavor markdown spec",type:"note",children:[(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#html-block",children:"HTML block"})," is a group of lines that is treated as raw HTML\n(and will not be escaped in HTML output)."]}),(0,i.jsxs)(n.p,{children:["There are seven kinds of ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#html-block",children:"HTML block"}),", which can be defined by\ntheir start and end conditions. The block begins with a line that meets a\n",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#start-condition",children:"start condition"})," (after up to three spaces optional\nindentation). It ends with the first subsequent line that meets a matching\n",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#end-condition",children:"end condition"}),", or the last line of the document, or the\nlast line of the ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#container-blocks",children:"container block"})," containing the current\nHTML block, if no line is encountered that meets the ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#end-condition",children:"end condition"}),".\nIf the first line meets both the ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#start-condition",children:"start condition"})," and the\n",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#end-condition",children:"end condition"}),", the block will contain just that line."]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Start condition:"})," line begins with the string ",(0,i.jsx)(n.code,{children:"<script"}),", ",(0,i.jsx)(n.code,{children:"<pre"}),", or ",(0,i.jsx)(n.code,{children:"<style"}),"\n(case-insensitive), followed by whitespace, the string ",(0,i.jsx)(n.code,{children:">"}),", or the end of the\nline."]}),"\n"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"End condition:"})," line contains an end tag ",(0,i.jsx)(n.code,{children:"<\/script>"}),", ",(0,i.jsx)(n.code,{children:"</pre>"}),", or ",(0,i.jsx)(n.code,{children:"</style>"}),"\n(case-insensitive; it need not match the start tag)."]}),(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Start condition:"})," line begins with the string ",(0,i.jsx)(n.code,{children:"\x3c!--"}),"."]}),"\n"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"End condition:"})," line contains the string ",(0,i.jsx)(n.code,{children:"--\x3e"}),"."]}),(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Start condition:"})," line begins with the string ",(0,i.jsx)(n.code,{children:"<?"}),"."]}),"\n"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"End condition:"})," line contains the string ",(0,i.jsx)(n.code,{children:"?>"}),"."]}),(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Start condition:"})," line begins with the string ",(0,i.jsx)(n.code,{children:"<!"})," followed by an\nuppercase ASCII letter."]}),"\n"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"End condition:"})," line contains the character ",(0,i.jsx)(n.code,{children:">"}),"."]}),(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Start condition:"})," line begins with the string ",(0,i.jsx)(n.code,{children:"<![CDATA["}),"."]}),"\n"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"End condition:"})," line contains the string ",(0,i.jsx)(n.code,{children:"]]>"}),"."]}),(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Start condition:"})," line begins the string ",(0,i.jsx)(n.code,{children:"<"})," or ",(0,i.jsx)(n.code,{children:"</"})," followed by one of\nthe strings (case-insensitive) ",(0,i.jsx)(n.code,{children:"address"}),", ",(0,i.jsx)(n.code,{children:"article"}),", ",(0,i.jsx)(n.code,{children:"aside"}),", ",(0,i.jsx)(n.code,{children:"base"}),",\n",(0,i.jsx)(n.code,{children:"basefont"}),", ",(0,i.jsx)(n.code,{children:"blockquote"}),", ",(0,i.jsx)(n.code,{children:"body"}),", ",(0,i.jsx)(n.code,{children:"caption"}),", ",(0,i.jsx)(n.code,{children:"center"}),", ",(0,i.jsx)(n.code,{children:"col"}),", ",(0,i.jsx)(n.code,{children:"colgroup"}),",\n",(0,i.jsx)(n.code,{children:"dd"}),", ",(0,i.jsx)(n.code,{children:"details"}),", ",(0,i.jsx)(n.code,{children:"dialog"}),", ",(0,i.jsx)(n.code,{children:"dir"}),", ",(0,i.jsx)(n.code,{children:"div"}),", ",(0,i.jsx)(n.code,{children:"dl"}),", ",(0,i.jsx)(n.code,{children:"dt"}),", ",(0,i.jsx)(n.code,{children:"fieldset"}),", ",(0,i.jsx)(n.code,{children:"figcaption"}),",\n",(0,i.jsx)(n.code,{children:"figure"}),", ",(0,i.jsx)(n.code,{children:"footer"}),", ",(0,i.jsx)(n.code,{children:"form"}),", ",(0,i.jsx)(n.code,{children:"frame"}),", ",(0,i.jsx)(n.code,{children:"frameset"}),", ",(0,i.jsx)(n.code,{children:"h1"}),", ",(0,i.jsx)(n.code,{children:"h2"}),", ",(0,i.jsx)(n.code,{children:"h3"}),", ",(0,i.jsx)(n.code,{children:"h4"}),", ",(0,i.jsx)(n.code,{children:"h5"}),",\n",(0,i.jsx)(n.code,{children:"h6"}),", ",(0,i.jsx)(n.code,{children:"head"}),", ",(0,i.jsx)(n.code,{children:"header"}),", ",(0,i.jsx)(n.code,{children:"hr"}),", ",(0,i.jsx)(n.code,{children:"html"}),", ",(0,i.jsx)(n.code,{children:"iframe"}),", ",(0,i.jsx)(n.code,{children:"legend"}),", ",(0,i.jsx)(n.code,{children:"li"}),", ",(0,i.jsx)(n.code,{children:"link"}),",\n",(0,i.jsx)(n.code,{children:"main"}),", ",(0,i.jsx)(n.code,{children:"menu"}),", ",(0,i.jsx)(n.code,{children:"menuitem"}),", ",(0,i.jsx)(n.code,{children:"nav"}),", ",(0,i.jsx)(n.code,{children:"noframes"}),", ",(0,i.jsx)(n.code,{children:"ol"}),", ",(0,i.jsx)(n.code,{children:"optgroup"}),", ",(0,i.jsx)(n.code,{children:"option"}),",\n",(0,i.jsx)(n.code,{children:"p"}),", ",(0,i.jsx)(n.code,{children:"param"}),", ",(0,i.jsx)(n.code,{children:"section"}),", ",(0,i.jsx)(n.code,{children:"source"}),", ",(0,i.jsx)(n.code,{children:"summary"}),", ",(0,i.jsx)(n.code,{children:"table"}),", ",(0,i.jsx)(n.code,{children:"tbody"}),", ",(0,i.jsx)(n.code,{children:"td"}),", ",(0,i.jsx)(n.code,{children:"tfoot"}),",\n",(0,i.jsx)(n.code,{children:"th"}),", ",(0,i.jsx)(n.code,{children:"thead"}),", ",(0,i.jsx)(n.code,{children:"title"}),", ",(0,i.jsx)(n.code,{children:"tr"}),", ",(0,i.jsx)(n.code,{children:"track"}),", ",(0,i.jsx)(n.code,{children:"ul"}),", followed by ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"}),",\nthe end of the line, the string ",(0,i.jsx)(n.code,{children:">"}),", or the string ",(0,i.jsx)(n.code,{children:"/>"}),"."]}),"\n"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"End condition:"})," line is followed by a ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#blank-line",children:"blank line"}),"."]}),(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Start condition:"})," line begins with a complete ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#open-tag",children:"open tag"}),"\n(with any [tag name]gfm-tag-name other than ",(0,i.jsx)(n.code,{children:"script"}),", ",(0,i.jsx)(n.code,{children:"style"}),", or ",(0,i.jsx)(n.code,{children:"pre"}),") or a\ncomplete ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#closing-tag",children:"closing tag"}),", followed only by\n",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"})," or the end of the line."]}),"\n"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"End condition:"})," line is followed by a ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#blank-line",children:"blank line"}),"."]}),(0,i.jsxs)(n.p,{children:["HTML blocks continue until they are closed by their appropriate\n",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#end-condition",children:"end condition"}),", or the last line of the document or other\n",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#container-blocks",children:"container block"}),". This means any HTML ",(0,i.jsx)(n.strong,{children:"within an HTML block"}),"\nthat might otherwise be recognised as a ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#start-condition",children:"start condition"}),"\nwill be ignored by the parser and passed through as-is, without changing the\nparser\u2019s state."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["See ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#html-block",children:"github flavor markdown spec"})})," for details."]}),"\n",(0,i.jsxs)(n.li,{children:["See ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#live-examples",children:"Live Examples"})})," for an intuitive impression."]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,i.jsx)(l.A,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save @yozora/tokenizer-html-block\n"})})}),(0,i.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @yozora/tokenizer-html-block\n"})})}),(0,i.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @yozora/tokenizer-html-block\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"./tokenizer-html-block",children:"@yozora/tokenizer-html-block"})," has been integrated into ",(0,i.jsx)(n.a,{href:"./parser",children:"@yozora/parser"})," / ",(0,i.jsx)(n.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})," / ",(0,i.jsx)(n.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"}),",\nso you can use ",(0,i.jsx)(n.code,{children:"YozoraParser"})," / ",(0,i.jsx)(n.code,{children:"GfmExParser"})," / ",(0,i.jsx)(n.code,{children:"GfmParser"})," directly."]})}),"\n",(0,i.jsxs)(s.A,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],children:[(0,i.jsxs)(l.A,{value:"basic-usage",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"./tokenizer-html-block",children:"@yozora/tokenizer-html-block"})," cannot be used alone, it needs to be\nregistered in ",(0,i.jsx)(n.em,{children:"YastParser"})," as a plugin-in before it can be used."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"{4,9}",children:"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport HtmlBlockTokenizer from '@yozora/tokenizer-html-block'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new HtmlBlockTokenizer())\n\n// parse source markdown content\nparser.parse(`\n<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\nokay\n`)\n"})})]}),(0,i.jsx)(l.A,{value:"YozoraParser",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\nokay\n`)\n"})})}),(0,i.jsx)(l.A,{value:"GfmParser",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\nokay\n`)\n"})})}),(0,i.jsx)(l.A,{value:"GfmExParser",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\nokay\n`)\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"name"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:'"@yozora/tokenizer-html-block"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"priority"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"TokenizerPriority.ATOMIC"})})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"name"}),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,i.jsx)(n.em,{children:"matching / parsing"})," phase."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"priority"}),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,i.jsx)(n.code,{children:"match-block"}),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"./tokenizer-html-block",children:"@yozora/tokenizer-html-block"})," produce ",(0,i.jsx)(n.a,{href:"./ast#html",children:"Html"})," type nodes.\nSee ",(0,i.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})," for full base types."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import type { YastLiteral } from '@yozora/ast'\n\nexport const HtmlType = 'html'\nexport type HtmlType = typeof HtmlType\n\n/**\n * HTML (Literal) represents a fragment of raw HTML.\n * @see https://github.com/syntax-tree/mdast#html\n * @see https://github.github.com/gfm/#html-blocks\n * @see https://github.github.com/gfm/#raw-html\n */\nexport type Html = YastLiteral<HtmlType>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"(Condition 1)"}),"\n",(0,i.jsx)(o.Rr,{ids:"139-147"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Comment (Condition 2)"}),"\n",(0,i.jsx)(o.Rr,{ids:"148"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Processing instruction (Condition 3)"}),"\n",(0,i.jsx)(o.Rr,{ids:"149"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Declaration (Condition 4)"}),"\n",(0,i.jsx)(o.Rr,{ids:"150"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"CDATA (Condition 5)"}),"\n",(0,i.jsx)(o.Rr,{ids:"151"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"(Condition 6)"}),"\n",(0,i.jsx)(o.Rr,{ids:"119"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"(Condition 7)"}),"\n",(0,i.jsx)(o.Rr,{ids:"133"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./parser",children:"@yozora/parser"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-html-inline",children:"@yozora/tokenizer-html-inline"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/tokenizers/html-block",children:"Sourcecode"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./ast#html",children:"Html | Yozora AST"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#html-block",children:"HTML blocks | Github Flavor Markdown Spec"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/syntax-tree/mdast#html",children:"HTML | Mdast"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}}}]);