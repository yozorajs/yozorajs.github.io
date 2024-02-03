"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[4006],{7832:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>f});var r=i(7624),t=i(4552),s=i(6212),o=i(2440),a=i(7360);const l={id:"tokenizer-definition",title:"@yozora/tokenizer-definition",sidebar_label:"definition"},c=void 0,d={id:"package/tokenizer-definition",title:"@yozora/tokenizer-definition",description:"<img",source:"@site/versioned_docs/version-2.x.x/package/tokenizer-definition.mdx",sourceDirName:"package",slug:"/package/tokenizer-definition",permalink:"/docs/package/tokenizer-definition",draft:!1,unlisted:!1,tags:[],version:"2.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1706961465,formattedLastUpdatedAt:"Feb 3, 2024",frontMatter:{id:"tokenizer-definition",title:"@yozora/tokenizer-definition",sidebar_label:"definition"},sidebar:"Docs",previous:{title:"break",permalink:"/docs/package/tokenizer-break"},next:{title:"delete",permalink:"/docs/package/tokenizer-delete"}},h={},f=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("header",{children:(0,r.jsxs)("div",{align:"center",children:[(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-definition",children:(0,r.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-definition/latest"})}),(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-definition",children:(0,r.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-definition.svg"})}),(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-definition",children:(0,r.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-definition.svg"})}),(0,r.jsx)("a",{href:"#install",children:(0,r.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,r.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,r.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-definition"})}),(0,r.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,r.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,r.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,r.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.admonition,{title:"github flavor markdown spec",type:"note",children:[(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-reference-definition",children:"link reference definition"})," consists of a\n",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-label",children:"link label"}),", indented up to three spaces, followed by a\ncolon (",(0,r.jsx)(n.code,{children:":"}),"), optional ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"})," (including up to one\n",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#line-ending",children:"line ending"}),"), a ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-destination",children:"link destination"}),",\noptional ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"})," (including up to one ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#whitespace",children:"line ending"}),"),\nand an optional ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-title",children:"link title"}),", which if it is present must be\nseparated from the ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-destination",children:"link destination"})," by ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"}),".\nNo further ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#non-whitespace-character",children:"non-whitespace characters"})," may occur\non the line."]}),(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-reference-definition",children:"link reference definition"})," does not correspond to a\nstructural element of a document. Instead, it defines a label which can be used\nin ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#reference-link",children:"reference link"}),"s and reference-style ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#images",children:"images"}),"\nelsewhere in the document. ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-reference-definition",children:"Link reference definitions"})," can\ncome either before or after the links that use them."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["See ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-reference-definition",children:"github flavor markdown spec"})})," for details."]}),"\n",(0,r.jsxs)(n.li,{children:["See ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"#live-examples",children:"Live Examples"})})," for an intuitive impression."]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(s.c,{groupId:"npm2yarn",children:[(0,r.jsx)(o.c,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save @yozora/tokenizer-definition\n"})})}),(0,r.jsx)(o.c,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @yozora/tokenizer-definition\n"})})}),(0,r.jsx)(o.c,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @yozora/tokenizer-definition\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"./tokenizer-definition",children:"@yozora/tokenizer-definition"})," has been integrated into ",(0,r.jsx)(n.a,{href:"./parser",children:"@yozora/parser"})," / ",(0,r.jsx)(n.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})," / ",(0,r.jsx)(n.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"}),",\nso you can use ",(0,r.jsx)(n.code,{children:"YozoraParser"})," / ",(0,r.jsx)(n.code,{children:"GfmExParser"})," / ",(0,r.jsx)(n.code,{children:"GfmParser"})," directly."]})}),"\n",(0,r.jsxs)(s.c,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],children:[(0,r.jsxs)(o.c,{value:"basic-usage",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"./tokenizer-definition",children:"@yozora/tokenizer-definition"})," cannot be used alone, it needs to be\nregistered in ",(0,r.jsx)(n.em,{children:"Parser"})," as a plugin-in before it can be used."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:"{4,9}",children:"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport DefinitionTokenizer from '@yozora/tokenizer-definition'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new DefinitionTokenizer())\n\n// parse source markdown content\nparser.parse(`\n[foo]: /url '\ntitle\nline1\nline2\n'\n\n[foo]\n`)\n"})})]}),(0,r.jsx)(o.c,{value:"YozoraParser",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n[foo]: /url '\ntitle\nline1\nline2\n'\n\n[foo]\n`)\n"})})}),(0,r.jsx)(o.c,{value:"GfmParser",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n[foo]: /url '\ntitle\nline1\nline2\n'\n\n[foo]\n`)\n"})})}),(0,r.jsx)(o.c,{value:"GfmExParser",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n[foo]: /url '\ntitle\nline1\nline2\n'\n\n[foo]\n`)\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"name"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:'"@yozora/tokenizer-definition"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"priority"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"TokenizerPriority.ATOMIC"})})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"name"}),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,r.jsx)(n.em,{children:"matching / parsing"})," phase."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"priority"}),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,r.jsx)(n.code,{children:"match-block"}),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"./tokenizer-definition",children:"@yozora/tokenizer-definition"})," produce ",(0,r.jsx)(n.a,{href:"./ast#definition",children:"Definition"})," type nodes.\nSee ",(0,r.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})," for full base types."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import type { Association, Node, Resource  } from '@yozora/ast'\n\nexport const DefinitionType = 'definition'\nexport type DefinitionType = typeof DefinitionType\n\n/**\n * Definition represents a resource.\n * @see https://github.com/syntax-tree/mdast#definition\n * @see https://github.github.com/gfm/#link-reference-definitions\n */\nexport interface Definition extends\n  Node<DefinitionType>,\n  Association,\n  Resource {}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Basic."}),"\n",(0,r.jsx)(a.c,{ids:"161-164"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The title may extend over multiple lines."}),"\n",(0,r.jsx)(a.c,{ids:"165"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["However, it may not contain a ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#blank-line",children:"blank line"}),"."]}),"\n",(0,r.jsx)(a.c,{ids:"166"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The title may be omitted."}),"\n",(0,r.jsx)(a.c,{ids:"167"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The link destination may not be omitted."}),"\n",(0,r.jsx)(a.c,{ids:"168"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"However, an empty link destination may be specified using angle brackets."}),"\n",(0,r.jsx)(a.c,{ids:"169"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The title must be separated from the link destination by whitespace."}),"\n",(0,r.jsx)(a.c,{ids:"170"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Both title and destination can contain backslash escapes and literal\nbackslashes."}),"\n",(0,r.jsx)(a.c,{ids:"171"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A link can come before its corresponding definition."}),"\n",(0,r.jsx)(a.c,{ids:"172"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If there are several matching definitions, the first one takes precedence."}),"\n",(0,r.jsx)(a.c,{ids:"173"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["As noted in the section on ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#inline-link",children:"Links"}),", matching of labels is\ncase-insensitive (see matches)."]}),"\n",(0,r.jsx)(a.c,{ids:"174-175"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Here is a link reference definition with no corresponding link. It\ncontributes nothing to the document."}),"\n",(0,r.jsx)(a.c,{ids:"176-177"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["This is not a link reference definition, because there are\n",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#non-whitespace-character",children:"non-whitespace characters"})," after the title."]}),"\n",(0,r.jsx)(a.c,{ids:"178"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"This is a link reference definition, but it has no title."}),"\n",(0,r.jsx)(a.c,{ids:"179"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"This is not a link reference definition, because it is indented four spaces."}),"\n",(0,r.jsx)(a.c,{ids:"180"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"This is not a link reference definition, because it occurs inside a code\nblock."}),"\n",(0,r.jsx)(a.c,{ids:"181"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-reference-definition",children:"link reference definition"})," cannot interrupt a\nparagraph."]}),"\n",(0,r.jsx)(a.c,{ids:"182"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"However, it can directly follow other block elements, such as headings and\nthematic breaks, and it need not be followed by a blank line."}),"\n",(0,r.jsx)(a.c,{ids:"183-185"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Several ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-reference-definition",children:"link reference definitions"})," can occur one\nafter another, without intervening blank lines."]}),"\n",(0,r.jsx)(a.c,{ids:"186"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-reference-definition",children:"Link reference definitions"})," can occur inside block\ncontainers, like lists and block quotations. They affect the entire\ndocument, not just the container in which they are defined."]}),"\n",(0,r.jsx)(a.c,{ids:"187"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Whether something is a ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-reference-definition",children:"link reference definition"})," is\nindependent of whether the link reference it defines is used in the\ndocument. Thus, for example, the following document contains just a link\nreference definition, and no visible content."]}),"\n",(0,r.jsx)(a.c,{ids:"188"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./parser",children:"@yozora/parser"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./tokenizer-link-reference",children:"@yozora/tokenizer-link-reference"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./tokenizer-image-reference",children:"@yozora/tokenizer-image-reference"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme",children:"@yozora/react-markdown"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/definition",children:"Sourcecode"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./ast#definition",children:"Definition | Yozora AST"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-reference-definition",children:"Link reference definitions | Github Flavor Markdown Spec"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/syntax-tree/mdast#definition",children:"Definition | Mdast"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);