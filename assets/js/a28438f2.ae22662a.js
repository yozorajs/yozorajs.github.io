(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[1890],{4851:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return k},default:function(){return c}});var n=a(2122),i=a(9756),r=(a(7294),a(4137)),s=a(7358),o=a(8448),l=a(627),p={id:"tokenizer-list",title:"@yozora/tokenizer-list",sidebar_label:"list"},m=void 0,d={unversionedId:"package/tokenizer-list",id:"package/tokenizer-list",isDocsHomePage:!1,title:"@yozora/tokenizer-list",description:"<img",source:"@site/docs/package/tokenizer-list.mdx",sourceDirName:"package",slug:"/package/tokenizer-list",permalink:"/docs/package/tokenizer-list",version:"current",lastUpdatedAt:1625751455,formattedLastUpdatedAt:"7/8/2021",frontMatter:{id:"tokenizer-list",title:"@yozora/tokenizer-list",sidebar_label:"list"},sidebar:"Docs",previous:{title:"link-reference",permalink:"/docs/package/tokenizer-link-reference"},next:{title:"list-item",permalink:"/docs/package/tokenizer-list-item"}},k=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[]},{value:"Types",id:"types",children:[]}]},{value:"Live Examples",id:"live-examples",children:[]},{value:"Related",id:"related",children:[]}],h={toc:k};function c(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("header",null,(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-list"},(0,r.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-list.svg"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-list"},(0,r.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-list.svg"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-list"},(0,r.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-list.svg"})),(0,r.kt)("a",{href:"#install"},(0,r.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,r.kt)("a",{href:"https://github.com/nodejs/node"},(0,r.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-list"})),(0,r.kt)("a",{href:"https://github.com/facebook/jest"},(0,r.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,r.kt)("a",{href:"https://github.com/prettier/prettier"},(0,r.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,r.kt)("br",null),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"github flavor markdown spec")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#lists"},"list")," is a sequence of one or more list items\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#of-the-same-type"},"of the same type"),". The list items may be separated by any\nnumber of blank lines."),(0,r.kt)("p",{parentName:"div"},"Two list items are ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#of-the-same-type"},"of the same type")," if they begin with\na ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#list-marker"},"list marker")," of the same type. Two list markers are of the\nsame type if"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(a) they are ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#bullet-list-marker"},"bullet list markers")," using the same\ncharacter (",(0,r.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),") or")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(b) they are ordered list numbers with the same delimiter (either ",(0,r.kt)("inlineCode",{parentName:"p"},".")," or ",(0,r.kt)("inlineCode",{parentName:"p"},")"),")."))),(0,r.kt)("p",{parentName:"div"},"A list is an ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#ordered-list"},"ordered list")," if its constituent list items\nbegin with ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#ordered-list-marker"},"ordered list markers"),", and a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#bullet-list"},"bullet list")," if its constituent list items begin with\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#bullet-list-marker"},"bullet list markers"),"."),(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#start-number"},"start number")," of an ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#ordered-list"},"ordered list")," is\ndetermined by the list number of its initial list item. The numbers of\nsubsequent list items are disregarded."),(0,r.kt)("p",{parentName:"div"},"A list is ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#loose"},"loose")," if any of its constituent list items are separated\nby ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#blank-line"},"blank line"),"s, or if any of its constituent list items\ndirectly contain two block-level elements with a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#blank-line"},"blank line"),"\nbetween them. Otherwise a list is ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#tight"},"tight"),". (The difference in HTML\noutput is that paragraphs in a loose list are wrapped in ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>")," tags, while\nparagraphs in a tight list are not.)"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#block-quotes"},"github flavor markdown spec"))," for details."),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression.")))),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(s.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-list\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-list\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-list"},"@yozora/tokenizer-list")," has been integrated into ",(0,r.kt)("a",{parentName:"p",href:"/docs/package/parser"},"@yozora/parser")," / ",(0,r.kt)("a",{parentName:"p",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,r.kt)("a",{parentName:"p",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly."))),(0,r.kt)(s.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"basic-usage",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-list"},"@yozora/tokenizer-list")," cannot be used alone, it needs to be\nregistered in ",(0,r.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport ListTokenizer from '@yozora/tokenizer-list'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new ListTokenizer())\n\n// parse source markdown content\nparser.parse(`\n- a\n- b\n  - c\n  - d\n  - e\n- f\n- g\n\n---\n\n- [ ] This is a TODO item.\n- [-] This is a processing TODO item.\n- [x] This is a finished TODO item.\n\n---\n\n1. This is an ordered list item\n\na. This is an another type of ordered list item\n`)\n"))),(0,r.kt)(o.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n- a\n- b\n  - c\n  - d\n  - e\n- f\n- g\n\n---\n\n- [ ] This is a TODO item.\n- [-] This is a processing TODO item.\n- [x] This is a finished TODO item.\n\n---\n\n1. This is an ordered list item\n\na. This is an another type of ordered list item\n`)\n"))),(0,r.kt)(o.Z,{value:"GfmParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n- a\n- b\n  - c\n  - d\n  - e\n- f\n- g\n\n---\n\n- [ ] This is a TODO item.\n- [-] This is a processing TODO item.\n- [x] This is a finished TODO item.\n\n---\n\n1. This is an ordered list item\n\na. This is an another type of ordered list item\n`)\n"))),(0,r.kt)(o.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n- a\n- b\n  - c\n  - d\n  - e\n- f\n- g\n\n---\n\n- [ ] This is a TODO item.\n- [-] This is a processing TODO item.\n- [x] This is a finished TODO item.\n\n---\n\n1. This is an ordered list item\n\na. This is an another type of ordered list item\n`)\n")))),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-list"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"priority")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.CONTAINING_BLOCK"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,r.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."))),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-list"},"@yozora/tokenizer-list")," produce ",(0,r.kt)("a",{parentName:"p",href:"/docs/package/ast#list"},"List")," type nodes.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/docs/package/ast"},"@yozora/ast")," for full base types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { ListItem, YastParent } from '@yozora/ast'\n\nexport const ListType = 'list'\nexport type ListType = typeof ListType\n\n/**\n * List represents a list of items.\n * @see https://github.com/syntax-tree/mdast#list\n * @see https://github.github.com/gfm/#list\n */\nexport interface List extends YastParent<ListType> {\n  /**\n   * Whether it is an ordered lit.\n   */\n  ordered: boolean\n  /**\n   * The starting number of a ordered list-item.\n   */\n  start?: number\n  /**\n   * Marker of a unordered list-item, or delimiter of an ordered list-item.\n   */\n  marker: number\n  /**\n   * Whether if the list is loose.\n   * @see https://github.github.com/gfm/#loose\n   */\n  spread: boolean\n  /**\n   * Lists are container block.\n   */\n  children: ListItem[]\n}\n")),(0,r.kt)("h2",{id:"live-examples"},"Live Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Basic."),(0,r.kt)(l.Z,{ids:"281-283",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In order to solve of unwanted lists in paragraphs with hard-wrapped\nnumerals, we allow only lists starting with ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1")))))," to interrupt paragraphs."),(0,r.kt)(l.Z,{ids:"284-285",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There can be any number of blank lines between items."),(0,r.kt)(l.Z,{ids:"286-287",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To separate consecutive lists of the same type, or to separate a list from\nan indented code block that would otherwise be parsed as a subparagraph of\nthe final list item, you can insert a blank HTML comment."),(0,r.kt)(l.Z,{ids:"288-289",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"List items need not be indented to the same level. The following list items\nwill be treated as items at the same list level, since none is indented\nenough to belong to the previous list item."),(0,r.kt)(l.Z,{ids:"290-291",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Note, however, that list items may not be indented more than three spaces.\nHere ",(0,r.kt)("inlineCode",{parentName:"p"},"- e")," is treated as a paragraph continuation line, because it is\nindented more than three spaces."),(0,r.kt)(l.Z,{ids:"292",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"And here, ",(0,r.kt)("inlineCode",{parentName:"p"},"3. c")," is treated as in indented code block, because it is indented\nfour spaces and preceded by a blank line."),(0,r.kt)(l.Z,{ids:"293",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This is a loose list, because there is a blank line between two of the\nlist items."),(0,r.kt)(l.Z,{ids:"294",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"So is this, with a empty second item."),(0,r.kt)(l.Z,{ids:"295",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"These are loose lists, even though there is no space between the items,\nbecause one of the items directly contains two block-level elements with a\nblank line between them."),(0,r.kt)(l.Z,{ids:"296-297",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This is a tight list, because the blank lines are in a code block."),(0,r.kt)(l.Z,{ids:"298",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This is a tight list, because the blank line is between two paragraphs of a\nsublist. So the sublist is loose while the outer list is tight."),(0,r.kt)(l.Z,{ids:"299",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This is a tight list, because the blank line is inside the block quote."),(0,r.kt)(l.Z,{ids:"300",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This list is tight, because the consecutive block elements are not\nseparated by blank lines."),(0,r.kt)(l.Z,{ids:"301",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A single-paragraph list is tight."),(0,r.kt)(l.Z,{ids:"302-303",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This list is loose, because of the blank line between the two block elements\nin the list item."),(0,r.kt)(l.Z,{ids:"304",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Here the outer list is loose, the inner list tight."),(0,r.kt)(l.Z,{ids:"305-306",initialExpanded:!1,mdxType:"YozoraGFMLive"}))),(0,r.kt)("h2",{id:"related"},"Related"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/package/ast"},"@yozora/ast")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/package/parser"},"@yozora/parser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-list-item"},"@yozora/tokenizer-list-item")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/list"},"Sourcecode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#lists"},"Lists | Github Flavor Markdown Spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#list"},"List | Mdast"))))}c.isMDXComponent=!0}}]);