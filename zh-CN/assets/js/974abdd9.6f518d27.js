"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5257],{83978:(e,a,s)=>{s.r(a),s.d(a,{default:()=>n});s(30758);var r=s(33689),t=s(1860),l=s(86070);function n(e){const a=e.data||[],s=(0,r.A)()&&0===location.pathname.indexOf("/zh-CN/")?"zh-CN":"en",n=t?.[s];return a.map((e=>function(e,a){let{dataSource:s,language:r}=a;const t="en"===r,n=new Intl.DateTimeFormat(r,t&&{month:"short",year:"numeric",day:"numeric"}).format(new Date(e.date));return(0,l.jsxs)("div",{className:"release-card",children:[(0,l.jsx)("div",{className:"release-card-date",children:n}),(0,l.jsxs)("div",{className:"release-card-container",children:[(0,l.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,l.jsxs)("span",{className:"release-card-header flex-1",children:["v",e.version]}),e.latest&&(0,l.jsx)("span",{className:"release-card-label-latest",children:"Latest"})]}),(0,l.jsx)("a",{href:e.releaseNotesUrl,children:s.table.releaseNotes}),(0,l.jsx)("br",{}),(0,l.jsxs)("span",{children:[(0,l.jsx)("a",{href:e.source.url,target:"_blank",children:s.table.source}),(0,l.jsx)("span",{className:"release-card-symbol",children:" ( "}),(0,l.jsx)("a",{href:e.source.signature,target:"_blank",children:"signature"}),(0,l.jsx)("span",{className:"release-card-symbol",children:" | "}),(0,l.jsx)("a",{href:e.source.sha512,target:"_blank",children:"sha512"}),(0,l.jsx)("span",{className:"release-card-symbol",children:" ) "})]}),(0,l.jsxs)("div",{className:"release-card-title",children:[(0,l.jsx)("i",{className:"fa fa-caret-down",style:{marginRight:"10px"}}),s.table.binary]}),(0,l.jsx)("ul",{children:e.binary.map((e=>function(e){return(0,l.jsxs)("li",{children:[(0,l.jsx)("a",{href:e.url,target:"_blank",children:e.name}),(0,l.jsxs)("div",{children:[(0,l.jsx)("a",{href:e.signature,target:"_blank",children:"signature"}),(0,l.jsx)("span",{className:"release-card-symbol",children:" | "}),(0,l.jsx)("a",{href:e.sha512,target:"_blank",children:"sha512"})]})]})}(e)))})]})]})}(e,{dataSource:n,language:s})))}},1860:e=>{e.exports=JSON.parse('{"zh-CN":{"download":"\u4e0b\u8f7d Apache StreamPark","downloadDesc1":"Apache StreamPark \u652f\u6301 Scala 2.11 \u548c 2.12 \u4e24\u4e2a\u7248\u672c\uff0c\u63d0\u4f9b\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\u6587\u4ef6\u540d\u89c4\u5219\u662f\uff1aapache-streampark_${scala.version}-${streampark.version}-bin.tar.gz\uff0c\u5982\uff1a","downloadDesc2":"\u8fd9\u91cc\u7684 2.11/2.12 \u4e3a StreamPark \u9002\u914d Scala \u7684\u7248\u672c\uff0c2.1.4 \u5219\u4e3a StreamPark \u7684\u7248\u672c\uff0c\u4e0b\u8f7d\u54ea\u4e2a\u6587\u4ef6\uff0c\u53d6\u51b3\u4e8e\u7528\u6237\u7684 Apache Flink/Spark \u7684 Scala \u7248\u672c\uff0c \u4e0b\u8f7d\u548c Apache Flink/Spark \u7684 Scala \u7248\u672c\u5339\u914d\u7684 StreamPark \u5b89\u88c5\u5305\u5373\u53ef\u3002","latestVersion":"\u6700\u65b0\u7248\u672c","archived":"\u6240\u6709\u5b58\u6863\u7684\u7248\u672c","instructions":"\u8bf4\u660e","notes":"\u6ce8\u610f","note":"\u4ee5\u524d\u7248\u672c\u7684 StreamPark \u53ef\u80fd\u4f1a\u53d7\u5230\u5b89\u5168\u95ee\u9898\u7684\u5f71\u54cd\uff0c\u8bf7\u8003\u8651\u4f7f\u7528\u6700\u65b0\u7248\u672c\u3002","table":{"version":"\u7248\u672c","date":"\u65e5\u671f","source":"\u6e90\u7801","binary":"\u4e8c\u8fdb\u5236\u5305","releaseNotes":"\u53d1\u5e03\u8bb0\u5f55"},"releaseNotes":"\u53d1\u5e03\u8bb0\u5f55","verifyReleases":"\u9a8c\u8bc1\u53d1\u7248","verifyDesc":"\u4f60\u9700\u8981\u4f7f\u7528 PGP \u6216 SHA \u7b7e\u540d\u9a8c\u8bc1\u4e0b\u8f7d\u6587\u4ef6\u7684\u5b8c\u6574\u6027\uff0c\u8bf7\u4e0b\u8f7d KEYS \u4ee5\u53ca .asc/.sha512 \u7b7e\u540d\u6587\u4ef6\u4ee5\u4f9b\u76f8\u5173\u9a8c\u8bc1\uff0c\u4e0b\u8f7d\u6587\u4ef6\u540e\uff0c\u4f60\u5e94\u8be5\u9a8c\u8bc1\u76f8\u5173\u7b7e\u540d\uff0c\u5e76\u786e\u4fdd\u5b83\u4e0e\u6211\u4eec\u7684\u7b7e\u540d\u4e00\u81f4\u3002","downloadText":"\u4e0b\u8f7d","verifyDesc1":"\u4ee5\u53ca\u5e26\u6709 .asc \u7b7e\u540d\u7684\u6587\u4ef6\uff0c\u7136\u540e\u6309\u7167\u4e0b\u9762\u7684\u6b65\u9aa4\u8fdb\u884c\u9a8c\u8bc1","verifyStep1":"\u5c06 KEYS \u6587\u4ef6\u5bfc\u5165\u5230\u4f60\u7684 GPG \u5bc6\u94a5\uff1a","verifyStep2":"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u9a8c\u8bc1\u53d1\u5e03\u6587\u4ef6\u7684\u7b7e\u540d\uff1a","verifyStep3":"\u4f60\u9700\u8981\u4e0b\u8f7d\u53d1\u5e03\u6587\u4ef6\u548c\u8be5\u6587\u4ef6\u7684 .sha512 \u6587\u4ef6\u3002\u7136\u540e\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u9a8c\u8bc1\uff1a"},"en":{"download":"Download Apache StreamPark","downloadDesc1":"The Apache StreamPark supports Scala 2.11 and 2.12. The dist file name rule is: apache-streampark_${scala.version}-${streampark.version}-bin.tar.gz\uff0ce.g:","downloadDesc2":"The 2.11/2.12 is a version of StreamPark adapted to Scala, the 2.1.5 is a version of StreamPark. Download which one depends on the user\'s Scala version of Apache Flink/Spark, users need to download the file of StreamPark that matches the Scala version of Apache Flink/Spark.","latestVersion":"The latest release","archived":"All archived releases","instructions":"Instructions","notes":"Notes","note":"Previous releases of StreamPark may be affected by security issues, please use the latest one.","table":{"version":"Version","date":"Date","source":"Source","binary":"Binary","releaseNotes":"Release notes"},"releaseNotes":"release notes","verifyReleases":"Verify the releases","verifyDesc":"It is essential that you verify the integrity of the downloaded files using the PGP or SHA signatures. Please download the KEYS as well as the .asc/.sha512 signature files for relevant distribution. After you download the file, you should calculate a checksum for your download, and make sure it is the same as ours.","downloadText":"Download","verifyDesc1":"and the release with its .asc signature file. And then","verifyStep1":"Import the KEYS file to your GPG keyring:","verifyStep2":"Verify the signature of the release artifact using the following command:","verifyStep3":"You will need to download both the release artifact and the .sha512 checksum file for that artifact. Then verify the checksum by:"}}')}}]);