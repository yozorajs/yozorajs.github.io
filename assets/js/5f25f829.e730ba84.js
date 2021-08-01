(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[7412],{4582:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return k},default:function(){return c}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),p=a(3918),s=a(5074),m=a(4372),o={id:"tokenizer-emphasis",title:"@yozora/tokenizer-emphasis",sidebar_label:"emphasis"},l=void 0,h={unversionedId:"package/tokenizer-emphasis",id:"package/tokenizer-emphasis",isDocsHomePage:!1,title:"@yozora/tokenizer-emphasis",description:"<img",source:"@site/docs/package/tokenizer-emphasis.mdx",sourceDirName:"package",slug:"/package/tokenizer-emphasis",permalink:"/docs/package/tokenizer-emphasis",version:"current",lastUpdatedAt:1627811092,formattedLastUpdatedAt:"8/1/2021",frontMatter:{id:"tokenizer-emphasis",title:"@yozora/tokenizer-emphasis",sidebar_label:"emphasis"},sidebar:"Docs",previous:{title:"ecma-import",permalink:"/docs/package/tokenizer-ecma-import"},next:{title:"fenced-code",permalink:"/docs/package/tokenizer-fenced-code"}},k=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[]},{value:"Types",id:"types",children:[]}]},{value:"Live Examples",id:"live-examples",children:[]},{value:"Related",id:"related",children:[]}],d={toc:k};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("header",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-emphasis"},(0,i.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-emphasis.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-emphasis"},(0,i.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-emphasis.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-emphasis"},(0,i.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-emphasis.svg"})),(0,i.kt)("a",{href:"#install"},(0,i.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,i.kt)("a",{href:"https://github.com/nodejs/node"},(0,i.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-emphasis"})),(0,i.kt)("a",{href:"https://github.com/facebook/jest"},(0,i.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,i.kt)("a",{href:"https://github.com/prettier/prettier"},(0,i.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"github flavor markdown spec")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"First, some definitions. A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#delimiter-run"},"delimiter run")," is either a\nsequence of one or more ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," characters that is not preceded or followed by a\nnon-backslash-escaped ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," character, or a sequence of one or more ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," characters\nthat is not preceded or followed by a non-backslash-escaped ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," character."),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#left-flanking-delimiter-run"},"left-flanking delimiter run")," is a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#delimiter-run"},"delimiter run")," that is:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"not followed by ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#unicode-whitespace"},"Unicode whitespace"),", and either")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"a) not followed by a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#punctuation-character"},"punctuation character"),", or"),(0,i.kt)("p",{parentName:"li"},"b) followed by a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#punctuation-character"},"punctuation character")," and\npreceded by ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#unicode-whitespace"},"Unicode whitespace")," or a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#punctuation-character"},"punctuation character"),"."))),(0,i.kt)("p",{parentName:"div"},"For purposes of this definition, the beginning and the end of the line count as\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#unicode-whitespace"},"Unicode whitespace"),"."),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#right-flanking-delimiter-run"},"right-flanking delimiter")," run is a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#delimiter-run"},"delimiter run")," that is:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"not preceded by Unicode whitespace, and either")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"a) not preceded by a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#punctuation-character"},"punctuation character"),", or"),(0,i.kt)("p",{parentName:"li"},"2b) preceded by a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#punctuation-character"},"punctuation character")," and\nfollowed by ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#unicode-whitespace"},"Unicode whitespace")," or a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#punctuation-character"},"punctuation character"),"."))),(0,i.kt)("p",{parentName:"div"},"For purposes of this definition, the beginning and the end of the line count as\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#unicode-whitespace"},"Unicode whitespace"),"."),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("p",{parentName:"div"},"The following rules define emphasis and strong emphasis:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A single ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," character ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#can-open-emphasis"},"can open emphasis")," iff (if\nand only if) it is part of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#left-flanking-delimiter-run"},"left-flanking delimiter run"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A single ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," character ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#can-open-emphasis"},"can open emphasis")," iff it is\npart of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#left-flanking-delimiter-run"},"left-flanking delimiter run")," and either"),(0,i.kt)("p",{parentName:"li"},"a) not part of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#right-flanking-delimiter-run"},"right-flanking delimiter run")," or"),(0,i.kt)("p",{parentName:"li"},"b) part of a ","[right-flanking delimiter run]"," preceded by a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#punctuation-character"},"punctuation character"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A single ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," character ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#can-close-emphasis"},"can close emphasis")," iff it\nis part of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#right-flanking-delimiter-run"},"right-flanking delimiter run"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A single ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," character ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#can-close-emphasis"},"can close emphasis")," iff it\nis part of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#right-flanking-delimiter-run"},"right-flanking delimiter run")," and either"),(0,i.kt)("p",{parentName:"li"},"a) not part of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#left-flanking-delimiter-run"},"left-flanking delimiter run")," or"),(0,i.kt)("p",{parentName:"li"},"b) part of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#left-flanking-delimiter-run"},"left-flanking delimiter run")," followed\nby a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#punctuation-character"},"punctuation character"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A double ",(0,i.kt)("inlineCode",{parentName:"p"},"**")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#can-open-strong-emphasis"},"can open strong emphasis")," iff it is\npart of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#left-flanking-delimiter-run"},"left-flanking delimiter run"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A double ",(0,i.kt)("inlineCode",{parentName:"p"},"__")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#can-open-strong-emphasis"},"can open strong emphasis")," iff it is\npart of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#left-flanking-delimiter-run"},"left-flanking delimiter run")," and either"),(0,i.kt)("p",{parentName:"li"},"a) not part of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#right-flanking-delimiter-run"},"right-flanking delimiter run")," or"),(0,i.kt)("p",{parentName:"li"},"b) part of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#right-flanking-delimiter-run"},"right-flanking delimiter run"),"\npreceded by a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#punctuation-character"},"punctuation character"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A double ",(0,i.kt)("inlineCode",{parentName:"p"},"**")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#can-close-strong-emphasis"},"can close strong emphasis")," iff it is\npart of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#right-flanking-delimiter-run"},"right-flanking delimiter run"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A double ",(0,i.kt)("inlineCode",{parentName:"p"},"__")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#can-close-strong-emphasis"},"can close strong emphasis")," iff it is\npart of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#right-flanking-delimiter-run"},"right-flanking delimiter")," run and either"),(0,i.kt)("p",{parentName:"li"},"a) not part of a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#left-flanking-delimiter-run"},"left-flanking delimiter run")," or"),(0,i.kt)("p",{parentName:"li"},"b) part of a ","[left-flanking delimiter run]"," followed by a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#punctuation-character"},"punctuation character"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Emphasis begins with a delimiter that ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#can-open-emphasis"},"can open emphasis"),"\nand ends with a delimiter that ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#can-close-emphasis"},"can close emphasis"),",\nand that uses the same character (",(0,i.kt)("inlineCode",{parentName:"p"},"_")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),") as the opening delimiter. The\nopening and closing delimiters must belong to separate ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#delimiter-run"},"delimiter run"),"s.\nIf one of the delimiters can both open and close emphasis, then the sum of\nthe lengths of the delimiter runs containing the opening and closing\ndelimiters must not be a multiple of ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"3")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"3")))))," unless both lengths are multiples\nof ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"3")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"))))),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Strong emphasis begins with a delimiter that\n",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#can-open-strong-emphasis"},"can open strong emphasis")," and ends with a delimiter\nthat ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#can-close-strong-emphasis"},"can close strong emphasis"),", and that uses the\nsame character (",(0,i.kt)("inlineCode",{parentName:"p"},"_")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),") as the opening delimiter. The opening and\nclosing delimiters must belong to separate ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#delimiter-run"},"delimiter run"),"s.\nIf one of the delimiters can both open and close strong emphasis, then the\nsum of the lengths of the delimiter runs containing the opening and closing\ndelimiters must not be a multiple of ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"3")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"3")))))," unless both lengths are multiples\nof ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"3")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"))))),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A literal ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," character cannot occur at the beginning or end of\n",(0,i.kt)("inlineCode",{parentName:"p"},"*"),"-delimited emphasis or ",(0,i.kt)("inlineCode",{parentName:"p"},"**"),"-delimited strong emphasis, unless it is\nbackslash-escaped.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A literal ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," character cannot occur at the beginning or end of\n",(0,i.kt)("inlineCode",{parentName:"p"},"_"),"-delimited emphasis or ",(0,i.kt)("inlineCode",{parentName:"p"},"__"),"-delimited strong emphasis, unless it is\nbackslash-escaped."))),(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("p",{parentName:"div"},"Where rules 1\u201312 above are compatible with multiple parsings, the following\nprinciples resolve ambiguity:"),(0,i.kt)("ol",{parentName:"div",start:13},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The number of nestings should be minimized. Thus, for example, an\ninterpretation ",(0,i.kt)("inlineCode",{parentName:"p"},"<strong>...</strong>")," is always preferred to\n",(0,i.kt)("inlineCode",{parentName:"p"},"<em><em>...</em></em>"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"An interpretation ",(0,i.kt)("inlineCode",{parentName:"p"},"<em><strong>...</strong></em>")," is always preferred to\n",(0,i.kt)("inlineCode",{parentName:"p"},"<strong><em>...</em></strong>"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When two potential emphasis or strong emphasis spans overlap, so that the\nsecond begins before the first ends and ends after the first ends, the first\ntakes precedence. Thus, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"*foo _bar* baz_")," is parsed as\n",(0,i.kt)("inlineCode",{parentName:"p"},"<em>foo _bar</em> baz_")," rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"*foo <em>bar* baz</em>"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When there are two potential emphasis or strong emphasis spans with the\nsame closing delimiter, the shorter one (the one that opens later) takes\nprecedence. Thus, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"**foo **bar baz**")," is parsed as\n",(0,i.kt)("inlineCode",{parentName:"p"},"**foo <strong>bar baz</strong>")," rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"<strong>foo **bar baz</strong>"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Inline code spans, links, images, and HTML tags group more tightly than\nemphasis. So, when there is a choice between an interpretation that contains\none of these elements and one that does not, the former always wins. Thus,\nfor example, ",(0,i.kt)("inlineCode",{parentName:"p"},"*[foo*](bar)")," is parsed as ",(0,i.kt)("inlineCode",{parentName:"p"},'*<a href="bar">foo*</a>')," rather\nthan as ",(0,i.kt)("inlineCode",{parentName:"p"},"<em>[foo</em>](bar)"),"."))),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#can-open-emphasis"},"github flavor markdown spec"))," for details."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression.")))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(p.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-emphasis\n"))),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-emphasis\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-emphasis"},"@yozora/tokenizer-emphasis")," has been integrated into ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/parser"},"@yozora/parser")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm"),",\nso you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmExParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmParser")," directly."))),(0,i.kt)(p.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"basic-usage",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-emphasis"},"@yozora/tokenizer-emphasis")," cannot be used alone, it needs to be\nregistered in ",(0,i.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport EmphasisTokenizer from '@yozora/tokenizer-emphasis'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new EmphasisTokenizer())\n\n// parse source markdown content\nparser.parse(`\n\n**foo bar**\n\n__foo bar__\n\n_foo bar_\n\n*foo bar*\n\n__**__foo__**__\n\n`)\n"))),(0,i.kt)(s.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n\n**foo bar**\n\n__foo bar__\n\n_foo bar_\n\n*foo bar*\n\n__**__foo__**__\n\n`)\n"))),(0,i.kt)(s.Z,{value:"GfmParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\n\n// parse source markdown content\nparser.parse(`\n\n**foo bar**\n\n__foo bar__\n\n_foo bar_\n\n*foo bar*\n\n__**__foo__**__\n\n`)\n"))),(0,i.kt)(s.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n\n**foo bar**\n\n__foo bar__\n\n_foo bar_\n\n*foo bar*\n\n__**__foo__**__\n\n`)\n")))),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-emphasis"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"priority")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.CONTAINING_INLINE"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,i.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Exception:")," Delimiters of type ",(0,i.kt)("inlineCode",{parentName:"p"},"full")," are always processed before other type\ndelimiters."))),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-emphasis"},"@yozora/tokenizer-emphasis")," produce ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/ast#emphasis"},"Emphasis")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/ast#strong"},"Strong")," type nodes.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/ast"},"@yozora/ast")," for full base types."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Emphasis")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { YastParent } from '@yozora/ast'\n\nexport const EmphasisType = 'emphasis'\nexport type EmphasisType = typeof EmphasisType\n\n/**\n * Emphasis represents stress emphasis of its contents.\n * @see https://github.com/syntax-tree/mdast#emphasis\n * @see https://github.github.com/gfm/#emphasis-and-strong-emphasis\n */\nexport type Emphasis = YastParent<EmphasisType>\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Strong")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { YastParent } from '@yozora/ast'\n\nexport const StrongType = 'strong'\nexport type StrongType = typeof StrongType\n\n/**\n* Strong represents strong importance, seriousness, or urgency for its\n* contents.\n* @see https://github.com/syntax-tree/mdast#strong\n* @see https://github.github.com/gfm/#emphasis-and-strong-emphasis\n*/\nexport type Strong = YastParent<StrongType>\n")))),(0,i.kt)("h2",{id:"live-examples"},"Live Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule1."),(0,i.kt)(m.Z,{ids:"360-365",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule2."),(0,i.kt)(m.Z,{ids:"366-373",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule3."),(0,i.kt)(m.Z,{ids:"374-379",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule4."),(0,i.kt)(m.Z,{ids:"380-386",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule5."),(0,i.kt)(m.Z,{ids:"387-390",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule6."),(0,i.kt)(m.Z,{ids:"391-399",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule7."),(0,i.kt)(m.Z,{ids:"400-405",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule8."),(0,i.kt)(m.Z,{ids:"406-412",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule9."),(0,i.kt)(m.Z,{ids:"413-430",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule10."),(0,i.kt)(m.Z,{ids:"431-444",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule11."),(0,i.kt)(m.Z,{ids:"445-456",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule12."),(0,i.kt)(m.Z,{ids:"457-474",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule13."),(0,i.kt)(m.Z,{ids:"475-475",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule14."),(0,i.kt)(m.Z,{ids:"476-477",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule15."),(0,i.kt)(m.Z,{ids:"478-479",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule16."),(0,i.kt)(m.Z,{ids:"480-481",initialExpanded:!1,mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rule17."),(0,i.kt)(m.Z,{ids:"482-490",initialExpanded:!1,mdxType:"YozoraGFMLive"}))),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/ast"},"@yozora/ast")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser"},"@yozora/parser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/emphasis"},"Sourcecode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#can-open-emphasis"},"Emphasis and strong emphasis | Github Flavor Markdown Spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#emphasis"},"Emphasis | Mdast")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#strong"},"Strong | Mdast"))))}c.isMDXComponent=!0}}]);