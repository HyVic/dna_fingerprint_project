import{E as T}from"./ElPagination-DVyyORel.js";import{T as O,S as X,r as q,u as G}from"./xlsx-Bg9DDNos.js";import{d as J,r as g,h as M,m as Q,c as V,a as e,b as r,w as o,i as z,j as C,F as Y,p as tt,e as b,f,g as N,t as l,_ as et}from"./index-3r8ipdx0.js";const rt=""+new URL("RZ2300021-SNP-2_vs_RZ2300002-SNP-2-3FgTKAv8.png",import.meta.url).href,st={class:"fingerprint-search"},nt={class:"search-result"},it={key:0,class:"choose"},ot={class:"search-result-snp common"},at={class:"search-box"},lt={class:"search-input"},ut={class:"search-btn"},gt={class:"table-info"},dt={class:"search-result-snp common"},mt={class:"search-box"},pt={class:"search-input"},vt={class:"search-btn"},ct={class:"table-info"},Nt={key:1,class:"result"},bt={class:"search-result- common"},ft={class:"result-content"},St={class:"left",id:"left"},ht={class:"all-info",id:"all-info"},yt={class:"content common",id:"images"},Ct={class:"item"},_t={class:"chromosome common",id:"chromosome"},wt={class:"table-info"},Kt={class:"dialog-footer"},kt=J({__name:"VarietyDifferenceAnalysis",setup(xt){const m=g({searchName:"",searchNumber:""}),p=g({searchName:"",searchNumber:""}),D=n=>{console.log(n),console.log(n===1?m.value:p.value)},E=n=>{n===1?(m.value.searchName="",m.value.searchNumber=""):(p.value.searchName="",p.value.searchNumber="")},w=g(),B=g([]),R=[{id:1,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:2,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:3,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:4,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"}],A=[{id:1,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:2,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:3,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:4,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:5,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:6,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:7,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:8,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:9,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:10,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:11,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:12,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:13,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:14,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:15,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:16,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:17,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:18,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:19,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:20,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:21,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:22,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:23,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:24,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:25,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:26,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:27,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:28,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:29,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"},{id:30,sortName:"string",sortKind:"string",approvalNumber:"string",registrationNumber:"string",sortSource:"string"}],I=n=>{B.value=n},U=n=>{B.value=n},v=g(!1),d=g({validCount:"19152",anumCount1:"17810",anumCount2:"1342",bnumCount1:"17810",bnumCount2:"1342",validCountAll:"54.29% (10397)",validCount1:"57.56% (10240)",validCount2:"0.82% (157)",img:rt}),K=()=>{v.value&&tt(()=>{setTimeout(()=>{window.innerWidth>=1500&&window.innerWidth<1900&&(document.getElementById("images").style.height="".concat(document.getElementById("all-info").clientHeight-10,"px")),window.innerWidth>=1901&&(document.getElementById("chromosome").style.height="".concat(document.getElementById("left").clientHeight-12,"px"))},0)})},S=g({pageNum:1,pageSize:10,total:1e3}),F=n=>{S.value.pageNum=n.pageNum,S.value.pageSize=n.pageSize},h=g({pageNum:1,pageSize:10,total:1e3}),j=n=>{h.value.pageNum=n.pageNum,h.value.pageSize=n.pageSize},k=g(!1),_=n=>{console.log(n),k.value=!0},$=g([]),P=n=>new Promise((t,u)=>{const a=new FileReader;a.readAsArrayBuffer(n.raw),a.onload=s=>{t(s.target.result)},a.onerror=s=>{u(s)}}),L=async n=>{const t=await W(n);$.value=H(t)},W=async n=>{const t=await P(n),u=q(t),a=u.Sheets[u.SheetNames[0]],s=G.sheet_to_json(a);return s.slice(0,s.length-1)},H=n=>{let t=[];const u={chrom:"number",整体相似度:"validCount",纯合相似度:"referCount",杂合相似度:"altCount"};return n.forEach(a=>{const s={};Object.keys(a).forEach(c=>{s[u[c]]=a[c]}),t.push(s)}),t};return M(()=>{K(),window.addEventListener("resize",K)}),Q(()=>{window.removeEventListener("resize",K)}),(n,t)=>{const u=b("el-input"),a=b("el-button"),s=b("el-table-column"),c=b("el-table"),y=b("el-scrollbar"),Z=b("el-upload");return f(),V(Y,null,[e("div",st,[e("div",nt,[r(y,{height:"100%"},{default:o(()=>[v.value?C("",!0):(f(),V("div",it,[e("div",ot,[e("div",at,[e("div",lt,[r(u,{modelValue:m.value.searchName,"onUpdate:modelValue":t[0]||(t[0]=i=>m.value.searchName=i),type:"text",placeholder:"请输入品种名称"},null,8,["modelValue"]),r(u,{modelValue:m.value.searchNumber,"onUpdate:modelValue":t[1]||(t[1]=i=>m.value.searchNumber=i),type:"text",placeholder:"请输入品种编号"},null,8,["modelValue"])]),e("div",ut,[r(a,{onClick:t[2]||(t[2]=i=>D(1))},{default:o(()=>t[15]||(t[15]=[e("i",{class:"iconfont icon-chanpinchaxun"},null,-1),N("检索")])),_:1}),r(a,{onClick:t[3]||(t[3]=i=>E(1))},{default:o(()=>t[16]||(t[16]=[e("i",{class:"iconfont icon-initial"},null,-1),N("重置")])),_:1})])]),t[17]||(t[17]=e("div",{class:"title"},"本地上传物种数据",-1)),e("div",gt,[r(y,{height:"100%"},{default:o(()=>[r(c,{stripe:"",ref_key:"multipleTableRef",ref:w,data:R,style:{width:"100%"},onSelectionChange:I},{default:o(()=>[r(s,{type:"selection",width:"40"}),r(s,{type:"index",label:"序号",width:"55"}),r(s,{property:"sortName",label:"品种名称"}),r(s,{property:"sortKind",label:"作物种类"}),r(s,{property:"approvalNumber",label:"审定编号"}),r(s,{property:"registrationNumber",label:"登记编号"}),r(s,{property:"sortSource",label:"品种来源"})]),_:1},512)]),_:1})]),r(T,{pageNum:S.value.pageNum,"page-size":S.value.pageSize,total:S.value.total,onCurrentChange:F},null,8,["pageNum","page-size","total"])]),e("div",dt,[e("div",mt,[e("div",pt,[r(u,{modelValue:p.value.searchName,"onUpdate:modelValue":t[4]||(t[4]=i=>p.value.searchName=i),type:"text",placeholder:"请输入品种名称"},null,8,["modelValue"]),r(u,{modelValue:p.value.searchNumber,"onUpdate:modelValue":t[5]||(t[5]=i=>p.value.searchNumber=i),type:"text",placeholder:"请输入品种编号"},null,8,["modelValue"])]),e("div",vt,[r(a,{onClick:t[6]||(t[6]=i=>D(2))},{default:o(()=>t[18]||(t[18]=[e("i",{class:"iconfont icon-chanpinchaxun"},null,-1),N("检索")])),_:1}),r(a,{onClick:t[7]||(t[7]=i=>E(2))},{default:o(()=>t[19]||(t[19]=[e("i",{class:"iconfont icon-initial"},null,-1),N("重置")])),_:1})])]),t[20]||(t[20]=e("div",{class:"title"},"数据库数据",-1)),e("div",ct,[r(y,{height:"100%"},{default:o(()=>[r(c,{stripe:"",ref_key:"multipleTableRef",ref:w,data:A,style:{width:"100%"},onSelectionChange:U},{default:o(()=>[r(s,{type:"selection",width:"40"}),r(s,{type:"index",label:"序号",width:"55"}),r(s,{property:"sortName",label:"品种名称"}),r(s,{property:"sortKind",label:"作物种类"}),r(s,{property:"approvalNumber",label:"审定编号"}),r(s,{property:"registrationNumber",label:"登记编号"}),r(s,{property:"sortSource",label:"品种来源"})]),_:1},512)]),_:1})]),r(T,{pageNum:h.value.pageNum,"page-size":h.value.pageSize,total:h.value.total,onCurrentChange:j},null,8,["pageNum","page-size","total"])])])),v.value?(f(),V("div",Nt,[e("div",bt,[t[30]||(t[30]=e("div",{class:"title"},"比对结果",-1)),e("div",ft,[e("div",St,[e("div",ht,[e("div",null,[t[21]||(t[21]=e("span",null,"有效位点",-1)),e("span",null,l(d.value.validCount),1)]),e("div",null,[t[22]||(t[22]=e("span",null,"样本A的纯合位点数量",-1)),e("span",null,l(d.value.anumCount1),1)]),e("div",null,[t[23]||(t[23]=e("span",null,"样本A的杂合位点数量",-1)),e("span",null,l(d.value.anumCount2),1)]),e("div",null,[t[24]||(t[24]=e("span",null,"样本B的杂合位点数量",-1)),e("span",null,l(d.value.bnumCount1),1)]),e("div",null,[t[25]||(t[25]=e("span",null,"样本B的纯合位点数量",-1)),e("span",null,l(d.value.bnumCount2),1)]),e("div",null,[t[26]||(t[26]=e("span",null,"有效位点的整体相似度",-1)),e("span",null,l(d.value.validCountAll),1)]),e("div",null,[t[27]||(t[27]=e("span",null,"有效位点的纯合位点相似度",-1)),e("span",null,l(d.value.validCount1),1)]),e("div",null,[t[28]||(t[28]=e("span",null,"有效位点的杂合位点相似度",-1)),e("span",null,l(d.value.validCount2),1)])]),e("div",yt,[e("div",Ct,[r(y,{height:"100%"},{default:o(()=>[r(X,{status:"1"})]),_:1})])])]),e("div",_t,[r(Z,{style:{display:"flex"},"on-change":L,accept:"xls,xlsx","auto-upload":!1,multiple:!0},{default:o(()=>[r(a,{type:"primary"},{default:o(()=>t[29]||(t[29]=[N("Click to upload")])),_:1})]),_:1}),e("div",wt,[r(y,{height:"100%"},{default:o(()=>[r(c,{stripe:"",ref_key:"multipleTableRef",ref:w,data:$.value,style:{width:"100%"}},{default:o(()=>[r(s,{property:"number",label:"染色体",width:"90"},{default:o(i=>[e("div",{class:"common_cell",onClick:t[8]||(t[8]=x=>_("all"))},l(i.row.number),1)]),_:1}),r(s,{property:"validCount",label:"有效位点的整体相似度"},{default:o(i=>[e("div",{class:"common_cell",onClick:t[9]||(t[9]=x=>_("all"))},l(i.row.validCount),1)]),_:1}),r(s,{property:"referCount",label:"有效位点的纯合位点相似度"},{default:o(i=>[e("div",{class:"common_cell",onClick:t[10]||(t[10]=x=>_("pure"))},l(i.row.referCount),1)]),_:1}),r(s,{property:"altCount",label:"有效位点的杂合位点相似度"},{default:o(i=>[e("div",{class:"common_cell",onClick:t[11]||(t[11]=x=>_("hybrid"))},l(i.row.altCount),1)]),_:1})]),_:1},8,["data"])]),_:1})])])])])])):C("",!0),e("div",Kt,[v.value?C("",!0):(f(),z(a,{key:0,onClick:t[12]||(t[12]=i=>v.value=!0)},{default:o(()=>t[31]||(t[31]=[e("i",{class:"iconfont icon-lujing-6"},null,-1),N("比对")])),_:1})),v.value?(f(),z(a,{key:1,onClick:t[13]||(t[13]=i=>v.value=!1)},{default:o(()=>t[32]||(t[32]=[e("i",{class:"iconfont icon-initial"},null,-1),N("返回")])),_:1})):C("",!0)])]),_:1})])]),k.value?(f(),z(O,{key:0,onClose:t[14]||(t[14]=i=>k.value=!1)})):C("",!0)],64)}}}),Et=et(kt,[["__scopeId","data-v-f3c6f4bf"]]);export{Et as default};