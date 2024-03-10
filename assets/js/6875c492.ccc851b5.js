"use strict";(self.webpackChunk_yozora_doc=self.webpackChunk_yozora_doc||[]).push([[4813],{4934:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(3230),a=n(3555),i=n(4848);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.A,{permalink:n,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(a.A,{permalink:r,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},4331:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(8322),a=n(3894),i=n(4848);function r(e){let{items:t,component:n=a.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(s.i,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},8798:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(6540);var s=n(4164),a=n(3230),i=n(7824),r=n(4239),l=n(8630),o=n(4783),c=n(1866),d=n(4934),g=n(1210),u=n(4331),h=n(6057),p=n(5225),m=n(4848);function x(e){const t=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=x(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.be,{title:n}),(0,m.jsx)(g.A,{tag:"blog_tags_posts"})]})}function A(e){let{tag:t,items:n,sidebar:s,listMetadata:i}=e;const r=x(t);return(0,m.jsxs)(c.A,{sidebar:s,children:[t.unlisted&&(0,m.jsx)(h.A,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.A,{as:"h1",children:r}),(0,m.jsx)(o.A,{href:t.allTagsPath,children:(0,m.jsx)(a.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.A,{items:n}),(0,m.jsx)(d.A,{metadata:i})]})}function b(e){return(0,m.jsxs)(r.e3,{className:(0,s.A)(l.G.wrapper.blogPages,l.G.page.blogTagPostListPage),children:[(0,m.jsx)(j,{...e}),(0,m.jsx)(A,{...e})]})}},6057:(e,t,n)=>{n.d(t,{A:()=>h});n(6540);var s=n(4164),a=n(3230),i=n(1141),r=n(4848);function l(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(8630),g=n(4182);function u(e){let{className:t}=e;return(0,r.jsx)(g.A,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,s.A)(t,d.G.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,{...e})]})}},4630:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(7437),a=n(5505),i=n(620),r=n(5176),l=n(3896),o=n(6540);const c={React:o,...o,styled:a.A,css:s.AH,YozoraParser:i.A,GfmParser:r.A,GfmExParser:l.A}}}]);