import{u as W,r as U,a as X,b as Y,o as Z,c as ee,d as u,e as y,f as e,w as t,F as v,$ as D,g as te,h as se,i as le,j as r,t as c,k as l,l as _,m as C,n as ae,s as N,p as E,q as oe,v as ne,x as re,S as ce,y as ie,z as ue,A as pe,B as fe}from"./index-fc527e32.js";import{_ as de}from"./layout.6705feb1.js";import{_ as xe}from"./page-meta.2920e12b.js";import{d as _e}from"./dayjs.min.9de92248.js";import{c as j,_ as f}from"./device.7173e9a9.js";import{u as he}from"./vue.f36acd1f.c510b69a.js";import{_ as me}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.187a63f9.js";const ge="./static/images/msg.png",d={market:j([{left:10,top:15,bottom:220,width:45,height:45,type:"round"},{left:60,right:365,top:12,bottom:220,width:90,height:19,type:"rect"},{left:60,right:365,top:40,bottom:220,width:55,height:19,type:"rect"},{left:200,right:365,top:25,bottom:220,width:90,height:19,type:"rect"},{left:300,right:365,top:15,bottom:220,width:80,height:40,type:"rect"}]),top:j([{left:14,right:365,top:16,bottom:220,width:70,height:20,type:"rect"},{left:14,right:365,top:42,bottom:220,width:134,height:24,type:"rect"},{left:14,right:365,top:72,bottom:220,width:134,height:65,type:"rect"},{left:14,right:365,top:142,bottom:220,width:70,height:28,type:"rect"},{left:118,right:365,top:142,bottom:220,width:30,height:28,type:"rect"}]),swipers:j([{left:14,right:365,top:16,bottom:220,width:229,height:30,type:"rect"},{left:14,right:365,top:94,bottom:220,width:362,height:30,type:"rect"},{left:269,right:365,top:17,bottom:220,width:107,height:66,type:"rect"}])};const we={__name:"home",setup(be){var $;const{t:h}=W();he({title:h("tabBar.home.home")});function b(a){console.log("骨架切换"),console.log(a)}const L=($=ae())==null?void 0:$.appContext.config.globalProperties.$wsUrl;let p=null;const w=U(!1),m=X();function H(){m.userInfo.email?N({url:"/pages/tabbar/mine"}):E({url:"/pages/common/login"})}function B(a){E({url:`/pages/position/chart?pair=${a}`})}function O(){N({url:"/pages/tabbar/quotes"})}const S=Y([]);async function T(){if(S.length>0)return;(await D.get("/index/news")).data.forEach(n=>{n.image=D.staticUrl(n.image),S.push(n)})}const g=U([]);async function F(){if(g.value.length>0)return;(await D.get("/index/market")).data.forEach(n=>{n.logo=D.staticUrl(n.logo),n.nowData={close:1,high:1,low:11,open:11,symbol:"USD/AUD",timestamp:1704270547e3,volume:4},n.prevData=n.nowData,n.upOrDown=!0,n.diff=1,g.value.push(n)})}function q(a){w.value=!1;const n=JSON.parse(a);n.ping?p.send(JSON.stringify({pong:n.ping})):g.value.forEach(x=>{n.forEach(s=>{s.symbol===x.symbol&&(x.prevData=x.nowData,x.nowData=s,x.diff=(x.nowData.high-x.nowData.close).toFixed(4))})})}function J(a){return{symbol:a,type:"price",language:"en_US"}}function M(a){p.send({data:JSON.stringify(J(a))})}function V(){let a="";g.value.forEach(n=>{a+=`${n.symbol}.`}),a=a.substring(0,a.length-1),M(a)}function A(){p.send({data:JSON.stringify({type:"heartbeat",msg:"ping"})})}function I(){p!=null&&(A(),setTimeout(()=>{I()},3e3))}async function z(){p===null&&(p=te({url:L,success(){console.log("连接成功")}}),p.onOpen(()=>{V(),I()}),p.onMessage(a=>{q(a.data)}))}return Z(()=>{p.close(),p=null}),ee(async()=>{await m.getUserInfo(),w.value=!0,await T(),await F(),await z()}),(a,n)=>{const x=se(oe("page-meta"),xe),s=le,i=ne,k=re,P=ce,R=fe,Q=ie,G=de;return u(),y(v,null,[e(x),e(s,{class:"init-top"}),e(G,{"class-name":"IndexRouter"},{default:t(()=>[e(s,{class:"flex flex-row justify-between items-center px-[34px]",onClick:H},{default:t(()=>[e(i,{class:"text-[40px] font-bold"},{default:t(()=>[r(c(l(m).userInfo.nickname?l(m).userInfo.nickname:"Log in"),1)]),_:1}),e(s,{class:"flex items-center"},{default:t(()=>[e(k,{class:"w-[41px] h-[40px]",src:ge}),e(k,{src:l(m).userInfo.avatar?l(m).getAvatar():"/static/images/no-login.png",class:"ml-[25px] rounded-full w-[92px] h-[92px]"},null,8,["src"])]),_:1})]),_:1}),e(s,{class:"mt-[18px]"},{default:t(()=>[e(s,{class:"text-[45px] pl-[34px]"},{default:t(()=>[r(c(l(h)("tabBar.home.hot")),1)]),_:1}),e(P,{class:"mt-[20px]","scroll-x":""},{default:t(()=>[l(w)?(u(),_(s,{key:1,class:"flex items-center"},{default:t(()=>[e(s,{class:"scroll-x-skeleton relative flex flex-col justify-between rounded-[30px] chart-wrap loading"},{default:t(()=>[e(f,{"preload-list":l(d).top,"outer-class":"scroll-x-skeleton"},null,8,["preload-list"])]),_:1}),e(s,{class:"scroll-x-skeleton relative flex flex-col justify-between rounded-[30px] chart-wrap loading"},{default:t(()=>[e(f,{"preload-list":l(d).top,"outer-class":"scroll-x-skeleton"},null,8,["preload-list"])]),_:1}),e(s,{class:"scroll-x-skeleton relative flex flex-col justify-between rounded-[30px] chart-wrap loading"},{default:t(()=>[e(f,{"preload-list":l(d).top,"outer-class":"scroll-x-skeleton"},null,8,["preload-list"])]),_:1})]),_:1})):(u(),_(s,{key:0,class:"items-center flex"},{default:t(()=>[(u(!0),y(v,null,C(l(g).slice(0,3),o=>(u(),_(s,{key:o.id,class:"flex flex-col justify-between rounded-[30px] chart-wrap",onClick:K=>B(o.symbol)},{default:t(()=>[e(i,{class:"text-[28px] font-bold"},{default:t(()=>[r(c(o.full_name),1)]),_:2},1024),e(i,{class:"text-[40px] font-bold"},{default:t(()=>[r(c(o.nowData.close.toFixed(4)),1)]),_:2},1024),e(s,{class:"mb-[54px] mt-[30px] h-[28px] chart"}),e(s,{class:"flex items-center justify-between"},{default:t(()=>[e(s,{class:"increase text-[26px] text-center"},{default:t(()=>[r(c(o.nowData.increase),1)]),_:2},1024),e(i,null,{default:t(()=>[r(" → ")]),_:1})]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1}))]),_:1})]),_:1}),e(s,{class:"mt-[40px] px-[34px]"},{default:t(()=>[e(s,{class:"flex items-center justify-between"},{default:t(()=>[e(i,{class:"text-[45px]"},{default:t(()=>[r(c(l(h)("tabBar.home.news")),1)]),_:1}),e(i,{class:"text-[20px]"},{default:t(()=>[r(c(l(h)("tabBar.home.seeMore")),1)]),_:1})]),_:1}),e(s,{class:"mt-[20px]"},{default:t(()=>[l(w)?(u(),_(s,{key:1,class:"scroll-x-skeleton relative h-[234px] bg-[#f5f7f9] rounded-[15px]"},{default:t(()=>[e(f,{"preload-list":l(d).swipers,"outer-class":"scroll-x-skeleton"},null,8,["preload-list"]),e(f,{"preload-list":l(d).swipers,"outer-class":"scroll-x-skeleton"},null,8,["preload-list"]),e(f,{"preload-list":l(d).swipers,"outer-class":"scroll-x-skeleton"},null,8,["preload-list"])]),_:1})):(u(),_(Q,{key:0,autoplay:!0,circular:"","indicator-dots":!0,class:"h-[234px] bg-[#f5f7f9] rounded-[15px]",vertical:""},{default:t(()=>[(u(!0),y(v,null,C(l(S),o=>(u(),_(R,{key:o.id},{default:t(()=>[e(s,{class:"news mr-[56px]"},{default:t(()=>[e(s,{class:"teletext flex justify-between"},{default:t(()=>[e(s,{class:"news-title text-[24px] line-clamp-3"},{default:t(()=>[r(c(o.title),1)]),_:2},1024),e(k,{src:o.image,class:"news-image rounded-[10px]"},null,8,["src"])]),_:2},1024),ue("div",{class:"desc mt-[21px] text-[20px] sub-title flex items-center justify-between"},[e(i,null,{default:t(()=>[r(c(o.created_at),1)]),_:2},1024),e(i,null,{default:t(()=>[r(c(o.author),1)]),_:2},1024)])]),_:2},1024)]),_:2},1024))),128))]),_:1}))]),_:1})]),_:1}),e(s,{class:"mt-[40px] px-[34px]"},{default:t(()=>[e(s,{class:"flex items-center justify-between"},{default:t(()=>[e(i,{class:"text-[45px]"},{default:t(()=>[r(c(l(h)("tabBar.home.market")),1)]),_:1}),e(i,{class:"text-[20px]",onClick:O},{default:t(()=>[r(c(l(h)("tabBar.home.seeMore")),1)]),_:1})]),_:1}),l(w)?(u(),_(s,{key:1},{default:t(()=>[e(s,{class:"market-skeleton relative h-[124px]"},{default:t(()=>[e(f,{"preload-list":l(d).market,"outer-class":"market-skeleton",onChange:b},null,8,["preload-list"])]),_:1}),e(s,{class:"market-skeleton relative h-[124px]"},{default:t(()=>[e(f,{"preload-list":l(d).market,"outer-class":"market-skeleton",onChange:b},null,8,["preload-list"])]),_:1}),e(s,{class:"market-skeleton relative h-[124px]"},{default:t(()=>[e(f,{"preload-list":l(d).market,"outer-class":"market-skeleton",onChange:b},null,8,["preload-list"])]),_:1}),e(s,{class:"market-skeleton relative h-[124px]"},{default:t(()=>[e(f,{"preload-list":l(d).market,"outer-class":"market-skeleton",onChange:b},null,8,["preload-list"])]),_:1})]),_:1})):(u(),_(s,{key:0,class:"mt-[20px]"},{default:t(()=>[(u(!0),y(v,null,C(l(g),o=>(u(),_(s,{key:o.id,class:"stock-row items-center",onClick:K=>B(o.symbol)},{default:t(()=>[e(s,{class:"flex"},{default:t(()=>[e(k,{src:o.logo,class:"rounded-full w-[72px] h-[72px]"},null,8,["src"]),e(s,{class:"flex flex-col justify-between ml-[20px]"},{default:t(()=>[e(i,{class:"text-[30px]"},{default:t(()=>[r(c(o.full_name),1)]),_:2},1024),e(i,{class:"sub-title text-[22px]"},{default:t(()=>[r(c(l(_e)(o.nowData.timestamp).format("HH:mm:ss")),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(i,{class:"text-[28px] text-right"},{default:t(()=>[r(c(o.nowData.close.toFixed(4)),1)]),_:2},1024),e(s,{class:pe([o.nowData.increase>0?"green-block":"red-block","h-[68px] ml-[20px] rounded-[10px] grid place-items-center"])},{default:t(()=>[e(i,{class:"text-[22px] text-white"},{default:t(()=>[r(c(o.nowData.increase),1)]),_:2},1024)]),_:2},1032,["class"])]),_:2},1032,["onClick"]))),128))]),_:1}))]),_:1})]),_:1})],64)}}},Ie=me(we,[["__scopeId","data-v-6bf0e26e"]]);export{Ie as default};
