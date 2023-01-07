"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[1140],{76981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>k});var n=a(87462),r=(a(67294),a(3905)),o=a(94828),i=a(86023),d=a(10629);const p={id:"tokenizer-indented-code",title:"@yozora/tokenizer-indented-code",sidebar_label:"indented-code"},l=void 0,s={unversionedId:"package/tokenizer-indented-code",id:"package/tokenizer-indented-code",title:"@yozora/tokenizer-indented-code",description:"<img",source:"@site/docs/package/tokenizer-indented-code.mdx",sourceDirName:"package",slug:"/package/tokenizer-indented-code",permalink:"/docs/next/package/tokenizer-indented-code",draft:!1,tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1673091576,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{id:"tokenizer-indented-code",title:"@yozora/tokenizer-indented-code",sidebar_label:"indented-code"},sidebar:"Docs",previous:{title:"image-reference",permalink:"/docs/next/package/tokenizer-image-reference"},next:{title:"inline-code",permalink:"/docs/next/package/tokenizer-inline-code"}},m={},k=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],c={toc:k};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("header",null,(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-indented-code"},(0,r.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-indented-code/latest"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-indented-code"},(0,r.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-indented-code.svg"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-indented-code"},(0,r.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-indented-code.svg"})),(0,r.kt)("a",{href:"#install"},(0,r.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,r.kt)("a",{href:"https://github.com/nodejs/node"},(0,r.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-indented-code"})),(0,r.kt)("a",{href:"https://github.com/facebook/jest"},(0,r.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,r.kt)("a",{href:"https://github.com/prettier/prettier"},(0,r.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"github flavor markdown spec",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"An ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#indented-code-block"},"indented code block")," is composed of one or more\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#indented-chunk"},"indented chunk"),"s separated by blank lines. An\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#indented-chunk"},"indented chunk")," is a sequence of non-blank lines, each\nindented four or more spaces. The contents of the code block are the literal\ncontents of the lines, including trailing ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#line-ending"},"line ending"),"s, minus four spaces of\nindentation. An indented code block has no ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#info-string"},"info string"),"."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#indented-code-block"},"github flavor markdown spec"))," for details."),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression."))),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-indented-code\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-indented-code\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"./tokenizer-indented-code"},"@yozora/tokenizer-indented-code")," has been integrated into ",(0,r.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,r.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,r.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly.")),(0,r.kt)(o.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"basic-usage",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./tokenizer-indented-code"},"@yozora/tokenizer-indented-code")," cannot be used alone, it needs to be\nregistered in ",(0,r.kt)("em",{parentName:"p"},"Parser")," as a plugin-in before it can be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport IndentedCodeTokenizer from '@yozora/tokenizer-indented-code'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new IndentedCodeTokenizer())\n\n// parse source markdown content\nparser.parse(`\n    <a/>\n    *hi*\n  \n    - one\n`)\n"))),(0,r.kt)(i.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n    <a/>\n    *hi*\n  \n    - one\n`)\n"))),(0,r.kt)(i.Z,{value:"GfmParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n    <a/>\n    *hi*\n  \n    - one\n`)\n"))),(0,r.kt)(i.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n    <a/>\n    *hi*\n  \n    - one\n`)\n")))),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-indented-code"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"priority")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,r.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."))),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./tokenizer-indented-code"},"@yozora/tokenizer-indented-code")," produce ",(0,r.kt)("a",{parentName:"p",href:"./ast#code"},"Code")," type nodes.\nSee ",(0,r.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Literal } from '@yozora/ast'\n\nexport const CodeType = 'code'\nexport type CodeType = typeof CodeType\n\n/**\n * Code represents a block of preformatted text, such as ASCII art or computer\n * code.\n * @see https://github.com/syntax-tree/mdast#code\n * @see https://github.github.com/gfm/#code-fence\n */\nexport interface Code extends Literal<CodeType> {\n  /**\n   * Language of the codes\n   */\n  lang?: string\n  /**\n   * Meta info string\n   */\n  meta?: string\n}\n")),(0,r.kt)("h2",{id:"live-examples"},"Live Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Basic."),(0,r.kt)(d.Z,{ids:"77",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If there is any ambiguity between an interpretation of indentation as a\ncode block and as indicating that material belongs to a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#list-items"},"list item"),",\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#list-items"},"list item")," interpretation takes precedence."),(0,r.kt)(d.Z,{ids:"78-79",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The contents of a code block are literal text, and do not get parsed as\nMarkdown."),(0,r.kt)(d.Z,{ids:"80",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Here we have three chunks separated by blank lines."),(0,r.kt)(d.Z,{ids:"81",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Any initial spaces beyond four will be included in the content, even in\ninterior blank lines."),(0,r.kt)(d.Z,{ids:"82",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An indented code block cannot interrupt a paragraph. (This allows hanging\nindents and the like.)"),(0,r.kt)(d.Z,{ids:"83",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"However, any non-blank line with fewer than four leading spaces ends the\ncode block immediately. So a paragraph may occur immediately after indented\ncode."),(0,r.kt)(d.Z,{ids:"84",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"And indented code can occur immediately before and after other kinds of\nblocks."),(0,r.kt)(d.Z,{ids:"85",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The first line can be indented more than four spaces."),(0,r.kt)(d.Z,{ids:"86",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Blank lines preceding or following an indented code block are not included\nin it."),(0,r.kt)(d.Z,{ids:"87",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Trailing spaces are included in the code block\u2019s content."),(0,r.kt)(d.Z,{ids:"88",mdxType:"YozoraGFMLive"}))),(0,r.kt)("h2",{id:"related"},"Related"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./tokenizer-fenced-code"},"@yozora/tokenizer-fenced-code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./tokenizer-inline-code"},"@yozora/tokenizer-inline-code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/code#readme"},"@yozora/react-code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/indented-code"},"Sourcecode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ast#code"},"Code| Yozora AST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#indented-code-block"},"Indented code blocks | Github Flavor Markdown Spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#code"},"Code | Mdast"))))}h.isMDXComponent=!0}}]);