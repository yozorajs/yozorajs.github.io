"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[714],{46231:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return h},default:function(){return u},frontMatter:function(){return l},metadata:function(){return k},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(5529),p=a(68111),m=a(29430),s=["components"],l={id:"tokenizer-html-inline",title:"@yozora/tokenizer-html-inline",sidebar_label:"html-inline"},h=void 0,k={unversionedId:"package/tokenizer-html-inline",id:"version-1.x.x/package/tokenizer-html-inline",title:"@yozora/tokenizer-html-inline",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/tokenizer-html-inline.mdx",sourceDirName:"package",slug:"/package/tokenizer-html-inline",permalink:"/docs/1.x.x/package/tokenizer-html-inline",draft:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1652709647,formattedLastUpdatedAt:"5/16/2022",frontMatter:{id:"tokenizer-html-inline",title:"@yozora/tokenizer-html-inline",sidebar_label:"html-inline"},sidebar:"Docs",previous:{title:"html-block",permalink:"/docs/1.x.x/package/tokenizer-html-block"},next:{title:"image",permalink:"/docs/1.x.x/package/tokenizer-image"}},c={},d=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],g={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("header",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-html-inline"},(0,i.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-html-inline/v1.x.x"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-html-inline"},(0,i.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-html-inline.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-html-inline"},(0,i.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-html-inline.svg"})),(0,i.kt)("a",{href:"#install"},(0,i.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,i.kt)("a",{href:"https://github.com/nodejs/node"},(0,i.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-html-inline"})),(0,i.kt)("a",{href:"https://github.com/facebook/jest"},(0,i.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,i.kt)("a",{href:"https://github.com/prettier/prettier"},(0,i.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"github flavor markdown spec")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Text between ",(0,i.kt)("inlineCode",{parentName:"p"},"<")," and ",(0,i.kt)("inlineCode",{parentName:"p"},">")," that looks like an HTML tag is parsed as a raw HTML tag\nand will be rendered in HTML without escaping. Tag and attribute names are not\nlimited to current HTML tags, so custom tags (and even, say, DocBook tags) may\nbe used."),(0,i.kt)("p",{parentName:"div"},"Here is the grammar for tags:"),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#tag-name"},"tag name")," consists of an ASCII letter followed by zero or more\nASCII letters, digits, or hyphens (",(0,i.kt)("inlineCode",{parentName:"p"},"-"),")."),(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute"},"attribute")," consists of ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),", an\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute-name"},"attribute name"),", and an optional\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute-value-specification"},"attribute value specification"),"."),(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute-name"},"attribute name")," consists of an ASCII letter, ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},":"),",\nfollowed by zero or more ASCII letters, digits, ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"."),", ",(0,i.kt)("inlineCode",{parentName:"p"},":"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),". (Note:\nThis is the XML specification restricted to ASCII. HTML5 is laxer.)"),(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute-value-specification"},"attribute value specification")," consists of optional\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," character, optional ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),",\nand an ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute-value"},"attribute value"),"."),(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute-value"},"attribute value")," consists of an\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#unquoted-attribute-value"},"unquoted attribute value"),", a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#single-quoted-attribute-value"},"single-quoted attribute value"),", or a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#double-quoted-attribute-value"},"double-quoted attribute value"),"."),(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#unquoted-attribute-value"},"unquoted attribute value")," is a nonempty\nstring of characters not including ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"="),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,i.kt)("inlineCode",{parentName:"p"},">"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"`"),"."),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#single-quoted-attribute-value"},"single-quoted attribute value")," consists of\n",(0,i.kt)("inlineCode",{parentName:"p"},"'"),", zero or more characters not including ",(0,i.kt)("inlineCode",{parentName:"p"},"'"),", and a final ",(0,i.kt)("inlineCode",{parentName:"p"},"'"),"."),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#double-quoted-attribute-value"},"double-quoted attribute value")," consists of\n",(0,i.kt)("inlineCode",{parentName:"p"},'"'),", zero or more characters not including ",(0,i.kt)("inlineCode",{parentName:"p"},'"'),", and a final ",(0,i.kt)("inlineCode",{parentName:"p"},'"'),"."),(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#open-tag"},"open tag")," consists of a ",(0,i.kt)("inlineCode",{parentName:"p"},"<")," character, a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#tag-name"},"tag name"),",\nzero or more ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#attribute"},"attribute"),"s, optional ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),",\nan optional ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," character, and a ",(0,i.kt)("inlineCode",{parentName:"p"},">")," character."),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#closing-tag"},"closing tag")," consists of the string ",(0,i.kt)("inlineCode",{parentName:"p"},"</"),", a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#tag-name"},"tag name"),",\noptional ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),", and the character ",(0,i.kt)("inlineCode",{parentName:"p"},">"),"."),(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#html-comment"},"HTML comment")," consists of ",(0,i.kt)("inlineCode",{parentName:"p"},"\x3c!--")," + text + ",(0,i.kt)("inlineCode",{parentName:"p"},"--\x3e"),", where\ntext does not start with ",(0,i.kt)("inlineCode",{parentName:"p"},">")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"->"),", does not end with ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),", and does not\ncontain ",(0,i.kt)("inlineCode",{parentName:"p"},"--"),". (See the ",(0,i.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/html5/syntax.html#comments"},"HTML5 spec"),".)"),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#processing-instruction"},"processing instruction")," consists of the string\n",(0,i.kt)("inlineCode",{parentName:"p"},"<?"),", a string of characters not including the string ",(0,i.kt)("inlineCode",{parentName:"p"},"?>"),", and the string ",(0,i.kt)("inlineCode",{parentName:"p"},"?>"),"."),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#declaration"},"declaration")," consists of the string ",(0,i.kt)("inlineCode",{parentName:"p"},"<!"),", a name consisting\nof one or more uppercase ASCII letters, ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),", a string\nof characters not including the character ",(0,i.kt)("inlineCode",{parentName:"p"},">"),", and the character ",(0,i.kt)("inlineCode",{parentName:"p"},">"),"."),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#cdata-section"},"CDATA section")," consists of the string ",(0,i.kt)("inlineCode",{parentName:"p"},"<![CDATA["),", a\nstring of characters not including the string ",(0,i.kt)("inlineCode",{parentName:"p"},"]]>"),", and the string ",(0,i.kt)("inlineCode",{parentName:"p"},"]]>"),"."),(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#html-tag"},"HTML tag")," consists of an ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#open-tag"},"open tag"),", a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#closing-tag"},"closing tag"),", an ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#html-comment"},"HTML comment"),", a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#processing-instruction"},"processing instruction"),", a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#declaration"},"declaration"),",\nor a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#cdata-section"},"CDATA section"),"."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#raw-html"},"github flavor markdown spec"))," for details."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression.")))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-html-inline\n"))),(0,i.kt)(p.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-html-inline\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"./tokenizer-html-inline"},"@yozora/tokenizer-html-inline")," has been integrated into ",(0,i.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,i.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,i.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly."))),(0,i.kt)(o.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"basic-usage",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./tokenizer-html-inline"},"@yozora/tokenizer-html-inline")," cannot be used alone, it needs to be\nregistered in ",(0,i.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport HtmlInlineTokenizer from '@yozora/tokenizer-html-inline'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new HtmlInlineTokenizer())\n\n// parse source markdown content\nparser.parse(`\n<a><bab><c2c>\n\nfoo <?php echo $a; ?>\n`)\n"))),(0,i.kt)(p.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n<a><bab><c2c>\n\nfoo <?php echo $a; ?>\n`)\n"))),(0,i.kt)(p.Z,{value:"GfmParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n<a><bab><c2c>\n\nfoo <?php echo $a; ?>\n`)\n"))),(0,i.kt)(p.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n<a><bab><c2c>\n\nfoo <?php echo $a; ?>\n`)\n")))),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-html-inline"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"priority")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,i.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Exception:")," Delimiters of type ",(0,i.kt)("inlineCode",{parentName:"p"},"full")," are always processed before other type\ndelimiters."))),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./tokenizer-html-inline"},"@yozora/tokenizer-html-inline")," produce ",(0,i.kt)("a",{parentName:"p",href:"./ast#html"},"Html")," type nodes.\nSee ",(0,i.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { YastLiteral } from '@yozora/ast'\n\nexport const HtmlType = 'html'\nexport type HtmlType = typeof HtmlType\n\n/**\n * HTML (Literal) represents a fragment of raw HTML.\n * @see https://github.com/syntax-tree/mdast#html\n * @see https://github.github.com/gfm/#html-blocks\n * @see https://github.github.com/gfm/#raw-html\n */\nexport type Html = YastLiteral<HtmlType>\n")),(0,i.kt)("h2",{id:"live-examples"},"Live Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Opening."),(0,i.kt)(m.Z,{ids:"632-641",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Closing."),(0,i.kt)(m.Z,{ids:"642",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Comments."),(0,i.kt)(m.Z,{ids:"644-646",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Processing instruction."),(0,i.kt)(m.Z,{ids:"647",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Declaration."),(0,i.kt)(m.Z,{ids:"648",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CDATA section."),(0,i.kt)(m.Z,{ids:"649",mdxType:"YozoraGFMLive"}))),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./tokenizer-html-block"},"@yozora/tokenizer-html-block")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/tokenizers/html-inline"},"Sourcecode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ast#html"},"Html | Yozora AST")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#raw-html"},"Raw HTML| Github Flavor Markdown Spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#html"},"HTML | Mdast"))))}u.isMDXComponent=!0}}]);