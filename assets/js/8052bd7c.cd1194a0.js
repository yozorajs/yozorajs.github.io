"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[5918],{7953:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>x});var r=s(4848),t=s(8453),i=s(9489),a=s(7227),c=s(7874);const o={id:"tokenizer-fenced-code",title:"@yozora/tokenizer-fenced-code",sidebar_label:"fenced-code"},d=void 0,l={id:"package/tokenizer-fenced-code",title:"@yozora/tokenizer-fenced-code",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/tokenizer-fenced-code.mdx",sourceDirName:"package",slug:"/package/tokenizer-fenced-code",permalink:"/docs/1.x.x/package/tokenizer-fenced-code",draft:!1,unlisted:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1710076334,formattedLastUpdatedAt:"Mar 10, 2024",frontMatter:{id:"tokenizer-fenced-code",title:"@yozora/tokenizer-fenced-code",sidebar_label:"fenced-code"},sidebar:"Docs",previous:{title:"emphasis",permalink:"/docs/1.x.x/package/tokenizer-emphasis"},next:{title:"footnote",permalink:"/docs/1.x.x/package/tokenizer-footnote"}},h={},x=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}];function p(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("header",{children:(0,r.jsxs)("div",{align:"center",children:[(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-fenced-code",children:(0,r.jsx)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-fenced-code/v1.x.x"})}),(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-fenced-code",children:(0,r.jsx)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-fenced-code.svg"})}),(0,r.jsx)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-fenced-code",children:(0,r.jsx)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-fenced-code.svg"})}),(0,r.jsx)("a",{href:"#install",children:(0,r.jsx)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})}),(0,r.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,r.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-fenced-code"})}),(0,r.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,r.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,r.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,r.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.admonition,{title:"github flavor markdown spec",type:"note",children:[(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#code-fence",children:"code fence"})," is a sequence of at least three consecutive\nbacktick characters (",(0,r.jsx)(n.code,{children:"`"}),") or tildes (",(0,r.jsx)(n.code,{children:"~"}),"). (Tildes and backticks cannot be\nmixed.) A ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#fenced-code-block",children:"fenced code block"})," begins with a code fence,\nindented no more than three spaces."]}),(0,r.jsxs)(n.p,{children:["The line with the opening code fence may optionally contain some text following\nthe code fence; this is trimmed of leading and trailing whitespace and called\nthe ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#info-string",children:"info string"}),". If the ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#info-string",children:"info string"})," comes\nafter a backtick fence, it may not contain any backtick characters. (The reason\nfor this restriction is that otherwise some inline code would be incorrectly\ninterpreted as the beginning of a fenced code block.)"]}),(0,r.jsxs)(n.p,{children:["The content of the code block consists of all subsequent lines, until a closing\n",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#code-fence",children:"code fence"})," of the same type as the code block began with\n(backticks or tildes), and with at least as many backticks or tildes as the\nopening code fence. If the leading code fence is indented ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsx)(n.mrow,{children:(0,r.jsx)(n.mi,{children:"N"})}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"N"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})})]})," spaces, then up\nto ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsx)(n.mrow,{children:(0,r.jsx)(n.mi,{children:"N"})}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"N"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})})]})," spaces of indentation are removed from each line of the content\n(if present). (If a content line is not indented, it is preserved unchanged.\nIf it is indented less than ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsx)(n.mrow,{children:(0,r.jsx)(n.mi,{children:"N"})}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"N"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})})]})," spaces, all of the indentation is removed.)"]}),(0,r.jsx)(n.p,{children:"The closing code fence may be indented up to three spaces, and may be followed\nonly by spaces, which are ignored. If the end of the containing block\n(or document) is reached and no closing code fence has been found, the code block\ncontains all of the lines after the opening code fence until the end of the\ncontaining block (or document). (An alternative spec would require backtracking\nin the event that a closing code fence is not found. But this makes parsing much\nless efficient, and there seems to be no real down side to the behavior\ndescribed here.)"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["See ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#fenced-code-block",children:"github flavor markdown spec"})})," for details."]}),"\n",(0,r.jsxs)(n.li,{children:["See ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"#live-examples",children:"Live Examples"})})," for an intuitive impression."]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,r.jsx)(a.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save @yozora/tokenizer-fenced-code\n"})})}),(0,r.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @yozora/tokenizer-fenced-code\n"})})}),(0,r.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @yozora/tokenizer-fenced-code\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"./tokenizer-fenced-code",children:"@yozora/tokenizer-fenced-code"})," has been integrated into ",(0,r.jsx)(n.a,{href:"./parser",children:"@yozora/parser"})," / ",(0,r.jsx)(n.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})," / ",(0,r.jsx)(n.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"}),",\nso you can use ",(0,r.jsx)(n.code,{children:"YozoraParser"})," / ",(0,r.jsx)(n.code,{children:"GfmExParser"})," / ",(0,r.jsx)(n.code,{children:"GfmParser"})," directly."]})}),"\n",(0,r.jsxs)(i.A,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],children:[(0,r.jsxs)(a.A,{value:"basic-usage",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"./tokenizer-fenced-code",children:"@yozora/tokenizer-fenced-code"})," cannot be used alone, it needs to be\nregistered in ",(0,r.jsx)(n.em,{children:"YastParser"})," as a plugin-in before it can be used."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:"{4,9}",children:"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport FencedCodeTokenizer from '@yozora/tokenizer-fenced-code'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new FencedCodeTokenizer())\n\n// parse source markdown content\nparser.parse(`\n\\`\\`\\`ruby\ndef foo(x)\n  return 3\nend\n\\`\\`\\`\n\n~~~typescript\nexport const foo: string = 'waw'\n~~~\n# baz\n`)\n"})})]}),(0,r.jsx)(a.A,{value:"YozoraParser",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n\\`\\`\\`ruby\ndef foo(x)\n  return 3\nend\n\\`\\`\\`\n\n~~~typescript\nexport const foo: string = 'waw'\n~~~\n# baz\n`)\n"})})}),(0,r.jsx)(a.A,{value:"GfmParser",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n\\`\\`\\`ruby\ndef foo(x)\n  return 3\nend\n\\`\\`\\`\n\n~~~typescript\nexport const foo: string = 'waw'\n~~~\n# baz\n`)\n"})})}),(0,r.jsx)(a.A,{value:"GfmExParser",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n\\`\\`\\`ruby\ndef foo(x)\n  return 3\nend\n\\`\\`\\`\n\n~~~typescript\nexport const foo: string = 'waw'\n~~~\n# baz\n`)\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"name"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:'"@yozora/tokenizer-fenced-code"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"priority"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"TokenizerPriority.FENCED_BLOCK"})})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"name"}),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,r.jsx)(n.em,{children:"matching / parsing"})," phase."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"priority"}),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,r.jsx)(n.code,{children:"match-block"}),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"./tokenizer-fenced-code",children:"@yozora/tokenizer-fenced-code"})," produce ",(0,r.jsx)(n.a,{href:"./ast#code",children:"Code"})," type nodes.\nSee ",(0,r.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})," for full base types."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import type { YastLiteral } from '@yozora/ast'\n\nexport const CodeType = 'code'\nexport type CodeType = typeof CodeType\n\n/**\n * Code represents a block of preformatted text, such as ASCII art or computer\n * code.\n * @see https://github.com/syntax-tree/mdast#code\n * @see https://github.github.com/gfm/#code-fence\n */\nexport interface Code extends YastLiteral<CodeType> {\n  /**\n   * Language of the codes\n   */\n  lang?: string\n  /**\n   * Meta info string\n   */\n  meta?: string\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"live-examples",children:"Live Examples"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Basic."}),"\n",(0,r.jsx)(c.Rr,{ids:"89-90"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fewer than three backticks is not enough."}),"\n",(0,r.jsx)(c.Rr,{ids:"91"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The closing code fence must use the same character as the opening fence."}),"\n",(0,r.jsx)(c.Rr,{ids:"92-93"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The closing code fence must be at least as long as the opening fence."}),"\n",(0,r.jsx)(c.Rr,{ids:"94-95"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Unclosed code blocks are closed by the end of the document (or the\nenclosing block quote or list item)."}),"\n",(0,r.jsx)(c.Rr,{ids:"96-98"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A code block can have all empty lines as its content."}),"\n",(0,r.jsx)(c.Rr,{ids:"99"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A code block can be empty."}),"\n",(0,r.jsx)(c.Rr,{ids:"100"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fences can be indented. If the opening fence is indented, content lines will\nhave equivalent opening indentation removed, if present."}),"\n",(0,r.jsx)(c.Rr,{ids:"101-103"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Four spaces indentation produces an indented code block."}),"\n",(0,r.jsx)(c.Rr,{ids:"104"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Closing fences may be indented by 0-3 spaces, and their indentation need\nnot match that of the opening fence."}),"\n",(0,r.jsx)(c.Rr,{ids:"105-106"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"This is not a closing fence, because it is indented 4 spaces."}),"\n",(0,r.jsx)(c.Rr,{ids:"107"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Code fences (opening and closing) cannot contain internal spaces."}),"\n",(0,r.jsx)(c.Rr,{ids:"108-109"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fenced code blocks can interrupt paragraphs, and can be followed directly\nby paragraphs, without a blank line between."}),"\n",(0,r.jsx)(c.Rr,{ids:"110"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Other blocks can also occur before and after fenced code blocks without an\nintervening blank line"}),"\n",(0,r.jsx)(c.Rr,{ids:"111"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#info-string",children:"info string"})," can be provided after the opening code\nfence. Although this spec doesn\u2019t mandate any particular treatment of the\ninfo string, the first word is typically used to specify the language of\nthe code block."]}),"\n",(0,r.jsx)(c.Rr,{ids:"112-114"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#info-string",children:"Info strings"})," for backticks code blocks cannot contain\nbackticks and tildes."]}),"\n",(0,r.jsx)(c.Rr,{ids:"115"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#info-string",children:"Info strings"})," for tilde code blocks can contain backticks\nand tildes."]}),"\n",(0,r.jsx)(c.Rr,{ids:"116"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Closing code fences cannot have ",(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#info-string",children:"info strings"}),"."]}),"\n",(0,r.jsx)(c.Rr,{ids:"117"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related",children:"Related"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./ast",children:"@yozora/ast"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./parser",children:"@yozora/parser"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./parser-gfm",children:"@yozora/parser-gfm"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./parser-gfm-ex",children:"@yozora/parser-gfm-ex"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./tokenizer-fenced-code",children:"@yozora/tokenizer-fenced-code"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./tokenizer-inline-code",children:"@yozora/tokenizer-inline-code"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/code#readme",children:"@yozora/react-code"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/code-live#readme",children:"@yozora/react-code-live"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme",children:"@yozora/react-markdown"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/tokenizers/fenced-code",children:"Sourcecode"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./ast#code",children:"Code | Yozora AST"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.github.com/gfm/#fenced-code-block",children:"Fenced code blocks | Github Flavor Markdown Spec"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/syntax-tree/mdast#code",children:"Code | Mdast"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);