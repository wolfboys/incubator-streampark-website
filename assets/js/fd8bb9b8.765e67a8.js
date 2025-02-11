"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[9730],{45492:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=t(86070),r=t(76113),o=t(33764),i=t(65173);const s={id:"hbase",title:"Apache HBase Connector",sidebar_position:6},c=void 0,l={id:"framework/connector/hbase",title:"Apache HBase Connector",description:"Apache HBase is a highly reliable, high-performance, column-oriented, and scalable distributed storage system. Using HBase technology, large-scale structured storage clusters can be built on cheap PC Servers. Unlike general relational databases, Apache HBase is a database suitable for unstructured data storage because HBase storage is based on a column rather than a row-based schema.",source:"@site/docs/framework/connector/6.hbase.md",sourceDirName:"framework/connector",slug:"/framework/connector/hbase",permalink:"/docs/framework/connector/hbase",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/streampark-website/edit/dev/docs/framework/connector/6.hbase.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"hbase",title:"Apache HBase Connector",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch Connector",permalink:"/docs/framework/connector/es"},next:{title:"HTTP Connector",permalink:"/docs/framework/connector/http"}},u={},p=[{value:"Dependency of Apache HBase writing",id:"dependency-of-apache-hbase-writing",level:2},{value:"Regular way to write and read Apache HBase",id:"regular-way-to-write-and-read-apache-hbase",level:2},{value:"1.Create database and table",id:"1create-database-and-table",level:3},{value:"2.Write demo and Read demo",id:"2write-demo-and-read-demo",level:3},{value:"write and read Apache HBase with Apache StreamPark\u2122",id:"write-and-read-apache-hbase-with-apache-streampark",level:2},{value:"1. Configure policies and connection information",id:"1-configure-policies-and-connection-information",level:3},{value:"2. Read and write Apache HBase",id:"2-read-and-write-apache-hbase",level:3},{value:"Other configuration",id:"other-configuration",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://hbase.apache.org/book.html",children:"Apache HBase"})," is a highly reliable, high-performance, column-oriented, and scalable distributed storage system. Using HBase technology, large-scale structured storage clusters can be built on cheap PC Servers. Unlike general relational databases, Apache HBase is a database suitable for unstructured data storage because HBase storage is based on a column rather than a row-based schema."]}),"\n",(0,a.jsxs)(n.p,{children:["Apache Flink\xae does not officially provide a connector for HBase DataStream. Apache StreamPark encapsulates HBaseSource and HBaseSink based on ",(0,a.jsx)(n.code,{children:"HBase-client"}),". It supports automatic connection creation based on configuration and simplifies development. StreamPark reading Apache HBase can record the latest status of the read data when the checkpoint is enabled,\nand the offset corresponding to the source can be restored through the data itself. Implement source-side AT_LEAST_ONCE."]}),"\n",(0,a.jsx)(n.p,{children:"HBaseSource implements Flink Async I/O to improve streaming throughput. The sink side supports AT_LEAST_ONCE by default.\nEXACTLY_ONCE is supported when checkpointing is enabled."}),"\n",(0,a.jsx)(n.admonition,{title:"hint",type:"tip",children:(0,a.jsx)(n.p,{children:"StreamPark reading Apache HBase can record the latest state of the read data when checkpoint is enabled.\nWhether the previous state can be restored after the job is resumed depends entirely on whether the data itself has an offset identifier, which needs to be manually specified in the code. The recovery logic needs to be specified in the func parameter of the getDataStream method of HBaseSource."})}),"\n",(0,a.jsx)(n.h2,{id:"dependency-of-apache-hbase-writing",children:"Dependency of Apache HBase writing"}),"\n",(0,a.jsx)(n.p,{children:"Apache HBase Maven Dependency:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>org.apache.hbase</groupId>\n  <artifactId>hbase-client</artifactId>\n  <version>${hbase.version}</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.hbase</groupId>\n  <artifactId>hbase-common</artifactId>\n  <version>${hbase.version}</version>\n</dependency>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"regular-way-to-write-and-read-apache-hbase",children:"Regular way to write and read Apache HBase"}),"\n",(0,a.jsx)(n.h3,{id:"1create-database-and-table",children:"1.Create database and table"}),"\n",(0,a.jsxs)(n.p,{children:["create 'Student', ",e=>3,", ",e=>!0]}),"\n",(0,a.jsx)(n.h3,{id:"2write-demo-and-read-demo",children:"2.Write demo and Read demo"}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(i.A,{value:"read data",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'\nimport org.apache.flink.configuration.Configuration;\nimport org.apache.flink.streaming.api.datastream.DataStream;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.streaming.api.functions.source.RichSourceFunction;\nimport org.apache.hadoop.hbase.Cell;\nimport org.apache.hadoop.hbase.HBaseConfiguration;\nimport org.apache.hadoop.hbase.TableName;\nimport org.apache.hadoop.hbase.client.*;\nimport org.apache.hadoop.hbase.util.Bytes;\n\nimport java.util.List;\n\n\npublic class FlinkHBaseReader {\n    public static void main(String[] args) throws Exception {\n        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n        // \u6dfb\u52a0\u6570\u636e\u6e90\n        DataStream<String> stream = env.addSource(new HBaseReader());\n        stream.print();\n        env.execute("FlinkHBaseDemo");\n    }\n}\n\n\nclass HBaseReader extends RichSourceFunction<String> {\n    private Connection connection = null;\n    private ResultScanner rs = null;\n    private Table table = null;\n\n    @Override\n    public void open(Configuration parameters) throws Exception {\n        org.apache.hadoop.conf.Configuration hconf = HBaseConfiguration.create();\n        hconf.set("hbase.zookeeper.quorum", "localhost:2181");\n        hconf.set("zookeeper.property.clientPort", "/hbase");\n        connection = ConnectionFactory.createConnection(hconf);\n    }\n\n    @Override\n    public void run(SourceContext<String> sourceContext) throws Exception {\n        table = connection.getTable(TableName.valueOf("Student"));\n        Scan scan = new Scan();\n        scan.addFamily(Bytes.toBytes("Stulnfo"));\n        rs = table.getScanner(scan);\n        for (Result result : rs) {\n            StringBuilder sb = new StringBuilder();\n            List<Cell> cells = result.listCells();\n            for (Cell cell : cells) {\n                String value = Bytes.toString(cell.getValueArray(), cell.getValueOffset(), cell.getValueLength());\n                sb.append(value).append("-");\n            }\n            String value = sb.replace(sb.length() - 1, sb.length(), "").toString();\n            sourceContext.collect(value);\n        }\n    }\n\n    @Override\n    public void cancel() {\n\n    }\n\n    @Override\n    public void close() throws Exception {\n        if (rs != null) {\n            rs.close();\n        }\n        if (table != null) {\n            table.close();\n        }\n        if (connection != null) {\n            connection.close();\n        }\n    }\n}\n'})})}),(0,a.jsx)(i.A,{value:"data input",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import com.zhisheng.common.utils.ExecutionEnvUtil;\nimport lombok.extern.slf4j.Slf4j;\nimport org.apache.flink.api.java.utils.ParameterTool;\nimport org.apache.flink.configuration.Configuration;\nimport org.apache.flink.streaming.api.datastream.DataStream;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.streaming.api.functions.sink.RichSinkFunction;\nimport org.apache.flink.streaming.api.functions.source.SourceFunction;\nimport org.apache.hadoop.hbase.HBaseConfiguration;\nimport org.apache.hadoop.hbase.TableName;\nimport org.apache.hadoop.hbase.client.*;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\nimport java.io.IOException;\n\n/**\n * Desc: Read stream data, then write to Apache HBase\n */\n@Slf4j\npublic class HBaseStreamWriteMain {\n\n    public static void main(String[] args) throws Exception {\n        final ParameterTool parameterTool = ExecutionEnvUtil.createParameterTool(args);\n        StreamExecutionEnvironment env = ExecutionEnvUtil.prepare(parameterTool);\n        DataStream<String> dataStream = env.addSource(new SourceFunction<String>() {\n            private static final long serialVersionUID = 1L;\n\n            private volatile boolean isRunning = true;\n\n            @Override\n            public void run(SourceContext<String> out) throws Exception {\n                while (isRunning) {\n                    out.collect("name" + Math.floor(Math.random() * 100));\n                }\n            }\n\n            @Override\n            public void cancel() {\n                isRunning = false;\n            }\n        });\n        dataStream.addSink(new HBaseWriter());\n        env.execute("Flink HBase connector sink");\n    }\n\n\n}\n\n/**\nWrite to Apache HBase\n  Inherit RichSinkFunction to override the parent class method\n  <p>\n  When writing to Apache HBase, 500 items are flushed once, inserted in batches, using writeBufferSize\n */\nclass HBaseWriter extends RichSinkFunction<String> {\n    private static final Logger logger = LoggerFactory.getLogger(HBaseWriter.class);\n\n    private static org.apache.hadoop.conf.Configuration configuration;\n    private static Connection connection = null;\n    private static BufferedMutator mutator;\n    private static int count = 0;\n\n    @Override\n    public void open(Configuration parameters) throws Exception {\n        configuration = HBaseConfiguration.create();\n        configuration.set("hbase.zookeeper.quorum", "localhost:21981");\n        configuration.set("zookeeper.property.clientPort", "/hbase");\n        try {\n            connection = ConnectionFactory.createConnection(configuration);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n        BufferedMutatorParams params = new BufferedMutatorParams(TableName.valueOf("Student"));\n        params.writeBufferSize(2 * 1024 * 1024);\n        mutator = connection.getBufferedMutator(params);\n    }\n\n    @Override\n    public void close() throws IOException {\n        if (mutator != null) {\n            mutator.close();\n        }\n        if (connection != null) {\n            connection.close();\n        }\n    }\n\n    @Override\n    public void invoke(String values, Context context) throws Exception {\n        //Date 1970-01-06 11:45:55  to 445555000\n        long unixTimestamp = 0;\n        String RowKey = String.valueOf(unixTimestamp);\n        Put put = new Put(RowKey.getBytes());\n        put.addColumn("Stulnfo".getBytes(), "Name".getBytes(), values.getBytes());\n        mutator.mutate(put);\n        //\u6bcf\u6ee1500\u6761\u5237\u65b0\u4e00\u4e0b\u6570\u636e\n        if (count >= 500) {\n            mutator.flush();\n            count = 0;\n        }\n        count = count + 1;\n    }\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Reading and writing Apache HBase in this way is cumbersome and inconvenient. ",(0,a.jsx)(n.code,{children:"StreamPark"})," follows the concept of convention over configuration and automatic configuration.\nUsers only need to configure Apache HBase connection parameters and Flink operating parameters. StreamPark will automatically assemble source and sink,\nwhich greatly simplifies development logic and improves development efficiency and maintainability."]}),"\n",(0,a.jsx)(n.h2,{id:"write-and-read-apache-hbase-with-apache-streampark",children:"write and read Apache HBase with Apache StreamPark\u2122"}),"\n",(0,a.jsx)(n.h3,{id:"1-configure-policies-and-connection-information",children:"1. Configure policies and connection information"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# apache hbase\nhbase:\n  zookeeper.quorum: test1,test2,test6\n  zookeeper.property.clientPort: 2181\n  zookeeper.session.timeout: 1200000\n  rpc.timeout: 5000\n  client.pause: 20\n\n"})}),"\n",(0,a.jsx)(n.h3,{id:"2-read-and-write-apache-hbase",children:"2. Read and write Apache HBase"}),"\n",(0,a.jsx)(n.p,{children:"Writing to Apache HBase with StreamPark is very simple, the code is as follows:"}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(i.A,{value:"read Apache HBase",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'\nimport org.apache.streampark.common.util.ConfigUtils\nimport org.apache.streampark.flink.core.java.wrapper.HBaseQuery\nimport org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.request.HBaseRequest\nimport org.apache.streampark.flink.core.scala.source.HBaseSource\nimport org.apache.flink.api.scala.createTypeInformation\nimport org.apache.hadoop.hbase.CellUtil\nimport org.apache.hadoop.hbase.client.{Get, Scan}\nimport org.apache.hadoop.hbase.util.Bytes\n\nimport java.util\n\nobject HBaseSourceApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n\n    implicit val conf = ConfigUtils.getHBaseConfig(context.parameter.toMap)\n\n    val id = HBaseSource().getDataStream[String](query => {\n        new HBaseQuery("person", new Scan())\n    },\n      //The following methods determine the logic for restoring offsets from checkpoints\n      r => new String(r.getRow), null)\n     //flink Async I/O\n    HBaseRequest(id).requestOrdered(x => {\n      new HBaseQuery("person", new Get(x.getBytes()))\n    }, (a, r) => {\n      val map = new util.HashMap[String, String]()\n      val cellScanner = r.cellScanner()\n      while (cellScanner.advance()) {\n        val cell = cellScanner.current()\n        val q = Bytes.toString(CellUtil.cloneQualifier(cell))\n        val (name, v) = q.split("_") match {\n          case Array(_type, name) =>\n            _type match {\n              case "i" => name -> Bytes.toInt(CellUtil.cloneValue(cell))\n              case "s" => name -> Bytes.toString(CellUtil.cloneValue(cell))\n              case "d" => name -> Bytes.toDouble(CellUtil.cloneValue(cell))\n              case "f" => name -> Bytes.toFloat(CellUtil.cloneValue(cell))\n            }\n          case _ =>\n        }\n        map.put(name.toString, v.toString)\n      }\n      map.toString\n    }).print("Async")\n  }\n\n}\n\n'})})}),(0,a.jsx)(i.A,{value:"write Apache HBase",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'import org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.{HBaseOutputFormat, HBaseSink}\nimport org.apache.flink.api.scala._\nimport org.apache.streampark.common.util.ConfigUtils\nimport org.apache.hadoop.hbase.client.{Mutation, Put}\nimport org.apache.hadoop.hbase.util.Bytes\n\nimport java.util.{Collections, Random}\n\nobject HBaseSinkApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n    val source = context.addSource(new TestSource)\n    val random = new Random()\n\n    //\u5b9a\u4e49\u8f6c\u6362\u89c4\u5219...\n    implicit def entry2Put(entity: TestEntity): java.lang.Iterable[Mutation] = {\n      val put = new Put(Bytes.toBytes(System.nanoTime() + random.nextInt(1000000)), entity.timestamp)\n      put.addColumn(Bytes.toBytes("cf"), Bytes.toBytes("cid"), Bytes.toBytes(entity.cityId))\n      put.addColumn(Bytes.toBytes("cf"), Bytes.toBytes("oid"), Bytes.toBytes(entity.orderId))\n      put.addColumn(Bytes.toBytes("cf"), Bytes.toBytes("os"), Bytes.toBytes(entity.orderStatus))\n      put.addColumn(Bytes.toBytes("cf"), Bytes.toBytes("oq"), Bytes.toBytes(entity.quantity))\n      put.addColumn(Bytes.toBytes("cf"), Bytes.toBytes("sid"), Bytes.toBytes(entity.siteId))\n      Collections.singleton(put)\n    }\n    //source ===> trans ===> sink\n\n    //1\uff09INSERT WAY 1\n    HBaseSink().sink[TestEntity](source, "order")\n    //2) \u63d2\u5165\u65b9\u5f0f2\n    //1.Specify the HBase configuration file\n    implicit val prop = ConfigUtils.getHBaseConfig(context.parameter.toMap)\n    //2.break in...\n    source.writeUsingOutputFormat(new HBaseOutputFormat[TestEntity]("order", entry2Put))\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"When StreamPark writes to Apache HBase, you need to create the method of HBaseQuery,\nspecify the method to convert the query result into the required object, identify whether it is running,\nand pass in the running parameters. details as follows"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:"/**\n * @param ctx\n * @param property\n */\nclass HBaseSource(@(transient@param) val ctx: StreamingContext, property: Properties = new Properties()) {\n\n  /**\n   * @param query   Specify the method to create H Base Query\n   * @param func    The query results are converted into the expected counterparty method\n   * @param running runID\n   * @param prop    Job parameters\n   * @tparam R\n   * @return\n   */\n  def getDataStream[R: TypeInformation](query: R => HBaseQuery,\n                                        func: Result => R,\n                                        running: Unit => Boolean)(implicit prop: Properties = new Properties()) = {\n    Utils.copyProperties(property, prop)\n    val hBaseFunc = new HBaseSourceFunction[R](prop, query, func, running)\n    ctx.addSource(hBaseFunc)\n  }\n\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"StreamPark HBaseSource implements flink Async I/O, which is used to improve the throughput of Streaming: first create a DataStream,\nthen create an HBaseRequest and call requestOrdered() or requestUnordered() to create an asynchronous stream, as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:"class HBaseRequest[T: TypeInformation](@(transient@param) private val stream: DataStream[T], property: Properties = new Properties()) {\n\n  /**\n   *\n   * @param queryFunc\n   * @param resultFunc\n   * @param timeout\n   * @param capacity\n   * @param prop\n   * @tparam R\n   * @return\n   */\n  def requestOrdered[R: TypeInformation](queryFunc: T => HBaseQuery, resultFunc: (T, Result) => R, timeout: Long = 1000, capacity: Int = 10)(implicit prop: Properties): DataStream[R] = {\n    Utils.copyProperties(property, prop)\n    val async = new HBaseAsyncFunction[T, R](prop, queryFunc, resultFunc, capacity)\n    AsyncDataStream.orderedWait(stream, async, timeout, TimeUnit.MILLISECONDS, capacity)\n  }\n\n  /**\n   *\n   * @param queryFunc\n   * @param resultFunc\n   * @param timeout\n   * @param capacity\n   * @param prop\n   * @tparam R\n   * @return\n   */\n  def requestUnordered[R: TypeInformation](queryFunc: T => HBaseQuery, resultFunc: (T, Result) => R, timeout: Long = 1000, capacity: Int = 10)(implicit prop: Properties): DataStream[R] = {\n    Utils.copyProperties(property, prop)\n    val async = new HBaseAsyncFunction[T, R](prop, queryFunc, resultFunc, capacity)\n    AsyncDataStream.unorderedWait(stream, async, timeout, TimeUnit.MILLISECONDS, capacity)\n  }\n\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"StreamPark supports two ways to write data: 1. addSink() 2. writeUsingOutputFormat Examples are as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'    //1\uff09Insert way 1\n    HBaseSink().sink[TestEntity](source, "order")\n    //2) insert way 2\n    //1.Specify the HBase configuration file\n    implicit val prop = ConfigUtils.getHBaseConfig(context.parameter.toMap)\n    //\n    source.writeUsingOutputFormat(new HBaseOutputFormat[TestEntity]("order", entry2Put))\n'})}),"\n",(0,a.jsx)(n.h2,{id:"other-configuration",children:"Other configuration"}),"\n",(0,a.jsxs)(n.p,{children:["All other configurations must comply with the StreamPark configuration. For specific configurable items and the role of each parameter, please refer to the ",(0,a.jsx)(n.a,{href:"/docs/development/config",children:"project configuration"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},65173:(e,n,t)=>{t.d(n,{A:()=>i});t(30758);var a=t(13526);const r={tabItem:"tabItem_t88E"};var o=t(86070);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},33764:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(30758),r=t(13526),o=t(21176),i=t(25557),s=t(3195),c=t(62757),l=t(64474),u=t(37976);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=d(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[l,p]=m({queryString:t,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),y=(()=>{const e=l??g;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{y&&c(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var f=t(33689);const y={tabList:"tabList_rr1b",tabItem:"tabItem_bI3v"};var b=t(86070);function v(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==a&&(l(n),i(r))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:p,onClick:u,...o,className:(0,r.A)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function B(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function S(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(B,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,b.jsx)(S,{...e,children:p(e.children)},String(n))}},76113:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(30758);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);