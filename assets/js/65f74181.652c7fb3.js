"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[645],{673:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(25487),i=a(86023);const l={id:"ast-util",title:"@yozora/ast-util",sidebar_label:"ast-util"},d=void 0,s={unversionedId:"package/ast-util",id:"package/ast-util",title:"@yozora/ast-util",description:"<img",source:"@site/docs/package/ast-util.mdx",sourceDirName:"package",slug:"/package/ast-util",permalink:"/docs/next/package/ast-util",draft:!1,tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1683986667,formattedLastUpdatedAt:"May 13, 2023",frontMatter:{id:"ast-util",title:"@yozora/ast-util",sidebar_label:"ast-util"},sidebar:"API",previous:{title:"ast",permalink:"/docs/next/package/ast"},next:{title:"core-tokenizer",permalink:"/docs/next/package/core-tokenizer"}},p={},m=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:3},{value:"Related",id:"related",level:2}],c={toc:m};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("header",null,(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/ast-util"},(0,r.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/ast-util/latest"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/ast-util"},(0,r.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/ast-util.svg"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/ast-util"},(0,r.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/ast-util.svg"})),(0,r.kt)("a",{href:"#install"},(0,r.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,r.kt)("a",{href:"https://github.com/nodejs/node"},(0,r.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/ast-util"})),(0,r.kt)("a",{href:"https://github.com/prettier/prettier"},(0,r.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,r.kt)("br",null),(0,r.kt)("p",null,"This package contains a collect of utility functions to handle ",(0,r.kt)("a",{parentName:"p",href:"./ast-util"},"Yozora markdown ast"),"."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/ast-util\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/ast-util\n"))),(0,r.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @yozora/ast-util\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"calcDefinitionMap")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Traverse yozora ast and generate a link reference definition map.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"calcExcerptAst")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Generate a excerpt ast from the original ast.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"calcFootnoteDefinitionMap")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Traverse yozora ast and generate a footnote reference definition map.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"calcHeadingToc")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Generate heading toc, and update the referenced ",(0,r.kt)("inlineCode",{parentName:"td"},"Heading.identifier")," simultaneously")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"calcIdentifierSet")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Generate a definition identifier set from Yozora AST.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"calcIdentifierFromYastNodes")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Generate a link identifier for Node list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"collectDefinitions")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Collect link reference definitions in a pre-order traversal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"collectFootnoteDefinitions")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Collect footnote reference definitions in a pre-order traversal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"collectNodes")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Collect nodes with the specified nodeTypes (or matcher) through pre-order traversal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"defaultUrlResolver")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Default url resolver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"removePositions")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Remove ",(0,r.kt)("a",{parentName:"td",href:"./ast#position"},"Position")," from AST (a shallow cloned AST will be created).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"replaceFootnotesInReferences")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Replace inline footnotes into footnote references and footnote reference definitions (",(0,r.kt)("strong",{parentName:"td"},"irreversible"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"resolveUrlsForAst")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Traverse Yozora AST and resolve urls for aim nodes (",(0,r.kt)("strong",{parentName:"td"},"irreversible"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"searchNode")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Search a node from Yozora AST in pre-order traversing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"shallowCloneAst")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Shallow clone the Yozora AST until the match reaches the termination condition.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"shallowMutateAstInPostorder")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Traverse AST and replace nodes in post-order (",(0,r.kt)("strong",{parentName:"td"},"immutable"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"shallowMutateAstInPreorder")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Traverse AST and replace nodes in pre-order (",(0,r.kt)("strong",{parentName:"td"},"immutable"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"traverseAST")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Traverse Yozora AST and perform a mutating operation for each matched node")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ImageType, BlockquoteType } from '@yozora/ast'\nimport { \n  collectDefinitions,\n  collectFootnoteDefinitions,\n  calcHeadingToc, \n  shallowMutateAstInPostorder, \n  traverseAST,\n} from '@yozora/ast-util'\n\n// Collect definitions.\ncollectDefinitions(\n  root,               // Yozora ast root\n  [DefinitionType],   // aim Yast types, optional\n  [],                 // preset definitions, optional\n)\n\n// Collect footnote definitions.\ncollectFootnoteDefinitions(\n  root,                     // Yozora ast root\n  [FootnoteDefinitionType], // aim Yast types, optional\n  [],                       // preset footnote definitions, optional\n  true,                     // prefer reference type footnotes, optional.\n)\n\n// traverse the Yozora AST and set the image title to the image alt\ntraverseAST(\n  root,                           // Yozora ast root\n  [ImageType],                    // aim Yast types, required\n  (node) => node.title = node.alt // mutating operation, required\n)\n\n// traverse the Yozora AST and replace the image to two images.\nshallowMutateAstInPostorder(\n  root, \n  [ImageType], \n  (node) => [node, node]\n)\n\n// Generate heading toc, each toc node's identifier will with the prefix 'custom-identifier-prefix-'.\n// The default prefix is 'heading-'\ncalcHeadingToc(root, 'custom-identifier-prefix-')\n\n// shallow clone the Yozora AST until a blockquote type node with a blockquote \n// type parent and in addition it is not the first child of its parent encountered.\nconst root2 = shallowCloneAst(\n  root, \n  (node, parent, childIndex) => (\n    parent.type === BlockquoteType && \n    childIndex > 0 && \n    node.type === BlockquoteType\n  )\n)\n")),(0,r.kt)("h2",{id:"related"},"Related"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ast-util"},"@yozora/ast")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/packages/ast-util"},"Sourcecode")),(0,r.kt)("li",{parentName:"ul"})))}k.isMDXComponent=!0}}]);