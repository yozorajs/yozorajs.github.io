"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[6606],{624:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>h,toc:()=>m});var a=n(7624),t=n(4552),r=n(6212),i=n(2440),l=n(7360);const c={id:"tokenizer-blockquote",title:"@yozora/tokenizer-blockquote",sidebar_label:"blockquote"},o=void 0,h={id:"package/tokenizer-blockquote",title:"@yozora/tokenizer-blockquote",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/tokenizer-blockquote.mdx",sourceDirName:"package",slug:"/package/tokenizer-blockquote",permalink:"/docs/1.x.x/package/tokenizer-blockquote",draft:!1,unlisted:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1706961465,formattedLastUpdatedAt:"Feb 3, 2024",frontMatter:{id:"tokenizer-blockquote",title:"@yozora/tokenizer-blockquote",sidebar_label:"blockquote"},sidebar:"Docs",previous:{title:"autolink (extension)",permalink:"/docs/1.x.x/package/tokenizer-autolink-extension"},next:{title:"break",permalink:"/docs/1.x.x/package/tokenizer-break"}},d={},m=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}];function x(e){const s={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mrow:"mrow",msub:"msub",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("header",{children:(0,a.jsxs)("div",{align:"center",children:[(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-blockquote",children:(0,a.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-blockquote/v1.x.x"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-blockquote",children:(0,a.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-blockquote.svg"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-blockquote",children:(0,a.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-blockquote.svg"})}),(0,a.jsx)("a",{href:"#install",children:(0,a.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,a.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,a.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-blockquote"})}),(0,a.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,a.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,a.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,a.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(s.admonition,{title:"github flavor markdown spec",type:"note",children:[(0,a.jsxs)(s.p,{children:["A ",(0,a.jsx)(s.a,{href:"https://github.github.com/gfm/#block-quote-marker",children:"block quote marker"})," consists of 0-3 spaces of initial\nindent, plus"]}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["a) the character ",(0,a.jsx)(s.code,{children:">"})," together with a following space, or"]}),"\n",(0,a.jsxs)(s.li,{children:["b) a single character ",(0,a.jsx)(s.code,{children:">"})," not followed by a space."]}),"\n"]}),(0,a.jsxs)(s.p,{children:["The following rules define ",(0,a.jsx)(s.a,{href:"https://github.github.com/gfm/#block-quotes",children:"block quotes"}),":"]}),(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Basic case."})," If a string of lines ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"L"}),(0,a.jsx)(s.mi,{children:"s"})]})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"L_s"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",children:"L"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"s"})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(s.span,{})})})]})})]})]})})]})," constitute a sequence of blocks\n",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"B"}),(0,a.jsx)(s.mi,{children:"s"})]})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"B_s"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"-0.0502em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"s"})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(s.span,{})})})]})})]})]})})]}),", then the result of prepending a ",(0,a.jsx)(s.a,{href:"https://github.github.com/gfm/#block-quote-marker",children:"block quote marker"}),"\nto the beginning of each line in ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"L"}),(0,a.jsx)(s.mi,{children:"s"})]})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"L_s"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",children:"L"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"s"})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(s.span,{})})})]})})]})]})})]})," is a ",(0,a.jsx)(s.a,{href:"https://github.github.com/gfm/#block-quotes",children:"block quote"}),"\ncontaining ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"B"}),(0,a.jsx)(s.mi,{children:"s"})]})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"B_s"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"-0.0502em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"s"})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(s.span,{})})})]})})]})]})})]}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Laziness."})," If a string of lines ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"L"}),(0,a.jsx)(s.mi,{children:"s"})]})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"L_s"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",children:"L"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"s"})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(s.span,{})})})]})})]})]})})]})," constitute a [block quote]gfm-blockquote]\nwith contents ",(0,a.jsx)(s.em,{children:"Bs"}),", then the result of deleting the initial\n",(0,a.jsx)(s.a,{href:"https://github.github.com/gfm/#block-quote-marker",children:"block quote marker"})," from one or more lines in which\nthe next ",(0,a.jsx)(s.a,{href:"https://github.github.com/gfm/#non-whitespace-character",children:"non-whitespace character"})," after the\n",(0,a.jsx)(s.a,{href:"https://github.github.com/gfm/#block-quote-marker",children:"block quote marker"})," is\n",(0,a.jsx)(s.a,{href:"https://github.github.com/gfm/#paragraph-continuation-text",children:"paragraph continuation text"})," is a\n",(0,a.jsx)(s.a,{href:"https://github.github.com/gfm/#block-quotes",children:"block quote"})," with ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsx)(s.mrow,{children:(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"B"}),(0,a.jsx)(s.mi,{children:"s"})]})}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"B_s"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"-0.0502em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"s"})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(s.span,{})})})]})})]})]})})]})," as its content.\n",(0,a.jsx)(s.a,{href:"https://github.github.com/gfm/#paragraph-continuation-text",children:"Paragraph continuation text"})," is text that\nwill be parsed as part of the content of a paragraph, but does not occur at\nthe beginning of the paragraph."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Consecutiveness."})," A document cannot contain two ",(0,a.jsx)(s.a,{href:"https://github.github.com/gfm/#block-quotes",children:"block quotes"}),"\nin a row unless there is a blank line between them."]}),"\n"]}),"\n"]}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["See ",(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.a,{href:"https://github.github.com/gfm/#block-quotes",children:"github flavor markdown spec"})})," for details."]}),"\n",(0,a.jsxs)(s.li,{children:["See ",(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.a,{href:"#live-examples",children:"Live Examples"})})," for an intuitive impression."]}),"\n"]})]}),"\n",(0,a.jsx)(s.h2,{id:"install",children:"Install"}),"\n",(0,a.jsxs)(r.c,{groupId:"npm2yarn",children:[(0,a.jsx)(i.c,{value:"npm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"npm install --save @yozora/tokenizer-blockquote\n"})})}),(0,a.jsx)(i.c,{value:"yarn",label:"Yarn",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"yarn add @yozora/tokenizer-blockquote\n"})})}),(0,a.jsx)(i.c,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"pnpm add @yozora/tokenizer-blockquote\n"})})})]}),"\n",(0,a.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(s.admonition,{type:"tip",children:(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"./tokenizer-blockquote",children:"@yozora/tokenizer-blockquote"})," has been integrated into ",(0,a.jsx)(s.a,{href:"./parser",children:"@yozora/parser"})," / ",(0,a.jsx)(s.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})," / ",(0,a.jsx)(s.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"}),",\nso you can use ",(0,a.jsx)(s.code,{children:"YozoraParser"})," / ",(0,a.jsx)(s.code,{children:"GfmExParser"})," / ",(0,a.jsx)(s.code,{children:"GfmParser"})," directly."]})}),"\n",(0,a.jsxs)(r.c,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],children:[(0,a.jsxs)(i.c,{value:"basic-usage",children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"./tokenizer-blockquote",children:"@yozora/tokenizer-blockquote"})," cannot be used alone, it needs to be\nregistered in ",(0,a.jsx)(s.em,{children:"YastParser"})," as a plugin-in before it can be used."]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-typescript",metastring:"{4,9}",children:"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport BlockquoteTokenizer from '@yozora/tokenizer-blockquote'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new BlockquoteTokenizer())\n\n// parse source markdown content\nparser.parse(`\n> This is blockquote\n> - with some list contents\n> - apple\n>\n> ## A cat in heading\n`)\n"})})]}),(0,a.jsx)(i.c,{value:"YozoraParser",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-typescript",children:"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n> This is blockquote\n> - with some list contents\n> - apple\n>\n> ## A cat in heading\n`)\n"})})}),(0,a.jsx)(i.c,{value:"GfmParser",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-typescript",children:"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n> This is blockquote\n> - with some list contents\n> - apple\n>\n> ## A cat in heading\n`)\n"})})}),(0,a.jsx)(i.c,{value:"GfmExParser",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-typescript",children:"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n> This is blockquote\n> - with some list contents\n> - apple\n>\n> ## A cat in heading\n`)\n"})})})]}),"\n",(0,a.jsx)(s.h3,{id:"options",children:"Options"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{style:{textAlign:"center"},children:"Name"}),(0,a.jsx)(s.th,{style:{textAlign:"center"},children:"Type"}),(0,a.jsx)(s.th,{style:{textAlign:"center"},children:"Required"}),(0,a.jsx)(s.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{style:{textAlign:"center"},children:(0,a.jsx)(s.code,{children:"name"})}),(0,a.jsx)(s.td,{style:{textAlign:"center"},children:(0,a.jsx)(s.code,{children:"string"})}),(0,a.jsx)(s.td,{style:{textAlign:"center"},children:(0,a.jsx)(s.code,{children:"false"})}),(0,a.jsx)(s.td,{style:{textAlign:"center"},children:(0,a.jsx)(s.code,{children:'"@yozora/tokenizer-blockquote"'})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{style:{textAlign:"center"},children:(0,a.jsx)(s.code,{children:"priority"})}),(0,a.jsx)(s.td,{style:{textAlign:"center"},children:(0,a.jsx)(s.code,{children:"number"})}),(0,a.jsx)(s.td,{style:{textAlign:"center"},children:(0,a.jsx)(s.code,{children:"false"})}),(0,a.jsx)(s.td,{style:{textAlign:"center"},children:(0,a.jsx)(s.code,{children:"TokenizerPriority.CONTAINING_BLOCK"})})]})]})]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"name"}),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,a.jsx)(s.em,{children:"matching / parsing"})," phase."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"priority"}),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,a.jsx)(s.code,{children:"match-block"}),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"types",children:"Types"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"./tokenizer-blockquote",children:"@yozora/tokenizer-blockquote"})," produce ",(0,a.jsx)(s.a,{href:"./ast#blockquote",children:"Blockquote"})," type nodes.\nSee ",(0,a.jsx)(s.a,{href:"./ast",children:"@yozora/ast"})," for full base types."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-typescript",children:"import type { YastParent } from '@yozora/ast'\n\nexport const BlockquoteType = 'blockquote'\nexport type BlockquoteType = typeof BlockquoteType\n\n/**\n * Blockquote represents a section quoted from somewhere else.\n * @see https://github.com/syntax-tree/mdast#blockquote\n * @see https://github.github.com/gfm/#block-quotes\n */\nexport type Blockquote = YastParent<BlockquoteType>\n"})}),"\n",(0,a.jsx)(s.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Basic."}),"\n",(0,a.jsx)(l.c,{ids:"206-209"}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Laziness."}),"\n",(0,a.jsx)(l.c,{ids:"210-227"}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Consecutiveness."}),"\n",(0,a.jsx)(l.c,{ids:"228-230"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"related",children:"Related"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"./parser",children:"@yozora/parser"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/blockquote#readme",children:"@yozora/react-blockquote"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme",children:"@yozora/react-markdown"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/tokenizers/blockquote",children:"Sourcecode"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"./ast#blockquote",children:"Blockquote | Yozora AST"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://github.github.com/gfm/#block-quotes",children:"Block quotes | Github Flavor Markdown Spec"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://github.com/syntax-tree/mdast#blockquote",children:"Blockquote | Mdast"})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}}}]);