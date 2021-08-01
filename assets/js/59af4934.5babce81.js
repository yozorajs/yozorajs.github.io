(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[9479],{7654:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return l},default:function(){return h}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=a(3918),s=a(5074),p=a(4372),c={id:"tokenizer-fenced-code",title:"@yozora/tokenizer-fenced-code",sidebar_label:"fenced-code"},d=void 0,m={unversionedId:"package/tokenizer-fenced-code",id:"package/tokenizer-fenced-code",isDocsHomePage:!1,title:"@yozora/tokenizer-fenced-code",description:"<img",source:"@site/docs/package/tokenizer-fenced-code.mdx",sourceDirName:"package",slug:"/package/tokenizer-fenced-code",permalink:"/docs/package/tokenizer-fenced-code",version:"current",lastUpdatedAt:1627811092,formattedLastUpdatedAt:"8/1/2021",frontMatter:{id:"tokenizer-fenced-code",title:"@yozora/tokenizer-fenced-code",sidebar_label:"fenced-code"},sidebar:"Docs",previous:{title:"emphasis",permalink:"/docs/package/tokenizer-emphasis"},next:{title:"footnote",permalink:"/docs/package/tokenizer-footnote"}},l=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[]},{value:"Types",id:"types",children:[]}]},{value:"Live Examples",id:"live-examples",children:[]},{value:"Related",id:"related",children:[]}],k={toc:l};function h(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("header",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-fenced-code"},(0,i.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-fenced-code.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-fenced-code"},(0,i.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-fenced-code.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-fenced-code"},(0,i.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-fenced-code.svg"})),(0,i.kt)("a",{href:"#install"},(0,i.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,i.kt)("a",{href:"https://github.com/nodejs/node"},(0,i.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-fenced-code"})),(0,i.kt)("a",{href:"https://github.com/facebook/jest"},(0,i.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,i.kt)("a",{href:"https://github.com/prettier/prettier"},(0,i.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"github flavor markdown spec")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#code-fence"},"code fence")," is a sequence of at least three consecutive\nbacktick characters (",(0,i.kt)("inlineCode",{parentName:"p"},"`"),") or tildes (",(0,i.kt)("inlineCode",{parentName:"p"},"~"),"). (Tildes and backticks cannot be\nmixed.) A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#fenced-code-block"},"fenced code block")," begins with a code fence,\nindented no more than three spaces."),(0,i.kt)("p",{parentName:"div"},"The line with the opening code fence may optionally contain some text following\nthe code fence; this is trimmed of leading and trailing whitespace and called\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#info-string"},"info string"),". If the ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#info-string"},"info string")," comes\nafter a backtick fence, it may not contain any backtick characters. (The reason\nfor this restriction is that otherwise some inline code would be incorrectly\ninterpreted as the beginning of a fenced code block.)"),(0,i.kt)("p",{parentName:"div"},"The content of the code block consists of all subsequent lines, until a closing\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#code-fence"},"code fence")," of the same type as the code block began with\n(backticks or tildes), and with at least as many backticks or tildes as the\nopening code fence. If the leading code fence is indented ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"N")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N")))))," spaces, then up\nto ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"N")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N")))))," spaces of indentation are removed from each line of the content\n(if present). (If a content line is not indented, it is preserved unchanged.\nIf it is indented less than ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"N")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N")))))," spaces, all of the indentation is removed.)"),(0,i.kt)("p",{parentName:"div"},"The closing code fence may be indented up to three spaces, and may be followed\nonly by spaces, which are ignored. If the end of the containing block\n(or document) is reached and no closing code fence has been found, the code block\ncontains all of the lines after the opening code fence until the end of the\ncontaining block (or document). (An alternative spec would require backtracking\nin the event that a closing code fence is not found. But this makes parsing much\nless efficient, and there seems to be no real down side to the behavior\ndescribed here.)"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#fenced-code-block"},"github flavor markdown spec"))," for details."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression.")))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(o.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-fenced-code\n"))),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-fenced-code\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-fenced-code"},"@yozora/tokenizer-fenced-code")," has been integrated into ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/parser"},"@yozora/parser")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly."))),(0,i.kt)(o.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"basic-usage",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-fenced-code"},"@yozora/tokenizer-fenced-code")," cannot be used alone, it needs to be\nregistered in ",(0,i.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport FencedCodeTokenizer from '@yozora/tokenizer-fenced-code'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new FencedCodeTokenizer())\n\n// parse source markdown content\nparser.parse(`\n\\`\\`\\`ruby\ndef foo(x)\n  return 3\nend\n\\`\\`\\`\n\n~~~typescript\nexport const foo: string = 'waw'\n~~~\n# baz\n`)\n"))),(0,i.kt)(s.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n\\`\\`\\`ruby\ndef foo(x)\n  return 3\nend\n\\`\\`\\`\n\n~~~typescript\nexport const foo: string = 'waw'\n~~~\n# baz\n`)\n"))),(0,i.kt)(s.Z,{value:"GfmParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n\\`\\`\\`ruby\ndef foo(x)\n  return 3\nend\n\\`\\`\\`\n\n~~~typescript\nexport const foo: string = 'waw'\n~~~\n# baz\n`)\n"))),(0,i.kt)(s.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n\\`\\`\\`ruby\ndef foo(x)\n  return 3\nend\n\\`\\`\\`\n\n~~~typescript\nexport const foo: string = 'waw'\n~~~\n# baz\n`)\n")))),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-fenced-code"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"priority")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.FENCED_BLOCK"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,i.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."))),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-fenced-code"},"@yozora/tokenizer-fenced-code")," produce ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/ast#code"},"Code")," type nodes.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/ast"},"@yozora/ast")," for full base types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { YastLiteral } from '@yozora/ast'\n\nexport const CodeType = 'code'\nexport type CodeType = typeof CodeType\n\n/**\n * Code represents a block of preformatted text, such as ASCII art or computer\n * code.\n * @see https://github.com/syntax-tree/mdast#code\n * @see https://github.github.com/gfm/#code-fence\n */\nexport interface Code extends YastLiteral<CodeType> {\n  /**\n   * Language of the codes\n   */\n  lang?: string\n  /**\n   * Meta info string\n   */\n  meta?: string\n}\n")),(0,i.kt)("h2",{id:"live-examples"},"Live Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Basic."),(0,i.kt)(p.Z,{ids:"89-90",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fewer than three backticks is not enough."),(0,i.kt)(p.Z,{ids:"91",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The closing code fence must use the same character as the opening fence."),(0,i.kt)(p.Z,{ids:"92-93",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The closing code fence must be at least as long as the opening fence."),(0,i.kt)(p.Z,{ids:"94-95",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unclosed code blocks are closed by the end of the document (or the\nenclosing block quote or list item)."),(0,i.kt)(p.Z,{ids:"96-98",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A code block can have all empty lines as its content."),(0,i.kt)(p.Z,{ids:"99",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A code block can be empty."),(0,i.kt)(p.Z,{ids:"100",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fences can be indented. If the opening fence is indented, content lines will\nhave equivalent opening indentation removed, if present."),(0,i.kt)(p.Z,{ids:"101-103",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Four spaces indentation produces an indented code block."),(0,i.kt)(p.Z,{ids:"104",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Closing fences may be indented by 0-3 spaces, and their indentation need\nnot match that of the opening fence."),(0,i.kt)(p.Z,{ids:"105-106",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This is not a closing fence, because it is indented 4 spaces."),(0,i.kt)(p.Z,{ids:"107",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Code fences (opening and closing) cannot contain internal spaces."),(0,i.kt)(p.Z,{ids:"108-109",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fenced code blocks can interrupt paragraphs, and can be followed directly\nby paragraphs, without a blank line between."),(0,i.kt)(p.Z,{ids:"110",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Other blocks can also occur before and after fenced code blocks without an\nintervening blank line"),(0,i.kt)(p.Z,{ids:"111",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#info-string"},"info string")," can be provided after the opening code\nfence. Although this spec doesn\u2019t mandate any particular treatment of the\ninfo string, the first word is typically used to specify the language of\nthe code block."),(0,i.kt)(p.Z,{ids:"112-114",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#info-string"},"Info strings")," for backticks code blocks cannot contain\nbackticks and tildes."),(0,i.kt)(p.Z,{ids:"115",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#info-string"},"Info strings")," for tilde code blocks can contain backticks\nand tildes."),(0,i.kt)(p.Z,{ids:"116",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Closing code fences cannot have ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#info-string"},"info strings"),"."),(0,i.kt)(p.Z,{ids:"117",initialExpanded:!1,mdxType:"YozoraGFMLive"}))),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/ast"},"@yozora/ast")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser"},"@yozora/parser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-indented-code"},"@yozora/tokenizer-indented-code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/tokenizer-inline-code"},"@yozora/tokenizer-inline-code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/fenced-code"},"Sourcecode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#fenced-code-block"},"Fenced code blocks | Github Flavor Markdown Spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#code"},"Code | Mdast"))))}h.isMDXComponent=!0}}]);