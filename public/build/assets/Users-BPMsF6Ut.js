import{_ as f}from"./AuthenticatedLayout-hK9Fu3Th.js";import{r as h,o as v,c as r,a as i,u as m,w as l,F as u,b as n,d as g,e,h as x,g as _,i as w,P as k,t as d,f as y}from"./app-JIuq7t-B.js";import{_ as B}from"./AdminTopNavigation-B0MqavRN.js";import{P}from"./PaginatorComponent-d3Iyzo79.js";import"./ApplicationLogo-Bw-pd1Lv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PrimaryButton-BXNSUttb.js";import"./SecondaryButton-DKtpCAKj.js";const b={class:"card"},C={key:0},N={class:"border-b flex justify-between items-center py-2 sm:p-2"},V={class:"font-bold"},j={class:"text-xs opacity-25"},D={key:0,class:""},U={class:"text-sm"},F={class:"flex justify-end items-center mt-4"},S={class:"w-full lg:w-1/3"},H={__name:"Users",setup(T){const s=h({});v(()=>{c()});function c(o=1){axios.get("/admin/users?cached=false&page="+o+"&relations=currentTeam&orderBy=id,desc").then(t=>{s.value=t.data.data}).catch(t=>{console.log(t)})}function p(o){c(o)}return(o,t)=>(n(),r(u,null,[i(m(g),{title:"Users"}),i(f,null,{header:l(()=>[i(B)]),default:l(()=>[e("div",b,[s.value.data&&s.value.data.length?(n(),r("div",C,[(n(!0),r(u,null,x(s.value.data,a=>(n(),w(m(k),{href:o.route("admin.user",a.id),class:"hover:no-underline hover:opacity-75"},{default:l(()=>[e("div",N,[e("div",null,[e("div",V,[e("span",j," #"+d(a.id),1),y(" "+d(a.name),1)]),a.current_team?(n(),r("div",D,d(a.current_team.name),1)):_("",!0),e("div",U,d(a.email),1)]),t[0]||(t[0]=e("div",{class:"text-2xl"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})])],-1))])]),_:2},1032,["href"]))),256))])):_("",!0),e("div",F,[e("div",S,[i(P,{onSetDataPage:p,"pagination-data":s.value},null,8,["pagination-data"])])])])]),_:1})],64))}};export{H as default};
