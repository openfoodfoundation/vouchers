import{_ as f}from"./AuthenticatedLayout-fdh2LT__.js";import{r as l,o as p,a as t,b as a,d as i,u as y,w as _,F as d,Z as g,e,t as r,j as u,h as m,n as x}from"./app-CLWo_2_0.js";import"./ApplicationLogo-BOnuEcuS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b=e("h2",{class:"font-normal text-xl text-gray-800 leading-tight"},"My Team",-1),T={class:"card"},k={class:"flex items-start font-bold"},w={class:"pl-2 text-2xl"},B={class:"card"},M=e("div",{class:"card-header"}," Team members ",-1),C={key:0},N={class:""},V={key:0,class:"flex items-center"},j={class:"card"},D=e("div",{class:"card-header"}," Teams You Belong To ",-1),F={class:""},S={class:"border-b py-2 flex justify-between"},$={key:0},z={key:1},E=["href"],L=e("div",{class:"pb-32"},null,-1),I={__name:"MyTeam",setup(Y){const o=l({}),c=l({});p(()=>{h(),v()});function h(){axios.get("/my-team?cached=false&relations=teamUsers.user").then(s=>{o.value=s.data.data}).catch(s=>{console.log(s)})}function v(){axios.get("/my-teams?cached=false&orderBy=name,asc").then(s=>{c.value=s.data.data}).catch(s=>{console.log(s)})}return(s,Z)=>(t(),a(d,null,[i(y(g),{title:"Dashboard"}),i(f,null,{header:_(()=>[b]),default:_(()=>[e("div",T,[e("div",k,[e("div",w,r(o.value.name),1)])]),e("div",B,[M,o.value.team_users&&o.value.team_users.length>0?(t(),a("div",C,[(t(!0),a(d,null,u(o.value.team_users,n=>(t(),a("div",N,[e("div",{class:x({"border-b p-2":o.value.team_users.length>1})},[n.user?(t(),a("div",V,[e("div",null,r(n.user.name),1)])):m("",!0)],2)]))),256))])):m("",!0)]),e("div",j,[D,(t(!0),a(d,null,u(c.value.data,n=>(t(),a("div",F,[e("div",S,[e("div",null,r(n.name),1),e("div",null,[n.id===s.$page.props.auth.user.current_team_id?(t(),a("div",$," Current ")):(t(),a("div",z,[e("a",{href:"/switch-team/"+n.id,class:"text-red-500"},"Switch to this team",8,E)]))])])]))),256))]),L]),_:1})],64))}};export{I as default};
