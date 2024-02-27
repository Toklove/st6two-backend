import{a0 as h,a4 as b,d as l,l as d,w as u,e as g,F as y,m as p,A as S,O as n,f,j as x,t as I,i as _}from"./index-fcbdad1f.js";import{_ as B}from"./_plugin-vue_export-helper.c27b6911.js";const C={name:"USubsection",props:{list:{type:Array,default(){return[]}},value:{type:[String,Number],default:0},modelValue:{type:[String,Number],default:0},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1},offset:{type:Array,default(){return[0,0]}}},emits:["change","update:modelValue","input"],data(){return{itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0,listInfo:[]}},computed:{valueCom(){return this.modelValue},noBorderRight(){return t=>{if(this.mode!="subsection")return;let e="";return t<this.list.length-1&&(e+=" u-none-border-right"),t==0&&(e+=" u-item-first"),t==this.list.length-1&&(e+=" u-item-last"),e}},textStyle(){return t=>{const e={};return this.mode=="subsection"?t==this.currentIndex?e.color="#ffffff":e.color=this.activeColor:t==this.currentIndex?e.color=this.activeColor:e.color=this.inactiveColor,t==this.currentIndex&&this.bold&&(e.fontWeight="bold"),e.fontSize=`${this.fontSize}rpx`,e}},itemStyle(){return t=>{const e={};return this.mode=="subsection"&&(e.borderColor=this.activeColor,e.borderWidth="1px",e.borderStyle="solid"),e}},subsectionStyle(){const t={};return t.height=`${h(this.height)}px`,this.mode=="button"&&(t.backgroundColor=this.bgColor,t.padding=`${this.buttonPadding}px`,t.borderRadius=`${this.borderRadius}px`),t},itemBarStyle(){const t={};return t.backgroundColor=this.activeColor,t.zIndex=1,this.mode=="button"&&(t.backgroundColor=this.buttonColor,t.borderRadius=`${this.borderRadius}px`,t.bottom=`${this.buttonPadding}px`,t.height=`${h(this.height)-this.buttonPadding*2}px`,t.zIndex=0),Object.assign(this.itemBgStyle,t)}},watch:{valueCom:{immediate:!0,handler(t){t||(t=0),this.currentIndex=t,this.changeSectionStatus(t)}},current:{immediate:!0,handler(t){t||(t=this.valueCom||0),this.currentIndex=t,this.changeSectionStatus(t)}},list:{deep:!0,handler(t=[]){this.listInfoFn(),setTimeout(()=>{this.getTabsInfo()},10)}}},mounted(){this.listInfoFn(),setTimeout(()=>{this.getTabsInfo()},10)},methods:{listInfoFn(){return this.listInfo=this.list.map((t,e)=>typeof t!="object"?{width:0,name:t}:t),this.listInfo},changeSectionStatus(t){this.mode=="subsection"&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius=`0 ${this.buttonPadding}px ${this.buttonPadding}px 0`),t==0&&(this.itemBgStyle.borderRadius=`${this.buttonPadding}px 0 0 ${this.buttonPadding}px`),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout(()=>{this.itemBgLeft()},10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)),this.$emit("input",Number(t)),this.$emit("update:modelValue",Number(t)))},getTabsInfo(){const t=b().in(this);for(let e=0;e<this.list.length;e++)t.select(`.u-item-${e}`).boundingClientRect();t.exec(e=>{e.length||setTimeout(()=>{this.getTabsInfo()},10),e.map((r,a)=>{this.listInfo[a].width=r.width}),this.mode=="subsection"?this.itemBgStyle.width=`${this.listInfo[0].width}px`:this.mode=="button"&&(this.itemBgStyle.width=`${this.listInfo[0].width}px`),this.itemBgLeft()})},itemBgLeft(){this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";let t=0;this.listInfo.map((e,r)=>{r<this.currentIndex&&(t+=e.width)}),this.mode=="subsection"?this.itemBgStyle.left=`${t}px`:this.mode=="button"&&(this.itemBgStyle.left=`${t+this.buttonPadding}px`)}}};function $(t,e,r,a,c,i){const o=_;return l(),d(o,{style:n([i.subsectionStyle]),class:"u-subsection"},{default:u(()=>[(l(!0),g(y,null,p(c.listInfo,(m,s)=>(l(),d(o,{key:s,class:S([[i.noBorderRight(s),`u-item-${s}`],"u-item u-line-1"]),style:n([i.itemStyle(s)]),onClick:v=>i.click(s)},{default:u(()=>[f(o,{style:n([i.textStyle(s)]),class:"u-item-text u-line-1"},{default:u(()=>[x(I(m.name),1)]),_:2},1032,["style"])]),_:2},1032,["class","style","onClick"]))),128)),f(o,{style:n([i.itemBarStyle]),class:"u-item-bg"},null,8,["style"])]),_:1},8,["style"])}const T=B(C,[["render",$],["__scopeId","data-v-a6928610"]]);export{T as U};
