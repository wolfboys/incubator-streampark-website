"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[1092],{99626:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(86070),n=a(76113);const i={id:"intro",title:"What is Apache StreamPark\u2122",sidebar_position:1},s="Apache StreamPark\u2122",o={id:"get-started/intro",title:"What is Apache StreamPark\u2122",description:"Make stream processing easier!",source:"@site/docs/get-started/1.intro.md",sourceDirName:"get-started",slug:"/get-started/intro",permalink:"/docs/get-started/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/streampark-website/edit/dev/docs/get-started/1.intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"What is Apache StreamPark\u2122",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Platform Deployment",permalink:"/docs/get-started/deployment"}},c={},p=[{value:"\ud83d\ude80 What is Apache StreamPark\u2122",id:"-what-is-apache-streampark",level:2},{value:"Why Apache StreamPark\u2122?",id:"why-apache-streampark",level:2},{value:"\ud83c\udf89 Features",id:"-features",level:2},{value:"\ud83c\udff3\u200d\ud83c\udf08 Architecture of Apache StreamPark\u2122",id:"-architecture-of-apache-streampark",level:2},{value:"1. streampark-core",id:"1-streampark-core",level:3},{value:"2. streampark-console",id:"2-streampark-console",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"apache-streampark",children:"Apache StreamPark\u2122"}),"\n",(0,r.jsx)(t.p,{children:"Make stream processing easier!"}),"\n",(0,r.jsx)(t.h2,{id:"-what-is-apache-streampark",children:"\ud83d\ude80 What is Apache StreamPark\u2122"}),"\n",(0,r.jsx)(t.p,{children:"Apache StreamPark\u2122 is a streaming application development framework that provides a development framework for developing stream processing application with Apache Flink\xae and Apache Spark\u2122, Also, StreamPark is a professional management platform for streaming application, Its core capabilities include application development, debugging, deployment, operation, etc. Drastically simplifies streaming apps\u2019 development and operations, enabling enterprises to derive immediate insight from their data in real-time."}),"\n",(0,r.jsx)(t.h2,{id:"why-apache-streampark",children:"Why Apache StreamPark\u2122?"}),"\n",(0,r.jsx)(t.p,{children:"Apache Flink\xae and Apache Spark\u2122 are widely used as the next generation of big data streaming computing engines. Based on a foundation of excellent experiences combined with best practices, we extracted the task deployment and runtime parameters into the configuration files. This way, an easy-to-use\xa0RuntimeContext\xa0with out-of-the-box connectors can bring an easier and more efficient task development experience. It reduces the learning cost and development barriers so developers can focus on the business logic."}),"\n",(0,r.jsx)(t.p,{children:"However, enterprises may struggle to use Apache Flink\xae and Apache Spark\u2122 without a professional management platform for Flink and Spark tasks during the deployment phase. StreamPark offers a professional task management platform to address this need."}),"\n",(0,r.jsx)(t.h2,{id:"-features",children:"\ud83c\udf89 Features"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Easy-to-use Apache Flink\xae and Apache Spark\u2122 application development framework"}),"\n",(0,r.jsx)(t.li,{children:"One-stop stream processing operation platform"}),"\n",(0,r.jsx)(t.li,{children:"Support multiple versions of Apache Flink\xae & Apache Spark\u2122"}),"\n",(0,r.jsx)(t.li,{children:"Out-of-the-box connectors"}),"\n",(0,r.jsx)(t.li,{children:"Support catalog\u3001olap\u3001streaming-warehouse etc."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"-architecture-of-apache-streampark",children:"\ud83c\udff3\u200d\ud83c\udf08 Architecture of Apache StreamPark\u2122"}),"\n",(0,r.jsxs)(t.p,{children:["The overall architecture of Apache StreamPark is shown in the following figure. Apache StreamPark has two parts, ",(0,r.jsx)(t.code,{children:"streampark-core"})," and ",(0,r.jsx)(t.code,{children:"streampark-console"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"StreamPark Archite",src:a(93611).A+"",width:"2734",height:"1311"})}),"\n",(0,r.jsx)(t.h3,{id:"1-streampark-core",children:"1. streampark-core"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"streampark-core"})," is a framework used during development. It supports coding development, regulates configuration files, and follows the 'convention over configuration' principle. ",(0,r.jsx)(t.code,{children:"streampark-core"})," provides development-time Runtime Content and a series of out-of-the-box Connectors. Cumbersome operations are simplified by extending DataStream-related methods and integrating DataStream and the Flink SQL API. This improves development efficiency and developer experience because users can focus on the business logic."]}),"\n",(0,r.jsx)(t.h3,{id:"2-streampark-console",children:"2. streampark-console"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"streampark-console"})," is a comprehensive real-time Low Code data platform that can manage Flink tasks more convenient. It integrates the experience of many best practices and integrates many functions such as project compilation, release, parameter configuration, startup, savepoint, Flink SQL, monitoring, etc., which greatly simplifies the daily operation of Flink tasks and maintenance. The ultimate goal is to create a one-stop big data platform, which can provide a solution that integrates flow and batch, and integrates lake and warehouse."]}),"\n",(0,r.jsx)(t.p,{children:"This platform uses technologies including, but not limited to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"http://flink.apache.org",children:"Apache Flink"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"http://spark.apache.org",children:"Apache Spark\u2122"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"http://hadoop.apache.org",children:"Apache YARN"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://spring.io/projects/spring-boot/",children:"Spring Boot"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"http://www.mybatis.org",children:"Mybatis"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"http://mp.baomidou.com",children:"Mybatis-Plus"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://cn.vuejs.org/",children:"Vue"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://vuepress.vuejs.org/",children:"VuePress"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://antdv.com/",children:"Ant Design of Vue"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://pro.antdv",children:"ANTD PRO VUE"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://microsoft.github.io/monaco-editor/",children:"Monaco Editor"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Thanks for the support and inspiration given by the above excellent open source projects and many other excellent open source projects not mentioned here!"})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},93611:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/streampark_archite-ff9eba80347b8b3c47d241007386f7bc.png"},76113:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var r=a(30758);const n={},i=r.createContext(n);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);