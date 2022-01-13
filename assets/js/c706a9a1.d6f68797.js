"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[1506],{5076:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return k},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(4137)),i=a(7225),p=a(8448),s=a(9430),l=["components"],m={id:"tokenizer-text",title:"@yozora/tokenizer-text",sidebar_label:"text"},k=void 0,d={unversionedId:"package/tokenizer-text",id:"package/tokenizer-text",title:"@yozora/tokenizer-text",description:"<img",source:"@site/docs/package/tokenizer-text.mdx",sourceDirName:"package",slug:"/package/tokenizer-text",permalink:"/docs/next/package/tokenizer-text",tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1642080905,formattedLastUpdatedAt:"1/13/2022",frontMatter:{id:"tokenizer-text",title:"@yozora/tokenizer-text",sidebar_label:"text"},sidebar:"Docs",previous:{title:"table",permalink:"/docs/next/package/tokenizer-table"},next:{title:"thematic-break",permalink:"/docs/next/package/tokenizer-thematic-break"}},c=[{value:"Install",id:"install",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[],level:3},{value:"Types",id:"types",children:[],level:3}],level:2},{value:"Live Examples",id:"live-examples",children:[],level:2},{value:"Related",id:"related",children:[],level:2}],h={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("header",null,(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-text"},(0,o.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-text/latest"})),(0,o.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-text"},(0,o.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-text.svg"})),(0,o.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-text"},(0,o.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-text.svg"})),(0,o.kt)("a",{href:"#install"},(0,o.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,o.kt)("a",{href:"https://github.com/nodejs/node"},(0,o.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-text"})),(0,o.kt)("a",{href:"https://github.com/facebook/jest"},(0,o.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,o.kt)("a",{href:"https://github.com/prettier/prettier"},(0,o.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"github flavor markdown spec")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Any characters not given an interpretation by the above rules will be parsed as\nplain textual content."),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#soft-line-breaks"},"github flavor markdown spec"))," for details."),(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression.")))),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-text\n"))),(0,o.kt)(p.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-text\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"./tokenizer-text"},"@yozora/tokenizer-text")," has been integrated into ",(0,o.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,o.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,o.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly."))),(0,o.kt)(i.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"basic-usage",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./tokenizer-text"},"@yozora/tokenizer-text")," cannot be used alone, it needs to be\nregistered in ",(0,o.kt)("em",{parentName:"p"},"Parser")," as a plugin-in before it can be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport TextTokenizer from '@yozora/tokenizer-text'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new TextTokenizer())\n\n// parse source markdown content\nparser.parse(\"hello $.;'there\")\n"))),(0,o.kt)(p.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(\"hello $.;'there\")\n"))),(0,o.kt)(p.Z,{value:"GfmParser",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(\"hello $.;'there\")\n"))),(0,o.kt)(p.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(\"hello $.;'there\")\n")))),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-text"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"priority")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.FALLBACK"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,o.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Exception:")," Delimiters of type ",(0,o.kt)("inlineCode",{parentName:"p"},"full")," are always processed before other type\ndelimiters."))),(0,o.kt)("h3",{id:"types"},"Types"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./tokenizer-text"},"@yozora/tokenizer-text")," produce ",(0,o.kt)("a",{parentName:"p",href:"./ast#text"},"Text")," type nodes.\nSee ",(0,o.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Literal } from '@yozora/ast'\n\nexport const TextType = 'text'\nexport type TextType = typeof TextType\n\n/**\n * Text represents everything that is just text.\n * @see https://github.com/syntax-tree/mdast#text\n * @see https://github.github.com/gfm/#textual-content\n */\nexport type Text = Literal<TextType>\n")),(0,o.kt)("h2",{id:"live-examples"},"Live Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Basic."),(0,o.kt)(s.Z,{ids:"671-672",mdxType:"YozoraGFMLive"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Internal spaces are preserved verbatim."),(0,o.kt)(s.Z,{ids:"673",mdxType:"YozoraGFMLive"}))),(0,o.kt)("h2",{id:"related"},"Related"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/text#readme"},"@yozora/react-text")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/text"},"Sourcecode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./ast#text"},"Text | Yozora AST")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#soft-line-breaks"},"Textual content | Github Flavor Markdown Spec")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#text"},"Text | Mdast"))))}u.isMDXComponent=!0}}]);