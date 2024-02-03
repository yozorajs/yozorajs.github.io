"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[6416],{9548:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>x});var i=r(7624),t=r(4552),s=r(6212),o=r(2440),a=r(7360);const l={id:"tokenizer-autolink-extension",title:"@yozora/tokenizer-autolink-extension",sidebar_label:"autolink (extension)"},c=void 0,d={id:"package/tokenizer-autolink-extension",title:"@yozora/tokenizer-autolink-extension",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/tokenizer-autolink-extension.mdx",sourceDirName:"package",slug:"/package/tokenizer-autolink-extension",permalink:"/docs/1.x.x/package/tokenizer-autolink-extension",draft:!1,unlisted:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1706961465,formattedLastUpdatedAt:"Feb 3, 2024",frontMatter:{id:"tokenizer-autolink-extension",title:"@yozora/tokenizer-autolink-extension",sidebar_label:"autolink (extension)"},sidebar:"Docs",previous:{title:"autolink",permalink:"/docs/1.x.x/package/tokenizer-autolink"},next:{title:"blockquote",permalink:"/docs/1.x.x/package/tokenizer-blockquote"}},h={},x=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{align:"center",children:[(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-autolink-extension",children:(0,i.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-autolink-extension/v1.x.x"})}),(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-autolink-extension",children:(0,i.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-autolink-extension.svg"})}),(0,i.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-autolink-extension",children:(0,i.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-autolink-extension.svg"})}),(0,i.jsx)("a",{href:"#install",children:(0,i.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,i.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,i.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-autolink-extension"})}),(0,i.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,i.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,i.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,i.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.admonition,{title:"github flavor markdown spec",type:"note",children:[(0,i.jsxs)(n.p,{children:["GFM enables the ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#autolinks-extension-",children:"autolink extension"}),", where autolinks\nwill be recognised in a greater number of conditions."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#autolinks",children:"Autolinks"})," can also be constructed without requiring the use of\n",(0,i.jsx)(n.code,{children:"<"})," and to ",(0,i.jsx)(n.code,{children:">"})," to delimit them, although they will be recognized under a smaller\nset of circumstances. All such recognized autolinks can only come at the\nbeginning of a line, after whitespace, or any of the delimiting characters\n",(0,i.jsx)(n.code,{children:"*"}),", ",(0,i.jsx)(n.code,{children:"_"}),", ",(0,i.jsx)(n.code,{children:"~"}),", and ",(0,i.jsx)(n.code,{children:"("}),"."]}),(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#extended-www-autolink",children:"extended www autolink"})," will be recognized when\nthe text ",(0,i.jsx)(n.code,{children:"www."})," is found followed by a ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#valid-domain",children:"valid domain"}),". A\n",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#valid-domain",children:"valid domain"})," consists of segments of alphanumeric characters,\nunderscores (",(0,i.jsx)(n.code,{children:"_"}),") and hyphens (",(0,i.jsx)(n.code,{children:"-"}),") separated by periods (",(0,i.jsx)(n.code,{children:"."}),"). There must be\nat least one period, and no underscores may be present in the last two segments\nof the domain. We then apply ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#extended-autolink-path-validation",children:"extended autolink path validation"}),"\nas follows:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Trailing punctuation (specifically, ",(0,i.jsx)(n.code,{children:"?"}),", ",(0,i.jsx)(n.code,{children:"!"}),", ",(0,i.jsx)(n.code,{children:"."}),", ",(0,i.jsx)(n.code,{children:","}),", ",(0,i.jsx)(n.code,{children:":"}),", ",(0,i.jsx)(n.code,{children:"*"}),", ",(0,i.jsx)(n.code,{children:"_"}),", and ",(0,i.jsx)(n.code,{children:"~"}),")\nwill not be considered part of the autolink, though they may be included in the\ninterior of the link."]}),"\n"]}),(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#extended-url-autolink",children:"extended url autolink"})," will be recognised when\none of the schemes ",(0,i.jsx)(n.code,{children:"http://"}),", or ",(0,i.jsx)(n.code,{children:"https://"}),", followed by a\n",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#valid-domain",children:"valid domain"}),", then zero or more non-space non-",(0,i.jsx)(n.code,{children:"<"})," characters\naccording to ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#extended-autolink-path-validation",children:"extended autolink path validation"}),"."]}),(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#extended-email-autolink",children:"extended email autolink"})," will be recognised when\nan email address is recognised within any text node. Email addresses are\nrecognised according to the following rules:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["One ore more characters which are alphanumeric, or ",(0,i.jsx)(n.code,{children:"."}),", ",(0,i.jsx)(n.code,{children:"-"}),", ",(0,i.jsx)(n.code,{children:"_"}),", or ",(0,i.jsx)(n.code,{children:"+"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["An ",(0,i.jsx)(n.code,{children:"@"})," symbol."]}),"\n",(0,i.jsxs)(n.li,{children:["One or more characters which are alphanumeric, or ",(0,i.jsx)(n.code,{children:"-"})," or ",(0,i.jsx)(n.code,{children:"_"}),", separated by\nperiods (",(0,i.jsx)(n.code,{children:"."}),"). There must be at least one period. The last character must\nnot be one of ",(0,i.jsx)(n.code,{children:"-"})," or ",(0,i.jsx)(n.code,{children:"_"}),"."]}),"\n"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["See ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#autolinks-extension-",children:"github flavor markdown spec"})})," for details."]}),"\n",(0,i.jsxs)(n.li,{children:["See ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"#live-examples",children:"Live Examples"})})," for an intuitive impression."]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsxs)(s.c,{groupId:"npm2yarn",children:[(0,i.jsx)(o.c,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save @yozora/tokenizer-autolink-extension\n"})})}),(0,i.jsx)(o.c,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @yozora/tokenizer-autolink-extension\n"})})}),(0,i.jsx)(o.c,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @yozora/tokenizer-autolink-extension\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"./tokenizer-autolink-extension",children:"@yozora/tokenizer-autolink-extension"})," has been integrated into ",(0,i.jsx)(n.a,{href:"./parser",children:"@yozora/parser"})," / ",(0,i.jsx)(n.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"}),",\nso you can use ",(0,i.jsx)(n.code,{children:"YozoraParser"})," / ",(0,i.jsx)(n.code,{children:"GfmExParser"})," directly."]})}),"\n",(0,i.jsxs)(s.c,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],children:[(0,i.jsxs)(o.c,{value:"basic-usage",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"./tokenizer-autolink-extension",children:"@yozora/tokenizer-autolink-extension"})," cannot be used alone, it needs to be\nregistered in ",(0,i.jsx)(n.em,{children:"YastParser"})," as a plugin-in before it can be used."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"{4,9}",children:"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport AutolinkExtensionTokenizer from '@yozora/tokenizer-autolink-extension'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new AutolinkExtensionTokenizer())\n\n// parse source markdown content\nparser.parse(`\nfoo@bar.example.com\n\nhttp://foo.bar.baz\n\nmade-up-scheme://foo,bar\n`)\n"})})]}),(0,i.jsx)(o.c,{value:"YozoraParser",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\nfoo@bar.example.com\n\nhttp://foo.bar.baz\n\nmade-up-scheme://foo,bar\n`)\n"})})}),(0,i.jsx)(o.c,{value:"GfmParser",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"{2,5}",children:"import GfmParser from '@yozora/parser-gfm'\nimport AutolinkExtensionTokenizer from '@yozora/tokenizer-autolink-extension'\n\nconst parser = new GfmParser()\nparser.useTokenizer(new AutolinkExtensionTokenizer())\n\n// parse source markdown content\nparser.parse(`\nfoo@bar.example.com\n\nhttp://foo.bar.baz\n\nmade-up-scheme://foo,bar\n`)\n"})})}),(0,i.jsx)(o.c,{value:"GfmExParser",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\nfoo@bar.example.com\n\nhttp://foo.bar.baz\n\nmade-up-scheme://foo,bar\n`)\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"name"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:'"@yozora/tokenizer-autolink-extension"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"priority"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"TokenizerPriority.ATOMIC"})})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"name"}),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,i.jsx)(n.em,{children:"matching / parsing"})," phase."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"priority"}),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,i.jsx)(n.code,{children:"match-block"}),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Exception:"})," Delimiters of type ",(0,i.jsx)(n.code,{children:"full"})," are always processed before other type\ndelimiters."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"./tokenizer-autolink-extension",children:"@yozora/tokenizer-autolink-extension"})," produce ",(0,i.jsx)(n.a,{href:"./ast#link",children:"Link"})," type nodes.\nSee ",(0,i.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})," for full base types."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import type { YastParent, YastResource } from '@yozora/ast'\n\nexport const LinkType = 'link'\nexport type LinkType = typeof LinkType\n\n/**\n * Link represents a hyperlink.\n * @see https://github.com/syntax-tree/mdast#link\n * @see https://github.github.com/gfm/#inline-link\n */\nexport interface Link extends YastParent<LinkType>, YastResource {}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#extended-www-autolink",children:"Extended www autolink"})}),"\n",(0,i.jsx)(a.c,{ids:"621-628",initialParserType:"gfm-ex"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"[Extended email autolink][gfm-extended-email-autolink]"}),"\n",(0,i.jsx)(a.c,{ids:"629-631",initialParserType:"gfm-ex"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./parser",children:"@yozora/parser"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-autolink-extension",children:"@yozora/tokenizer-autolink-extension"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-link",children:"@yozora/tokenizer-link"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./tokenizer-link-reference",children:"@yozora/tokenizer-link-reference"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/link#readme",children:"@yozora/react-link"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme",children:"@yozora/react-markdown"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/tokenizers/autolink-extension",children:"Sourcecode"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./ast#link",children:"Link | Yozora AST"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.github.com/gfm/#autolinks-extension-",children:"Autolinks (extension) | Github Flavor Markdown Spec"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/syntax-tree/mdast#link",children:"Link | Mdast"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);