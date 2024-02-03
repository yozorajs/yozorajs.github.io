"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[6480],{5168:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var t=o(7624),i=o(4552),r=o(6212),s=o(2440);o(7360);const a={id:"tokenizer-footnote-definition",title:"@yozora/tokenizer-footnote-definition",sidebar_label:"footnote-definition"},d=void 0,l={id:"package/tokenizer-footnote-definition",title:"@yozora/tokenizer-footnote-definition",description:"<img",source:"@site/versioned_docs/version-2.x.x/package/tokenizer-footnote-definition.mdx",sourceDirName:"package",slug:"/package/tokenizer-footnote-definition",permalink:"/docs/package/tokenizer-footnote-definition",draft:!1,unlisted:!1,tags:[],version:"2.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1706961465,formattedLastUpdatedAt:"Feb 3, 2024",frontMatter:{id:"tokenizer-footnote-definition",title:"@yozora/tokenizer-footnote-definition",sidebar_label:"footnote-definition"},sidebar:"Docs",previous:{title:"footnote",permalink:"/docs/package/tokenizer-footnote"},next:{title:"footnote-reference",permalink:"/docs/package/tokenizer-footnote-reference"}},c={},h=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("header",{children:(0,t.jsxs)("div",{align:"center",children:[(0,t.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-footnote-definition",children:(0,t.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-footnote-definition/latest"})}),(0,t.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-footnote-definition",children:(0,t.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-footnote-definition.svg"})}),(0,t.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-footnote-definition",children:(0,t.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-footnote-definition.svg"})}),(0,t.jsx)("a",{href:"#install",children:(0,t.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,t.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,t.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-footnote-definition"})}),(0,t.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,t.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,t.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,t.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.mdxAdmonitionTitle,{})}),"\n",(0,t.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,t.jsxs)(r.c,{groupId:"npm2yarn",children:[(0,t.jsx)(s.c,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save @yozora/tokenizer-footnote-definition\n"})})}),(0,t.jsx)(s.c,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add @yozora/tokenizer-footnote-definition\n"})})}),(0,t.jsx)(s.c,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add @yozora/tokenizer-footnote-definition\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"./tokenizer-footnote-definition",children:"@yozora/tokenizer-footnote-definition"})," has been integrated into ",(0,t.jsx)(n.a,{href:"./parser",children:"@yozora/parser"}),",\nso you can use ",(0,t.jsx)(n.code,{children:"YozoraParser"})," directly."]})}),"\n",(0,t.jsxs)(r.c,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],children:[(0,t.jsxs)(s.c,{value:"basic-usage",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"./tokenizer-footnote-definition",children:"@yozora/tokenizer-footnote-definition"})," cannot be used alone, it needs to be\nregistered in ",(0,t.jsx)(n.em,{children:"Parser"})," as a plugin-in before it can be used."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"{4,9}",children:"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport FootnoteDefinitionTokenizer from '@yozora/tokenizer-footnote-definition'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new FootnoteDefinitionTokenizer())\n\n// parse source markdown content\nparser.parse(`\n  Here is a footnote reference,[^1]\n  another,[^long note],\n  \n  [^big footnote]: Here's one with multiple paragraphs and code.\n  \n      Indent paragraphs to include them in the footnote.\n  \n      \\`\\`\\`\n      Fenced coding\n      \\`\\`\\`\n  \n      ## heading\n  \n      Add as many paragraphs as you like.\n  `)\n"})})]}),(0,t.jsx)(s.c,{value:"YozoraParser",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\nHere is a footnote reference,[^1]\nanother,[^long note],\n\n[^big footnote]: Here's one with multiple paragraphs and code.\n\n    Indent paragraphs to include them in the footnote.\n\n    \\`\\`\\`\n    Fenced coding\n    \\`\\`\\`\n\n    ## heading\n\n    Add as many paragraphs as you like.\n`)\n"})})}),(0,t.jsxs)(s.c,{value:"GfmParser",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"FootnoteDefinitionTokenizer"})," should take precedence over ",(0,t.jsx)(n.code,{children:"DefinitionTokenizer"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"{2,3,5}",children:"import GfmParser from '@yozora/parser-gfm'\nimport { DefinitionTokenizerName } from '@yozora/tokenizer-definition'\nimport FootnoteDefinitionTokenizer from '@yozora/tokenizer-footnote-definition'\n\nconst parser = new GfmParser()\nparser.useTokenizer(new FootnoteDefinitionTokenizer(), DefinitionTokenizerName)\n\n// parse source markdown content\nparser.parse(`\nHere is a footnote reference,[^1]\nanother,[^long note],\n\n[^big footnote]: Here's one with multiple paragraphs and code.\n\n    Indent paragraphs to include them in the footnote.\n\n    \\`\\`\\`\n    Fenced coding\n    \\`\\`\\`\n\n    ## heading\n\n    Add as many paragraphs as you like.\n`)\n"})})]}),(0,t.jsxs)(s.c,{value:"GfmExParser",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"FootnoteDefinitionTokenizer"})," should take precedence over ",(0,t.jsx)(n.code,{children:"DefinitionTokenizer"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"{2,3,5}",children:"import GfmExParser from '@yozora/parser-gfm-ex'\nimport { DefinitionTokenizerName } from '@yozora/tokenizer-definition'\nimport FootnoteDefinitionTokenizer from '@yozora/tokenizer-footnote-definition'\n\nconst parser = new GfmExParser()\nparser.useTokenizer(new FootnoteDefinitionTokenizer(), DefinitionTokenizerName)\n\n// parse source markdown content\nparser.parse(`\nHere is a footnote reference,[^1]\nanother,[^long note],\n\n[^big footnote]: Here's one with multiple paragraphs and code.\n\n    Indent paragraphs to include them in the footnote.\n\n    \\`\\`\\`\n    Fenced coding\n    \\`\\`\\`\n\n    ## heading\n\n    Add as many paragraphs as you like.\n`)\n"})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:'"@yozora/tokenizer-footnote-definition"'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"priority"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"TokenizerPriority.ATOMIC"})})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"name"}),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,t.jsx)(n.em,{children:"matching / parsing"})," phase."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"priority"}),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,t.jsx)(n.code,{children:"match-block"}),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"./tokenizer-footnote-definition",children:"@yozora/tokenizer-footnote-definition"})," produce ",(0,t.jsx)(n.a,{href:"./ast#footnotedefinition",children:"FootnoteDefinition"})," type nodes.\nSee ",(0,t.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})," for full base types."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import type { Association, Parent } from '@yozora/ast'\n\nexport const FootnoteDefinitionType = 'footnoteDefinition'\nexport type FootnoteDefinitionType = typeof FootnoteDefinitionType\n\n/**\n * FootnoteDefinition represents content relating to the document that is\n * outside its flow.\n * @see https://github.com/syntax-tree/mdast#footnotedefinition\n */\nexport interface FootnoteDefinition\n  extends Parent<FootnoteDefinitionType>, Association {}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,t.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./parser",children:"@yozora/parser"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./tokenizer-footnote",children:"@yozora/tokenizer-footnote"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./tokenizer-definition",children:"@yozora/tokenizer-definition"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/footnote-definitions#readme",children:"@yozora/react-footnote-definitions"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/footnote-reference#readme",children:"@yozora/react-footnote-reference"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme",children:"@yozora/react-markdown"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/footnote-definition",children:"Sourcecode"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"./ast#footnotedefinition",children:"FootnoteDefinition | Yozora AST"})}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);