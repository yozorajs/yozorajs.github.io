"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[5768],{6e3:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>h,toc:()=>m});var i=n(7624),s=n(4552),t=n(6212),a=n(2440),o=n(7360);const l={id:"tokenizer-image",title:"@yozora/tokenizer-image",sidebar_label:"image"},c=void 0,h={id:"package/tokenizer-image",title:"@yozora/tokenizer-image",description:"<img",source:"@site/docs/package/tokenizer-image.mdx",sourceDirName:"package",slug:"/package/tokenizer-image",permalink:"/docs/next/package/tokenizer-image",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1706961465,formattedLastUpdatedAt:"Feb 3, 2024",frontMatter:{id:"tokenizer-image",title:"@yozora/tokenizer-image",sidebar_label:"image"},sidebar:"Docs",previous:{title:"html-inline",permalink:"/docs/next/package/tokenizer-html-inline"},next:{title:"image-reference",permalink:"/docs/next/package/tokenizer-image-reference"}},d={},m=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}];function g(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{align:"center",children:[(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-image",children:(0,i.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-image/latest"})}),(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-image",children:(0,i.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-image.svg"})}),(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-image",children:(0,i.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-image.svg"})}),(0,i.jsx)("a",{href:"#install",children:(0,i.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,i.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,i.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-image"})}),(0,i.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,i.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,i.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,i.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(r.admonition,{title:"github flavor markdown spec",type:"note",children:[(0,i.jsxs)(r.p,{children:["Syntax for ",(0,i.jsx)(r.a,{href:"https://github.github.com/gfm/#images",children:"image"}),"s is like the syntax for ",(0,i.jsx)(r.a,{href:"https://github.github.com/gfm/#inline-link",children:"link"}),"s, with\none difference. Instead of ",(0,i.jsx)(r.a,{href:"https://github.github.com/gfm/#link-text",children:"link text"}),", we have an\n",(0,i.jsx)(r.a,{href:"https://github.github.com/gfm/#image-description",children:"image description"}),". The rules for this are the same as\nfor ",(0,i.jsx)(r.a,{href:"https://github.github.com/gfm/#link-text",children:"link text"}),", except that"]}),(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["a) an image description starts with ",(0,i.jsx)(r.code,{children:"!["})," rather than ",(0,i.jsx)(r.code,{children:"["}),", and"]}),"\n",(0,i.jsxs)(r.li,{children:["b) an image description may contain links. An ",(0,i.jsx)(r.a,{href:"https://github.github.com/gfm/#image-description",children:"image description"}),"\nhas ",(0,i.jsx)(r.a,{href:"https://github.github.com/gfm/#inlines",children:"inline"})," elements as its contents. When an image is rendered\nto HTML, this is standardly used as the image\u2019s ",(0,i.jsx)(r.code,{children:"alt"})," attribute."]}),"\n"]}),(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["See ",(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.a,{href:"https://github.github.com/gfm/#images",children:"github flavor markdown spec"})})," for details."]}),"\n",(0,i.jsxs)(r.li,{children:["See ",(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.a,{href:"#live-examples",children:"Live Examples"})})," for an intuitive impression."]}),"\n"]})]}),"\n",(0,i.jsx)(r.h2,{id:"install",children:"Install"}),"\n",(0,i.jsxs)(t.c,{groupId:"npm2yarn",children:[(0,i.jsx)(a.c,{value:"npm",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"npm install --save @yozora/tokenizer-image\n"})})}),(0,i.jsx)(a.c,{value:"yarn",label:"Yarn",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"yarn add @yozora/tokenizer-image\n"})})}),(0,i.jsx)(a.c,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"pnpm add @yozora/tokenizer-image\n"})})})]}),"\n",(0,i.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"./tokenizer-image",children:"@yozora/tokenizer-image"})," has been integrated into ",(0,i.jsx)(r.a,{href:"./parser",children:"@yozora/parser"})," / ",(0,i.jsx)(r.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})," / ",(0,i.jsx)(r.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"}),",\nso you can use ",(0,i.jsx)(r.code,{children:"YozoraParser"})," / ",(0,i.jsx)(r.code,{children:"GfmExParser"})," / ",(0,i.jsx)(r.code,{children:"GfmParser"})," directly."]})}),"\n",(0,i.jsxs)(t.c,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],children:[(0,i.jsxs)(a.c,{value:"basic-usage",children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"./tokenizer-image",children:"@yozora/tokenizer-image"})," cannot be used alone, it needs to be\nregistered in ",(0,i.jsx)(r.em,{children:"Parser"})," as a plugin-in before it can be used."]}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",metastring:"{4,9}",children:"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport ImageTokenizer from '@yozora/tokenizer-image'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new ImageTokenizer())\n\n// parse source markdown content\nparser.parse(`\n![foo](/url \"title\")\n`)\n"})})]}),(0,i.jsx)(a.c,{value:"YozoraParser",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n![foo](/url \"title\")\n`)\n"})})}),(0,i.jsx)(a.c,{value:"GfmParser",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n![foo](/url \"title\")\n`)\n"})})}),(0,i.jsx)(a.c,{value:"GfmExParser",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n![foo](/url \"title\")\n`)\n"})})})]}),"\n",(0,i.jsx)(r.h3,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Name"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(r.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"center"},children:(0,i.jsx)(r.code,{children:"name"})}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:(0,i.jsx)(r.code,{children:"string"})}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:(0,i.jsx)(r.code,{children:"false"})}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:(0,i.jsx)(r.code,{children:'"@yozora/tokenizer-image"'})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{style:{textAlign:"center"},children:(0,i.jsx)(r.code,{children:"priority"})}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:(0,i.jsx)(r.code,{children:"number"})}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:(0,i.jsx)(r.code,{children:"false"})}),(0,i.jsx)(r.td,{style:{textAlign:"center"},children:(0,i.jsx)(r.code,{children:"TokenizerPriority.LINKS"})})]})]})]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"name"}),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,i.jsx)(r.em,{children:"matching / parsing"})," phase."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"priority"}),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,i.jsx)(r.code,{children:"match-block"}),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Exception:"})," Delimiters of type ",(0,i.jsx)(r.code,{children:"full"})," are always processed before other type\ndelimiters."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"types",children:"Types"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"./tokenizer-image",children:"@yozora/tokenizer-image"})," produce ",(0,i.jsx)(r.a,{href:"./ast#image",children:"Image"})," type nodes.\nSee ",(0,i.jsx)(r.a,{href:"./ast",children:"@yozora/ast"})," for full base types."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"import type { Alternative, Node, Resource } from '@yozora/ast'\n\nexport const ImageType = 'image'\nexport type ImageType = typeof ImageType\n\n/**\n * Image represents an image.\n * @see https://github.com/syntax-tree/mdast#image\n * @see https://github.github.com/gfm/#images\n */\nexport interface Image extends\n  Node<ImageType>,\n  Resource,\n  Alternative {}\n"})}),"\n",(0,i.jsx)(r.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Basic."}),"\n",(0,i.jsx)(o.c,{ids:"580-583"}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Though this spec is concerned with parsing, not rendering, it is recommended\nthat in rendering to HTML, only the plain string content of the\n",(0,i.jsx)(r.a,{href:"https://github.github.com/gfm/#image-description",children:"image description"})," be used. Note that in the above\nexample, the alt attribute\u2019s value is ",(0,i.jsx)(r.code,{children:"foo bar"}),", not ",(0,i.jsx)(r.code,{children:"foo [bar](/url)"})," or\n",(0,i.jsx)(r.code,{children:'foo <a href="/url">bar</a>'}),". Only the plain string content is rendered,\nwithout formatting."]}),"\n",(0,i.jsx)(o.c,{ids:"584-589"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"related",children:"Related"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"./parser",children:"@yozora/parser"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"./tokenizer-image-reference",children:"@yozora/tokenizer-image-reference"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/image#readme",children:"@yozora/react-image"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme",children:"@yozora/react-markdown"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/image",children:"Sourcecode"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"./ast#image",children:"Image | Yozora AST"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://github.github.com/gfm/#images",children:"Images | Github Flavor Markdown Spec"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"https://github.com/syntax-tree/mdast#image",children:"Image | Mdast"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}}}]);