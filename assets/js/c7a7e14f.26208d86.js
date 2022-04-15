"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[9999],{77830:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var a=n(87462),o=n(63366),s=(n(67294),n(3905)),r=n(5529),i=n(98448),p=["components"],l={id:"ast",title:"@yozora/ast",sidebar_label:"ast"},c=void 0,d={unversionedId:"package/ast",id:"version-1.x.x/package/ast",title:"@yozora/ast",description:"<img",source:"@site/versioned_docs/version-1.x.x/package/ast.mdx",sourceDirName:"package",slug:"/package/ast",permalink:"/docs/1.x.x/package/ast",tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1650039198,formattedLastUpdatedAt:"4/15/2022",frontMatter:{id:"ast",title:"@yozora/ast",sidebar_label:"ast"},sidebar:"API",next:{title:"ast-util",permalink:"/docs/1.x.x/package/ast-util"}},m={},h=[{value:"Install",id:"install",level:2},{value:"Core Types",id:"core-types",level:2},{value:"YastNode",id:"yastnode",level:3},{value:"YastParent",id:"yastparent",level:3},{value:"YastLiteral",id:"yastliteral",level:3},{value:"YastResource",id:"yastresource",level:3},{value:"YastAssociation",id:"yastassociation",level:3},{value:"YastReference",id:"yastreference",level:3},{value:"YastAlternative",id:"yastalternative",level:3},{value:"YastNodePoint",id:"yastnodepoint",level:3},{value:"YastNodePosition",id:"yastnodeposition",level:3},{value:"YastNodeType",id:"yastnodetype",level:3},{value:"YastAlignType",id:"yastaligntype",level:3},{value:"Yast nodes",id:"yast-nodes",level:2},{value:"Admonition",id:"admonition",level:3},{value:"Blockquote",id:"blockquote",level:3},{value:"Break",id:"break",level:3},{value:"Code",id:"code",level:3},{value:"Definition",id:"definition",level:3},{value:"Delete",id:"delete",level:3},{value:"Emphasis",id:"emphasis",level:3},{value:"FootnoteDefinition",id:"footnotedefinition",level:3},{value:"FootnoteReference",id:"footnotereference",level:3},{value:"Footnote",id:"footnote",level:3},{value:"Frontmatter (not supportted yet)",id:"frontmatter-not-supportted-yet",level:3},{value:"Heading",id:"heading",level:3},{value:"Html",id:"html",level:3},{value:"Image",id:"image",level:3},{value:"ImageReference",id:"imagereference",level:3},{value:"InlineCode",id:"inlinecode",level:3},{value:"InlineMath",id:"inlinemath",level:3},{value:"Link",id:"link",level:3},{value:"LinkReference",id:"linkreference",level:3},{value:"List",id:"list",level:3},{value:"ListItem",id:"listitem",level:3},{value:"Math",id:"math",level:3},{value:"Paragraph",id:"paragraph",level:3},{value:"Strong",id:"strong",level:3},{value:"Table",id:"table",level:3},{value:"TableCell",id:"tablecell",level:3},{value:"TableRow",id:"tablerow",level:3},{value:"Text",id:"text",level:3},{value:"ThematicBreak",id:"thematicbreak",level:3},{value:"Related",id:"related",level:2}],u={toc:h};function g(e){var t=e.components,n=(0,o.Z)(e,p);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("header",null,(0,s.kt)("div",{align:"center"},(0,s.kt)("a",{href:"https://www.npmjs.com/package/@yozora/ast"},(0,s.kt)("img",{alt:"Npm Version",src:"https://img.shields.io/npm/v/@yozora/ast/v1.x.x"})),(0,s.kt)("a",{href:"https://www.npmjs.com/package/@yozora/ast"},(0,s.kt)("img",{alt:"Npm Download",src:"https://img.shields.io/npm/dm/@yozora/ast.svg"})),(0,s.kt)("a",{href:"https://www.npmjs.com/package/@yozora/ast"},(0,s.kt)("img",{alt:"Npm License",src:"https://img.shields.io/npm/l/@yozora/ast.svg"})),(0,s.kt)("a",{href:"#install"},(0,s.kt)("img",{alt:"Module formats: cjs, esm",src:"https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"})),(0,s.kt)("a",{href:"https://github.com/nodejs/node"},(0,s.kt)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/ast"})),(0,s.kt)("a",{href:"https://github.com/prettier/prettier"},(0,s.kt)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"install"},"Install"),(0,s.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @yozora/ast\n"))),(0,s.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @yozora/ast\n")))),(0,s.kt)("h2",{id:"core-types"},"Core Types"),(0,s.kt)("h3",{id:"yastnode"},"YastNode"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Syntactic units of the yozora AST.\n * @see https://github.com/syntax-tree/unist#node\n */\nexport interface YastNode<T extends YastNodeType = YastNodeType> {\n  /**\n   * The variant of a node.\n   */\n  readonly type: T\n  /**\n   * Location of a node in a source document.\n   * Must not be present if a node is generated.\n   */\n  position?: YastNodePosition\n}\n")),(0,s.kt)("h3",{id:"yastparent"},"YastParent"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Nodes containing other nodes.\n * @see https://github.com/syntax-tree/mdast#parent\n */\nexport interface YastParent<T extends YastNodeType = YastNodeType>\n  extends YastNode<T> {\n  /**\n   * List representing the children of a node.\n   */\n  children: YastNode[]\n}\n")),(0,s.kt)("h3",{id:"yastliteral"},"YastLiteral"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Nodes containing a value.\n */\nexport interface YastLiteral<T extends YastNodeType = YastNodeType>\n  extends YastNode<T> {\n  /**\n   * Literal value.\n   */\n  value: string\n}\n")),(0,s.kt)("h3",{id:"yastresource"},"YastResource"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * A reference to resource.\n * @see https://github.com/syntax-tree/mdast#resource\n */\nexport interface YastResource {\n  /**\n   * A URL to the referenced resource.\n   */\n  url: string\n  /**\n   * Advisory information for the resource, such as would be\n   * appropriate for a tooltip.\n   */\n  title?: string\n}\n")),(0,s.kt)("h3",{id:"yastassociation"},"YastAssociation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * An internal relation from one node to another.\n * @see https://github.com/syntax-tree/mdast#association\n */\nexport interface YastAssociation {\n  /**\n   * It can match an identifier field on another node.\n   */\n  identifier: string\n  /**\n   * The original value of the normalized identifier field.\n   */\n  label: string\n}\n")),(0,s.kt)("h3",{id:"yastreference"},"YastReference"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * A marker that is associated to another node.\n * @see https://github.com/syntax-tree/mdast#reference\n */\nexport interface YastReference {\n  /**\n   * The explicitness of a reference:\n   *  - shortcut: the reference is implicit, its identifier inferred from its content\n   *  - collapsed: the reference is explicit, its identifier inferred from its content\n   *  - full: the reference is explicit, its identifier explicitly set\n   * @see https://github.com/syntax-tree/mdast#referencetype\n   */\n  referenceType: 'full' | 'collapsed' | 'shortcut'\n}\n\n")),(0,s.kt)("h3",{id:"yastalternative"},"YastAlternative"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Alternative represents a node with a fallback.\n * @see https://github.com/syntax-tree/mdast#alternative\n */\nexport interface YastAlternative {\n  /**\n   * Equivalent content for environments that cannot represent the\n   * node as intended.\n   */\n  alt: string\n}\n")),(0,s.kt)("h3",{id:"yastnodepoint"},"YastNodePoint"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * One place in the source file.\n * @see https://github.com/syntax-tree/unist#point\n */\nexport interface YastNodePoint {\n  /**\n   * Line in a source file.\n   * @minimum 1\n   */\n  readonly line: number\n  /**\n   * Column column in a source file.\n   * @minimum 1\n   */\n  readonly column: number\n  /**\n   * Character in a source file.\n   * @minimum 0\n   */\n  readonly offset?: number\n}\n")),(0,s.kt)("h3",{id:"yastnodeposition"},"YastNodePosition"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Location of a node in a source file.\n * @see https://github.com/syntax-tree/unist#position\n */\nexport interface YastNodePosition {\n  /**\n   * Place of the first character of the parsed source region.\n   */\n  start: YastNodePoint\n  /**\n   * Place of the first character after the parsed source region.\n   */\n  end: YastNodePoint\n  /**\n   * start column at each index (plus start line) in the source region,\n   * for elements that span multiple lines\n   */\n  indent?: number[]\n}\n")),(0,s.kt)("h3",{id:"yastnodetype"},"YastNodeType"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Variant of a node of yozora AST.\n */\nexport type YastNodeType = string\n")),(0,s.kt)("h3",{id:"yastaligntype"},"YastAlignType"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * AlignType represents how phrasing content is aligned\n * @see https://github.com/syntax-tree/mdast#aligntype\n */\nexport type YastAlignType = 'left' | 'right' | 'center' | null\n")),(0,s.kt)("h2",{id:"yast-nodes"},"Yast nodes"),(0,s.kt)("h3",{id:"admonition"},"Admonition"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const AdmonitionType = 'admonition'\nexport type AdmonitionType = typeof AdmonitionType\n\n/**\n * Admonitions are block elements. The titles can include inline markdown and\n * the body can include any block markdown except another admonition.\n * @see https://github.com/elviswolcott/remark-admonitions\n */\nexport interface Admonition extends YastParent<AdmonitionType> {\n  /**\n   * Keyword of an admonition.\n   */\n  keyword: 'note' | 'important' | 'tip' | 'caution' | 'warning' | string\n  /**\n   * Admonition title.\n   */\n  title: YastNode[]\n}\n")),(0,s.kt)("h3",{id:"blockquote"},"Blockquote"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const BlockquoteType = 'blockquote'\nexport type BlockquoteType = typeof BlockquoteType\n\n/**\n * Blockquote represents a section quoted from somewhere else.\n * @see https://github.com/syntax-tree/mdast#blockquote\n * @see https://github.github.com/gfm/#block-quotes\n */\nexport type Blockquote = YastParent<BlockquoteType>\n")),(0,s.kt)("h3",{id:"break"},"Break"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const BreakType = 'break'\nexport type BreakType = typeof BreakType\n\n/**\n * Break represents a line break, such as in poems or addresses.\n * @see https://github.com/syntax-tree/mdast#break\n * @see https://github.github.com/gfm/#hard-line-breaks\n * @see https://github.github.com/gfm/#soft-line-breaks\n */\nexport type Break = YastNode<BreakType>\n")),(0,s.kt)("h3",{id:"code"},"Code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const CodeType = 'code'\nexport type CodeType = typeof CodeType\n\n/**\n * Code represents a block of preformatted text, such as ASCII art or computer\n * code.\n * @see https://github.com/syntax-tree/mdast#code\n * @see https://github.github.com/gfm/#code-fence\n */\nexport interface Code extends YastLiteral<CodeType> {\n  /**\n   * Language of the codes\n   */\n  lang?: string\n  /**\n   * Meta info string\n   */\n  meta?: string\n}\n")),(0,s.kt)("h3",{id:"definition"},"Definition"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const DefinitionType = 'definition'\nexport type DefinitionType = typeof DefinitionType\n\n/**\n * Definition represents a resource.\n * @see https://github.com/syntax-tree/mdast#definition\n * @see https://github.github.com/gfm/#link-reference-definitions\n */\nexport interface Definition\n  extends YastNode<DefinitionType>,\n    YastAssociation,\n    YastResource {}\n")),(0,s.kt)("h3",{id:"delete"},"Delete"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const DeleteType = 'delete'\nexport type DeleteType = typeof DeleteType\n\n/**\n * Delete represents contents that are no longer accurate or no longer relevant.\n * @see https://github.com/syntax-tree/mdast#delete\n * @see https://github.github.com/gfm/#strikethrough-extension-\n */\nexport type Delete = YastParent<DeleteType>\n")),(0,s.kt)("h3",{id:"emphasis"},"Emphasis"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const EmphasisType = 'emphasis'\nexport type EmphasisType = typeof EmphasisType\n\n/**\n * Emphasis represents stress emphasis of its contents.\n * @see https://github.com/syntax-tree/mdast#emphasis\n * @see https://github.github.com/gfm/#emphasis-and-strong-emphasis\n */\nexport type Emphasis = YastParent<EmphasisType>\n")),(0,s.kt)("h3",{id:"footnotedefinition"},"FootnoteDefinition"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const FootnoteDefinitionType = 'footnoteDefinition'\nexport type FootnoteDefinitionType = typeof FootnoteDefinitionType\n\n/**\n * FootnoteDefinition represents content relating to the document that is\n * outside its flow.\n * @see https://github.com/syntax-tree/mdast#footnotedefinition\n */\nexport interface FootnoteDefinition\n  extends YastParent<FootnoteDefinitionType>, YastAssociation {}\n")),(0,s.kt)("h3",{id:"footnotereference"},"FootnoteReference"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const FootnoteReferenceType = 'footnoteReference'\nexport type FootnoteReferenceType = typeof FootnoteReferenceType\n\n/**\n * FootnoteReference represents a marker through association.\n *\n * Similar to imageReference and linkReference, the difference is that it has\n * only 'collapsed' reference type instead of 'full' and 'shortcut'\n * @see https://github.com/syntax-tree/mdast#footnotereference\n * @see https://github.com/syntax-tree/mdast#imagereference\n * @see https://github.com/syntax-tree/mdast#linkreference\n */\nexport interface FootnoteReference\n  extends YastNode<FootnoteReferenceType>, YastAssociation {}\n")),(0,s.kt)("h3",{id:"footnote"},"Footnote"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const FootnoteType = 'footnote'\nexport type FootnoteType = typeof FootnoteType\n\n/**\n * Footnote represents content relating to the document that is outside its flow.\n * @see https://github.com/syntax-tree/mdast#footnote\n */\nexport type Footnote = YastParent<FootnoteType>\n")),(0,s.kt)("h3",{id:"frontmatter-not-supportted-yet"},"Frontmatter (not supportted yet)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const FrontmatterType = 'frontmatter'\nexport type FrontmatterType = typeof FrontmatterType\n\n/**\n * Frontmatter content represent out-of-band information about the document.\n * @see https://github.com/syntax-tree/mdast#frontmattercontent\n * @see https://github.com/syntax-tree/mdast#yaml\n * @see https://github.github.com/gfm/#code-fence\n */\nexport interface Frontmatter extends YastLiteral<FrontmatterType> {\n  /**\n   * Language of the frontmatter\n   * @default 'yaml'\n   */\n  lang: string\n  /**\n   * Meta info string\n   */\n  meta?: string\n}\n")),(0,s.kt)("h3",{id:"heading"},"Heading"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const HeadingType = 'heading'\nexport type HeadingType = typeof HeadingType\n\n/**\n * Heading represents a heading of a section.\n * @see https://github.com/syntax-tree/mdast#heading\n * @see https://github.github.com/gfm/#atx-heading\n */\nexport interface Heading extends YastParent<HeadingType> {\n  /**\n   * level of heading\n   */\n  depth: 1 | 2 | 3 | 4 | 5 | 6\n}\n")),(0,s.kt)("h3",{id:"html"},"Html"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const HtmlType = 'html'\nexport type HtmlType = typeof HtmlType\n\n/**\n * HTML (Literal) represents a fragment of raw HTML.\n * @see https://github.com/syntax-tree/mdast#html\n * @see https://github.github.com/gfm/#html-blocks\n * @see https://github.github.com/gfm/#raw-html\n */\nexport type Html = YastLiteral<HtmlType>\n")),(0,s.kt)("h3",{id:"image"},"Image"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const ImageType = 'image'\nexport type ImageType = typeof ImageType\n\n/**\n * Image represents an image.\n * @see https://github.com/syntax-tree/mdast#image\n * @see https://github.github.com/gfm/#images\n */\nexport interface Image\n  extends YastNode<ImageType>,\n    YastResource,\n    YastAlternative {}\n")),(0,s.kt)("h3",{id:"imagereference"},"ImageReference"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const ImageReferenceType = 'imageReference'\nexport type ImageReferenceType = typeof ImageReferenceType\n\n/**\n * ImageReference represents an image through association, or its original\n * source if there is no association.\n * @see https://github.github.com/gfm/#images\n * @see https://github.com/syntax-tree/mdast#imagereference\n */\nexport interface ImageReference\n  extends YastNode<ImageReferenceType>,\n    YastAssociation,\n    YastReference,\n    YastAlternative {}\n")),(0,s.kt)("h3",{id:"inlinecode"},"InlineCode"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const InlineCodeType = 'inlineCode'\nexport type InlineCodeType = typeof InlineCodeType\n\n/**\n * InlineCode represents a fragment of computer code, such as a file name,\n * computer program, or anything a computer could parse.\n * @see https://github.com/syntax-tree/mdast#inline-code\n * @see https://github.github.com/gfm/#code-span\n */\nexport type InlineCode = YastLiteral<InlineCodeType>\n")),(0,s.kt)("h3",{id:"inlinemath"},"InlineMath"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const InlineMathType = 'inlineMath'\nexport type InlineMathType = typeof InlineMathType\n\n/**\n * Inline math content.\n */\nexport type InlineMath = YastLiteral<InlineMathType>\n")),(0,s.kt)("h3",{id:"link"},"Link"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const LinkType = 'link'\nexport type LinkType = typeof LinkType\n\n/**\n * Link represents a hyperlink.\n * @see https://github.com/syntax-tree/mdast#link\n * @see https://github.github.com/gfm/#inline-link\n */\nexport interface Link extends YastParent<LinkType>, YastResource {}\n")),(0,s.kt)("h3",{id:"linkreference"},"LinkReference"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const LinkReferenceType = 'linkReference'\nexport type LinkReferenceType = typeof LinkReferenceType\n\n/**\n * LinkReference represents a hyperlink through association, or its original\n * source if there is no association.\n * @see https://github.com/syntax-tree/mdast#linkreference\n * @see https://github.github.com/gfm/#reference-link\n */\nexport interface LinkReference\n  extends YastParent<LinkReferenceType>,\n    YastAssociation,\n    YastReference {}\n")),(0,s.kt)("h3",{id:"list"},"List"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const ListType = 'list'\nexport type ListType = typeof ListType\n\n/**\n * List represents a list of items.\n * @see https://github.com/syntax-tree/mdast#list\n * @see https://github.github.com/gfm/#list\n */\nexport interface List extends YastParent<ListType> {\n  /**\n   * Whether it is an ordered lit.\n   */\n  ordered: boolean\n  /**\n   * Marker type of the list.\n   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol#attr-type\n   * \n   * The 'i' and 'I' which represented the roman numerals are not supported yet.\n   */\n  orderType?: '1' | 'a' | 'A' | 'i' | 'I'\n  /**\n   * The starting number of a ordered list-item.\n   */\n  start?: number\n  /**\n   * Marker of a unordered list-item, or delimiter of an ordered list-item.\n   */\n  marker: number\n  /**\n   * Whether if the list is loose.\n   * @see https://github.github.com/gfm/#loose\n   */\n  spread: boolean\n  /**\n   * Lists are container block.\n   */\n  children: ListItem[]\n}\n")),(0,s.kt)("h3",{id:"listitem"},"ListItem"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const ListItemType = 'listItem'\nexport type ListItemType = typeof ListItemType\n\n/**\n * Status of a task list item.\n * @see https://github.github.com/gfm/#task-list-items-extension-\n */\nexport enum TaskStatus {\n  /**\n   * To do, not yet started.\n   */\n  TODO = 'todo',\n  /**\n   * In progress.\n   */\n  DOING = 'doing',\n  /**\n   * Completed.\n   */\n  DONE = 'done',\n}\n\n/**\n * ListItem represents an item in a List.\n * @see https://github.com/syntax-tree/mdast#listitem\n * @see https://github.github.com/gfm/#list-items\n */\nexport interface ListItem extends YastParent<ListItemType> {\n  /**\n   * Status of a todo task.\n   */\n  status?: TaskStatus\n}\n")),(0,s.kt)("h3",{id:"math"},"Math"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const MathType = 'math'\nexport type MathType = typeof MathType\n\n/**\n * Math content.\n */\nexport type Math = YastLiteral<MathType>\n")),(0,s.kt)("h3",{id:"paragraph"},"Paragraph"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const ParagraphType = 'paragraph'\nexport type ParagraphType = typeof ParagraphType\n\n/**\n * Paragraph represents a unit of discourse dealing with a particular\n * point or idea.\n * @see https://github.com/syntax-tree/mdast#paragraph\n * @see https://github.github.com/gfm/#paragraphs\n */\nexport type Paragraph = YastParent<ParagraphType>\n")),(0,s.kt)("h3",{id:"strong"},"Strong"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const StrongType = 'strong'\nexport type StrongType = typeof StrongType\n\n/**\n * Strong represents strong importance, seriousness, or urgency for its\n * contents.\n * @see https://github.com/syntax-tree/mdast#strong\n * @see https://github.github.com/gfm/#emphasis-and-strong-emphasis\n */\nexport type Strong = YastParent<StrongType>\n")),(0,s.kt)("h3",{id:"table"},"Table"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const TableType = 'table'\nexport type TableType = typeof TableType\n\n/**\n * Table column configs.\n */\nexport interface TableColumn {\n  /**\n   * An align field can be present. If present, it must be a list of alignTypes.\n   * It represents how cells in columns are aligned.\n   */\n  align: YastAlignType\n}\n\n/**\n * @see https://github.github.com/gfm/#table\n * @see https://github.com/syntax-tree/mdast#table\n */\nexport interface Table extends YastParent<TableType> {\n  /**\n   * Table column configuration items\n   */\n  columns: TableColumn[]\n  /**\n   * Table rows (include table headers)\n   */\n  children: TableRow[]\n}\n")),(0,s.kt)("h3",{id:"tablecell"},"TableCell"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const TableCellType = 'tableCell'\nexport type TableCellType = typeof TableCellType\n\n/**\n * TableCell represents a header cell in a Table, if its parent is a head,\n * or a data cell otherwise.\n * @see https://github.com/syntax-tree/mdast#tablecell\n * @see https://github.github.com/gfm/#tables-extension-\n */\nexport type TableCell = YastParent<TableCellType>\n")),(0,s.kt)("h3",{id:"tablerow"},"TableRow"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const TableRowType = 'tableRow'\nexport type TableRowType = typeof TableRowType\n\n/**\n * TableRow represents a row of cells in a table.\n * @see https://github.com/syntax-tree/mdast#tablerow\n * @see https://github.github.com/gfm/#tables-extension-\n */\nexport interface TableRow extends YastParent<TableRowType> {\n  /**\n   * Table cells\n   */\n  children: TableCell[]\n}\n")),(0,s.kt)("h3",{id:"text"},"Text"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const TextType = 'text'\nexport type TextType = typeof TextType\n\n/**\n * Text represents everything that is just text.\n * @see https://github.com/syntax-tree/mdast#text\n * @see https://github.github.com/gfm/#textual-content\n */\nexport type Text = YastLiteral<TextType>\n")),(0,s.kt)("h3",{id:"thematicbreak"},"ThematicBreak"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const ThematicBreakType = 'thematicBreak'\nexport type ThematicBreakType = typeof ThematicBreakType\n\n/**\n * ThematicBreak represents a thematic break, such as a scene change in\n * a story, a transition to another topic, or a new document.\n * @see https://github.com/syntax-tree/mdast#thematicbreak\n * @see https://github.github.com/gfm/#thematic-break\n */\nexport type ThematicBreak = YastNode<ThematicBreakType>\n")),(0,s.kt)("h2",{id:"related"},"Related"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.github.com/gfm/"},"Github Flavor Markdown")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast"},"Mdast")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/packages/ast"},"Sourcecode"))))}g.isMDXComponent=!0}}]);