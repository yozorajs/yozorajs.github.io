"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[2621],{7139:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return k},toc:function(){return h},default:function(){return g}});var n=t(7462),r=t(3366),i=(t(7294),t(4137)),o=t(7225),p=t(8448),s=t(9430),l=["components"],m={id:"tokenizer-heading",title:"@yozora/tokenizer-heading",sidebar_label:"heading"},d=void 0,k={unversionedId:"package/tokenizer-heading",id:"package/tokenizer-heading",title:"@yozora/tokenizer-heading",description:"<img",source:"@site/docs/package/tokenizer-heading.mdx",sourceDirName:"package",slug:"/package/tokenizer-heading",permalink:"/docs/next/package/tokenizer-heading",tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1641643814,formattedLastUpdatedAt:"1/8/2022",frontMatter:{id:"tokenizer-heading",title:"@yozora/tokenizer-heading",sidebar_label:"heading"},sidebar:"Docs",previous:{title:"footnote-reference",permalink:"/docs/next/package/tokenizer-footnote-reference"},next:{title:"html-block",permalink:"/docs/next/package/tokenizer-html-block"}},h=[{value:"Install",id:"install",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[],level:3},{value:"Types",id:"types",children:[],level:3}],level:2},{value:"Live Examples",id:"live-examples",children:[],level:2},{value:"Related",id:"related",children:[],level:2}],c={toc:h};function g(e){var a=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("header",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-heading"},(0,i.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-heading/latest"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-heading"},(0,i.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-heading.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-heading"},(0,i.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-heading.svg"})),(0,i.kt)("a",{href:"#install"},(0,i.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,i.kt)("a",{href:"https://github.com/nodejs/node"},(0,i.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-heading"})),(0,i.kt)("a",{href:"https://github.com/facebook/jest"},(0,i.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,i.kt)("a",{href:"https://github.com/prettier/prettier"},(0,i.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"github flavor markdown spec")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#atx-heading"},"ATX heading")," consists of a string of characters, parsed as\ninline content, between an opening sequence of 1\u20136 unescaped ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," characters and\nan optional closing sequence of any number of unescaped ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," characters. The\nopening sequence of ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," characters must be followed by a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"space")," or\nby the end of line. The optional closing sequence of ",(0,i.kt)("inlineCode",{parentName:"p"},"#s")," must be preceded by a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"space")," and may be followed by spaces only. The opening ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," character\nmay be indented 0-3 spaces. The raw contents of the heading are stripped of\nleading and trailing spaces before being parsed as inline content. The heading\nlevel is equal to the number of ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," characters in the opening sequence."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#atx-heading"},"github flavor markdown spec"))," for details."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression.")))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-heading\n"))),(0,i.kt)(p.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-heading\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"./tokenizer-heading"},"@yozora/tokenizer-heading")," has been integrated into ",(0,i.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,i.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,i.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly."))),(0,i.kt)(o.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"basic-usage",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./tokenizer-heading"},"@yozora/tokenizer-heading")," cannot be used alone, it needs to be\nregistered in ",(0,i.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport HeadingTokenizer from '@yozora/tokenizer-heading'\n\nconst parser = new DefaultYastParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new HeadingTokenizer())\n\n// parse source markdown content\nparser.parse(`\n# h1\n## h2\n### h3\n#### h4\n##### h5\n###### h6\n`)\n"))),(0,i.kt)(p.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n# h1\n## h2\n### h3\n#### h4\n##### h5\n###### h6\n`)\n"))),(0,i.kt)(p.Z,{value:"GfmParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n# h1\n## h2\n### h3\n#### h4\n##### h5\n###### h6\n`)\n"))),(0,i.kt)(p.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n# h1\n## h2\n### h3\n#### h4\n##### h5\n###### h6\n`)\n")))),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-heading"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"priority")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,i.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."))),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./tokenizer-heading"},"@yozora/tokenizer-heading")," produce ",(0,i.kt)("a",{parentName:"p",href:"./ast#iheading"},"IFrontmatter ")," type nodes.\nSee ",(0,i.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { IYastParent } from '@yozora/ast'\n\nexport const HeadingType = 'heading'\nexport type HeadingType = typeof HeadingType\n\n/**\n * IFrontmatter  represents a heading of a section.\n * @see https://github.com/syntax-tree/mdast#heading\n * @see https://github.github.com/gfm/#atx-heading\n */\nexport interface IFrontmatter  extends IYastParent<HeadingType> {\n  /**\n   * HTML anchor identifier.\n   */\n  identifier?: string\n  /**\n   * level of heading\n   */\n  depth: 1 | 2 | 3 | 4 | 5 | 6\n}\n")),(0,i.kt)("h2",{id:"live-examples"},"Live Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Basic"),(0,i.kt)(s.Z,{ids:"32",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"More than six ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," characters is not a heading."),(0,i.kt)(s.Z,{ids:"33",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At least one space is required between the ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," characters and the heading\u2019s\ncontents, unless the heading is empty."),(0,i.kt)(s.Z,{ids:"34",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This is not a heading, because the first ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," is escaped."),(0,i.kt)(s.Z,{ids:"35",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Contents are parsed as inlines."),(0,i.kt)(s.Z,{ids:"36",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Leading and trailing ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace")," is ignored in parsing\ninline content."),(0,i.kt)(s.Z,{ids:"37",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"One to three spaces indentation are allowed."),(0,i.kt)(s.Z,{ids:"38",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Four spaces are too much."),(0,i.kt)(s.Z,{ids:"39-40",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A closing sequence of ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," characters is optional."),(0,i.kt)(s.Z,{ids:"41",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It need not be the same length as the opening sequence."),(0,i.kt)(s.Z,{ids:"42",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Spaces are allowed after the closing sequence."),(0,i.kt)(s.Z,{ids:"43",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A sequence of ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," characters with anything but ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#space"},"spaces"),"\nfollowing it is not a closing sequence, but counts as part of the contents\nof the heading."),(0,i.kt)(s.Z,{ids:"44",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The closing sequence must be preceded by a space."),(0,i.kt)(s.Z,{ids:"45",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Backslash-escaped ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," characters do not count as part of the closing sequence."),(0,i.kt)(s.Z,{ids:"46",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ATX headings need not be separated from surrounding content by blank lines,\nand they can interrupt paragraphs."),(0,i.kt)(s.Z,{ids:"47-48",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ATX headings can be empty."),(0,i.kt)(s.Z,{ids:"49",mdxType:"YozoraGFMLive"}))),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./tokenizer-setext-heading"},"@yozora/tokenizer-setext-heading")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/heading#readme"},"@yozora/react-heading")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/heading"},"Sourcecode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ast#iheading"},"IFrontmatter  | Yozora AST")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#atx-heading"},"ATX Heading | Github Flavor Markdown Spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#heading"},"Heading | Mdast"))))}g.isMDXComponent=!0}}]);