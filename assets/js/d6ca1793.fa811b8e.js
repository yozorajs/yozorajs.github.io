"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[5484],{15237:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return f},toc:function(){return c}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=r(5529),i=r(98448),m=["components"],p={id:"jest-for-tokenizer",title:"@yozora/jest-for-tokenizer",sidebar_label:"jest-for-tokenizer"},l=void 0,f={unversionedId:"package/jest-for-tokenizer",id:"version-1.x.x/package/jest-for-tokenizer",title:"@yozora/jest-for-tokenizer",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/jest-for-tokenzier.mdx",sourceDirName:"package",slug:"/package/jest-for-tokenizer",permalink:"/docs/1.x.x/package/jest-for-tokenizer",tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1651496937,formattedLastUpdatedAt:"5/2/2022",frontMatter:{id:"jest-for-tokenizer",title:"@yozora/jest-for-tokenizer",sidebar_label:"jest-for-tokenizer"},sidebar:"API",previous:{title:"GFM Examples",permalink:"/docs/1.x.x/example/gfm"},next:{title:"template-tokenizer",permalink:"/docs/1.x.x/package/template-tokenizer"}},u={},c=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Related",id:"related",level:2}],k={toc:c};function g(e){var t=e.components,r=(0,a.Z)(e,m);return(0,s.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("header",null,(0,s.kt)("div",{align:"center"},(0,s.kt)("a",{href:"https://www.npmjs.com/package/@yozora/jest-for-tokenizer"},(0,s.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/jest-for-tokenizer/v1.x.x"})),(0,s.kt)("a",{href:"https://www.npmjs.com/package/@yozora/jest-for-tokenizer"},(0,s.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/jest-for-tokenizer.svg"})),(0,s.kt)("a",{href:"https://www.npmjs.com/package/@yozora/jest-for-tokenizer"},(0,s.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/jest-for-tokenizer.svg"})),(0,s.kt)("a",{href:"https://github.com/nodejs/node"},(0,s.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/jest-for-tokenizer"})),(0,s.kt)("a",{href:"https://github.com/facebook/jest"},(0,s.kt)("img",{alt:"Jest Version",src:"https://img.shields.io/npm/dependency-version/@yozora/jest-for-tokenizer/peer/jest"})),(0,s.kt)("a",{href:"https://github.com/prettier/prettier"},(0,s.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,s.kt)("br",null),(0,s.kt)("p",null,"Full examples see ",(0,s.kt)("a",{parentName:"p",href:"../example/gfm"},"GFM examples"),"."),(0,s.kt)("h2",{id:"install"},"Install"),(0,s.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @yozora/jest-for-tokenizer\n"))),(0,s.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @yozora/jest-for-tokenizer\n")))),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Test with ",(0,s.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createTester } from '@yozora/jest-for-tokenizer'\nimport YozoraParser from '@yozora/parser'\nimport CustomTokenizer from '../src'\n\nconst parser = new YozoraParser({\n  defaultParseOptions: {\n    shouldReservePosition: true\n  }\n})\n  .useTokenizer(new CustomTokenizer())\n\n// Run official test cases\ncreateTester(parser)\n  .scan([\n    'gfm/**/*.json',\n    // The following cases are conflict when enabled GFM autolink (extension)\n    // @see https://github.github.com/gfm/#autolinks-extension-\n    '!gfm/**/#616.json',  \n    '!gfm/**/#619.json',\n    '!gfm/**/#620.json',\n  ])\n  .scan('custom')\n  .runTest()\n\n// Run custom test cases\ncreateTester(parser)\n  .scan('fixtures', __dirname)\n  .runTest()\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Test with ",(0,s.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createTester } from '@yozora/jest-for-tokenizer'\nimport GfmParser from '@yozora/parser-gfm'\nimport CustomTokenizer from '../src'\n\nconst parser = new GfmParser({\n  defaultParseOptions: {\n    shouldReservePosition: true\n  }\n})\n  .useTokenizer(new CustomTokenizer())\n\n// Run official test cases\ncreateTester(parser)\n  .scan([\n    'gfm/**/*.json',\n    // The following cases only works when GFM extensions enabled.\n    // @see https://github.github.com/gfm/#tables-extension-\n    // @see https://github.github.com/gfm/#task-list-items-extension-\n    // @see https://github.github.com/gfm/#strikethrough-extension-\n    // @see https://github.github.com/gfm/#autolinks-extension-\n    // @see https://github.github.com/gfm/#disallowed-raw-html-extension-\n    '!gfm/autolink-extension/**/*',\n    '!gfm/delete/**/*',\n    '!gfm/list-item/task list items\\\\(extension\\\\)/**/*',\n    '!gfm/table/**/*',\n  ])\n  .runTest()\n\n// Run custom test cases\ncreateTester(parser)\n  .scan('fixtures', __dirname)\n  .runTest()\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Test with ",(0,s.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createTester } from '@yozora/jest-for-tokenizer'\nimport GfmExParser from '@yozora/parser-gfm-ex'\nimport CustomTokenizer from '../src'\n\nconst parser = new GfmExParser({\n  defaultParseOptions: {\n    shouldReservePosition: true\n  }\n})\n  .useTokenizer(new CustomTokenizer())\n\n// Run official test cases\ncreateTester(parser)\n  .scan([\n    'gfm/**/*.json',\n    // The following cases are conflict when enabled GFM autolink (extension)\n    // @see https://github.github.com/gfm/#example-616\n    '!gfm/**/#616.json',\n    '!gfm/**/#619.json',\n    '!gfm/**/#620.json',\n  ])\n  .runTest()\n\n// Run custom test cases\ncreateTester(parser)\n  .scan('fixtures', __dirname)\n  .runTest()\n")))),(0,s.kt)("h2",{id:"related"},"Related"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/scaffolds/jest-for-tokenizer#readme"},"sourcecode")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex"))))}g.isMDXComponent=!0}}]);