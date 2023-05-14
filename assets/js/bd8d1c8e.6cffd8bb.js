"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[714],{46231:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>m,metadata:()=>s,toc:()=>k});var n=a(87462),r=(a(67294),a(3905)),i=a(73992),o=a(18679),p=a(32707);const m={id:"tokenizer-html-inline",title:"@yozora/tokenizer-html-inline",sidebar_label:"html-inline"},l=void 0,s={unversionedId:"package/tokenizer-html-inline",id:"version-1.x.x/package/tokenizer-html-inline",title:"@yozora/tokenizer-html-inline",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/tokenizer-html-inline.mdx",sourceDirName:"package",slug:"/package/tokenizer-html-inline",permalink:"/docs/1.x.x/package/tokenizer-html-inline",draft:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1684057460,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{id:"tokenizer-html-inline",title:"@yozora/tokenizer-html-inline",sidebar_label:"html-inline"},sidebar:"Docs",previous:{title:"html-block",permalink:"/docs/1.x.x/package/tokenizer-html-block"},next:{title:"image",permalink:"/docs/1.x.x/package/tokenizer-image"}},h={},k=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],g={toc:k},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("header",null,(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-html-inline"},(0,r.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-html-inline/v1.x.x"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-html-inline"},(0,r.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-html-inline.svg"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-html-inline"},(0,r.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-html-inline.svg"})),(0,r.kt)("a",{href:"#install"},(0,r.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,r.kt)("a",{href:"https://github.com/nodejs/node"},(0,r.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-html-inline"})),(0,r.kt)("a",{href:"https://github.com/facebook/jest"},(0,r.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,r.kt)("a",{href:"https://github.com/prettier/prettier"},(0,r.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"github flavor markdown spec",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Text between ",(0,r.kt)("inlineCode",{parentName:"p"},"<")," and ",(0,r.kt)("inlineCode",{parentName:"p"},">")," that looks like an HTML tag is parsed as a raw HTML tag\nand will be rendered in HTML without escaping. Tag and attribute names are not\nlimited to current HTML tags, so custom tags (and even, say, DocBook tags) may\nbe used."),(0,r.kt)("p",{parentName:"admonition"},"Here is the grammar for tags:"),(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#tag-name"},"tag name")," consists of an ASCII letter followed by zero or more\nASCII letters, digits, or hyphens (",(0,r.kt)("inlineCode",{parentName:"p"},"-"),")."),(0,r.kt)("p",{parentName:"admonition"},"An ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute"},"attribute")," consists of ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),", an\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute-name"},"attribute name"),", and an optional\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute-value-specification"},"attribute value specification"),"."),(0,r.kt)("p",{parentName:"admonition"},"An ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute-name"},"attribute name")," consists of an ASCII letter, ",(0,r.kt)("inlineCode",{parentName:"p"},"_"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},":"),",\nfollowed by zero or more ASCII letters, digits, ",(0,r.kt)("inlineCode",{parentName:"p"},"_"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"."),", ",(0,r.kt)("inlineCode",{parentName:"p"},":"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),". (Note:\nThis is the XML specification restricted to ASCII. HTML5 is laxer.)"),(0,r.kt)("p",{parentName:"admonition"},"An ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute-value-specification"},"attribute value specification")," consists of optional\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," character, optional ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),",\nand an ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute-value"},"attribute value"),"."),(0,r.kt)("p",{parentName:"admonition"},"An ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute-value"},"attribute value")," consists of an\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#unquoted-attribute-value"},"unquoted attribute value"),", a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#single-quoted-attribute-value"},"single-quoted attribute value"),", or a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#double-quoted-attribute-value"},"double-quoted attribute value"),"."),(0,r.kt)("p",{parentName:"admonition"},"An ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#unquoted-attribute-value"},"unquoted attribute value")," is a nonempty\nstring of characters not including ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"="),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"`"),"."),(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#single-quoted-attribute-value"},"single-quoted attribute value")," consists of\n",(0,r.kt)("inlineCode",{parentName:"p"},"'"),", zero or more characters not including ",(0,r.kt)("inlineCode",{parentName:"p"},"'"),", and a final ",(0,r.kt)("inlineCode",{parentName:"p"},"'"),"."),(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#double-quoted-attribute-value"},"double-quoted attribute value")," consists of\n",(0,r.kt)("inlineCode",{parentName:"p"},'"'),", zero or more characters not including ",(0,r.kt)("inlineCode",{parentName:"p"},'"'),", and a final ",(0,r.kt)("inlineCode",{parentName:"p"},'"'),"."),(0,r.kt)("p",{parentName:"admonition"},"An ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#open-tag"},"open tag")," consists of a ",(0,r.kt)("inlineCode",{parentName:"p"},"<")," character, a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#tag-name"},"tag name"),",\nzero or more ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute"},"attribute"),"s, optional ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),",\nan optional ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," character, and a ",(0,r.kt)("inlineCode",{parentName:"p"},">")," character."),(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#closing-tag"},"closing tag")," consists of the string ",(0,r.kt)("inlineCode",{parentName:"p"},"</"),", a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#tag-name"},"tag name"),",\noptional ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),", and the character ",(0,r.kt)("inlineCode",{parentName:"p"},">"),"."),(0,r.kt)("p",{parentName:"admonition"},"An ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#html-comment"},"HTML comment")," consists of ",(0,r.kt)("inlineCode",{parentName:"p"},"\x3c!--")," + text + ",(0,r.kt)("inlineCode",{parentName:"p"},"--\x3e"),", where\ntext does not start with ",(0,r.kt)("inlineCode",{parentName:"p"},">")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"->"),", does not end with ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),", and does not\ncontain ",(0,r.kt)("inlineCode",{parentName:"p"},"--"),". (See the ",(0,r.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/html5/syntax.html#comments"},"HTML5 spec"),".)"),(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#processing-instruction"},"processing instruction")," consists of the string\n",(0,r.kt)("inlineCode",{parentName:"p"},"<?"),", a string of characters not including the string ",(0,r.kt)("inlineCode",{parentName:"p"},"?>"),", and the string ",(0,r.kt)("inlineCode",{parentName:"p"},"?>"),"."),(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#declaration"},"declaration")," consists of the string ",(0,r.kt)("inlineCode",{parentName:"p"},"<!"),", a name consisting\nof one or more uppercase ASCII letters, ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),", a string\nof characters not including the character ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", and the character ",(0,r.kt)("inlineCode",{parentName:"p"},">"),"."),(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#cdata-section"},"CDATA section")," consists of the string ",(0,r.kt)("inlineCode",{parentName:"p"},"<![CDATA["),", a\nstring of characters not including the string ",(0,r.kt)("inlineCode",{parentName:"p"},"]]>"),", and the string ",(0,r.kt)("inlineCode",{parentName:"p"},"]]>"),"."),(0,r.kt)("p",{parentName:"admonition"},"An ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#html-tag"},"HTML tag")," consists of an ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#open-tag"},"open tag"),", a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#closing-tag"},"closing tag"),", an ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#html-comment"},"HTML comment"),", a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#processing-instruction"},"processing instruction"),", a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#declaration"},"declaration"),",\nor a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#cdata-section"},"CDATA section"),"."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#raw-html"},"github flavor markdown spec"))," for details."),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression."))),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-html-inline\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-html-inline\n"))),(0,r.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @yozora/tokenizer-html-inline\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"./tokenizer-html-inline"},"@yozora/tokenizer-html-inline")," has been integrated into ",(0,r.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,r.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,r.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly.")),(0,r.kt)(i.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"basic-usage",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./tokenizer-html-inline"},"@yozora/tokenizer-html-inline")," cannot be used alone, it needs to be\nregistered in ",(0,r.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport HtmlInlineTokenizer from '@yozora/tokenizer-html-inline'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new HtmlInlineTokenizer())\n\n// parse source markdown content\nparser.parse(`\n<a><bab><c2c>\n\nfoo <?php echo $a; ?>\n`)\n"))),(0,r.kt)(o.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n<a><bab><c2c>\n\nfoo <?php echo $a; ?>\n`)\n"))),(0,r.kt)(o.Z,{value:"GfmParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n<a><bab><c2c>\n\nfoo <?php echo $a; ?>\n`)\n"))),(0,r.kt)(o.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n<a><bab><c2c>\n\nfoo <?php echo $a; ?>\n`)\n")))),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-html-inline"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"priority")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,r.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Exception:")," Delimiters of type ",(0,r.kt)("inlineCode",{parentName:"p"},"full")," are always processed before other type\ndelimiters."))),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./tokenizer-html-inline"},"@yozora/tokenizer-html-inline")," produce ",(0,r.kt)("a",{parentName:"p",href:"./ast#html"},"Html")," type nodes.\nSee ",(0,r.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { YastLiteral } from '@yozora/ast'\n\nexport const HtmlType = 'html'\nexport type HtmlType = typeof HtmlType\n\n/**\n * HTML (Literal) represents a fragment of raw HTML.\n * @see https://github.com/syntax-tree/mdast#html\n * @see https://github.github.com/gfm/#html-blocks\n * @see https://github.github.com/gfm/#raw-html\n */\nexport type Html = YastLiteral<HtmlType>\n")),(0,r.kt)("h2",{id:"live-examples"},"Live Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Opening."),(0,r.kt)(p.Z,{ids:"632-641",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Closing."),(0,r.kt)(p.Z,{ids:"642",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comments."),(0,r.kt)(p.Z,{ids:"644-646",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Processing instruction."),(0,r.kt)(p.Z,{ids:"647",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Declaration."),(0,r.kt)(p.Z,{ids:"648",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CDATA section."),(0,r.kt)(p.Z,{ids:"649",mdxType:"YozoraGFMLive"}))),(0,r.kt)("h2",{id:"related"},"Related"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./tokenizer-html-block"},"@yozora/tokenizer-html-block")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/tokenizers/html-inline"},"Sourcecode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ast#html"},"Html | Yozora AST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#raw-html"},"Raw HTML| Github Flavor Markdown Spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#html"},"HTML | Mdast"))))}u.isMDXComponent=!0}}]);