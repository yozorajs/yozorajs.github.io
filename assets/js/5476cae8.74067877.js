"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[1192],{7036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(7624),i=n(4552),s=n(6212),a=n(2440),h=n(7360);const l={id:"tokenizer-html-inline",title:"@yozora/tokenizer-html-inline",sidebar_label:"html-inline"},c=void 0,o={id:"package/tokenizer-html-inline",title:"@yozora/tokenizer-html-inline",description:"<img",source:"@site/docs/package/tokenizer-html-inline.mdx",sourceDirName:"package",slug:"/package/tokenizer-html-inline",permalink:"/docs/next/package/tokenizer-html-inline",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1706961465,formattedLastUpdatedAt:"Feb 3, 2024",frontMatter:{id:"tokenizer-html-inline",title:"@yozora/tokenizer-html-inline",sidebar_label:"html-inline"},sidebar:"Docs",previous:{title:"html-block",permalink:"/docs/next/package/tokenizer-html-block"},next:{title:"image",permalink:"/docs/next/package/tokenizer-image"}},d={},m=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("header",{children:(0,r.jsxs)("div",{align:"center",children:[(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-html-inline",children:(0,r.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-html-inline/latest"})}),(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-html-inline",children:(0,r.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-html-inline.svg"})}),(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-html-inline",children:(0,r.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-html-inline.svg"})}),(0,r.jsx)("a",{href:"#install",children:(0,r.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,r.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,r.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-html-inline"})}),(0,r.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,r.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,r.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,r.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.admonition,{title:"github flavor markdown spec",type:"note",children:[(0,r.jsxs)(t.p,{children:["Text between ",(0,r.jsx)(t.code,{children:"<"})," and ",(0,r.jsx)(t.code,{children:">"})," that looks like an HTML tag is parsed as a raw HTML tag\nand will be rendered in HTML without escaping. Tag and attribute names are not\nlimited to current HTML tags, so custom tags (and even, say, DocBook tags) may\nbe used."]}),(0,r.jsx)(t.p,{children:"Here is the grammar for tags:"}),(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#tag-name",children:"tag name"})," consists of an ASCII letter followed by zero or more\nASCII letters, digits, or hyphens (",(0,r.jsx)(t.code,{children:"-"}),")."]}),(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#attribute",children:"attribute"})," consists of ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"}),", an\n",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#attribute-name",children:"attribute name"}),", and an optional\n",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#attribute-value-specification",children:"attribute value specification"}),"."]}),(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#attribute-name",children:"attribute name"})," consists of an ASCII letter, ",(0,r.jsx)(t.code,{children:"_"}),", or ",(0,r.jsx)(t.code,{children:":"}),",\nfollowed by zero or more ASCII letters, digits, ",(0,r.jsx)(t.code,{children:"_"}),", ",(0,r.jsx)(t.code,{children:"."}),", ",(0,r.jsx)(t.code,{children:":"}),", or ",(0,r.jsx)(t.code,{children:"-"}),". (Note:\nThis is the XML specification restricted to ASCII. HTML5 is laxer.)"]}),(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#attribute-value-specification",children:"attribute value specification"})," consists of optional\n",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"}),", a ",(0,r.jsx)(t.code,{children:"="})," character, optional ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"}),",\nand an ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#attribute-value",children:"attribute value"}),"."]}),(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#attribute-value",children:"attribute value"})," consists of an\n",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#unquoted-attribute-value",children:"unquoted attribute value"}),", a\n",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#single-quoted-attribute-value",children:"single-quoted attribute value"}),", or a\n",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#double-quoted-attribute-value",children:"double-quoted attribute value"}),"."]}),(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#unquoted-attribute-value",children:"unquoted attribute value"})," is a nonempty\nstring of characters not including ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"}),", ",(0,r.jsx)(t.code,{children:'"'}),", ",(0,r.jsx)(t.code,{children:"'"}),", ",(0,r.jsx)(t.code,{children:"="}),",\n",(0,r.jsx)(t.code,{children:"<"}),", ",(0,r.jsx)(t.code,{children:">"}),", or ",(0,r.jsx)(t.code,{children:"`"}),"."]}),(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#single-quoted-attribute-value",children:"single-quoted attribute value"})," consists of\n",(0,r.jsx)(t.code,{children:"'"}),", zero or more characters not including ",(0,r.jsx)(t.code,{children:"'"}),", and a final ",(0,r.jsx)(t.code,{children:"'"}),"."]}),(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#double-quoted-attribute-value",children:"double-quoted attribute value"})," consists of\n",(0,r.jsx)(t.code,{children:'"'}),", zero or more characters not including ",(0,r.jsx)(t.code,{children:'"'}),", and a final ",(0,r.jsx)(t.code,{children:'"'}),"."]}),(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#open-tag",children:"open tag"})," consists of a ",(0,r.jsx)(t.code,{children:"<"})," character, a ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#tag-name",children:"tag name"}),",\nzero or more ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#attribute",children:"attribute"}),"s, optional ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"}),",\nan optional ",(0,r.jsx)(t.code,{children:"/"})," character, and a ",(0,r.jsx)(t.code,{children:">"})," character."]}),(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#closing-tag",children:"closing tag"})," consists of the string ",(0,r.jsx)(t.code,{children:"</"}),", a ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#tag-name",children:"tag name"}),",\noptional ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"}),", and the character ",(0,r.jsx)(t.code,{children:">"}),"."]}),(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#html-comment",children:"HTML comment"})," consists of ",(0,r.jsx)(t.code,{children:"\x3c!--"})," + text + ",(0,r.jsx)(t.code,{children:"--\x3e"}),", where\ntext does not start with ",(0,r.jsx)(t.code,{children:">"})," or ",(0,r.jsx)(t.code,{children:"->"}),", does not end with ",(0,r.jsx)(t.code,{children:"-"}),", and does not\ncontain ",(0,r.jsx)(t.code,{children:"--"}),". (See the ",(0,r.jsx)(t.a,{href:"http://www.w3.org/TR/html5/syntax.html#comments",children:"HTML5 spec"}),".)"]}),(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#processing-instruction",children:"processing instruction"})," consists of the string\n",(0,r.jsx)(t.code,{children:"<?"}),", a string of characters not including the string ",(0,r.jsx)(t.code,{children:"?>"}),", and the string ",(0,r.jsx)(t.code,{children:"?>"}),"."]}),(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#declaration",children:"declaration"})," consists of the string ",(0,r.jsx)(t.code,{children:"<!"}),", a name consisting\nof one or more uppercase ASCII letters, ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#whitespace",children:"whitespace"}),", a string\nof characters not including the character ",(0,r.jsx)(t.code,{children:">"}),", and the character ",(0,r.jsx)(t.code,{children:">"}),"."]}),(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#cdata-section",children:"CDATA section"})," consists of the string ",(0,r.jsx)(t.code,{children:"<![CDATA["}),", a\nstring of characters not including the string ",(0,r.jsx)(t.code,{children:"]]>"}),", and the string ",(0,r.jsx)(t.code,{children:"]]>"}),"."]}),(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#html-tag",children:"HTML tag"})," consists of an ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#open-tag",children:"open tag"}),", a\n",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#closing-tag",children:"closing tag"}),", an ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#html-comment",children:"HTML comment"}),", a\n",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#processing-instruction",children:"processing instruction"}),", a ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#declaration",children:"declaration"}),",\nor a ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#cdata-section",children:"CDATA section"}),"."]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["See ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#raw-html",children:"github flavor markdown spec"})})," for details."]}),"\n",(0,r.jsxs)(t.li,{children:["See ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"#live-examples",children:"Live Examples"})})," for an intuitive impression."]}),"\n"]})]}),"\n",(0,r.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(s.c,{groupId:"npm2yarn",children:[(0,r.jsx)(a.c,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save @yozora/tokenizer-html-inline\n"})})}),(0,r.jsx)(a.c,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add @yozora/tokenizer-html-inline\n"})})}),(0,r.jsx)(a.c,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add @yozora/tokenizer-html-inline\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"./tokenizer-html-inline",children:"@yozora/tokenizer-html-inline"})," has been integrated into ",(0,r.jsx)(t.a,{href:"./parser",children:"@yozora/parser"})," / ",(0,r.jsx)(t.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})," / ",(0,r.jsx)(t.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"}),",\nso you can use ",(0,r.jsx)(t.code,{children:"YozoraParser"})," / ",(0,r.jsx)(t.code,{children:"GfmExParser"})," / ",(0,r.jsx)(t.code,{children:"GfmParser"})," directly."]})}),"\n",(0,r.jsxs)(s.c,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],children:[(0,r.jsxs)(a.c,{value:"basic-usage",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"./tokenizer-html-inline",children:"@yozora/tokenizer-html-inline"})," cannot be used alone, it needs to be\nregistered in ",(0,r.jsx)(t.em,{children:"Parser"})," as a plugin-in before it can be used."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"{4,9}",children:"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport HtmlInlineTokenizer from '@yozora/tokenizer-html-inline'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new HtmlInlineTokenizer())\n\n// parse source markdown content\nparser.parse(`\n<a><bab><c2c>\n\nfoo <?php echo $a; ?>\n`)\n"})})]}),(0,r.jsx)(a.c,{value:"YozoraParser",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n<a><bab><c2c>\n\nfoo <?php echo $a; ?>\n`)\n"})})}),(0,r.jsx)(a.c,{value:"GfmParser",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n<a><bab><c2c>\n\nfoo <?php echo $a; ?>\n`)\n"})})}),(0,r.jsx)(a.c,{value:"GfmExParser",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n<a><bab><c2c>\n\nfoo <?php echo $a; ?>\n`)\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Name"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"name"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:'"@yozora/tokenizer-html-inline"'})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"priority"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"number"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"TokenizerPriority.ATOMIC"})})]})]})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"name"}),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,r.jsx)(t.em,{children:"matching / parsing"})," phase."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"priority"}),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,r.jsx)(t.code,{children:"match-block"}),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Exception:"})," Delimiters of type ",(0,r.jsx)(t.code,{children:"full"})," are always processed before other type\ndelimiters."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"types",children:"Types"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"./tokenizer-html-inline",children:"@yozora/tokenizer-html-inline"})," produce ",(0,r.jsx)(t.a,{href:"./ast#html",children:"Html"})," type nodes.\nSee ",(0,r.jsx)(t.a,{href:"./ast",children:"@yozora/ast"})," for full base types."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import type { Literal } from '@yozora/ast'\n\nexport const HtmlType = 'html'\nexport type HtmlType = typeof HtmlType\n\n/**\n * HTML (Literal) represents a fragment of raw HTML.\n * @see https://github.com/syntax-tree/mdast#html\n * @see https://github.github.com/gfm/#html-blocks\n * @see https://github.github.com/gfm/#raw-html\n */\nexport type Html = Literal<HtmlType>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Opening."}),"\n",(0,r.jsx)(h.c,{ids:"632-641"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Closing."}),"\n",(0,r.jsx)(h.c,{ids:"642"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Comments."}),"\n",(0,r.jsx)(h.c,{ids:"644-646"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Processing instruction."}),"\n",(0,r.jsx)(h.c,{ids:"647"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Declaration."}),"\n",(0,r.jsx)(h.c,{ids:"648"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"CDATA section."}),"\n",(0,r.jsx)(h.c,{ids:"649"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"related",children:"Related"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./parser",children:"@yozora/parser"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./tokenizer-html-block",children:"@yozora/tokenizer-html-block"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/html-inline",children:"Sourcecode"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./ast#html",children:"Html | Yozora AST"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#raw-html",children:"Raw HTML| Github Flavor Markdown Spec"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/syntax-tree/mdast#html",children:"HTML | Mdast"})}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);