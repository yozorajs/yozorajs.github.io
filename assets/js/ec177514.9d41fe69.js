"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[6543],{53584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>h});var n=a(87462),r=(a(67294),a(3905)),i=a(73992),o=a(18679),p=a(32707);const l={id:"tokenizer-inline-math",title:"@yozora/tokenizer-inline-math",sidebar_label:"inline-math"},s=void 0,m={unversionedId:"package/tokenizer-inline-math",id:"package/tokenizer-inline-math",title:"@yozora/tokenizer-inline-math",description:"<img",source:"@site/docs/package/tokenizer-inline-math.mdx",sourceDirName:"package",slug:"/package/tokenizer-inline-math",permalink:"/docs/next/package/tokenizer-inline-math",draft:!1,tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1684057460,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{id:"tokenizer-inline-math",title:"@yozora/tokenizer-inline-math",sidebar_label:"inline-math"},sidebar:"Docs",previous:{title:"inline-code",permalink:"/docs/next/package/tokenizer-inline-code"},next:{title:"link",permalink:"/docs/next/package/tokenizer-link"}},k={},h=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],c={toc:h},d="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("header",null,(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-inline-math"},(0,r.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-inline-math/latest"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-inline-math"},(0,r.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-inline-math.svg"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-inline-math"},(0,r.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-inline-math.svg"})),(0,r.kt)("a",{href:"#install"},(0,r.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,r.kt)("a",{href:"https://github.com/nodejs/node"},(0,r.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-inline-math"})),(0,r.kt)("a",{href:"https://github.com/facebook/jest"},(0,r.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,r.kt)("a",{href:"https://github.com/prettier/prettier"},(0,r.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"inline math spec",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#backtick-string"},"backtick string")," is a string of one or more backtick\ncharacters (",(0,r.kt)("inlineCode",{parentName:"p"},"`"),") that is neither preceded nor followed by a backtick."),(0,r.kt)("p",{parentName:"admonition"},"A inline math begins with a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#backtick-string"},"backtick string")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"$"),"\nand ends with a ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," + ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#backtick-string"},"backtick string")," of equal length. The\ncontents of the inline math are the characters between the two ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," character,\nnormalized in the following ways:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"First, ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#line-ending"},"line endings")," are converted to ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"spaces"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the resulting string both begins and ends with a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"space"),"\ncharacter, but does not consist entirely of ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"space")," characters,\na single ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"space")," character is removed from the front and back.\nThis allows you to include code that begins or ends with backtick characters,\nwhich must be separated by ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace")," from the opening or\nclosing backtick strings."))),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression."))),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-inline-math\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-inline-math\n"))),(0,r.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @yozora/tokenizer-inline-math\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"./tokenizer-inline-math"},"@yozora/tokenizer-inline-math")," has been integrated into ",(0,r.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser"),",\nso you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"YozoraParser")," directly.")),(0,r.kt)(i.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"basic-usage",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./tokenizer-inline-math"},"@yozora/tokenizer-inline-math")," cannot be used alone, it needs to be\nregistered in ",(0,r.kt)("em",{parentName:"p"},"Parser")," as a plugin-in before it can be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport InlineMathTokenizer from '@yozora/tokenizer-inline-math'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new InlineMathTokenizer())\n\n// parse source markdown content\nparser.parse(\"`$x^2 + y^2 = z^2, x < 0$`\")\n"))),(0,r.kt)(o.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(\"`$x^2 + y^2 = z^2, x < 0$`\")\n"))),(0,r.kt)(o.Z,{value:"GfmParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{2,5}","{2,5}":!0},"import GfmParser from '@yozora/parser-gfm'\nimport InlineMathTokenizer from '@yozora/tokenizer-inline-math'\n\nconst parser = new GfmParser()\nparser.useTokenizer(new InlineMathTokenizer())\n\n// parse source markdown content\nparser.parse(\"`$x^2 + y^2 = z^2, x < 0$`\")\n"))),(0,r.kt)(o.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{2,5}","{2,5}":!0},"import GfmExParser from '@yozora/parser-gfm-ex'\nimport InlineMathTokenizer from '@yozora/tokenizer-inline-math'\n\nconst parser = new GfmExParser()\nparser.useTokenizer(new InlineMathTokenizer())\n\n// parse source markdown content\nparser.parse(\"`$x^2 + y^2 = z^2, x < 0$`\")\n")))),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-inline-math"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"priority")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,r.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Exception:")," Delimiters of type ",(0,r.kt)("inlineCode",{parentName:"p"},"full")," are always processed before other type\ndelimiters."))),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./tokenizer-inline-math"},"@yozora/tokenizer-inline-math")," produce ",(0,r.kt)("a",{parentName:"p",href:"./ast#inlinemath"},"InlineMath")," type nodes.\nSee ",(0,r.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Literal } from '@yozora/ast'\n\nexport const InlineMathType = 'inlineMath'\nexport type InlineMathType = typeof InlineMathType\n\n/**\n * Inline math content.\n */\nexport type InlineMath = Literal<InlineMathType>\n")),(0,r.kt)("h2",{id:"live-examples"},"Live Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Basic."),(0,r.kt)(p.Z,{ids:"1-4",parsers:["yozora"],sourceType:"inlineMath",mdxType:"YozoraGFMLive"}))),(0,r.kt)("h2",{id:"related"},"Related"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./tokenizer-math"},"@yozora/tokenizer-math")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/math#readme"},"@yozora/react-math")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/inline-math"},"Sourcecode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ast#inlinemath"},"InlineMath | Yozora AST"))))}g.isMDXComponent=!0}}]);