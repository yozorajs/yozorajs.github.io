"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[4300],{63848:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>h});var n=a(87462),i=(a(67294),a(3905)),r=a(94828),s=a(86023),o=a(10629);const l={id:"tokenizer-list",title:"@yozora/tokenizer-list",sidebar_label:"list"},p=void 0,m={unversionedId:"package/tokenizer-list",id:"version-1.x.x/package/tokenizer-list",title:"@yozora/tokenizer-list",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/tokenizer-list.mdx",sourceDirName:"package",slug:"/package/tokenizer-list",permalink:"/docs/1.x.x/package/tokenizer-list",draft:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1673091576,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{id:"tokenizer-list",title:"@yozora/tokenizer-list",sidebar_label:"list"},sidebar:"Docs",previous:{title:"link-reference",permalink:"/docs/1.x.x/package/tokenizer-link-reference"},next:{title:"list-item",permalink:"/docs/1.x.x/package/tokenizer-list-item"}},k={},h=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],d={toc:h};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("header",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-list"},(0,i.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-list/v1.x.x"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-list"},(0,i.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-list.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-list"},(0,i.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-list.svg"})),(0,i.kt)("a",{href:"#install"},(0,i.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,i.kt)("a",{href:"https://github.com/nodejs/node"},(0,i.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-list"})),(0,i.kt)("a",{href:"https://github.com/facebook/jest"},(0,i.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,i.kt)("a",{href:"https://github.com/prettier/prettier"},(0,i.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,i.kt)("br",null),(0,i.kt)("admonition",{title:"github flavor markdown spec",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#lists"},"list")," is a sequence of one or more list items\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#of-the-same-type"},"of the same type"),". The list items may be separated by any\nnumber of blank lines."),(0,i.kt)("p",{parentName:"admonition"},"Two list items are ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#of-the-same-type"},"of the same type")," if they begin with\na ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#list-marker"},"list marker")," of the same type. Two list markers are of the\nsame type if"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"(a) they are ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#bullet-list-marker"},"bullet list markers")," using the same\ncharacter (",(0,i.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),") or")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"(b) they are ordered list numbers with the same delimiter (either ",(0,i.kt)("inlineCode",{parentName:"p"},".")," or ",(0,i.kt)("inlineCode",{parentName:"p"},")"),")."))),(0,i.kt)("p",{parentName:"admonition"},"A list is an ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#ordered-list"},"ordered list")," if its constituent list items\nbegin with ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#ordered-list-marker"},"ordered list markers"),", and a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#bullet-list"},"bullet list")," if its constituent list items begin with\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#bullet-list-marker"},"bullet list markers"),"."),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#start-number"},"start number")," of an ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#ordered-list"},"ordered list")," is\ndetermined by the list number of its initial list item. The numbers of\nsubsequent list items are disregarded."),(0,i.kt)("p",{parentName:"admonition"},"A list is ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#loose"},"loose")," if any of its constituent list items are separated\nby ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#blank-line"},"blank line"),"s, or if any of its constituent list items\ndirectly contain two block-level elements with a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#blank-line"},"blank line"),"\nbetween them. Otherwise a list is ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#tight"},"tight"),". (The difference in HTML\noutput is that paragraphs in a loose list are wrapped in ",(0,i.kt)("inlineCode",{parentName:"p"},"<p>")," tags, while\nparagraphs in a tight list are not.)"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#block-quotes"},"github flavor markdown spec"))," for details."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression."))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-list\n"))),(0,i.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-list\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"./tokenizer-list"},"@yozora/tokenizer-list")," has been integrated into ",(0,i.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,i.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,i.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly.")),(0,i.kt)(r.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"basic-usage",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./tokenizer-list"},"@yozora/tokenizer-list")," cannot be used alone, it needs to be\nregistered in ",(0,i.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport ListTokenizer from '@yozora/tokenizer-list'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new ListTokenizer())\n\n// parse source markdown content\nparser.parse(`\n- a\n- b\n  - c\n  - d\n  - e\n- f\n- g\n\n---\n\n- [ ] This is a TODO item.\n- [-] This is a processing TODO item.\n- [x] This is a finished TODO item.\n\n---\n\n1. This is an ordered list item\n\na. This is an another type of ordered list item\n`)\n"))),(0,i.kt)(s.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n- a\n- b\n  - c\n  - d\n  - e\n- f\n- g\n\n---\n\n- [ ] This is a TODO item.\n- [-] This is a processing TODO item.\n- [x] This is a finished TODO item.\n\n---\n\n1. This is an ordered list item\n\na. This is an another type of ordered list item\n`)\n"))),(0,i.kt)(s.Z,{value:"GfmParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n- a\n- b\n  - c\n  - d\n  - e\n- f\n- g\n\n---\n\n- [ ] This is a TODO item.\n- [-] This is a processing TODO item.\n- [x] This is a finished TODO item.\n\n---\n\n1. This is an ordered list item\n\na. This is an another type of ordered list item\n`)\n"))),(0,i.kt)(s.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n- a\n- b\n  - c\n  - d\n  - e\n- f\n- g\n\n---\n\n- [ ] This is a TODO item.\n- [-] This is a processing TODO item.\n- [x] This is a finished TODO item.\n\n---\n\n1. This is an ordered list item\n\na. This is an another type of ordered list item\n`)\n")))),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-list"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"priority")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.CONTAINING_BLOCK"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,i.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."))),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./tokenizer-list"},"@yozora/tokenizer-list")," produce ",(0,i.kt)("a",{parentName:"p",href:"./ast#list"},"List")," type nodes.\nSee ",(0,i.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { ListItem, YastParent } from '@yozora/ast'\n\nexport const ListType = 'list'\nexport type ListType = typeof ListType\n\n/**\n * List represents a list of items.\n * @see https://github.com/syntax-tree/mdast#list\n * @see https://github.github.com/gfm/#list\n */\nexport interface List extends YastParent<ListType> {\n  /**\n   * Whether it is an ordered lit.\n   */\n  ordered: boolean\n  /**\n   * The starting number of a ordered list-item.\n   */\n  start?: number\n  /**\n   * Marker of a unordered list-item, or delimiter of an ordered list-item.\n   */\n  marker: number\n  /**\n   * Whether if the list is loose.\n   * @see https://github.github.com/gfm/#loose\n   */\n  spread: boolean\n  /**\n   * Lists are container block.\n   */\n  children: ListItem[]\n}\n")),(0,i.kt)("h2",{id:"live-examples"},"Live Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Basic."),(0,i.kt)(o.Z,{ids:"281-283",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In order to solve of unwanted lists in paragraphs with hard-wrapped\nnumerals, we allow only lists starting with ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"1")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1")))))," to interrupt paragraphs."),(0,i.kt)(o.Z,{ids:"284-285",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There can be any number of blank lines between items."),(0,i.kt)(o.Z,{ids:"286-287",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To separate consecutive lists of the same type, or to separate a list from\nan indented code block that would otherwise be parsed as a subparagraph of\nthe final list item, you can insert a blank HTML comment."),(0,i.kt)(o.Z,{ids:"288-289",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"List items need not be indented to the same level. The following list items\nwill be treated as items at the same list level, since none is indented\nenough to belong to the previous list item."),(0,i.kt)(o.Z,{ids:"290-291",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Note, however, that list items may not be indented more than three spaces.\nHere ",(0,i.kt)("inlineCode",{parentName:"p"},"- e")," is treated as a paragraph continuation line, because it is\nindented more than three spaces."),(0,i.kt)(o.Z,{ids:"292",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"And here, ",(0,i.kt)("inlineCode",{parentName:"p"},"3. c")," is treated as in indented code block, because it is indented\nfour spaces and preceded by a blank line."),(0,i.kt)(o.Z,{ids:"293",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This is a loose list, because there is a blank line between two of the\nlist items."),(0,i.kt)(o.Z,{ids:"294",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"So is this, with a empty second item."),(0,i.kt)(o.Z,{ids:"295",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"These are loose lists, even though there is no space between the items,\nbecause one of the items directly contains two block-level elements with a\nblank line between them."),(0,i.kt)(o.Z,{ids:"296-297",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This is a tight list, because the blank lines are in a code block."),(0,i.kt)(o.Z,{ids:"298",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This is a tight list, because the blank line is between two paragraphs of a\nsublist. So the sublist is loose while the outer list is tight."),(0,i.kt)(o.Z,{ids:"299",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This is a tight list, because the blank line is inside the block quote."),(0,i.kt)(o.Z,{ids:"300",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This list is tight, because the consecutive block elements are not\nseparated by blank lines."),(0,i.kt)(o.Z,{ids:"301",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A single-paragraph list is tight."),(0,i.kt)(o.Z,{ids:"302-303",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This list is loose, because of the blank line between the two block elements\nin the list item."),(0,i.kt)(o.Z,{ids:"304",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Here the outer list is loose, the inner list tight."),(0,i.kt)(o.Z,{ids:"305-306",mdxType:"YozoraGFMLive"}))),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./tokenizer-list-item"},"@yozora/tokenizer-list-item")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/list#readme"},"@yozora/react-list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/list-item#readme"},"@yozora/react-list-item")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/tokenizers/list"},"Sourcecode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ast#list"},"List | Yozora AST")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#lists"},"Lists | Github Flavor Markdown Spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#list"},"List | Mdast"))))}u.isMDXComponent=!0}}]);