import{_}from"./AuthenticatedLayout-hK9Fu3Th.js";import{r as f,o as h,c as n,a as r,u,w as c,F as m,b as o,d as v,e,h as g,g as p,i as x,P as k,t as d,f as w}from"./app-JIuq7t-B.js";import{_ as y}from"./AdminTopNavigation-B0MqavRN.js";import{P as A}from"./PaginatorComponent-d3Iyzo79.js";import"./ApplicationLogo-Bw-pd1Lv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PrimaryButton-BXNSUttb.js";import"./SecondaryButton-DKtpCAKj.js";const P={class:"card"},B={key:0},b={class:"border-b flex justify-between items-center py-2 sm:p-2"},T={class:"font-bold"},C={class:"text-xs opacity-25"},N={key:0,class:"text-sm"},V={class:"flex justify-end items-center mt-4"},j={class:"w-full lg:w-1/3"},q={__name:"APIAccessTokens",setup(I){const t=f({});h(()=>{l()});function l(i=1){axios.get("/admin/user-personal-access-tokens?cached=false&page="+i+"&relations=user&orderBy=id,desc").then(s=>{t.value=s.data.data}).catch(s=>{console.log(s)})}return(i,s)=>(o(),n(m,null,[r(u(v),{title:"API Access Tokens"}),r(_,null,{header:c(()=>[r(y)]),default:c(()=>[e("div",P,[t.value.data&&t.value.data.length?(o(),n("div",B,[(o(!0),n(m,null,g(t.value.data,a=>(o(),x(u(k),{href:i.route("admin.api-access-token",a.id),class:"hover:no-underline hover:opacity-75"},{default:c(()=>[e("div",b,[e("div",null,[e("div",T,[e("span",C," #"+d(a.id),1),w(" "+d(a.name),1)]),a.user?(o(),n("div",N," Issued to: "+d(a.user.name),1)):p("",!0)]),s[0]||(s[0]=e("div",{class:"text-2xl"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})])],-1))])]),_:2},1032,["href"]))),256))])):p("",!0),e("div",V,[e("div",j,[r(A,{onSetDataPage:l,"pagination-data":t.value},null,8,["pagination-data"])])])])]),_:1})],64))}};export{q as default};
