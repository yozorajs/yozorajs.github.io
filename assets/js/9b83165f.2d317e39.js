(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[9169],{3879:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return k},default:function(){return h}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=n(3918),p=n(5074),s=n(4372),l={id:"tokenizer-definition",title:"@yozora/tokenizer-definition",sidebar_label:"definition"},m=void 0,d={unversionedId:"package/tokenizer-definition",id:"package/tokenizer-definition",isDocsHomePage:!1,title:"@yozora/tokenizer-definition",description:"<img",source:"@site/docs/package/tokenizer-definition.mdx",sourceDirName:"package",slug:"/package/tokenizer-definition",permalink:"/docs/package/tokenizer-definition",version:"current",lastUpdatedAt:1627811092,formattedLastUpdatedAt:"8/1/2021",frontMatter:{id:"tokenizer-definition",title:"@yozora/tokenizer-definition",sidebar_label:"definition"},sidebar:"Docs",previous:{title:"break",permalink:"/docs/package/tokenizer-break"},next:{title:"delete",permalink:"/docs/package/tokenizer-delete"}},k=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[]},{value:"Types",id:"types",children:[]}]},{value:"Live Examples",id:"live-examples",children:[]},{value:"Related",id:"related",children:[]}],c={toc:k};function h(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("header",null,(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-definition"},(0,r.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-definition.svg"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-definition"},(0,r.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-definition.svg"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-definition"},(0,r.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-definition.svg"})),(0,r.kt)("a",{href:"#install"},(0,r.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,r.kt)("a",{href:"https://github.com/nodejs/node"},(0,r.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-definition"})),(0,r.kt)("a",{href:"https://github.com/facebook/jest"},(0,r.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,r.kt)("a",{href:"https://github.com/prettier/prettier"},(0,r.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"github flavor markdown spec")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-reference-definition"},"link reference definition")," consists of a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-label"},"link label"),", indented up to three spaces, followed by a\ncolon (",(0,r.kt)("inlineCode",{parentName:"p"},":"),"), optional ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace")," (including up to one\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#line-ending"},"line ending"),"), a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-destination"},"link destination"),",\noptional ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace")," (including up to one ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"line ending"),"),\nand an optional ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-title"},"link title"),", which if it is present must be\nseparated from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-destination"},"link destination")," by ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),".\nNo further ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#non-whitespace-character"},"non-whitespace characters")," may occur\non the line."),(0,r.kt)("p",{parentName:"div"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-reference-definition"},"link reference definition")," does not correspond to a\nstructural element of a document. Instead, it defines a label which can be used\nin ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#reference-link"},"reference link"),"s and reference-style ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#images"},"images"),"\nelsewhere in the document. ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-reference-definition"},"Link reference definitions")," can\ncome either before or after the links that use them."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#link-reference-definition"},"github flavor markdown spec"))," for details."),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression.")))),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(o.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-definition\n"))),(0,r.kt)(p.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-definition\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-definition"},"@yozora/tokenizer-definition")," has been integrated into ",(0,r.kt)("a",{parentName:"p",href:"/docs/package/parser"},"@yozora/parser")," / ",(0,r.kt)("a",{parentName:"p",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,r.kt)("a",{parentName:"p",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly."))),(0,r.kt)(o.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,r.kt)(p.Z,{value:"basic-usage",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-definition"},"@yozora/tokenizer-definition")," cannot be used alone, it needs to be\nregistered in ",(0,r.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport DefinitionTokenizer from '@yozora/tokenizer-definition'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new DefinitionTokenizer())\n\n// parse source markdown content\nparser.parse(`\n[foo]: /url '\ntitle\nline1\nline2\n'\n\n[foo]\n`)\n"))),(0,r.kt)(p.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n[foo]: /url '\ntitle\nline1\nline2\n'\n\n[foo]\n`)\n"))),(0,r.kt)(p.Z,{value:"GfmParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n[foo]: /url '\ntitle\nline1\nline2\n'\n\n[foo]\n`)\n"))),(0,r.kt)(p.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n[foo]: /url '\ntitle\nline1\nline2\n'\n\n[foo]\n`)\n")))),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-definition"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"priority")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,r.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."))),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-definition"},"@yozora/tokenizer-definition")," produce ",(0,r.kt)("a",{parentName:"p",href:"/docs/package/ast#definition"},"Definition")," type nodes.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/docs/package/ast"},"@yozora/ast")," for full base types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { YastAssociation, YastNode, YastResource  } from '@yozora/ast'\n\nexport const DefinitionType = 'definition'\nexport type DefinitionType = typeof DefinitionType\n\n/**\n * Definition represents a resource.\n * @see https://github.com/syntax-tree/mdast#definition\n * @see https://github.github.com/gfm/#link-reference-definitions\n */\nexport interface Definition extends\n  YastNode<DefinitionType>,\n  YastAssociation,\n  YastResource {}\n")),(0,r.kt)("h2",{id:"live-examples"},"Live Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Basic."),(0,r.kt)(s.Z,{ids:"161-164",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The title may extend over multiple lines."),(0,r.kt)(s.Z,{ids:"165",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"However, it may not contain a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#blank-line"},"blank line"),"."),(0,r.kt)(s.Z,{ids:"166",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The title may be omitted."),(0,r.kt)(s.Z,{ids:"167",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The link destination may not be omitted."),(0,r.kt)(s.Z,{ids:"168",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"However, an empty link destination may be specified using angle brackets."),(0,r.kt)(s.Z,{ids:"169",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The title must be separated from the link destination by whitespace."),(0,r.kt)(s.Z,{ids:"170",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Both title and destination can contain backslash escapes and literal\nbackslashes."),(0,r.kt)(s.Z,{ids:"171",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A link can come before its corresponding definition."),(0,r.kt)(s.Z,{ids:"172",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If there are several matching definitions, the first one takes precedence."),(0,r.kt)(s.Z,{ids:"173",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As noted in the section on ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#inline-link"},"Links"),", matching of labels is\ncase-insensitive (see matches)."),(0,r.kt)(s.Z,{ids:"174-175",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Here is a link reference definition with no corresponding link. It\ncontributes nothing to the document."),(0,r.kt)(s.Z,{ids:"176-177",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This is not a link reference definition, because there are\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#non-whitespace-character"},"non-whitespace characters")," after the title."),(0,r.kt)(s.Z,{ids:"178",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This is a link reference definition, but it has no title."),(0,r.kt)(s.Z,{ids:"179",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This is not a link reference definition, because it is indented four spaces."),(0,r.kt)(s.Z,{ids:"180",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This is not a link reference definition, because it occurs inside a code\nblock."),(0,r.kt)(s.Z,{ids:"181",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-reference-definition"},"link reference definition")," cannot interrupt a\nparagraph."),(0,r.kt)(s.Z,{ids:"182",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"However, it can directly follow other block elements, such as headings and\nthematic breaks, and it need not be followed by a blank line."),(0,r.kt)(s.Z,{ids:"183-185",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Several ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-reference-definition"},"link reference definitions")," can occur one\nafter another, without intervening blank lines."),(0,r.kt)(s.Z,{ids:"186",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-reference-definition"},"Link reference definitions")," can occur inside block\ncontainers, like lists and block quotations. They affect the entire\ndocument, not just the container in which they are defined."),(0,r.kt)(s.Z,{ids:"187",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Whether something is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-reference-definition"},"link reference definition")," is\nindependent of whether the link reference it defines is used in the\ndocument. Thus, for example, the following document contains just a link\nreference definition, and no visible content."),(0,r.kt)(s.Z,{ids:"188",initialExpanded:!1,mdxType:"YozoraGFMLive"}))),(0,r.kt)("h2",{id:"related"},"Related"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/package/ast"},"@yozora/ast")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/package/parser"},"@yozora/parser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/definition"},"Sourcecode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#link-reference-definition"},"Link reference definitions | Github Flavor Markdown Spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#definition"},"Definition | Mdast"))))}h.isMDXComponent=!0}}]);