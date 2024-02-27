import{C as E,r as _,u as B,d as P,e as T,f as e,w as t,j as p,t as u,k as o,F as $,p as I,D as c,$ as v,E as S,h as D,q as R,i as U,v as Y,x as j,I as N}from"./index-fcbdad1f.js";import{_ as q,l as F}from"./layout.daec25cc.js";import{_ as A}from"./page-meta.8634b088.js";import{_ as J}from"./icon-email.c485b8d6.js";import{_ as K}from"./icon-password.43cb9a3e.js";import{_ as L}from"./icon-code.c850328e.js";import{_ as z}from"./_plugin-vue_export-helper.c27b6911.js";const G=E({__name:"forget",setup(H){const d=_(!0),{t:a}=B();function b(r){I({url:r})}const n=_({email:"",password:"",code:""});async function V(){if(console.log(n),!n.value.email){c({title:a("common.forget.PleaseEnterYourEmail"),icon:"none"});return}if(!n.value.password){c({title:a("common.forget.PleaseEnterYourPassword"),icon:"none"});return}if(!n.value.code){c({title:a("common.forget.PleaseEnterYourVerificationCode"),icon:"none"});return}const{code:r,data:l,message:g}=await v.post("/auth/restPass",n.value);if(console.log(l),r!==1){await c({title:g,icon:"none"});return}await c({title:a("common.forget.ResetPasswordSuccessfully"),icon:"none"}),v.back()}const m=_(null);async function k(){if(!n.value.email){c({title:a("common.forget.PleaseEnterYourEmail"),icon:"none"});return}if(m.value)return;const r=await v.post("/auth/send",{email:n.value.email});if(r.code!==1){c({title:r.message,icon:"none"});return}c({title:a("common.forget.VerificationCodeSentSuccessfully"),icon:"none"}),m.value=60,y(),console.log(r)}function y(){setTimeout(()=>{m.value>0?(m.value--,y()):m.value=null},1e3)}const C=_({showTopBar:!0,topBarBgColor:"transparent",showTopBarBackBtn:!0,topBarTitle:a("common.forget.Back"),className:"text-white",backIconColor:"white"});return S(F,C),(r,l)=>{const g=D(R("page-meta"),A),s=U,f=Y,x=j,w=N,h=q;return P(),T($,null,[e(g),e(s,{class:"init-top"}),e(h,{"class-name":"IndexRouter"},{default:t(()=>[e(s,{class:"px-[50px]"},{default:t(()=>[e(s,{class:"mt-[84px] flex flex-col text-white"},{default:t(()=>[e(f,{class:"text-[70px] font-bold"},{default:t(()=>[p(u(o(a)("common.forget.Retrieve")),1)]),_:1}),e(f,{class:"text-[26px] mt-[18px]"},{default:t(()=>[p(u(o(a)("common.forget.RetrieveUpToJoin")),1)]),_:1})]),_:1}),e(s,{class:"form-wrap mt-[79px]"},{default:t(()=>[e(s,{class:"flex items-center p-[28px] bg-[#f5f7f9] rounded-[20px]"},{default:t(()=>[e(x,{class:"w-[44px] h-[44px]",src:J}),e(w,{modelValue:o(n).email,"onUpdate:modelValue":l[0]||(l[0]=i=>o(n).email=i),class:"flex-1 ml-[19px] input",placeholder:"Email",type:"text"},null,8,["modelValue"])]),_:1}),e(s,{class:"flex items-center p-[28px] mt-[30px] bg-[#f5f7f9] rounded-[20px]"},{default:t(()=>[e(x,{class:"w-[44px] h-[44px]",src:K}),e(s,{class:"flex items-center justify-between flex-1"},{default:t(()=>[e(w,{modelValue:o(n).password,"onUpdate:modelValue":l[1]||(l[1]=i=>o(n).password=i),type:o(d)?"password":"text",class:"flex-1 ml-[19px] input",placeholder:"Password"},null,8,["modelValue","type"]),e(x,{src:o(d)?"/static/images/icon-off.png":"/static/images/icon-on.png",class:"w-[36px] h-[36px]",onClick:l[2]||(l[2]=i=>d.value=!o(d))},null,8,["src"])]),_:1})]),_:1}),e(s,{class:"flex items-center p-[28px] mt-[30px] bg-[#f5f7f9] rounded-[20px]"},{default:t(()=>[e(x,{class:"w-[44px] h-[44px]",src:L}),e(s,{class:"flex items-center justify-between flex-1"},{default:t(()=>[e(w,{modelValue:o(n).code,"onUpdate:modelValue":l[3]||(l[3]=i=>o(n).code=i),class:"flex-1 ml-[19px] input",placeholder:"Verification code",type:"text"},null,8,["modelValue"]),e(s,{class:"w-[100px] text-[22px] rounded-[20px] text-center bg-black text-white py-[8px]",onClick:k},{default:t(()=>{var i;return[p(u((i=o(m))!=null?i:o(a)("common.forget.Send")),1)]}),_:1})]),_:1})]),_:1})]),_:1}),e(s,{class:"btn-wrap text-center"},{default:t(()=>[e(s,{class:"bg-black py-[33px] rounded-[20px]",onClick:V},{default:t(()=>[e(f,{class:"text-[32px] font-bold text-white"},{default:t(()=>[p(u(o(a)("common.forget.Submit")),1)]),_:1})]),_:1}),e(s,{class:"mt-[39px] text-[28px] text-white"},{default:t(()=>[e(f,null,{default:t(()=>[p(u(o(a)("common.forget.ExistingAccount"))+" ",1)]),_:1}),e(f,{class:"font-bold",onClick:l[4]||(l[4]=i=>b("/pages/common/login"))},{default:t(()=>[p(u(o(a)("common.forget.Login")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});const te=z(G,[["__scopeId","data-v-da4a861d"]]);export{te as default};
