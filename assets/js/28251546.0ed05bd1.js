(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[4517],{5352:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return k},toc:function(){return d},default:function(){return u}});var n=a(2122),r=a(9756),i=(a(7294),a(4137)),o=a(7358),l=a(8448),p=a(627),s={id:"tokenizer-autolink-extension",title:"@yozora/tokenizer-autolink-extension",sidebar_label:"autolink (extension)"},m=void 0,k={unversionedId:"package/tokenizer-autolink-extension",id:"package/tokenizer-autolink-extension",isDocsHomePage:!1,title:"@yozora/tokenizer-autolink-extension",description:"<img",source:"@site/docs/package/tokenizer-autolink-extension.mdx",sourceDirName:"package",slug:"/package/tokenizer-autolink-extension",permalink:"/docs/package/tokenizer-autolink-extension",version:"current",lastUpdatedAt:1626174113,formattedLastUpdatedAt:"7/13/2021",frontMatter:{id:"tokenizer-autolink-extension",title:"@yozora/tokenizer-autolink-extension",sidebar_label:"autolink (extension)"},sidebar:"Docs",previous:{title:"autolink",permalink:"/docs/package/tokenizer-autolink"},next:{title:"blockquote",permalink:"/docs/package/tokenizer-blockquote"}},d=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[]},{value:"Types",id:"types",children:[]}]},{value:"Live Examples",id:"live-examples",children:[]},{value:"Related",id:"related",children:[]}],c={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("header",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-autolink-extension"},(0,i.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-autolink-extension.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-autolink-extension"},(0,i.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-autolink-extension.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-autolink-extension"},(0,i.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-autolink-extension.svg"})),(0,i.kt)("a",{href:"#install"},(0,i.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,i.kt)("a",{href:"https://github.com/nodejs/node"},(0,i.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-autolink-extension"})),(0,i.kt)("a",{href:"https://github.com/facebook/jest"},(0,i.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,i.kt)("a",{href:"https://github.com/prettier/prettier"},(0,i.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"github flavor markdown spec")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"GFM enables the ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#autolinks-extension-"},"autolink extension"),", where autolinks\nwill be recognised in a greater number of conditions."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#autolinks"},"Autolinks")," can also be constructed without requiring the use of\n",(0,i.kt)("inlineCode",{parentName:"p"},"<")," and to ",(0,i.kt)("inlineCode",{parentName:"p"},">")," to delimit them, although they will be recognized under a smaller\nset of circumstances. All such recognized autolinks can only come at the\nbeginning of a line, after whitespace, or any of the delimiting characters\n",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"~"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"("),"."),(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#extended-www-autolink"},"extended www autolink")," will be recognized when\nthe text ",(0,i.kt)("inlineCode",{parentName:"p"},"www.")," is found followed by a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#valid-domain"},"valid domain"),". A\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#valid-domain"},"valid domain")," consists of segments of alphanumeric characters,\nunderscores (",(0,i.kt)("inlineCode",{parentName:"p"},"_"),") and hyphens (",(0,i.kt)("inlineCode",{parentName:"p"},"-"),") separated by periods (",(0,i.kt)("inlineCode",{parentName:"p"},"."),"). There must be\nat least one period, and no underscores may be present in the last two segments\nof the domain. We then apply ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#extended-autolink-path-validation"},"extended autolink path validation"),"\nas follows:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Trailing punctuation (specifically, ",(0,i.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"!"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"."),", ",(0,i.kt)("inlineCode",{parentName:"li"},","),", ",(0,i.kt)("inlineCode",{parentName:"li"},":"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"_"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"~"),")\nwill not be considered part of the autolink, though they may be included in the\ninterior of the link.")),(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#extended-url-autolink"},"extended url autolink")," will be recognised when\none of the schemes ",(0,i.kt)("inlineCode",{parentName:"p"},"http://"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"https://"),", followed by a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#valid-domain"},"valid domain"),", then zero or more non-space non-",(0,i.kt)("inlineCode",{parentName:"p"},"<")," characters\naccording to ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#extended-autolink-path-validation"},"extended autolink path validation"),"."),(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#extended-email-autolink"},"extended email autolink")," will be recognised when\nan email address is recognised within any text node. Email addresses are\nrecognised according to the following rules:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"One ore more characters which are alphanumeric, or ",(0,i.kt)("inlineCode",{parentName:"li"},"."),", ",(0,i.kt)("inlineCode",{parentName:"li"},"-"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"_"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"+"),"."),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("inlineCode",{parentName:"li"},"@")," symbol."),(0,i.kt)("li",{parentName:"ul"},"One or more characters which are alphanumeric, or ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"_"),", separated by\nperiods (",(0,i.kt)("inlineCode",{parentName:"li"},"."),"). There must be at least one period. The last character must\nnot be one of ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"_"),".")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#autolinks-extension-"},"github flavor markdown spec"))," for details."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression.")))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(o.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-autolink-extension\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-autolink-extension\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-autolink-extension"},"@yozora/tokenizer-autolink-extension")," has been integrated into ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/parser"},"@yozora/parser")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex"),",\nso you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmExParser")," directly."))),(0,i.kt)(o.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"basic-usage",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-autolink-extension"},"@yozora/tokenizer-autolink-extension")," cannot be used alone, it needs to be\nregistered in ",(0,i.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport AutolinkExtensionTokenizer from '@yozora/tokenizer-autolink-extension'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new AutolinkExtensionTokenizer())\n\n// parse source markdown content\nparser.parse(`\nfoo@bar.example.com\n\nhttp://foo.bar.baz\n\nmade-up-scheme://foo,bar\n`)\n"))),(0,i.kt)(l.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\nfoo@bar.example.com\n\nhttp://foo.bar.baz\n\nmade-up-scheme://foo,bar\n`)\n"))),(0,i.kt)(l.Z,{value:"GfmParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{2,5}","{2,5}":!0},"import GfmParser from '@yozora/parser-gfm'\nimport AutolinkExtensionTokenizer from '@yozora/tokenizer-autolink-extension'\n\nconst parser = new GfmParser()\nparser.useTokenizer(new AutolinkExtensionTokenizer())\n\n// parse source markdown content\nparser.parse(`\nfoo@bar.example.com\n\nhttp://foo.bar.baz\n\nmade-up-scheme://foo,bar\n`)\n"))),(0,i.kt)(l.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\nfoo@bar.example.com\n\nhttp://foo.bar.baz\n\nmade-up-scheme://foo,bar\n`)\n")))),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-autolink-extension"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"priority")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,i.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Exception:")," Delimiters of type ",(0,i.kt)("inlineCode",{parentName:"p"},"full")," are always processed before other type\ndelimiters."))),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-autolink-extension"},"@yozora/tokenizer-autolink-extension")," produce ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/ast#link"},"Link")," type nodes.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/ast"},"@yozora/ast")," for full base types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { YastParent, YastResource } from '@yozora/ast'\n\nexport const LinkType = 'link'\nexport type LinkType = typeof LinkType\n\n/**\n * Link represents a hyperlink.\n * @see https://github.com/syntax-tree/mdast#link\n * @see https://github.github.com/gfm/#inline-link\n */\nexport interface Link extends YastParent<LinkType>, YastResource {}\n")),(0,i.kt)("h2",{id:"live-examples"},"Live Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#extended-www-autolink"},"Extended www autolink")),(0,i.kt)(p.Z,{ids:"621-628",initialExpanded:!1,initialParserName:"ex-gfm",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"[Extended email autolink][gfm-extended-email-autolink]"),(0,i.kt)(p.Z,{ids:"629-631",initialExpanded:!1,initialParserName:"ex-gfm",mdxType:"YozoraGFMLive"}))),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/ast"},"@yozora/ast")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser"},"@yozora/parser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-autolink"},"@yozora/tokenizer-autolink")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/autolink-extension"},"Sourcecode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#autolinks-extension-"},"Autolinks (extension) | Github Flavor Markdown Spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#link"},"Link | Mdast"))))}u.isMDXComponent=!0}}]);