"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[8716],{1528:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var o=r(7624),t=r(4552),s=r(6212),a=r(2440);r(7360);const i={id:"tokenizer-footnote-reference",title:"@yozora/tokenizer-footnote-reference",sidebar_label:"footnote-reference"},c=void 0,l={id:"package/tokenizer-footnote-reference",title:"@yozora/tokenizer-footnote-reference",description:"<img",source:"@site/docs/package/tokenizer-footnote-reference.mdx",sourceDirName:"package",slug:"/package/tokenizer-footnote-reference",permalink:"/docs/next/package/tokenizer-footnote-reference",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1706961465,formattedLastUpdatedAt:"Feb 3, 2024",frontMatter:{id:"tokenizer-footnote-reference",title:"@yozora/tokenizer-footnote-reference",sidebar_label:"footnote-reference"},sidebar:"Docs",previous:{title:"footnote-definition",permalink:"/docs/next/package/tokenizer-footnote-definition"},next:{title:"heading",permalink:"/docs/next/package/tokenizer-heading"}},d={},h=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{align:"center",children:[(0,o.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-footnote-reference",children:(0,o.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-footnote-reference/latest"})}),(0,o.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-footnote-reference",children:(0,o.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-footnote-reference.svg"})}),(0,o.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-footnote-reference",children:(0,o.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-footnote-reference.svg"})}),(0,o.jsx)("a",{href:"#install",children:(0,o.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,o.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,o.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-footnote-reference"})}),(0,o.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,o.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,o.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,o.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.mdxAdmonitionTitle,{})}),"\n",(0,o.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,o.jsxs)(s.c,{groupId:"npm2yarn",children:[(0,o.jsx)(a.c,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install --save @yozora/tokenizer-footnote-reference\n"})})}),(0,o.jsx)(a.c,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add @yozora/tokenizer-footnote-reference\n"})})}),(0,o.jsx)(a.c,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm add @yozora/tokenizer-footnote-reference\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"./tokenizer-footnote-reference",children:"@yozora/tokenizer-footnote-reference"})," has been integrated into ",(0,o.jsx)(n.a,{href:"./parser",children:"@yozora/parser"}),",\nso you can use ",(0,o.jsx)(n.code,{children:"YozoraParser"})," directly."]})}),"\n",(0,o.jsxs)(s.c,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],children:[(0,o.jsxs)(a.c,{value:"basic-usage",children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"./tokenizer-footnote-reference",children:"@yozora/tokenizer-footnote-reference"})," cannot be used alone, it needs to be\nregistered in ",(0,o.jsx)(n.em,{children:"Parser"})," as a plugin-in before it can be used."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",metastring:"{4,9}",children:"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport FootnoteReferenceTokenizer from '@yozora/tokenizer-footnote-reference'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new FootnoteReferenceTokenizer())\n\n// parse source markdown content\nparser.parse(`\n  Here is a footnote reference,[^1]\n  another,[^long note],\n  \n  [^big footnote]: Here's one with multiple paragraphs and code.\n  \n      Indent paragraphs to include them in the footnote.\n  \n      \\`\\`\\`\n      Fenced coding\n      \\`\\`\\`\n  \n      ## heading\n  \n      Add as many paragraphs as you like.\n  `)\n"})})]}),(0,o.jsx)(a.c,{value:"YozoraParser",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n  Here is a footnote reference,[^1]\n  another,[^long note],\n  \n  [^big footnote]: Here's one with multiple paragraphs and code.\n  \n      Indent paragraphs to include them in the footnote.\n  \n      \\`\\`\\`\n      Fenced coding\n      \\`\\`\\`\n  \n      ## heading\n  \n      Add as many paragraphs as you like.\n  `)\n"})})}),(0,o.jsx)(a.c,{value:"GfmParser",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",metastring:"{2,5}",children:"import GfmParser from '@yozora/parser-gfm'\nimport FootnoteReferenceTokenizer from '@yozora/tokenizer-footnote-reference'\n\nconst parser = new GfmParser()\nparser.useTokenizer(new FootnoteReferenceTokenizer())\n\n// parse source markdown content\nparser.parse(`\n  Here is a footnote reference,[^1]\n  another,[^long note],\n  \n  [^big footnote]: Here's one with multiple paragraphs and code.\n  \n      Indent paragraphs to include them in the footnote.\n  \n      \\`\\`\\`\n      Fenced coding\n      \\`\\`\\`\n  \n      ## heading\n  \n      Add as many paragraphs as you like.\n  `)\n"})})}),(0,o.jsx)(a.c,{value:"GfmExParser",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",metastring:"{2,5}",children:"import GfmExParser from '@yozora/parser-gfm-ex'\nimport FootnoteReferenceTokenizer from '@yozora/tokenizer-footnote-reference'\n\nconst parser = new GfmExParser()\nparser.useTokenizer(new FootnoteReferenceTokenizer())\n\n// parse source markdown content\nparser.parse(`\n  Here is a footnote reference,[^1]\n  another,[^long note],\n  \n  [^big footnote]: Here's one with multiple paragraphs and code.\n  \n      Indent paragraphs to include them in the footnote.\n  \n      \\`\\`\\`\n      Fenced coding\n      \\`\\`\\`\n  \n      ## heading\n  \n      Add as many paragraphs as you like.\n  `)\n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:(0,o.jsx)(n.code,{children:"name"})}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:(0,o.jsx)(n.code,{children:"false"})}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:(0,o.jsx)(n.code,{children:'"@yozora/tokenizer-footnote-reference"'})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:(0,o.jsx)(n.code,{children:"priority"})}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:(0,o.jsx)(n.code,{children:"number"})}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:(0,o.jsx)(n.code,{children:"false"})}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:(0,o.jsx)(n.code,{children:"TokenizerPriority.ATOMIC"})})]})]})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"name"}),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,o.jsx)(n.em,{children:"matching / parsing"})," phase."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"priority"}),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,o.jsx)(n.code,{children:"match-block"}),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Exception:"})," Delimiters of type ",(0,o.jsx)(n.code,{children:"full"})," are always processed before other type\ndelimiters."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"./tokenizer-footnote-reference",children:"@yozora/tokenizer-footnote-reference"})," produce ",(0,o.jsx)(n.a,{href:"./ast#footnotereference",children:"FootnoteReference"})," type nodes.\nSee ",(0,o.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})," for full base types."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import type { Association, Node } from '@yozora/ast'\n\nexport const FootnoteReferenceType = 'footnoteReference'\nexport type FootnoteReferenceType = typeof FootnoteReferenceType\n\n/**\n * FootnoteReference represents a marker through association.\n *\n * Similar to imageReference and linkReference, the difference is that it has\n * only 'collapsed' reference type instead of 'full' and 'shortcut'\n * @see https://github.com/syntax-tree/mdast#footnotereference\n * @see https://github.com/syntax-tree/mdast#imagereference\n * @see https://github.com/syntax-tree/mdast#linkreference\n */\nexport interface FootnoteReference\n  extends Node<FootnoteReferenceType>, Association {}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,o.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./parser",children:"@yozora/parser"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./tokenizer-definition",children:"@yozora/tokenizer-definition"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./tokenizer-footnote",children:"@yozora/tokenizer-footnote"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/footnote-definitions#readme",children:"@yozora/react-footnote-definitions"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/footnote-reference#readme",children:"@yozora/react-footnote-reference"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme",children:"@yozora/react-markdown"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/footnote-reference",children:"Sourcecode"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"./ast#footnotereference",children:"FootnoteReference | Yozora AST"})}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}}}]);