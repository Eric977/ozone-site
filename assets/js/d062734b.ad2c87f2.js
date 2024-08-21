"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[9027],{3709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(3274),i=n(5262),o=n(2521);const s={sidebar_label:"Basic"},c="Basic Ozone Configuration",a={id:"administrator-guide/configuration/basic/README",title:"Basic Ozone Configuration",description:"This section documents the minimal set of configurations required for Ozone to run.",source:"@site/docs/05-administrator-guide/02-configuration/01-basic/README.mdx",sourceDirName:"05-administrator-guide/02-configuration/01-basic",slug:"/administrator-guide/configuration/basic/",permalink:"/docs/administrator-guide/configuration/basic/",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/ozone-site/tree/HDDS-9225-website-v2/docs/05-administrator-guide/02-configuration/01-basic/README.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Basic"},sidebar:"defaultSidebar",previous:{title:"Configuration",permalink:"/docs/administrator-guide/configuration/"},next:{title:"Configuration Files",permalink:"/docs/administrator-guide/configuration/basic/configuration-files"}},l={},u=[];function d(e){const t={h1:"h1",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"basic-ozone-configuration",children:"Basic Ozone Configuration"}),"\n","\n",(0,r.jsx)(t.p,{children:"This section documents the minimal set of configurations required for Ozone to run."}),"\n",(0,r.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2521:(e,t,n)=>{n.d(t,{A:()=>b});n(9474);var r=n(8923),i=n(9527),o=n(3437),s=n(72),c=n(2963),a=n(7043),l=n(5450);const u={cardContainer:"cardContainer_kVmB",cardTitle:"cardTitle_lI91",cardDescription:"cardDescription_F_g3"};var d=n(3274);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:i,description:o}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),o&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,a.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function g(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(g,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,d.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const o=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(p,{item:e})},t)))})}},72:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(9474),i=n(5977);const o=["zero","one","two","few","many","other"];function s(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),o=n.pluralForms.indexOf(i);return r[Math.min(o,r.length-1)]}(n,t,e)}}},5262:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(9474);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);