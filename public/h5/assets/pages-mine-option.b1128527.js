import{C as I,u as S,r as y,Q as q,U as H,H as R,d as u,e as w,f as e,z,w as t,k as l,V as E,l as f,F as j,m as M,$ as v,h as L,q as C,i as A,x as J,j as o,t as n,A as O,J as B,D as P,v as Q}from"./index-fc527e32.js";import{F as G,a as K,_ as W}from"./layout.6705feb1.js";import{_ as X}from"./page-meta.2920e12b.js";import{c as Y,_ as Z}from"./device.7173e9a9.js";import{_ as ee}from"./option.5b7bc5db.js";import{U as te}from"./sub-section.3fdb44aa.js";import{_ as ae}from"./_plugin-vue_export-helper.c27b6911.js";const x={market:Y([{left:16,right:365,top:26,bottom:220,width:80,height:19,type:"rect"},{left:274,right:365,top:28,bottom:220,width:100,height:12,type:"rect"},{left:354,right:365,top:50,bottom:220,width:20,height:19,type:"rect"},{left:16,right:365,top:90,bottom:220,width:16,height:16,type:"rect"},{left:108,right:365,top:90,bottom:220,width:80,height:12,type:"rect"},{left:212,right:365,top:90,bottom:220,width:24,height:12,type:"rect"},{left:350,right:365,top:90,bottom:220,width:24,height:12,type:"rect"},{left:16,right:365,top:116,bottom:220,width:36,height:16,type:"rect"},{left:360,right:365,top:122,bottom:220,width:14,height:12,type:"rect"},{left:16,right:365,top:140,bottom:220,width:50,height:16,type:"rect"},{left:244,right:365,top:146,bottom:220,width:130,height:12,type:"rect"}])},le=I({__name:"option",setup(se){function V(){v.back()}const{t:r}=S(),g=y(!1),F=q(()=>[{name:r("mine.option.position")},{name:r("mine.option.history")}]),k=y(0),_=y([]),c=y({page:1,max:1,status:0});function N(p){g.value=!0,c.value.status=p,c.value.page=1,b()}function $(p){P({title:p,icon:"none"})}function D(){if(c.value.page>=c.value.max){$(r("mine.option.NoMoreData"));return}c.value.page++,b()}H(()=>{D()});function b(){v.get("/market/option_order_history",c.value).then(p=>{c.value.max=p.data.last_page;const d=p.data.data.map(m=>(m.show_detail=!1,m.market.logo=v.staticUrl(m.market.logo),m));c.value.page===1?_.value=d:_.value=_.value.concat(d),g.value=!1})}return R(()=>{b()}),(p,d)=>{const m=L(C("page-meta"),X),a=A,i=Q,T=J,h=L(C("fui-skeleton"),Z),U=W;return u(),w(j,null,[e(m),z("div",{class:"init-top"}),e(U,{"class-name":"IndexRouter"},{default:t(()=>[e(G,{custom:""},{default:t(()=>[e(a,{class:"flex justify-center relative items-center flex-1"},{default:t(()=>[e(a,{class:"absolute left-0"},{default:t(()=>[e(K,{name:"arrowleft",onClick:V})]),_:1}),e(te,{modelValue:l(k),"onUpdate:modelValue":d[0]||(d[0]=s=>E(k)?k.value=s:null),list:l(F),"active-color":"white","button-color":"#3640f0",class:"w-[350px]",rounded:"",onChange:N},null,8,["modelValue","list"])]),_:1})]),_:1}),e(a,{class:"mt-[20px] mx-[34px]"},{default:t(()=>[l(g)?(u(),f(a,{key:1},{default:t(()=>[e(a,{class:"relative flex items-center justify-between mt-[30px] h-[300px] market-skeleton"},{default:t(()=>[e(h,{preloadList:l(x).market,outerClass:"market-skeleton"},null,8,["preloadList"])]),_:1}),e(a,{class:"relative flex items-center justify-between mt-[30px] h-[300px] market-skeleton"},{default:t(()=>[e(h,{preloadList:l(x).market,outerClass:"market-skeleton"},null,8,["preloadList"])]),_:1}),e(a,{class:"relative flex items-center justify-between mt-[30px] h-[300px] market-skeleton"},{default:t(()=>[e(h,{preloadList:l(x).market,outerClass:"market-skeleton"},null,8,["preloadList"])]),_:1}),e(a,{class:"relative flex items-center justify-between mt-[30px] h-[300px] market-skeleton"},{default:t(()=>[e(h,{preloadList:l(x).market,outerClass:"market-skeleton"},null,8,["preloadList"])]),_:1}),e(a,{class:"relative flex items-center justify-between mt-[30px] h-[300px] market-skeleton"},{default:t(()=>[e(h,{preloadList:l(x).market,outerClass:"market-skeleton"},null,8,["preloadList"])]),_:1})]),_:1})):(u(),f(a,{key:0},{default:t(()=>[l(_).length>0?(u(),f(a,{key:0},{default:t(()=>[(u(!0),w(j,null,M(l(_),s=>(u(),f(a,{key:s.id,class:"order-row px-[30px] py-[40px] text-[22px]"},{default:t(()=>[e(a,{class:"flex items-center justify-between text-[30px]"},{default:t(()=>[e(i,null,{default:t(()=>[o(n(s.market.full_name),1)]),_:2},1024),e(i,null,{default:t(()=>[o(n(s.buy_price),1)]),_:2},1024)]),_:2},1024),e(a,{class:O([s.type===1?"buy-2":"buy-1","font-bold text-right mt-[14px]"])},{default:t(()=>[o(n(s.type===1?l(r)("mine.option.Sell"):l(r)("mine.option.Buy")),1)]),_:2},1032,["class"]),e(a,{class:"line mt-[30px]"}),e(a,{class:"flex items-center justify-between mt-[20px]"},{default:t(()=>[e(a,{class:"flex flex-1 items-center justify-between"},{default:t(()=>[e(i,{class:"sub-title"},{default:t(()=>[o(n(l(r)("mine.option.amount")),1)]),_:1}),e(i,null,{default:t(()=>[o(n(s.quantity),1)]),_:2},1024)]),_:2},1024),e(a,{class:"flex flex-1 items-center justify-between ml-[50px]"},{default:t(()=>[e(i,{class:"sub-title"},{default:t(()=>[o(n(l(r)("mine.option.duration")),1)]),_:1}),e(i,null,{default:t(()=>[o(n(s.hold_time),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(a,{class:"flex items-center justify-between mt-[20px]"},{default:t(()=>[e(i,{class:"sub-title"},{default:t(()=>[o(n(l(r)("mine.option.HandlingFee")),1)]),_:1}),e(i,null,{default:t(()=>[o(n(s.all_fee),1)]),_:2},1024)]),_:2},1024),e(a,{class:"flex items-center justify-between mt-[20px] sub-title"},{default:t(()=>[e(i,null,{default:t(()=>[o(n(l(r)("mine.option.OrderTime")),1)]),_:1}),e(i,null,{default:t(()=>[o(n(s.created_at),1)]),_:2},1024)]),_:2},1024),s.status===1?(u(),f(a,{key:0,class:"flex items-center justify-between mt-[20px] sub-title"},{default:t(()=>[e(i,null,{default:t(()=>[o(n(l(r)("mine.option.SettlementTime")),1)]),_:1}),e(i,null,{default:t(()=>[o(n(s.sell_time),1)]),_:2},1024)]),_:2},1024)):B("v-if",!0),s.status===1?(u(),f(a,{key:1,class:"flex items-center justify-between mt-[20px] sub-title"},{default:t(()=>[e(i,null,{default:t(()=>[o(n(l(r)("mine.option.ProfitLoss")),1)]),_:1}),e(i,{class:"win"},{default:t(()=>[o(n(s.profit),1)]),_:2},1024)]),_:2},1024)):B("v-if",!0)]),_:2},1024))),128))]),_:1})):(u(),f(a,{key:1,class:"nodata"},{default:t(()=>[e(T,{class:"w-[340px] h-[340px]",src:ee})]),_:1}))]),_:1}))]),_:1})]),_:1})],64)}}});const fe=ae(le,[["__scopeId","data-v-575b4ac3"]]);export{fe as default};
