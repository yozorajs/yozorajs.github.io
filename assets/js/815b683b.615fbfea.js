"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[4822],{2046:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return k},default:function(){return f}});var n=r(7462),a=r(3366),s=(r(7294),r(4137)),o=r(7358),i=r(8448),m=["components"],p={id:"jest-for-tokenizer",title:"@yozora/jest-for-tokenizer",sidebar_label:"jest-for-tokenizer"},l=void 0,c={unversionedId:"package/jest-for-tokenizer",id:"package/jest-for-tokenizer",isDocsHomePage:!1,title:"@yozora/jest-for-tokenizer",description:"<img",source:"@site/docs/package/jest-for-tokenzier.mdx",sourceDirName:"package",slug:"/package/jest-for-tokenizer",permalink:"/docs/package/jest-for-tokenizer",version:"current",lastUpdatedAt:1628692499,formattedLastUpdatedAt:"8/11/2021",frontMatter:{id:"jest-for-tokenizer",title:"@yozora/jest-for-tokenizer",sidebar_label:"jest-for-tokenizer"},sidebar:"API",previous:{title:"GFM Examples",permalink:"/docs/example/gfm"},next:{title:"template-tokenizer",permalink:"/docs/package/template-tokenizer"}},k=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Related",id:"related",children:[]}],u={toc:k};function f(e){var t=e.components,r=(0,a.Z)(e,m);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("header",null,(0,s.kt)("div",{align:"center"},(0,s.kt)("a",{href:"https://www.npmjs.com/package/@yozora/jest-for-tokenizer"},(0,s.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/jest-for-tokenizer.svg"})),(0,s.kt)("a",{href:"https://www.npmjs.com/package/@yozora/jest-for-tokenizer"},(0,s.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/jest-for-tokenizer.svg"})),(0,s.kt)("a",{href:"https://www.npmjs.com/package/@yozora/jest-for-tokenizer"},(0,s.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/jest-for-tokenizer.svg"})),(0,s.kt)("a",{href:"https://github.com/nodejs/node"},(0,s.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/jest-for-tokenizer"})),(0,s.kt)("a",{href:"https://github.com/facebook/jest"},(0,s.kt)("img",{alt:"Jest Version",src:"https://img.shields.io/npm/dependency-version/@yozora/jest-for-tokenizer/peer/jest"})),(0,s.kt)("a",{href:"https://github.com/prettier/prettier"},(0,s.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,s.kt)("br",null),(0,s.kt)("p",null,"Full examples see ",(0,s.kt)("a",{parentName:"p",href:"/docs/example/gfm"},"GFM examples"),"."),(0,s.kt)("h2",{id:"install"},"Install"),(0,s.kt)(o.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @yozora/jest-for-tokenizer\n"))),(0,s.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @yozora/jest-for-tokenizer\n")))),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Test with ",(0,s.kt)("a",{parentName:"p",href:"/docs/package/parser"},"@yozora/parser")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createTester } from '@yozora/jest-for-tokenizer'\nimport YozoraParser from '@yozora/parser'\nimport CustomTokenizer from '../src'\n\nconst parser = new YozoraParser({\n  defaultParseOptions: {\n    shouldReservePosition: true\n  }\n})\n  .useTokenizer(new CustomTokenizer())\n\n// Run official test cases\ncreateTester(parser)\n  .scan([\n    'gfm/**/*.json',\n    // The following cases are conflict when enabled GFM autolink (extension)\n    // @see https://github.github.com/gfm/#autolinks-extension-\n    '!gfm/**/#616.json',  \n    '!gfm/**/#619.json',\n    '!gfm/**/#620.json',\n  ])\n  .scan('custom')\n  .runTest()\n\n// Run custom test cases\ncreateTester(parser)\n  .scan('fixtures', __dirname)\n  .runTest()\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Test with ",(0,s.kt)("a",{parentName:"p",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createTester } from '@yozora/jest-for-tokenizer'\nimport GfmParser from '@yozora/parser-gfm'\nimport CustomTokenizer from '../src'\n\nconst parser = new GfmParser({\n  defaultParseOptions: {\n    shouldReservePosition: true\n  }\n})\n  .useTokenizer(new CustomTokenizer())\n\n// Run official test cases\ncreateTester(parser)\n  .scan([\n    'gfm/**/*.json',\n    // The following cases only works when GFM extensions enabled.\n    // @see https://github.github.com/gfm/#tables-extension-\n    // @see https://github.github.com/gfm/#task-list-items-extension-\n    // @see https://github.github.com/gfm/#strikethrough-extension-\n    // @see https://github.github.com/gfm/#autolinks-extension-\n    // @see https://github.github.com/gfm/#disallowed-raw-html-extension-\n    '!gfm/autolink-extension/**/*',\n    '!gfm/delete/**/*',\n    '!gfm/list-item/task list items\\\\(extension\\\\)/**/*',\n    '!gfm/table/**/*',\n  ])\n  .runTest()\n\n// Run custom test cases\ncreateTester(parser)\n  .scan('fixtures', __dirname)\n  .runTest()\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Test with ",(0,s.kt)("a",{parentName:"p",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createTester } from '@yozora/jest-for-tokenizer'\nimport GfmExParser from '@yozora/parser-gfm-ex'\nimport CustomTokenizer from '../src'\n\nconst parser = new GfmExParser({\n  defaultParseOptions: {\n    shouldReservePosition: true\n  }\n})\n  .useTokenizer(new CustomTokenizer())\n\n// Run official test cases\ncreateTester(parser)\n  .scan([\n    'gfm/**/*.json',\n    // The following cases are conflict when enabled GFM autolink (extension)\n    // @see https://github.github.com/gfm/#example-616\n    '!gfm/**/#616.json',\n    '!gfm/**/#619.json',\n    '!gfm/**/#620.json',\n  ])\n  .runTest()\n\n// Run custom test cases\ncreateTester(parser)\n  .scan('fixtures', __dirname)\n  .runTest()\n")))),(0,s.kt)("h2",{id:"related"},"Related"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/scaffolds/jest-for-tokenizer#readme"},"sourcecode")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/package/parser"},"@yozora/parser")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex"))))}f.isMDXComponent=!0}}]);