"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[8348],{21167:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>s,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),i=a(94828),o=a(86023),l=a(10629);const p={id:"tokenizer-table",title:"@yozora/tokenizer-table",sidebar_label:"table"},s=void 0,m={unversionedId:"package/tokenizer-table",id:"package/tokenizer-table",title:"@yozora/tokenizer-table",description:"<img",source:"@site/docs/package/tokenizer-table.mdx",sourceDirName:"package",slug:"/package/tokenizer-table",permalink:"/docs/next/package/tokenizer-table",draft:!1,tags:[],version:"current",lastUpdatedBy:"guanghechen",lastUpdatedAt:1673091576,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{id:"tokenizer-table",title:"@yozora/tokenizer-table",sidebar_label:"table"},sidebar:"Docs",previous:{title:"setext-heading",permalink:"/docs/next/package/tokenizer-setext-heading"},next:{title:"text",permalink:"/docs/next/package/tokenizer-text"}},k={},d=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Types",id:"types",level:3},{value:"Live Examples",id:"live-examples",level:2},{value:"Related",id:"related",level:2}],c={toc:d};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("header",null,(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-table"},(0,n.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/tokenizer-table/latest"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-table"},(0,n.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/tokenizer-table.svg"})),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@yozora/tokenizer-table"},(0,n.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/tokenizer-table.svg"})),(0,n.kt)("a",{href:"#install"},(0,n.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,n.kt)("a",{href:"https://github.com/nodejs/node"},(0,n.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/tokenizer-table"})),(0,n.kt)("a",{href:"https://github.com/facebook/jest"},(0,n.kt)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})),(0,n.kt)("a",{href:"https://github.com/prettier/prettier"},(0,n.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,n.kt)("br",null),(0,n.kt)("admonition",{title:"github flavor markdown spec",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"GFM enables the ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#table"},"table")," extension, where an additional leaf block type is\navailable."),(0,n.kt)("p",{parentName:"admonition"},"A ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#table"},"table")," is an arrangement of data with rows and columns,\nconsisting of a single header row, a ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#delimiter-row"},"delimiter row"),"\nseparating the header from the data, and zero or more data rows."),(0,n.kt)("p",{parentName:"admonition"},"Each row consists of cells containing arbitrary text, in which ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#inlines"},"inlines"),"\nare parsed, separated by pipes (",(0,n.kt)("inlineCode",{parentName:"p"},"|"),"). A leading and trailing pipe is also\nrecommended for clarity of reading, and if there\u2019s otherwise parsing ambiguity.\nSpaces between pipes and cell content are trimmed. Block-level elements cannot\nbe inserted in a table."),(0,n.kt)("p",{parentName:"admonition"},"The delimiter row consists of cells whose only content are hyphens (",(0,n.kt)("inlineCode",{parentName:"p"},"-"),"), and\noptionally, a leading or trailing colon (",(0,n.kt)("inlineCode",{parentName:"p"},":"),"), or both, to indicate left, right,\nor center alignment respectively."),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/#table"},"github flavor markdown spec"))," for details."),(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"#live-examples"},"Live Examples"))," for an intuitive impression."))),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/tokenizer-table\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/tokenizer-table\n")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"./tokenizer-table"},"@yozora/tokenizer-table")," has been integrated into ",(0,n.kt)("a",{parentName:"p",href:"./parser"},"@yozora/parser")," / ",(0,n.kt)("a",{parentName:"p",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex"),",\nso you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"YozoraParser")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"GfmExParser")," directly.")),(0,n.kt)(i.Z,{defaultValue:"YozoraParser",values:[{label:"Basic Usage",value:"basic-usage"},{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"basic-usage",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./tokenizer-table"},"@yozora/tokenizer-table")," cannot be used alone, it needs to be\nregistered in ",(0,n.kt)("em",{parentName:"p"},"Parser")," as a plugin-in before it can be used."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{4,9}","{4,9}":!0},"import { DefaultParser } from '@yozora/core-parser'\nimport ParagraphTokenizer from '@yozora/tokenizer-paragraph'\nimport TextTokenizer from '@yozora/tokenizer-text'\nimport TableTokenizer from '@yozora/tokenizer-table'\n\nconst parser = new DefaultParser()\n  .useFallbackTokenizer(new ParagraphTokenizer())\n  .useFallbackTokenizer(new TextTokenizer())\n  .useTokenizer(new TableTokenizer())\n\n// parse source markdown content\nparser.parse(`\n| foo | bar |\n| --- | --- |\n| baz | bim |\n`)\n"))),(0,n.kt)(o.Z,{value:"YozoraParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\n\n// parse source markdown content\nparser.parse(`\n| foo | bar |\n| --- | --- |\n| baz | bim |\n`)\n"))),(0,n.kt)(o.Z,{value:"GfmParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"{2,5}","{2,5}":!0},"import GfmParser from '@yozora/parser-gfm'\nimport TableTokenizer from '@yozora/tokenizer-table'\n\nconst parser = new GfmParser()\nparser.useTokenizer(new TableTokenizer())\n\n// parse source markdown content\nparser.parse(`\n| foo | bar |\n| --- | --- |\n| baz | bim |\n`)\n"))),(0,n.kt)(o.Z,{value:"GfmExParser",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\n\n// parse source markdown content\nparser.parse(`\n| foo | bar |\n| --- | --- |\n| baz | bim |\n`)\n")))),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},'"@yozora/tokenizer-table"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"priority")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"TokenizerPriority.INTERRUPTABLE_BLOCK"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"name"),": The unique name of the tokenizer, used to bind the token it generates,\nto determine the tokenizer that should be called in each life cycle of the\ntoken in the entire ",(0,n.kt)("em",{parentName:"p"},"matching / parsing")," phase.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"priority"),": Priority of the tokenizer, determine the order of processing,\nhigh priority priority execution. interruptable. In addition, in the ",(0,n.kt)("inlineCode",{parentName:"p"},"match-block"),"\nstage, a high-priority tokenizer can interrupt the matching process of a\nlow-priority tokenizer."))),(0,n.kt)("h3",{id:"types"},"Types"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"./tokenizer-table"},"@yozora/tokenizer-table")," produce ",(0,n.kt)("a",{parentName:"p",href:"./ast#table"},"Table")," / ","[TableRow][node-type-table:cell]"," / ","[TableCell][node-type-table:cell]"," type nodes.\nSee ",(0,n.kt)("a",{parentName:"p",href:"./ast"},"@yozora/ast")," for full base types."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"TableCell")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Parent } from '@yozora/ast'\n\nexport const TableCellType = 'tableCell'\nexport type TableCellType = typeof TableCellType\n\n/**\n* TableCell represents a header cell in a Table, if its parent is a head,\n* or a data cell otherwise.\n* @see https://github.com/syntax-tree/mdast#tablecell\n* @see https://github.github.com/gfm/#tables-extension-\n*/\nexport type TableCell = Parent<TableCellType>\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"TableRow")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Parent } from '@yozora/ast'\n  \nexport const TableRowType = 'tableRow'\nexport type TableRowType = typeof TableRowType\n\n/**\n* TableRow represents a row of cells in a table.\n* @see https://github.com/syntax-tree/mdast#tablerow\n* @see https://github.github.com/gfm/#tables-extension-\n*/\nexport interface TableRow extends Parent<TableRowType> {\n  /**\n   * Table cells\n   */\n  children: TableCell[]\n}\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Table")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { AlignType, Parent } from '@yozora/ast'\n\nexport const TableType = 'table'\nexport type TableType = typeof TableType\n\n/**\n * Table column configs.\n */\nexport interface TableColumn {\n  /**\n   * An align field can be present. If present, it must be a list of alignTypes.\n   * It represents how cells in columns are aligned.\n   */\n  align: AlignType\n}\n\n/**\n * @see https://github.github.com/gfm/#table\n * @see https://github.com/syntax-tree/mdast#table\n */\nexport interface Table extends Parent<TableType> {\n  /**\n   * Table column configuration items\n   */\n  columns: TableColumn[]\n  /**\n   * Table rows (include table headers)\n   */\n  children: TableRow[]\n}\n")))),(0,n.kt)("h2",{id:"live-examples"},"Live Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Basic."),(0,n.kt)(l.Z,{ids:"198",initialParserType:"gfm-ex",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cells in one column don\u2019t need to match length, though it\u2019s easier to read\nif they are. Likewise, use of leading and trailing pipes may be inconsistent."),(0,n.kt)(l.Z,{ids:"199",initialParserType:"gfm-ex",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Include a pipe in a cell\u2019s content by escaping it, including inside other\ninline spans."),(0,n.kt)(l.Z,{ids:"200",initialParserType:"gfm-ex",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The table is broken at the first empty line, or beginning of another\nblock-level structure."),(0,n.kt)(l.Z,{ids:"201-202",initialParserType:"gfm-ex",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The header row must match the ",(0,n.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#delimiter-row"},"delimiter row")," in the\nnumber of cells. If not, a table will not be recognized."),(0,n.kt)(l.Z,{ids:"203",initialParserType:"gfm-ex",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The remainder of the table\u2019s rows may vary in the number of cells. If there\nare a number of cells fewer than the number of cells in the header row,\nempty cells are inserted. If there are greater, the excess is ignored."),(0,n.kt)(l.Z,{ids:"204",initialParserType:"gfm-ex",mdxType:"YozoraGFMLive"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If there are no rows in the body, no ",(0,n.kt)("inlineCode",{parentName:"p"},"<tbody>")," is generated in HTML output."),(0,n.kt)(l.Z,{ids:"205",initialParserType:"gfm-ex",mdxType:"YozoraGFMLive"}))),(0,n.kt)("h2",{id:"related"},"Related"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast"},"@yozora/ast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser"},"@yozora/parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm"},"@yozora/parser-gfm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./parser-gfm-ex"},"@yozora/parser-gfm-ex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/table#readme"},"@yozora/react-table")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown#readme"},"@yozora/react-markdown")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/main/tokenizers/table"},"Sourcecode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./ast#table"},"Table | Yozora AST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/#table"},"Tables (extension) | Github Flavor Markdown Spec")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast#table"},"Table | Mdast"))))}b.isMDXComponent=!0}}]);