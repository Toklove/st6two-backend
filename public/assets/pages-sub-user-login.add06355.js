import{av as Ee,aw as ie,Q as b,n as pe,a4 as yt,C as J,d as j,l as z,w as F,N as W,A as k,k as p,O as Z,M as H,i as ae,r as L,ax as te,ay as ge,al as pt,J as V,f as A,az as re,aA as gt,aB as U,aC as Qe,E as me,b as Ie,ak as Xe,aD as ht,X as bt,aE as vt,j as ye,t as De,a as _t,z as M,V as Ve,R as xt,K as wt,aF as be,$ as Ne,ab as St,L as Re,G as ke,a9 as Be,am as $t,x as Ct,v as Ft,aG as qt,ao as Et}from"./index-fc527e32.js";import{r as It,b as Ot,c as Pt,e as At,f as Dt,g as Vt,I as Nt,h as Rt,M as kt,i as Q,u as le,j as Bt,k as fe,m as R,T as He,n as Tt,o as jt,p as Ye,q as we,s as zt,t as Lt,l as Mt,_ as Wt,d as Ut}from"./layout.6705feb1.js";import{_ as ce}from"./_plugin-vue_export-helper.c27b6911.js";import{r as Te}from"./use-router.313bd280.js";import{u as Kt}from"./vue.f36acd1f.c510b69a.js";const K=(e,t=void 0)=>e==null?t:e,je=(e,t,n=void 0)=>K(e,K(t,n)),Zt=(e,t)=>{if(e.install=n=>{for(const s of[e,...Object.values(K(t,{}))])n.component(s.name,s)},t)for(const[n,s]of Object.entries(t))e[n]=s;return e},Ge=e=>(e.install=()=>{},e);function et(e){return e!=null&&typeof e=="object"}const Jt=Object.prototype,tt=Jt.toString,Qt="[object Boolean]";function oe(e){return e===!0||e===!1||et(e)&&tt.call(e)==Qt}const Xt="[object Number]";function ze(e){return typeof e=="number"||et(e)&&tt.call(e)==Xt}function nt(e,t){if(Array.isArray(e))return!1;const n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Ee(e)?!0:It.test(e)||!Ot.test(e)||t!=null&&e in Object(t)}function Ht(e){return e==null?"":Pt(e)}const Yt=function(e){e=Ht(e);const t=[];return At.test(e)&&t.push(""),e.replace(Dt,(n,s,i,r)=>(t.push(i?r.replace(Vt,"$1"):s||n),"")),t};function st(e){return Array.isArray(e)?e:Yt(e)}function it(e){if(typeof e=="string"||Ee(e))return e;const t=`${e}`;return t=="0"&&1/e==-Nt?"-0":t}function Gt(e,t){t=nt(t,e)?[t]:st(t);let n=0;const s=t.length;for(;e!=null&&n<s;)e=e[it(t[n++])];return n&&n==s?e:void 0}function en(e,t,n){const s=e==null?void 0:Gt(e,t);return s===void 0?n:s}function tn(e,t){return t=t==null?kt:t,!!t&&(typeof e=="number"||Rt.test(e))&&e>-1&&e%1==0&&e<t}function nn(e,t){return e===t||e!==e&&t!==t}const sn=Object.prototype,rn=sn.hasOwnProperty;function on(e,t,n){const s=e[t];(!(rn.call(e,t)&&nn(s,n))||n===void 0&&!(t in e))&&(e[t]=n)}function an(e,t,n,s){if(!ie(e))return e;t=nt(t,e)?[t]:st(t);let i=-1;const r=t.length,a=r-1;let o=e;for(;o!=null&&++i<r;){const m=it(t[i]);let f=n;if(i!=a){const u=o[m];f=s?s(u,m,o):void 0,f===void 0&&(f=ie(u)?u:tn(t[i+1])?[]:{})}on(o,m,f),o=o[m]}return e}function ln(e,t,n){return e==null?e:an(e,t,n)}const Le=0/0,cn=/^\s+|\s+$/g,dn=/^0b[01]+$/i,un=/^0o[0-7]+$/i,fn=/^[-+]0x[0-9a-f]+$/i;function Me(e){if(typeof e=="number")return e;if(Ee(e))return Le;if(ie(e)){const n=typeof e.valueOf=="function"?e.valueOf():e;e=ie(n)?`${n}`:n}if(typeof e!="string")return e===0?e:+e;e=e.replace(cn,"");const t=dn.test(e);return t||un.test(e)?Number.parseInt(e.slice(2),t?2:8):fn.test(e)?Le:+e}const mn="Expected a function";function yn(e,t,n){let s,i,r,a,o,m,f=0,u=!1,l=!1,c=!0;if(typeof e!="function")throw new TypeError(mn);t=Me(t)||0,ie(n)&&(u=!!n.leading,l="maxWait"in n,r=l?Math.max(Me(n.maxWait)||0,t):r,c="trailing"in n?!!n.trailing:c);function d($){const I=s,B=i;return s=i=void 0,f=$,a=e.apply(B,I),a}function v($){return f=$,o=setTimeout(S,t),u?d($):a}function g($){const I=$-m,B=$-f,D=t-I;return l?Math.max(D,r-B):D}function w($){const I=$-m,B=$-f;return m===void 0||I>=t||I<0||l&&B>=r}function S(){const $=Date.now();if(w($))return _($);o=setTimeout(S,g($))}function _($){return o=void 0,c&&s?d($):(s=i=void 0,a)}function y(){o!==void 0&&clearTimeout(o),f=0,s=m=i=o=void 0}function N(){return o===void 0?a:_(Date.now())}function E(){const $=Date.now(),I=w($);if(s=arguments,i=this,m=$,I){if(o===void 0)return v(m);if(l)return o=setTimeout(S,t),d(m)}return o===void 0&&(o=setTimeout(S,t)),a}return E.cancel=y,E.flush=N,E}function Se(e){return!e||Array.isArray(e)&&!e.length?[]:Array.isArray(e)?e:[e]}const ve=(e,t,n)=>({get value(){return en(e,t,n)},set value(s){ln(e,t,s)}}),ne=(e,t=new WeakMap)=>{if(e===null||typeof e!="object")return e;if(t.has(e))return t.get(e);if(Array.isArray(e)){const i=e.map(r=>ne(r,t));return t.set(e,i),i}if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp){const i=e.flags;return new RegExp(e.source,i)}const n={};t.set(e,n);for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=ne(e[i],t));const s=Object.getPrototypeOf(e);return Object.setPrototypeOf(n,ne(s,t)),n},he="update:modelValue",rt="change",ot={navbar:20090,tabbar:20090,modal:20076,popup:20075,notify:20074,sticky:10030,bubble:10020,mask:9999},at=e=>{const t=pe();return b(()=>{var n;return K((n=t==null?void 0:t.proxy)==null?void 0:n.$props)[e]})},pn=e=>{let t=null;return e||(e=pe()),t=yt().in(e),{query:t,getSelectorNodeInfo:i=>new Promise((r,a)=>{t?t.select(i).boundingClientRect(o=>{const m=o;m?r(m):a(new Error(`未找到对应节点: ${i}`))}).exec():a(new Error("未找到对应的SelectorQuery实例"))}),getSelectorNodeInfos:i=>new Promise((r,a)=>{t?t.selectAll(i).boundingClientRect(o=>{const m=o;m&&m.length>0?r(m):a(new Error(`未找到对应节点: ${i}`))}).exec():a(new Error("未找到对应的SelectorQuery实例"))})}},lt=Q({show:{type:Boolean,default:!1},duration:{type:Number,default:300},opacity:{type:Number,default:.5},zIndex:{type:Number,default:ot.mask}}),gn={"update:show":e=>oe(e),click:()=>!0},hn=(e,t)=>{const n=le("overlay"),s=b(()=>{const a=[n.b()];return e.show&&a.push(n.m("show")),a.join(" ")}),i=b(()=>{const a={};return a.transitionDuration=`${K(e.duration,300)}ms`,a.backgroundColor=`rgba(0, 0, 0, ${K(e.opacity,.5)})`,e.zIndex&&(a.zIndex=e.zIndex),a});return{ns:n,overlayClass:s,overlayStyle:i,overlayClick:()=>{t("update:show",!1),t("click")}}},bn=J({__name:"overlay",props:lt,emits:gn,setup(e,{emit:t}){const n=e,{overlayClass:s,overlayStyle:i,overlayClick:r}=hn(n,t);return(a,o)=>{const m=ae;return j(),z(m,{class:k([p(s)]),style:Z(p(i)),onClick:H(p(r),["stop"]),onTouchmove:o[0]||(o[0]=H(()=>{},["stop","prevent"]))},{default:F(()=>[W(a.$slots,"default",{},void 0,!0)]),_:3},8,["class","style","onClick"])}}});const ct=ce(bn,[["__scopeId","data-v-58bad6d9"]]);Ge(ct);const vn=["top","bottom","left","right","center"],_n=["left-top","right-top","left-bottom","right-bottom"],xn=Q({modelValue:Boolean,openDirection:{type:String,values:vn,default:"center"},width:{type:[String,Number]},height:{type:[String,Number]},bgColor:{type:String,default:"#fff"},radius:{type:[String,Number],default:15},overlay:{type:Boolean,default:!0},overlayOpacity:lt.opacity,overlayCloseable:{type:Boolean,default:!0},closeBtn:Boolean,closeBtnPosition:{type:String,values:_n,default:"right-top"},safeAreaInsetBottom:Bt,zIndex:{type:Number,default:ot.popup},top:{type:[String,Number]}}),wn={[he]:e=>oe(e),open:()=>!0,close:()=>!0},dt=e=>{const{emit:t}=pe(),n=L(!1),s=L(!1),i=L(!1);te(()=>e.modelValue,u=>{u?(i.value=!0,s.value=!0,e.overlay&&(n.value=!0),t("open")):(s.value=!1,n.value=!1,setTimeout(()=>{i.value=!1},250),t("close"))},{immediate:!0});const r=b(()=>Number(e.zIndex)),a=b(()=>r.value-1),o=u=>{t(he,u),ge(()=>{t(u?"open":"close")})};return{showOverlay:n,showPopup:s,visiblePopup:i,zIndex:r,overlayZIndex:a,updateModelValue:o,onClickCloseBtn:()=>{o(!1)},onClickOverlay:()=>{e.overlayCloseable&&o(!1)}}},Sn=e=>{const t=le("popup"),{zIndex:n}=dt(e),[s,i]=fe(pt(e,"bgColor"),"bg"),r=b(()=>{const o=[t.e("content")];return e.openDirection&&o.push(t.em("content",e.openDirection)),e.openDirection==="bottom"&&e.safeAreaInsetBottom&&o.push("tn-u-safe-area"),s.value&&o.push(s.value),o.join(" ")}),a=b(()=>{const o={};return i.value&&(o.backgroundColor=i.value),e.radius&&(o.overflow="hidden",e.openDirection==="center"&&(o.borderRadius=R(e.radius)),e.openDirection==="top"&&(o.borderBottomLeftRadius=R(e.radius),o.borderBottomRightRadius=R(e.radius)),e.openDirection==="left"&&(o.borderTopRightRadius=R(e.radius),o.borderBottomRightRadius=R(e.radius)),e.openDirection==="right"&&(o.borderTopLeftRadius=R(e.radius),o.borderBottomLeftRadius=R(e.radius)),e.openDirection==="bottom"&&(o.borderTopLeftRadius=R(e.radius),o.borderTopRightRadius=R(e.radius))),e.top&&(e.openDirection==="top"||e.openDirection==="left"||e.openDirection==="right")&&(o.top=R(e.top,"px")),e.width&&(e.openDirection==="left"||e.openDirection==="right"||e.openDirection==="center")&&(o.width=R(e.width)),e.height&&(e.openDirection==="top"||e.openDirection==="bottom"||e.openDirection==="center")&&(o.height=R(e.height)),(e.openDirection==="left"||e.openDirection==="right")&&e.top&&(o.height=`calc(100% - ${R(e.top,"px")})`),o.zIndex=n.value,o});return{ns:t,popupContentClass:r,popupContentStyle:a}},$n=J({__name:"popup",props:xn,emits:wn,setup(e){const t=e,{showOverlay:n,showPopup:s,visiblePopup:i,overlayZIndex:r,zIndex:a,onClickCloseBtn:o,onClickOverlay:m}=dt(t),{ns:f,popupContentClass:u,popupContentStyle:l}=Sn(t);return(c,d)=>{const v=ae;return j(),z(v,{class:k([p(f).b(),p(f).is("show",p(s)),p(f).is("visible",p(i))]),style:Z({zIndex:p(a)})},{default:F(()=>[V(" 遮罩层 "),A(ct,{show:p(n),"z-index":p(r),opacity:c.overlayOpacity,onClick:p(m)},null,8,["show","z-index","opacity","onClick"]),V(" 弹框内容 "),A(v,{class:k([p(u)]),style:Z(p(l))},{default:F(()=>[W(c.$slots,"default",{},void 0,!0),V(" 关闭按钮 "),c.closeBtn?(j(),z(v,{key:0,class:k([p(f).e("close-btn"),p(f).em("close-btn",c.closeBtnPosition)]),onClick:H(p(o),["stop"])},{default:F(()=>[W(c.$slots,"closeBtn",{},()=>[A(He,{name:"close"})],!0)]),_:3},8,["class","onClick"])):V("v-if",!0)]),_:3},8,["class","style"])]),_:3},8,["class","style"])}}});const Cn=ce($n,[["__scopeId","data-v-72968d23"]]),Fn=["square","circle"],qn=Q({size:Tt,checkedShape:{type:String,values:Fn},disabled:Boolean,labelDisabled:Boolean,border:Boolean,activeColor:{type:String,default:""}}),En=Q({...qn,modelValue:{type:[String,Number,Boolean],default:void 0},label:{type:[String,Number]},indeterminate:Boolean,activeValue:{type:[String,Number,Boolean],default:!0},inactiveValue:{type:[String,Number,Boolean],default:!1},customStyle:jt,customClass:String,validateEvent:{type:Boolean,default:!0}}),In={[he]:e=>re(e)||ze(e)||oe(e),[rt]:e=>re(e)||ze(e)||oe(e)},On=Symbol("checkboxGroupKey"),Y=Symbol("formContextKey"),Oe=Symbol("formItemContextKey"),Pn=Q({size:{type:String,values:Ye},disabled:Boolean}),An=Q({...Pn,model:Object,rules:{type:we([Object,Array])},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:Boolean}),Dn={validate:(e,t,n)=>(gt(e)||re(e))&&oe(t)&&re(n)},Vn=()=>{const e=le("form");return{formClass:b(()=>[e.b()].join(" "))}},Pe=(e,t={})=>{const n=L(void 0),s=t.prop?n:at("size"),i=t.form?{size:void 0}:U(Y,void 0),r=t.formItem?{size:void 0}:U(Oe,void 0);return b(()=>s.value||p(e)||(r==null?void 0:r.size)||(i==null?void 0:i.size)||"")},Nn=e=>{const t=at("disabled"),n=U(Y,void 0);return b(()=>t.value||p(e)||(n==null?void 0:n.disabled)||!1)},Rn=(e,t,n)=>{const s=U(Y,void 0),i=le("form-item"),r=Pe(void 0,{formItem:!1}),{getSelectorNodeInfo:a}=pn(),o=b(()=>R(e.labelWidth||(s==null?void 0:s.labelWidth)||"")),m=b(()=>e.labelPosition||(s==null?void 0:s.labelPosition)||"right"),f=b(()=>(s==null?void 0:s.hideRequiredAsterisk)||!1),u=b(()=>(s==null?void 0:s.requireAsteriskPosition)||"left"),l=L(0),c=`label-${zt()}`,d=()=>{t.value&&a(`#${c}`).then(_=>{l.value=(_==null?void 0:_.width)||0})},v=b(()=>{const _=[i.b()];return r.value&&_.push(i.m(r.value)),m.value&&_.push(i.m(`label-${m.value}`)),_.join(" ")}),g=b(()=>{const _=[i.e("label")];return!f.value&&n.value&&_.push(i.em("label","required"),i.em("label",`asterisk-${u.value}`)),_.join(" ")}),w=b(()=>{const _={};return m.value!=="top"&&o.value&&(_.width=o.value),_}),S=b(()=>{const _={};return m.value!=="top"&&t.value&&(_.paddingLeft=`${l.value}px`),_});return{ns:i,labelId:c,formItemClass:v,formItemLabelClass:g,formItemLabelStyle:w,formItemErrorMessageStyle:S,initLabelContainerWidth:d}},kn=()=>{const e=U(Y,void 0),t=U(Oe,void 0);return{form:e,formItem:t}},Bn=/%[sdj%]/g;let Tn=()=>{};typeof process!="undefined"&&process.env;function $e(e){if(!e||!e.length)return null;const t={};return e.forEach(n=>{const s=n.field;t[s]=t[s]||[],t[s].push(n)}),t}function T(e,...t){let n=0;const s=t.length;return typeof e=="function"?e.apply(null,t):typeof e=="string"?e.replace(Bn,r=>{if(r==="%%")return"%";if(n>=s)return r;switch(r){case"%s":return String(t[n++]);case"%d":return Number(t[n++]);case"%j":try{return JSON.stringify(t[n++])}catch(a){return"[Circular]"}break;default:return r}}):e}function jn(e){return e==="string"||e==="url"||e==="hex"||e==="email"||e==="date"||e==="pattern"}function q(e,t){return!!(e==null||t==="array"&&Array.isArray(e)&&!e.length||jn(t)&&typeof e=="string"&&!e)}function zn(e,t,n){const s=[];let i=0;const r=e.length;function a(o){s.push(...o||[]),i++,i===r&&n(s)}e.forEach(o=>{t(o,a)})}function We(e,t,n){let s=0;const i=e.length;function r(a){if(a&&a.length){n(a);return}const o=s;s=s+1,o<i?t(e[o],r):n([])}r([])}function Ln(e){const t=[];return Object.keys(e).forEach(n=>{t.push(...e[n]||[])}),t}class Ue extends Error{constructor(t,n){super("Async Validation Error"),this.errors=t,this.fields=n}}function Mn(e,t,n,s,i){if(t.first){const l=new Promise((c,d)=>{const v=w=>(s(w),w.length?d(new Ue(w,$e(w))):c(i)),g=Ln(e);We(g,n,v)});return l.catch(c=>c),l}const r=t.firstFields===!0?Object.keys(e):t.firstFields||[],a=Object.keys(e),o=a.length;let m=0;const f=[],u=new Promise((l,c)=>{const d=v=>{if(f.push.apply(f,v),m++,m===o)return s(f),f.length?c(new Ue(f,$e(f))):l(i)};a.length||(s(f),l(i)),a.forEach(v=>{const g=e[v];r.indexOf(v)!==-1?We(g,n,d):zn(g,n,d)})});return u.catch(l=>l),u}function Wn(e){return!!(e&&e.message!==void 0)}function Un(e,t){let n=e;for(let s=0;s<t.length;s++){if(n==null)return n;n=n[t[s]]}return n}function Ke(e,t){return n=>{let s;return e.fullFields?s=Un(t,e.fullFields):s=t[n.field||e.fullField],Wn(n)?(n.field=n.field||e.fullField,n.fieldValue=s,n):{message:typeof n=="function"?n():n,fieldValue:s,field:n.field||e.fullField}}}function Ze(e,t){if(t){for(const n in t)if(t.hasOwnProperty(n)){const s=t[n];typeof s=="object"&&typeof e[n]=="object"?e[n]={...e[n],...s}:e[n]=s}}return e}const ut=(e,t,n,s,i,r)=>{e.required&&(!n.hasOwnProperty(e.field)||q(t,r||e.type))&&s.push(T(i.messages.required,e.fullField))},Kn=(e,t,n,s,i)=>{(/^\s+$/.test(t)||t==="")&&s.push(T(i.messages.whitespace,e.fullField))};let ue;const Zn=()=>{if(ue)return ue;const e="[a-fA-F\\d:]",t=y=>y&&y.includeBoundaries?`(?:(?<=\\s|^)(?=${e})|(?<=${e})(?=\\s|$))`:"",n="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",s="[a-fA-F\\d]{1,4}",i=`
(?:
(?:${s}:){7}(?:${s}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${s}:){6}(?:${n}|:${s}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${s}:){5}(?::${n}|(?::${s}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${s}:){4}(?:(?::${s}){0,1}:${n}|(?::${s}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${s}:){3}(?:(?::${s}){0,2}:${n}|(?::${s}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${s}:){2}(?:(?::${s}){0,3}:${n}|(?::${s}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${s}:){1}(?:(?::${s}){0,4}:${n}|(?::${s}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${s}){0,5}:${n}|(?::${s}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),r=new RegExp(`(?:^${n}$)|(?:^${i}$)`),a=new RegExp(`^${n}$`),o=new RegExp(`^${i}$`),m=y=>y&&y.exact?r:new RegExp(`(?:${t(y)}${n}${t(y)})|(?:${t(y)}${i}${t(y)})`,"g");m.v4=y=>y&&y.exact?a:new RegExp(`${t(y)}${n}${t(y)}`,"g"),m.v6=y=>y&&y.exact?o:new RegExp(`${t(y)}${i}${t(y)}`,"g");const f="(?:(?:[a-z]+:)?//)",u="(?:\\S+(?::\\S*)?@)?",l=m.v4().source,c=m.v6().source,_=`(?:${f}|www\\.)${u}(?:localhost|${l}|${c}|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?`;return ue=new RegExp(`(?:^${_}$)`,"i"),ue},Je={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},ee={integer(e){return ee.number(e)&&parseInt(e,10)===e},float(e){return ee.number(e)&&!ee.integer(e)},array(e){return Array.isArray(e)},regexp(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(t){return!1}},date(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number(e){return isNaN(e)?!1:typeof e=="number"},object(e){return typeof e=="object"&&!ee.array(e)},method(e){return typeof e=="function"},email(e){return typeof e=="string"&&e.length<=320&&!!e.match(Je.email)},url(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Zn())},hex(e){return typeof e=="string"&&!!e.match(Je.hex)}},Jn=(e,t,n,s,i)=>{if(e.required&&t===void 0){ut(e,t,n,s,i);return}const r=["integer","float","array","regexp","object","method","email","number","date","url","hex"],a=e.type;r.indexOf(a)>-1?ee[a](t)||s.push(T(i.messages.types[a],e.fullField,e.type)):a&&typeof t!==e.type&&s.push(T(i.messages.types[a],e.fullField,e.type))},Qn=(e,t,n,s,i)=>{const r=typeof e.len=="number",a=typeof e.min=="number",o=typeof e.max=="number",m=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;let f=t,u=null;const l=typeof t=="number",c=typeof t=="string",d=Array.isArray(t);if(l?u="number":c?u="string":d&&(u="array"),!u)return!1;d&&(f=t.length),c&&(f=t.replace(m,"_").length),r?f!==e.len&&s.push(T(i.messages[u].len,e.fullField,e.len)):a&&!o&&f<e.min?s.push(T(i.messages[u].min,e.fullField,e.min)):o&&!a&&f>e.max?s.push(T(i.messages[u].max,e.fullField,e.max)):a&&o&&(f<e.min||f>e.max)&&s.push(T(i.messages[u].range,e.fullField,e.min,e.max))},X="enum",Xn=(e,t,n,s,i)=>{e[X]=Array.isArray(e[X])?e[X]:[],e[X].indexOf(t)===-1&&s.push(T(i.messages[X],e.fullField,e[X].join(", ")))},Hn=(e,t,n,s,i)=>{e.pattern&&(e.pattern instanceof RegExp?(e.pattern.lastIndex=0,e.pattern.test(t)||s.push(T(i.messages.pattern.mismatch,e.fullField,t,e.pattern))):typeof e.pattern=="string"&&(new RegExp(e.pattern).test(t)||s.push(T(i.messages.pattern.mismatch,e.fullField,t,e.pattern))))},x={required:ut,whitespace:Kn,type:Jn,range:Qn,enum:Xn,pattern:Hn},Yn=(e,t,n,s,i)=>{const r=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(q(t,"string")&&!e.required)return n();x.required(e,t,s,r,i,"string"),q(t,"string")||(x.type(e,t,s,r,i),x.range(e,t,s,r,i),x.pattern(e,t,s,r,i),e.whitespace===!0&&x.whitespace(e,t,s,r,i))}n(r)},Gn=(e,t,n,s,i)=>{const r=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(q(t)&&!e.required)return n();x.required(e,t,s,r,i),t!==void 0&&x.type(e,t,s,r,i)}n(r)},es=(e,t,n,s,i)=>{const r=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(t===""&&(t=void 0),q(t)&&!e.required)return n();x.required(e,t,s,r,i),t!==void 0&&(x.type(e,t,s,r,i),x.range(e,t,s,r,i))}n(r)},ts=(e,t,n,s,i)=>{const r=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(q(t)&&!e.required)return n();x.required(e,t,s,r,i),t!==void 0&&x.type(e,t,s,r,i)}n(r)},ns=(e,t,n,s,i)=>{const r=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(q(t)&&!e.required)return n();x.required(e,t,s,r,i),q(t)||x.type(e,t,s,r,i)}n(r)},ss=(e,t,n,s,i)=>{const r=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(q(t)&&!e.required)return n();x.required(e,t,s,r,i),t!==void 0&&(x.type(e,t,s,r,i),x.range(e,t,s,r,i))}n(r)},is=(e,t,n,s,i)=>{const r=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(q(t)&&!e.required)return n();x.required(e,t,s,r,i),t!==void 0&&(x.type(e,t,s,r,i),x.range(e,t,s,r,i))}n(r)},rs=(e,t,n,s,i)=>{const r=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(t==null&&!e.required)return n();x.required(e,t,s,r,i,"array"),t!=null&&(x.type(e,t,s,r,i),x.range(e,t,s,r,i))}n(r)},os=(e,t,n,s,i)=>{const r=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(q(t)&&!e.required)return n();x.required(e,t,s,r,i),t!==void 0&&x.type(e,t,s,r,i)}n(r)},as="enum",ls=(e,t,n,s,i)=>{const r=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(q(t)&&!e.required)return n();x.required(e,t,s,r,i),t!==void 0&&x[as](e,t,s,r,i)}n(r)},cs=(e,t,n,s,i)=>{const r=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(q(t,"string")&&!e.required)return n();x.required(e,t,s,r,i),q(t,"string")||x.pattern(e,t,s,r,i)}n(r)},ds=(e,t,n,s,i)=>{const r=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(q(t,"date")&&!e.required)return n();if(x.required(e,t,s,r,i),!q(t,"date")){let o;t instanceof Date?o=t:o=new Date(t),x.type(e,o,s,r,i),o&&x.range(e,o.getTime(),s,r,i)}}n(r)},us=(e,t,n,s,i)=>{const r=[],a=Array.isArray(t)?"array":typeof t;x.required(e,t,s,r,i,a),n(r)},_e=(e,t,n,s,i)=>{const r=e.type,a=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(q(t,r)&&!e.required)return n();x.required(e,t,s,a,i,r),q(t,r)||x.type(e,t,s,a,i)}n(a)},fs=(e,t,n,s,i)=>{const r=[];if(e.required||!e.required&&s.hasOwnProperty(e.field)){if(q(t)&&!e.required)return n();x.required(e,t,s,r,i)}n(r)},se={string:Yn,method:Gn,number:es,boolean:ts,regexp:ns,integer:ss,float:is,array:rs,object:os,enum:ls,pattern:cs,date:ds,url:_e,hex:_e,email:_e,required:us,any:fs};function Ce(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone(){const e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}const Fe=Ce(),de=class qe{constructor(t){this.rules=null,this._messages=Fe,this.define(t)}define(t){if(!t)throw new Error("Cannot configure a schema with no rules");if(typeof t!="object"||Array.isArray(t))throw new Error("Rules must be an object");this.rules={},Object.keys(t).forEach(n=>{const s=t[n];this.rules[n]=Array.isArray(s)?s:[s]})}messages(t){return t&&(this._messages=Ze(Ce(),t)),this._messages}validate(t,n={},s=()=>{}){let i=t,r=n,a=s;if(typeof r=="function"&&(a=r,r={}),!this.rules||Object.keys(this.rules).length===0)return a&&a(null,i),Promise.resolve(i);function o(l){let c=[],d={};function v(g){Array.isArray(g)?c=c.concat(...g):c.push(g)}for(let g=0;g<l.length;g++)v(l[g]);c.length?(d=$e(c),a(c,d)):a(null,i)}if(r.messages){let l=this.messages();l===Fe&&(l=Ce()),Ze(l,r.messages),r.messages=l}else r.messages=this.messages();const m={};(r.keys||Object.keys(this.rules)).forEach(l=>{const c=this.rules[l];let d=i[l];c.forEach(v=>{let g=v;typeof g.transform=="function"&&(i===t&&(i={...i}),d=i[l]=g.transform(d)),typeof g=="function"?g={validator:g}:g={...g},g.validator=this.getValidationMethod(g),g.validator&&(g.field=l,g.fullField=g.fullField||l,g.type=this.getType(g),m[l]=m[l]||[],m[l].push({rule:g,value:d,source:i,field:l}))})});const u={};return Mn(m,r,(l,c)=>{var _;const d=l.rule;let v=(d.type==="object"||d.type==="array")&&(typeof d.fields=="object"||typeof d.defaultField=="object");v=v&&(d.required||!d.required&&l.value),d.field=l.field;function g(y,N){return{...N,fullField:`${d.fullField}.${y}`,fullFields:d.fullFields?[...d.fullFields,y]:[y]}}function w(y=[]){let N=Array.isArray(y)?y:[y];!r.suppressWarning&&N.length&&qe.warning("async-validator:",N),N.length&&d.message!==void 0&&(N=[].concat(d.message));let E=N.map(Ke(d,i));if(r.first&&E.length)return u[d.field]=1,c(E);if(!v)c(E);else{if(d.required&&!l.value)return d.message!==void 0?E=[].concat(d.message).map(Ke(d,i)):r.error&&(E=[r.error(d,T(r.messages.required,d.field))]),c(E);let $={};d.defaultField&&Object.keys(l.value).map(D=>{$[D]=d.defaultField}),$={...$,...l.rule.fields};const I={};Object.keys($).forEach(D=>{const h=$[D],C=Array.isArray(h)?h:[h];I[D]=C.map(g.bind(null,D))});const B=new qe(I);B.messages(r.messages),l.rule.options&&(l.rule.options.messages=r.messages,l.rule.options.error=r.error),B.validate(l.value,l.rule.options||r,D=>{const h=[];E&&E.length&&h.push(...E),D&&D.length&&h.push(...D),c(h.length?h:null)})}}let S;if(d.asyncValidator)S=d.asyncValidator(d,l.value,w,l.source,r);else if(d.validator){try{S=d.validator(d,l.value,w,l.source,r)}catch(y){(_=console.error)==null||_.call(console,y),r.suppressValidatorError||setTimeout(()=>{throw y},0),w(y.message)}S===!0?w():S===!1?w(typeof d.message=="function"?d.message(d.fullField||d.field):d.message||`${d.fullField||d.field} fails`):S instanceof Array?w(S):S instanceof Error&&w(S.message)}S&&S.then&&S.then(()=>w(),y=>w(y))},l=>{o(l)},i)}getType(t){if(t.type===void 0&&t.pattern instanceof RegExp&&(t.type="pattern"),typeof t.validator!="function"&&t.type&&!se.hasOwnProperty(t.type))throw new Error(T("Unknown rule type %s",t.type));return t.type||"string"}getValidationMethod(t){if(typeof t.validator=="function")return t.validator;const n=Object.keys(t),s=n.indexOf("message");return s!==-1&&n.splice(s,1),n.length===1&&n[0]==="required"?se.required:se[this.getType(t)]||void 0}};de.register=function(t,n){if(typeof n!="function")throw new Error("Cannot register a validator by type, validator is not a function");se[t]=n};de.warning=Tn;de.messages=Fe;de.validators=se;let ms=de;const ys=(e,t)=>{const n=U(Y,void 0);let s,i=!1;const r=L(""),a=L(""),o=L(""),m=b(()=>!!(e.label||t.label)),f=b(()=>`${e.label||""}${(n==null?void 0:n.labelSuffix)||""}`),u=b(()=>{const h=n==null?void 0:n.model;if(!(!h||!e.prop))return ve(h,e.prop).value}),l=b(()=>e.prop?re(e.prop)?e.prop:e.prop.join("."):""),c=b(()=>{const h=[];e.rules&&h.push(...Se(e.rules));const C=n==null?void 0:n.rules;if(C&&e.prop){const P=ve(C,e.prop).value;P&&h.push(...Se(P))}if(e.required!==void 0){const P=h.map((O,G)=>[O,G]).filter(([O])=>Object.keys(O).includes("required"));if(P.length)for(const[O,G]of P)O.required!==e.required&&(h[G]={...O,required:e.required});else h.push({required:e.required})}return h}),d=b(()=>c.value.length>0),v=b(()=>c.value.some(h=>h.required)),g=b(()=>a.value==="error"&&e.showMessage&&K(n==null?void 0:n.showMessage,!0)),w=h=>{r.value=h},S=h=>c.value.filter(P=>!P.trigger||!h?!0:Array.isArray(P.trigger)?P.trigger.includes(h):P.trigger===h).map(({trigger:P,...O})=>O),_=h=>{var O;const{errors:C,fields:P}=h;(!C||!P)&&console.error(h),w("error"),o.value=C?K((O=C==null?void 0:C[0])==null?void 0:O.message,`${e.prop} 为必填项`):"",n==null||n.emits("validate",e.prop,!1,o.value)},y=()=>{w("success"),o.value="",n==null||n.emits("validate",e.prop,!0,"")},N=async h=>{const C=l.value;return new ms({[C]:h}).validate({[C]:u.value},{firstFields:!0}).then(()=>(y(),!0)).catch(O=>(_(O),Promise.reject(O)))},E=async(h,C)=>{if(i||!e.prop)return!1;const P=Qe(C);if(!d.value)return C==null||C(!1),!1;const O=S(h);return O.length===0?(C==null||C(!0),!0):(w("validating"),N(O).then(()=>(C==null||C(!0),!0)).catch(G=>{const{fields:Ae}=G;return C==null||C(!1,Ae),P?!1:Promise.reject(Ae)}))},$=()=>{w(""),o.value="",i=!1},I=async()=>{const h=n==null?void 0:n.model;if(!h||!e.prop)return;const C=ve(h,e.prop);i=!0,C.value=ne(s),await ge(),$(),i=!1},B=()=>{s=ne(u.value)},D=yn(()=>{a.value=r.value},100);return te(()=>r.value,()=>D()),te(()=>e.error,h=>{o.value=h||"",w(h?"error":"")},{immediate:!0}),te(()=>e.validateStatus,h=>{w(h||"")}),{formContext:n,hasLabel:m,currentLabel:f,validateState:r,validateMessage:o,isRequired:v,shouldShowError:g,doValidate:N,validate:E,clearValidate:$,resetField:I,initFieldValue:B}},xe=(e,t)=>{const n=Se(t);return n.length>0?e.filter(s=>s.prop&&n.includes(s.prop)):e},ps=e=>{const t=[],n=l=>{t.push(l)},s=l=>{l.prop&&t.splice(t.indexOf(l),1)},i=(l=[])=>{if(!e.model)return console.warn("[TnForm] model参数未定义");xe(t,l).forEach(c=>c.resetField())},r=(l=[])=>{xe(t,l).forEach(c=>c.clearValidate())},a=b(()=>{const l=!!e.model;return l||console.warn("[TnForm] model参数未定义"),l}),o=l=>{if(t.length===0)return[];const c=xe(t,l);return c.length?c:(console.warn("[TnForm] 未找到需要校验的字段"),[])},m=async l=>u(void 0,l),f=async l=>{if(!a.value)return!1;const c=o(l);if(c.length===0)return!1;let d={};for(const v of c)try{await v.validate("")}catch(g){d={...d,...g}}return Object.keys(d).length===0?!0:Promise.reject(d)},u=async(l=[],c)=>{const d=!Qe(c);try{const v=await f(l);return v===!0&&(c==null||c(!0)),v}catch(v){if(v instanceof Error)throw v;const g=v;return c==null||c(!1,g),d&&Promise.reject(g)}};return{addField:n,removeField:s,resetFields:i,clearValidate:r,validate:m,validateField:u}},gs=J({__name:"form",props:An,emits:Dn,setup(e,{expose:t,emit:n}){const s=e,{formClass:i}=Vn(),{addField:r,removeField:a,resetFields:o,clearValidate:m,validate:f,validateField:u}=ps(s);return te(()=>s.rules,()=>{s.validateOnRuleChange&&f()},{deep:!0}),me(Y,Ie({...Xe(s),emits:n,resetFields:o,clearValidate:m,validateField:u,addField:r,removeField:a})),t({validate:f,validateField:u,resetFields:o,clearValidate:m}),(l,c)=>{const d=ae;return j(),z(d,{class:k([p(i)])},{default:F(()=>[W(l.$slots,"default",{},void 0,!0)]),_:3},8,["class"])}}});const hs=ce(gs,[["__scopeId","data-v-d3783712"]]),bs=["","error","validating","success"],vs=Q({label:String,labelWidth:{type:[String,Number],default:""},labelPosition:{type:String,values:["left","right","top"],default:""},prop:{type:we([String,Array])},required:{type:Boolean,default:void 0},rules:{type:we([Object,Array])},error:String,validateStatus:{type:String,values:bs},showMessage:{type:Boolean,default:!0},size:{type:String,values:Ye}}),_s=J({__name:"form-item",props:vs,setup(e,{expose:t}){const n=e,s=ht(),{formContext:i,validateState:r,validateMessage:a,hasLabel:o,currentLabel:m,shouldShowError:f,isRequired:u,resetField:l,clearValidate:c,validate:d,initFieldValue:v}=ys(n,s),{ns:g,labelId:w,formItemClass:S,formItemLabelClass:_,formItemLabelStyle:y,formItemErrorMessageStyle:N,initLabelContainerWidth:E}=Rn(n,o,u),$=Pe(void 0,{formItem:!1}),I=Ie({...Xe(n),size:$,validateState:r,hasLabel:o,resetField:l,clearValidate:c,validate:d});return bt(()=>{n.prop&&(i==null||i.addField(I),v()),ge(()=>{E()})}),vt(()=>{i==null||i.removeField(I)}),me(Oe,I),t({size:$,validateMessage:a,validateState:r,validate:d,resetField:l,clearValidate:c}),(B,D)=>{const h=ae;return j(),z(h,{class:k([p(S)])},{default:F(()=>[A(h,{class:k([p(g).e("wrapper")])},{default:F(()=>[V(" label "),p(o)?(j(),z(h,{key:0,id:p(w),class:k([p(_)]),style:Z(p(y))},{default:F(()=>[W(B.$slots,"label",{},()=>[ye(De(p(m)),1)],!0)]),_:3},8,["id","class","style"])):V("v-if",!0),V(" 表单组件 "),A(h,{class:k([p(g).e("content")])},{default:F(()=>[W(B.$slots,"default",{},void 0,!0)]),_:3},8,["class"])]),_:3},8,["class"]),V(" 错误信息 "),p(f)?(j(),z(h,{key:0,class:k(["tn-red_text",[p(g).e("error-message")]]),style:Z(p(N))},{default:F(()=>[ye(De(p(a)),1)]),_:1},8,["class","style"])):V("v-if",!0)]),_:3},8,["class"])}}});const ft=ce(_s,[["__scopeId","data-v-59167178"]]);Zt(hs,{FormItem:ft});Ge(ft);const mt=e=>{const t=U(On,void 0),n=Pe(b(()=>je(e==null?void 0:e.size,t==null?void 0:t.size))),s=b(()=>je(e==null?void 0:e.checkedShape,t==null?void 0:t.checkedShape,"square")),i=Nn(b(()=>(e==null?void 0:e.disabled)||(t==null?void 0:t.disabled)||!1)),r=b(()=>(t==null?void 0:t.modelValue)&&(t==null?void 0:t.max)&&(t==null?void 0:t.modelValue.length)>=(t==null?void 0:t.max)&&!(t!=null&&t.modelValue.includes(e.label))),a=b(()=>(e==null?void 0:e.labelDisabled)||(t==null?void 0:t.labelDisabled)||!1),o=b(()=>(e==null?void 0:e.border)||(t==null?void 0:t.border)||!1),m=b(()=>(e==null?void 0:e.activeColor)||(t==null?void 0:t.activeColor));return{checkboxGroup:t,size:n,checkedShape:s,disabled:i,maxDisabled:r,labelDisabled:a,border:o,activeColor:m}},xs=(e,t)=>e.includes(t),ws=e=>{const{emit:t}=pe(),{checkboxGroup:n,disabled:s,maxDisabled:i,labelDisabled:r}=mt(e),{formItem:a}=kn(),o=b(()=>!!n),m=b(()=>o.value?xs(n.modelValue,e.label):e.modelValue===e.activeValue);return{isGroup:o,selected:m,handleCheckboxClick:u=>{var l;if(!(s.value||i.value)&&!(u==="label"&&r.value))if(o.value)n.changeEvent(e.label);else{const c=m.value?e.inactiveValue:e.activeValue;t(he,c),ge(()=>{t(rt,c)}),e.validateEvent&&((l=a==null?void 0:a.validate)==null||l.call(a,"change").catch(d=>{}))}}}},Ss=e=>{const t=le("checkbox"),{activeColor:n,disabled:s,maxDisabled:i,size:r,border:a,checkedShape:o}=mt(e),[m,f]=fe(n,"bg"),[u,l]=fe(n,"text"),[c,d]=fe(n,"border"),v=b(()=>_=>{const y=[t.b()];return(s.value||i.value)&&y.push(t.m("disabled")),r.value&&y.push(t.m(r.value)),_&&(y.push(t.m("selected")),u.value&&y.push(u.value)),a.value?(y.push("tn-border"),_&&c.value?y.push(c.value):y.push("tn-gray-disabled_border")):y.push(t.m("no-border")),e.customClass&&y.push(e.customClass),y.join(" ")}),g=b(()=>_=>{const y={};return _&&(a.value&&!c.value&&(y.borderColor=d.value||"var(--tn-color-primary)"),u.value||(y.color=l.value||"var(--tn-color-primary)")),Lt(e.customStyle)||Object.assign(y,e.customStyle),y}),w=b(()=>_=>{const y=[t.e("checked-box")];return o.value&&y.push(t.em("checked-box",o.value)),_||e.indeterminate?(y.push(t.em("checked-box","selected")),m.value&&y.push(m.value)):y.push("tn-border tn-gray-disabled_border"),y.join(" ")}),S=b(()=>_=>{const y={};return(_||e.indeterminate)&&!m.value&&(y.backgroundColor=f.value||"var(--tn-color-primary)"),y});return{ns:t,checkboxClass:v,checkboxStyle:g,checkboxCheckedBoxClass:w,checkboxCheckedBoxStyle:S}},$s=J({__name:"checkbox",props:En,emits:In,setup(e){const t=e,{isGroup:n,selected:s,handleCheckboxClick:i}=ws(t),{ns:r,checkboxClass:a,checkboxStyle:o,checkboxCheckedBoxClass:m,checkboxCheckedBoxStyle:f}=Ss(Object.assign(t));return(u,l)=>{const c=ae;return j(),z(c,{class:k([p(a)(p(s)),{[p(r).m("group")]:p(n)}]),style:Z(p(o)(p(s))),onClick:l[1]||(l[1]=H(d=>p(i)("label"),["stop"]))},{default:F(()=>[V(" 左边内容 "),u.$slots.left&&!u.$slots.default?(j(),z(c,{key:0,class:k([p(r).em("content","left")])},{default:F(()=>[W(u.$slots,"left",{},void 0,!0)]),_:3},8,["class"])):V("v-if",!0),V(" 选择框 "),A(c,{class:k([p(m)(p(s)),{[p(r).em("checked-box","indeterminate")]:!p(s)&&u.indeterminate}]),style:Z(p(f)(p(s))),onClick:l[0]||(l[0]=H(d=>p(i)("checkbox"),["stop"]))},{default:F(()=>[p(s)?(j(),z(He,{key:0,name:"check"})):V("v-if",!0)]),_:1},8,["class","style"]),V(" 右边内容 "),u.$slots.default?(j(),z(c,{key:1,class:k([p(r).em("content","right")])},{default:F(()=>[W(u.$slots,"default",{},void 0,!0)]),_:3},8,["class"])):V("v-if",!0)]),_:3},8,["class","style"])}}});const Cs=ce($s,[["__scopeId","data-v-c202e122"]]),Fs=J({name:"UserLogin"}),As=J({...Fs,setup(e){Kt({title:"Login"});const t=_t();let n=L(!1);setTimeout(()=>{n.value=!0},100);const s=Ie({code:"",encryptedData:"",iv:"",isParty:!0,partyData:{},refereeId:10001}),i=L(!1);async function r(){if(!i.value)return xt("请先同意用户使用协议");wt({title:"正在登录",mask:!0});const f=await be.getUserProfile({desc:"获取头像昵称"}),u=await be.login(),{code:l,data:c}=await Ne.post("passport/loginMpWx",{form:{partyData:{oauth:"MP-WEIXIN",userInfo:f.rawData,code:u.code},referee_id:St("referee_id")}},{},!1);Re(),l===200?(ke.set("token",c.token),await t.getUserInfo(),Be({url:"/pages/index"})):l===500&&c.isBindMobile&&(s.partyData={oauth:"MP-WEIXIN",userInfo:JSON.parse(f.rawData),code:await a()},n.value=!0)}async function a(){const f=await be.login({provider:"weixin"});return f&&f.code}async function o(f){f.detail.errMsg==="getPhoneNumber:ok"&&(s.iv=f.detail.iv,s.encryptedData=f.detail.encryptedData,s.code=await a(),m())}async function m(){const{code:f,data:u}=await Ne.post("passport/loginMpWxMobile",{form:s});f===200&&u.token&&(ke.set("token",u.token),await t.getUserInfo(),Be({url:"/pages/index"}))}return me(Mt,b(()=>({dataIsLoaded:!0,hasData:!0,showEmptySlot:!1,topBarTitle:"",...$t}))),me(Ut,async()=>{Et(),Re()}),(f,u)=>{const l=Ct,c=Ft,d=Cs,v=qt,g=Cn,w=Wt;return j(),z(w,{"class-name":"layout-white UserLogin"},{default:F(()=>[M("div",{"mt-240px":"","flex--c":"","flex-col":""},[A(l,{src:"https://media.sammu.top/lohascity/user/login-logo.png","h-310px":"","w-386px":""}),M("div",{"mt-117px":"","flex--c":""},[A(d,{modelValue:i.value,"onUpdate:modelValue":u[1]||(u[1]=S=>i.value=S),"checked-shape":"circle","active-color":"#c39f35"},{default:F(()=>[M("div",{"lh-36px":"",text:"font-500 26px #333"},[ye(" 我已阅读并同意 "),A(c,{text:"#c39f35",onClick:u[0]||(u[0]=H(S=>("router"in f?f.router:p(Te)).push("/pages-sub/user/agreement"),["stop"]))},{default:F(()=>[ye("《用户使用协议》")]),_:1})])]),_:1},8,["modelValue"])]),M("div",{"mt-38px":"",onClick:r},[A(l,{src:"https://media.sammu.top/lohascity/user/login-submit.png","h-92px":"","w-627px":""})]),M("div",{"mt-42px":"",onClick:u[2]||(u[2]=S=>("router"in f?f.router:p(Te)).back())},[A(l,{src:"https://media.sammu.top/lohascity/user/login-cancel.png","h-92px":"","w-627px":""})])]),A(g,{modelValue:p(n),"onUpdate:modelValue":u[4]||(u[4]=S=>Ve(n)?n.value=S:n=S),"open-direction":"center","overlay-closeable":!1,"bg-color":"none","z-index":20091},{default:F(()=>[M("div",{relative:"","h-544px":"","w-570px":""},[A(l,{"h-544px":"","w-570px":"",src:"https://media.sammu.top/lohascity/user/need-login-bg.png"}),M("div",{absolute:"","left-0":"","top-0":"","h-full":"","w-full":"","flex--c":"","flex-col":""},[M("div",{"mt-300px":"","text-28px":"","font-500":"","lh-40px":""},"为了购物方便,需要授权你的手机!"),M("div",{"mt-50px":"","flex-cc":""},[A(l,{"h-96px":"","w-231px":"",src:"https://media.sammu.top/lohascity/user/cancel.png",onClick:u[3]||(u[3]=S=>Ve(n)?n.value=!1:n=!1)}),A(v,{class:"wx-btn","ml-28px":"","h-96px":"","w-231px":"","open-type":"getPhoneNumber",onGetphonenumber:o},{default:F(()=>[A(l,{"h-96px":"","w-231px":"",src:"https://media.sammu.top/lohascity/user/go-login.png"})]),_:1})])])])]),_:1},8,["modelValue"])]),_:1})}}});export{As as default};
