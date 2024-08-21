"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[5070],{1238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=n(3274),r=n(5262),o=n(2521);const a={sidebar_label:"Datanode"},c="Datanode Internals",i={id:"system-internals/components/datanode/README",title:"Datanode Internals",description:"This section documents the internal workings of the Datanode.",source:"@site/docs/07-system-internals/01-components/03-datanode/README.mdx",sourceDirName:"07-system-internals/01-components/03-datanode",slug:"/system-internals/components/datanode/",permalink:"/docs/system-internals/components/datanode/",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/ozone-site/tree/HDDS-9225-website-v2/docs/07-system-internals/01-components/03-datanode/README.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Datanode"},sidebar:"defaultSidebar",previous:{title:"Admin Read Request Flow",permalink:"/docs/system-internals/components/storage-container-manager/admin-read-request-flow"},next:{title:"Disk Layout",permalink:"/docs/system-internals/components/datanode/disk-layout"}},l={},d=[];function u(e){const t={h1:"h1",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"datanode-internals",children:"Datanode Internals"}),"\n","\n",(0,s.jsx)(t.p,{children:"This section documents the internal workings of the Datanode."}),"\n",(0,s.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},2521:(e,t,n)=>{n.d(t,{A:()=>y});n(9474);var s=n(8923),r=n(9527),o=n(3437),a=n(72),c=n(2963),i=n(7043),l=n(5450);const d={cardContainer:"cardContainer_kVmB",cardTitle:"cardTitle_lI91",cardDescription:"cardDescription_F_g3"};var u=n(3274);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(o.A,{href:t,className:(0,s.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:r,description:o}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,s.A)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),o&&(0,u.jsx)("p",{className:(0,s.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const n=(0,r.Nr)(t),s=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,i.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.$S)();return(0,u.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const o=(0,r.d1)(t);return(0,u.jsx)("section",{className:(0,s.A)("row",n),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},72:(e,t,n)=>{n.d(t,{W:()=>l});var s=n(9474),r=n(5977);const o=["zero","one","two","few","many","other"];function a(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=i();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const r=n.select(t),o=n.pluralForms.indexOf(r);return s[Math.min(o,s.length-1)]}(n,t,e)}}},5262:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(9474);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);