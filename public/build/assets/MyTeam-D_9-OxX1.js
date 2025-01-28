import{S as k,_ as B}from"./AuthenticatedLayout-g1vr9I5j.js";import{r as v,o as b,b as s,c as a,d as e,a as f,h as C,w as h,e as g,f as _,F as p,g as x,t as y,l as V,u as N,m as j,n as D}from"./app-BeoXE9Ay.js";import"./dayjs.min-QAxH5eZp.js";import"./relativeTime-Co3-aFHr.js";import"./utc-BZBsIUUQ.js";import{_ as E}from"./TextInput-DoCCI7Ek.js";import{P as $}from"./PrimaryButton-C4Jij1yK.js";import"./ApplicationLogo-BQ2BXfcK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const F={key:0,class:"card"},P={key:0},U={class:"flex justify-between items-center"},q={class:"flex-grow mr-2"},z={class:"ml-2"},K={key:0,class:"p-2 text-sm"},L=["onClick"],O={key:1,class:"flex justify-between items-center"},Y={class:"ml-2"},A={__name:"MyTeamEditorComponent",setup(w){const n=v({}),c=v({}),i=v({}),u=v(""),o=v(!1);b(()=>{d()});function r(){o.value=!1,u.value="",n.value={}}function d(){axios.get("/my-team?cached=false&relations=country").then(l=>{c.value=l.data.data,i.value=c.value.country}).catch(l=>{console.log(l)})}function T(l){i.value=l,n.value={},o.value=!1}function M(){let l={country_id:i.value.id};axios.put("/my-team/"+V().props.auth.user.current_team_id,l).then(t=>{k.fire({title:"Success!",icon:"success",timer:1e3}).then(()=>{d()})}).catch(t=>{k.fire({icon:"error",title:"Oops!",text:t.response.data.message})})}function S(){u.value.length>2&&axios.get("/countries?cached=false&where[]=name,like,*"+u.value+"*&").then(l=>{n.value=l.data.data}).catch(l=>{console.log(l)})}return(l,t)=>c.value.country?(s(),a("div",F,[t[7]||(t[7]=e("div",{class:"card-header"}," Country / Currency ",-1)),o.value?(s(),a("div",P,[e("div",U,[e("div",q,[f(E,{id:"country",type:"text",class:"mt-1 block w-full",modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=m=>u.value=m),required:"",onKeyup:t[1]||(t[1]=m=>S())},null,8,["modelValue"])]),e("div",z,[u.value.length===0||i.value.id===c.value.country_id?(s(),C($,{key:0,onClick:t[2]||(t[2]=m=>r())},{default:h(()=>t[5]||(t[5]=[g("Cancel")])),_:1})):_("",!0)])]),n.value.data&&n.value.data.length?(s(),a("div",K,[(s(!0),a(p,null,x(n.value.data,m=>(s(),a("div",{class:"py-1 border-b cursor-pointer hover:opacity-50",onClick:oe=>T(m)},y(m.name),9,L))),256))])):_("",!0)])):(s(),a("div",O,[e("div",{onClick:t[3]||(t[3]=m=>o.value=!0),class:"cursor-pointer flex-grow mr-2"},y(i.value.name)+" ("+y(i.value.currency_code)+") ",1),e("div",Y,[u.value.length>0&&i.value.id!==c.value.country_id?(s(),C($,{key:0,onClick:t[4]||(t[4]=m=>M())},{default:h(()=>t[6]||(t[6]=[g("Save")])),_:1})):_("",!0)])]))])):_("",!0)}},G={class:"card"},H={class:"flex items-start font-bold"},I={class:"pl-2 text-2xl"},J={class:"card",id:"myTeamMembers"},Q={key:0},R={class:""},W={key:0,class:"flex items-center"},X={class:"card"},Z={class:""},ee={class:"border-b py-2 flex justify-between"},te={key:0},se={key:1},ae=["href"],_e={__name:"MyTeam",setup(w){const n=v({}),c=v({});b(()=>{i(),u()});function i(){axios.get("/my-team?cached=false&relations=teamUsers.user").then(o=>{n.value=o.data.data}).catch(o=>{console.log(o)})}function u(){axios.get("/my-teams?cached=false&orderBy=name,asc").then(o=>{c.value=o.data.data}).catch(o=>{console.log(o)})}return(o,r)=>(s(),a(p,null,[f(N(j),{title:"Dashboard"}),f(B,null,{header:h(()=>r[0]||(r[0]=[g(" My Team ")])),default:h(()=>[e("div",G,[e("div",H,[e("div",I,y(n.value.name),1)])]),e("div",J,[r[1]||(r[1]=e("div",{class:"card-header"}," Team members ",-1)),n.value.team_users&&n.value.team_users.length>0?(s(),a("div",Q,[(s(!0),a(p,null,x(n.value.team_users,d=>(s(),a("div",R,[e("div",{class:D({"border-b p-2":n.value.team_users.length>1})},[d.user?(s(),a("div",W,[e("div",null,y(d.user.name),1)])):_("",!0)],2)]))),256))])):_("",!0)]),e("div",X,[r[2]||(r[2]=e("div",{class:"card-header"}," Teams You Belong To ",-1)),(s(!0),a(p,null,x(c.value.data,d=>(s(),a("div",Z,[e("div",ee,[e("div",null,y(d.name),1),e("div",null,[d.id===o.$page.props.auth.user.current_team_id?(s(),a("div",te," Current ")):(s(),a("div",se,[e("a",{href:"/switch-team/"+d.id,class:"text-red-500"},"Switch to this team",8,ae)]))])])]))),256))]),f(A),r[3]||(r[3]=e("div",{class:"pb-32"},null,-1))]),_:1})],64))}};export{_e as default};
