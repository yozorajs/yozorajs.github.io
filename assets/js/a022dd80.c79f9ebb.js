"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[9841],{5967:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return k},metadata:function(){return d},toc:function(){return h},default:function(){return g}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=n(7225),p=n(8448),l=n(9430),m=["components"],s={id:"tokenizer-html-block",title:"@yozora/tokenizer-html-block",sidebar_label:"html-block"},k=void 0,d={unversionedId:"package/tokenizer-html-block",id:"package/tokenizer-html-block",title:"@yozora/tokenizer-html-block",description:"<img",source:"@site/docs/package/tokenizer-html-block.mdx",sourceDirName:"package",slug:"/package/tokenizer-html-block",permalink:"/docs/next/package/tokenizer-html-block",tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1641643814,formattedLastUpdatedAt:"1/8/2022",frontMatter:{id:"tokenizer-html-block",title:"@yozora/tokenizer-html-block",sidebar_label:"html-block"},sidebar:"Docs",previous:{title:"heading",permalink:"/docs/next/package/tokenizer-heading"},next:{title:"html-inline",permalink:"/docs/next/package/tokenizer-html-inline"}},h=[{value:"Install",id:"install",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[],level:3},{value:"Types",id:"types",children:[],level:3}],level:2},{value:"Live Examples",id:"live-examples",children:[],level:2},{value:"Related",id:"related",children:[],level:2}],c={toc:h};function g(e){var t=e.components,n=(0,i.Z)(e,m);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("header",null,(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-html-block"},(0,r.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-html-block/latest"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-html-block"},(0,r.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-html-block.svg"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-html-block"},(0,r.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-html-block.svg"})),(0,r.kt)("a",{href:"#install"},(0,r.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,r.kt)("a",{href:"https://github.com/nodejs/node"},(0,r.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-html-block"})),(0,r.kt)("a",{href:"https://github.com/facebook/jest"},(0,r.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,r.kt)("a",{href:"https://github.com/prettier/prettier"},(0,r.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"github flavor markdown spec")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"An ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#html-block"},"HTML block")," is a group of lines that is treated as raw HTML\n(and will not be escaped in HTML output)."),(0,r.kt)("p",{parentName:"div"},"There are seven kinds of ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#html-block"},"HTML block"),", which can be defined by\ntheir start and end conditions. The block begins with a line that meets a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#start-condition"},"start condition")," (after up to three spaces optional\nindentation). It ends with the first subsequent line that meets a matching\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#end-condition"},"end condition"),", or the last line of the document, or the\nlast line of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#container-blocks"},"container block")," containing the current\nHTML block, if no line is encountered that meets the ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#end-condition"},"end condition"),".\nIf the first line meets both the ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#start-condition"},"start condition")," and the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#end-condition"},"end condition"),", the block will contain just that line."),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start condition:")," line begins with the string ",(0,r.kt)("inlineCode",{parentName:"p"},"<script"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<pre"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"<style"),"\n(case-insensitive), followed by whitespace, the string ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", or the end of the\nline."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"End condition:")," line contains an end tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<\/script>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"</pre>"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"</style>"),"\n(case-insensitive; it need not match the start tag).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start condition:")," line begins with the string ",(0,r.kt)("inlineCode",{parentName:"p"},"\x3c!--"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"End condition:")," line contains the string ",(0,r.kt)("inlineCode",{parentName:"p"},"--\x3e"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start condition:")," line begins with the string ",(0,r.kt)("inlineCode",{parentName:"p"},"<?"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"End condition:")," line contains the string ",(0,r.kt)("inlineCode",{parentName:"p"},"?>"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start condition:")," line begins with the string ",(0,r.kt)("inlineCode",{parentName:"p"},"<!")," followed by an\nuppercase ASCII letter."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"End condition:")," line contains the character ",(0,r.kt)("inlineCode",{parentName:"p"},">"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start condition:")," line begins with the string ",(0,r.kt)("inlineCode",{parentName:"p"},"<![CDATA["),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"End condition:")," line contains the string ",(0,r.kt)("inlineCode",{parentName:"p"},"]]>"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start condition:")," line begins the string ",(0,r.kt)("inlineCode",{parentName:"p"},"<")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"</")," followed by one of\nthe strings (case-insensitive) ",(0,r.kt)("inlineCode",{parentName:"p"},"address"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"article"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"aside"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"base"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"basefont"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"blockquote"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"body"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"caption"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"center"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"col"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"colgroup"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"dd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"details"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dialog"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dir"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"div"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fieldset"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"figcaption"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"figure"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"footer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"form"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"frame"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"frameset"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"h1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"h2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"h3"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"h4"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"h5"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"h6"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"head"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"header"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hr"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"html"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"legend"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"li"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"link"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"main"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"menu"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"menuitem"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nav"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"noframes"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ol"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"optgroup"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"option"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"param"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"section"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"source"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"summary"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"table"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tbody"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"td"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tfoot"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"th"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"thead"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tr"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"track"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ul"),", followed by ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),",\nthe end of the line, the string ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", or the string ",(0,r.kt)("inlineCode",{parentName:"p"},"/>"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"End condition:")," line is followed by a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#blank-line"},"blank line"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start condition:")," line begins with a complete ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#open-tag"},"open tag"),"\n(with any ","[tag name]","gfm-tag-name other than ",(0,r.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"style"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"pre"),") or a\ncomplete ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#closing-tag"},"closing tag"),", followed only by\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace")," or the end of the line."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"End condition:")," line is followed by a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#blank-line"},"blank line"),"."))),(0,r.kt)("p",{parentName:"div"},"HTML blocks continue until they are closed by their appropriate\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#end-condition"},"end condition"),", or the last line of the document or other\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#container-blocks"},"container block"),". This means any HTML ",(0,r.kt)("strong",{parentName:"p"},"within an HTML block"),"\nthat might otherwise be recognised as a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#start-condition"},"start condition"),"\nwill be ignored by the parser and passed through as-is, without changing the\nparser\u2019s state."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#html-block"},"github flavor markdown spec"))," for details."),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression.")))),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-html-block\n"))),(0,r.kt)(p.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-html-block\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"./tokenizer-html-block"},"@yozora/tokenizer-html-block")," has been integrated into ",(0,r.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,r.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,r.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly."))),(0,r.kt)(o.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"basic-usage",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./tokenizer-html-block"},"@yozora/tokenizer-html-block")," cannot be used alone, it needs to be\nregistered in ",(0,r.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport HtmlBlockTokenizer from '@yozora/tokenizer-html-block'\n\nconst parser = new DefaultYastParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new HtmlBlockTokenizer())\n\n// parse source markdown content\nparser.parse(`\n<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\nokay\n`)\n"))),(0,r.kt)(p.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\nokay\n`)\n"))),(0,r.kt)(p.Z,{value:"GfmParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\nokay\n`)\n"))),(0,r.kt)(p.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\nokay\n`)\n")))),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-html-block"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"priority")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,r.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."))),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./tokenizer-html-block"},"@yozora/tokenizer-html-block")," produce ",(0,r.kt)("a",{parentName:"p",href:"./ast#ihtml"},"IHtml")," type nodes.\nSee ",(0,r.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { IYastLiteral } from '@yozora/ast'\n\nexport const HtmlType = 'html'\nexport type HtmlType = typeof HtmlType\n\n/**\n * HTML (Literal) represents a fragment of raw HTML.\n * @see https://github.com/syntax-tree/mdast#html\n * @see https://github.github.com/gfm/#html-blocks\n * @see https://github.github.com/gfm/#raw-html\n */\nexport type IHtml = IYastLiteral<HtmlType>\n")),(0,r.kt)("h2",{id:"live-examples"},"Live Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Condition 1)"),(0,r.kt)(l.Z,{ids:"139-147",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comment (Condition 2)"),(0,r.kt)(l.Z,{ids:"148",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Processing instruction (Condition 3)"),(0,r.kt)(l.Z,{ids:"149",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Declaration (Condition 4)"),(0,r.kt)(l.Z,{ids:"150",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CDATA (Condition 5)"),(0,r.kt)(l.Z,{ids:"151",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Condition 6)"),(0,r.kt)(l.Z,{ids:"119",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Condition 7)"),(0,r.kt)(l.Z,{ids:"133",mdxType:"YozoraGFMLive"}))),(0,r.kt)("h2",{id:"related"},"Related"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./tokenizer-html-inline"},"@yozora/tokenizer-html-inline")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/html-block"},"Sourcecode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ast#ihtml"},"IHtml | Yozora AST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#html-block"},"HTML blocks | Github Flavor Markdown Spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#html"},"HTML | Mdast"))))}g.isMDXComponent=!0}}]);