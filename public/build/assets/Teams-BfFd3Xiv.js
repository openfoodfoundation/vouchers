<<<<<<<< HEAD:public/build/assets/Teams-BfFd3Xiv.js
import{_ as g}from"./AuthenticatedLayout-CIjOjlEx.js";import{r as m,o as w,a as i,b as l,d as s,u as d,w as n,F as u,Z as k,e,i as f,f as _,j as x,h as y,k as B,t as p}from"./app-Be3sEMEx.js";import{_ as P}from"./AdminTopNavigation-DrZIEwqT.js";import{P as b}from"./PrimaryButton-Diou51hd.js";import{P as C}from"./PaginatorComponent-B3UqihSm.js";import"./ApplicationLogo-C_jim_VY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./SecondaryButton-D8BO-Wbm.js";const N={class:"card"},T={class:"card"},j={key:0},V={class:"border-b flex justify-between items-center py-2 sm:p-2"},D={class:"font-bold"},F={class:"text-xs opacity-25"},S={class:"flex justify-end items-center mt-4"},$={class:"w-full lg:w-1/3"},I={__name:"Teams",setup(z){const h=m(20),o=m({});w(()=>{c()});function c(a=1){axios.get("/admin/teams?cached=false&page="+a+"&limit="+h.value+"&orderBy=id,desc").then(t=>{o.value=t.data.data}).catch(t=>{console.log(t)})}function v(a){c(a)}return(a,t)=>(i(),l(u,null,[s(d(k),{title:"Teams"}),s(g,null,{header:n(()=>[s(P)]),default:n(()=>[e("div",N,[s(b,null,{default:n(()=>[s(d(f),{href:a.route("admin.teams.new")},{default:n(()=>t[0]||(t[0]=[_(" Create New Team ")])),_:1},8,["href"])]),_:1})]),e("div",T,[o.value.data&&o.value.data.length?(i(),l("div",j,[(i(!0),l(u,null,x(o.value.data,r=>(i(),B(d(f),{href:a.route("admin.team",r.id),class:"hover:no-underline hover:opacity-75"},{default:n(()=>[e("div",V,[e("div",null,[e("div",D,[e("span",F," #"+p(r.id),1),_(" "+p(r.name),1)])]),t[1]||(t[1]=e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})])],-1))])]),_:2},1032,["href"]))),256))])):y("",!0),e("div",S,[e("div",$,[s(C,{onSetDataPage:v,"pagination-data":o.value},null,8,["pagination-data"])])])])]),_:1})],64))}};export{I as default};
========
import{_ as g}from"./AuthenticatedLayout--tl3R_0k.js";import{r as m,o as w,a as i,b as l,d as s,u as d,w as n,F as u,Z as k,e,i as f,f as _,j as x,h as y,k as B,t as p}from"./app-BjoHTVP_.js";import{_ as P}from"./AdminTopNavigation-DqgVOFmM.js";import{P as b}from"./PrimaryButton-Bh3wBNhX.js";import{P as C}from"./PaginatorComponent-DwJRF5AQ.js";import"./ApplicationLogo-C8OWFvNg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./SecondaryButton-CcUdA0Th.js";const N={class:"card"},T={class:"card"},j={key:0},V={class:"border-b flex justify-between items-center py-2 sm:p-2"},D={class:"font-bold"},F={class:"text-xs opacity-25"},S={class:"flex justify-end items-center mt-4"},$={class:"w-full lg:w-1/3"},I={__name:"Teams",setup(z){const h=m(20),o=m({});w(()=>{c()});function c(a=1){axios.get("/admin/teams?cached=false&page="+a+"&limit="+h.value+"&orderBy=id,desc").then(t=>{o.value=t.data.data}).catch(t=>{console.log(t)})}function v(a){c(a)}return(a,t)=>(i(),l(u,null,[s(d(k),{title:"Teams"}),s(g,null,{header:n(()=>[s(P)]),default:n(()=>[e("div",N,[s(b,null,{default:n(()=>[s(d(f),{href:a.route("admin.teams.new")},{default:n(()=>t[0]||(t[0]=[_(" Create New Team ")])),_:1},8,["href"])]),_:1})]),e("div",T,[o.value.data&&o.value.data.length?(i(),l("div",j,[(i(!0),l(u,null,x(o.value.data,r=>(i(),B(d(f),{href:a.route("admin.team",r.id),class:"hover:no-underline hover:opacity-75"},{default:n(()=>[e("div",V,[e("div",null,[e("div",D,[e("span",F," #"+p(r.id),1),_(" "+p(r.name),1)])]),t[1]||(t[1]=e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})])],-1))])]),_:2},1032,["href"]))),256))])):y("",!0),e("div",S,[e("div",$,[s(C,{onSetDataPage:v,"pagination-data":o.value},null,8,["pagination-data"])])])])]),_:1})],64))}};export{I as default};
>>>>>>>> develop:public/build/assets/Teams-SpfcvvLq.js
