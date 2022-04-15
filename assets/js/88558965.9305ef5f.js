"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[8596],{89973:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return k},default:function(){return u},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return g}});var r=t(87462),n=t(63366),p=(t(67294),t(3905)),i=t(5529),o=t(98448),s=t(29430),l=["components"],m={id:"tokenizer-paragraph",title:"@yozora/tokenizer-paragraph",sidebar_label:"paragraph"},k=void 0,h={unversionedId:"package/tokenizer-paragraph",id:"package/tokenizer-paragraph",title:"@yozora/tokenizer-paragraph",description:"<img",source:"@site/docs/package/tokenizer-paragraph.mdx",sourceDirName:"package",slug:"/package/tokenizer-paragraph",permalink:"/docs/next/package/tokenizer-paragraph",tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1650039198,formattedLastUpdatedAt:"4/15/2022",frontMatter:{id:"tokenizer-paragraph",title:"@yozora/tokenizer-paragraph",sidebar_label:"paragraph"},sidebar:"Docs",previous:{title:"math",permalink:"/docs/next/package/tokenizer-math"},next:{title:"setext-heading",permalink:"/docs/next/package/tokenizer-setext-heading"}},d={},g=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],c={toc:g};function u(e){var a=e.components,t=(0,n.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("header",null,(0,p.kt)("div",{align:"center"},(0,p.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-paragraph"},(0,p.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-paragraph/latest"})),(0,p.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-paragraph"},(0,p.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-paragraph.svg"})),(0,p.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-paragraph"},(0,p.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-paragraph.svg"})),(0,p.kt)("a",{href:"#install"},(0,p.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,p.kt)("a",{href:"https://github.com/nodejs/node"},(0,p.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-paragraph"})),(0,p.kt)("a",{href:"https://github.com/facebook/jest"},(0,p.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,p.kt)("a",{href:"https://github.com/prettier/prettier"},(0,p.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,p.kt)("br",null),(0,p.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"github flavor markdown spec")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"A sequence of non-blank lines that cannot be interpreted as other kinds of\nblocks forms a ",(0,p.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#paragraph"},"paragraph"),". The contents of the paragraph are the\nresult of parsing the paragraph\u2019s raw content as inlines. The paragraph\u2019s raw\ncontent is formed by concatenating the lines and removing initial and final\n",(0,p.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),"."),(0,p.kt)("ul",{parentName:"div"},(0,p.kt)("li",{parentName:"ul"},"See ",(0,p.kt)("strong",{parentName:"li"},(0,p.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#paragraph"},"github flavor markdown spec"))," for details."),(0,p.kt)("li",{parentName:"ul"},"See ",(0,p.kt)("strong",{parentName:"li"},(0,p.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression.")))),(0,p.kt)("h2",{id:"install"},"Install"),(0,p.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,p.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-paragraph\n"))),(0,p.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-paragraph\n")))),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},(0,p.kt)("a",{parentName:"p",href:"./tokenizer-paragraph"},"@yozora/tokenizer-paragraph")," has been integrated into ",(0,p.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,p.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,p.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,p.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,p.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,p.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly."))),(0,p.kt)(i.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,p.kt)(o.Z,{value:"basic-usage",mdxType:"TabItem"},(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"./tokenizer-paragraph"},"@yozora/tokenizer-paragraph")," cannot be used alone, it needs to be\nregistered in ",(0,p.kt)("em",{parentName:"p"},"Parser")," as a plugin-in before it can be used."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new ParagraphTokenizer())\n\n// parse source markdown content\nparser.parse(`\naaa\n\nbbb\n`)\n"))),(0,p.kt)(o.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\naaa\n\nbbb\n`)\n"))),(0,p.kt)(o.Z,{value:"GfmParser",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\naaa\n\nbbb\n`)\n"))),(0,p.kt)(o.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\naaa\n\nbbb\n`)\n")))),(0,p.kt)("h3",{id:"options"},"Options"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,p.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"td"},"name")),(0,p.kt)("td",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"td"},"string")),(0,p.kt)("td",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"td"},"false")),(0,p.kt)("td",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-paragraph"'))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"td"},"priority")),(0,p.kt)("td",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"td"},"number")),(0,p.kt)("td",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"td"},"false")),(0,p.kt)("td",{parentName:"tr",align:"center"},(0,p.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.FALLBACK"))))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,p.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,p.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."))),(0,p.kt)("h3",{id:"types"},"Types"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"./tokenizer-paragraph"},"@yozora/tokenizer-paragraph")," produce ",(0,p.kt)("a",{parentName:"p",href:"./ast#paragraph"},"Paragraph")," type nodes.\nSee ",(0,p.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Parent } from '@yozora/ast'\n\nexport const ParagraphType = 'paragraph'\nexport type ParagraphType = typeof ParagraphType\n\n/**\n * Paragraph represents a unit of discourse dealing with a particular\n * point or idea.\n * @see https://github.com/syntax-tree/mdast#paragraph\n * @see https://github.github.com/gfm/#paragraphs\n */\nexport type Paragraph = Parent<ParagraphType>\n")),(0,p.kt)("h2",{id:"live-examples"},"Live Examples"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Basic."),(0,p.kt)(s.Z,{ids:"189",mdxType:"YozoraGFMLive"})),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Paragraphs can contain multiple lines, but no blank lines."),(0,p.kt)(s.Z,{ids:"190",mdxType:"YozoraGFMLive"})),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Multiple blank lines between paragraph have no effect."),(0,p.kt)(s.Z,{ids:"191",mdxType:"YozoraGFMLive"})),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Leading spaces are skipped."),(0,p.kt)(s.Z,{ids:"192",mdxType:"YozoraGFMLive"})),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Lines after the first may be indented any amount, since indented code\nblocks cannot interrupt paragraphs."),(0,p.kt)(s.Z,{ids:"193",mdxType:"YozoraGFMLive"})),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"However, the first line may be indented at most three spaces, or an\nindented code block will be triggered."),(0,p.kt)(s.Z,{ids:"194-195",mdxType:"YozoraGFMLive"})),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Final spaces are stripped before inline parsing, so a paragraph that ends\nwith two or more spaces will not end with a ",(0,p.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#hard-line-break"},"hard line break"),"."),(0,p.kt)(s.Z,{ids:"196",mdxType:"YozoraGFMLive"}))),(0,p.kt)("h2",{id:"related"},"Related"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/paragraph#readme"},"@yozora/react-paragraph")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/paragraph"},"Sourcecode")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"./ast#paragraph"},"Paragraph | Yozora AST")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#paragraph"},"Paragraphs | Github Flavor Markdown Spec")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#paragraph"},"Paragraph | Mdast"))))}u.isMDXComponent=!0}}]);