"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[8098],{2509:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>h,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(4848),t=n(8453),s=n(9489),i=n(7227),o=n(7874);const l={id:"tokenizer-math",title:"@yozora/tokenizer-math",sidebar_label:"math"},h=void 0,d={id:"package/tokenizer-math",title:"@yozora/tokenizer-math",description:"<img",source:"@site/versioned_docs/version-2.x.x/package/tokenizer-math.mdx",sourceDirName:"package",slug:"/package/tokenizer-math",permalink:"/docs/package/tokenizer-math",draft:!1,unlisted:!1,tags:[],version:"2.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1710076334,formattedLastUpdatedAt:"Mar 10, 2024",frontMatter:{id:"tokenizer-math",title:"@yozora/tokenizer-math",sidebar_label:"math"},sidebar:"Docs",previous:{title:"list",permalink:"/docs/package/tokenizer-list"},next:{title:"paragraph",permalink:"/docs/package/tokenizer-paragraph"}},c={},p=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}];function x(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("header",{children:(0,a.jsxs)("div",{align:"center",children:[(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-math",children:(0,a.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-math/latest"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-math",children:(0,a.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-math.svg"})}),(0,a.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-math",children:(0,a.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-math.svg"})}),(0,a.jsx)("a",{href:"#install",children:(0,a.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,a.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,a.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-math"})}),(0,a.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,a.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,a.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,a.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(r.admonition,{type:"note"}),"\n",(0,a.jsx)(r.h2,{id:"install",children:"Install"}),"\n",(0,a.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,a.jsx)(i.A,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"npm install --save @yozora/tokenizer-math\n"})})}),(0,a.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"yarn add @yozora/tokenizer-math\n"})})}),(0,a.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"pnpm add @yozora/tokenizer-math\n"})})})]}),"\n",(0,a.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"./tokenizer-math",children:"@yozora/tokenizer-math"})," has been integrated into ",(0,a.jsx)(r.a,{href:"./parser",children:"@yozora/parser"}),",\nso you can use ",(0,a.jsx)(r.code,{children:"YozoraParser"})," directly."]})}),"\n",(0,a.jsxs)(s.A,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],children:[(0,a.jsxs)(i.A,{value:"basic-usage",children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"./tokenizer-math",children:"@yozora/tokenizer-math"})," cannot be used alone, it needs to be\nregistered in ",(0,a.jsx)(r.em,{children:"Parser"})," as a plugin-in before it can be used."]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",metastring:"{4,9}",children:"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport MathTokenizer from '@yozora/tokenizer-math'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new MathTokenizer())\n\n// parse source markdown content\nparser.parse(`\n$$x^2 + y^2=z^2$$\n\n$$\nf(x)=\\left\\lbrace\\begin{aligned}\n&x^2, &x < 0\\\\\n&0, &x = 0\\\\\n&x^3, &x > 0\n\\end{aligned}\\right.\n$$\n`)\n"})})]}),(0,a.jsx)(i.A,{value:"YozoraParser",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n$$x^2 + y^2=z^2$$\n\n$$\nf(x)=\\left\\lbrace\\begin{aligned}\n&x^2, &x < 0\\\\\n&0, &x = 0\\\\\n&x^3, &x > 0\n\\end{aligned}\\right.\n$$\n`)\n"})})}),(0,a.jsx)(i.A,{value:"GfmParser",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",metastring:"{2,5}",children:"import GfmParser from '@yozora/parser-gfm'\nimport MathTokenizer from '@yozora/tokenizer-math'\n\nconst parser = new GfmParser()\nparser.useTokenizer(new MathTokenizer())\n\n// parse source markdown content\nparser.parse(`\n$$x^2 + y^2=z^2$$\n\n$$\nf(x)=\\left\\lbrace\\begin{aligned}\n&x^2, &x < 0\\\\\n&0, &x = 0\\\\\n&x^3, &x > 0\n\\end{aligned}\\right.\n$$\n`)\n"})})}),(0,a.jsx)(i.A,{value:"GfmExParser",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",metastring:"{2,5}",children:"import GfmExParser from '@yozora/parser-gfm-ex'\nimport MathTokenizer from '@yozora/tokenizer-math'\n\nconst parser = new GfmExParser()\nparser.useTokenizer(new MathTokenizer())\n\n// parse source markdown content\nparser.parse(`\n$$x^2 + y^2=z^2$$\n\n$$\nf(x)=\\left\\lbrace\\begin{aligned}\n&x^2, &x < 0\\\\\n&0, &x = 0\\\\\n&x^3, &x > 0\n\\end{aligned}\\right.\n$$\n`)\n"})})})]}),"\n",(0,a.jsx)(r.h3,{id:"options",children:"Options"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{style:{textAlign:"center"},children:"Name"}),(0,a.jsx)(r.th,{style:{textAlign:"center"},children:"Type"}),(0,a.jsx)(r.th,{style:{textAlign:"center"},children:"Required"}),(0,a.jsx)(r.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{style:{textAlign:"center"},children:(0,a.jsx)(r.code,{children:"name"})}),(0,a.jsx)(r.td,{style:{textAlign:"center"},children:(0,a.jsx)(r.code,{children:"string"})}),(0,a.jsx)(r.td,{style:{textAlign:"center"},children:(0,a.jsx)(r.code,{children:"false"})}),(0,a.jsx)(r.td,{style:{textAlign:"center"},children:(0,a.jsx)(r.code,{children:'"@yozora/tokenizer-math"'})})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{style:{textAlign:"center"},children:(0,a.jsx)(r.code,{children:"priority"})}),(0,a.jsx)(r.td,{style:{textAlign:"center"},children:(0,a.jsx)(r.code,{children:"number"})}),(0,a.jsx)(r.td,{style:{textAlign:"center"},children:(0,a.jsx)(r.code,{children:"false"})}),(0,a.jsx)(r.td,{style:{textAlign:"center"},children:(0,a.jsx)(r.code,{children:"TokenizerPriority.FENCED_BLOCK"})})]})]})]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"name"}),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,a.jsx)(r.em,{children:"matching / parsing"})," phase."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"priority"}),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,a.jsx)(r.code,{children:"match-block"}),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"types",children:"Types"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"./tokenizer-math",children:"@yozora/tokenizer-math"})," produce ",(0,a.jsx)(r.a,{href:"./ast#math",children:"Math"})," type nodes.\nSee ",(0,a.jsx)(r.a,{href:"./ast",children:"@yozora/ast"})," for full base types."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"import type { Literal } from '@yozora/ast'\n\nexport const MathType = 'math'\nexport type MathType = typeof MathType\n\n/**\n * Math content.\n */\nexport type Math = Literal<MathType>\n"})}),"\n",(0,a.jsx)(r.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Single line math block."}),"\n",(0,a.jsx)(o.Rr,{ids:"1-4",parsers:["yozora"],sourceType:"math"}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Multiple line math block."}),"\n",(0,a.jsx)(o.Rr,{ids:"5-8",parsers:["yozora"],sourceType:"math"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"related",children:"Related"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"./parser",children:"@yozora/parser"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"./tokenizer-inline-math",children:"@yozora/tokenizer-inline-math"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/math#readme",children:"@yozora/react-math"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme",children:"@yozora/react-markdown"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/math",children:"Sourcecode"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"./ast#math",children:"Math | Yozora AST"})}),"\n"]})]})}function m(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}}}]);