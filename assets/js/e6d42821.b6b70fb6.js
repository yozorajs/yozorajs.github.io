"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[1883],{59322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(25487),o=a(86023),p=a(10629);const s={id:"tokenizer-inline-code",title:"@yozora/tokenizer-inline-code",sidebar_label:"inline-code"},l=void 0,m={unversionedId:"package/tokenizer-inline-code",id:"package/tokenizer-inline-code",title:"@yozora/tokenizer-inline-code",description:"<img",source:"@site/docs/package/tokenizer-inline-code.mdx",sourceDirName:"package",slug:"/package/tokenizer-inline-code",permalink:"/docs/next/package/tokenizer-inline-code",draft:!1,tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1685862233,formattedLastUpdatedAt:"Jun 4, 2023",frontMatter:{id:"tokenizer-inline-code",title:"@yozora/tokenizer-inline-code",sidebar_label:"inline-code"},sidebar:"Docs",previous:{title:"indented-code",permalink:"/docs/next/package/tokenizer-indented-code"},next:{title:"inline-math",permalink:"/docs/next/package/tokenizer-inline-math"}},k={},c=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],d={toc:c},h="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("header",null,(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-inline-code"},(0,r.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-inline-code/latest"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-inline-code"},(0,r.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-inline-code.svg"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-inline-code"},(0,r.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-inline-code.svg"})),(0,r.kt)("a",{href:"#install"},(0,r.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,r.kt)("a",{href:"https://github.com/nodejs/node"},(0,r.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-inline-code"})),(0,r.kt)("a",{href:"https://github.com/facebook/jest"},(0,r.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,r.kt)("a",{href:"https://github.com/prettier/prettier"},(0,r.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"github flavor markdown spec",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#backtick-string"},"backtick string")," is a string of one or more backtick\ncharacters (",(0,r.kt)("inlineCode",{parentName:"p"},"`"),") that is neither preceded nor followed by a backtick."),(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#code-span"},"code span")," begins with a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#backtick-string"},"backtick string"),"\nand ends with a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#backtick-string"},"backtick string")," of equal length. The\ncontents of the code span are the characters between the two backtick strings,\nnormalized in the following ways:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"First, ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#line-ending"},"line endings")," are converted to ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"spaces"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the resulting string both begins and ends with a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"space"),"\ncharacter, but does not consist entirely of ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"space")," characters,\na single ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"space")," character is removed from the front and back.\nThis allows you to include code that begins or ends with backtick characters,\nwhich must be separated by ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace")," from the opening or\nclosing backtick strings."))),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#code-span"},"github flavor markdown spec"))," for details."),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression."))),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-inline-code\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-inline-code\n"))),(0,r.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @yozora/tokenizer-inline-code\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"./tokenizer-inline-code"},"@yozora/tokenizer-inline-code")," has been integrated into ",(0,r.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,r.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,r.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly.")),(0,r.kt)(i.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"basic-usage",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./tokenizer-inline-code"},"@yozora/tokenizer-inline-code")," cannot be used alone, it needs to be\nregistered in ",(0,r.kt)("em",{parentName:"p"},"Parser")," as a plugin-in before it can be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport InlineCodeTokenizer from '@yozora/tokenizer-inline-code'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new InlineCodeTokenizer())\n\n// parse source markdown content\nparser.parse(\"`inline code`\")\n"))),(0,r.kt)(o.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(\"`inline code`\")\n"))),(0,r.kt)(o.Z,{value:"GfmParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(\"`inline code`\")\n"))),(0,r.kt)(o.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(\"`inline code`\")\n")))),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-inline-code"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"priority")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,r.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Exception:")," Delimiters of type ",(0,r.kt)("inlineCode",{parentName:"p"},"full")," are always processed before other type\ndelimiters."))),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./tokenizer-inline-code"},"@yozora/tokenizer-inline-code")," produce ",(0,r.kt)("a",{parentName:"p",href:"./ast#inlinecode"},"InlineCode")," type nodes.\nSee ",(0,r.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Literal } from '@yozora/ast'\n\nexport const InlineCodeType = 'inlineCode'\nexport type InlineCodeType = typeof InlineCodeType\n\n/**\n * InlineCode represents a fragment of computer code, such as a file name,\n * computer program, or anything a computer could parse.\n * @see https://github.com/syntax-tree/mdast#inline-code\n * @see https://github.github.com/gfm/#code-span\n */\nexport type InlineCode = Literal<InlineCodeType>\n")),(0,r.kt)("h2",{id:"live-examples"},"Live Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Basic."),(0,r.kt)(p.Z,{ids:"338",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Here two backticks are used, because the code contains a backtick. This\nexample also illustrates stripping of a single leading and trailing space."),(0,r.kt)(p.Z,{ids:"339",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This example shows the motivation for stripping leading and trailing spaces."),(0,r.kt)(p.Z,{ids:"340",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Note that only one space is stripped."),(0,r.kt)(p.Z,{ids:"341",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The stripping only happens if the space is on both sides of the string."),(0,r.kt)(p.Z,{ids:"342",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Only ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"spaces"),", and not ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#unicode-whitespace"},"unicode whitespace"),"\nin general, are stripped in this way."),(0,r.kt)(p.Z,{ids:"343",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"No stripping occurs if the code span contains only ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"spaces"),"."),(0,r.kt)(p.Z,{ids:"344",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#line-ending"},"Line endings")," are treated like ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"spaces"),"."),(0,r.kt)(p.Z,{ids:"345-346",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interior spaces are not collapsed."),(0,r.kt)(p.Z,{ids:"347",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Note that backslash escapes do not work in code spans. All backslashes are\ntreated literally."),(0,r.kt)(p.Z,{ids:"348",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Backslash escapes are never needed, because one can always choose a string\nof ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," backtick characters as delimiters, where the code does not contain\nany strings of exactly ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," backtick characters."),(0,r.kt)(p.Z,{ids:"349-350",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Code span backticks have higher precedence than any other inline constructs\nexcept HTML tags and autolinks. Thus, for example, this is not parsed as\nemphasized text, since the second ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," is part of a code span."),(0,r.kt)(p.Z,{ids:"351",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"And this is not parsed as a link."),(0,r.kt)(p.Z,{ids:"352",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Code spans, HTML tags, and autolinks have the same precedence. Thus, this\nis code span."),(0,r.kt)(p.Z,{ids:"353",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"But this is an HTML tag."),(0,r.kt)(p.Z,{ids:"354",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"And this is code."),(0,r.kt)(p.Z,{ids:"355",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"But this is an autolink."),(0,r.kt)(p.Z,{ids:"356",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When a backtick string is not closed by a matching backtick string, we just\nhave literal backticks."),(0,r.kt)(p.Z,{ids:"357-358",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The following case also illustrates the need for opening and closing\nbacktick strings to be equal in length."),(0,r.kt)(p.Z,{ids:"359",mdxType:"YozoraGFMLive"}))),(0,r.kt)("h2",{id:"related"},"Related"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./tokenizer-fenced-code"},"@yozora/tokenizer-fenced-code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./tokenizer-indented-code"},"@yozora/tokenizer-indented-code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/inline-code#readme"},"@yozora/react-inline-code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/inline-code"},"Sourcecode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ast#inlinecode"},"InlineCode| Yozora AST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#code-span"},"Code spans | Github Flavor Markdown Spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#inlinecode"},"InlineCode | Mdast"))))}g.isMDXComponent=!0}}]);