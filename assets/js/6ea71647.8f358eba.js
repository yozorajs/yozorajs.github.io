"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[3317],{87423:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return p},metadata:function(){return k},toc:function(){return m}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=n(5529),l=n(98448),s=["components"],p={id:"core-tokenizer",title:"@yozora/core-tokenizer",sidebar_label:"core-tokenizer"},c=void 0,k={unversionedId:"package/core-tokenizer",id:"version-1.x.x/package/core-tokenizer",title:"@yozora/core-tokenizer",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/core-tokenizer.mdx",sourceDirName:"package",slug:"/package/core-tokenizer",permalink:"/docs/1.x.x/package/core-tokenizer",tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1650039198,formattedLastUpdatedAt:"4/15/2022",frontMatter:{id:"core-tokenizer",title:"@yozora/core-tokenizer",sidebar_label:"core-tokenizer"},sidebar:"API",previous:{title:"ast-util",permalink:"/docs/1.x.x/package/ast-util"},next:{title:"core-parser",permalink:"/docs/1.x.x/package/core-parser"}},h={},m=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Block Tokenizer",id:"block-tokenizer",level:3},{value:"match-block phase",id:"match-block-phase",level:4},{value:"post-match-block phase",id:"post-match-block-phase",level:4},{value:"parse-block phase",id:"parse-block-phase",level:4},{value:"Inline Tokenizer",id:"inline-tokenizer",level:3},{value:"match-inline phase",id:"match-inline-phase",level:4},{value:"parser-inline phase",id:"parser-inline-phase",level:4},{value:"Related",id:"related",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("header",null,(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.npmjs.com/package/@yozora/core-tokenizer"},(0,o.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/core-tokenizer/v1.x.x"})),(0,o.kt)("a",{href:"https://www.npmjs.com/package/@yozora/core-tokenizer"},(0,o.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/core-tokenizer.svg"})),(0,o.kt)("a",{href:"https://www.npmjs.com/package/@yozora/core-tokenizer"},(0,o.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/core-tokenizer.svg"})),(0,o.kt)("a",{href:"#install"},(0,o.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,o.kt)("a",{href:"https://github.com/nodejs/node"},(0,o.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/core-tokenizer"})),(0,o.kt)("a",{href:"https://github.com/prettier/prettier"},(0,o.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Defines the shape of Yozora Tokenizer and life cycle methods, as well as some\nutility functions to assist in resolving tokens."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/core-tokenizer\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/core-tokenizer\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"According to the Parse Strategy, there are two types of tokenizers: Block\nTokenizer and Inline tokenizer."),(0,o.kt)("h3",{id:"block-tokenizer"},"Block Tokenizer"),(0,o.kt)("p",null,"The parsing steps of the block tokenizer are divided into three life cycles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"match-block"),": match a block node and get a ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockToken"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"post-match-block"),": filter or merge block-level nodes at the same level\n(currently only used in ",(0,o.kt)("a",{parentName:"p",href:"./tokenizer-list"},"@yozora/tokenizer-list"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"parse-block"),": Parse a ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockToken")," into a YAST node"))),(0,o.kt)("h4",{id:"match-block-phase"},"match-block phase"),(0,o.kt)("p",null,"In the process of parsing block nodes, the content is read line by line. The\nblock-level node has a nested structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"{2}","{2}":!0},"> This is a blockquote\n> - This is a list item in blockquote\n> - # This is a setext heading in the list item of the blockquote\n> - > ...\n")),(0,o.kt)("p",null,"As shown in the second line of the above code, when parsing\n",(0,o.kt)("a",{parentName:"p",href:"./tokenizer-list-item"},"ListItem"),", it cannot get the first character in\nthe original document line, but wait for its ancestor elements along the\nexisting nesting structure (such as the above ",(0,o.kt)("a",{parentName:"p",href:"./tokenizer-list-item"},"Blockquote"),")\nto complete the matching, and then gets a matching opportunity. In order to make\nthe tokenizers work with each other transparently, when designing the life cycle\nmethods of the block-level tokenizer in the ",(0,o.kt)("inlineCode",{parentName:"p"},"match-block")," stage, the parsing\nlogic of the nested structure lifted into ","[@yozora/core-parser ][]",", and use a\nspecial data structure called ",(0,o.kt)("inlineCode",{parentName:"p"},"PhrasingContentLine")," as the actual parsing unit\nof a line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface PhrasingContentLine {\n  /**\n   * Start index of interval in nodePoints.\n   */\n  startIndex: number\n  /**\n   * End index of interval in nodePoints.\n   */\n  endIndex: number\n  /**\n   * Array of NodePoint which contains all the contents of this line.\n   */\n  nodePoints: ReadonlyArray<NodePoint>\n  /**\n   * The index of first non-blank character in the rest of the current line\n   */\n  firstNonWhitespaceIndex: number\n  /**\n   * The precede space count, one tab equals four space.\n   * @see https://github.github.com/gfm/#tabs\n   */\n  countOfPrecedeSpaces: number\n}\n")),(0,o.kt)("p",null,"The life cycle methods at this stage is subdivided into the following methods\n(see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/main/packages/core-tokenizer/src/types/lifecycle/match-block.ts"},"match-block")," for the type definition details):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"eatOpener"),": (Required) Try to match a new block node.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"eatAndInterruptPreviousSibling"),": (optional) try to interrupt the previous\nsibling node and match a new block node.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"eatContinuationText"),": (Optional) Try to match the continuation text of current\nblock node, that is, consume the current ",(0,o.kt)("inlineCode",{parentName:"p"},"PhrasingContentLine")," with the current\nblock node. There may be many kinds of results at this stage, which are\ndistinguished according to the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," in the returned result:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"notMatched"),": Not matched.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"closing"),": Matched and this is the last line of the current block node.\nThat is, the current block node is in a saturated state and is closing.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"opening"),": Matched, and not closing yet.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"failedAndRollback"),": The match fails, and the content of the previous lines\nare to be rolled back. For convenience, it is assumed that the rollback\noperation does not affect the previously satisfied nested structure.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"closingAndRollback"),": Matching failed, but only the last line needs to be\nrollback, the current node is still a valid one and will be closed soon.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"eatLazyContinuationText"),": (Optional) Try to match Laziness Continuation Text.\nActually only the ",(0,o.kt)("a",{parentName:"p",href:"./tokenizer-paragraph"},"@yozora/tokenizer-paragraph")," needs to implement this\nmethod, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#phase-1-block-structure"},"https://github.github.com/gfm/#phase-1-block-structure")," step3\nfor details.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"onClose"),": (Optional) Called when the current node is closed, used to perform")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"some cleanup operations.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"extractPhrasingContentLines"),": (Optional) Convert a Block Token generated by\nthe current tokenizer to ",(0,o.kt)("inlineCode",{parentName:"p"},"PhrasingContentLines[]"),". This method is only needed\nwhen the matching node of this type may be rolled back.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"buildBlockToken"),": (Optional) Convert ",(0,o.kt)("inlineCode",{parentName:"p"},"PhrasingContentLines[]")," into a Block Token.\nThis method is only needed when the matching node of this type may be rolled back"))),(0,o.kt)("h4",{id:"post-match-block-phase"},"post-match-block phase"),(0,o.kt)("p",null,"The lifecycle methods at this stage are subdivided into the following methods\n(for complete type definitions, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/main/packages/core-tokenizer/src/types/lifecycle/post-match-block.ts"},"post-match-block"),"):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transformMatch"),": (Required) Convert the sibling nodes of a certain level in\nthe tree obtained in the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/blob/main/packages/core-tokenizer/src/types/lifecycle/match-block.ts"},"match-block")," stage into a new\nblock node list. In fact, this life cycle method is only implemented in\n",(0,o.kt)("a",{parentName:"li",href:"./tokenizer-list"},"@yozora/tokenizer-list"))),(0,o.kt)("h4",{id:"parse-block-phase"},"parse-block phase"),(0,o.kt)("p",null,"The life cycle methods at this stage is subdivided into the following methods\n(see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/main/packages/core-tokenizer/src/types/lifecycle/parse-block.ts"},"parse-block")," for the complete type definition):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parseBlock"),": Convert a Block Token into Yast Node")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"inline-tokenizer"},"Inline Tokenizer"),(0,o.kt)("p",null,"The parsing step of the inline parser is divided into two life cycles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"match-inline"),": Match the inline contents and get an ",(0,o.kt)("inlineCode",{parentName:"li"},"InlineToken")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parse-inline"),": Parse an ",(0,o.kt)("inlineCode",{parentName:"li"},"InlineToken")," into a YAST node")),(0,o.kt)("h4",{id:"match-inline-phase"},"match-inline phase"),(0,o.kt)("p",null,'After a block node is closed, we can start matching inline nodes, so when we\nmatch inline nodes, we get a continuous text without the concept of "line".\nBut inline nodes have priority. For example, link has a higher priority than\nemphasis (see ',(0,o.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#example-529"},"https://github.github.com/gfm/#example-529"),"). In order to enable\nunperceptual coordination between tokenizers, when designing the life cycle\nfunction of the inline tokenizer in the ",(0,o.kt)("inlineCode",{parentName:"p"},"match-inline")," phase, put priority-related\nlogic in ",(0,o.kt)("a",{parentName:"p",href:"./core-parser"},"@yozora/core-parser")," In processing, each tokenizer only provides\nfour types of separators: ",(0,o.kt)("inlineCode",{parentName:"p"},"opener"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"both"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"closer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"full"),". Then the\nprocessor in ",(0,o.kt)("a",{parentName:"p",href:"./core-parser"},"@yozora/core-parser")," completes the coordination work."),(0,o.kt)("p",null,"The lifecycle methods at this stage is subdivided into the following methods\n(see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/blob/main/packages/core-tokenizer/src/types/lifecycle/match-inline.ts"},"match-inline")," for the complete type definition):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"findDelimiter"),": (Required) Find a delimiter"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isDelimiterPair"),": (Optional) Check whether the given two delimiters can match"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"processDelimiterPair"),": (Optional) Process the matched two delimiters. Such as ",(0,o.kt)("a",{parentName:"li",href:"./tokenizer-emphasis"},"@yozora/tokenizer-emphasis")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"processSingleDelimiter"),":  (Optional) Process a single delimiter. Such as ",(0,o.kt)("a",{parentName:"li",href:"./tokenizer-text"},"@yozora/tokenizer-text")," ")),(0,o.kt)("h4",{id:"parser-inline-phase"},"parser-inline phase"),(0,o.kt)("p",null,"The lifecycle methods at this stage is subdivided into the following methods\n(see ","[parse-inline][lifecycle-pase-inline]"," for the complete type definition):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"processToken"),": (Required) Convert an Inline Token to a YAST node.")),(0,o.kt)("h2",{id:"related"},"Related"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/packages/core-tokenizer"},"Sourcecode"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/packages/template-tokenizer#readme"},"@yozora/template-tokenizer")," For creating a Yozora Tokenizer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Block Tokenizer Lifecycle"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/blob/main/packages/core-tokenizer/src/types/lifecycle/match-block.ts"},"match-block")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/blob/main/packages/core-tokenizer/src/types/lifecycle/post-match-block.ts"},"post-match-block")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/blob/main/packages/core-tokenizer/src/types/lifecycle/parse-block.ts"},"parse-block")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Inline Tokenizer Lifecycle"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/blob/main/packages/core-tokenizer/src/types/lifecycle/match-inline.ts"},"match-inline")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/blob/main/packages/core-tokenizer/src/types/lifecycle/parse-inline.ts"},"parse-inline"))))))}u.isMDXComponent=!0}}]);