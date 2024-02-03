"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[8860],{6816:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>h,toc:()=>p});var i=r(7624),t=r(4552),s=r(6212),a=r(2440),l=r(7360);const o={id:"tokenizer-inline-math",title:"@yozora/tokenizer-inline-math",sidebar_label:"inline-math"},c=void 0,h={id:"package/tokenizer-inline-math",title:"@yozora/tokenizer-inline-math",description:"<img",source:"@site/docs/package/tokenizer-inline-math.mdx",sourceDirName:"package",slug:"/package/tokenizer-inline-math",permalink:"/docs/next/package/tokenizer-inline-math",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1706961465,formattedLastUpdatedAt:"Feb 3, 2024",frontMatter:{id:"tokenizer-inline-math",title:"@yozora/tokenizer-inline-math",sidebar_label:"inline-math"},sidebar:"Docs",previous:{title:"inline-code",permalink:"/docs/next/package/tokenizer-inline-code"},next:{title:"link",permalink:"/docs/next/package/tokenizer-link"}},d={},p=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{align:"center",children:[(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-inline-math",children:(0,i.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-inline-math/latest"})}),(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-inline-math",children:(0,i.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-inline-math.svg"})}),(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-inline-math",children:(0,i.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-inline-math.svg"})}),(0,i.jsx)("a",{href:"#install",children:(0,i.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,i.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,i.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-inline-math"})}),(0,i.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,i.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,i.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,i.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.admonition,{title:"inline math spec",type:"note",children:[(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#backtick-string",children:"backtick string"})," is a string of one or more backtick\ncharacters (",(0,i.jsx)(n.code,{children:"`"}),") that is neither preceded nor followed by a backtick."]}),(0,i.jsxs)(n.p,{children:["A inline math begins with a ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#backtick-string",children:"backtick string"})," + ",(0,i.jsx)(n.code,{children:"$"}),"\nand ends with a ",(0,i.jsx)(n.code,{children:"$"})," + ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#backtick-string",children:"backtick string"})," of equal length. The\ncontents of the inline math are the characters between the two ",(0,i.jsx)(n.code,{children:"$"})," character,\nnormalized in the following ways:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["First, ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#line-ending",children:"line endings"})," are converted to ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#space",children:"spaces"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the resulting string both begins and ends with a ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#space",children:"space"}),"\ncharacter, but does not consist entirely of ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#space",children:"space"})," characters,\na single ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#space",children:"space"})," character is removed from the front and back.\nThis allows you to include code that begins or ends with backtick characters,\nwhich must be separated by ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"})," from the opening or\nclosing backtick strings."]}),"\n"]}),"\n"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["See ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#live-examples",children:"Live Examples"})})," for an intuitive impression."]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsxs)(s.c,{groupId:"npm2yarn",children:[(0,i.jsx)(a.c,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save @yozora/tokenizer-inline-math\n"})})}),(0,i.jsx)(a.c,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @yozora/tokenizer-inline-math\n"})})}),(0,i.jsx)(a.c,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @yozora/tokenizer-inline-math\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"./tokenizer-inline-math",children:"@yozora/tokenizer-inline-math"})," has been integrated into ",(0,i.jsx)(n.a,{href:"./parser",children:"@yozora/parser"}),",\nso you can use ",(0,i.jsx)(n.code,{children:"YozoraParser"})," directly."]})}),"\n",(0,i.jsxs)(s.c,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],children:[(0,i.jsxs)(a.c,{value:"basic-usage",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"./tokenizer-inline-math",children:"@yozora/tokenizer-inline-math"})," cannot be used alone, it needs to be\nregistered in ",(0,i.jsx)(n.em,{children:"Parser"})," as a plugin-in before it can be used."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"{4,9}",children:"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport InlineMathTokenizer from '@yozora/tokenizer-inline-math'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new InlineMathTokenizer())\n\n// parse source markdown content\nparser.parse(\"`$x^2 + y^2 = z^2, x < 0$`\")\n"})})]}),(0,i.jsx)(a.c,{value:"YozoraParser",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(\"`$x^2 + y^2 = z^2, x < 0$`\")\n"})})}),(0,i.jsx)(a.c,{value:"GfmParser",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"{2,5}",children:"import GfmParser from '@yozora/parser-gfm'\nimport InlineMathTokenizer from '@yozora/tokenizer-inline-math'\n\nconst parser = new GfmParser()\nparser.useTokenizer(new InlineMathTokenizer())\n\n// parse source markdown content\nparser.parse(\"`$x^2 + y^2 = z^2, x < 0$`\")\n"})})}),(0,i.jsx)(a.c,{value:"GfmExParser",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"{2,5}",children:"import GfmExParser from '@yozora/parser-gfm-ex'\nimport InlineMathTokenizer from '@yozora/tokenizer-inline-math'\n\nconst parser = new GfmExParser()\nparser.useTokenizer(new InlineMathTokenizer())\n\n// parse source markdown content\nparser.parse(\"`$x^2 + y^2 = z^2, x < 0$`\")\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"name"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:'"@yozora/tokenizer-inline-math"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"priority"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"TokenizerPriority.ATOMIC"})})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"name"}),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,i.jsx)(n.em,{children:"matching / parsing"})," phase."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"priority"}),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,i.jsx)(n.code,{children:"match-block"}),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Exception:"})," Delimiters of type ",(0,i.jsx)(n.code,{children:"full"})," are always processed before other type\ndelimiters."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"./tokenizer-inline-math",children:"@yozora/tokenizer-inline-math"})," produce ",(0,i.jsx)(n.a,{href:"./ast#inlinemath",children:"InlineMath"})," type nodes.\nSee ",(0,i.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})," for full base types."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import type { Literal } from '@yozora/ast'\n\nexport const InlineMathType = 'inlineMath'\nexport type InlineMathType = typeof InlineMathType\n\n/**\n * Inline math content.\n */\nexport type InlineMath = Literal<InlineMathType>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Basic."}),"\n",(0,i.jsx)(l.c,{ids:"1-4",parsers:["yozora"],sourceType:"inlineMath"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-math",children:"@yozora/tokenizer-math"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/math#readme",children:"@yozora/react-math"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme",children:"@yozora/react-markdown"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/inline-math",children:"Sourcecode"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./ast#inlinemath",children:"InlineMath | Yozora AST"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);