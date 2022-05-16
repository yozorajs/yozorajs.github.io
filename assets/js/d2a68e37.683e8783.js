"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[3506],{84590:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(5529),p=a(68111),s=a(29430),l=["components"],m={id:"tokenizer-autolink",title:"@yozora/tokenizer-autolink",sidebar_label:"autolink"},k=void 0,d={unversionedId:"package/tokenizer-autolink",id:"package/tokenizer-autolink",title:"@yozora/tokenizer-autolink",description:"<img",source:"@site/docs/package/tokenizer-autolink.mdx",sourceDirName:"package",slug:"/package/tokenizer-autolink",permalink:"/docs/next/package/tokenizer-autolink",draft:!1,tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1652709647,formattedLastUpdatedAt:"5/16/2022",frontMatter:{id:"tokenizer-autolink",title:"@yozora/tokenizer-autolink",sidebar_label:"autolink"},sidebar:"Docs",previous:{title:"admonition",permalink:"/docs/next/package/tokenizer-admonition"},next:{title:"autolink (extension)",permalink:"/docs/next/package/tokenizer-autolink-extension"}},h={},u=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],c={toc:u};function g(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("header",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-autolink"},(0,i.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-autolink/latest"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-autolink"},(0,i.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-autolink.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-autolink"},(0,i.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-autolink.svg"})),(0,i.kt)("a",{href:"#install"},(0,i.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,i.kt)("a",{href:"https://github.com/nodejs/node"},(0,i.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-autolink"})),(0,i.kt)("a",{href:"https://github.com/facebook/jest"},(0,i.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,i.kt)("a",{href:"https://github.com/prettier/prettier"},(0,i.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"github flavor markdown spec")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#autolinks"},"Autolinks")," are ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#absolute-uri"},"absolute URI"),"s and\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#email-address"},"email addresses")," inside ",(0,i.kt)("inlineCode",{parentName:"p"},"<")," and ",(0,i.kt)("inlineCode",{parentName:"p"},">"),". They are parsed as\nlinks, with the URL or email address as the link label."),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#uri-autolink"},"URI autolink")," consists of ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),", followed by an\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#absolute-uri"},"absolute URI")," followed by ",(0,i.kt)("inlineCode",{parentName:"p"},">"),". It is parsed as a link to the\nURI, with the URI as the link\u2019s label."),(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#absolute-uri"},"absolute URI"),", for these purposes, consists of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#scheme"},"scheme"),"\nfollowed by a colon (",(0,i.kt)("inlineCode",{parentName:"p"},":"),") followed by zero or more characters other than ASCII\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace")," and control characters, ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},">"),". If the URI\nincludes these characters, they must be percent-encoded (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"%20")," for a space)."),(0,i.kt)("p",{parentName:"div"},"For purposes of this spec, a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#scheme"},"scheme")," is any sequence of ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"2"),(0,i.kt)("mtext",{parentName:"mrow"},"\u2013"),(0,i.kt)("mn",{parentName:"mrow"},"32")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2\u201332")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"mord"},"\u2013"),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"),(0,i.kt)("span",{parentName:"span",className:"mord"},"2"))))),"\ncharacters beginning with an ASCII letter and followed by any combination of\nASCII letters, digits, or the symbols plus (",(0,i.kt)("inlineCode",{parentName:"p"},"+"),"), period (",(0,i.kt)("inlineCode",{parentName:"p"},"."),"), or hyphen (",(0,i.kt)("inlineCode",{parentName:"p"},"-"),")."),(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#email-autolink"},"email autolink")," consists of ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),", followed by an\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#email-address"},"email address"),", followed by ",(0,i.kt)("inlineCode",{parentName:"p"},">"),". The link\u2019s label is the\nemail address, and the URL is ",(0,i.kt)("inlineCode",{parentName:"p"},"mailto:")," followed by the email address."),(0,i.kt)("p",{parentName:"div"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#email-address"},"email address"),", for these purposes, is anything that\nmatches the ",(0,i.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/multipage/forms.html#e-mail-state-(type=email)"},"non-normative regex from the HTML5 spec"),":"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/\n")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#autolinks"},"github flavor markdown spec"))," for details."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression.")))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-autolink\n"))),(0,i.kt)(p.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-autolink\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"./tokenizer-autolink"},"@yozora/tokenizer-autolink")," has been integrated into ",(0,i.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,i.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,i.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly."))),(0,i.kt)(o.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"basic-usage",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./tokenizer-autolink"},"@yozora/tokenizer-autolink")," cannot be used alone, it needs to be\nregistered in ",(0,i.kt)("em",{parentName:"p"},"Parser")," as a plugin-in before it can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport AutolinkTokenizer from '@yozora/tokenizer-autolink'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new AutolinkTokenizer())\n\n// parse source markdown content\nparser.parse(`\n<foo@bar.example.com>\n\n<http://foo.bar.baz>\n\n<made-up-scheme://foo,bar>\n`)\n"))),(0,i.kt)(p.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n<foo@bar.example.com>\n\n<http://foo.bar.baz>\n\n<made-up-scheme://foo,bar>\n`)\n"))),(0,i.kt)(p.Z,{value:"GfmParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n<foo@bar.example.com>\n\n<http://foo.bar.baz>\n\n<made-up-scheme://foo,bar>\n`)\n"))),(0,i.kt)(p.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n<foo@bar.example.com>\n\n<http://foo.bar.baz>\n\n<made-up-scheme://foo,bar>\n`)\n")))),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-autolink"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"priority")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,i.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Exception:")," Delimiters of type ",(0,i.kt)("inlineCode",{parentName:"p"},"full")," are always processed before other type\ndelimiters."))),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./tokenizer-autolink"},"@yozora/tokenizer-autolink")," produce ",(0,i.kt)("a",{parentName:"p",href:"./ast#link"},"Link")," type nodes.\nSee ",(0,i.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Parent, Resource } from '@yozora/ast'\n\nexport const LinkType = 'link'\nexport type LinkType = typeof LinkType\n\n/**\n * Link represents a hyperlink.\n * @see https://github.com/syntax-tree/mdast#link\n * @see https://github.github.com/gfm/#inline-link\n */\nexport interface Link extends Parent<LinkType>, Resource {}\n")),(0,i.kt)("h2",{id:"live-examples"},"Live Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#uri-autolink"},"URI autolink"),"."),(0,i.kt)(s.Z,{ids:"602-611",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#email-autolink"},"Email autolink"),"."),(0,i.kt)(s.Z,{ids:"612-614",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Not autolinks."),(0,i.kt)(s.Z,{ids:"615-620",mdxType:"YozoraGFMLive"}))),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./tokenizer-autolink-extension"},"@yozora/tokenizer-autolink-extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./tokenizer-link"},"@yozora/tokenizer-link")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./tokenizer-link-reference"},"@yozora/tokenizer-link-reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/link#readme"},"@yozora/react-link")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/autolink"},"Sourcecode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ast#link"},"Link | Yozora AST")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#autolinks"},"Autolinks | Github Flavor Markdown Spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#link"},"Link | Mdast"))))}g.isMDXComponent=!0}}]);