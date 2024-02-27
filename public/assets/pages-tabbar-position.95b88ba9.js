import{d as p,l as h,w as e,f as t,A as S,e as U,F as E,m as Z,O as N,J as F,j as o,t as i,i as G,x as K,v as X,S as Y,r as j,Q as ct,aa as ut,u as dt,a as ft,U as _t,o as pt,c as xt,g as mt,$ as O,h as q,k as s,Z as gt,_ as bt,n as ht,p as yt,D as kt,a5 as J,q as A}from"./index-fc527e32.js";import{_ as vt}from"./layout.6705feb1.js";import{_ as wt}from"./page-meta.2920e12b.js";import{c as St,_ as Bt}from"./device.7173e9a9.js";import{_ as Ct}from"./option.5b7bc5db.js";import{_ as Q}from"./icon-edit.4b477c18.js";import{_ as It}from"./icon-close-contract.7eb96a04.js";import{_ as $}from"./_plugin-vue_export-helper.c27b6911.js";const Nt="./static/images/icon-switch.png",Dt="./static/images/icon-withdraw.png",Tt="./static/images/icon-deposit.png",jt="./static/images/icon-order.png";const Ft={name:"fui-tabs",emits:["change"],props:{tabs:{type:Array,default(){return[]}},current:{type:Number,default:0},scroll:{type:Boolean,default:!1},height:{type:[Number,String],default:96},background:{type:String,default:"#fff"},size:{type:[Number,String],default:28},color:{type:String,default:""},fontWeight:{type:[Number,String],default:"normal"},selectedSize:{type:[Number,String],default:32},selectedColor:{type:String,default:""},selectedFontWeight:{type:[Number,String],default:500},scale:{type:[Number,String],default:1.2},badgeColor:{type:String,default:"#fff"},badgeBackground:{type:String,default:""},isDot:{type:Boolean,default:!1},isSlider:{type:Boolean,default:!0},sliderHeight:{type:[Number,String],default:5},sliderBackground:{type:String,default:""},sliderRadius:{type:[Number,String],default:-1},padding:{type:[Number,String],default:0},bottom:{type:[Number,String],default:0},short:{type:Boolean,default:!0},center:{type:Boolean,default:!1},isFixed:{type:Boolean,default:!1},isSticky:{type:Boolean,default:!1},top:{type:[Number,String],default:44},alignLeft:{type:Boolean,default:!1},direction:{type:String,default:"row"},zIndex:{type:[Number,String],default:996}},watch:{tabs(d){this.initData(d)},current(d,_){this.switchTab(d)}},created(){this.initData(this.tabs)},computed:{getSelectedColor(){return this.selectedColor},getSliderBgColor(){return this.sliderBackground},getBadgeBgColor(){return this.badgeBackground}},data(){return{vals:[],scrollInto:"",tabIndex:0,isNvue:!1}},methods:{getId(){return`fui_${Math.ceil(Math.random()*1e6).toString(36)}`},initData(d){d&&d.length>0&&(typeof d[0]=="object"?d.map(_=>{const l=this.getId();_.fui_s_id=l}):d=d.map(_=>{const l=this.getId();return{name:_,fui_s_id:l}}),this.vals=d,this.$nextTick(()=>{setTimeout(()=>{this.switchTab(this.current)},50)}))},switchTab(d){const _={...this.vals[d]};if(this.tabIndex===d||_.disabled)return;this.tabIndex=d;let l=d-1<0?0:d-1;this.scrollInto=this.vals[l].fui_s_id,delete _.fui_s_id,this.$emit("change",{index:d,..._})}}};function Ot(d,_,l,M,c,k){const B=G,z=K,P=X,R=Y;return p(),h(R,{class:S([{"fui-tabs__fixed":l.isFixed&&!l.isSticky,"fui-tabs__sticky":l.isSticky},"fui-tabs__scrollbox"]),"scroll-into-view":c.scrollInto,"scroll-with-animation":!0,"scroll-x":l.scroll,"show-scrollbar":!1,style:N({background:l.background,zIndex:l.isFixed||l.isSticky?l.zIndex:1,top:l.isFixed||l.isSticky?l.top+"px":"auto"})},{default:e(()=>[t(B,{class:S([{"fui-tabs__full":!l.alignLeft},"fui-scroll__view"])},{default:e(()=>[(p(!0),U(E,null,Z(c.vals,(x,b)=>(p(),h(B,{id:x.fui_s_id,key:b,class:S([{"fui-tabs__full":!l.alignLeft},"fui-tabs__item"]),onClick:V=>k.switchTab(b)},{default:e(()=>[t(B,{class:S([{"fui-tabs__wrap-disabled":x.disabled,"fui-tabs__item-column":l.direction==="column"&&x.icon},"fui-tabs__text-wrap"]),style:N({height:l.height+"rpx"})},{default:e(()=>[l.isSlider?(p(),h(B,{key:0,class:S([{"fui-tabs__line-center":l.center},"fui-tabs__line-wrap"]),style:N({bottom:l.bottom+"rpx",left:`-${l.padding}rpx`,right:`-${l.padding}rpx`})},{default:e(()=>[t(B,{class:S([{"fui-tabs__line-short":l.short,"fui-tabs__full":!l.short,"fui-tabs__slider-color":!k.getSliderBgColor},"fui-tabs__ac-line"]),style:N({height:l.sliderHeight+"rpx",background:k.getSliderBgColor,borderRadius:l.sliderRadius==-1?l.sliderHeight+"rpx":l.sliderRadius+"rpx",transform:`scale(${c.tabIndex===b?c.isNvue?1:l.scale:c.isNvue?1e-5:0})`})},null,8,["class","style"])]),_:2},1032,["class","style"])):F("v-if",!0),x.icon?(p(),h(z,{key:1,class:S([{"fui-tabs__icon-column":l.direction==="column"},"fui-tabs__icon"]),src:c.tabIndex===b&&x.selectedIcon?x.selectedIcon:x.icon},null,8,["class","src"])):F("v-if",!0),F("vue3中text嵌套text使用v-if会显示v-if文本"),t(B,{class:S([{"fui-tabs__selected-color":!k.getSelectedColor&&c.tabIndex===b,"fui-tabs__text-color":!l.color&&c.tabIndex!==b},"fui-tabs__text"]),style:N({fontSize:(c.tabIndex===b&&c.isNvue?l.selectedSize:l.size)+"rpx",color:c.tabIndex===b?k.getSelectedColor:l.color,fontWeight:c.tabIndex===b?l.selectedFontWeight:l.fontWeight,transform:`scale(${c.tabIndex===b&&!c.isNvue?l.scale:1})`})},{default:e(()=>[o(i(x.name)+" ",1),x.badge?(p(),h(P,{key:0,class:S({"fui-tabs__badge-color":!k.getBadgeBgColor,"fui-tabs__badge-dot":l.isDot,"fui-tabs__badge":!l.isDot}),style:N({color:l.badgeColor,background:k.getBadgeBgColor})},{default:e(()=>[o(i(l.isDot?"":x.badge),1)]),_:2},1032,["class","style"])):F("v-if",!0)]),_:2},1032,["class","style"])]),_:2},1032,["class","style"])]),_:2},1032,["id","class","onClick"]))),128))]),_:1},8,["class"])]),_:1},8,["class","scroll-into-view","scroll-x","style"])}const zt=$(Ft,[["render",Ot],["__scopeId","data-v-fbc38c0f"]]),I={market:St([{left:10,top:15,bottom:220,width:44,height:44,type:"round"},{left:58,right:365,top:12,bottom:220,width:104,height:19,type:"rect"},{left:58,right:365,top:46,bottom:220,width:148,height:19,type:"rect"},{left:206,right:365,top:14,bottom:220,width:90,height:19,type:"rect"},{left:340,right:365,top:14,bottom:220,width:40,height:19,type:"rect"},{left:364,right:365,top:46,bottom:220,width:16,height:19,type:"rect"}])};const Pt={__name:"position",setup(d){var W;const _=j(!1),l=j([]),M=(W=ht())==null?void 0:W.appContext.config.globalProperties.$wsUrl;let c=null;const k=ct(()=>l.value);function B(n){return{symbol:n,type:"price",language:"en_US"}}function z(n){c.send({data:JSON.stringify(B(n))})}ut(()=>{c.close()});async function P(){let n="";k.value.forEach(f=>{n+=`${f.market.symbol}.`}),n=n.substring(0,n.length-1),z(n)}function R(){c.send({data:JSON.stringify({type:"heartbeat",msg:"ping"})})}function x(){c!=null&&(R(),setTimeout(()=>{x()},3e3))}function b(n){const f=JSON.parse(n);f.ping?c.send({data:JSON.stringify({pong:f.ping})}):l.value.forEach(y=>{f.forEach(a=>{a.symbol===y.market.symbol&&(y.nowData=a)})})}async function V(){_.value=!0,c===null&&(c=mt({url:M,success:()=>{console.log("连接成功")}}),c.onOpen(()=>{P(),x()}),c.onMessage(n=>{_.value=!1,b(n.data)}))}const m=j({stop_surplus:0,stop_loss:0,id:null}),D=j(!1);function tt(n){m.value=n,D.value=!0}const{t:u}=dt();function et(){return[u("tabBar.position.Position"),u("tabBar.position.Entrust")]}const lt=ft();function H(n){yt({url:n})}const v=j({page:1,max:1,status:1});function at(n){console.log(n),_.value=!0,n.index===0?v.value.status=1:v.value.status=0,v.value.page=1,T()}function L(n){kt({title:n,icon:"none"})}function st(){if(v.value.page>=v.value.max){L(u("tabBar.position.NoMoreData"));return}v.value.page++,T()}_t(()=>{st()});function T(){O.get("/market/contract_order_history",v.value).then(n=>{v.value.max=n.data.last_page;const f=n.data.data.map(y=>(y.show_detail=!1,y.market.logo=O.staticUrl(y.market.logo),y.nowData={},y));v.value.page===1?l.value=f:l.value=l.value.concat(f),_.value=!1})}pt(()=>{c.close(),c=null}),xt(async()=>{await T(),await V()});function ot(){J({title:u("tabBar.position.prompt"),content:u("tabBar.position.closingThePosition"),success:n=>{n.confirm&&O.post("/market/hand_close_contract",{id:m.value.id}).then(()=>{L(u("tabBar.position.ClosedPositionSuccessfully")),D.value=!1,T()})}})}function it(){J({title:u("tabBar.position.prompt"),content:u("tabBar.position.cancelThePendingOrder"),success:n=>{n.confirm&&O.post("/market/hand_cancel_contract",{id:m.value.id}).then(()=>{L(u("tabBar.position.orderSucceededProcedure")),D.value=!1,T()})}})}return(n,f)=>{const y=q(A("page-meta"),wt),a=G,w=K,r=X,nt=Y,C=q(A("fui-skeleton"),Bt),rt=vt;return p(),U(E,null,[t(y),t(a,{class:"init-top"}),t(rt,{"class-name":"IndexRouter"},{default:e(()=>[t(a,{class:"card-wrap text-white"},{default:e(()=>[t(a,{class:"flex justify-end"},{default:e(()=>[t(a,{class:"btn-account flex items-center justify-center"},{default:e(()=>[t(w,{class:"w-[23px] h-[21px]",src:Nt}),t(r,{class:"text-[24px] scale-90"},{default:e(()=>[o(i(s(u)("tabBar.position.RealAccount")),1)]),_:1})]),_:1})]),_:1}),t(a,{class:"flex flex-col px-[40px] pt-[18px]"},{default:e(()=>[t(r,{class:"text-[34px] leading-[48px]"},{default:e(()=>[o(i(s(u)("tabBar.position.TotalAccountValue")),1)]),_:1}),t(r,{class:"text-[68px] font-bold leading-[98px]"},{default:e(()=>[o(i(s(lt).userInfo.balance),1)]),_:1}),t(r,{class:"text-[22px] font-bold leading-[32px]"},{default:e(()=>[o(i(s(u)("tabBar.position.FreezeFunds"))+" : 0 ",1)]),_:1}),t(a,{class:"flex items-center justify-between mt-[20px]"},{default:e(()=>[t(a,{class:"flex items-center"},{default:e(()=>[t(a,{class:"flex items-center justify-center h-[52px] btn-amount",onClick:f[0]||(f[0]=g=>H("/pages/position/withdraw"))},{default:e(()=>[t(w,{class:"w-[52px] h-[52px]",src:Dt}),t(r,{class:"ml-[19px] text-[26px] font-bold"},{default:e(()=>[o(i(s(u)("tabBar.position.Withdraw")),1)]),_:1})]),_:1}),t(a,{class:"flex items-center justify-center h-[52px] btn-amount ml-[20px]",onClick:f[1]||(f[1]=g=>H("/pages/position/deposit"))},{default:e(()=>[t(w,{class:"w-[52px] h-[52px]",src:Tt}),t(r,{class:"ml-[19px] text-[26px] font-bold"},{default:e(()=>[o(i(s(u)("tabBar.position.Deposit")),1)]),_:1})]),_:1})]),_:1}),t(w,{class:"w-[28px] h-[31px]",src:jt,onClick:f[2]||(f[2]=g=>H("/pages/position/record"))})]),_:1})]),_:1})]),_:1}),t(a,{class:"mt-[40px] px-[34px]"},{default:e(()=>[t(zt,{short:!1,tabs:et(),color:"#8C8C8C","selected-color":"#000","slider-background":"#000",onChange:at},null,8,["tabs"])]),_:1}),F(` <view v-if="loading" class="mt-[36px]">
            <FuiLoading :is-fixed="false" :loading="loading" type="row" />
        </view> `),t(a,{class:"px-[34px] pt-[20px]"},{default:e(()=>[s(_)?(p(),h(a,{key:1},{default:e(()=>[t(a,{class:"market-skeleton mt-[20px] relative h-[124px]"},{default:e(()=>[t(C,{"preload-list":s(I).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1}),t(a,{class:"market-skeleton mt-[20px] relative h-[124px]"},{default:e(()=>[t(C,{"preload-list":s(I).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1}),t(a,{class:"market-skeleton mt-[20px] relative h-[124px]"},{default:e(()=>[t(C,{"preload-list":s(I).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1}),t(a,{class:"market-skeleton mt-[20px] relative h-[124px]"},{default:e(()=>[t(C,{"preload-list":s(I).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1}),t(a,{class:"market-skeleton mt-[20px] relative h-[124px]"},{default:e(()=>[t(C,{"preload-list":s(I).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1}),t(a,{class:"market-skeleton mt-[20px] relative h-[124px]"},{default:e(()=>[t(C,{"preload-list":s(I).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1}),t(a,{class:"market-skeleton mt-[20px] relative h-[124px]"},{default:e(()=>[t(C,{"preload-list":s(I).market,"outer-class":"market-skeleton"},null,8,["preload-list"])]),_:1})]),_:1})):(p(),h(a,{key:0},{default:e(()=>[s(l).length>0?(p(),h(nt,{key:0,"scroll-x":""},{default:e(()=>[(p(!0),U(E,null,Z(s(l),g=>(p(),h(a,{key:g.id,class:"h-[120px] mt-[20px] p-[20px] bg-[#f5f7f9] rounded-[30px]",onClick:Rt=>tt(g)},{default:e(()=>[t(a,{class:"flex flex-row"},{default:e(()=>[t(w,{src:g.market.logo,class:"rounded-full w-[72px] h-[72px]"},null,8,["src"]),t(a,{class:"flex-1 ml-[12px]"},{default:e(()=>[t(a,{class:"grid items-center col"},{default:e(()=>[t(a,{class:"flex items-center"},{default:e(()=>[t(r,{class:"text-[30px]"},{default:e(()=>[o(i(g.market.full_name),1)]),_:2},1024),t(r,{class:"lever ml-[14px] text-[20px]"},{default:e(()=>[o(" x"+i(g.lever),1)]),_:2},1024)]),_:2},1024),t(r,{class:"hands text-[22px] h-[32px] grid place-items-center text-center"},{default:e(()=>[o(i(g.quantity),1)]),_:2},1024),t(r,{class:"text-[28px] text-right text-red"},{default:e(()=>[o("-6.61")]),_:1})]),_:2},1024),t(a,{class:"flex mt-[20px] items-center justify-between"},{default:e(()=>[t(a,{class:"flex items-center text-[22px]"},{default:e(()=>[t(r,null,{default:e(()=>[o(i(g.paid_price)+" -",1)]),_:2},1024),t(r,{class:"red-text"},{default:e(()=>[o("> "+i(g.nowData.close),1)]),_:2},1024)]),_:2},1024),t(a,{class:"font-bold text-[22px]"},{default:e(()=>[o(i(g.type===1?s(u)("tabBar.position.Buy"):s(u)("tabBar.position.Sell")),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})):(p(),h(a,{key:1,class:"nodata"},{default:e(()=>[t(w,{class:"w-[340px] h-[340px]",src:Ct})]),_:1}))]),_:1}))]),_:1}),gt(t(a,{class:"order-wrap"},{default:e(()=>[t(a,{class:"detail pt-[28px]"},{default:e(()=>[t(a,{class:"income-wrap flex flex-col items-center justify-center bg-[#f5f7f9]"},{default:e(()=>[t(r,{class:"detail-lever px-[30px] text-[22px]"},{default:e(()=>[o("x"+i(s(m).lever),1)]),_:1}),t(r,{class:"text-[76px] font-bold green-text my-[20px]"},{default:e(()=>[o(" 1730 ")]),_:1}),t(r,{class:"text-[22px]"},{default:e(()=>[o(i(s(u)("tabBar.position.marketPrice")),1)]),_:1})]),_:1}),t(a,{class:"stop-wrap p-[30px] bg-[#f5f7f9]"},{default:e(()=>[t(a,{class:"row"},{default:e(()=>[t(a,{class:"flex items-center"},{default:e(()=>[t(r,null,{default:e(()=>[o(i(s(m).paid_price)+" -",1)]),_:1}),t(r,{class:"green-text"},{default:e(()=>[o("> 1.27532")]),_:1})]),_:1}),t(r,{class:"hands text-[22px]"},{default:e(()=>[o(i(s(m).quantity),1)]),_:1}),t(r,{class:"font-bold text-[22px] text-right"},{default:e(()=>[o(i(s(m).type===1?s(u)("tabBar.position.Buy"):s(u)("tabBar.position.Sell")),1)]),_:1})]),_:1}),t(a,{class:"flex items-center justify-between mt-[18px]"},{default:e(()=>[t(r,null,{default:e(()=>[o(i(s(u)("tabBar.position.StopSurplus")),1)]),_:1}),t(a,{class:"flex items-center"},{default:e(()=>[t(r,{class:"mr-[20px]"},{default:e(()=>[o(i(s(m).stop_surplus),1)]),_:1}),t(w,{class:"w-[36px] h-[36px]",src:Q})]),_:1})]),_:1}),t(a,{class:"flex items-center justify-between mt-[18px]"},{default:e(()=>[t(r,null,{default:e(()=>[o(i(s(u)("tabBar.position.StopLoss")),1)]),_:1}),t(a,{class:"flex items-center"},{default:e(()=>[t(r,{class:"mr-[20px]"},{default:e(()=>[o(i(s(m).stop_loss),1)]),_:1}),t(w,{class:"w-[36px] h-[36px]",src:Q})]),_:1})]),_:1})]),_:1}),t(a,{class:"group sub-title"},{default:e(()=>[t(a,{class:"flex items-center justify-between text-[26px]"},{default:e(()=>[t(r,null,{default:e(()=>[o(i(s(u)("tabBar.position.SecurityDeposit")),1)]),_:1}),t(r,null,{default:e(()=>[o(i(s(m).assure),1)]),_:1})]),_:1}),t(a,{class:"flex items-center justify-between text-[22px] mt-[15px]"},{default:e(()=>[t(r,null,{default:e(()=>[o(i(s(u)("tabBar.position.OrderNumber")),1)]),_:1}),t(r,null,{default:e(()=>[o(i(s(m).order_num),1)]),_:1})]),_:1}),t(a,{class:"mt-[120px] flex items-center justify-between text-[22px] text-black"},{default:e(()=>[t(r,null,{default:e(()=>[o(i(s(u)("tabBar.position.OrderTime")),1)]),_:1}),t(r,null,{default:e(()=>[o(i(s(m).created_at),1)]),_:1})]),_:1})]),_:1}),s(m).status===1?(p(),h(a,{key:0,class:"btn flex items-center justify-center text-[30px] h-[85px] bg-black rounded-[40px]",onClick:ot},{default:e(()=>[t(r,{class:"font-bold text-white"},{default:e(()=>[o(i(s(u)("tabBar.position.ClosePsition")),1)]),_:1})]),_:1})):(p(),h(a,{key:1,class:"btn flex items-center justify-center text-[30px] h-[85px] bg-black rounded-[40px]",onClick:it},{default:e(()=>[o(i(s(u)("tabBar.position.TakeTheCancellationOrder")),1)]),_:1})),t(w,{class:"w-[88px] h-[88px] close-btn",src:It,onClick:f[3]||(f[3]=g=>D.value=!1)})]),_:1})]),_:1},512),[[bt,s(D)]])]),_:1})],64)}}},Jt=$(Pt,[["__scopeId","data-v-45340825"]]);export{Jt as default};
