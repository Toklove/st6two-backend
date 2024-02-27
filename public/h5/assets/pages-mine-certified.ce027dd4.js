import{d,e as U,J as _,f as a,w as n,M as h,N as B,l as g,A as y,O as z,j as x,t as b,F as V,P as M,i as A,v as D,C as P,u as R,r as I,Q as q,H,$ as u,z as j,k as i,R as k,T as N,E as J,h as K,q as O,I as Q,x as G}from"./index-f1a5fda7.js";import{_ as W,l as X}from"./layout.9bfaeb2c.js";import{_ as Y}from"./page-meta.c41807e0.js";import{_ as L}from"./_plugin-vue_export-helper.c27b6911.js";const Z={name:"fui-alert",emits:["leftClick","click","close"],props:{type:{type:String,default:""},background:{type:String,default:""},padding:{type:Array,default(){return["20rpx","32rpx"]}},marginTop:{type:[Number,String],default:0},marginBottom:{type:[Number,String],default:0},radius:{type:String,default:"16rpx"},iconColor:{type:String,default:"#fff"},iconSize:{type:Number,default:22},closable:{type:Boolean,default:!1},closeColor:{type:String,default:"#fff"},closeSize:{type:Number,default:22},isLeft:{type:Boolean,default:!1},spacing:{type:Boolean,default:!1},title:{type:String,default:""},color:{type:String,default:"#fff"},size:{type:String,default:"14px"},desc:{type:String,default:""},descColor:{type:String,default:"#fff"},descSize:{type:String,default:"12px"},single:{type:Boolean,default:!1}},methods:{getColor(r){const l=uni&&uni.$fui&&uni.$fui.color,e=l&&l.primary||"#465CFF",t={success:l&&l.success||"#09BE4F",warn:l&&l.warning||"#FFB703",clear:l&&l.danger||"#FF2B2B"};return t[r]?t[r]:e},leftClick(){this.$emit("leftClick",{})},onClick(){this.$emit("click",{})},close(){this.$emit("close",{})}}};function $(r,l,e,t,v,m){const C=M,f=A,c=D;return d(),U(V,null,[_("本文件由FirstUI授权予南宁风吹雨网络科技有限公司（会员ID：1  54 1，营业执照号：   914 5 0 1 0 0MAB   N H 73   0 9B）专用，请尊重知识产权，勿私下传播，违者追究法律责任。"),a(f,{class:y(["fui-alert__wrap",[e.background?"":"fui-alert__"+e.type]]),style:z({background:e.background||m.getColor(e.type),borderRadius:e.radius,paddingTop:e.padding[0]||0,paddingRight:e.padding[1]||0,paddingBottom:e.padding[2]||e.padding[0]||0,paddingLeft:e.padding[3]||e.padding[1]||0,marginTop:e.marginTop+"rpx",marginBottom:e.marginBottom+"rpx"})},{default:n(()=>[a(f,{class:"fui-alert__shrink",onClick:h(m.leftClick,["stop"])},{default:n(()=>[B(r.$slots,"default",{},void 0,!0),!e.isLeft&&e.type&&e.type!=="true"?(d(),g(C,{key:0,type:e.type,size:e.iconSize,color:e.iconColor},null,8,["type","size","color"])):_("v-if",!0)]),_:3},8,["onClick"]),a(f,{class:y(["fui-alert__content",{"fui-text__p-left":!e.isLeft&&e.type&&e.type!=="true"||e.spacing&&e.isLeft,"fui-text__p-right":e.closable}]),onClick:h(m.onClick,["stop"])},{default:n(()=>[e.title?(d(),g(c,{key:0,class:"fui-alert__text",style:z({fontSize:e.size,color:e.color})},{default:n(()=>[x(b(e.title),1)]),_:1},8,["style"])):_("v-if",!0),e.desc?(d(),g(c,{key:1,class:y(["fui-alert__text fui-desc__padding",{"fui-alert__single":e.single}]),style:z({fontSize:e.descSize,color:e.descColor})},{default:n(()=>[x(b(e.desc),1)]),_:1},8,["class","style"])):_("v-if",!0),B(r.$slots,"content",{},void 0,!0)]),_:3},8,["class","onClick"]),a(f,{class:"fui-alert__shrink"},{default:n(()=>[B(r.$slots,"right",{},void 0,!0)]),_:3}),e.closable?(d(),g(f,{key:0,class:y({"fui-alert__icon-close":e.desc})},{default:n(()=>[a(C,{onClick:h(m.close,["stop"]),type:"cancel",size:e.closeSize,color:e.closeColor},null,8,["onClick","size","color"])]),_:1},8,["class"])):_("v-if",!0)]),_:3},8,["class","style"])],2112)}const ee=L(Z,[["render",$],["__scopeId","data-v-6aa7b5d5"]]),te=P({__name:"certified",setup(r){const{t:l}=R(),e=I({showTopBar:!0,topBarBgColor:"white",showTopBarBackBtn:!0,topBarTitle:l("mine.certified.Certified")}),t=I({front:null,front_url:null,back:null,back_url:null,real_name:null,id_number:null,is_certified:0}),v=q(()=>t.value.front!==null&&t.value.back!==null&&t.value.real_name!==null&&t.value.id_number!==null);function m(){if(!v.value)return k(l("mine.certified.InputAll"));u.post("/user/real",t.value).then(c=>{c.code===1?(k(l("mine.certified.SubmitSuccess")),u.back()):k(l("mine.certified.SubmitFailed"))})}function C(){t.value.is_certified!==1&&N({count:1,sizeType:["original","compressed"],sourceType:["album"],async success(c){const{data:o,code:p}=await u.uploadFile("/common/upload",c.tempFilePaths[0]);console.log(o,p),p===1?(t.value.front_url=u.staticUrl(o.url),t.value.front=o.url):k(l("mine.certified.UploadFailed"))}})}function f(){t.value.is_certified!==1&&N({count:1,sizeType:["original","compressed"],sourceType:["album"],async success(c){const{data:o,code:p}=await u.uploadFile("/common/upload",c.tempFilePaths[0]);p===1?(t.value.back_url=u.staticUrl(o.url),t.value.back=o.url):k(l("mine.certified.UploadFailed"))}})}return H(()=>{u.get("/user/real").then(c=>{c.code===1&&(t.value.front=c.data.front,t.value.front_url=u.staticUrl(c.data.front),t.value.back=c.data.back,t.value.back_url=u.staticUrl(c.data.back),t.value.real_name=c.data.real_name,t.value.id_number=c.data.id_number,t.value.is_certified=c.data.is_certified)})}),J(X,e),(c,o)=>{const p=K(O("page-meta"),Y),s=A,F=Q,w=G,T=D,E=W;return d(),U(V,null,[a(p),j("div",{class:"init-top"}),a(E,{"class-name":"IndexRouter"},{default:n(()=>[a(s,{class:"px-[34px]"},{default:n(()=>[a(s,{class:"text-[45px] leading-[60px]"},{default:n(()=>[x(b(i(l)("mine.certified.UploadIDPhoto")),1)]),_:1}),a(s,{class:"text-[26px] sub-title leading-[36px]"},{default:n(()=>[x(b(i(l)("mine.certified.MakeSureTheBorderIsComplete")),1)]),_:1}),i(t).is_certified===2?(d(),g(s,{key:0,class:"mt-[40px]"},{default:n(()=>[a(ee,{title:i(l)("mine.certified.fail"),type:"warn"},null,8,["title"])]),_:1})):_("v-if",!0),a(s,{class:"bg-[#f5f7f9] mt-[40px] p-[28px] rounded-[20px]"},{default:n(()=>[a(F,{modelValue:i(t).real_name,"onUpdate:modelValue":o[0]||(o[0]=S=>i(t).real_name=S),placeholder:i(l)("mine.certified.realName"),disabled:i(t).is_certified===1,class:"flex-1 ml-[19px] input",type:"text"},null,8,["modelValue","placeholder","disabled"])]),_:1}),a(s,{class:"bg-[#f5f7f9] mt-[20px] p-[28px] rounded-[20px]"},{default:n(()=>[a(F,{modelValue:i(t).id_number,"onUpdate:modelValue":o[1]||(o[1]=S=>i(t).id_number=S),placeholder:i(l)("mine.certified.idNumber"),class:"flex-1 ml-[19px] input",type:"text",disabled:i(t).is_certified===1},null,8,["modelValue","placeholder","disabled"])]),_:1}),a(s,{class:"mt-[30px] text-center",onClick:C},{default:n(()=>[a(w,{src:i(t).front!==null?i(t).front_url:"/static/images/real-upload.png",class:"mt-[22px] icon-upload"},null,8,["src"])]),_:1}),a(s,{class:"mt-[30px] text-center",onClick:f},{default:n(()=>[a(w,{src:i(t).back!==null?i(t).back_url:"/static/images/real-upload.png",class:"mt-[22px] icon-upload"},null,8,["src"])]),_:1}),a(s,{class:"mt-[98px] text-center"},{default:n(()=>[a(T,{class:"text-[22px] sub-title"},{default:n(()=>[x(b(i(l)("mine.certified.cerTitle")),1)]),_:1})]),_:1}),i(t).is_certified!==1?(d(),g(s,{key:1,class:y([i(v)?"bg-black text-white":"","mt-[30px] py-[24px] text-center bg-[#f5f7f9] rounded-[40px] transition-all"]),onClick:m},{default:n(()=>[a(T,{class:y([i(v)?"text-white":"sub-title","text-[28px] font-bold transition-all"])},{default:n(()=>[x(b(i(l)("mine.certified.Submit")),1)]),_:1},8,["class"])]),_:1},8,["class"])):_("v-if",!0)]),_:1})]),_:1})],64)}}});const ce=L(te,[["__scopeId","data-v-71e2398c"]]);export{ce as default};
