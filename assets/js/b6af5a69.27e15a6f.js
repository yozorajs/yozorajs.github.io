"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[4215],{37031:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return k}});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),i=a(5529),s=a(98448),p=["components"],l={id:"introduction",title:"Yozora",sidebar_label:"Introduction",slug:"/"},m=void 0,c={unversionedId:"introduction",id:"version-1.x.x/introduction",title:"Yozora",description:"<img",source:"@site/versioned_docs/version-1.x.x/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/docs/1.x.x/",tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1650039198,formattedLastUpdatedAt:"4/15/2022",frontMatter:{id:"introduction",title:"Yozora",sidebar_label:"Introduction",slug:"/"},sidebar:"Docs",next:{title:"\u4ecb\u7ecd",permalink:"/docs/1.x.x/introduction-zh"}},h={},k=[{value:"<g-emoji>\ud83c\udf89</g-emoji> Why named &quot;yozora&quot; ?",id:"-why-named-yozora-",level:2},{value:"<g-emoji>\u2728</g-emoji> Features",id:"-features",level:2},{value:"<g-emoji>\ud83d\udcdd</g-emoji> Usage",id:"-usage",level:2},{value:"<g-emoji>\ud83d\udca1</g-emoji> FAQ",id:"-faq",level:2},{value:"<g-emoji>\ud83d\udcac</g-emoji> Contact",id:"-contact",level:2},{value:"<g-emoji>\ud83d\udcc4</g-emoji> License",id:"-license",level:2},{value:"Related",id:"related",level:2}],u={toc:k};function g(e){var t=e.components,a=(0,o.Z)(e,p);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("header",null,(0,n.kt)("h1",{align:"center"},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{alt:"logo.png",src:"/img/logo.png",height:"300px"}))),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"#license"},(0,n.kt)("img",{alt:"License",src:"https://img.shields.io/github/license/guanghechen/yozora"})),(0,n.kt)("a",{href:"https://github.com/yozorajs/yozora/tags"},(0,n.kt)("img",{alt:"Package Version",src:"https://img.shields.io/github/v/tag/guanghechen/yozora?include_prereleases&sort=semver"})),(0,n.kt)("a",{href:"https://github.com/yozorajs/yozora/search?l=typescript"},(0,n.kt)("img",{alt:"Github Top Language",src:"https://img.shields.io/github/languages/top/guanghechen/yozora"})),(0,n.kt)("a",{href:"https://github.com/nodejs/node"},(0,n.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/core-tokenizer"})),(0,n.kt)("a",{href:"https://github.com/yozorajs/yozora/actions/workflows/ci.yml"},(0,n.kt)("img",{alt:"CI Workflow",src:"https://github.com/yozorajs/yozora/actions/workflows/ci.yml/badge.svg"})),(0,n.kt)("a",{href:"https://github.com/facebook/jest"},(0,n.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,n.kt)("a",{href:"https://github.com/prettier/prettier"},(0,n.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,n.kt)("h2",{id:"-why-named-yozora-"},(0,n.kt)("g-emoji",null,"\ud83c\udf89"),' Why named "yozora" ?'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Yozora"))," is the Roman sound of Japanese \u300c\u3088\u305e\u3089\u300d, taken from the lyrics in\n\u300e",(0,n.kt)("em",{parentName:"p"},"\u82b1\u9ce5\u98a8\u6708"),"\u300f by the band ",(0,n.kt)("em",{parentName:"p"},"\u4e16\u754c\u306e\u7d42\u308f\u308a"),"."),(0,n.kt)("p",null,"This project is a monorepo that aims to implement a highly extensible, pluggable\nMarkdown parser. Based on the idea of middlewares, the core algorithm\n",(0,n.kt)("a",{parentName:"p",href:"./docs/package/core-parser"},"@yozora/core-parser")," will schedule tokenizers (such as ",(0,n.kt)("a",{parentName:"p",href:"./docs/package/tokenizer-autolink"},"@yozora/tokenizer-autolink"),")\nto complete the parsing tasks. More accurately, ",(0,n.kt)("em",{parentName:"p"},"yozora")," is an algorithm to\nparse Markdown or its extended syntax contents into an abstract syntax tree (AST)."),(0,n.kt)("h2",{id:"-features"},(0,n.kt)("g-emoji",null,"\u2728")," Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udd16 Fully support all the rules mentioned in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GFM specification"),",\nand has passed almost all test cases created based on the examples in the\nspecification (except the one ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#example-653"},"https://github.github.com/gfm/#example-653"),",\nas there is no plan to support native HTML tags in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora-react"},"React Renderer"),",\nfor the Yozora AST, so I'm a little lazy to do the tag filtering. If you need\nit, you can do the filtering by yourself)."),(0,n.kt)("p",{parentName:"li"},"See ",(0,n.kt)("a",{parentName:"p",href:"./docs/package/parser-gfm"},"@yozora/parser-gfm")," or ",(0,n.kt)("a",{parentName:"p",href:"./docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")," for further information.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\ude80 Robust. "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All codes are written in Typescript, with the guarantee of strictly static\ntype checking.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Eslint and Prettier to constrain coding styles to avoid error-prone problems\nsuch as hack syntax and shadow variables.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tested with Jest, and passed a large number of test cases.")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83d\udc9a ",(0,n.kt)("strong",{parentName:"p"},"Tidy"),": No third-party dependencies.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u26a1\ufe0f ",(0,n.kt)("strong",{parentName:"p"},"Efficient"),"."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The parsing complexity is the length of source contents multiplied by the\nnumber of tokenizers, which has reached the lower bound of theoretical\ncomplexity.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The parser API supports streaming read-in (using generators /iterators for\ninput), and supports parsing while read-in (Only block-level data is\nsupported yet).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Carefully handle the array creation / concat operations. To reused the array\nas much as possible during the entire matching phase, only use the array\nindex to delineate the matching range. And a lot of strategies applied to\nreduce duplicated matching / parsing operations.")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83e\ude79 ",(0,n.kt)("strong",{parentName:"p"},"Compatibility"),", the parsed syntax tree is compatible with the one defined in\n","[Mdast][mdast-homepage]",". "),(0,n.kt)("p",{parentName:"li"},"Even if some data types are not compatible in the future, it is easy to\ntraverse the AST for adaptation and modification through the API provided in\n",(0,n.kt)("a",{parentName:"p",href:"./docs/package/ast-util"},"@yozora/ast-util"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ud83c\udfa8 ",(0,n.kt)("strong",{parentName:"p"},"Extendibility"),", Yozora comes with a plug-in system, which allowed Yozora to\nschedule the tokenizers through an internal algorithms to complete the parsing\ntasks."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It's easy to create and integrate custom tokenizers. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All tokenizers can be mounted or unmounted freely."),(0,n.kt)("p",{parentName:"li"},"Some tokenizers of the data types that not mentioned in ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GFM")," have\nbeen implemented in this repository, such as ",(0,n.kt)("a",{parentName:"p",href:"./docs/package/tokenizer-admonition"},"@yozora/tokenizer-admonition"),",\n",(0,n.kt)("a",{parentName:"p",href:"./docs/package/tokenizer-footnote"},"@yozora/tokenizer-footnote"),", etc. All of them are built into\n",(0,n.kt)("a",{parentName:"p",href:"./docs/package/parser"},"@yozora/parser")," in default, you can uninstall them at will, if you don't\nlike it."))))),(0,n.kt)("h2",{id:"-usage"},(0,n.kt)("g-emoji",null,"\ud83d\udcdd")," Usage"),(0,n.kt)(i.Z,{defaultValue:"YozoraParser",values:[{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},(0,n.kt)("a",{parentName:"em",href:"./docs/package/parser"},"@yozora/parser"))),": (",(0,n.kt)("strong",{parentName:"p"},"Recommended"),") A Markdown parser with rich built-in\ntokenizers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\nparser.parse('source content')\n"))),(0,n.kt)(s.Z,{value:"GfmParser",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},(0,n.kt)("a",{parentName:"em",href:"./docs/package/parser-gfm"},"@yozora/parser-gfm"))),": A Markdown parser that supports ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GFM specification"),".\nBuilt-in tokenizers that supports all grammars mentioned in\n",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GFM specification")," (",(0,n.kt)("strong",{parentName:"p"},"excluding")," the extended grammar mentioned in the\nspecification, such as ",(0,n.kt)("a",{parentName:"p",href:"./docs/package/tokenizer-table"},"table"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\nparser.parse('github flavor markdown contents')\n"))),(0,n.kt)(s.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},(0,n.kt)("a",{parentName:"em",href:"./docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex"))),": A Markdown parser that supports ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GFM specification"),".\nBuilt-in tokenizers that supports all grammars mentioned in\n",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GFM specification")," (",(0,n.kt)("strong",{parentName:"p"},"including")," the extended grammar mentioned in the\nspecification, such as ",(0,n.kt)("a",{parentName:"p",href:"./docs/package/tokenizer-table"},"table"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\nparser.parse('github flavor markdown contents (with gfm extensions enabled)')\n")))),(0,n.kt)("h2",{id:"-faq"},(0,n.kt)("g-emoji",null,"\ud83d\udca1")," FAQ"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"How to use yozora with gatsby?"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Try the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/gatsby-scaffolds/blob/main/packages/gatsby-transformer#readme"},"@yozora/gatsby-transformer")," and ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/gatsby-scaffolds/blob/main/packages/gatsby-images#readme"},"@yozora/gatsby-images")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"How to implemented custom tokenizer?"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("a",{parentName:"p",href:"./docs/package/template-tokenizer"},"@yozora/template-tokenizer")," to create a custom tokenizer with\npredefined boilerplates.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Check ",(0,n.kt)("a",{parentName:"p",href:"./docs/package/core-tokenizer"},"@yozora/core-tokenizer")," for implementation details of tokenizer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Check ",(0,n.kt)("a",{parentName:"p",href:"./docs/package/jest-for-tokenizer"},"@yozora/jest-for-tokenizer")," for information about testing the\ncustom tokenizer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Check ",(0,n.kt)("a",{parentName:"p",href:"./docs/package/core-parser"},"@yozora/core-parser")," and ",(0,n.kt)("a",{parentName:"p",href:"./docs/package/parser"},"@yozora/parser")," for information on how to\nintegrate a custom tokenzier."),(0,n.kt)("p",{parentName:"li"},"It's also recommended to refer to the existing ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/tokenizers"},"tokenizers"),"\nimplementation to create a custom one."))),(0,n.kt)("h2",{id:"-contact"},(0,n.kt)("g-emoji",null,"\ud83d\udcac")," Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/issues"},"Github issues"))),(0,n.kt)("h2",{id:"-license"},(0,n.kt)("g-emoji",null,"\ud83d\udcc4")," License"),(0,n.kt)("p",null,"Yozora is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/main/LICENSE"},"MIT licensed"),"."),(0,n.kt)("h2",{id:"related"},"Related"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://me.guanghechen.com/essay/tada/"},"\u2728\u5149\u548c\u5c18\u4e00\u76f4\u60f3\u8981\u4e00\u4e2a\u6e05\u723d\u535a\u5ba2"),": Why this project was written."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown"},"@yozora/react-markdown"),": A library that renders Yozora AST into React components."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-html/tree/main/packages/markdown"},"@yozora/html-markdown"),": A library that renders Yozora AST into html strings.")))}g.isMDXComponent=!0}}]);