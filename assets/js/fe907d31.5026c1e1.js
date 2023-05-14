"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[3217],{5738:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>k,contentTitle:()=>s,default:()=>u,frontMatter:()=>m,metadata:()=>l,toc:()=>c});var r=t(87462),n=(t(67294),t(3905)),i=t(73992),o=t(18679),p=t(32707);const m={id:"tokenizer-thematic-break",title:"@yozora/tokenizer-thematic-break",sidebar_label:"thematic-break"},s=void 0,l={unversionedId:"package/tokenizer-thematic-break",id:"version-1.x.x/package/tokenizer-thematic-break",title:"@yozora/tokenizer-thematic-break",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/tokenizer-thematic-break.mdx",sourceDirName:"package",slug:"/package/tokenizer-thematic-break",permalink:"/docs/1.x.x/package/tokenizer-thematic-break",draft:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1684057460,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{id:"tokenizer-thematic-break",title:"@yozora/tokenizer-thematic-break",sidebar_label:"thematic-break"},sidebar:"Docs",previous:{title:"text",permalink:"/docs/1.x.x/package/tokenizer-text"}},k={},c=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],h={toc:c},d="wrapper";function u(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("header",null,(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-thematic-break"},(0,n.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-thematic-break/v1.x.x"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-thematic-break"},(0,n.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-thematic-break.svg"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-thematic-break"},(0,n.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-thematic-break.svg"})),(0,n.kt)("a",{href:"#install"},(0,n.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,n.kt)("a",{href:"https://github.com/nodejs/node"},(0,n.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-thematic-break"})),(0,n.kt)("a",{href:"https://github.com/facebook/jest"},(0,n.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,n.kt)("a",{href:"https://github.com/prettier/prettier"},(0,n.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,n.kt)("br",null),(0,n.kt)("admonition",{title:"github flavor markdown spec",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"A line consisting of ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mn",{parentName:"mrow"},"0"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mn",{parentName:"mrow"},"3")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0-3")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"3")))))," spaces of indentation, followed by a sequence of\nthree or more matching ",(0,n.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"_"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"*")," characters, each followed optionally by\nany number of spaces or tabs, forms a ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#thematic-break"},"thematic break"),"."),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#thematic-break"},"github flavor markdown spec"))," for details."),(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression."))),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-thematic-break\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-thematic-break\n"))),(0,n.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @yozora/tokenizer-thematic-break\n")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"./tokenizer-thematic-break"},"@yozora/tokenizer-thematic-break")," has been integrated into ",(0,n.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,n.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,n.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly.")),(0,n.kt)(i.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"basic-usage",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./tokenizer-thematic-break"},"@yozora/tokenizer-thematic-break")," cannot be used alone, it needs to be\nregistered in ",(0,n.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport ThematicBreakTokenizer from '@yozora/tokenizer-thematic-break'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new ThematicBreakTokenizer())\n\n// parse source markdown content\nparser.parse(`\n***\n---\n___\n`)\n"))),(0,n.kt)(o.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n***\n---\n___\n`)\n"))),(0,n.kt)(o.Z,{value:"GfmParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n***\n---\n___\n`)\n"))),(0,n.kt)(o.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n***\n---\n___\n`)\n")))),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-thematic-break"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"priority")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,n.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,n.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."))),(0,n.kt)("h3",{id:"types"},"Types"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./tokenizer-thematic-break"},"@yozora/tokenizer-thematic-break")," produce ",(0,n.kt)("a",{parentName:"p",href:"./ast#thematicBreak"},"ThematicBreak")," type nodes.\nSee ",(0,n.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { YastNode } from '@yozora/ast'\n\nexport const ThematicBreakType = 'thematicBreak'\nexport type ThematicBreakType = typeof ThematicBreakType\n\n/**\n * ThematicBreak represents a thematic break, such as a scene change in\n * a story, a transition to another topic, or a new document.\n * @see https://github.com/syntax-tree/mdast#thematicbreak\n * @see https://github.github.com/gfm/#thematic-break\n */\nexport type ThematicBreak = YastNode<ThematicBreakType>\n")),(0,n.kt)("h2",{id:"live-examples"},"Live Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Basic."),(0,n.kt)(p.Z,{ids:"13",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Wrong characters."),(0,n.kt)(p.Z,{ids:"14-15",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Not enough characters."),(0,n.kt)(p.Z,{ids:"16",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"One to three spaces indent are allowed."),(0,n.kt)(p.Z,{ids:"17",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Four spaces is too many"),(0,n.kt)(p.Z,{ids:"18-19",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"More than three characters may be used."),(0,n.kt)(p.Z,{ids:"20",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Spaces are allowed between the characters."),(0,n.kt)(p.Z,{ids:"21-23",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Spaces are allowed at the end."),(0,n.kt)(p.Z,{ids:"24",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"However, no other characters may occur in the line."),(0,n.kt)(p.Z,{ids:"25",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It is required that all of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#non-whitespace-character"},"non-whitespace characters"),"\nbe the same. So, this is not a thematic break."),(0,n.kt)(p.Z,{ids:"26",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Thematic breaks do not need blank lines before or after."),(0,n.kt)(p.Z,{ids:"27",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If a line of dashes that meets the above conditions for being a thematic\nbreak could also be interpreted as the underline of a\n",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#setext-heading"},"setext heading"),", the interpretation as a\n",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#setext-heading"},"setext heading")," takes precedence. Thus, for example,\nthis is a setext heading, not a paragraph followed by a thematic break."),(0,n.kt)(p.Z,{ids:"28",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When both a thematic break and a list item are possible interpretations of\na line, the thematic break takes precedence."),(0,n.kt)(p.Z,{ids:"29",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you want a thematic break in a list item, use a different bullet."),(0,n.kt)(p.Z,{ids:"30",mdxType:"YozoraGFMLive"}))),(0,n.kt)("h2",{id:"related"},"Related"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/thematic-break#readme"},"@yozora/react-thematic-break")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/tokenizers/thematic-break"},"Sourcecode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast#thematicBreak"},"ThematicBreak | Yozora AST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#thematic-break"},"Thematic breaks | Github Flavor Markdown Spec")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#thematicbreak"},"ThematicBreak | Mdast"))))}u.isMDXComponent=!0}}]);