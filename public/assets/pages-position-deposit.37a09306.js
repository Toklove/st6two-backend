import{a0 as b,a1 as U,d as N,l as $,O as X,J,a2 as Y,C as V,r as I,u as z,c as W,$ as Z,e as O,f as c,z as j,w as g,j as M,t as k,k as w,A as q,F as H,m as tt,E as et,h as rt,q as nt,v as at,x as st,i as it,a3 as ot,D as ut}from"./index-fcbdad1f.js";import{_ as ht,l as lt}from"./layout.daec25cc.js";import{_ as ft}from"./page-meta.8634b088.js";import{_ as F}from"./_plugin-vue_export-helper.c27b6911.js";const ct="./static/images/icon-copy-deposit.png",m={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8};function G(t){this.mode=m.MODE_8BIT_BYTE,this.data=t}G.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}};const A={L:1,M:0,Q:3,H:2};function E(t,e){this.totalCount=t,this.dataCount=e}E.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];E.getRSBlocks=function(t,e){var r=E.getRsBlockTable(t,e);if(r==null)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,a=new Array,s=0;s<n;s++)for(var o=r[s*3+0],i=r[s*3+1],h=r[s*3+2],f=0;f<o;f++)a.push(new E(i,h));return a};E.getRsBlockTable=function(t,e){switch(e){case A.L:return E.RS_BLOCK_TABLE[(t-1)*4+0];case A.M:return E.RS_BLOCK_TABLE[(t-1)*4+1];case A.Q:return E.RS_BLOCK_TABLE[(t-1)*4+2];case A.H:return E.RS_BLOCK_TABLE[(t-1)*4+3];default:return}};function S(){this.buffer=new Array,this.length=0}S.prototype={get:function(t){var e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)==1},put:function(t,e){for(var r=0;r<e;r++)this.putBit((t>>>e-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var d={glog:function(t){if(t<1)throw new Error("glog("+t+")");return d.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return d.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var v=0;v<8;v++)d.EXP_TABLE[v]=1<<v;for(var v=8;v<256;v++)d.EXP_TABLE[v]=d.EXP_TABLE[v-4]^d.EXP_TABLE[v-5]^d.EXP_TABLE[v-6]^d.EXP_TABLE[v-8];for(var v=0;v<255;v++)d.LOG_TABLE[d.EXP_TABLE[v]]=v;function y(t,e){if(t.length==null)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&t[r]==0;)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}y.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<t.getLength();n++)e[r+n]^=d.gexp(d.glog(this.get(r))+d.glog(t.get(n)));return new y(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=d.glog(this.get(0))-d.glog(t.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(var n=0;n<t.getLength();n++)r[n]^=d.gexp(d.glog(t.get(n))+e);return new y(r,0).mod(t)}};var B={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},l={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;l.getBCHDigit(e)-l.getBCHDigit(l.G15)>=0;)e^=l.G15<<l.getBCHDigit(e)-l.getBCHDigit(l.G15);return(t<<10|e)^l.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;l.getBCHDigit(e)-l.getBCHDigit(l.G18)>=0;)e^=l.G18<<l.getBCHDigit(e)-l.getBCHDigit(l.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;t!=0;)e++,t>>>=1;return e},getPatternPosition:function(t){return l.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case B.PATTERN000:return(e+r)%2==0;case B.PATTERN001:return e%2==0;case B.PATTERN010:return r%3==0;case B.PATTERN011:return(e+r)%3==0;case B.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case B.PATTERN101:return e*r%2+e*r%3==0;case B.PATTERN110:return(e*r%2+e*r%3)%2==0;case B.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new y([1],0),r=0;r<t;r++)e=e.multiply(new y([1,d.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case m.MODE_NUMBER:return 10;case m.MODE_ALPHA_NUM:return 9;case m.MODE_8BIT_BYTE:return 8;case m.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case m.MODE_NUMBER:return 12;case m.MODE_ALPHA_NUM:return 11;case m.MODE_8BIT_BYTE:return 16;case m.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else if(e<41)switch(t){case m.MODE_NUMBER:return 14;case m.MODE_ALPHA_NUM:return 13;case m.MODE_8BIT_BYTE:return 16;case m.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}else throw new Error("type:"+e)},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var a=0;a<e;a++){for(var s=0,o=t.isDark(n,a),i=-1;i<=1;i++)if(!(n+i<0||e<=n+i))for(var h=-1;h<=1;h++)a+h<0||e<=a+h||i==0&&h==0||o==t.isDark(n+i,a+h)&&s++;s>5&&(r+=3+s-5)}for(var n=0;n<e-1;n++)for(var a=0;a<e-1;a++){var f=0;t.isDark(n,a)&&f++,t.isDark(n+1,a)&&f++,t.isDark(n,a+1)&&f++,t.isDark(n+1,a+1)&&f++,(f==0||f==4)&&(r+=3)}for(var n=0;n<e;n++)for(var a=0;a<e-6;a++)t.isDark(n,a)&&!t.isDark(n,a+1)&&t.isDark(n,a+2)&&t.isDark(n,a+3)&&t.isDark(n,a+4)&&!t.isDark(n,a+5)&&t.isDark(n,a+6)&&(r+=40);for(var a=0;a<e;a++)for(var n=0;n<e-6;n++)t.isDark(n,a)&&!t.isDark(n+1,a)&&t.isDark(n+2,a)&&t.isDark(n+3,a)&&t.isDark(n+4,a)&&!t.isDark(n+5,a)&&t.isDark(n+6,a)&&(r+=40);for(var u=0,a=0;a<e;a++)for(var n=0;n<e;n++)t.isDark(n,a)&&u++;var C=Math.abs(100*u/e/e-50)/5;return r+=C*10,r}};function T(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var _=T.prototype;_.addData=function(t){var e=new G(t);this.dataList.push(e),this.dataCache=null};_.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]};_.getModuleCount=function(){return this.moduleCount};_.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=E.getRSBlocks(t,this.errorCorrectLevel),r=new S,n=0,a=0;a<e.length;a++)n+=e[a].dataCount;for(var a=0;a<this.dataList.length;a++){var s=this.dataList[a];r.put(s.mode,4),r.put(s.getLength(),l.getLengthInBits(s.mode,t)),s.write(r)}if(r.getLengthInBits()<=n*8)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())};_.makeImpl=function(t,e){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),this.dataCache==null&&(this.dataCache=T.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)};_.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(0<=r&&r<=6&&(n==0||n==6)||0<=n&&n<=6&&(r==0||r==6)||2<=r&&r<=4&&2<=n&&n<=4?this.modules[t+r][e+n]=!0:this.modules[t+r][e+n]=!1)};_.getBestMaskPattern=function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=l.getLostPoint(this);(r==0||t>n)&&(t=n,e=r)}return e};_.createMovieClip=function(t,e,r){var n=t.createEmptyMovieClip(e,r),a=1;this.make();for(var s=0;s<this.modules.length;s++)for(var o=s*a,i=0;i<this.modules[s].length;i++){var h=i*a,f=this.modules[s][i];f&&(n.beginFill(0,100),n.moveTo(h,o),n.lineTo(h+a,o),n.lineTo(h+a,o+a),n.lineTo(h,o+a),n.endFill())}return n};_.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)this.modules[t][6]==null&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)this.modules[6][e]==null&&(this.modules[6][e]=e%2==0)};_.setupPositionAdjustPattern=function(){for(var t=l.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],a=t[r];if(this.modules[n][a]==null)for(var s=-2;s<=2;s++)for(var o=-2;o<=2;o++)s==-2||s==2||o==-2||o==2||s==0&&o==0?this.modules[n+s][a+o]=!0:this.modules[n+s][a+o]=!1}};_.setupTypeNumber=function(t){for(var e=l.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&(e>>r&1)==1;this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(var r=0;r<18;r++){var n=!t&&(e>>r&1)==1;this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}};_.setupTypeInfo=function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=l.getBCHTypeInfo(r),a=0;a<15;a++){var s=!t&&(n>>a&1)==1;a<6?this.modules[a][8]=s:a<8?this.modules[a+1][8]=s:this.modules[this.moduleCount-15+a][8]=s}for(var a=0;a<15;a++){var s=!t&&(n>>a&1)==1;a<8?this.modules[8][this.moduleCount-a-1]=s:a<9?this.modules[8][15-a-1+1]=s:this.modules[8][15-a-1]=s}this.modules[this.moduleCount-8][8]=!t};_.mapData=function(t,e){for(var r=-1,n=this.moduleCount-1,a=7,s=0,o=this.moduleCount-1;o>0;o-=2)for(o==6&&o--;;){for(var i=0;i<2;i++)if(this.modules[n][o-i]==null){var h=!1;s<t.length&&(h=(t[s]>>>a&1)==1);var f=l.getMask(e,n,o-i);f&&(h=!h),this.modules[n][o-i]=h,a--,a==-1&&(s++,a=7)}if(n+=r,n<0||this.moduleCount<=n){n-=r,r=-r;break}}};T.PAD0=236;T.PAD1=17;T.createData=function(t,e,r){for(var n=E.getRSBlocks(t,e),a=new S,s=0;s<r.length;s++){var o=r[s];a.put(o.mode,4),a.put(o.getLength(),l.getLengthInBits(o.mode,t)),o.write(a)}for(var i=0,s=0;s<n.length;s++)i+=n[s].dataCount;if(a.getLengthInBits()>i*8)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+i*8+")");for(a.getLengthInBits()+4<=i*8&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(!1);for(;!(a.getLengthInBits()>=i*8||(a.put(T.PAD0,8),a.getLengthInBits()>=i*8));)a.put(T.PAD1,8);return T.createBytes(a,n)};T.createBytes=function(t,e){for(var r=0,n=0,a=0,s=new Array(e.length),o=new Array(e.length),i=0;i<e.length;i++){var h=e[i].dataCount,f=e[i].totalCount-h;n=Math.max(n,h),a=Math.max(a,f),s[i]=new Array(h);for(var u=0;u<s[i].length;u++)s[i][u]=255&t.buffer[u+r];r+=h;var C=l.getErrorCorrectPolynomial(f),R=new y(s[i],C.getLength()-1),x=R.mod(C);o[i]=new Array(C.getLength()-1);for(var u=0;u<o[i].length;u++){var D=u+x.getLength()-o[i].length;o[i][u]=D>=0?x.get(D):0}}for(var p=0,u=0;u<e.length;u++)p+=e[u].totalCount;for(var P=new Array(p),L=0,u=0;u<n;u++)for(var i=0;i<e.length;i++)u<s[i].length&&(P[L++]=s[i][u]);for(var u=0;u<a;u++)for(var i=0;i<e.length;i++)u<o[i].length&&(P[L++]=o[i][u]);return P};var K=function(t,e){e=e||{};var r=new T(e.typeNumber||-1,e.errorCorrectLevel||A.H);return r.addData(t),r.make(),r};K.ErrorCorrectLevel=A;const dt=t=>{const e=t.length;let r="";for(let n=0;n<e;n++){const a=t.charCodeAt(n);a>=1&&a<=127?r+=t.charAt(n):a>2047?(r+=String.fromCharCode(224|a>>12&15),r+=String.fromCharCode(128|a>>6&63),r+=String.fromCharCode(128|a>>0&63)):(r+=String.fromCharCode(192|a>>6&31),r+=String.fromCharCode(128|a>>0&63))}return r},gt={name:"fui-qrcode",emits:["ready","longclick","touchStart","touchEnd"],props:{width:{type:[Number,String],default:400},height:{type:[Number,String],default:400},value:{type:String,default:""},foreground:{type:String,default:"#181818"},background:{type:String,default:"#ffffff"}},data(){return{canvasId:`fui_qr_${Math.ceil(Math.random()*1e6).toString(36)}`,errorCorrectLevel:2,typeNumber:-1,w:200,h:200}},computed:{initDraw(){return`${this.width}_${this.height}_${this.foreground}_${this.background}_${this.value}`}},watch:{initDraw(t){this.w=b(this.width||400),this.h=b(this.height||400),this.$nextTick(()=>{this.draw()})}},created(){this.w=b(this.width||400),this.h=b(this.height||400),this.ctx=null},mounted(){this.$nextTick(()=>{setTimeout(()=>{this.draw(),this.$emit("ready",{canvasId:this.canvasId})},50)})},beforeUnmount(){this.ctx=null},methods:{draw(){const e=K(dt(this.value),{typeNumber:this.typeNumber,errorCorrectLevel:this.errorCorrectLevel}).modules,r=this.w/e.length,n=this.h/e.length;this.ctx||(this.ctx=U(this.canvasId,this)),this.ctx.scale(1,1),e.forEach((a,s)=>{a.forEach((o,i)=>{this.ctx.setFillStyle(o?this.foreground:this.background);const h=Math.ceil((i+1)*r)-Math.floor(i*r),f=Math.ceil((s+1)*n)-Math.floor(s*n);this.ctx.fillRect(Math.round(i*r),Math.round(s*n),h,f)})}),this.ctx.draw()},longtap(){this.$emit("longclick",{})},touchstart(){this.$emit("touchStart",{})},touchend(){this.$emit("touchEnd",{})}}};function vt(t,e,r,n,a,s){const o=Y;return a.canvasId?(N(),$(o,{key:0,id:a.canvasId,"canvas-id":a.canvasId,style:X({width:a.w+"px",height:a.h+"px"}),onLongtap:s.longtap,onTouchend:s.touchend,onTouchstart:s.touchstart},null,8,["id","canvas-id","style","onLongtap","onTouchend","onTouchstart"])):J("v-if",!0)}const pt=F(gt,[["render",vt]]),mt=V({__name:"deposit",setup(t){const e=I(!1),r=I({currency_id:"",currency_name:"",address:""}),{t:n}=z();function a(u){ut({title:u,icon:"none"})}function s(u){ot({data:u,success(){a(n("position.deposit.CopySuccess"))}})}function o(u){r.value.currency_id=u.id,r.value.currency_name=u.name,r.value.address=u.address,e.value=!1}const i=I([]);W(()=>{Z.get("/user/getCurrency").then(u=>{i.value=u.data,r.value.currency_name=i.value[0].name,r.value.currency_id=i.value[0].id,r.value.address=i.value[0].address})});function h(){s(r.value.address)}const f=I({showTopBar:!0,topBarBgColor:"white",showTopBarBackBtn:!0,topBarTitle:n("position.deposit.deposit")});return et(lt,f),(u,C)=>{const R=rt(nt("page-meta"),ft),x=at,D=st,p=it,P=ht;return N(),O(H,null,[c(R),j("div",{class:"init-top"}),c(P,{"class-name":"IndexRouter"},{default:g(()=>[c(p,{class:"mt-[20px] mx-[34px]"},{default:g(()=>[c(p,{class:"relative"},{default:g(()=>[c(p,{class:"flex items-center justify-between"},{default:g(()=>[c(x,{class:"text-[35px]"},{default:g(()=>[M(k(w(n)("position.deposit.ChoiceCurrency")),1)]),_:1}),c(p,{class:"flex items-center justify-between bg-black dropdown",onClick:C[0]||(C[0]=L=>e.value=!w(e))},{default:g(()=>[c(x,{class:"text-[26px] text-white px-[10px]"},{default:g(()=>[M(k(w(r).currency_name),1)]),_:1}),c(D,{src:w(e)?"/static/images/icon-dropup.png":"/static/images/icon-dropdown.png",class:"w-[18px] h-[18px]"},null,8,["src"])]),_:1})]),_:1}),c(p,{class:q([w(e)?"h-auto":"h-0","dropdown-item bg-black text-white"])},{default:g(()=>[(N(!0),O(H,null,tt(w(i),(L,Q)=>(N(),$(p,{key:Q,class:"item",onClick:_t=>o(L)},{default:g(()=>[c(x,{class:"text-[26px]"},{default:g(()=>[M(k(L.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1},8,["class"])]),_:1}),c(p,{class:"p-[30px] mt-[40px] bg-[#f5f7f9] rounded-[20px]"},{default:g(()=>[c(x,{class:"text-24px] sub-title"},{default:g(()=>[M(k(w(n)("position.deposit.TokenAddress")),1)]),_:1}),c(p,{class:"grid place-items-center p-[36px]"},{default:g(()=>[c(p,{class:"qrcode"},{default:g(()=>[c(pt,{value:w(r).address,height:"222",width:"222"},null,8,["value"])]),_:1})]),_:1}),c(p,{class:"flex items-center justify-center py-[4px] px-[16px] text-center bg-white rounded-[25px]",onClick:h},{default:g(()=>[c(p,null,{default:g(()=>[c(D,{class:"w-[22px] h-[22px]",src:ct})]),_:1}),c(x,{class:"ml-[10px] text-[24px]"},{default:g(()=>[M(k(w(r).address),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});const xt=F(mt,[["__scopeId","data-v-b01592dc"]]);export{xt as default};
