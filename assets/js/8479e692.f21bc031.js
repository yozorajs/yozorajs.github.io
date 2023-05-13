"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[1771],{34928:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),i=a(25487),s=a(86023),p=a(10629);const o={id:"tokenizer-setext-heading",title:"@yozora/tokenizer-setext-heading",sidebar_label:"setext-heading"},m=void 0,l={unversionedId:"package/tokenizer-setext-heading",id:"version-2.x.x/package/tokenizer-setext-heading",title:"@yozora/tokenizer-setext-heading",description:"<img",source:"@site/versioned_docs/version-2.x.x/package/tokenizer-setext-heading.mdx",sourceDirName:"package",slug:"/package/tokenizer-setext-heading",permalink:"/docs/package/tokenizer-setext-heading",draft:!1,tags:[],version:"2.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1683986667,formattedLastUpdatedAt:"May 13, 2023",frontMatter:{id:"tokenizer-setext-heading",title:"@yozora/tokenizer-setext-heading",sidebar_label:"setext-heading"},sidebar:"Docs",previous:{title:"paragraph",permalink:"/docs/package/tokenizer-paragraph"},next:{title:"table",permalink:"/docs/package/tokenizer-table"}},h={},d=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],k={toc:d};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("header",null,(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-setext-heading"},(0,r.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-setext-heading/latest"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-setext-heading"},(0,r.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-setext-heading.svg"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-setext-heading"},(0,r.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-setext-heading.svg"})),(0,r.kt)("a",{href:"#install"},(0,r.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,r.kt)("a",{href:"https://github.com/nodejs/node"},(0,r.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-setext-heading"})),(0,r.kt)("a",{href:"https://github.com/facebook/jest"},(0,r.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,r.kt)("a",{href:"https://github.com/prettier/prettier"},(0,r.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"github flavor markdown spec",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#setext-heading"},"setext heading")," consists of one or more lines of text,\neach containing at least one ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#non-whitespace-character"},"non-whitespace character"),",\nwith no more than ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"3")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"3")))))," spaces indentation, followed by a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#setext-heading-underline"},"setext heading underline"),". The lines of text must\nbe such that, were they not followed by the setext heading underline, they would\nbe interpreted as a paragraph: they cannot be interpretable as a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#code-fence"},"code fence"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#atx-heading"},"ATX heading"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#block-quotes"},"block quote"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#thematic-break"},"thematic break"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#list-items"},"list item"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#html-block"},"HTML block"),"."),(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#setext-heading-underline"},"setext heading underline")," is a sequence of ",(0,r.kt)("inlineCode",{parentName:"p"},"="),"\ncharacters or a sequence of ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," characters, with no more than ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"3")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"3")))))," spaces\nindentation and any number of trailing spaces. If a line containing a single ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),"\ncan be interpreted as an empty ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#list-items"},"list items"),", it should be\ninterpreted this way and not as a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#setext-heading-underline"},"setext heading underline"),"."),(0,r.kt)("p",{parentName:"admonition"},"The heading is a level ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1")))))," heading if ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," characters are used in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#setext-heading-underline"},"setext heading underline"),", and a level ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"2")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"))))),"\nheading if ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," characters are used. The contents of the heading are the result\nof parsing the preceding lines of text as CommonMark inline content."),(0,r.kt)("p",{parentName:"admonition"},"In general, a setext heading need not be preceded or followed by a blank line.\nHowever, it cannot interrupt a paragraph, so when a setext heading comes after\na paragraph, a blank line is needed between them."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#setext-heading"},"github flavor markdown spec"))," for details."),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression."))),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-setext-heading\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-setext-heading\n"))),(0,r.kt)(s.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @yozora/tokenizer-setext-heading\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"./tokenizer-setext-heading"},"@yozora/tokenizer-setext-heading")," has been integrated into ",(0,r.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,r.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,r.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly.")),(0,r.kt)(i.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"basic-usage",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./tokenizer-setext-heading"},"@yozora/tokenizer-setext-heading")," cannot be used alone, it needs to be\nregistered in ",(0,r.kt)("em",{parentName:"p"},"Parser")," as a plugin-in before it can be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport SetextHeadingTokenizer from '@yozora/tokenizer-setext-heading'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new SetextHeadingTokenizer())\n\n// parse source markdown content\nparser.parse(`\nFoo *bar*\n=========\n\nFoo *bar*\n---------\n`)\n"))),(0,r.kt)(s.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\nFoo *bar*\n=========\n\nFoo *bar*\n---------\n`)\n"))),(0,r.kt)(s.Z,{value:"GfmParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\nFoo *bar*\n=========\n\nFoo *bar*\n---------\n`)\n"))),(0,r.kt)(s.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\nFoo *bar*\n=========\n\nFoo *bar*\n---------\n`)\n")))),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-setext-heading"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"priority")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,r.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."))),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./tokenizer-setext-heading"},"@yozora/tokenizer-setext-heading")," produce ",(0,r.kt)("a",{parentName:"p",href:"./ast#heading"},"Heading")," type nodes.\nSee ",(0,r.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Parent } from '@yozora/ast'\n\nexport const HeadingType = 'heading'\nexport type HeadingType = typeof HeadingType\n\n/**\n * Heading represents a heading of a section.\n * @see https://github.com/syntax-tree/mdast#heading\n * @see https://github.github.com/gfm/#atx-heading\n */\nexport interface Heading extends Parent<HeadingType> {\n  /**\n   * HTML anchor identifier.\n   */\n  identifier?: string\n  /**\n   * level of heading\n   */\n  depth: 1 | 2 | 3 | 4 | 5 | 6\n}\n")),(0,r.kt)("h2",{id:"live-examples"},"Live Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Basic."),(0,r.kt)(p.Z,{ids:"50",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The content of the header may span more than one line."),(0,r.kt)(p.Z,{ids:"51",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The contents are the result of parsing the headings\u2019s raw content as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#inlines"},"inlines"),". The heading\u2019s raw content is formed by concatenating\nthe lines and removing initial and final ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),"."),(0,r.kt)(p.Z,{ids:"52",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The underlining can be any length"),(0,r.kt)(p.Z,{ids:"53",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The heading content can be indented up to three spaces, and need not line\nup with the underlining."),(0,r.kt)(p.Z,{ids:"54",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Four spaces indent is too much"),(0,r.kt)(p.Z,{ids:"55,57",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The setext heading underline can be indented up to three spaces, and may\nhave trailing spaces."),(0,r.kt)(p.Z,{ids:"56",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The setext heading underline cannot contain internal spaces."),(0,r.kt)(p.Z,{ids:"58",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Trailing spaces in the content line do not cause a line break."),(0,r.kt)(p.Z,{ids:"59",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nor does a backslash at the end."),(0,r.kt)(p.Z,{ids:"60",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Since indicators of block structure take precedence over indicators of\ninline structure, the following are setext headings."),(0,r.kt)(p.Z,{ids:"61",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The setext heading underline cannot be a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#lazy-continuation-line"},"lazy continuation line"),"\nin a list item or block quote."),(0,r.kt)(p.Z,{ids:"62-64",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A blank line is needed between a paragraph and a following setext heading,\nsince otherwise the paragraph becomes part of the heading\u2019s content."),(0,r.kt)(p.Z,{ids:"65",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"But in general a blank line is not required before or after setext headings."),(0,r.kt)(p.Z,{ids:"66",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setext headings cannot be empty."),(0,r.kt)(p.Z,{ids:"67",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setext heading text lines must not be interpretable as block constructs\nother than paragraphs. So, the line of dashes in these examples gets\ninterpreted as a thematic break."),(0,r.kt)(p.Z,{ids:"68-71",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you want a heading with > foo as its literal text, you can use backslash\nescapes."),(0,r.kt)(p.Z,{ids:"72",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Authors who want interpretation 2 can put blank lines around the thematic\nbreak or use a thematic break that cannot count as a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#setext-heading-underline"},"setext heading underline"),"."),(0,r.kt)(p.Z,{ids:"74-75",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Authors who want interpretation 3 can use backslash escapes."),(0,r.kt)(p.Z,{ids:"76",mdxType:"YozoraGFMLive"}))),(0,r.kt)("h2",{id:"related"},"Related"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./tokenizer-heading"},"@yozora/tokenizer-heading")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/heading#readme"},"@yozora/react-heading")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/setext-heading"},"Sourcecode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ast#heading"},"Heading | Yozora AST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#setext-heading"},"Setext headings | Github Flavor Markdown Spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#heading"},"Heading | Mdast"))))}g.isMDXComponent=!0}}]);