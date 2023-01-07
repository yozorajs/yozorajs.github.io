"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[2628],{82235:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>k,toc:()=>d});var n=a(87462),i=(a(67294),a(3905)),r=a(94828),o=a(86023),p=a(10629);const l={id:"tokenizer-link",title:"@yozora/tokenizer-link",sidebar_label:"link"},s=void 0,k={unversionedId:"package/tokenizer-link",id:"version-1.x.x/package/tokenizer-link",title:"@yozora/tokenizer-link",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/tokenizer-link.mdx",sourceDirName:"package",slug:"/package/tokenizer-link",permalink:"/docs/1.x.x/package/tokenizer-link",draft:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1673091576,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{id:"tokenizer-link",title:"@yozora/tokenizer-link",sidebar_label:"link"},sidebar:"Docs",previous:{title:"inline-math",permalink:"/docs/1.x.x/package/tokenizer-inline-math"},next:{title:"link-reference",permalink:"/docs/1.x.x/package/tokenizer-link-reference"}},m={},d=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],h={toc:d};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("header",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-link"},(0,i.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-link/v1.x.x"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-link"},(0,i.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-link.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-link"},(0,i.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-link.svg"})),(0,i.kt)("a",{href:"#install"},(0,i.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,i.kt)("a",{href:"https://github.com/nodejs/node"},(0,i.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-link"})),(0,i.kt)("a",{href:"https://github.com/facebook/jest"},(0,i.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,i.kt)("a",{href:"https://github.com/prettier/prettier"},(0,i.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,i.kt)("br",null),(0,i.kt)("admonition",{title:"github flavor markdown spec",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"A link contains ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-text"},"link text")," (the visible text), a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-destination"},"link destination")," (the URI that is the link destination),\nand optionally a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-title"},"link title"),". There are two basic kinds of\nlinks in Markdown. In ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#inline-link"},"inline links")," the destination and title\nare given immediately after the link text. In ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#reference-link"},"reference links"),"\nthe destination and title are defined elsewhere in the document."),(0,i.kt)("p",{parentName:"admonition"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-text"},"link text")," consists of a sequence of zero or more inline\nelements enclosed by square brackets (",(0,i.kt)("inlineCode",{parentName:"p"},"[")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"]"),"). The following rules apply:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Links may not contain other links, at any level of nesting. If multiple\notherwise valid link definitions appear nested inside each other, the\ninner-most definition is used.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Brackets are allowed in the link text only if"),(0,i.kt)("p",{parentName:"li"},"a) they are backslash-escaped or"),(0,i.kt)("p",{parentName:"li"},"b) they appear as a matched pair of brackets, with an open bracket ",(0,i.kt)("inlineCode",{parentName:"p"},"["),", a\nsequence of zero or more inlines, and a close bracket ",(0,i.kt)("inlineCode",{parentName:"p"},"]"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Backtick ","[code spans][gfm-inlnie-code]",", ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#autolinks"},"autolinks"),", and\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#raw-html"},"raw HTML")," tags bind more tightly than the brackets in link\ntext. Thus, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"[foo`]`")," could not be a link text, since the\nsecond ",(0,i.kt)("inlineCode",{parentName:"p"},"]")," is part of a code span.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The brackets in link text bind more tightly than markers for\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#can-open-emphasis"},"emphasis and strong emphasis"),". Thus, for example,\n",(0,i.kt)("inlineCode",{parentName:"p"},"*[foo*](url)")," is a link."))),(0,i.kt)("p",{parentName:"admonition"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-destination"},"link destination")," consists of either"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a sequence of zero or more characters between an opening ",(0,i.kt)("inlineCode",{parentName:"p"},"<")," and a closing\n",(0,i.kt)("inlineCode",{parentName:"p"},">")," that contains no line breaks or unescaped ",(0,i.kt)("inlineCode",{parentName:"p"},"<")," or ",(0,i.kt)("inlineCode",{parentName:"p"},">")," characters, or")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a nonempty sequence of characters that does not start with ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),", does not\ninclude ASCII space or control characters, and includes parentheses only if"),(0,i.kt)("p",{parentName:"li"},"a) they are backslash-escaped or"),(0,i.kt)("p",{parentName:"li"},"b) they are part of a balanced pair of unescaped parentheses.\n(Implementations may impose limits on parentheses nesting to avoid\nperformance issues, but at least three levels of nesting should be supported.)"))),(0,i.kt)("p",{parentName:"admonition"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-title"},"link title")," consists of either"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a sequence of zero or more characters between straight double-quote\ncharacters (",(0,i.kt)("inlineCode",{parentName:"p"},'"'),"), including a ",(0,i.kt)("inlineCode",{parentName:"p"},'"')," character only if it is backslash-escaped,\nor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a sequence of zero or more characters between straight single-quote\ncharacters (",(0,i.kt)("inlineCode",{parentName:"p"},"'"),"), including a ",(0,i.kt)("inlineCode",{parentName:"p"},"'")," character only if it is backslash-escaped,\nor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a sequence of zero or more characters between matching parentheses (",(0,i.kt)("inlineCode",{parentName:"p"},"(...)"),"),\nincluding a ",(0,i.kt)("inlineCode",{parentName:"p"},"(")," or ",(0,i.kt)("inlineCode",{parentName:"p"},")")," character only if it is backslash-escaped."))),(0,i.kt)("p",{parentName:"admonition"},"Although ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-title"},"link titles")," may span multiple lines, they may not\ncontain a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#blank-line"},"blank line"),"."),(0,i.kt)("p",{parentName:"admonition"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#inline-link"},"inline link")," consists of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-text"},"link text"),"\nfollowed immediately by a left parenthesis ",(0,i.kt)("inlineCode",{parentName:"p"},"("),", optional ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),",\nan optional ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-destination"},"link destination"),", an optional\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-title"},"link title")," separated from the link destination by\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),", optional ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),", and a\nright parenthesis ",(0,i.kt)("inlineCode",{parentName:"p"},")"),". The link\u2019s text consists of the inlines contained in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-text"},"link text")," (excluding the enclosing square brackets). The link\u2019s\nURI consists of the link destination, excluding enclosing ",(0,i.kt)("inlineCode",{parentName:"p"},"<...>")," if present,\nwith backslash-escapes in effect as described above. The link\u2019s title consists\nof the link title, excluding its enclosing delimiters, with backslash-escapes\nin effect as described above."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#inline-link"},"github flavor markdown spec"))," for details."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression."))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-link\n"))),(0,i.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-link\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"./tokenizer-link"},"@yozora/tokenizer-link")," has been integrated into ",(0,i.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,i.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,i.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly.")),(0,i.kt)(r.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"basic-usage",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./tokenizer-link"},"@yozora/tokenizer-link")," cannot be used alone, it needs to be\nregistered in ",(0,i.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport LinkTokenizer from '@yozora/tokenizer-link'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new LinkTokenizer())\n\n// parse source markdown content\nparser.parse(`\n[link](/uri \"title\")\n[link](/uri)\n`)\n"))),(0,i.kt)(o.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n[link](/uri \"title\")\n[link](/uri)\n`)\n"))),(0,i.kt)(o.Z,{value:"GfmParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n[link](/uri \"title\")\n[link](/uri)\n`)\n"))),(0,i.kt)(o.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n[link](/uri \"title\")\n[link](/uri)\n`)\n")))),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-link"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"priority")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.LINKS"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,i.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Exception:")," Delimiters of type ",(0,i.kt)("inlineCode",{parentName:"p"},"full")," are always processed before other type\ndelimiters."))),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./tokenizer-link"},"@yozora/tokenizer-link")," produce ",(0,i.kt)("a",{parentName:"p",href:"./ast#link"},"Link")," type nodes.\nSee ",(0,i.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { YatParent, YastResource } from '@yozora/ast'\n\nexport const LinkType = 'link'\nexport type LinkType = typeof LinkType\n\n/**\n * Link represents a hyperlink.\n * @see https://github.com/syntax-tree/mdast#link\n * @see https://github.github.com/gfm/#inline-link\n */\nexport interface Link extends YastParent<LinkType>, YastResource {}\n")),(0,i.kt)("h2",{id:"live-examples"},"Live Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Basic."),(0,i.kt)(p.Z,{ids:"493",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The title may be omitted."),(0,i.kt)(p.Z,{ids:"494",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Both the title and the destination may be omitted."),(0,i.kt)(p.Z,{ids:"495-496",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The destination can only contain spaces if it is enclosed in pointy brackets."),(0,i.kt)(p.Z,{ids:"497-498",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The destination cannot contain line breaks, even if enclosed in pointy\nbrackets."),(0,i.kt)(p.Z,{ids:"499-500",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The destination can contain ",(0,i.kt)("inlineCode",{parentName:"p"},")")," if it is enclosed in pointy brackets."),(0,i.kt)(p.Z,{ids:"501",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pointy brackets that enclose links must be unescaped."),(0,i.kt)(p.Z,{ids:"502",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"These are not links, because the opening pointy bracket is not matched\nproperly."),(0,i.kt)(p.Z,{ids:"503",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Parentheses inside the link destination may be escaped."),(0,i.kt)(p.Z,{ids:"504",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Any number of parentheses are allowed without escaping, as long as they are\nbalanced."),(0,i.kt)(p.Z,{ids:"505",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"However, if you have unbalanced parentheses, you need to escape or use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"<...>")," form."),(0,i.kt)(p.Z,{ids:"506-507",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Parentheses and other symbols can also be escaped, as usual in Markdown."),(0,i.kt)(p.Z,{ids:"508",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A link can contain fragment identifiers and queries."),(0,i.kt)(p.Z,{ids:"509",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Note that a backslash before a non-escapable character is just a backslash."),(0,i.kt)(p.Z,{ids:"510",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Note that, because titles can often be parsed as destinations, if you try to\nomit the destination and keep the title, you\u2019ll get unexpected results."),(0,i.kt)(p.Z,{ids:"512",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Titles may be in single quotes, double quotes, or parentheses."),(0,i.kt)(p.Z,{ids:"513",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Backslash escapes and entity and numeric character references may be used in\ntitles."),(0,i.kt)(p.Z,{ids:"514",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Titles must be separated from the link using a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),".\nOther ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#unicode-whitespace"},"Unicode whitespace")," like non-breaking space\ndoesn\u2019t work."),(0,i.kt)(p.Z,{ids:"515",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Nested balanced quotes are not allowed without escaping."),(0,i.kt)(p.Z,{ids:"516",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"But it is easy to work around this by using a different quote type."),(0,i.kt)(p.Z,{ids:"517",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"[Whitespace][gfm-whitepace]"," is allowed around the destination and title."),(0,i.kt)(p.Z,{ids:"518",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"But it is not allowed between the link text and the following parenthesis."),(0,i.kt)(p.Z,{ids:"519",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The link text may contain balanced brackets, but not unbalanced ones,\nunless they are escaped"),(0,i.kt)(p.Z,{ids:"520-523",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The link text may contain inline content."),(0,i.kt)(p.Z,{ids:"524-525",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"However, links may not contain other links, at any level of nesting."),(0,i.kt)(p.Z,{ids:"526-528",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"These cases illustrate the precedence of link text grouping over emphasis\ngrouping."),(0,i.kt)(p.Z,{ids:"529-530",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Note that brackets that aren\u2019t part of links do not take precedence."),(0,i.kt)(p.Z,{ids:"531",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"These cases illustrate the precedence of HTML tags, ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#code-span"},"code spans"),",\nand ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#autolinks"},"autolinks")," over link grouping."),(0,i.kt)(p.Z,{ids:"532-534",mdxType:"YozoraGFMLive"}))),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./tokenizer-autolink"},"@yozora/tokenizer-autolink")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./tokenizer-autolink-extension"},"@yozora/tokenizer-autolink-extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./tokenizer-link-reference"},"@yozora/tokenizer-link-reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/link#readme"},"@yozora/react-link")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/tokenizers/link"},"Sourcecode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ast#link"},"Link | Yozora AST")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#inline-link"},"Links | Github Flavor Markdown Spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#link"},"Link | Mdast"))))}c.isMDXComponent=!0}}]);