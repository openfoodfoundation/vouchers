import{_}from"./AuthenticatedLayout-8mYNjvMq.js";import{r as f,o as h,a as o,b as n,d as r,u,w as c,F as m,Z as v,e,j as g,h as p,k as x,i as k,t as l,f as w}from"./app-BJ7ObvRL.js";import{_ as y}from"./AdminTopNavigation-DevE2OXG.js";import{P as A}from"./PaginatorComponent-B2V6C4LW.js";import"./ApplicationLogo-BF5n9Q1I.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PrimaryButton-DUQpwMEB.js";import"./sweetalert2.esm.all-BccGxJ0c.js";import"./SecondaryButton-B5eatlOV.js";const B={class:"card"},b={key:0},P={class:"border-b flex justify-between items-center py-2 sm:p-2"},T={class:"font-bold"},j={class:"text-xs opacity-25"},C={key:0,class:"text-sm"},N={class:"flex justify-end items-center mt-4"},V={class:"w-full lg:w-1/3"},q={__name:"APIAccessTokens",setup(I){const t=f({});h(()=>{d()});function d(i=1){axios.get("/admin/user-personal-access-tokens?cached=false&page="+i+"&relations=user&orderBy=id,desc").then(s=>{t.value=s.data.data}).catch(s=>{console.log(s)})}return(i,s)=>(o(),n(m,null,[r(u(v),{title:"API Access Tokens"}),r(_,null,{header:c(()=>[r(y)]),default:c(()=>[e("div",B,[t.value.data&&t.value.data.length?(o(),n("div",b,[(o(!0),n(m,null,g(t.value.data,a=>(o(),x(u(k),{href:i.route("admin.api-access-token",a.id),class:"hover:no-underline hover:opacity-75"},{default:c(()=>[e("div",P,[e("div",null,[e("div",T,[e("span",j," #"+l(a.id),1),w(" "+l(a.name),1)]),a.user?(o(),n("div",C," Issued to: "+l(a.user.name),1)):p("",!0)]),s[0]||(s[0]=e("div",{class:"text-2xl"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})])],-1))])]),_:2},1032,["href"]))),256))])):p("",!0),e("div",N,[e("div",V,[r(A,{onSetDataPage:d,"pagination-data":t.value},null,8,["pagination-data"])])])])]),_:1})],64))}};export{q as default};
