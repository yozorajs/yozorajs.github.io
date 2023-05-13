"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[9738],{23577:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),i=a(25487),o=a(86023),s=a(10629);const l={id:"tokenizer-image-reference",title:"@yozora/tokenizer-image-reference",sidebar_label:"image-reference"},p=void 0,m={unversionedId:"package/tokenizer-image-reference",id:"version-1.x.x/package/tokenizer-image-reference",title:"@yozora/tokenizer-image-reference",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/tokenizer-image-reference.mdx",sourceDirName:"package",slug:"/package/tokenizer-image-reference",permalink:"/docs/1.x.x/package/tokenizer-image-reference",draft:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1683986667,formattedLastUpdatedAt:"May 13, 2023",frontMatter:{id:"tokenizer-image-reference",title:"@yozora/tokenizer-image-reference",sidebar_label:"image-reference"},sidebar:"Docs",previous:{title:"image",permalink:"/docs/1.x.x/package/tokenizer-image"},next:{title:"indented-code",permalink:"/docs/1.x.x/package/tokenizer-indented-code"}},k={},c=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Full style",id:"full-style",level:2},{value:"Collapsed style",id:"collapsed-style",level:3},{value:"Shortcut styled",id:"shortcut-styled",level:3},{value:"Related",id:"related",level:2}],d={toc:c};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("header",null,(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-image-reference"},(0,n.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-image-reference/v1.x.x"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-image-reference"},(0,n.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-image-reference.svg"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-image-reference"},(0,n.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-image-reference.svg"})),(0,n.kt)("a",{href:"#install"},(0,n.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,n.kt)("a",{href:"https://github.com/nodejs/node"},(0,n.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-image-reference"})),(0,n.kt)("a",{href:"https://github.com/facebook/jest"},(0,n.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,n.kt)("a",{href:"https://github.com/prettier/prettier"},(0,n.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,n.kt)("br",null),(0,n.kt)("admonition",{title:"github flavor markdown spec",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Syntax for ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#images"},"image"),"s is like the syntax for ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#inline-link"},"link"),"s, with\none difference. Instead of ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-text"},"link text"),", we have an\n",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#image-description"},"image description"),". The rules for this are the same as\nfor ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#link-text"},"link text"),", except that"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"a) an image description starts with ",(0,n.kt)("inlineCode",{parentName:"li"},"![")," rather than ",(0,n.kt)("inlineCode",{parentName:"li"},"["),", and"),(0,n.kt)("li",{parentName:"ul"},"b) an image description may contain links. An ",(0,n.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#image-description"},"image description"),"\nhas ",(0,n.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#inlines"},"inline")," elements as its contents. When an image is rendered\nto HTML, this is standardly used as the image\u2019s ",(0,n.kt)("inlineCode",{parentName:"li"},"alt")," attribute.")),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#images"},"github flavor markdown spec"))," for details."),(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression."))),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-image-reference\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-image-reference\n"))),(0,n.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @yozora/tokenizer-image-reference\n")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"./tokenizer-image-reference"},"@yozora/tokenizer-image-reference")," has been integrated into ",(0,n.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,n.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,n.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly.")),(0,n.kt)(i.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"basic-usage",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./tokenizer-image-reference"},"@yozora/tokenizer-image-reference")," cannot be used alone, it needs to be\nregistered in ",(0,n.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport ImageReferenceTokenizer from '@yozora/tokenizer-image-reference'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new ImageReferenceTokenizer())\n\n// parse source markdown content\nparser.parse(`\n![foo][]\n\n[foo]: /url \"title\"\n`)\n"))),(0,n.kt)(o.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n![foo][]\n\n[foo]: /url \"title\"\n`)\n"))),(0,n.kt)(o.Z,{value:"GfmParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n![foo][]\n\n[foo]: /url \"title\"\n`)\n"))),(0,n.kt)(o.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n![foo][]\n\n[foo]: /url \"title\"\n`)\n")))),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-image-reference"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"priority")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.LINKS"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,n.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,n.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Exception:")," Delimiters of type ",(0,n.kt)("inlineCode",{parentName:"p"},"full")," are always processed before other type\ndelimiters."))),(0,n.kt)("h3",{id:"types"},"Types"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./tokenizer-image-reference"},"@yozora/tokenizer-image-reference")," produce ",(0,n.kt)("a",{parentName:"p",href:"./ast#imagereference"},"ImageReference")," type nodes.\nSee ",(0,n.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {\n  YastAlternative,\n  YastAssociation,\n  YastNode,\n  YastReference,\n} from '@yozora/ast'\n\nexport const ImageReferenceType = 'imageReference'\nexport type ImageReferenceType = typeof ImageReferenceType\n\n/**\n * ImageReference represents an image through association, or its original\n * source if there is no association.\n * @see https://github.github.com/gfm/#images\n * @see https://github.com/syntax-tree/mdast#imagereference\n */\nexport interface ImageReference extends\n  YastNode<ImageReferenceType>,\n  YastAssociation,\n  YastReference,\n  YastAlternative {}\n")),(0,n.kt)("h2",{id:"live-examples"},"Live Examples"),(0,n.kt)("h2",{id:"full-style"},"Full style"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Basic."),(0,n.kt)(s.Z,{ids:"590-591",mdxType:"YozoraGFMLive"}))),(0,n.kt)("h3",{id:"collapsed-style"},"Collapsed style"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Basic."),(0,n.kt)(s.Z,{ids:"592-593",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The labels are case-insensitive."),(0,n.kt)(s.Z,{ids:"594",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"As with reference links, ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace")," is not allowed\nbetween the two sets of brackets."),(0,n.kt)(s.Z,{ids:"595",mdxType:"YozoraGFMLive"}))),(0,n.kt)("h3",{id:"shortcut-styled"},"Shortcut styled"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Basic."),(0,n.kt)(s.Z,{ids:"596-597",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Note that link labels cannot contain unescaped brackets."),(0,n.kt)(s.Z,{ids:"598",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The link labels are case-insensitive\u3002"),(0,n.kt)(s.Z,{ids:"599",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you just want a literal ",(0,n.kt)("inlineCode",{parentName:"p"},"!")," followed by bracketed text, you can\nbackslash-escape the opening ",(0,n.kt)("inlineCode",{parentName:"p"},"["),"."),(0,n.kt)(s.Z,{ids:"600",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you want a link after a literal ",(0,n.kt)("inlineCode",{parentName:"p"},"!"),", backslash-escape the ",(0,n.kt)("inlineCode",{parentName:"p"},"!"),"."),(0,n.kt)(s.Z,{ids:"601",mdxType:"YozoraGFMLive"}))),(0,n.kt)("h2",{id:"related"},"Related"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./tokenizer-image"},"@yozora/tokenizer-image")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/image#readme"},"@yozora/react-image")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/tokenizers/image-reference"},"Sourcecode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast#imagereference"},"ImageReference | Yozora AST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#images"},"Images | Github Flavor Markdown Spec")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#imagereference"},"ImageReference | Mdast"))))}g.isMDXComponent=!0}}]);