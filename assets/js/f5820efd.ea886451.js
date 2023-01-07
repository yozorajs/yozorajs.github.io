"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[9383],{98515:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>k,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>h});var n=t(87462),r=(t(67294),t(3905)),o=t(94828),i=t(86023),p=t(10629);const s={id:"tokenizer-autolink",title:"@yozora/tokenizer-autolink",sidebar_label:"autolink"},l=void 0,m={unversionedId:"package/tokenizer-autolink",id:"version-1.x.x/package/tokenizer-autolink",title:"@yozora/tokenizer-autolink",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/tokenizer-autolink.mdx",sourceDirName:"package",slug:"/package/tokenizer-autolink",permalink:"/docs/1.x.x/package/tokenizer-autolink",draft:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1673091576,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{id:"tokenizer-autolink",title:"@yozora/tokenizer-autolink",sidebar_label:"autolink"},sidebar:"Docs",previous:{title:"admonition",permalink:"/docs/1.x.x/package/tokenizer-admonition"},next:{title:"autolink (extension)",permalink:"/docs/1.x.x/package/tokenizer-autolink-extension"}},k={},h=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],d={toc:h};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("header",null,(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-autolink"},(0,r.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-autolink/v1.x.x"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-autolink"},(0,r.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-autolink.svg"})),(0,r.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-autolink"},(0,r.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-autolink.svg"})),(0,r.kt)("a",{href:"#install"},(0,r.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,r.kt)("a",{href:"https://github.com/nodejs/node"},(0,r.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-autolink"})),(0,r.kt)("a",{href:"https://github.com/facebook/jest"},(0,r.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,r.kt)("a",{href:"https://github.com/prettier/prettier"},(0,r.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"github flavor markdown spec",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#autolinks"},"Autolinks")," are ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#absolute-uri"},"absolute URI"),"s and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#email-address"},"email addresses")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"<")," and ",(0,r.kt)("inlineCode",{parentName:"p"},">"),". They are parsed as\nlinks, with the URL or email address as the link label."),(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#uri-autolink"},"URI autolink")," consists of ",(0,r.kt)("inlineCode",{parentName:"p"},"<"),", followed by an\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#absolute-uri"},"absolute URI")," followed by ",(0,r.kt)("inlineCode",{parentName:"p"},">"),". It is parsed as a link to the\nURI, with the URI as the link\u2019s label."),(0,r.kt)("p",{parentName:"admonition"},"An ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#absolute-uri"},"absolute URI"),", for these purposes, consists of a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#scheme"},"scheme"),"\nfollowed by a colon (",(0,r.kt)("inlineCode",{parentName:"p"},":"),") followed by zero or more characters other than ASCII\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#whitespace"},"whitespace")," and control characters, ",(0,r.kt)("inlineCode",{parentName:"p"},"<"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},">"),". If the URI\nincludes these characters, they must be percent-encoded (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"%20")," for a space)."),(0,r.kt)("p",{parentName:"admonition"},"For purposes of this spec, a ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#scheme"},"scheme")," is any sequence of ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"2"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mn",{parentName:"mrow"},"32")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2-32")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"32"))))),"\ncharacters beginning with an ASCII letter and followed by any combination of\nASCII letters, digits, or the symbols plus (",(0,r.kt)("inlineCode",{parentName:"p"},"+"),"), period (",(0,r.kt)("inlineCode",{parentName:"p"},"."),"), or hyphen (",(0,r.kt)("inlineCode",{parentName:"p"},"-"),")."),(0,r.kt)("p",{parentName:"admonition"},"An ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#email-autolink"},"email autolink")," consists of ",(0,r.kt)("inlineCode",{parentName:"p"},"<"),", followed by an\n",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#email-address"},"email address"),", followed by ",(0,r.kt)("inlineCode",{parentName:"p"},">"),". The link\u2019s label is the\nemail address, and the URL is ",(0,r.kt)("inlineCode",{parentName:"p"},"mailto:")," followed by the email address."),(0,r.kt)("p",{parentName:"admonition"},"An ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#email-address"},"email address"),", for these purposes, is anything that\nmatches the ",(0,r.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/multipage/forms.html#e-mail-state-(type=email)"},"non-normative regex from the HTML5 spec"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#autolinks"},"github flavor markdown spec"))," for details."),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression."))),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-autolink\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-autolink\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"./tokenizer-autolink"},"@yozora/tokenizer-autolink")," has been integrated into ",(0,r.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,r.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,r.kt)("a",{parentName:"p",href:"./parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly.")),(0,r.kt)(o.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"basic-usage",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./tokenizer-autolink"},"@yozora/tokenizer-autolink")," cannot be used alone, it needs to be\nregistered in ",(0,r.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport AutolinkTokenizer from '@yozora/tokenizer-autolink'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new AutolinkTokenizer())\n\n// parse source markdown content\nparser.parse(`\n<foo@bar.example.com>\n\n<http://foo.bar.baz>\n\n<made-up-scheme://foo,bar>\n`)\n"))),(0,r.kt)(i.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n<foo@bar.example.com>\n\n<http://foo.bar.baz>\n\n<made-up-scheme://foo,bar>\n`)\n"))),(0,r.kt)(i.Z,{value:"GfmParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n<foo@bar.example.com>\n\n<http://foo.bar.baz>\n\n<made-up-scheme://foo,bar>\n`)\n"))),(0,r.kt)(i.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n<foo@bar.example.com>\n\n<http://foo.bar.baz>\n\n<made-up-scheme://foo,bar>\n`)\n")))),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-autolink"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"priority")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.ATOMIC"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,r.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Exception:")," Delimiters of type ",(0,r.kt)("inlineCode",{parentName:"p"},"full")," are always processed before other type\ndelimiters."))),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./tokenizer-autolink"},"@yozora/tokenizer-autolink")," produce ",(0,r.kt)("a",{parentName:"p",href:"./ast#link"},"Link")," type nodes.\nSee ",(0,r.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { YastParent, YastResource } from '@yozora/ast'\n\nexport const LinkType = 'link'\nexport type LinkType = typeof LinkType\n\n/**\n * Link represents a hyperlink.\n * @see https://github.com/syntax-tree/mdast#link\n * @see https://github.github.com/gfm/#inline-link\n */\nexport interface Link extends YastParent<LinkType>, YastResource {}\n")),(0,r.kt)("h2",{id:"live-examples"},"Live Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#uri-autolink"},"URI autolink"),"."),(0,r.kt)(p.Z,{ids:"602-611",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#email-autolink"},"Email autolink"),"."),(0,r.kt)(p.Z,{ids:"612-614",mdxType:"YozoraGFMLive"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Not autolinks."),(0,r.kt)(p.Z,{ids:"615-620",mdxType:"YozoraGFMLive"}))),(0,r.kt)("h2",{id:"related"},"Related"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./tokenizer-autolink-extension"},"@yozora/tokenizer-autolink-extension")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./tokenizer-link"},"@yozora/tokenizer-link")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./tokenizer-link-reference"},"@yozora/tokenizer-link-reference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/link#readme"},"@yozora/react-link")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/tokenizers/autolink"},"Sourcecode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ast#link"},"Link | Yozora AST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#autolinks"},"Autolinks | Github Flavor Markdown Spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#link"},"Link | Mdast"))))}u.isMDXComponent=!0}}]);