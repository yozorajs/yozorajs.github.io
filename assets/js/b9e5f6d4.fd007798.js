"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[6740],{916:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>h,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>x});var r=i(7624),s=i(4552),t=i(6212),l=i(2440),c=i(7360);const a={id:"tokenizer-link-reference",title:"@yozora/tokenizer-link-reference",sidebar_label:"link-reference"},h=void 0,o={id:"package/tokenizer-link-reference",title:"@yozora/tokenizer-link-reference",description:"<img",source:"@site/docs/package/tokenizer-link-reference.mdx",sourceDirName:"package",slug:"/package/tokenizer-link-reference",permalink:"/docs/next/package/tokenizer-link-reference",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1706961465,formattedLastUpdatedAt:"Feb 3, 2024",frontMatter:{id:"tokenizer-link-reference",title:"@yozora/tokenizer-link-reference",sidebar_label:"link-reference"},sidebar:"Docs",previous:{title:"link",permalink:"/docs/next/package/tokenizer-link"},next:{title:"list",permalink:"/docs/next/package/tokenizer-list"}},d={},x=[{value:"Full reference link",id:"full-reference-link",level:3},{value:"Collapsed reference link",id:"collapsed-reference-link",level:3},{value:"Shortcut reference link",id:"shortcut-reference-link",level:3},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Full reference link",id:"full-reference-link-1",level:3},{value:"Collapsed reference link",id:"collapsed-reference-link-1",level:3},{value:"Shortcut reference link",id:"shortcut-reference-link-1",level:3},{value:"Related",id:"related",level:2}];function f(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",math:"math",mn:"mn",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("header",{children:(0,r.jsxs)("div",{align:"center",children:[(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-link-reference",children:(0,r.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-link-reference/latest"})}),(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-link-reference",children:(0,r.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-link-reference.svg"})}),(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-link-reference",children:(0,r.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-link-reference.svg"})}),(0,r.jsx)("a",{href:"#install",children:(0,r.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,r.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,r.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-link-reference"})}),(0,r.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,r.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,r.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,r.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.admonition,{title:"github flavor markdown spec",type:"note",children:[(0,r.jsxs)(n.p,{children:["There are three kinds of ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#reference-link",children:"reference links"}),":\n",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#full-reference-link",children:"full"}),", ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#collapsed-reference-link",children:"collapsed"}),",\nand ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#shortcut-reference-link",children:"shortcut"}),"."]}),(0,r.jsx)(n.h3,{id:"full-reference-link",children:"Full reference link"}),(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#full-reference-link",children:"full reference link"})," consists of a ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-text",children:"link text"}),"\nimmediately followed by a ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-label",children:"link label"})," that matches a\n",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-reference-definition",children:"link reference definition"})," elsewhere in the document."]}),(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-label",children:"link label"})," begins with a left bracket (",(0,r.jsx)(n.code,{children:"["}),") and ends with\nthe first right bracket (",(0,r.jsx)(n.code,{children:"]"}),") that is not backslash-escaped. Between these\nbrackets there must be at least one ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#non-whitespace-character",children:"non-whitespace character"}),".\nUnescaped square bracket characters are not allowed inside the opening and\nclosing square brackets of ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-label",children:"link labels"}),". A ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-label",children:"link label"}),"\ncan have at most ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsx)(n.mrow,{children:(0,r.jsx)(n.mn,{children:"999"})}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"999"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,r.jsx)(n.span,{className:"mord",children:"999"})]})})]})," characters inside the square brackets."]}),(0,r.jsxs)(n.p,{children:["One label ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#matches",children:"matches"})," another just in case their normalized forms\nare equal. To normalize a label, strip off the opening and closing brackets,\nperform the Unicode case fold, strip leading and trailing ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"}),"\nand collapse consecutive internal ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"})," to a single\n",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#space",children:"space"}),". If there are multiple matching\n",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-reference-definition",children:"reference link definitions"}),", the one that comes first in\nthe document is used. (It is desirable in such cases to emit a warning.)"]}),(0,r.jsxs)(n.p,{children:["The link\u2019s URI and title are provided by the matching\n",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-reference-definition",children:"link reference definition"}),"."]}),(0,r.jsx)(n.h3,{id:"collapsed-reference-link",children:"Collapsed reference link"}),(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#collapsed-reference-link",children:"collapsed reference link"})," consists of a\n",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-label",children:"link label"})," that matches a ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-reference-definition",children:"link reference definition"}),"\nelsewhere in the document, followed by the string ",(0,r.jsx)(n.code,{children:"[]"}),". The contents of the\nfirst link label are parsed as inlines, which are used as the link\u2019s text.\nThe link\u2019s URI and title are provided by the matching reference link definition.\nThus, ",(0,r.jsx)(n.code,{children:"[foo][]"})," is equivalent to ",(0,r.jsx)(n.code,{children:"[foo][foo]"}),"."]}),(0,r.jsx)(n.h3,{id:"shortcut-reference-link",children:"Shortcut reference link"}),(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#shortcut-reference-link",children:"shortcut reference link"})," consists of a\n",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-label",children:"link label"})," that matches a ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-reference-definition",children:"link reference definition"}),"\nelsewhere in the document and is not followed by ",(0,r.jsx)(n.code,{children:"[]"})," or a ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-label",children:"link label"}),".\nThe contents of the first ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-label",children:"link label"})," are parsed as ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#inlines",children:"inlines"}),",\nwhich are used as the link\u2019s text. The link\u2019s URI and title are provided by\nthe matching [link reference definition][gfm-link-definiiton]. Thus, ",(0,r.jsx)(n.code,{children:"[foo]"})," is\nequivalent to ",(0,r.jsx)(n.code,{children:"[foo][]"}),"."]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["See ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#reference-link",children:"github flavor markdown spec"})})," for details."]}),"\n",(0,r.jsxs)(n.li,{children:["See ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"#live-examples",children:"Live Examples"})})," for an intuitive impression."]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(t.c,{groupId:"npm2yarn",children:[(0,r.jsx)(l.c,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save @yozora/tokenizer-link-reference\n"})})}),(0,r.jsx)(l.c,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @yozora/tokenizer-link-reference\n"})})}),(0,r.jsx)(l.c,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @yozora/tokenizer-link-reference\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"./tokenizer-link-reference",children:"@yozora/tokenizer-link-reference"})," has been integrated into ",(0,r.jsx)(n.a,{href:"./parser",children:"@yozora/parser"})," / ",(0,r.jsx)(n.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})," / ",(0,r.jsx)(n.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"}),",\nso you can use ",(0,r.jsx)(n.code,{children:"YozoraParser"})," / ",(0,r.jsx)(n.code,{children:"GfmExParser"})," / ",(0,r.jsx)(n.code,{children:"GfmParser"})," directly."]})}),"\n",(0,r.jsxs)(t.c,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],children:[(0,r.jsxs)(l.c,{value:"basic-usage",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"./tokenizer-link-reference",children:"@yozora/tokenizer-link-reference"})," cannot be used alone, it needs to be\nregistered in ",(0,r.jsx)(n.em,{children:"Parser"})," as a plugin-in before it can be used."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:"{4,9}",children:"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport LinkReferenceTokenizer from '@yozora/tokenizer-link-reference'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new LinkReferenceTokenizer())\n\n// parse source markdown content\nparser.parse(`\n[foo][bar]\n\n[bar]: /url \"title\"\n`)\n"})})]}),(0,r.jsx)(l.c,{value:"YozoraParser",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n[foo][bar]\n\n[bar]: /url \"title\"\n`)\n"})})}),(0,r.jsx)(l.c,{value:"GfmParser",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n[foo][bar]\n\n[bar]: /url \"title\"\n`)\n"})})}),(0,r.jsx)(l.c,{value:"GfmExParser",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n[foo][bar]\n\n[bar]: /url \"title\"\n`)\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"name"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:'"@yozora/tokenizer-link-reference"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"priority"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"TokenizerPriority.LINKS"})})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"name"}),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,r.jsx)(n.em,{children:"matching / parsing"})," phase."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"priority"}),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,r.jsx)(n.code,{children:"match-block"}),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Exception:"})," Delimiters of type ",(0,r.jsx)(n.code,{children:"full"})," are always processed before other type\ndelimiters."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"./tokenizer-link-reference",children:"@yozora/tokenizer-link-reference"})," produce ",(0,r.jsx)(n.a,{href:"./ast#linkreference",children:"LinkReference"})," type nodes.\nSee ",(0,r.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})," for full base types."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import type {\nAssociation,\nParent,\nReference,\n} from '@yozora/ast'\n\nexport const LinkReferenceType = 'linkReference'\nexport type LinkReferenceType = typeof LinkReferenceType\n\n/**\n* LinkReference represents a hyperlink through association, or its original\n* source if there is no association.\n* @see https://github.com/syntax-tree/mdast#linkreference\n* @see https://github.github.com/gfm/#reference-link\n*/\nexport interface LinkReference extends\nParent<LinkReferenceType>,\nAssociation,\nReference {}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,r.jsx)(n.h3,{id:"full-reference-link-1",children:"Full reference link"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Basic."}),"\n",(0,r.jsx)(c.c,{ids:"535"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The link text may contain balanced brackets, but not unbalanced ones,\nunless they are escaped."}),"\n",(0,r.jsx)(c.c,{ids:"536-537"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The link text may contain inline content."}),"\n",(0,r.jsx)(c.c,{ids:"538-539"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"However, links may not contain other links, at any level of nesting."}),"\n",(0,r.jsx)(c.c,{ids:"540-541"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The following cases illustrate the precedence of\n",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-text",children:"link text"})," grouping over ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#can-open-emphasis",children:"emphasis"})," grouping."]}),"\n",(0,r.jsx)(c.c,{ids:"542-543"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["These cases illustrate the precedence of HTML tags, ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#code-span",children:"code spans"}),",\nand ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#autolinks",children:"autolinks"})," over link grouping."]}),"\n",(0,r.jsx)(c.c,{ids:"544-546"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Matching is case-insensitive."}),"\n",(0,r.jsx)(c.c,{ids:"547"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Unicode case fold is used."}),"\n",(0,r.jsx)(c.c,{ids:"548"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Consecutive internal ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"})," is treated as one\n",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#space",children:"space"})," for purposes of determining matching."]}),"\n",(0,r.jsx)(c.c,{ids:"549"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["No whitespace is allowed between the ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-text",children:"link text"})," and the\n",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-label",children:"link label"}),"."]}),"\n",(0,r.jsx)(c.c,{ids:"550-551"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When there are multiple matching ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-reference-definition",children:"link reference definitions"}),",\nthe first is used."]}),"\n",(0,r.jsx)(c.c,{ids:"552"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Note that matching is performed on normalized strings, not parsed inline\ncontent. So the following does not match, even though the labels define\nequivalent inline content."}),"\n",(0,r.jsx)(c.c,{ids:"553"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-label",children:"Link labels"})," cannot contain brackets, unless they are\nbackslash-escaped."]}),"\n",(0,r.jsx)(c.c,{ids:"554-557"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Note that in this example ",(0,r.jsx)(n.code,{children:"]"})," is not backslash-escaped."]}),"\n",(0,r.jsx)(c.c,{ids:"558"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-label",children:"link label"})," must contain at least one\n",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#non-whitespace-character",children:"non-whitespace character"}),"."]}),"\n",(0,r.jsx)(c.c,{ids:"559-560"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"collapsed-reference-link-1",children:"Collapsed reference link"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Basic."}),"\n",(0,r.jsx)(c.c,{ids:"561-562"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The link labels are case-insensitive."}),"\n",(0,r.jsx)(c.c,{ids:"563"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["As with full reference links, ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"})," is not allowed\nbetween the two sets of brackets."]}),"\n",(0,r.jsx)(c.c,{ids:"564"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"shortcut-reference-link-1",children:"Shortcut reference link"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Basic."}),"\n",(0,r.jsx)(c.c,{ids:"565-568"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The link labels are case-insensitive."}),"\n",(0,r.jsx)(c.c,{ids:"569"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A space after the link text should be preserved."}),"\n",(0,r.jsx)(c.c,{ids:"570"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If you just want bracketed text, you can backslash-escape the opening\nbracket to avoid links."}),"\n",(0,r.jsx)(c.c,{ids:"571"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Note that this is a link, because a link label ends with the first following\nclosing bracket."}),"\n",(0,r.jsx)(c.c,{ids:"572"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Full and compact references take precedence over shortcut references."}),"\n",(0,r.jsx)(c.c,{ids:"573-574"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Inline links also take precedence."}),"\n",(0,r.jsx)(c.c,{ids:"575-576"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the following case ",(0,r.jsx)(n.code,{children:"[bar][baz]"})," is parsed as a reference, ",(0,r.jsx)(n.code,{children:"[foo]"})," as\nnormal text."]}),"\n",(0,r.jsx)(c.c,{ids:"577"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Here, though, ",(0,r.jsx)(n.code,{children:"[foo][bar]"})," is parsed as a reference, since ",(0,r.jsx)(n.code,{children:"[bar]"})," is defined."]}),"\n",(0,r.jsx)(c.c,{ids:"578"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Here ",(0,r.jsx)(n.code,{children:"[foo]"})," is not parsed as a shortcut reference, because it is followed\nby a ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#link-label",children:"link label"})," (even though ",(0,r.jsx)(n.code,{children:"[bar]"})," is not defined)."]}),"\n",(0,r.jsx)(c.c,{ids:"579"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./parser",children:"@yozora/parser"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./tokenizer-autolink",children:"@yozora/tokenizer-autolink"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./tokenizer-autolink-extension",children:"@yozora/tokenizer-autolink-extension"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./tokenizer-definition",children:"@yozora/tokenizer-definition"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./tokenizer-link",children:"@yozora/tokenizer-link"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/link#readme",children:"@yozora/react-link"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme",children:"@yozora/react-markdown"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/link-reference",children:"Sourcecode"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./ast#linkreference",children:"LinkReference | Yozora AST"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#reference-link",children:"Reference links | Github Flavor Markdown Spec"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/syntax-tree/mdast#linkreference",children:"LinkReference | Mdast"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}}}]);