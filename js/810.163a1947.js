"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[810],{2169:function(e,t){let l;l=" https://wondrous-parrot-perfectly.ngrok-free.app",t.A=l},6810:function(e,t,l){l.r(t),l.d(t,{default:function(){return p}});var a=l(641),r=l(953),n=l(163),o=l(4335),u=l(2169);const c={class:"article-write-container"};var s={__name:"撰写文章",setup(e){const t=(0,r.KR)({title:"",content:""}),l=(0,r.KR)({title:[{required:!0,message:"请输入文章标题",trigger:"blur"}],content:[{required:!0,message:"请输入文章内容",trigger:"blur"}]}),s=(0,r.KR)(null),i=(0,r.KR)(""),d=(0,r.KR)({}),p=(0,r.KR)(!1),f=async()=>{s.value&&s.value.validate((async e=>{if(e)try{const e=await o.A.post(`${u.A}/api/submitBlogs/${i.value}`,t.value);200===e.status?(n.nk.success("文章提交成功"),t.value={title:"",content:""}):n.nk.error("文章提交失败，请稍后重试")}catch(l){console.error("请求出错:",l),n.nk.error("文章提交失败，请稍后重试")}else n.nk.error("请检查表单填写内容")}))},m=()=>{t.value={title:"",content:""},history.back()};return(0,a.sV)((async()=>{try{i.value=localStorage.getItem("username");const e=await o.A.get(`${u.A}/check`,{withCredentials:!0});e.data.isLoggedIn&&(p.value=!0,d.value=e.data)}catch(e){console.error("验证登录状态出错:",e)}})),(e,r)=>{const n=(0,a.g2)("el-input"),o=(0,a.g2)("el-form-item"),u=(0,a.g2)("el-button"),i=(0,a.g2)("el-form");return(0,a.uX)(),(0,a.CE)("div",c,[(0,a.bF)(i,{ref_key:"formRef",ref:s,model:t.value,rules:l.value,"label-width":"100px",class:"form-container"},{default:(0,a.k6)((()=>[(0,a.bF)(o,{label:"文章标题",prop:"title"},{default:(0,a.k6)((()=>[(0,a.bF)(n,{modelValue:t.value.title,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value.title=e),placeholder:"请输入文章标题"},null,8,["modelValue"])])),_:1}),(0,a.bF)(o,{label:"文章内容",prop:"content"},{default:(0,a.k6)((()=>[(0,a.bF)(n,{modelValue:t.value.content,"onUpdate:modelValue":r[1]||(r[1]=e=>t.value.content=e),type:"textarea",rows:5,placeholder:"请输入文章内容"},null,8,["modelValue"])])),_:1}),(0,a.bF)(o,null,{default:(0,a.k6)((()=>[(0,a.bF)(u,{type:"primary",onClick:f},{default:(0,a.k6)((()=>r[2]||(r[2]=[(0,a.eW)("提交文章")]))),_:1}),(0,a.bF)(u,{style:{"margin-left":"10px"},onClick:m},{default:(0,a.k6)((()=>r[3]||(r[3]=[(0,a.eW)("取消")]))),_:1})])),_:1})])),_:1},8,["model","rules"])])}}},i=l(6262);const d=(0,i.A)(s,[["__scopeId","data-v-466a92de"]]);var p=d}}]);
//# sourceMappingURL=810.163a1947.js.map