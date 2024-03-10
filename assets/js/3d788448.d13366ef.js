"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[9287],{4150:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>t,metadata:()=>h,toc:()=>d});var n=s(4848),a=s(8453),i=s(9489),o=s(7227);const t={id:"introduction-zh",title:"Yozora",sidebar_label:"\u4ecb\u7ecd"},l=void 0,h={id:"introduction-zh",title:"Yozora",description:"<img",source:"@site/versioned_docs/version-1.x.x/introduction-zh.mdx",sourceDirName:".",slug:"/introduction-zh",permalink:"/docs/1.x.x/introduction-zh",draft:!1,unlisted:!1,tags:[],version:"1.x.x",lastUpdatedBy:"guanghechen",lastUpdatedAt:1710076334,formattedLastUpdatedAt:"Mar 10, 2024",frontMatter:{id:"introduction-zh",title:"Yozora",sidebar_label:"\u4ecb\u7ecd"},sidebar:"Docs",previous:{title:"Introduction",permalink:"/docs/1.x.x/"},next:{title:"Algorithm",permalink:"/docs/1.x.x/algorithm"}},c={},d=[{value:"<g-emoji>\ud83c\udf89</g-emoji> \u4ec0\u4e48\u662f &quot;yozora&quot; ?",id:"-\u4ec0\u4e48\u662f-yozora-",level:2},{value:"<g-emoji>\u2728</g-emoji> Features",id:"-features",level:2},{value:"<g-emoji>\ud83d\udcdd</g-emoji> Usage",id:"-usage",level:2},{value:"<g-emoji>\ud83d\udca1</g-emoji> FAQ",id:"-faq",level:2},{value:"<g-emoji>\ud83d\udcac</g-emoji> Contact",id:"-contact",level:2},{value:"<g-emoji>\ud83d\udcc4</g-emoji> License",id:"-license",level:2},{value:"Related",id:"related",level:2}];function j(e){const r={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("header",{children:[(0,n.jsx)("h1",{align:"center",children:(0,n.jsx)("div",{align:"center",children:(0,n.jsx)("img",{alt:"logo.png",src:"/img/logo.png",height:"300px"})})}),(0,n.jsxs)("div",{align:"center",children:[(0,n.jsx)("a",{href:"#license",children:(0,n.jsx)("img",{alt:"License",src:"https://img.shields.io/github/license/guanghechen/yozora"})}),(0,n.jsx)("a",{href:"https://github.com/yozorajs/yozora/tags",children:(0,n.jsx)("img",{alt:"Package Version",src:"https://img.shields.io/github/v/tag/guanghechen/yozora?include_prereleases&sort=semver"})}),(0,n.jsx)("a",{href:"https://github.com/yozorajs/yozora/search?l=typescript",children:(0,n.jsx)("img",{alt:"Github Top Language",src:"https://img.shields.io/github/languages/top/guanghechen/yozora"})}),(0,n.jsx)("a",{href:"https://github.com/nodejs/node",children:(0,n.jsx)("img",{alt:"Node.js Version",src:"https://img.shields.io/node/v/@yozora/core-tokenizer"})}),(0,n.jsx)("a",{href:"https://github.com/yozorajs/yozora/actions/workflows/ci.yml",children:(0,n.jsx)("img",{alt:"CI Workflow",src:"https://github.com/yozorajs/yozora/actions/workflows/ci.yml/badge.svg"})}),(0,n.jsx)("a",{href:"https://github.com/facebook/jest",children:(0,n.jsx)("img",{alt:"Tested with Jest",src:"https://img.shields.io/badge/tested_with-jest-9c465e.svg"})}),(0,n.jsx)("a",{href:"https://github.com/prettier/prettier",children:(0,n.jsx)("img",{alt:"Code Style: prettier",src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"})})]})]}),"\n",(0,n.jsxs)(r.h2,{id:"-\u4ec0\u4e48\u662f-yozora-",children:[(0,n.jsx)("g-emoji",{children:"\ud83c\udf89"}),' \u4ec0\u4e48\u662f "yozora" ?']}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"yozora"})})," \u662f\u65e5\u8bed\u300c\u3088\u305e\u3089\u300d\u7684\u7f57\u9a6c\u97f3\uff0c\u610f\u4e3a\u201c\u591c\u7a7a\u201d\uff0c\u53d6\u81ea",(0,n.jsx)(r.em,{children:"\u4e16\u754c\u306e\u7d42\u308f\u308a"}),"\u4e50\u961f\u7684\n\u300e",(0,n.jsx)(r.em,{children:"\u82b1\u9ce5\u98a8\u6708"}),"\u300f\u4e2d\u7684\u6b4c\u8bcd\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u6b64\u9879\u76ee\u662f\u4e00\u4e2a monorepo\uff0c\u76ee\u7684\u662f\u5b9e\u73b0\u4e00\u4e2a\u9ad8\u5ea6\u53ef\u6269\u5c55\u7684\u3001\u53ef\u63d2\u62d4\u5f0f Markdown \u89e3\u6790\u5668\u3002\n\u5b83\u91c7\u7528\u4e86\u4e2d\u95f4\u4ef6\u7684\u601d\u60f3\uff0c\u7531\u6838\u5fc3\u7b97\u6cd5 ",(0,n.jsx)(r.a,{href:"./package/core-parser",children:"@yozora/core-parser"})," \u8c03\u5ea6\u5206\u8bcd\u5668\uff08\u5982\n",(0,n.jsx)(r.a,{href:"./package/tokenizer-autolink",children:"@yozora/tokenizer-autolink"}),"\uff09\u5b8c\u6210\u89e3\u6790\u5de5\u4f5c\u3002\u51c6\u786e\u5730\u8bf4\uff0c",(0,n.jsx)(r.em,{children:"yozora"})," \u662f\u4e00\u4e2a\u5c06 Markdown\n\u8bed\u6cd5\u6216\u5176\u6269\u5c55\u8bed\u6cd5\u7f16\u5199\u7684\u5b57\u7b26\u4e32\u89e3\u6790\u6210\u62bd\u8c61\u8bed\u6cd5\u6811\uff08AST\uff09\u7684\u7b97\u6cd5\u3002"]}),"\n",(0,n.jsxs)(r.h2,{id:"-features",children:[(0,n.jsx)("g-emoji",{children:"\u2728"})," Features"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["\ud83d\udd16 \u5b8c\u6574\u5730\u652f\u6301\u4e86 ",(0,n.jsx)(r.a,{href:"https://github.github.com/gfm/",children:"GFM \u89c4\u8303"})," \u4e2d\u63d0\u5230\u7684\u6240\u6709\u89c4\u5219\uff0c\u5e76\u901a\u8fc7\u4e86\u51e0\u4e4e\u6240\u6709\u7531\u89c4\u8303\n\u4e2d\u7684\u793a\u4f8b\u6539\u9020\u6210\u7684\u6d4b\u8bd5\u7528\u4f8b\uff08\u9664\u4e86\u7531\u793a\u4f8b ",(0,n.jsx)(r.a,{href:"https://github.github.com/gfm/#example-653",children:"https://github.github.com/gfm/#example-653"}),"\n\u6240\u5c55\u793a\u7684\u6807\u7b7e\u8fc7\u6ee4\u89c4\u5219\uff0c \u56e0\u4e3a\u6211\u4e0d\u6253\u7b97\u8ba9 ",(0,n.jsx)(r.a,{href:"https://github.com/yozorajs/yozora-react",children:"Yozora AST \u7684 React \u6e32\u67d3\u5668"}),"\n\u652f\u6301\u539f\u751f\u7684 HTML \u6807\u7b7e\uff0c\u6240\u4ee5\u61d2\u5f97\u505a\u6807\u7b7e\u8fc7\u6ee4\uff0c\u5982\u679c\u6709\u9700\u8981\u53ef\u4ee5\u81ea\u884c\u505a\u4e00\u4e0b\u8fc7\u6ee4\uff09\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u53ef\u53c2\u89c1 ",(0,n.jsx)(r.a,{href:"./package/parser-gfm",children:"@yozora/parser-gfm"})," or ",(0,n.jsx)(r.a,{href:"./package/parser-gfm-ex",children:"@yozora/parser-gfm-ex"})," \u4ee5\u83b7\u5f97\u8fdb\u4e00\u6b65\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\ud83d\ude80 \u5065\u58ee\u6027\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u6240\u6709\u4ee3\u7801\u90fd\u91c7\u7528 Typescript \u7f16\u5199\uff0c\u62e5\u6709\u4e25\u683c\u5730\u9759\u6001\u7c7b\u578b\u68c0\u67e5\u7684\u4fdd\u969c\uff1b"}),"\n",(0,n.jsx)(r.li,{children:"\u4f7f\u7528 eslint \u548c prettier \u7ea6\u675f\u7f16\u7801\u98ce\u683c\uff0c\u89c4\u907f\u4e86\u504f\u50fb\u8bed\u6cd5\u53ca shadow variables \u4e4b\u7c7b\n\u6613\u4e8e\u51fa\u9519\u7684\u95ee\u9898\uff1b"}),"\n",(0,n.jsx)(r.li,{children:"\u4f7f\u7528\u4e86\u5927\u91cf\u7684\u6d4b\u8bd5\u7528\u4f8b\u8fdb\u884c\u6d4b\u8bd5\uff1b"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\ud83d\udc9a \u5e72\u51c0\uff0c\u96f6\u7b2c\u4e09\u65b9\u4f9d\u8d56\u3002"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\u26a1\ufe0f \u9ad8\u6027\u80fd"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\u89e3\u6790\u590d\u6742\u5ea6\u4e3a\u5b57\u7b26\u4e32\u957f\u5ea6\u4e58\u4ee5\u5206\u8bcd\u5668\u5217\u8868\u957f\u5ea6\uff0c\u5df2\u7ecf\u8fbe\u5230\u4e86\u7406\u8bba\u590d\u6742\u5ea6\u7684\u4e0b\u754c\uff1b"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\u89e3\u6790\u5668\u7684 API \u652f\u6301\u6d41\u5f0f\u8bfb\u5165\uff08\u91c7\u7528\u751f\u6210\u5668/\u8fed\u4ee3\u5668\u8fdb\u884c\u8f93\u5165\uff09\uff0c\u652f\u6301\u8fb9\u8bfb\u5165\u8fb9\u89e3\u6790\n\uff08\u6682\u4ec5\u9650\u4e8e\u5757\u7ea7\u6570\u636e\uff09\uff1b"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["\u5728\u8bfb\u5165\u5b57\u7b26\u4e32\u65f6\uff0c\u4f1a\u5c06\u5176\u9884\u5904\u7406\u6210\u5b57\u7b26\u7f16\u7801\u53ca\u4f4d\u7f6e\u4fe1\u606f\uff0c\u4f7f\u7528 ",(0,n.jsx)(r.a,{href:"https://github.com/yozorajs/yozora/blob/main/packages/character/src/types.ts#L10",children:"NodePoint"}),"\n\u6570\u636e\u7c7b\u578b\u627f\u8f7d\u3002\u5728\u5206\u8bcd\u9636\u6bb5\u901a\u8fc7\u626b\u63cf ",(0,n.jsx)(r.a,{href:"https://github.com/yozorajs/yozora/blob/main/packages/character/src/types.ts#L10",children:"NodePoint"})," \u7684\u65b9\u5f0f\u5b8c\u6210\u5339\u914d\uff0c\n\u867d\u7136\u5339\u914d\u8fc7\u7a0b\u66f4\u9ebb\u70e6\u4e9b\uff0c\u4f46\u7406\u8bba\u4e0a\u6027\u80fd\u6bd4\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u5339\u914d\u65b9\u5f0f\u5c11\u4e00\u4e9b\u5e38\u6570\uff1b"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\u5c0f\u5fc3\u5730\u5904\u7406\u6570\u7ec4\u65b0\u5efa/\u8fde\u63a5\u64cd\u4f5c\uff0c\u6574\u4e2a\u626b\u63cf\u9636\u6bb5\u5c3d\u91cf\u590d\u7528\u6570\u7ec4\uff0c\u4ec5\u901a\u8fc7\u4e0b\u6807\u7d22\u5f15\u6765\u5708\u5b9a\n\u5339\u914d\u8303\u56f4\uff0c\u5e76\u5e94\u7528\u4e86\u4e0d\u5c11\u7b56\u7565\u51cf\u5c11\u91cd\u590d\u5339\u914d/\u89e3\u6790\u64cd\u4f5c\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["\ud83e\ude79 \u517c\u5bb9\u6027\uff0c\u89e3\u6790\u5668\u89e3\u6790\u51fa\u7684 AST \u4e0e [Mdast][mdast-homepage] \u4e2d\u5b9a\u4e49\u7684\u76f8\u517c\u5bb9\u3002\u5373\u4fbf\n\u4ee5\u540e\u5982\u679c\u90e8\u5206\u6570\u636e\u7c7b\u578b\u4e0d\u517c\u5bb9\uff0c\u4e5f\u53ef\u4ee5\u5f88\u5bb9\u6613\u901a\u8fc7 ",(0,n.jsx)(r.a,{href:"./package/ast-util",children:"@yozora/ast-util"})," \u4e2d\u63d0\u4f9b\u7684 API\n\u53bb\u904d\u5386 AST \u4ee5\u8fdb\u884c\u9002\u914d\u4fee\u6539\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\ud83c\udfa8 \u53ef\u6269\u5c55\u6027\uff0cyozora \u91c7\u7528\u4e2d\u95f4\u4ef6\u7684\u65b9\u5f0f\uff0c\u7531\u5185\u90e8\u7b97\u6cd5\u9a71\u52a8\u5206\u8bcd\u5668\u5217\u8868\u5b8c\u6210\u89e3\u6790\u5de5\u4f5c\uff0c\n\u5b83\u5e26\u4e86\u5982\u4e0b\u80fd\u529b\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u6613\u4e8e\u521b\u5efa\u5e76\u96c6\u6210\u81ea\u5b9a\u4e49\u7684\u5206\u8bcd\u5668"}),"\n",(0,n.jsx)(r.li,{children:"\u6240\u6709\u7684\u5206\u8bcd\u5668\u5747\u53ef\u81ea\u7531\u88c5\u8f7d/\u5378\u8f7d"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["\u6b64\u9879\u76ee\u4e2d\u5df2\u5b9e\u73b0\u4e86\u4e00\u4e9b ",(0,n.jsx)(r.a,{href:"https://github.github.com/gfm/",children:"GFM"})," \u4e2d\u672a\u63d0\u5230\u7684\u6570\u636e\u7c7b\u578b\u7684\u5206\u8bcd\u5668\uff0c\u5982 ",(0,n.jsx)(r.a,{href:"./package/tokenizer-admonition",children:"@yozora/tokenizer-admonition"}),",\n",(0,n.jsx)(r.a,{href:"./package/tokenizer-footnote",children:"@yozora/tokenizer-footnote"})," \u7b49\uff0c\u4e14\u5747\u5df2\u9ed8\u8ba4\u5185\u7f6e\u4e8e ",(0,n.jsx)(r.a,{href:"./package/parser",children:"@yozora/parser"})," \u4e2d\u3002\u5982\u679c\n\u4f60\u4e0d\u559c\u6b22\u5176\u4e2d\u7684\u67d0\u4e9b\uff0c\u53ef\u4ee5\u4efb\u610f\u5378\u8f7d\u5b83\u4eec\u3002"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"-usage",children:[(0,n.jsx)("g-emoji",{children:"\ud83d\udcdd"})," Usage"]}),"\n",(0,n.jsxs)(i.A,{defaultValue:"YozoraParser",values:[{label:"YozoraParser",value:"YozoraParser"},{label:"GfmParser",value:"GfmParser"},{label:"GfmExParser",value:"GfmExParser"}],children:[(0,n.jsxs)(o.A,{value:"YozoraParser",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"./package/parser",children:"@yozora/parser"})})}),": \uff08",(0,n.jsx)(r.strong,{children:"\u63a8\u8350"}),"\uff09\u5185\u7f6e\u4e86\u6240\u6709\u5206\u8bcd\u5668\u7684 Markdown \u89e3\u6790\u5668\u3002"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"import YozoraParser from '@yozora/parser'\n\nconst parser = new YozoraParser()\nparser.parse('source content')\n"})})]}),(0,n.jsxs)(o.A,{value:"GfmParser",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"./package/parser-gfm",children:"@yozora/parser-gfm"})})}),": \u652f\u6301 ",(0,n.jsx)(r.a,{href:"https://github.github.com/gfm/",children:"GFM \u89c4\u8303"})," \u7684 Markdown \u89e3\u6790\u5668\u3002\u5185\u7f6e\n\u4e86\u652f\u6301 ",(0,n.jsx)(r.a,{href:"https://github.github.com/gfm/",children:"GFM \u89c4\u8303"})," \u4e2d\u63d0\u5230\u7684\u6240\u6709\u8bed\u6cd5\uff08",(0,n.jsx)(r.strong,{children:"\u4e0d\u5305\u542b"}),"\u89c4\u8303\u4e2d\u63d0\u5230\u7684\u6269\u5c55\u8bed\u6cd5\uff0c\u5982\n",(0,n.jsx)(r.a,{href:"./package/tokenizer-table",children:"table"}),"\uff09\u7684\u5206\u8bcd\u5668\u3002"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"import GfmParser from '@yozora/parser-gfm'\n\nconst parser = new GfmParser()\nparser.parse('github flavor markdown contents')\n"})})]}),(0,n.jsxs)(o.A,{value:"GfmExParser",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"./package/parser-gfm-ex",children:"@yozora/parser-gfm-ex"})})}),": \u652f\u6301 ",(0,n.jsx)(r.a,{href:"https://github.github.com/gfm/",children:"GFM \u89c4\u8303"})," \u7684 Markdown \u89e3\u6790\u5668\u3002\n\u5185\u7f6e\n\u4e86\u652f\u6301 ",(0,n.jsx)(r.a,{href:"https://github.github.com/gfm/",children:"GFM \u89c4\u8303"})," \u4e2d\u63d0\u5230\u7684\u6240\u6709\u8bed\u6cd5\uff08",(0,n.jsx)(r.strong,{children:"\u5305\u62ec"}),"\u89c4\u8303\u4e2d\u63d0\u5230\u7684\u6269\u5c55\u8bed\u6cd5\uff0c\u5982\n",(0,n.jsx)(r.a,{href:"./package/tokenizer-table",children:"table"}),"\uff09\u7684\u5206\u8bcd\u5668\u3002"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"import GfmExParser from '@yozora/parser-gfm-ex'\n\nconst parser = new GfmExParser()\nparser.parse('github flavor markdown contents (with gfm extensions enabled)')\n"})})]})]}),"\n",(0,n.jsxs)(r.h2,{id:"-faq",children:[(0,n.jsx)("g-emoji",{children:"\ud83d\udca1"})," FAQ"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\u5982\u4f55\u5728 gatsby \u4e2d\u4f7f\u7528 yozora\uff1f"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\u53c2\u89c1 ",(0,n.jsx)(r.a,{href:"https://github.com/yozorajs/gatsby-scaffolds/blob/main/packages/gatsby-transformer#readme",children:"@yozora/gatsby-transformer"})," \u548c ",(0,n.jsx)(r.a,{href:"https://github.com/yozorajs/gatsby-scaffolds/blob/main/packages/gatsby-images#readme",children:"@yozora/gatsby-images"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\u5982\u4f55\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u5206\u8bcd\u5668?"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["\u4f7f\u7528\u811a\u624b\u67b6\u5de5\u5177 ",(0,n.jsx)(r.a,{href:"./package/template-tokenizer",children:"@yozora/template-tokenizer"})," \u53bb\u521b\u5efa\u4e00\u4e2a\u7531\u9884\u5b9a\u4e49\u6a21\u677f\u751f\u6210\u7684\u5206\n\u8bcd\u5668\u9879\u76ee\uff08\u6216\u5355\u4f53\u9879\u76ee\u4e2d\u7684\u4e00\u4e2a\u5305\uff09 \uff1b"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["\u53c2\u89c1 ",(0,n.jsx)(r.a,{href:"./package/core-tokenizer",children:"@yozora/core-tokenizer"})," \u4ee5\u83b7\u5f97\u5206\u8bcd\u5668\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u7ec6\u8282\uff1b"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["\u53c2\u89c1 ",(0,n.jsx)(r.a,{href:"./package/jest-for-tokenizer",children:"@yozora/jest-for-tokenizer"})," \u4ee5\u83b7\u5f97\u6d4b\u8bd5\u81ea\u5b9a\u4e49\u5206\u8bcd\u5668\u76f8\u5173\u7684\u4fe1\u606f\uff1b"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["\u53c2\u8003 ",(0,n.jsx)(r.a,{href:"./package/core-parser",children:"@yozora/core-parser"})," \u548c ",(0,n.jsx)(r.a,{href:"./package/parser",children:"@yozora/parser"})," \u4ee5\u83b7\u5f97\u5982\u4f55\u4f7f\u7528\u81ea\u5b9a\u4e49\u5206\u8bcd\n\u5668\u7684\u4fe1\u606f\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["\u53e6\u5916\uff0c\u540c\u6837\u63a8\u8350\u53c2\u8003\u73b0\u6709\u7684 ",(0,n.jsx)(r.a,{href:"https://github.com/yozorajs/yozora/tree/release-1.x.x/tokenizers",children:"\u5206\u8bcd\u5668"}),"\uff0c\u4ee5\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u7248\u672c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"-contact",children:[(0,n.jsx)("g-emoji",{children:"\ud83d\udcac"})," Contact"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/yozorajs/yozora/issues",children:"Github issues"})}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"-license",children:[(0,n.jsx)("g-emoji",{children:"\ud83d\udcc4"})," License"]}),"\n",(0,n.jsxs)(r.p,{children:["Yozora \u4f7f\u7528 ",(0,n.jsx)(r.a,{href:"https://github.com/yozorajs/yozora/blob/main/LICENSE",children:"MIT \u8bb8\u53ef\u8bc1"}),"\n\u8fdb\u884c\u6388\u6743\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"related",children:"Related"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://me.guanghechen.com/essay/tada/",children:"\u2728\u5149\u548c\u5c18\u4e00\u76f4\u60f3\u8981\u4e00\u4e2a\u6e05\u723d\u535a\u5ba2"}),": \u4e3a\u4ec0\u4e48\u8981\u5199\u8fd9\u4e2a\u9879\u76ee\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://github.com/yozorajs/yozora-react/tree/main/packages/markdown",children:"@yozora/react-markdown"}),": \u4e00\u4e2a\u7528\u4e8e\u5c06 Yozora AST \u6e32\u67d3\u6210 React \u7ec4\u4ef6\u7684\u5e93\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://github.com/yozorajs/yozora-html/tree/main/packages/markdown",children:"@yozora/html-markdown"}),": \u4e00\u4e2a\u7528\u4e8e\u5c06 Yozora AST \u6e32\u67d3\u6210 HTML \u5b57\u7b26\u4e32\u7684\u5e93\u3002"]}),"\n"]})]})}function x(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}}}]);