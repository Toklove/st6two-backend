import{aH as o,r as u,aI as f,ax as d,aJ as v,aE as l,aK as i,aL as h,n as m}from"./index-077585d0.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:v(a)});const r=t.push(n.value,e);return d(n,c=>{r.patch(c)}),m()&&(l(()=>{r.dispose()}),i(()=>{s.value=!0}),h(()=>{s.value=!1})),r}export{U as u};
