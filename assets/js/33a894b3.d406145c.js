"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[2044],{60212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(86070),i=t(76113);const a={slug:"streampark-flink-on-k8s",title:"Apache StreamPark\u2122 Flink on Kubernetes practice",tags:["StreamPark","Production Practice","FlinkSQL","Kubernetes"],description:"Wuxin Technology was founded in January 2018. The current main business includes the research and development, design, manufacturing and sales of RELX brand products. With core technologies and capabilities covering the entire industry chain, RELX is committed to providing users with products that are both high quality and safe"},o=void 0,r={permalink:"/blog/streampark-flink-on-k8s",editUrl:"https://github.com/apache/streampark-website/edit/dev/blog/0-streampark-flink-on-k8s.md",source:"@site/blog/0-streampark-flink-on-k8s.md",title:"Apache StreamPark\u2122 Flink on Kubernetes practice",description:"Wuxin Technology was founded in January 2018. The current main business includes the research and development, design, manufacturing and sales of RELX brand products. With core technologies and capabilities covering the entire industry chain, RELX is committed to providing users with products that are both high quality and safe",date:"2025-02-10T17:10:02.000Z",tags:[{inline:!0,label:"StreamPark",permalink:"/blog/tags/stream-park"},{inline:!0,label:"Production Practice",permalink:"/blog/tags/production-practice"},{inline:!0,label:"FlinkSQL",permalink:"/blog/tags/flink-sql"},{inline:!0,label:"Kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:13.98,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"streampark-flink-on-k8s",title:"Apache StreamPark\u2122 Flink on Kubernetes practice",tags:["StreamPark","Production Practice","FlinkSQL","Kubernetes"],description:"Wuxin Technology was founded in January 2018. The current main business includes the research and development, design, manufacturing and sales of RELX brand products. With core technologies and capabilities covering the entire industry chain, RELX is committed to providing users with products that are both high quality and safe"},unlisted:!1,nextItem:{title:"Apache StreamPark\u2122 - Powerful Flink Development Framework",permalink:"/blog/flink-development-framework-streampark"}},l={authorsImageUrls:[]},c=[{value:"<strong>Why Choose Native Kubernetes</strong>",id:"why-choose-native-kubernetes",level:2},{value:"<strong>Deploy Flink on Kubernetes using Apache StreamPark\u2122</strong>",id:"deploy-flink-on-kubernetes-using-apache-streampark",level:2},{value:"<strong>Basic environment configuration</strong>",id:"basic-environment-configuration",level:3},{value:"<strong>Job development</strong>",id:"job-development",level:3},{value:"<strong>Job online</strong>",id:"job-online",level:3},{value:"<strong>Assignment submission</strong>",id:"assignment-submission",level:3},{value:"<strong>Job management</strong>",id:"job-management",level:3},{value:"<strong>Apache StreamPark\u2122\u2019s implementation in Wuxin Technology</strong>",id:"apache-streamparks-implementation-in-wuxin-technology",level:2},{value:"Problems encountered",id:"problems-encountered",level:2},{value:"<strong>FAQs are summarized below</strong>",id:"faqs-are-summarized-below",level:3},{value:"<strong>Best Practices</strong>",id:"best-practices",level:3},{value:"<strong>Future Expectations</strong>",id:"future-expectations",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Wuxin Technology was founded in January 2018. The current main business includes the research and development, design, manufacturing and sales of RELX brand products. With core technologies and capabilities covering the entire industry chain, RELX is committed to providing users with products that are both high quality and safe."}),"\n",(0,s.jsx)(n.h2,{id:"why-choose-native-kubernetes",children:(0,s.jsx)(n.strong,{children:"Why Choose Native Kubernetes"})}),"\n",(0,s.jsx)(n.p,{children:"Native Kubernetes offers the following advantages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Shorter Failover time"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Resource hosting can be implemented without the need to manually create TaskManager Pods, which can be automatically destroyed"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"With more convenient HA, in Native Kubernetes mode after Flink version 1.12, you can rely on the Leader election mechanism of native Kubernetes to complete JobManager's HA"}),"\n",(0,s.jsx)(n.p,{children:"The main difference between Native Kubernetes and Standalone Kubernetes lies in the way Flink interacts with Kubernetes and the resulting series of advantages. Standalone Kubernetes requires users to customize the Kubernetes resource description files of JobManager and TaskManager. When submitting a job, you need to use kubectl combined with the resource description file to start the Flink cluster. The Native Kubernetes mode Flink Client integrates a Kubernetes Client, which can directly communicate with the Kubernetes API Server to complete the creation of JobManager Deployment and ConfigMap. After JobManager Development is created, the Resource Manager module in it can directly communicate with the Kubernetes API Server to complete the creation and destruction of TaskManager pods and the elastic scaling of Taskmanager. Therefore, it is recommended to use Flink on Native Kubernetes mode to deploy Flink tasks in production environments."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(21323).A+"",width:"1080",height:"401"})}),"\n",(0,s.jsx)(n.p,{children:"When Flink On Kubernetes meets StreamPark"}),"\n",(0,s.jsx)(n.p,{children:"Flink on Native Kubernetes currently supports Application mode and Session mode. Compared with the two, Application mode deployment avoids the resource isolation problem and client resource consumption problem of Session mode. Therefore, it is recommended to use Application Mode to deploy Flink tasks in ** production environments. **Let\u2019s take a look at the method of using the original script and the process of using StreamPark to develop and deploy a Flink on Native Kubernetes job.\nDeploy Kubernetes using scripts"}),"\n",(0,s.jsx)(n.p,{children:"In the absence of a platform that supports Flink on Kubernetes task development and deployment, you need to use scripts to submit and stop tasks. This is also the default method provided by Flink. The specific steps are as follows:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Prepare the kubectl and Docker command running environment on the Flink client node, create the Kubernetes Namespace and Service Account used to deploy the Flink job, and perform RBAC"}),"\n",(0,s.jsx)(n.li,{children:"Write a Dockerfile file to package the Flink base image and the user\u2019s job Jar together"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dockerfile",children:"\nFROM flink:1.13.6-scala_2.11\nRUN mkdir -p $FLINK_HOME/usrlib\nCOPY my-flink-job.jar $FLINK_HOME/usrlib/my-flink-job.jar\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Use Flink client script to start Flink tasks"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n./bin/flink run-application \\\n    --target kubernetes-application \\\n    -Dkubernetes.namespace=flink-cluster \\\n    -Dkubernetes.jobmanager.service-account=default \\\n    -Dkubernetes.cluster-id=my-first-application-cluster \\\n    -Dkubernetes.container.image=relx_docker_url/streamx/relx_flink_1.13.6-scala_2.11:latest \\\n    -Dkubernetes.rest-service.exposed.type=NodePort \\\n    local:///opt/flink/usrlib/my-flink-job.jar\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Use the Kubectl command to obtain the WebUI access address and JobId of the Flink job."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl -n flink-cluster get svc\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Stop the job using Flink command"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./bin/flink cancel\n    --target kubernetes-application\n    -Dkubernetes.cluster-id=my-first-application-cluster\n    -Dkubernetes.namespace=flink-cluster <jobId>\n"})}),"\n",(0,s.jsx)(n.p,{children:"The above is the process of deploying a Flink task to Kubernetes using the most original script method provided by Flink. Only the most basic task submission is achieved. If it is to reach the production use level, there are still a series of problems that need to be solved, such as: the method is too Originally, it was unable to adapt to large batches of tasks, unable to record task checkpoints and real-time status tracking, difficult to operate and monitor tasks, had no alarm mechanism, and could not be managed in a centralized manner, etc."}),"\n",(0,s.jsx)(n.h2,{id:"deploy-flink-on-kubernetes-using-apache-streampark",children:(0,s.jsx)(n.strong,{children:"Deploy Flink on Kubernetes using Apache StreamPark\u2122"})}),"\n",(0,s.jsx)(n.p,{children:"There will be higher requirements for using Flink on Kubernetes in enterprise-level production environments. Generally, you will choose to build your own platform or purchase related commercial products. No matter which solution meets the product capabilities: large-scale task development and deployment, status tracking, operation and maintenance monitoring , failure alarms, unified task management, high availability, etc. are common demands."}),"\n",(0,s.jsx)(n.p,{children:"In response to the above issues, we investigated open source projects in the open source field that support the development and deployment of Flink on Kubernetes tasks. During the investigation, we also encountered other excellent open source projects. After comprehensively comparing multiple open source projects, we came to the conclusion: **StreamPark has great performance in either completness, user experience, or stability, so we finally chose StreamPark as our one-stop real-time computing platform. **"}),"\n",(0,s.jsx)(n.p,{children:"Let\u2019s take a look at how StreamPark supports Flink on Kubernetes:"}),"\n",(0,s.jsx)(n.h3,{id:"basic-environment-configuration",children:(0,s.jsx)(n.strong,{children:"Basic environment configuration"})}),"\n",(0,s.jsx)(n.p,{children:"Basic environment configuration includes Kubernetes and Docker repository information as well as Flink client information configuration. The simplest way for the Kubernetes basic environment is to directly copy the .kube/config of the Kubernetes node to the StreamPark node user directory, and then use the kubectl command to create a Flink-specific Kubernetes Namespace and perform RBAC configuration."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# Create k8s namespace used by Flink jobs\nkubectl create ns flink-cluster\n# Bind RBAC resources to the default user\nkubectl create clusterrolebinding flink-role-binding-default --clusterrole=edit --serviceaccount=flink-cluster:default\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Docker account information can be configured directly in the Docker Setting interface:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(47873).A+"",width:"1080",height:"586"})}),"\n",(0,s.jsx)(n.p,{children:"StreamPark can adapt to multi-version Flink job development. The Flink client can be configured directly on the StreamPark Setting interface:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(87475).A+"",width:"1080",height:"352"})}),"\n",(0,s.jsx)(n.h3,{id:"job-development",children:(0,s.jsx)(n.strong,{children:"Job development"})}),"\n",(0,s.jsx)(n.p,{children:"After StreamPark has configured the basic environment, it only takes three steps to develop and deploy a Flink job:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(20499).A+"",width:"1080",height:"271"})}),"\n",(0,s.jsxs)(n.p,{children:["StreamPark supports both Upload Jar and direct writing of Flink SQL jobs. ",(0,s.jsx)(n.strong,{children:"Flink SQL jobs only need to enter SQL and dependencies. This method greatly improves the development experience and avoids problems such as dependency conflicts."})," This article does not focus on this part\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"Here you need to select the deployment mode as kubernetes application, and configure the following parameters on the job development page: The parameters in the red box are the basic parameters of Flink on Kubernetes."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(56695).A+"",width:"1080",height:"1104"})}),"\n",(0,s.jsx)(n.p,{children:"The following parameters are parameters related to Flink jobs and resources. The choice of Resolve Order is related to the code loading mode. For jobs uploaded by the Upload Jar developed by the DataStream API, choose to use Child-first, and for Flink SQL jobs, choose to use Parent-first loading."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(21381).A+"",width:"1080",height:"1133"})}),"\n",(0,s.jsx)(n.p,{children:"Finally, there are the following two heavyweight parameters. For Native Kubernetes, k8s-pod-template generally only requires pod-template configuration. Dynamic Option is a supplement to the pod-template parameters. For some personalized configurations, you can Configured in Dynamic Option. For more Dynamic Option, please directly refer to the Flink official website."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(3162).A+"",width:"1080",height:"1104"})}),"\n",(0,s.jsx)(n.h3,{id:"job-online",children:(0,s.jsx)(n.strong,{children:"Job online"})}),"\n",(0,s.jsx)(n.p,{children:"After the job development is completed, the job comes online. In this step, StreamPark has done a lot of work, as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prepare environment"}),"\n",(0,s.jsx)(n.li,{children:"Dependency download in job"}),"\n",(0,s.jsx)(n.li,{children:"Build job (JAR package)"}),"\n",(0,s.jsx)(n.li,{children:"Build image"}),"\n",(0,s.jsx)(n.li,{children:"Push the image to the remote repository"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"For users: Just click the cloud-shaped online button in the task list"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(10165).A+"",width:"1080",height:"573"})}),"\n",(0,s.jsxs)(n.p,{children:["We can see a series of work done by StreamPark when building and pushing the image: ",(0,s.jsx)(n.strong,{children:"Read the configuration, build the image, and push the image to the remote repository..."})," I want to give StreamPark a big thumbs up!"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(58165).A+"",width:"948",height:"1866"})}),"\n",(0,s.jsx)(n.h3,{id:"assignment-submission",children:(0,s.jsx)(n.strong,{children:"Assignment submission"})}),"\n",(0,s.jsx)(n.p,{children:"Finally, you only need to click the start Application button in Operation to start a Flink on Kubernetes job. After the job is successfully started, click on the job name to jump to the Jobmanager WebUI page. The whole process is very simple and smooth."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(12891).A+"",width:"1080",height:"698"})}),"\n",(0,s.jsx)(n.p,{children:"The entire process only requires the above three steps to complete the development and deployment of a Flink on Kubernetes job on StreamPark. StreamPark's support for Flink on Kubernetes goes far beyond simply submitting a task."}),"\n",(0,s.jsx)(n.h3,{id:"job-management",children:(0,s.jsx)(n.strong,{children:"Job management"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"After the job is submitted, StreamPark can obtain the latest checkpoint address of the task, the running status of the task, and the real-time resource consumption information of the cluster in real time. It can very conveniently start and stop the running task with one click, and supports recording the savepoint location when stopping the job. , as well as functions such as restoring the state from savepoint when restarting, thus ensuring the data consistency of the production environment and truly possessing the one-stop development, deployment, operation and maintenance monitoring capabilities of Flink on Kubernetes."})}),"\n",(0,s.jsx)(n.p,{children:"Next, let\u2019s take a look at how StreamPark supports this capability:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Record checkpoint in real time"})}),"\n",(0,s.jsx)(n.p,{children:"After the job is submitted, sometimes it is necessary to change the job logic but to ensure data consistency, then the platform needs to have the ability to record the location of each checkpoint in real time, as well as the ability to record the last savepoint location when stopped. StreamPark is on Flink on Kubernetes This function is implemented very well. By default, checkpoint information will be obtained and recorded in the corresponding table every 5 seconds, and according to the policy of retaining the number of checkpoints in Flink, only state.checkpoints.num-retained will be retained, and the excess will be deleted. There is an option to check the savepoint when the task is stopped. If the savepoint option is checked, the savepoint operation will be performed when the task is stopped, and the specific location of the savepoint will also be recorded in the table."}),"\n",(0,s.jsx)(n.p,{children:"The root path of the default savepoint only needs to be configured in the Flink Home flink-conf.yaml file to automatically identify it. In addition to the default address, the root path of the savepoint can also be customized and specified when stopping."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(32205).A+"",width:"1080",height:"446"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(8506).A+"",width:"1080",height:"479"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Track running status in real time"})}),"\n",(0,s.jsx)(n.p,{children:"For challenges in the production environment, a very important point is whether monitoring is in place, especially for Flink on Kubernetes. This is very important and is the most basic capability. StreamPark can monitor the running status of Flink on Kubernetes jobs in real time and display it to users on the platform. Tasks can be easily retrieved based on various running statuses on the page."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(61852).A+"",width:"1080",height:"617"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Complete alarm mechanism"})}),"\n",(0,s.jsx)(n.p,{children:"In addition, StreamPark also has complete alarm functions: supporting email, DingTalk, WeChat and SMS, etc. This is also an important reason why the company chose StreamPark as the one-stop platform for Flink on Kubernetes after initial research."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(61193).A+"",width:"1080",height:"393"})}),"\n",(0,s.jsx)(n.p,{children:"From the above, we can see that StreamPark has the capabilities to support the development and deployment process of Flink on Kubernetes, including: ** job development capabilities, deployment capabilities, monitoring capabilities, operation and maintenance capabilities, exception handling capabilities, etc. StreamPark provides a relatively complete set of s solution. And it already has some CICD/DevOps capabilities, and the overall completion level continues to improve. It is a product that supports the full link of Flink on Kubernetes one-stop development, deployment, operation and maintenance work in the entire open source field. StreamPark is worthy of praise. **"}),"\n",(0,s.jsx)(n.h2,{id:"apache-streamparks-implementation-in-wuxin-technology",children:(0,s.jsx)(n.strong,{children:"Apache StreamPark\u2122\u2019s implementation in Wuxin Technology"})}),"\n",(0,s.jsx)(n.p,{children:"StreamPark was launched late in Wuxin Technology. It is currently mainly used for the development and deployment of real-time data integration jobs and real-time indicator calculation jobs. There are Jar tasks and Flink SQL tasks, all deployed using Native Kubernetes; data sources include CDC, Kafka, etc., and Sink end There are Maxcompute, kafka, Hive, etc. The following is a screenshot of the company's development environment StreamPark platform:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(70676).A+"",width:"1080",height:"706"})}),"\n",(0,s.jsx)(n.h2,{id:"problems-encountered",children:"Problems encountered"}),"\n",(0,s.jsxs)(n.p,{children:["Any new technology has a process of exploration and fall into pitfalls. The experience of failure is precious. Here are some pitfalls and experiences that StreamPark has stepped into during the implementation of fog core technology. ",(0,s.jsx)(n.strong,{children:"The content of this section is not only about StreamPark. I believe it will bring some reference to all friends who use Flink on Kubernetes"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"faqs-are-summarized-below",children:(0,s.jsx)(n.strong,{children:"FAQs are summarized below"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Kubernetes pod failed to pull the image"})}),"\n",(0,s.jsx)(n.p,{children:"The main problem is that Kubernetes pod-template lacks docker\u2019s imagePullSecrets"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Scala version inconsistent"})}),"\n",(0,s.jsx)(n.p,{children:"Since StreamPark deployment requires a Scala environment, and Flink SQL operation requires the Flink SQL Client provided by StreamPark, it is necessary to ensure that the Scala version of the Flink job is consistent with the Scala version of StreamPark."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Be aware of class conflicts"})}),"\n",(0,s.jsx)(n.p,{children:"When developing Flink SQL jobs, you need to pay attention to whether there are any class conflicts between the Flink image and the Flink connector and UDF. The best way to avoid class conflicts is to make the Flink image and the commonly used Flink connector and user UDF into a usable basic image. After that, other Flink SQL jobs can be reused directly."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"How to store checkpoint without Hadoop environment?"})}),"\n",(0,s.jsx)(n.p,{children:"HDFS, Alibaba Cloud OSS/AWS S3 can both perform checkpoint and savepoint storage. The Flink basic image already has support for OSS and S3. If you do not have HDFS, you can use Alibaba Cloud OSS or S3 to store status and checkpoint and savepoint data. You only need to use Flink Simply configure it in the dynamic parameters."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n-Dstate.backend=rocksdb\n-Dcontainerized.master.env.ENABLE_BUILT_IN_PLUGINS=flink-oss-fs-hadoop-1.13.6.jar\n-Dcontainerized.taskmanager.env.ENABLE_BUILT_IN_PLUGINS=flink-oss-fs-hadoop-1.13.6.jar\n-Dfs.oss.endpoint=xxyy.aliyuncs.com\n-Dfs.oss.accessKeyId=xxxxxxxxxx\n-Dfs.oss.accessKeySecret=xxxxxxxxxx\n-Dstate.checkpoints.dir=oss://realtime-xxx/streamx/dev/checkpoints/\n-Dstate.savepoints.dir=oss://realtime-xxx/streamx/dev/savepoints/\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"The changed code did not take effect after it was republished"})}),"\n",(0,s.jsx)(n.p,{children:"This issue is related to the Kubernetes pod image pull policy. It is recommended to set the Pod image pull policy to Always:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\u200d-Dkubernetes.container.image.pull-policy=Always\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Each restart of the task will result in one more Job instance"})}),"\n",(0,s.jsx)(n.p,{children:"Under the premise that kubernetes-based HA is configured, when you need to stop the Flink task, you need to use cancel of StreamPark. Do not delete the Deployment of the Flink task directly through the kubernetes cluster. Because Flink's shutdown has its own shutdown process, when deleting a pod, the corresponding configuration files in the Configmap will also be deleted. Direct deletion of the pod will result in the remnants of the Configmap. When a task with the same name is restarted, two identical jobs will appear because at startup, the task will load the remaining configuration files and try to restore the closed task."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"How to implement kubernetes pod domain name access"})}),"\n",(0,s.jsx)(n.p,{children:"Domain name configuration only needs to be configured in pod-template according to Kubernetes resources. I can share with you a pod-template.yaml template that I summarized based on the above issues:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'\napiVersion: v1\nkind: Pod\nmetadata:\n  name: pod-template\nspec:\n  serviceAccount: default\n  containers:\n  - name: flink-main-container\n    image:\n  imagePullSecrets:\n  - name: regsecret\n  hostAliases:\n    - ip: "192.168.0.1"\n      hostnames:\n      - "node1"\n    - ip: "192.168.0.2"\n      hostnames:\n      - "node2"\n    - ip: "192.168.0.3"\n      hostnames:\n      - "node3"\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"best-practices",children:(0,s.jsx)(n.strong,{children:"Best Practices"})}),"\n",(0,s.jsx)(n.p,{children:"Many of RELX's big data components are based on Alibaba Cloud, such as Maxcompute and Alibaba Cloud Redis. At the same time, our Flink SQL jobs need to use some UDFs. At first, we adopted the method of using Flink Base image + maven dependency + upload udf jar, but in practice we encountered some problems such as version conflicts and class conflicts. At the same time, if it is a large-volume job, the development efficiency of this method is relatively low. Finally, we packaged the commonly used Flink connectors, udf and Flink base image at the company level into a company-level base image. New Flink SQL jobs can directly write Flink SQL after using this base image, which greatly improves development efficiency."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Let\u2019s share a simple step to create a basic image\uff1a"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Prepare the required JAR"})}),"\n",(0,s.jsx)(n.p,{children:"Place the commonly used Flink Connector Jar and the user Udf Jar in the same folder lib. The following are some commonly used connector packages in Flink 1.13.6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jar",children:"bigdata-udxf-1.0.0-shaded.jar\nflink-connector-jdbc_2.11-1.13.6.jar\nflink-sql-connector-kafka_2.11-1.13.6.jar\nflink-sql-connector-mysql-cdc-2.0.2.jar\nhudi-flink-bundle_2.11-0.10.0.jar\nververica-connector-odps-1.13-vvr-4.0.7.jar\nververica-connector-redis-1.13-vvr-4.0.7.jar\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Prepare Dockerfile"})}),"\n",(0,s.jsx)(n.p,{children:"Create a Dockerfile file and place the Dockerfile file in the same folder as the above folder"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"FROM flink:1.13.6-scala_2.11COPY lib $FLINK_HOME/lib/\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Create a basic image and push it to a private repository"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker login --username=xxxdocker \\\nbuild -t udf_flink_1.13.6-scala_2.11:latest \\\n.docker tag udf_flink_1.13.6-scala_2.11:latest \\\nk8s-harbor.xxx.com/streamx/udf_flink_1.13.6-scala_2.11:latestdocker \\\npush k8s-harbor.xxx.com/streamx/udf_flink_1.13.6-scala_2.11:latest\n"})}),"\n",(0,s.jsx)(n.h2,{id:"future-expectations",children:(0,s.jsx)(n.strong,{children:"Future Expectations"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"StreamPark supports Flink job metric monitoring"})}),"\n",(0,s.jsx)(n.p,{children:"It would be great if StreamPark could connect to Flink Metric data and display Flink\u2019s real-time consumption data at every moment on the StreamPark platform."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"StreamPark supports Flink job log persistence"})}),"\n",(0,s.jsx)(n.p,{children:"For Flink deployed to YARN, if the Flink program hangs, we can go to YARN to view the historical logs. However, for Kubernetes, if the program hangs, the Kubernetes pod will disappear and there will be no way to check the logs. Therefore, users need to use tools on Kubernetes for log persistence. It would be better if StreamPark supports the Kubernetes log persistence interface."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Improvement of the problem of too large image"})}),"\n",(0,s.jsx)(n.p,{children:"StreamPark's current image support for Flink on Kubernetes jobs is to combine the basic image and user code into a Fat image and push it to the Docker repository. The problem with this method is that it takes a long time when the image is too large. It is hoped that the basic image can be restored in the future. There is no need to hit the business code together every time, which can greatly improve development efficiency and save costs."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},61193:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/alarm-c2104c1839a1b4bb668d48f092f25faa.png"},8506:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/checkpoint-acf7379b24a3bac6695a517b425f466b.png"},20499:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/development_process-476918cfd29159983fe26b36ef487895.png"},47873:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/docker_setting-80acf43cf64fd390e4d50da8830671c0.png"},21381:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/flink_parameters-ff7790882a753bd88fbf5db9b775a0e3.png"},87475:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/flinkversion_setting-b170a43882590683ea0c7f109f909396.png"},12891:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/homework_submit-1f05dacf0fedfd1423f89ca2dec28437.png"},56695:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/kubernetes_base_parameters-1a28fec8d9d3dc57744324db4ef58551.png"},21323:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/nativekubernetes_architecture-ad376f8ae79ab66d90d95742e8335d53.png"},10165:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/operation-067a84b9b5b1491206780076f98e6f8d.png"},3162:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/pod_template-722285f448ec8adc0fa939d0baea2d10.png"},61852:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/run_status-5a663d9169c0bce8f4cfb993db77ae59.png"},32205:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/savepoint-b0288f5293875d156f20dbe768384076.png"},70676:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/screenshot-2906914515b810aadb10db951d4f02bd.png"},58165:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/step_details-301b14f2dbfa9c41f4c0e75a9086f0a4.png"},76113:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(30758);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);