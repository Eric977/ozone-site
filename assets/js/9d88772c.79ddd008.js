"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[5847],{702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(3274),a=t(5262);const s={sidebar_label:"Read"},r="Implementation of Read Operations",o={id:"system-internals/data-operations/read",title:"Implementation of Read Operations",description:"TODO: File a subtask under HDDS-9862 and complete this page or section.",source:"@site/docs/07-system-internals/02-data-operations/02-read.md",sourceDirName:"07-system-internals/02-data-operations",slug:"/system-internals/data-operations/read",permalink:"/docs/system-internals/data-operations/read",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/ozone-site/tree/HDDS-9225-website-v2/docs/07-system-internals/02-data-operations/02-read.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Read"},sidebar:"defaultSidebar",previous:{title:"Write",permalink:"/docs/system-internals/data-operations/write"},next:{title:"Delete",permalink:"/docs/system-internals/data-operations/delete"}},l={},d=[{value:"Reading Metadata",id:"reading-metadata",level:2},{value:"Reading Data",id:"reading-data",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"implementation-of-read-operations",children:"Implementation of Read Operations"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"TODO:"})," File a subtask under ",(0,i.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HDDS-9862",children:"HDDS-9862"})," and complete this page or section."]}),"\n",(0,i.jsx)(n.h2,{id:"reading-metadata",children:"Reading Metadata"}),"\n",(0,i.jsx)(n.h2,{id:"reading-data",children:"Reading Data"}),"\n",(0,i.jsx)(n.p,{children:"Trace every part of a read request from beginning to end. This includes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Client getting encryption keys"}),"\n",(0,i.jsx)(n.li,{children:"Client calling OM to create key"}),"\n",(0,i.jsx)(n.li,{children:"OM validating client's Kerberos principal"}),"\n",(0,i.jsx)(n.li,{children:"OM checking permissions (Ranger or Native ACLs)"}),"\n",(0,i.jsx)(n.li,{children:"OM generating block tokens from the shared secret previously retrieved from SCM"}),"\n",(0,i.jsx)(n.li,{children:"OM getting block locations from SCM or from its cache."}),"\n",(0,i.jsx)(n.li,{children:"OM returning container, blocks, pipeline, block tokens"}),"\n",(0,i.jsx)(n.li,{children:"Client sending block tokens and Datanode validating based on the shared secret from SCM"}),"\n",(0,i.jsxs)(n.li,{children:["Client sending read chunk requests to Datanode to fetch the data.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For replication:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Include topology choices of which Datanodes to use"}),"\n",(0,i.jsx)(n.li,{children:"Include failover handling"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["For EC, link to the ",(0,i.jsx)(n.a,{href:"../features/erasure-coding",children:"EC feature page"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Client validating checksums"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5262:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(9474);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);