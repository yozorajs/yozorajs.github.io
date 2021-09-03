"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[4684],{5408:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return k},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return h},default:function(){return f}});var n=a(7462),r=a(3366),i=(a(7294),a(4137)),l=a(7358),o=a(8448),p=a(2758),s=["components"],k={id:"tokenizer-link-reference",title:"@yozora/tokenizer-link-reference",sidebar_label:"link-reference"},m=void 0,c={unversionedId:"package/tokenizer-link-reference",id:"package/tokenizer-link-reference",isDocsHomePage:!1,title:"@yozora/tokenizer-link-reference",description:"<img",source:"@site/docs/package/tokenizer-link-reference.mdx",sourceDirName:"package",slug:"/package/tokenizer-link-reference",permalink:"/docs/package/tokenizer-link-reference",tags:[],version:"current",lastUpdatedAt:1630668328,formattedLastUpdatedAt:"9/3/2021",frontMatter:{id:"tokenizer-link-reference",title:"@yozora/tokenizer-link-reference",sidebar_label:"link-reference"},sidebar:"Docs",previous:{title:"link",permalink:"/docs/package/tokenizer-link"},next:{title:"list",permalink:"/docs/package/tokenizer-list"}},h=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[]},{value:"Types",id:"types",children:[]}]},{value:"Live Examples",id:"live-examples",children:[{value:"Full reference link",id:"full-reference-link-1",children:[]},{value:"Collapsed reference link",id:"collapsed-reference-link-1",children:[]},{value:"Shortcut reference link",id:"shortcut-reference-link-1",children:[]}]},{value:"Related",id:"related",children:[]}],d={toc:h};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("header",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-link-reference"},(0,i.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-link-reference.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-link-reference"},(0,i.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-link-reference.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-link-reference"},(0,i.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-link-reference.svg"})),(0,i.kt)("a",{href:"#install"},(0,i.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,i.kt)("a",{href:"https://github.com/nodejs/node"},(0,i.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-link-reference"})),(0,i.kt)("a",{href:"https://github.com/facebook/jest"},(0,i.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,i.kt)("a",{href:"https://github.com/prettier/prettier"},(0,i.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"github flavor markdown spec")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There are three kinds of ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#reference-link"},"reference links"),":\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#full-reference-link"},"full"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#collapsed-reference-link"},"collapsed"),",\nand ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#shortcut-reference-link"},"shortcut"),"."),(0,i.kt)("h3",{parentName:"div",id:"full-reference-link"},"Full reference link"),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#full-reference-link"},"full reference link")," consists of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-text"},"link text"),"\nimmediately followed by a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-label"},"link label")," that matches a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-reference-definition"},"link reference definition")," elsewhere in the document."),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-label"},"link label")," begins with a left bracket (",(0,i.kt)("inlineCode",{parentName:"p"},"["),") and ends with\nthe first right bracket (",(0,i.kt)("inlineCode",{parentName:"p"},"]"),") that is not backslash-escaped. Between these\nbrackets there must be at least one ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#non-whitespace-character"},"non-whitespace character"),".\nUnescaped square bracket characters are not allowed inside the opening and\nclosing square brackets of ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-label"},"link labels"),". A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-label"},"link label"),"\ncan have at most ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"999")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"999")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"9"),(0,i.kt)("span",{parentName:"span",className:"mord"},"9"),(0,i.kt)("span",{parentName:"span",className:"mord"},"9")))))," characters inside the square brackets."),(0,i.kt)("p",{parentName:"div"},"One label ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#matches"},"matches")," another just in case their normalized forms\nare equal. To normalize a label, strip off the opening and closing brackets,\nperform the Unicode case fold, strip leading and trailing ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace"),"\nand collapse consecutive internal ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace")," to a single\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"space"),". If there are multiple matching\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-reference-definition"},"reference link definitions"),", the one that comes first in\nthe document is used. (It is desirable in such cases to emit a warning.)"),(0,i.kt)("p",{parentName:"div"},"The link\u2019s URI and title are provided by the matching\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-reference-definition"},"link reference definition"),"."),(0,i.kt)("h3",{parentName:"div",id:"collapsed-reference-link"},"Collapsed reference link"),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#collapsed-reference-link"},"collapsed reference link")," consists of a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-label"},"link label")," that matches a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-reference-definition"},"link reference definition"),"\nelsewhere in the document, followed by the string ",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),". The contents of the\nfirst link label are parsed as inlines, which are used as the link\u2019s text.\nThe link\u2019s URI and title are provided by the matching reference link definition.\nThus, ",(0,i.kt)("inlineCode",{parentName:"p"},"[foo][]")," is equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"[foo][foo]"),"."),(0,i.kt)("h3",{parentName:"div",id:"shortcut-reference-link"},"Shortcut reference link"),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#shortcut-reference-link"},"shortcut reference link")," consists of a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-label"},"link label")," that matches a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-reference-definition"},"link reference definition"),"\nelsewhere in the document and is not followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," or a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-label"},"link label"),".\nThe contents of the first ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-label"},"link label")," are parsed as ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#inlines"},"inlines"),",\nwhich are used as the link\u2019s text. The link\u2019s URI and title are provided by\nthe matching ","[link reference definition][gfm-link-definiiton]",". Thus, ",(0,i.kt)("inlineCode",{parentName:"p"},"[foo]")," is\nequivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"[foo][]"),"."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#reference-link"},"github flavor markdown spec"))," for details."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression.")))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(l.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-link-reference\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-link-reference\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-link-reference"},"@yozora/tokenizer-link-reference")," has been integrated into ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/parser"},"@yozora/parser")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly."))),(0,i.kt)(l.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"basic-usage",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-link-reference"},"@yozora/tokenizer-link-reference")," cannot be used alone, it needs to be\nregistered in ",(0,i.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport LinkReferenceTokenizer from '@yozora/tokenizer-link-reference'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new LinkReferenceTokenizer())\n\n// parse source markdown content\nparser.parse(`\n[foo][bar]\n\n[bar]: /url \"title\"\n`)\n"))),(0,i.kt)(o.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n[foo][bar]\n\n[bar]: /url \"title\"\n`)\n"))),(0,i.kt)(o.Z,{value:"GfmParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n[foo][bar]\n\n[bar]: /url \"title\"\n`)\n"))),(0,i.kt)(o.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n[foo][bar]\n\n[bar]: /url \"title\"\n`)\n")))),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-link-reference"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"priority")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.LINKS"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,i.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Exception:")," Delimiters of type ",(0,i.kt)("inlineCode",{parentName:"p"},"full")," are always processed before other type\ndelimiters."))),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-link-reference"},"@yozora/tokenizer-link-reference")," produce ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/ast#linkreference"},"LinkReference")," type nodes.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/ast"},"@yozora/ast")," for full base types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {\nYastAssociation,\nYastParent,\nYastReference,\n} from '@yozora/ast'\n\nexport const LinkReferenceType = 'linkReference'\nexport type LinkReferenceType = typeof LinkReferenceType\n\n/**\n* LinkReference represents a hyperlink through association, or its original\n* source if there is no association.\n* @see https://github.com/syntax-tree/mdast#linkreference\n* @see https://github.github.com/gfm/#reference-link\n*/\nexport interface LinkReference extends\nYastParent<LinkReferenceType>,\nYastAssociation,\nYastReference {}\n")),(0,i.kt)("h2",{id:"live-examples"},"Live Examples"),(0,i.kt)("h3",{id:"full-reference-link-1"},"Full reference link"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Basic."),(0,i.kt)(p.Z,{ids:"535",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The link text may contain balanced brackets, but not unbalanced ones,\nunless they are escaped."),(0,i.kt)(p.Z,{ids:"536-537",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The link text may contain inline content."),(0,i.kt)(p.Z,{ids:"538-539",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"However, links may not contain other links, at any level of nesting."),(0,i.kt)(p.Z,{ids:"540-541",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The following cases illustrate the precedence of\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-text"},"link text")," grouping over ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#can-open-emphasis"},"emphasis")," grouping."),(0,i.kt)(p.Z,{ids:"542-543",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"These cases illustrate the precedence of HTML tags, ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#code-span"},"code spans"),",\nand ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#autolinks"},"autolinks")," over link grouping."),(0,i.kt)(p.Z,{ids:"544-546",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Matching is case-insensitive."),(0,i.kt)(p.Z,{ids:"547",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unicode case fold is used."),(0,i.kt)(p.Z,{ids:"548",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Consecutive internal ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace")," is treated as one\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"space")," for purposes of determining matching."),(0,i.kt)(p.Z,{ids:"549",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"No whitespace is allowed between the ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-text"},"link text")," and the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-label"},"link label"),"."),(0,i.kt)(p.Z,{ids:"550-551",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When there are multiple matching ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-reference-definition"},"link reference definitions"),",\nthe first is used."),(0,i.kt)(p.Z,{ids:"552",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Note that matching is performed on normalized strings, not parsed inline\ncontent. So the following does not match, even though the labels define\nequivalent inline content."),(0,i.kt)(p.Z,{ids:"553",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-label"},"Link labels")," cannot contain brackets, unless they are\nbackslash-escaped."),(0,i.kt)(p.Z,{ids:"554-557",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Note that in this example ",(0,i.kt)("inlineCode",{parentName:"p"},"]")," is not backslash-escaped."),(0,i.kt)(p.Z,{ids:"558",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-label"},"link label")," must contain at least one\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#non-whitespace-character"},"non-whitespace character"),"."),(0,i.kt)(p.Z,{ids:"559-560",mdxType:"YozoraGFMLive"}))),(0,i.kt)("h3",{id:"collapsed-reference-link-1"},"Collapsed reference link"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Basic."),(0,i.kt)(p.Z,{ids:"561-562",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The link labels are case-insensitive."),(0,i.kt)(p.Z,{ids:"563",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As with full reference links, ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace")," is not allowed\nbetween the two sets of brackets."),(0,i.kt)(p.Z,{ids:"564",mdxType:"YozoraGFMLive"}))),(0,i.kt)("h3",{id:"shortcut-reference-link-1"},"Shortcut reference link"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Basic."),(0,i.kt)(p.Z,{ids:"565-568",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The link labels are case-insensitive."),(0,i.kt)(p.Z,{ids:"569",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A space after the link text should be preserved."),(0,i.kt)(p.Z,{ids:"570",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you just want bracketed text, you can backslash-escape the opening\nbracket to avoid links."),(0,i.kt)(p.Z,{ids:"571",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Note that this is a link, because a link label ends with the first following\nclosing bracket."),(0,i.kt)(p.Z,{ids:"572",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Full and compact references take precedence over shortcut references."),(0,i.kt)(p.Z,{ids:"573-574",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inline links also take precedence."),(0,i.kt)(p.Z,{ids:"575-576",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the following case ",(0,i.kt)("inlineCode",{parentName:"p"},"[bar][baz]")," is parsed as a reference, ",(0,i.kt)("inlineCode",{parentName:"p"},"[foo]")," as\nnormal text."),(0,i.kt)(p.Z,{ids:"577",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Here, though, ",(0,i.kt)("inlineCode",{parentName:"p"},"[foo][bar]")," is parsed as a reference, since ",(0,i.kt)("inlineCode",{parentName:"p"},"[bar]")," is defined."),(0,i.kt)(p.Z,{ids:"578",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"[foo]")," is not parsed as a shortcut reference, because it is followed\nby a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-label"},"link label")," (even though ",(0,i.kt)("inlineCode",{parentName:"p"},"[bar]")," is not defined)."),(0,i.kt)(p.Z,{ids:"579",mdxType:"YozoraGFMLive"}))),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/ast"},"@yozora/ast")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser"},"@yozora/parser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-autolink"},"@yozora/tokenizer-autolink")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-autolink-extension"},"@yozora/tokenizer-autolink-extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-definition"},"@yozora/tokenizer-definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-link"},"@yozora/tokenizer-link")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/link#readme"},"@yozora/react-link")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/link-reference"},"Sourcecode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/ast#linkreference"},"LinkReference | Yozora AST")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#reference-link"},"Reference links | Github Flavor Markdown Spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#linkreference"},"LinkReference | Mdast"))))}f.isMDXComponent=!0}}]);