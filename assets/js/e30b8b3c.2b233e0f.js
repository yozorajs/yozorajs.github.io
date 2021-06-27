(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[8348],{452:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return k},default:function(){return h}});var n=a(2122),r=a(9756),i=(a(7294),a(4137)),o=a(7358),l=a(8448),p=a(627),s={id:"tokenizer-table",title:"@yozora/tokenizer-table",sidebar_label:"table"},m=void 0,d={unversionedId:"package/tokenizer-table",id:"package/tokenizer-table",isDocsHomePage:!1,title:"@yozora/tokenizer-table",description:"<img",source:"@site/docs/package/tokenizer-table.mdx",sourceDirName:"package",slug:"/package/tokenizer-table",permalink:"/docs/package/tokenizer-table",version:"current",lastUpdatedAt:1624768274,formattedLastUpdatedAt:"6/27/2021",frontMatter:{id:"tokenizer-table",title:"@yozora/tokenizer-table",sidebar_label:"table"},sidebar:"Docs",previous:{title:"setext-heading",permalink:"/docs/package/tokenizer-setext-heading"},next:{title:"text",permalink:"/docs/package/tokenizer-text"}},k=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[]},{value:"Types",id:"types",children:[]}]},{value:"Live Examples",id:"live-examples",children:[]},{value:"Related",id:"related",children:[]}],c={toc:k};function h(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("header",null,(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-table"},(0,i.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-table.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-table"},(0,i.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-table.svg"})),(0,i.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-table"},(0,i.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-table.svg"})),(0,i.kt)("a",{href:"#install"},(0,i.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,i.kt)("a",{href:"https://github.com/nodejs/node"},(0,i.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-table"})),(0,i.kt)("a",{href:"https://github.com/facebook/jest"},(0,i.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,i.kt)("a",{href:"https://github.com/prettier/prettier"},(0,i.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"github flavor markdown spec")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"GFM enables the ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#table"},"table")," extension, where an additional leaf block type is\navailable."),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#table"},"table")," is an arrangement of data with rows and columns,\nconsisting of a single header row, a ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#delimiter-row"},"delimiter row"),"\nseparating the header from the data, and zero or more data rows."),(0,i.kt)("p",{parentName:"div"},"Each row consists of cells containing arbitrary text, in which ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#inlines"},"inlines"),"\nare parsed, separated by pipes (",(0,i.kt)("inlineCode",{parentName:"p"},"|"),"). A leading and trailing pipe is also\nrecommended for clarity of reading, and if there\u2019s otherwise parsing ambiguity.\nSpaces between pipes and cell content are trimmed. Block-level elements cannot\nbe inserted in a table."),(0,i.kt)("p",{parentName:"div"},"The delimiter row consists of cells whose only content are hyphens (",(0,i.kt)("inlineCode",{parentName:"p"},"-"),"), and\noptionally, a leading or trailing colon (",(0,i.kt)("inlineCode",{parentName:"p"},":"),"), or both, to indicate left, right,\nor center alignment respectively."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#table"},"github flavor markdown spec"))," for details."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression.")))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(o.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-table\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-table\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-table"},"@yozora/tokenizer-table")," has been integrated into ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/parser"},"@yozora/parser")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex"),",\nso you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"GfmExParser")," directly."))),(0,i.kt)(o.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"basic-usage",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-table"},"@yozora/tokenizer-table")," cannot be used alone, it needs to be\nregistered in ",(0,i.kt)("em",{parentName:"p"},"YastParser")," as a plugin-in before it can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultYastParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport TableTokenizer from '@yozora/tokenizer-table'\n\nconst parser = new DefaultYastParser()\n  .useBlockFallbackTokenizer(new ParagraphTokenizer())\n  .useInlineFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new TableTokenizer())\n\n// parse source markdown content\nparser.parse(`\n| foo | bar |\n| --- | --- |\n| baz | bim |\n`)\n"))),(0,i.kt)(l.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n| foo | bar |\n| --- | --- |\n| baz | bim |\n`)\n"))),(0,i.kt)(l.Z,{value:"GfmParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{2,5}","{2,5}":!0},"import GfmParser from '@yozora/parser-gfm'\nimport TableTokenizer from '@yozora/tokenizer-table'\n\nconst parser = new GfmParser()\nparser.useTokenizer(new TableTokenizer())\n\n// parse source markdown content\nparser.parse(`\n| foo | bar |\n| --- | --- |\n| baz | bim |\n`)\n"))),(0,i.kt)(l.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n| foo | bar |\n| --- | --- |\n| baz | bim |\n`)\n")))),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-table"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"priority")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.INTERRUPTABLE_BLOCK"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,i.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."))),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/package/tokenizer-table"},"@yozora/tokenizer-table")," produce ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/ast#table"},"Table")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/ast#tableCell"},"TableRow")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/ast#tableCell"},"TableCell")," type nodes.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/package/ast"},"@yozora/ast")," for full base types."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TableCell")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { YastParent } from '@/ast'\n\nexport const TableCellType = 'tableCell'\nexport type TableCellType = typeof TableCellType\n\n/**\n* TableCell represents a header cell in a Table, if its parent is a head,\n* or a data cell otherwise.\n* @see https://github.com/syntax-tree/mdast#tablecell\n* @see https://github.github.com/gfm/#tables-extension-\n*/\nexport type TableCell = YastParent<TableCellType>\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TableRow")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { YastParent } from '@/ast'\n  \nexport const TableRowType = 'tableRow'\nexport type TableRowType = typeof TableRowType\n\n/**\n* TableRow represents a row of cells in a table.\n* @see https://github.com/syntax-tree/mdast#tablerow\n* @see https://github.github.com/gfm/#tables-extension-\n*/\nexport interface TableRow extends YastParent<TableRowType> {\n  /**\n   * Table cells\n   */\n  children: TableCell[]\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Table")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { YastAlignType, YastParent } from '@/ast'\n\nexport const TableType = 'table'\nexport type TableType = typeof TableType\n\n/**\n * Table column configs.\n */\nexport interface TableColumn {\n  /**\n   * An align field can be present. If present, it must be a list of alignTypes.\n   * It represents how cells in columns are aligned.\n   */\n  align: YastAlignType\n}\n\n/**\n * @see https://github.github.com/gfm/#table\n * @see https://github.com/syntax-tree/mdast#table\n */\nexport interface Table extends YastParent<TableType> {\n  /**\n   * Table column configuration items\n   */\n  columns: TableColumn[]\n  /**\n   * Table rows (include table headers)\n   */\n  children: TableRow[]\n}\n")))),(0,i.kt)("h2",{id:"live-examples"},"Live Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Basic."),(0,i.kt)(p.Z,{ids:"198",initialExpanded:!1,initialParserName:"ex-gfm",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cells in one column don\u2019t need to match length, though it\u2019s easier to read\nif they are. Likewise, use of leading and trailing pipes may be inconsistent."),(0,i.kt)(p.Z,{ids:"199",initialExpanded:!1,initialParserName:"ex-gfm",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Include a pipe in a cell\u2019s content by escaping it, including inside other\ninline spans."),(0,i.kt)(p.Z,{ids:"200",initialExpanded:!1,initialParserName:"ex-gfm",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The table is broken at the first empty line, or beginning of another\nblock-level structure."),(0,i.kt)(p.Z,{ids:"201-202",initialExpanded:!1,initialParserName:"ex-gfm",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The header row must match the ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#delimiter-row"},"delimiter row")," in the\nnumber of cells. If not, a table will not be recognized."),(0,i.kt)(p.Z,{ids:"203",initialExpanded:!1,initialParserName:"ex-gfm",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The remainder of the table\u2019s rows may vary in the number of cells. If there\nare a number of cells fewer than the number of cells in the header row,\nempty cells are inserted. If there are greater, the excess is ignored."),(0,i.kt)(p.Z,{ids:"204",initialExpanded:!1,initialParserName:"ex-gfm",mdxType:"YozoraGFMLive"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If there are no rows in the body, no ",(0,i.kt)("inlineCode",{parentName:"p"},"<tbody>")," is generated in HTML output."),(0,i.kt)(p.Z,{ids:"205",initialExpanded:!1,initialParserName:"ex-gfm",mdxType:"YozoraGFMLive"}))),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/ast"},"@yozora/ast")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser"},"@yozora/parser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm"},"@yozora/parser-gfm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/package/parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/table"},"Sourcecode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#table"},"Tables (extension) | Github Flavor Markdown Spec")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#table"},"Table | Mdast"))))}h.isMDXComponent=!0}}]);