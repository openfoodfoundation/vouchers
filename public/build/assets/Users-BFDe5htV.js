import{_ as p}from"./AuthenticatedLayout-CIDOT4ie.js";import{r as f,j as v,o,c as r,d as i,u as _,w as d,F as m,Z as g,b as e,h as x,a as u,k as w,i as k,t as c,e as y}from"./app-CltQFPkz.js";import{_ as B}from"./AdminTopNavigation-oEOjpVXZ.js";import{P as b}from"./PaginatorComponent-D5izpU2Q.js";import"./ApplicationLogo-Ds96tcAD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./SecondaryButton-D6O32Iz2.js";const j={class:"card"},C={key:0},N={class:"border-b flex justify-between items-center py-2 sm:p-2"},P={class:"font-bold"},V={class:"text-xs opacity-25"},D={key:0,class:""},U={class:"text-sm"},F=e("div",{class:"text-2xl"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})])],-1),S={class:"flex justify-end items-center mt-4"},T={class:"w-full lg:w-1/3"},G={__name:"Users",setup($){const a=f({});v(()=>{l()});function l(s=1){axios.get("/admin/users?cached=false&page="+s+"&relations=currentTeam&orderBy=id,desc").then(n=>{a.value=n.data.data}).catch(n=>{console.log(n)})}function h(s){l(s)}return(s,n)=>(o(),r(m,null,[i(_(g),{title:"Users"}),i(p,null,{header:d(()=>[i(B)]),default:d(()=>[e("div",j,[a.value.data&&a.value.data.length?(o(),r("div",C,[(o(!0),r(m,null,x(a.value.data,t=>(o(),w(_(k),{href:s.route("admin.user",t.id),class:"hover:no-underline hover:opacity-75"},{default:d(()=>[e("div",N,[e("div",null,[e("div",P,[e("span",V," #"+c(t.id),1),y(" "+c(t.name),1)]),t.current_team?(o(),r("div",D,c(t.current_team.name),1)):u("",!0),e("div",U,c(t.email),1)]),F])]),_:2},1032,["href"]))),256))])):u("",!0),e("div",S,[e("div",T,[i(b,{onSetDataPage:h,"pagination-data":a.value},null,8,["pagination-data"])])])])]),_:1})],64))}};export{G as default};
