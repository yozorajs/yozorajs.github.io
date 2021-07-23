(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[2349],{448:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var r=a(2122),n=a(9756),i=(a(7294),a(4137)),o=a(7358),l=a(8448),k=a(627),d={id:"parser",title:"@yozora/parser",sidebar_label:"parser"},s=void 0,p={unversionedId:"package/parser",id:"package/parser",isDocsHomePage:!1,title:"@yozora/parser",description:"<img",source:"@site/docs/package/parser.mdx",sourceDirName:"package",slug:"/package/parser",permalink:"/docs/package/parser",version:"current",lastUpdatedAt:1627012380,formattedLastUpdatedAt:"7/23/2021",frontMatter:{id:"parser",title:"@yozora/parser",sidebar_label:"parser"},sidebar:"Docs",previous:{title:"Algorithm",permalink:"/docs/algorithm"},next:{title:"parser-gfm",permalink:"/docs/package/parser-gfm"}},m=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[]}]},{value:"Overview",id:"overview",children:[]},{value:"Live Examples",id:"live-examples",children:[{value:"Thematic break",id:"thematic-break",children:[]},{value:"ATX headings",id:"atx-headings",children:[]},{value:"Setext headings",id:"setext-headings",children:[]},{value:"Indented code blocks",id:"indented-code-blocks",children:[]},{value:"Fenced code blocks",id:"fenced-code-blocks",children:[]},{value:"HTML blocks",id:"html-blocks",children:[]},{value:"Link reference definitions",id:"link-reference-definitions",children:[]},{value:"Paragraphs",id:"paragraphs",children:[]},{value:"Tables (extension)",id:"tables-extension",children:[]},{value:"Block quotes",id:"block-quotes",children:[]},{value:"List items",id:"list-items",children:[]},{value:"Task list items (extension)",id:"task-list-items-extension",children:[]},{value:"Lists",id:"lists",children:[]},{value:"Code spans",id:"code-spans",children:[]},{value:"Emphasis and strong emphasis",id:"emphasis-and-strong-emphasis",children:[]},{value:"Strikethrough (extension)",id:"strikethrough-extension",children:[]},{value:"Links",id:"links",children:[]},{value:"Reference links",id:"reference-links",children:[]},{value:"Images",id:"images",children:[]},{value:"Reference images",id:"reference-images",children:[]},{value:"Autolinks",id:"autolinks",children:[]},{value:"Autolinks (extension)",id:"autolinks-extension",children:[]},{value:"Raw HTML",id:"raw-html",children:[]},{value:"Hard line breaks",id:"hard-line-breaks",children:[]},{value:"Soft line breaks",id:"soft-line-breaks",children:[]},{value:"Textual content",id:"textual-content",children:[]}]},{value:"Related",id:"related",children:[]}],c={toc:m};function h(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("header",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/parser"},(0,i.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/parser.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/parser"},(0,i.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/parser.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/parser"},(0,i.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/parser.svg"})),(0,i.kt)("a",{href:"#install"},(0,i.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,i.kt)("a",{href:"https://github.com/nodejs/node"},(0,i.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/parser"})),(0,i.kt)("a",{href:"https://github.com/facebook/jest"},(0,i.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,i.kt)("a",{href:"https://github.com/prettier/prettier"},(0,i.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,i.kt)("br",null),(0,i.kt)("p",null,"A markdown parser with rich built-in tokenizers."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"github flavor markdown spec")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/"},"github flavor markdown spec"))," for details."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/example/gfm"},"GFM Live Examples"))," for an intuitive impression.")))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(o.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/parser\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/parser\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Basic"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse markdown source content.\nparser.parse('source markdown content')\n\n// parse markdown source content with custom options.\nparser.parse(\n  'source markdown content',  // markdown source contents, `string|Iterable<string>`\n  {},                         // ParseOptions, optional.\n)\n\n// parse multiple markdown source content pieces.\nparser.parse(['source', 'contents'])\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use withing generator: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n/**\n * String stream is supported through the iterator API.\n */\nfunction* source () {\n  yield 'hello',\n  yield 'world',\n}\n\nparser.parse(source())\n")))),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Constructor Options"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"blockFallbackTokenizer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BlockFallbackTokenizer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fallback tokenizer on processing block structure phase")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"inlineFallbackTokenizer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"InlineFallbackTokenizer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fallback tokenizer on processing inline structure phase")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"defaultParseOptions")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ParseOptions")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Default options for ",(0,i.kt)("inlineCode",{parentName:"td"},"parse()")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ParseOptions")),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"shouldReservePosition")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether it is necessary to reserve the position in the YastNode produced")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"presetDefinitions")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Array<Omit<Definition, 'type'>")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Preset definitions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"presetFootnoteDefinitions")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Array<Omit<FootnoteDefinition, 'type'>")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Preset footnote definition")))))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Built-in tokenizers"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All tokenizers for processing tokens defined Github Flavor Markdown:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Tokenizer"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-autolink"},"@yozora/tokenizer-autolink")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#autolinks"},"GFM Autolinks"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-autolink-extension"},"@yozora/tokenizer-autolink-extension")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#autolinks-extension-"},"GFM Autolinks (extension)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-blockquote"},"@yozora/tokenizer-blockquote")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#block-quotes"},"GFM blockquotes"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-break"},"@yozora/tokenizer-break")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#hard-line-break"},"GFM hard line breaks")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#soft-line-breaks"},"GFM soft line breaks"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-definition"},"@yozora/tokenizer-definition")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#reference-link"},"GFM link reference definitions"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-delete"},"@yozora/tokenizer-delete")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#strikethrough-extension-"},"GFM strikethrough (extension)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-emphasis"},"@yozora/tokenizer-emphasis")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#can-open-emphasis"},"GFM emphasis and strong emphasis"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-fenced-code"},"@yozora/tokenizer-fenced-code")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#fenced-code-block"},"GFM fenced code blocks"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-heading"},"@yozora/tokenizer-heading")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#atx-heading"},"GFM ATX headings"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-html-block"},"@yozora/tokenizer-html-block")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#html-block"},"GFM HTML blocks"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-html-inline"},"@yozora/tokenizer-html-inline")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#raw-html"},"GFM raw HTML"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-image"},"@yozora/tokenizer-image")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#images"},"GFM images"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-image-reference"},"@yozora/tokenizer-image-reference")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#example-590"},"GFM reference images"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-indented-code"},"@yozora/tokenizer-indented-code")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#indented-code-block"},"GFM indented code blocks"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-inline-code"},"@yozora/tokenizer-inline-code")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#code-span"},"GFM code spans"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-link"},"@yozora/tokenizer-link")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#inline-link"},"GFM links"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-link-reference"},"@yozora/tokenizer-link-reference")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#reference-link"},"GFM reference links"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-list"},"@yozora/tokenizer-list")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#lists"},"GFM lists"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-list-item"},"@yozora/tokenizer-list-item")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#list-items"},"GFM list items")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#task-list-items-extension-"},"GFM task list items"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-paragraph"},"@yozora/tokenizer-paragraph")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#paragraph"},"GFM paragraphs"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-setext-heading"},"@yozora/tokenizer-setext-heading")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#setext-heading"},"GFM setext headings"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-table"},"@yozora/tokenizer-table")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#table"},"GFM tables"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-text"},"@yozora/tokenizer-text")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#soft-line-breaks"},"GFM textual contents"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-thematic-break"},"@yozora/tokenizer-thematic-break")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve ",(0,i.kt)("a",{parentName:"td",href:"https://github.github.com/gfm/#thematic-break"},"GFM thematic breaks"))))))),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Additional tokenizers"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Tokenizer"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-admonition"},"@yozora/tokenizer-admonition")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve admonitions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-footnote"},"@yozora/tokenizer-footnote")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve footnotes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-footnote-definition"},"@yozora/tokenizer-footnote-definition")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve footnote definitions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-footnote-reference"},"@yozora/tokenizer-footnote-reference")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve footnote references")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-inline-math"},"@yozora/tokenizer-inline-math")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve inline formulas")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/package/tokenizer-math"},"@yozora/tokenizer-math")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve block formulas")))))))),(0,i.kt)("h2",{id:"live-examples"},"Live Examples"),(0,i.kt)("h3",{id:"thematic-break"},"Thematic break"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-thematic-break"},"@yozora/tokenizer-thematic-break")," for details."),(0,i.kt)(k.Z,{ids:"13-31",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"atx-headings"},"ATX headings"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-heading"},"@yozora/tokenizer-heading")," for details."),(0,i.kt)(k.Z,{ids:"32-49",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"setext-headings"},"Setext headings"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-setext-heading"},"@yozora/tokenizer-setext-heading")," for details."),(0,i.kt)(k.Z,{ids:"50-76",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"indented-code-blocks"},"Indented code blocks"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-indented-code"},"@yozora/tokenizer-indented-code")," for details."),(0,i.kt)(k.Z,{ids:"77-88",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"fenced-code-blocks"},"Fenced code blocks"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-fenced-code"},"@yozora/tokenizer-fenced-code")," for details."),(0,i.kt)(k.Z,{ids:"89-117",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"html-blocks"},"HTML blocks"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-html-block"},"@yozora/tokenizer-html-block")," for details."),(0,i.kt)(k.Z,{ids:"118-160",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"link-reference-definitions"},"Link reference definitions"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-definition"},"@yozora/tokenizer-definition")," for details."),(0,i.kt)(k.Z,{ids:"161-188",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"paragraphs"},"Paragraphs"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-paragraph"},"@yozora/tokenizer-paragraph")," for details."),(0,i.kt)(k.Z,{ids:"189-196",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"tables-extension"},"Tables (extension)"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-table"},"@yozora/tokenizer-table")," for details."),(0,i.kt)(k.Z,{ids:"198-205",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"block-quotes"},"Block quotes"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-blockquote"},"@yozora/tokenizer-blockquote")," for details."),(0,i.kt)(k.Z,{ids:"206-230",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"list-items"},"List items"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-list-item"},"@yozora/tokenizer-list-item")," for details."),(0,i.kt)(k.Z,{ids:"231-278",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"task-list-items-extension"},"Task list items (extension)"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-list-item"},"@yozora/tokenizer-list-item")," for details."),(0,i.kt)(k.Z,{ids:"279-280",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"lists"},"Lists"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-list"},"@yozora/tokenizer-list")," for details."),(0,i.kt)(k.Z,{ids:"281-306",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"code-spans"},"Code spans"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-inline-code"},"@yozora/tokenizer-inline-code")," for details."),(0,i.kt)(k.Z,{ids:"338-359",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"emphasis-and-strong-emphasis"},"Emphasis and strong emphasis"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-emphasis"},"@yozora/tokenizer-emphasis")," for details."),(0,i.kt)(k.Z,{ids:"360-490",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"strikethrough-extension"},"Strikethrough (extension)"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-delete"},"@yozora/tokenizer-delete")," for details."),(0,i.kt)(k.Z,{ids:"491-492",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"links"},"Links"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-link"},"@yozora/tokenizer-link")," for details."),(0,i.kt)(k.Z,{ids:"493-534",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"reference-links"},"Reference links"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-link-reference"},"@yozora/tokenizer-link-reference")," for details."),(0,i.kt)(k.Z,{ids:"535-579",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"images"},"Images"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-image"},"@yozora/tokenizer-image")," for details."),(0,i.kt)(k.Z,{ids:"580-589",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"reference-images"},"Reference images"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-image-reference"},"@yozora/tokenizer-image-reference")," for details."),(0,i.kt)(k.Z,{ids:"590-601",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"autolinks"},"Autolinks"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-autolink"},"@yozora/tokenizer-autolink")," for details."),(0,i.kt)(k.Z,{ids:"602-620",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"autolinks-extension"},"Autolinks (extension)"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-autolink-extension"},"@yozora/tokenizer-autolink-extension")," for details."),(0,i.kt)(k.Z,{ids:"621-631",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"raw-html"},"Raw HTML"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-html-inline"},"@yozora/tokenizer-html-inline")," for details."),(0,i.kt)(k.Z,{ids:"632-652",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"hard-line-breaks"},"Hard line breaks"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-break"},"@yozora/tokenizer-break")," for details."),(0,i.kt)(k.Z,{ids:"654-668",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"soft-line-breaks"},"Soft line breaks"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-break"},"@yozora/tokenizer-break")," for details."),(0,i.kt)(k.Z,{ids:"669-670",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h3",{id:"textual-content"},"Textual content"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-text"},"@yozora/tokenizer-text")," for details."),(0,i.kt)(k.Z,{ids:"671-673",initialParserName:"yozora",initialExpanded:!1,mdxType:"YozoraGFMLive"}),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/ast"},"@yozora/ast")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/core-parser"},"@yozora/core-parser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/packages/parser"},"Sourcecode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#thematicbreak"},"Mdast")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/"},"Github Flavor Markdown Spec"))))}h.isMDXComponent=!0}}]);