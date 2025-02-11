"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[3127],{21876:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var s=r(86070),a=r(76113);const i={slug:"streampark-usercase-tianyancha",title:"Apache StreamPark\u2122 \u52a9\u529b\u5929\u773c\u67e5\u5b9e\u65f6\u5e73\u53f0\u5efa\u8bbe\uff5c\u6548\u7387\u6570\u500d\u63d0\u5347",tags:["StreamPark","\u751f\u4ea7\u5b9e\u8df5"]},t=void 0,l={permalink:"/zh-CN/blog/streampark-usercase-tianyancha",editUrl:"https://github.com/apache/streampark-website/edit/dev/blog/11-streampark-usercase-tianyancha.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/11-streampark-usercase-tianyancha.md",title:"Apache StreamPark\u2122 \u52a9\u529b\u5929\u773c\u67e5\u5b9e\u65f6\u5e73\u53f0\u5efa\u8bbe\uff5c\u6548\u7387\u6570\u500d\u63d0\u5347",description:"\u5bfc\u8bfb\uff1a\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5929\u773c\u67e5\u5728\u5b9e\u65f6\u8ba1\u7b97\u4e1a\u52a1\u8fd1\u5343\u4e2a Flink \u4f5c\u4e1a\u8fd0\u7ef4\u65f6\u9762\u4e34\u4f5c\u4e1a\u5f00\u53d1\u548c\u7ba1\u7406\u4e0a\u7684\u6311\u6218\uff0c\u901a\u8fc7\u5f15\u5165 Apache StreamPark \u6765\u89e3\u51b3\u8fd9\u4e9b\u6311\u6218\uff0c\u4ecb\u7ecd\u4e86\u5728\u5f15\u5165 StreamPark \u843d\u5730\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u4e00\u4e9b\u95ee\u9898\u4ee5\u53ca\u5982\u4f55\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u5e76\u6210\u529f\u843d\u5730\uff0c\u6700\u540e\u6781\u5927\u5730\u964d\u4f4e\u8fd0\u7ef4\u6210\u672c\uff0c\u663e\u8457\u5730\u63d0\u5347\u4eba\u6548\u3002",date:"2025-02-10T17:10:02.000Z",tags:[{inline:!0,label:"StreamPark",permalink:"/zh-CN/blog/tags/stream-park"},{inline:!0,label:"\u751f\u4ea7\u5b9e\u8df5",permalink:"/zh-CN/blog/tags/\u751f\u4ea7\u5b9e\u8df5"}],readingTime:14.51,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"streampark-usercase-tianyancha",title:"Apache StreamPark\u2122 \u52a9\u529b\u5929\u773c\u67e5\u5b9e\u65f6\u5e73\u53f0\u5efa\u8bbe\uff5c\u6548\u7387\u6570\u500d\u63d0\u5347",tags:["StreamPark","\u751f\u4ea7\u5b9e\u8df5"]},unlisted:!1,prevItem:{title:"\u81ea\u5982\u57fa\u4e8e Apache StreamPark\u2122 + Paimon \u5b9e\u73b0\u6570\u636e\u4e00\u952e\u5165\u6e56\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/blog/streampark-flink-with-paimon-in-ziru"},nextItem:{title:"Apache StreamPark\u2122 \u5728\u6b22\u4e50\u4e92\u5a31\u7684\u4e91\u539f\u751f\u5e73\u53f0\u5b9e\u8df5",permalink:"/zh-CN/blog/streampark-usercase-joymaker"}},c={authorsImageUrls:[]},h=[{value:"<strong>\u4e1a\u52a1\u80cc\u666f\u4e0e\u6311\u6218</strong>",id:"\u4e1a\u52a1\u80cc\u666f\u4e0e\u6311\u6218",level:2},{value:"<strong>StreamPark \u843d\u5730\u5b9e\u8df5</strong>",id:"streampark-\u843d\u5730\u5b9e\u8df5",level:2},{value:"<strong>1. Git \u5f0f\u9879\u76ee\u7ba1\u7406</strong>",id:"1-git-\u5f0f\u9879\u76ee\u7ba1\u7406",level:3},{value:"<strong>2. \u79d2\u7ea7\u7cbe\u786e\u544a\u8b66\u548c\u81ea\u52a8\u8fd0\u7ef4</strong>",id:"2-\u79d2\u7ea7\u7cbe\u786e\u544a\u8b66\u548c\u81ea\u52a8\u8fd0\u7ef4",level:3},{value:"<strong>3. \u5e73\u53f0\u7528\u6237\u6743\u9650\u7ba1\u63a7</strong>",id:"3-\u5e73\u53f0\u7528\u6237\u6743\u9650\u7ba1\u63a7",level:3},{value:"<strong>4. Flink SQL \u5728\u7ebf\u5f00\u53d1</strong>",id:"4-flink-sql-\u5728\u7ebf\u5f00\u53d1",level:3},{value:"<strong>5. \u5b8c\u5584\u7684\u4f5c\u4e1a\u7ba1\u7406\u80fd\u529b</strong>",id:"5-\u5b8c\u5584\u7684\u4f5c\u4e1a\u7ba1\u7406\u80fd\u529b",level:3},{value:"<strong>\u9047\u5230\u7684\u95ee\u9898</strong>",id:"\u9047\u5230\u7684\u95ee\u9898",level:2},{value:"<strong>\u534e\u4e3a\u4e91\u4e0e\u5f00\u6e90 Hadoop \u5b58\u5728\u517c\u5bb9\u95ee\u9898</strong>",id:"\u534e\u4e3a\u4e91\u4e0e\u5f00\u6e90-hadoop-\u5b58\u5728\u517c\u5bb9\u95ee\u9898",level:3},{value:"<strong>\u5176\u4ed6 BUG</strong>",id:"\u5176\u4ed6-bug",level:3},{value:"<strong>\u5e26\u6765\u7684\u6536\u76ca</strong>",id:"\u5e26\u6765\u7684\u6536\u76ca",level:2},{value:"<strong>\u672a\u6765\u89c4\u5212</strong>",id:"\u672a\u6765\u89c4\u5212",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(69229).A+"",width:"1080",height:"460"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5bfc\u8bfb"}),"\uff1a\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5929\u773c\u67e5\u5728\u5b9e\u65f6\u8ba1\u7b97\u4e1a\u52a1\u8fd1\u5343\u4e2a Flink \u4f5c\u4e1a\u8fd0\u7ef4\u65f6\u9762\u4e34\u4f5c\u4e1a\u5f00\u53d1\u548c\u7ba1\u7406\u4e0a\u7684\u6311\u6218\uff0c\u901a\u8fc7\u5f15\u5165 Apache StreamPark \u6765\u89e3\u51b3\u8fd9\u4e9b\u6311\u6218\uff0c\u4ecb\u7ecd\u4e86\u5728\u5f15\u5165 StreamPark \u843d\u5730\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u4e00\u4e9b\u95ee\u9898\u4ee5\u53ca\u5982\u4f55\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u5e76\u6210\u529f\u843d\u5730\uff0c\u6700\u540e\u6781\u5927\u5730\u964d\u4f4e\u8fd0\u7ef4\u6210\u672c\uff0c\u663e\u8457\u5730\u63d0\u5347\u4eba\u6548\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["Github: ",(0,s.jsx)(e.a,{href:"https://github.com/apache/streampark",children:"https://github.com/apache/streampark"})]}),"\n",(0,s.jsx)(e.p,{children:"\u6b22\u8fce\u5173\u6ce8\u3001Star\u3001Fork\uff0c\u53c2\u4e0e\u8d21\u732e"}),"\n",(0,s.jsx)(e.p,{children:"\u4f9b\u7a3f\u5355\u4f4d | \u5317\u4eac\u5929\u773c\u67e5"}),"\n",(0,s.jsx)(e.p,{children:"\u6587\u7ae0\u4f5c\u8005 | \u674e\u6cbb\u9716"}),"\n",(0,s.jsx)(e.p,{children:"\u6587\u7ae0\u6574\u7406 | \u6768\u6797\u4f1f"}),"\n",(0,s.jsx)(e.p,{children:"\u5185\u5bb9\u6821\u5bf9 | \u6f58\u6708\u9e4f"}),"\n",(0,s.jsx)(e.p,{children:"\u5929\u773c\u67e5\u662f\u4e2d\u56fd\u9886\u5148\u7684\u5546\u4e1a\u67e5\u8be2\u5e73\u53f0\u3002\u81ea 2014 \u5e74\u521b\u7acb\u4ee5\u6765\uff0c\u5929\u773c\u67e5\u6301\u7eed\u4fdd\u6301\u9ad8\u901f\u589e\u957f\uff0c\u884c\u4e1a\u6e17\u900f\u7387\u8d85\u8fc7 77%\uff0c\u6708\u6d3b\u8dc3\u7528\u6237\u6570\u9ad8\u8fbe 3500 \u4e07\uff0c\u7d2f\u8ba1\u7528\u6237\u6570 6 \u4ebf+\uff0c\u201c\u5929\u773c\u4e00\u4e0b\u201d\u5df2\u6210\u4e3a\u5546\u4e1a\u9886\u57df\u7684\u8d85\u7ea7\u7b26\u53f7\uff0c\u662f\u9996\u6279\u83b7\u5f97\u592e\u884c\u5907\u6848\u4f01\u4e1a\u5f81\u4fe1\u8d44\u8d28\u7684\u516c\u53f8\u4e4b\u4e00\u3002\u7ecf\u8fc7\u516c\u53f8\u591a\u5e74\u6df1\u8015\uff0c\u5e73\u53f0\u5171\u6536\u5f55\u5168\u56fd 3.4 \u4ebf\u3001\u5168\u7403 6.4 \u4ebf\u793e\u4f1a\u5b9e\u4f53\uff0c1000 \u591a\u79cd\u5546\u67e5\u4fe1\u606f\u7ef4\u5ea6\u5b9e\u65f6\u66f4\u65b0\uff0c\u6210\u4e3a\u4f01\u4e1a\u5ba2\u6237\u548c\u4e2a\u4eba\u7528\u6237\u5546\u4e1a\u67e5\u8be2\u7684\u9996\u9009\u54c1\u724c\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(56190).A+"",width:"1080",height:"748"})}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u6587\u5c06\u4ecb\u7ecd\u5929\u773c\u67e5\u5b9e\u65f6\u8ba1\u7b97\u4e1a\u52a1\u9762\u4e34\u7684\u6311\u6218\uff0c\u5982\u4f55\u901a\u8fc7 Apache StreamPark \u5e73\u53f0\u6765\u89e3\u51b3\u8fd9\u4e9b\u6311\u6218\uff0c\u4ee5\u53ca\u5e26\u6765\u7684\u663e\u8457\u6548\u76ca\u548c\u672a\u6765\u89c4\u5212\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4e1a\u52a1\u80cc\u666f\u4e0e\u6311\u6218",children:(0,s.jsx)(e.strong,{children:"\u4e1a\u52a1\u80cc\u666f\u4e0e\u6311\u6218"})}),"\n",(0,s.jsx)(e.p,{children:"\u5929\u773c\u67e5\u6709\u7740\u5e9e\u5927\u7684\u7528\u6237\u57fa\u7840\u548c\u591a\u6837\u7684\u4e1a\u52a1\u7ef4\u5ea6\uff0c\u6211\u4eec\u901a\u8fc7 Apache Flink\xae \u8fd9\u4e00\u5f3a\u5927\u7684\u5b9e\u65f6\u8ba1\u7b97\u5f15\u64ce\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u4f18\u8d28\u7684\u4ea7\u54c1\u548c\u670d\u52a1\u4f53\u9a8c\uff0c\u6211\u4eec\u7684\u5b9e\u65f6\u8ba1\u7b97\u4e1a\u52a1\u4e3b\u8981\u6db5\u76d6\u4ee5\u4e0b\u51e0\u4e2a\u573a\u666f\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5b9e\u65f6\u6570\u636e ETL \u5904\u7406\u548c\u6570\u636e\u4f20\u8f93\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"C \u7aef\u7ef4\u5ea6\u6570\u636e\u7edf\u8ba1\uff0c\u5305\u62ec\u7528\u6237\u884c\u4e3a\u3001PV/UV \u5206\u6790\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"C \u7aef\u4e1a\u52a1\u6570\u636e\u4e0e\u5de5\u5546\u4fe1\u606f\u3001\u98ce\u9669\u4fe1\u606f\u3001\u4ea7\u6743\u3001\u80a1\u6743\u3001\u80a1\u4e1c\u3001\u6848\u4ef6\u7b49\u4fe1\u606f\u7684\u5b9e\u65f6\u5173\u8054\u5206\u6790\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u968f\u7740\u5929\u773c\u67e5\u4e1a\u52a1\u7684\u5feb\u901f\u53d1\u5c55\uff0c\u5b9e\u65f6\u4f5c\u4e1a\u76ee\u524d\u5df2\u589e\u81f3 800 +\uff0c\u672a\u6765\u5f88\u5feb\u4f1a\u4e0a\u5343\uff0c\u9762\u5bf9\u8fd9\u4e48\u5927\u4f53\u91cf\u7684\u4f5c\u4e1a\u3001\u5728\u5f00\u53d1\u548c\u7ba1\u7406\u4e0a\u90fd\u9047\u5230\u4e86\u6311\u6218\uff0c\u5927\u81f4\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4f5c\u4e1a\u8fd0\u7ef4\u56f0\u96be"}),"\uff1a\u4f5c\u4e1a\u8986\u76d6\u591a\u4e2a Flink \u7248\u672c\uff0c\u591a\u7248\u672c Flink \u4f5c\u4e1a\u7684\u8fd0\u884c\u548c\u5347\u7ea7\u56e0 API \u53d8\u52a8\u800c\u6210\u672c\u9ad8\u6602\uff0c\u4e14\u4f5c\u4e1a\u63d0\u4ea4\u548c\u53c2\u6570\u8c03\u4f18\u4f9d\u8d56\u4e8e\u590d\u6742\u811a\u672c\uff0c\u6781\u5927\u589e\u52a0\u4e86\u7ef4\u62a4\u96be\u5ea6\u548c\u6210\u672c\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4f5c\u4e1a\u5f00\u53d1\u4f4e\u6548"}),"\uff1a\u4ece\u672c\u5730 IDE \u8c03\u8bd5\u5230\u6d4b\u8bd5\u73af\u5883\u90e8\u7f72\uff0c\u9700\u7ecf\u8fc7\u7f16\u8bd1\u3001\u6587\u4ef6\u4f20\u8f93\u548c\u547d\u4ee4\u6267\u884c\u7b49\u7e41\u7410\u6b65\u9aa4\uff0c\u8017\u65f6\u4e14\u5f71\u54cd\u6548\u7387\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u7f3a\u4e4f\u81ea\u52a8\u91cd\u8bd5\u673a\u5236"}),"\uff1a\u5b9e\u65f6\u4e1a\u52a1\u7684\u591a\u8868\u5173\u8054\u64cd\u4f5c\u6613\u53d7\u7f51\u7edc\u548c IO \u6ce2\u52a8\u5f71\u54cd\uff0c\u5bfc\u81f4 Flink \u7a0b\u5e8f\u6545\u969c\uff0c\u9700\u624b\u52a8\u6216\u989d\u5916\u7a0b\u5e8f\u4ecb\u5165\u6062\u590d\uff0c\u589e\u52a0\u4e86\u5f00\u53d1\u548c\u7ef4\u62a4\u6210\u672c\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u7ef4\u62a4\u6210\u672c\u9ad8\u6602"}),"\uff1a\u7f3a\u5c11\u96c6\u4e2d\u5316\u7684\u65e5\u5fd7\u3001\u7248\u672c\u63a7\u5236\u548c\u914d\u7f6e\u7ba1\u7406\u5de5\u5177\uff0c\u968f\u7740\u4efb\u52a1\u91cf\u4e0a\u5347\uff0c\u7ef4\u62a4\u5927\u91cf JAR \u5305\u3001\u63d0\u4ea4\u811a\u672c\u548c Flink \u5ba2\u6237\u7aef\u914d\u7f6e\u53d8\u5f97\u65e5\u76ca\u590d\u6742\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(28849).A+"",width:"1069",height:"982"})}),"\n",(0,s.jsx)(e.h2,{id:"streampark-\u843d\u5730\u5b9e\u8df5",children:(0,s.jsx)(e.strong,{children:"StreamPark \u843d\u5730\u5b9e\u8df5"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\uff0c\u6211\u53f8\u51b3\u5b9a\u5f15\u5165 StreamPark\u3002\u6211\u4eec\u5728 StreamPark \u9879\u76ee\u521a\u5f00\u6e90\u7684\u65f6\u5019\u5c31\u5f00\u59cb\u5173\u6ce8\uff0c\u5f53\u65f6\u9879\u76ee\u540d\u8fd8\u662f StreamX\uff0c\u6b64\u540e\u4e5f\u5728\u4e00\u76f4\u5bc6\u5207\u5173\u6ce8\u7740\u9879\u76ee\u7684\u53d1\u5c55\uff0c\u89c1\u8bc1\u4e86\u5176\u4ece\u5f00\u6e90\u5230\u52a0\u5165 Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\u5b75\u5316\u7684\u8fc7\u7a0b\uff0c\u5176\u793e\u533a\u6d3b\u8dc3\u5ea6\u3001\u7528\u6237\u53e3\u7891\u3001\u53d1\u7248\u6b21\u6570\u7b49\u5404\u9879\u8868\u73b0\u90fd\u5f88\u4e0d\u9519\uff0c\u6709\u5927\u91cf\u4f01\u4e1a\u7684\u771f\u5b9e\u4f7f\u7528\u6848\u4f8b\uff0c\u8fd9\u589e\u5f3a\u4e86\u6211\u4eec\u5bf9 StreamPark \u4fe1\u5fc3\uff0c\u56e0\u6b64\u5f15\u5165 StreamPark \u662f\u81ea\u7136\u800c\u7136\u7684\u4e8b\u60c5\uff0c\u6211\u4eec\u5c24\u5176\u5173\u6ce8\u4ee5\u4e0b\u53ef\u4ee5\u89e3\u51b3\u6211\u4eec\u75db\u70b9\u7684\u80fd\u529b\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Git \u5f0f\u9879\u76ee\u7ba1\u7406"}),"\uff1a\u4e3a\u4f5c\u4e1a\u63d0\u4f9b\u4e86\u4fbf\u6377\u7684\u7248\u672c\u63a7\u5236\u548c\u90e8\u7f72\u6d41\u7a0b\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5f3a\u5927\u7684\u4f5c\u4e1a\u8fd0\u7ef4\u80fd\u529b"}),"\uff1a\u663e\u8457\u63d0\u5347\u4e86\u4f5c\u4e1a\u7684\u7ba1\u7406\u548c\u7ef4\u62a4\u6548\u7387\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u7cbe\u786e\u7684\u79d2\u7ea7\u544a\u8b66\u7cfb\u7edf"}),"\uff1a\u63d0\u4f9b\u4e86\u5b9e\u65f6\u76d1\u63a7\u548c\u5feb\u901f\u54cd\u5e94\u80fd\u529b\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4e00\u7ad9\u5f0f\u4efb\u52a1\u5f00\u53d1\u5e73\u53f0"}),"\uff1a\u4e3a\u5f00\u53d1\u3001\u6d4b\u8bd5\u548c\u90e8\u7f72\u63d0\u4f9b\u6709\u529b\u4fdd\u969c"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"1-git-\u5f0f\u9879\u76ee\u7ba1\u7406",children:(0,s.jsx)(e.strong,{children:"1. Git \u5f0f\u9879\u76ee\u7ba1\u7406"})}),"\n",(0,s.jsx)(e.p,{children:"\u5929\u773c\u67e5 90% \u4ee5\u4e0a\u90fd\u662f JAR \u4f5c\u4e1a\uff0c\u7ba1\u7406\u51e0\u767e\u4e2aJAR \u4f5c\u4e1a\u662f\u5f88\u5934\u75bc\u7684\u95ee\u9898\uff0c\u4e3a\u4e86\u65b9\u4fbf\u7ef4\u62a4\u548c\u7ba1\u7406\u5148\u524d\u6211\u4eec\u901a\u8fc7 \u201c\u5f00\u53d1\u4eba\u5458\u540d\u79f0-\u9879\u76ee\u540d\u79f0-\u6a21\u5757-\u73af\u5883\u201d \u8fdb\u884c\u547d\u540d JAR \u6587\u4ef6\u540d\uff0c\u8fd9\u6837\u5e26\u6765\u4e86\u53e6\u4e00\u4e2a\u95ee\u9898\uff0c\u6ca1\u529e\u6cd5\u76f4\u89c2\u533a\u5206\u8981\u7ef4\u62a4\u7684\u4f5c\u4e1a\u5728\u90a3\u4e2a\u6a21\u5757\uff0c\u5982\u679c\u975e owner \u7ef4\u62a4\u6b64\u4f5c\u4e1a\u5f97\u901a\u8fc7\u9879\u76ee\u6587\u6863\u548c\u4ee3\u7801\u6765\u67e5\u770b\u903b\u8f91\uff0c\u9700\u8981\u627e\u5230\u9879\u76ee\u4ee3\u7801\u4e0e\u5bf9\u5e94\u5206\u652f\u3001\u4f5c\u4e1a\u7684\u542f\u52a8\u811a\u672c\u7b49\uff0c\u8fd9\u6837\u5927\u5e45\u5ea6\u589e\u52a0\u5f00\u53d1\u4eba\u5458\u5de5\u4f5c\u91cf\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 StreamPark \u4e2d\u6211\u4eec\u60ca\u559c\u5730\u53d1\u73b0\u6709\u9879\u76ee\u7ba1\u7406\u529f\u80fd\uff0c\u7c7b\u4f3c\u4e8e Git \u96c6\u6210\uff0c\u53ef\u4ee5\u5f88\u597d\u7684\u89e3\u51b3\u4e86\u6211\u4eec\u7684\u75db\u70b9\uff0c\u6211\u4eec\u901a\u8fc7\u7b80\u5316\u7684\u547d\u540d\u89c4\u8303\uff0c\u5b9e\u73b0\u4e86\u9879\u76ee\u3001\u4eba\u5458\u3001\u5206\u652f\u548c\u73af\u5883\u7684\u9694\u79bb\u3002\u73b0\u5728\uff0c\u6211\u4eec\u80fd\u591f\u77ac\u95f4\u5b9a\u4f4d\u5230\u4efb\u610f\u4f5c\u4e1a\u7684\u4ee3\u7801\u548c\u6587\u6863\uff0c\u6781\u5927\u63d0\u9ad8\u4e86\u4f5c\u4e1a\u7684\u53ef\u7ef4\u62a4\u6027\u548c\u5f00\u53d1\u6548\u7387\uff0c\u663e\u8457\u63d0\u5347\u4e86\u6211\u4eec\u7684\u8fd0\u7ef4\u6548\u7387\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(6947).A+"",width:"1080",height:"525"})}),"\n",(0,s.jsx)(e.h3,{id:"2-\u79d2\u7ea7\u7cbe\u786e\u544a\u8b66\u548c\u81ea\u52a8\u8fd0\u7ef4",children:(0,s.jsx)(e.strong,{children:"2. \u79d2\u7ea7\u7cbe\u786e\u544a\u8b66\u548c\u81ea\u52a8\u8fd0\u7ef4"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0b\u9762\u662f\u6211\u4eec\u4e00\u4e2a Flink \u7ebf\u4e0a\u7684\u4efb\u52a1\uff0c\u5728\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u8bbf\u95ee\u7b2c\u4e09\u65b9\u7aef\u65f6\uff0c\u53d1\u751f Connection Time out \u7b49\u9519\u8bef\uff08\u5907\u6ce8\uff1a\u672c\u8eab Flink \u8bbe\u7f6e\u91cd\u542f\u7b56\u7565\u95f4\u9694\u91cd\u542f\u4e09\u6b21\uff0c\u4f46\u6700\u7ec8\u8fd8\u662f\u5931\u8d25\uff09"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(27020).A+"",width:"1080",height:"904"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u4e0a\u56fe\uff0c\u5f53\u6536\u5230\u4efb\u52a1\u544a\u8b66\u65f6\uff0c\u6211\u4eec\u5f00\u53d1\u540c\u5b66\u5728\u7fa4\u91cc\u56de\u590d 1 \u7684\u65f6\u5019\uff0c\u6211\u4eec\u53d1\u73b0",(0,s.jsx)(e.strong,{children:"\u4f5c\u4e1a\u5df2\u7ecf\u6210\u529f\u88ab StreamPark \u62c9\u8d77\uff0c\u53ea\u7528\u4e0d\u5230 15 \u79d2\u5c31\u5b8c\u6210\u4e86\u4f5c\u4e1a\u7684\u91cd\u65b0\u63d0\u4ea4\u548c\u8fd0\u884c"}),"\uff01"]}),"\n",(0,s.jsx)(e.h3,{id:"3-\u5e73\u53f0\u7528\u6237\u6743\u9650\u7ba1\u63a7",children:(0,s.jsx)(e.strong,{children:"3. \u5e73\u53f0\u7528\u6237\u6743\u9650\u7ba1\u63a7"})}),"\n",(0,s.jsx)(e.p,{children:"StreamPark \u63d0\u4f9b\u4e86\u4e00\u5957\u5b8c\u5584\u7684\u6743\u9650\u7ba1\u7406\u673a\u5236\uff0c\u4f7f\u5f97\u6211\u4eec\u53ef\u4ee5\u5728 StreamPark \u5e73\u53f0\u4e0a\u5bf9\u4f5c\u4e1a\u548c\u7528\u6237\u8fdb\u884c\u7cbe\u7ec6\u7684\u6743\u9650\u7ba1\u7406\uff0c\u6709\u6548\u907f\u514d\u4e86\u56e0\u7528\u6237\u6743\u9650\u8fc7\u5927\u800c\u53ef\u80fd\u53d1\u751f\u7684\u8bef\u64cd\u4f5c\uff0c\u51cf\u5c11\u4e86\u5bf9\u4f5c\u4e1a\u8fd0\u884c\u7a33\u5b9a\u6027\u548c\u73af\u5883\u914d\u7f6e\u51c6\u786e\u6027\u7684\u5f71\u54cd\uff0c\u5bf9\u4e8e\u4f01\u4e1a\u7ea7\u7528\u6237\u6765\u8bf4\uff0c\u8fd9\u6837\u7684\u7ba1\u7406\u673a\u5236\u662f\u975e\u5e38\u5fc5\u8981\u7684\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(70959).A+"",width:"1080",height:"525"})}),"\n",(0,s.jsx)(e.h3,{id:"4-flink-sql-\u5728\u7ebf\u5f00\u53d1",children:(0,s.jsx)(e.strong,{children:"4. Flink SQL \u5728\u7ebf\u5f00\u53d1"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5bf9\u4e8e\u8bb8\u591a\u5f00\u53d1\u573a\u666f\u4e2d\u9700\u8981\u63d0\u4ea4 Flink SQL \u4f5c\u4e1a\u7684\u60c5\u51b5\uff0c\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5b8c\u5168\u6446\u8131\u5728 IDEA \u4e2d\u7f16\u5199\u4ee3\u7801\u7684\u7e41\u7410\u6b65\u9aa4\u3002\u53ea\u9700\u4f7f\u7528 StreamPark \u5e73\u53f0\uff0c",(0,s.jsx)(e.strong,{children:"\u5c31\u80fd\u8f7b\u677e\u5b9e\u73b0  Flink SQL \u4f5c\u4e1a\u7684\u5f00\u53d1"}),"\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6848\u4f8b\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(59563).A+"",width:"1080",height:"651"})}),"\n",(0,s.jsx)(e.h3,{id:"5-\u5b8c\u5584\u7684\u4f5c\u4e1a\u7ba1\u7406\u80fd\u529b",children:(0,s.jsx)(e.strong,{children:"5. \u5b8c\u5584\u7684\u4f5c\u4e1a\u7ba1\u7406\u80fd\u529b"})}),"\n",(0,s.jsx)(e.p,{children:"StreamPark \u8fd8\u6709\u66f4\u52a0\u5b8c\u5584\u7684\u4f5c\u4e1a\u64cd\u4f5c\u8bb0\u5f55\uff0c\u5bf9\u4e8e\u4e00\u4e9b\u63d0\u4ea4\u65f6\u5f02\u5e38\u7684\u4f5c\u4e1a\uff0c\u73b0\u53ef\u5b8c\u5168\u901a\u8fc7\u5e73\u53f0\u5316\u67e5\u770b\u5931\u8d25\u65e5\u5fd7\uff0c\u5305\u62ec\u5386\u53f2\u65e5\u5fd7\u4fe1\u606f\u7b49\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(69421).A+"",width:"1080",height:"525"})}),"\n",(0,s.jsx)(e.p,{children:"\u5f53\u7136\uff0cStreamPark \u8fd8\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u66f4\u52a0\u5b8c\u5584\u4e14\u53cb\u597d\u7684\u4efb\u52a1\u7ba1\u7406\u754c\u9762\uff0c\u53ef\u4ee5\u76f4\u89c2\u5730\u770b\u5230\u4efb\u52a1\u7684\u8fd0\u884c\u60c5\u51b5\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(46820).A+"",width:"1080",height:"525"})}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u4f01\u4e1a\u5185\u90e8\u5b9e\u65f6\u9879\u76ee\u662f\u9ad8\u5ea6\u62bd\u8c61\u5316\u4ee3\u7801\u5f00\u53d1\u7684\u4f5c\u4e1a\uff0c\u6bcf\u6b21\u5f00\u53d1\u65b0\u4f5c\u4e1a\u53ea\u9700\u8981\u4fee\u6539\u4e00\u4e9b\u5916\u90e8\u4f20\u5165\u7684\u53c2\u6570\u5373\u53ef\uff0c\u901a\u8fc7 StreamPark \u590d\u5236\u4f5c\u4e1a\u529f\u80fd\u8ba9\u6211\u4eec\u544a\u522b\u4e86\u5f88\u591a\u91cd\u590d\u6027\u5de5\u4f5c\uff0c\u53ea\u9700\u8981\u5728\u5e73\u53f0\u4e0a\u590d\u5236\u5df2\u6709\u4f5c\u4e1a\uff0c\u7565\u5fae\u4fee\u6539\u7a0b\u5e8f\u8fd0\u884c\u53c2\u6570\u5c31\u53ef\u4ee5\u63d0\u4ea4\u4e00\u4e2a\u65b0\u7684\u4f5c\u4e1a\uff01"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(71153).A+"",width:"552",height:"520"})}),"\n",(0,s.jsx)(e.p,{children:"\u5f53\u7136\u8fd8\u6709\u66f4\u591a\uff0c\u8fd9\u91cc\u5c31\u4e0d\u4e00\u4e00\u5217\u4e3e\u4e86\uff0cStreamPark \u5728\u4f7f\u7528\u4e0a\u8db3\u591f\u7684\u7b80\u5355\u6613\u7528\uff0c\u5206\u949f\u5185\u5373\u53ef\u4e0a\u624b\u4f7f\u7528\uff0c\u529f\u80fd\u4e0a\u8db3\u591f\u7684\u4e13\u6ce8\u53ef\u9760\uff0c\u5f15\u5165 StreamPark \u4ee5\u6765\u89e3\u51b3\u4e86\u6211\u4eec\u7ba1\u7406 Flink \u4f5c\u4e1a\u9762\u4e34\u7684\u96be\u9898\uff0c\u5e26\u6765\u4e86\u5b9e\u5b9e\u5728\u5728\u7684\u65b9\u4fbf\uff0c\u663e\u8457\u5730\u63d0\u9ad8\u4e86\u4eba\u6548\uff0c\u7ed9\u4e3b\u521b\u56e2\u961f\u4e00\u4e2a\u5927\u5927\u7684\u8d5e\uff01"}),"\n",(0,s.jsx)(e.h2,{id:"\u9047\u5230\u7684\u95ee\u9898",children:(0,s.jsx)(e.strong,{children:"\u9047\u5230\u7684\u95ee\u9898"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728 StreamPark \u843d\u5730\u5b9e\u8df5\u4e2d\uff0c\u6211\u4eec\u4e5f\u9047\u5230\u4e86\u4e00\u4e9b\u95ee\u9898\uff0c\u8fd9\u91cc\u8bb0\u5f55\u4e0b\u6765\uff0c\u671f\u671b\u7ed9\u793e\u533a\u7684\u7528\u6237\u5e26\u6765\u4e00\u4e9b\u8f93\u5165\u548c\u53c2\u8003\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u534e\u4e3a\u4e91\u4e0e\u5f00\u6e90-hadoop-\u5b58\u5728\u517c\u5bb9\u95ee\u9898",children:(0,s.jsx)(e.strong,{children:"\u534e\u4e3a\u4e91\u4e0e\u5f00\u6e90 Hadoop \u5b58\u5728\u517c\u5bb9\u95ee\u9898"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u4eec\u7684\u4f5c\u4e1a\u90fd\u662f Flink on Yarn \u6a21\u5f0f\uff0c\u90e8\u7f72\u5728\u534e\u4e3a\u4e91\u3002\u5728\u4f7f\u7528 StreamPark \u90e8\u7f72\u4f5c\u4e1a\u7684\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u4f5c\u4e1a\u53ef\u4ee5\u6210\u529f\u90e8\u7f72\u5230\u534e\u4e3a Hadoop \u96c6\u7fa4\uff0c\u4f46\u662f\u83b7\u53d6\u4f5c\u4e1a\u72b6\u6001\u4fe1\u606f\u65f6\u8bf7\u6c42 Yarn ResourceManager \u88ab\u62d2\u7edd\uff0c\u6211\u4eec\u53ca\u65f6\u548c\u793e\u533a\u6c9f\u901a\uff0c\u5bfb\u6c42\u89e3\u51b3\u65b9\u6848\uff0c\u5e76\u4e14\u8bb0\u5f55\u4e86 issue:\n",(0,s.jsx)(e.a,{href:"https://github.com/apache/streampark/issues/3566",children:"https://github.com/apache/streampark/issues/3566"})]}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u540e\u5728\u793e\u533a PMC \u6210\u5458\u534e\u6770\u8001\u5e08\u548c\u534e\u4e3a\u4e91\u540c\u5b66\u7684\u534f\u52a9\u4e0b\uff0c\u6210\u529f\u89e3\u51b3\u4e86\u95ee\u9898\uff1a\u7531\u4e8e\u4e91\u4ea7\u54c1\u672c\u8eab\u5185\u90e8\u7684\u5b89\u5168\u8ba4\u8bc1\u673a\u5236\u5bfc\u81f4 StreamPark \u65e0\u6cd5\u6b63\u5e38\u8bbf\u95ee\u4e91 ResourceManager\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u89e3\u51b3\u65b9\u6848 (\u4ec5\u4f9b\u53c2\u8003 - \u6839\u636e\u4e0d\u540c\u73af\u5883\u6dfb\u52a0\u4e0d\u540c\u4f9d\u8d56)"}),"\n",(0,s.jsx)(e.p,{children:"\u5c06 STREAMPARK_HOME/lib \u76ee\u5f55\u4e2d HADOOP \u76f8\u5173\u4e24\u4e2a\u5305\u5220\u9664\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"hadoop-client-api-3.3.4.jar\nhadoop-client-runtime-3.3.4.jar\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u66ff\u6362\u4ee5\u4e0b\u534e\u4e3a\u4e91 HADOOP \u4f9d\u8d56:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"commons-configuration2-2.1.1.jar\ncommons-lang-2.6.0.wso2v1.jar\nhadoop-auth-3.1.1-hw-ei-xxx.jar\nhadoop-common-3.1.1-hw-ei-xxx.jar\nhadoop-hdfs-client-3.1.1-hw-ei-xxx.jar\nhadoop-plugins-8.1.2-xxx.jar\nhadoop-yarn-api-3.1.1-hw-ei-xxx.jar\nhadoop-yarn-client-3.1.1-hw-ei-xxx.jar\nhadoop-yarn-common-3.1.1-hw-ei-xxx.jar\nhttpcore5-h2-5.1.5.jar\njaeger-core-1.6.0.jar\nmysql-connector-java-8.0.28.jar\nopentracing-api-0.33.0.jar\nopentracing-noop-0.33.0.jar\nopentracing-util-0.33.0.jar\nprotobuf-java-2.5.0.jar\nre2j-1.7.jar\nstax2-api-4.2.1.jar\nwoodstox-core-5.0.3.jar\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u5176\u4ed6-bug",children:(0,s.jsx)(e.strong,{children:"\u5176\u4ed6 BUG"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6df1\u5165\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u53d1\u73b0\u4e86\u4e00\u4e9b\u95ee\u9898\u3002\u4e3a\u4e86\u66f4\u597d\u5730\u6539\u5584\u4e0e\u4f18\u5316 StreamPark \u7684\u529f\u80fd\uff0c\u6211\u4eec\u63d0\u51fa\u4e86\u4e00\u4e9b\u5177\u4f53\u7684\u5efa\u8bae\u548c\u89e3\u51b3\u65b9\u6848\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4f9d\u8d56\u51b2\u7a81"}),"\uff1a\u52a0\u8f7d Flink \u4f9d\u8d56\u65f6\u51fa\u73b0\u51b2\u7a81\u7684\u89e3\u51b3\uff08\u8be6\u89c1\uff1aPull Request #3568\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u670d\u52a1\u7a33\u5b9a\u6027"}),"\uff1a\u62e6\u622a\u7528\u6237\u7a0b\u5e8f JVM \u9000\u51fa\uff0c\u9632\u6b62 StreamPark \u5e73\u53f0\u56e0\u7528\u6237\u7a0b\u5e8f\u5f02\u5e38\u9000\u51fa\uff08\u8be6\u89c1\uff1aPull Request #3659\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8d44\u6e90\u4f18\u5316"}),"\uff1a\u4e3a\u51cf\u8f7b\u8d44\u6e90\u8d1f\u62c5\uff0c\u9650\u5236 StremaPark \u6784\u5efa\u9879\u76ee\u7684\u5e76\u53d1\u6570\uff0c\u901a\u8fc7\u914d\u7f6e\u53c2\u6570\u6765\u63a7\u5236\u9879\u76ee\u6700\u5927\u6784\u5efa\u6570\u91cf\uff08\u8be6\u89c1\uff1aPull Request #3696\uff09\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5e26\u6765\u7684\u6536\u76ca",children:(0,s.jsx)(e.strong,{children:"\u5e26\u6765\u7684\u6536\u76ca"})}),"\n",(0,s.jsxs)(e.p,{children:["Apache StreamPark \u4e3a\u6211\u4eec\u5e26\u6765\u4e86\u663e\u8457\u7684\u6536\u76ca\uff0c",(0,s.jsx)(e.strong,{children:"\u4e3b\u8981\u4f53\u73b0\u5728\u5176\u4e00\u7ad9\u5f0f\u670d\u52a1\u80fd\u529b\uff0c\u4f7f\u5f97\u4e1a\u52a1\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u5728\u4e00\u4e2a\u7edf\u4e00\u7684\u5e73\u53f0\u4e0a\u5b8c\u6210 Flink \u4f5c\u4e1a\u7684\u5f00\u53d1\u3001\u7f16\u8bd1\u3001\u63d0\u4ea4\u548c\u7ba1\u7406"}),"\u3002\u6781\u5927\u5730\u8282\u7701\u4e86\u6211\u4eec\u5728 Flink \u4f5c\u4e1a\u5f00\u53d1\u548c\u90e8\u7f72\u4e0a\u7684\u65f6\u95f4\uff0c\u663e\u8457\u5730\u63d0\u5347\u4e86\u5f00\u53d1\u6548\u7387\uff0c\u5e76\u5b9e\u73b0\u4e86\u4ece\u7528\u6237\u6743\u9650\u7ba1\u7406\u5230 Git \u90e8\u7f72\u3001\u4efb\u52a1\u63d0\u4ea4\u3001\u544a\u8b66\u3001\u81ea\u52a8\u6062\u590d\u7684\u5168\u6d41\u7a0b\u81ea\u52a8\u5316\uff0c\u6709\u6548\u89e3\u51b3\u4e86 Apache Flink\xae \u8fd0\u7ef4\u7684\u590d\u6742\u6027\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:r(72774).A+"",width:"1080",height:"989"})}),"\n",(0,s.jsx)(e.p,{children:"\u76ee\u524d\u5728\u5929\u773c\u67e5\u5e73\u53f0\uff0cStreamPark \u5e26\u6765\u7684\u5177\u4f53\u6210\u6548\u5305\u62ec\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5b9e\u65f6\u4f5c\u4e1a\u4e0a\u7ebf\u548c\u6d4b\u8bd5\u90e8\u7f72\u6d41\u7a0b\u7b80\u5316\u4e86 ",(0,s.jsx)(e.strong,{children:"70%"})," \u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5b9e\u65f6\u4f5c\u4e1a\u7684\u8fd0\u7ef4\u6210\u672c\u964d\u4f4e\u4e86 ",(0,s.jsx)(e.strong,{children:"80%"}),"\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u66f4\u4e13\u6ce8\u4e8e\u4ee3\u7801\u903b\u8f91 \u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u544a\u8b66\u65f6\u6548\u6027\u63d0\u9ad8\u4e86 ",(0,s.jsx)(e.strong,{children:"5\u500d"})," \u4ee5\u4e0a\uff0c\u4ece\u5206\u949f\u7ea7\u964d\u4f4e\u5230\u79d2\u7ea7\uff0c\u5b9e\u73b0\u4e86 ",(0,s.jsx)(e.strong,{children:"5\u79d2\u5185"})," \u611f\u77e5\u5e76\u5904\u7406\u4efb\u52a1\u5f02\u5e38\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8e\u4efb\u52a1\u5931\u8d25\uff0cStreamPark \u80fd\u591f\u81ea\u52a8\u6062\u590d\uff0c\u65e0\u9700\u4eba\u5de5\u5e72\u9884\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7 GitLab \u4e0e StreamPark \u7684\u96c6\u6210\uff0c\u7b80\u5316\u4e86\u7f16\u8bd1\u9879\u76ee\u548c\u4f5c\u4e1a\u63d0\u4ea4\u6d41\u7a0b\uff0c\u5927\u5e45\u964d\u4f4e\u4e86\u5f00\u53d1\u548c\u7ef4\u62a4\u6210\u672c\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u672a\u6765\u89c4\u5212",children:(0,s.jsx)(e.strong,{children:"\u672a\u6765\u89c4\u5212"})}),"\n",(0,s.jsx)(e.p,{children:"\u672a\u6765\u6211\u4eec\u8ba1\u5212\u5c06\u5185\u90e8\u81ea\u7814\u5b9e\u65f6\u8ba1\u7b97\u5e73\u53f0\u4e0a\u90e8\u7f72\u7684 300+ Flink \u4f5c\u4e1a\u548c\u5176\u4ed6\u65b9\u5f0f\u7ef4\u62a4\u7684 500+ Flink \u4f5c\u4e1a\u5168\u90e8\u8fc1\u79fb\u81f3 StreamPark \u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\u7ef4\u62a4\uff0c\u540e\u7eed\u9047\u5230\u4e00\u4e9b\u53ef\u4f18\u5316\u6216\u53ef\u589e\u5f3a\u529f\u80fd\u70b9\uff0c\u6211\u4eec\u4f1a\u53ca\u65f6\u4e0e\u793e\u533a\u5f00\u53d1\u4eba\u5458\u6c9f\u901a\u5e76\u56de\u9988\u8d21\u732e\u793e\u533a\uff0c\u8ba9 StreamPark \u53d8\u5f97\u66f4\u6613\u7528\u3001\u66f4\u597d\u7528\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u672c\u6587\u7684\u6700\u540e\uff0c\u6211\u4eec\u8877\u5fc3\u611f\u8c22 Apache Streampark \u793e\u533a\uff0c\u7279\u522b\u662f PMC \u6210\u5458\u534e\u6770\u8001\u5e08\uff0c\u5728\u6211\u4eec\u4f7f\u7528 StreamPark \u8fc7\u7a0b\u4e2d\u6301\u7eed\u5730\u8ddf\u8fdb\uff0c\u63d0\u4f9b\u4e86\u5b9d\u8d35\u7684\u6280\u672f\u652f\u6301\uff0c\u6211\u4eec\u6df1\u523b\u611f\u53d7\u5230 Apache StreamPark \u793e\u533a\u8ba4\u771f\u7684\u6001\u5ea6\u548c\u70ed\u60c5\u3002\u540c\u65f6\u4e5f\u975e\u5e38\u611f\u8c22\u534e\u4e3a\u4e91\u540c\u5b66\u5728\u4e91\u90e8\u7f72\u4e0a\u652f\u6301\u4e0e\u95ee\u9898\u6392\u67e5\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u671f\u5f85\u672a\u6765\u4e0e StreamPark \u793e\u533a\u7ee7\u7eed\u5408\u4f5c\uff0c\u5171\u540c\u63a8\u52a8\u5b9e\u65f6\u8ba1\u7b97\u6280\u672f\u7684\u53d1\u5c55\uff0c\u671f\u671b StreamPark \u5728\u672a\u6765\u505a\u5f97\u8d8a\u6765\u8d8a\u597d\uff0c\u65e9\u65e5\u6bd5\u4e1a\u6210\u4e3a\u65b0\u664b Apache \u9879\u76ee\u7684\u4ee3\u8868\uff01"})]})}function o(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},27020:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/alarm-609ca86190f86b8ad9a8c4d212705add.png"},28849:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/challenges-2c1babbcd18fc83fb47c4447fa413a95.png"},72774:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/earnings-40d9739c55527d669e4f90c739571049.png"},56190:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/enterprise-c8641726b9205b14e3e330d10e73bb68.png"},6947:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/git-90b5c4fc3c5c732e3e2757fc83ecb1d4.png"},69421:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/historical_logs-815b75ba2fe1a1d1d90c284999e35f3d.png"},69229:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/new_cover-4883e1aa52dc856ae160abd142daf867.png"},70959:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/permissions-5879a5913ed1c6f93481b0951b139fc3.png"},59563:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/sql_job-8e9bfa3d04866e5bf5e05103048f0e09.png"},71153:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/successful-5bef1e14d16c3e90b504d99e28e70d2e.png"},46820:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/task_management-d7b65ce685ba87d759bcae290b0cbbe1.png"},76113:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>l});var s=r(30758);const a={},i=s.createContext(a);function t(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:t(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);