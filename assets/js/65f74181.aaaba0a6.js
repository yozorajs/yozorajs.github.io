"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[3861],{8804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=n(4848),s=n(8453),i=n(9489),l=n(7227);const o={id:"ast-util",title:"@yozora/ast-util",sidebar_label:"ast-util"},a=void 0,d={id:"package/ast-util",title:"@yozora/ast-util",description:"<img",source:"@site/docs/package/ast-util.mdx",sourceDirName:"package",slug:"/package/ast-util",permalink:"/docs/next/package/ast-util",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1710076334,formattedLastUpdatedAt:"Mar 10, 2024",frontMatter:{id:"ast-util",title:"@yozora/ast-util",sidebar_label:"ast-util"},sidebar:"API",previous:{title:"ast",permalink:"/docs/next/package/ast"},next:{title:"core-tokenizer",permalink:"/docs/next/package/core-tokenizer"}},c={},h=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:3},{value:"Related",id:"related",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("header",{children:(0,r.jsxs)("div",{align:"center",children:[(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/ast-util",children:(0,r.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/ast-util/latest"})}),(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/ast-util",children:(0,r.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/ast-util.svg"})}),(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/ast-util",children:(0,r.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/ast-util.svg"})}),(0,r.jsx)("a",{href:"#install",children:(0,r.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,r.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,r.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/ast-util"})}),(0,r.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,r.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.p,{children:["This package contains a collect of utility functions to handle ",(0,r.jsx)(t.a,{href:"./ast-util",children:"Yozora markdown ast"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,r.jsx)(l.A,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save @yozora/ast-util\n"})})}),(0,r.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add @yozora/ast-util\n"})})}),(0,r.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add @yozora/ast-util\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"calcDefinitionMap"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Traverse yozora ast and generate a link reference definition map."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"calcExcerptAst"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Generate a excerpt ast from the original ast."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"calcFootnoteDefinitionMap"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Traverse yozora ast and generate a footnote reference definition map."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"calcHeadingToc"})}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["Generate heading toc, and update the referenced ",(0,r.jsx)(t.code,{children:"Heading.identifier"})," simultaneously"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"calcIdentifierSet"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Generate a definition identifier set from Yozora AST."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"calcIdentifierFromYastNodes"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Generate a link identifier for Node list."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"collectDefinitions"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Collect link reference definitions in a pre-order traversal."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"collectFootnoteDefinitions"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Collect footnote reference definitions in a pre-order traversal."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"collectNodes"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Collect nodes with the specified nodeTypes (or matcher) through pre-order traversal."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"defaultUrlResolver"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Default url resolver"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"removePositions"})}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["Remove ",(0,r.jsx)(t.a,{href:"./ast#position",children:"Position"})," from AST (a shallow cloned AST will be created)."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"replaceFootnotesInReferences"})}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["Replace inline footnotes into footnote references and footnote reference definitions (",(0,r.jsx)(t.strong,{children:"irreversible"}),")"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"resolveUrlsForAst"})}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["Traverse Yozora AST and resolve urls for aim nodes (",(0,r.jsx)(t.strong,{children:"irreversible"}),")"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"searchNode"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Search a node from Yozora AST in pre-order traversing"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"shallowCloneAst"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Shallow clone the Yozora AST until the match reaches the termination condition."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"shallowMutateAstInPostorder"})}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["Traverse AST and replace nodes in post-order (",(0,r.jsx)(t.strong,{children:"immutable"}),")."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"shallowMutateAstInPreorder"})}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["Traverse AST and replace nodes in pre-order (",(0,r.jsx)(t.strong,{children:"immutable"}),")."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"traverseAST"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Traverse Yozora AST and perform a mutating operation for each matched node"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import { ImageType, BlockquoteType } from '@yozora/ast'\nimport { \n  collectDefinitions,\n  collectFootnoteDefinitions,\n  calcHeadingToc, \n  shallowMutateAstInPostorder, \n  traverseAST,\n} from '@yozora/ast-util'\n\n// Collect definitions.\ncollectDefinitions(\n  root,               // Yozora ast root\n  [DefinitionType],   // aim Yast types, optional\n  [],                 // preset definitions, optional\n)\n\n// Collect footnote definitions.\ncollectFootnoteDefinitions(\n  root,                     // Yozora ast root\n  [FootnoteDefinitionType], // aim Yast types, optional\n  [],                       // preset footnote definitions, optional\n  true,                     // prefer reference type footnotes, optional.\n)\n\n// traverse the Yozora AST and set the image title to the image alt\ntraverseAST(\n  root,                           // Yozora ast root\n  [ImageType],                    // aim Yast types, required\n  (node) => node.title = node.alt // mutating operation, required\n)\n\n// traverse the Yozora AST and replace the image to two images.\nshallowMutateAstInPostorder(\n  root, \n  [ImageType], \n  (node) => [node, node]\n)\n\n// Generate heading toc, each toc node's identifier will with the prefix 'custom-identifier-prefix-'.\n// The default prefix is 'heading-'\ncalcHeadingToc(root, 'custom-identifier-prefix-')\n\n// shallow clone the Yozora AST until a blockquote type node with a blockquote \n// type parent and in addition it is not the first child of its parent encountered.\nconst root2 = shallowCloneAst(\n  root, \n  (node, parent, childIndex) => (\n    parent.type === BlockquoteType && \n    childIndex > 0 && \n    node.type === BlockquoteType\n  )\n)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related",children:"Related"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./ast-util",children:"@yozora/ast"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/yozorajs/yozora/tree/main/packages/ast-util",children:"Sourcecode"})}),"\n",(0,r.jsx)(t.li,{}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);