import{_ as f}from"./AuthenticatedLayout-CIjOjlEx.js";import{r as h,o as v,a as n,b as r,d as i,u as m,w as d,F as u,Z as g,e,j as x,h as _,k as w,i as k,t as l,f as y}from"./app-Be3sEMEx.js";import{_ as B}from"./AdminTopNavigation-DrZIEwqT.js";import{P as b}from"./PaginatorComponent-B3UqihSm.js";import"./ApplicationLogo-C_jim_VY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PrimaryButton-Diou51hd.js";import"./SecondaryButton-D8BO-Wbm.js";const j={class:"card"},C={key:0},N={class:"border-b flex justify-between items-center py-2 sm:p-2"},P={class:"font-bold"},V={class:"text-xs opacity-25"},D={key:0,class:""},U={class:"text-sm"},F={class:"flex justify-end items-center mt-4"},S={class:"w-full lg:w-1/3"},G={__name:"Users",setup(T){const s=h({});v(()=>{c()});function c(o=1){axios.get("/admin/users?cached=false&page="+o+"&relations=currentTeam&orderBy=id,desc").then(t=>{s.value=t.data.data}).catch(t=>{console.log(t)})}function p(o){c(o)}return(o,t)=>(n(),r(u,null,[i(m(g),{title:"Users"}),i(f,null,{header:d(()=>[i(B)]),default:d(()=>[e("div",j,[s.value.data&&s.value.data.length?(n(),r("div",C,[(n(!0),r(u,null,x(s.value.data,a=>(n(),w(m(k),{href:o.route("admin.user",a.id),class:"hover:no-underline hover:opacity-75"},{default:d(()=>[e("div",N,[e("div",null,[e("div",P,[e("span",V," #"+l(a.id),1),y(" "+l(a.name),1)]),a.current_team?(n(),r("div",D,l(a.current_team.name),1)):_("",!0),e("div",U,l(a.email),1)]),t[0]||(t[0]=e("div",{class:"text-2xl"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})])],-1))])]),_:2},1032,["href"]))),256))])):_("",!0),e("div",F,[e("div",S,[i(b,{onSetDataPage:p,"pagination-data":s.value},null,8,["pagination-data"])])])])]),_:1})],64))}};export{G as default};
