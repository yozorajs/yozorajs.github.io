"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[8668],{9729:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var s=n(4848),a=n(8453),i=n(9489),t=n(7227),o=n(7874);const l={id:"tokenizer-break",title:"@yozora/tokenizer-break",sidebar_label:"break"},d=void 0,c={id:"package/tokenizer-break",title:"@yozora/tokenizer-break",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/tokenizer-break.mdx",sourceDirName:"package",slug:"/package/tokenizer-break",permalink:"/docs/1.x.x/package/tokenizer-break",draft:!1,unlisted:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1710076334,formattedLastUpdatedAt:"Mar 10, 2024",frontMatter:{id:"tokenizer-break",title:"@yozora/tokenizer-break",sidebar_label:"break"},sidebar:"Docs",previous:{title:"blockquote",permalink:"/docs/1.x.x/package/tokenizer-blockquote"},next:{title:"definition",permalink:"/docs/1.x.x/package/tokenizer-definition"}},h={},p=[{value:"Hard line breaks",id:"hard-line-breaks",level:2},{value:"Soft line breaks",id:"soft-line-breaks",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Hard line breaks",id:"hard-line-breaks-1",level:3},{value:"Soft line breaks",id:"soft-line-breaks-1",level:3},{value:"Related",id:"related",level:2}];function x(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{align:"center",children:[(0,s.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-break",children:(0,s.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-break/v1.x.x"})}),(0,s.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-break",children:(0,s.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-break.svg"})}),(0,s.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-break",children:(0,s.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-break.svg"})}),(0,s.jsx)("a",{href:"#install",children:(0,s.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,s.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,s.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-break"})}),(0,s.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,s.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,s.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,s.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(r.admonition,{title:"github flavor markdown spec",type:"note",children:[(0,s.jsx)(r.h2,{id:"hard-line-breaks",children:"Hard line breaks"}),(0,s.jsxs)(r.p,{children:["A line break (not in a code span or HTML tag) that is preceded by two or more\n",(0,s.jsx)(r.a,{href:"https://github.github.com/gfm/#space",children:"spaces"})," and does not occur at the end of a block is parsed as a\n",(0,s.jsx)(r.a,{href:"https://github.github.com/gfm/#hard-line-break",children:"hard line break"})," (rendered in HTML as a ",(0,s.jsx)(r.code,{children:"<br />"})," tag)."]}),(0,s.jsx)(r.h2,{id:"soft-line-breaks",children:"Soft line breaks"}),(0,s.jsxs)(r.p,{children:["A regular line break (not in a code span or HTML tag) that is not preceded by\ntwo or more ",(0,s.jsx)(r.a,{href:"https://github.github.com/gfm/#space",children:"spaces"})," or a backslash is parsed as a [softbreak]gfm-softbreak.\n(A softbreak may be rendered in HTML either as a ",(0,s.jsx)(r.a,{href:"https://github.github.com/gfm/#line-ending",children:"line ending"}),"\nor as a space. The result will be the same in browsers. In the examples here,\na ",(0,s.jsx)(r.a,{href:"https://github.github.com/gfm/#line-ending",children:"line ending"})," will be used.)"]}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["See ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"https://github.github.com/gfm/#hard-line-break",children:"github flavor markdown spec"})})," for details."]}),"\n",(0,s.jsxs)(r.li,{children:["See ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"#live-examples",children:"Live Examples"})})," for an intuitive impression."]}),"\n"]})]}),"\n",(0,s.jsx)(r.h2,{id:"install",children:"Install"}),"\n",(0,s.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,s.jsx)(t.A,{value:"npm",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"npm install --save @yozora/tokenizer-break\n"})})}),(0,s.jsx)(t.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"yarn add @yozora/tokenizer-break\n"})})}),(0,s.jsx)(t.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"pnpm add @yozora/tokenizer-break\n"})})})]}),"\n",(0,s.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"./tokenizer-break",children:"@yozora/tokenizer-break"})," has been integrated into ",(0,s.jsx)(r.a,{href:"./parser",children:"@yozora/parser"})," / ",(0,s.jsx)(r.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})," / ",(0,s.jsx)(r.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"}),",\nso you can use ",(0,s.jsx)(r.code,{children:"YozoraParser"})," / ",(0,s.jsx)(r.code,{children:"GfmExParser"})," / ",(0,s.jsx)(r.code,{children:"GfmParser"})," directly."]})}),"\n",(0,s.jsxs)(i.A,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],children:[(0,s.jsxs)(t.A,{value:"basic-usage",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"./tokenizer-break",children:"@yozora/tokenizer-break"})," cannot be used alone, it needs to be\nregistered in ",(0,s.jsx)(r.em,{children:"YastParser"})," as a plugin-in before it can be used."]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",metastring:"{4,9}",children:"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport BreakTokenizer from '@yozora/tokenizer-break'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new BreakTokenizer())\n\n// parse source markdown content\nparser.parse(`\nfoo  \nbaz\n\nfoo\\\nbaz\n\nfoo\nbaz\n`)\n"})})]}),(0,s.jsx)(t.A,{value:"YozoraParser",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\nfoo  \nbaz\n\nfoo\\\nbaz\n\nfoo\nbaz\n`)\n"})})}),(0,s.jsx)(t.A,{value:"GfmParser",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\nfoo  \nbaz\n\nfoo\\\nbaz\n\nfoo\nbaz\n`)\n"})})}),(0,s.jsx)(t.A,{value:"GfmExParser",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\nfoo  \nbaz\n\nfoo\\\nbaz\n\nfoo\nbaz\n`)\n"})})})]}),"\n",(0,s.jsx)(r.h3,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{style:{textAlign:"center"},children:"Name"}),(0,s.jsx)(r.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(r.th,{style:{textAlign:"center"},children:"Required"}),(0,s.jsx)(r.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.code,{children:"name"})}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.code,{children:"false"})}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.code,{children:'"@yozora/tokenizer-break"'})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.code,{children:"priority"})}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.code,{children:"number"})}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.code,{children:"false"})}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.code,{children:"TokenizerPriority.ATOMIC"})})]})]})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"name"}),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,s.jsx)(r.em,{children:"matching / parsing"})," phase."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"priority"}),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,s.jsx)(r.code,{children:"match-block"}),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Exception:"})," Delimiters of type ",(0,s.jsx)(r.code,{children:"full"})," are always processed before other type\ndelimiters."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"types",children:"Types"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"./tokenizer-break",children:"@yozora/tokenizer-break"})," produce ",(0,s.jsx)(r.a,{href:"./ast#break",children:"Break"})," type nodes.\nSee ",(0,s.jsx)(r.a,{href:"./ast",children:"@yozora/ast"})," for full base types."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"import type { YastNode } from '@yozora/ast'\n\nexport const BreakType = 'break'\nexport type BreakType = typeof BreakType\n\n/**\n * Break represents a line break, such as in poems or addresses.\n * @see https://github.com/syntax-tree/mdast#break\n * @see https://github.github.com/gfm/#hard-line-breaks\n * @see https://github.github.com/gfm/#soft-line-breaks\n */\nexport type Break = YastNode<BreakType>\n"})}),"\n",(0,s.jsx)(r.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,s.jsx)(r.h3,{id:"hard-line-breaks-1",children:"Hard line breaks"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Basic."}),"\n",(0,s.jsx)(o.Rr,{ids:"654"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["For a more visible alternative, a backslash before the\n",(0,s.jsx)(r.a,{href:"https://github.github.com/gfm/#line-ending",children:"line ending"})," may be used instead of two ",(0,s.jsx)(r.a,{href:"https://github.github.com/gfm/#space",children:"spaces"}),"."]}),"\n",(0,s.jsx)(o.Rr,{ids:"655"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"More than two spaces can be used."}),"\n",(0,s.jsx)(o.Rr,{ids:"656"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Leading spaces at the beginning of the next line are ignored."}),"\n",(0,s.jsx)(o.Rr,{ids:"657-658"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Line breaks can occur inside emphasis, links, and other constructs that\nallow inline content."}),"\n",(0,s.jsx)(o.Rr,{ids:"659-660"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Line breaks do not occur inside ",(0,s.jsx)(r.a,{href:"https://github.github.com/gfm/#code-span",children:"code spans"})," or or HTML tags."]}),"\n",(0,s.jsx)(o.Rr,{ids:"661-664"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Hard line breaks are for separating inline content within a block. Neither\nsyntax for hard line breaks works at the end of a paragraph or other block\nelement."}),"\n",(0,s.jsx)(o.Rr,{ids:"665-668"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"soft-line-breaks-1",children:"Soft line breaks"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Basic."}),"\n",(0,s.jsx)(o.Rr,{ids:"669"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Spaces at the end of the line and beginning of the next line are removed."}),"\n",(0,s.jsx)(o.Rr,{ids:"670"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"related",children:"Related"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"./parser",children:"@yozora/parser"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/break#readme",children:"@yozora/react-break"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme",children:"@yozora/react-markdown"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/tokenizers/break/",children:"Sourcecode"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"./ast#break",children:"Break | Yozora AST"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.github.com/gfm/#hard-line-break",children:"Hard line breaks | Github Flavor Markdown Spec"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.github.com/gfm/#soft-line-breaks",children:"Soft line breaks | Github Flavor Markdown Spec"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/syntax-tree/mdast#break",children:"Break | Mdast"})}),"\n"]})]})}function j(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}}}]);