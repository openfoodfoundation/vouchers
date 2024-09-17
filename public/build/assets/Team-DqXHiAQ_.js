import{a,b as s,e,t as N,r as h,d as i,l as L,m as F,F as j,j as A,h as S,o as E,w as k,f as $,u as V,i as D,n as R,Z as Y,p as Z,v as H}from"./app-CsvKUCVF.js";import{S as I,_ as J}from"./AuthenticatedLayout-DLt9L55p.js";import{_ as Q}from"./AdminTopNavigation-D_3iC7ay.js";import{P as U}from"./PaginatorComponent-Cg4wz7Eu.js";import{P as B}from"./PrimaryButton-CrY-NrTG.js";import{_ as M}from"./TextInput-YzWOwcQi.js";import{_ as q}from"./InputLabel-BVjOt5oO.js";import{_ as G}from"./AdminTeamCreateComponent-B9CFs54j.js";import{_ as X}from"./AdminUserDetailsComponent-ChPYDoFy.js";import{_ as ee}from"./SecondaryButton-BTNMwpvB.js";import{_ as te}from"./AjaxLoadingIndicator-BarBwodt.js";import{d as O}from"./dayjs.min-B1s2FNJD.js";import{r as ae}from"./relativeTime-B4aTyaiK.js";import{u as se}from"./utc-CuhrPUJG.js";import{D as ne}from"./DangerButton-C4oVUDHK.js";import{_ as K}from"./VoucherSetsComponent-Dg7jFXhV.js";import{_ as W}from"./VouchersComponent-B-fT-oP0.js";import"./ApplicationLogo-Cox3Zk07.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ie={class:"flex justify-start items-center"},oe={class:"text-xs mr-2"},le={class:""},P={__name:"AdminTeamDetailsComponent",props:{team:{required:!0,type:Object}},setup(g){const c=g;return(f,p)=>(a(),s("div",ie,[e("div",oe,"#"+N(c.team.id),1),e("div",le,N(c.team.name),1)]))}},de={key:0},re={key:1},ue={key:0,class:"mt-4"},me={class:"border-b py-1"},ce=["onClick"],ve={key:0,class:"text-red-500 text-xs italic pl-2"},fe={key:1},_e={__name:"AdminTeamMerchantTeamSelectComponent",props:{teamId:{required:!1,default:null}},emits:["teamSelected"],setup(g,{emit:c}){const f=g,p=h(!1),l=h(""),o=h({}),m=c;function y(){axios.get("/admin/teams?where[]=name,like,*"+l.value+"*&limit=100&relations=teamsThisTeamIsMerchantFor").then(u=>{o.value=u.data.data}).catch(u=>{console.log(u)})}function b(){p.value=!0,o.value={}}function C(u){w(u)}function w(u){m("teamSelected",u),l.value="",o.value={}}function T(u){return u.teams_this_team_is_merchant_for.find(r=>r.team_id===f.teamId)}return(u,r)=>p.value?(a(),s("div",de,[i(G,{searchStr:l.value,onTeamCreated:C},null,8,["searchStr"])])):(a(),s("div",re,[e("div",null,[i(q,{for:"name",value:"Team name(Type to search and press Enter)"}),i(M,{onKeyup:r[0]||(r[0]=L(F(n=>y(),["prevent"]),["enter"])),id:"name",type:"text",class:"mt-1 block w-full",modelValue:l.value,"onUpdate:modelValue":r[1]||(r[1]=n=>l.value=n),required:""},null,8,["modelValue"])]),l.value.length>0&&o.value.total>0?(a(),s("div",ue,[(a(!0),s(j,null,A(o.value.data,n=>(a(),s("div",me,[e("button",{onClick:t=>w(n),class:"flex justify-start items-end"},[i(P,{team:n},null,8,["team"]),T(n)?(a(),s("span",ve,"***Already added")):S("",!0)],8,ce)]))),256)),e("div",{class:"text-red-500 text-sm mt-4 cursor-pointer hover:underline",onClick:r[2]||(r[2]=n=>b())}," Create a new team? ")])):S("",!0),l.value.length>0&&o.value.total===0?(a(),s("div",fe,[e("div",{class:"text-red-500 text-sm mt-4 cursor-pointer hover:underline",onClick:r[3]||(r[3]=n=>b())}," We could not find teams. Do you want to create a new team? ")])):S("",!0)]))}},he={class:"grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4"},pe={class:"card"},xe={class:"card-header flex justify-between items-center"},ge={class:"text-xs italic"},ye={class:""},we={class:"flex justify-end"},$e={key:0},ke={key:1},be={key:0},Ce={key:1},Te={class:"py-2"},Se={class:"font-bold"},Ne={key:2},Ie={key:0,class:"mb-8"},je={class:"border-b py-1 flex justify-between items-end"},Ae=["onClick"],Ve={class:"flex justify-end items-center mt-4"},Be={class:"w-full lg:w-1/3"},De={class:"card"},Me={class:"card-header"},Ue={class:"text-xs italic"},Pe={key:0,class:"mb-8"},qe={class:"border-b py-1 flex justify-between items-end"},ze=["onClick"],Fe={class:"flex justify-end items-center mt-4"},Oe={class:"w-full lg:w-1/3"},Ee={__name:"AdminTeamMerchantTeamsComponent",props:{teamId:{required:!0,type:Number},teamName:{required:!0}},setup(g){const c=g,f=h(!1),p=h(!1),l=h({}),o=h({}),m=h({});E(()=>{C(),w()});function y(){f.value=!0}function b(){f.value=!1,p.value=!1,m.value={}}function C(n=1){axios.get("/admin/team-merchant-teams?cached=false&where[]=team_id,"+c.teamId+"&page="+n+"&relations=merchantTeam").then(t=>{l.value=t.data.data}).catch(t=>{console.log(t)})}function w(n=1){axios.get("/admin/team-merchant-teams?cached=false&where[]=merchant_team_id,"+c.teamId+"&page="+n+"&relations=team").then(t=>{o.value=t.data.data}).catch(t=>{console.log(t)})}function T(n){I.fire({title:"Are you sure you want to delete?",text:"This action cannot be undone. Please confirm if you wish to proceed.",icon:"warning",confirmButtonColor:"#3085d6",confirmButtonText:"Delete merchant team",showCancelButton:!0}).then(t=>{t.isConfirmed&&axios.delete("/admin/team-merchant-teams/"+n).then(v=>{I.fire({title:"Success!",icon:"success",timer:1e3}).then(()=>{C(),w()})}).catch(v=>{console.log(v)})})}function u(){let n={team_id:c.teamId,merchant_team_id:m.value.id};axios.post("/admin/team-merchant-teams",n).then(t=>{I.fire({title:"Success!",icon:"success",timer:1e3}).then(()=>{m.value={},p.value=!1,C(),w()})}).catch(t=>{console.log(t)})}function r(n){m.value=n,f.value=!1,p.value=!0}return(n,t)=>(a(),s("div",he,[e("div",pe,[e("div",xe,[e("div",null,[t[3]||(t[3]=e("div",null," Merchant teams ",-1)),e("div",ge," These teams may redeem vouchers for "+N(g.teamName),1)]),e("div",ye,[e("div",we,[!f.value&&!p.value?(a(),s("div",$e,[i(B,{onClick:t[0]||(t[0]=v=>y()),class:"ms-4"},{default:k(()=>t[4]||(t[4]=[$(" Add Merchant Team ")])),_:1})])):(a(),s("div",ke,[i(B,{onClick:t[1]||(t[1]=v=>b()),class:"ms-4"},{default:k(()=>t[5]||(t[5]=[$(" Cancel ")])),_:1})]))])])]),f.value?(a(),s("div",be,[t[6]||(t[6]=e("div",{class:"py-2"},"Select merchant team...",-1)),i(_e,{teamId:g.teamId,onTeamSelected:r},null,8,["teamId"])])):p.value?(a(),s("div",Ce,[e("div",Te,[t[7]||(t[7]=$("Add ")),e("span",Se,N(m.value.name),1),t[8]||(t[8]=$(" as merchant team? "))]),i(B,{onClick:t[2]||(t[2]=v=>u()),class:""},{default:k(()=>t[9]||(t[9]=[$(" Add ")])),_:1})])):(a(),s("div",Ne,[l.value.data&&l.value.data.length?(a(),s("div",Ie,[(a(!0),s(j,null,A(l.value.data,v=>(a(),s("div",je,[i(V(D),{href:n.route("admin.team",v.merchant_team_id)},{default:k(()=>[i(P,{team:v.merchant_team},null,8,["team"])]),_:2},1032,["href"]),e("button",{onClick:x=>T(v.id),class:"text-xs text-red-500 flex items-center"},t[10]||(t[10]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",class:"size-3"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1),$(" Delete ")]),8,Ae)]))),256)),e("div",Ve,[e("div",Be,[i(U,{onSetDataPage:C,"pagination-data":l.value},null,8,["pagination-data"])])])])):S("",!0)]))]),e("div",De,[e("div",Me,[e("div",null," Teams "+N(g.teamName)+" is merchant for ",1),e("div",Ue,N(g.teamName)+" may redeem vouchers for these teams ",1)]),o.value.data&&o.value.data.length?(a(),s("div",Pe,[(a(!0),s(j,null,A(o.value.data,v=>(a(),s("div",qe,[i(V(D),{href:n.route("admin.team",v.team_id)},{default:k(()=>[i(P,{team:v.team},null,8,["team"])]),_:2},1032,["href"]),e("button",{onClick:x=>T(v.id),class:"text-xs text-red-500 flex items-center"},t[11]||(t[11]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",class:"size-3"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1),$(" Delete ")]),8,ze)]))),256)),e("div",Fe,[e("div",Oe,[i(U,{onSetDataPage:w,"pagination-data":o.value},null,8,["pagination-data"])])])])):S("",!0)])]))}},Ke={key:0},We={key:1},Le={key:0,class:"mt-4"},Ge={class:"border-b py-1"},Re=["onClick"],Ye={key:0,class:"text-red-500 text-xs italic pl-2"},Ze={key:1},He={__name:"AdminTeamServiceTeamSelectComponent",props:{teamId:{required:!1,default:null}},emits:["teamSelected"],setup(g,{emit:c}){const f=g,p=h(!1),l=h(""),o=h({}),m=c;function y(){axios.get("/admin/teams?where[]=name,like,*"+l.value+"*&limit=100&relations=teamsThisTeamIsServiceFor").then(u=>{o.value=u.data.data}).catch(u=>{console.log(u)})}function b(){p.value=!0,o.value={}}function C(u){w(u)}function w(u){m("teamSelected",u),l.value="",o.value={}}function T(u){return u.teams_this_team_is_service_for.find(r=>r.team_id===f.teamId)}return(u,r)=>p.value?(a(),s("div",Ke,[i(G,{searchStr:l.value,onTeamCreated:C},null,8,["searchStr"])])):(a(),s("div",We,[e("div",null,[i(q,{for:"name",value:"Team name(Type to search and press Enter)"}),i(M,{onKeyup:r[0]||(r[0]=L(F(n=>y(),["prevent"]),["enter"])),id:"name",type:"text",class:"mt-1 block w-full",modelValue:l.value,"onUpdate:modelValue":r[1]||(r[1]=n=>l.value=n),required:""},null,8,["modelValue"])]),l.value.length>0&&o.value.total>0?(a(),s("div",Le,[(a(!0),s(j,null,A(o.value.data,n=>(a(),s("div",Ge,[e("button",{onClick:t=>w(n),class:"flex justify-start items-end"},[i(P,{team:n},null,8,["team"]),T(n)?(a(),s("span",Ye,"***Already added")):S("",!0)],8,Re)]))),256)),e("div",{class:"text-red-500 text-sm mt-4 cursor-pointer hover:underline",onClick:r[2]||(r[2]=n=>b())}," Create a new team? ")])):S("",!0),l.value.length>0&&o.value.total===0?(a(),s("div",Ze,[e("div",{class:"text-red-500 text-sm mt-4 cursor-pointer hover:underline",onClick:r[3]||(r[3]=n=>b())}," We could not find teams. Do you want to create a new team? ")])):S("",!0)]))}},Je={class:"grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4"},Qe={class:"card"},Xe={class:"card-header flex justify-between items-center"},et={class:"text-xs italic"},tt={class:""},at={class:"flex justify-end"},st={class:"flex justify-end"},nt={key:0},it={key:1},ot={key:0},lt={key:1},dt={class:"py-2"},rt={class:"font-bold"},ut={key:2},mt={key:0,class:"mb-8"},ct={class:"border-b py-1 flex justify-between items-end"},vt=["onClick"],ft={class:"flex justify-end items-center mt-4"},_t={class:"w-full lg:w-1/3"},ht={class:"card"},pt={class:"card-header"},xt={class:"text-xs italic"},gt={key:0,class:"mb-8"},yt={class:"border-b py-1 flex justify-between items-end"},wt=["onClick"],$t={class:"flex justify-end items-center mt-4"},kt={class:"w-full lg:w-1/3"},bt={__name:"AdminTeamServiceTeamsComponent",props:{teamId:{required:!0,type:Number},teamName:{required:!0}},setup(g){const c=g,f=h(!1),p=h(!1),l=h({}),o=h({}),m=h({});E(()=>{C(),w()});function y(){f.value=!0}function b(){f.value=!1,p.value=!1,m.value={}}function C(n=1){axios.get("/admin/team-service-teams?cached=false&where[]=team_id,"+c.teamId+"&page="+n+"&relations=serviceTeam").then(t=>{l.value=t.data.data}).catch(t=>{console.log(t)})}function w(n=1){axios.get("/admin/team-service-teams?cached=false&where[]=service_team_id,"+c.teamId+"&page="+n+"&relations=team").then(t=>{o.value=t.data.data}).catch(t=>{console.log(t)})}function T(n){I.fire({title:"Are you sure you want to delete?",text:"This action cannot be undone. Please confirm if you wish to proceed.",icon:"warning",confirmButtonColor:"#3085d6",confirmButtonText:"Delete service team",showCancelButton:!0}).then(t=>{t.isConfirmed&&axios.delete("/admin/team-service-teams/"+n).then(v=>{I.fire({title:"Success!",icon:"success",timer:1e3}).then(()=>{C(),w()})}).catch(v=>{console.log(v)})})}function u(){let n={team_id:c.teamId,service_team_id:m.value.id};axios.post("/admin/team-service-teams",n).then(t=>{I.fire({title:"Success!",icon:"success",timer:1e3}).then(()=>{m.value={},p.value=!1,C(),w()})}).catch(t=>{console.log(t)})}function r(n){m.value=n,f.value=!1,p.value=!0}return(n,t)=>(a(),s("div",Je,[e("div",Qe,[e("div",Xe,[e("div",null,[t[3]||(t[3]=e("div",null," Service teams ",-1)),e("div",et," These teams may distribute vouchers for redemption at "+N(g.teamName),1)]),e("div",tt,[e("div",at,[e("div",st,[!f.value&&!p.value?(a(),s("div",nt,[i(B,{onClick:t[0]||(t[0]=v=>y()),class:"ms-4"},{default:k(()=>t[4]||(t[4]=[$(" Add Service Team ")])),_:1})])):(a(),s("div",it,[i(B,{onClick:t[1]||(t[1]=v=>b()),class:"ms-4"},{default:k(()=>t[5]||(t[5]=[$(" Cancel ")])),_:1})]))])])])]),f.value?(a(),s("div",ot,[t[6]||(t[6]=e("div",{class:"py-2"},"Select service team...",-1)),i(He,{teamId:g.teamId,onTeamSelected:r},null,8,["teamId"])])):p.value?(a(),s("div",lt,[e("div",dt,[t[7]||(t[7]=$("Adding ")),e("span",rt,N(m.value.name),1),t[8]||(t[8]=$(" as service team?"))]),i(B,{onClick:t[2]||(t[2]=v=>u()),class:""},{default:k(()=>t[9]||(t[9]=[$(" Add ")])),_:1})])):(a(),s("div",ut,[l.value.data&&l.value.data.length?(a(),s("div",mt,[(a(!0),s(j,null,A(l.value.data,v=>(a(),s("div",ct,[i(V(D),{href:n.route("admin.team",v.service_team_id)},{default:k(()=>[i(P,{team:v.service_team},null,8,["team"])]),_:2},1032,["href"]),e("button",{onClick:x=>T(v.id),class:"text-xs text-red-500 flex items-center"},t[10]||(t[10]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",class:"size-3"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1),$(" Delete ")]),8,vt)]))),256)),e("div",ft,[e("div",_t,[i(U,{onSetDataPage:C,"pagination-data":l.value},null,8,["pagination-data"])])])])):S("",!0)]))]),e("div",ht,[e("div",pt,[e("div",null," Teams "+N(g.teamName)+" is service for ",1),e("div",xt,N(g.teamName)+" may distribute vouchers to these teams ",1)]),o.value.data&&o.value.data.length?(a(),s("div",gt,[(a(!0),s(j,null,A(o.value.data,v=>(a(),s("div",yt,[i(V(D),{href:n.route("admin.team",v.team_id)},{default:k(()=>[i(P,{team:v.team},null,8,["team"])]),_:2},1032,["href"]),e("button",{onClick:x=>T(v.id),class:"text-xs text-red-500 flex items-center"},t[11]||(t[11]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5",class:"size-3"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1),$(" Delete ")]),8,wt)]))),256)),e("div",$t,[e("div",kt,[i(U,{onSetDataPage:w,"pagination-data":o.value},null,8,["pagination-data"])])])])):S("",!0)])]))}},Ct={key:0},Tt={class:"flex items-center justify-end mt-4"},St={key:1},Nt={key:0,class:"mt-4"},It=["onClick"],jt={key:1},At={__name:"AdminUserSelectComponent",props:{teamId:{required:!0,type:Number}},emits:["createNewTeamUser"],setup(g,{emit:c}){const f=g,p=h(!1),l=h({name:"",email:"",current_team_id:null}),o=h(""),m=h({}),y=c;function b(){l.value.current_team_id=f.teamId,axios.post("admin/users",l.value).then(u=>{let r=u.data.data.id;T(r),l.value={name:"",email:"",current_team_id:null},p.value=!1}).catch(u=>{console.log(u)})}function C(){axios.get("/admin/users?where[]=name,like,*"+o.value+"*&limit=100").then(u=>{m.value=u.data.data}).catch(u=>{console.log(u)})}function w(){p.value=!0,m.value={},l.value.name=o.value}function T(u){y("createNewTeamUser",u),o.value="",m.value={}}return(u,r)=>p.value?(a(),s("div",Ct,[e("div",null,[i(q,{for:"name",value:"Name"}),i(M,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:l.value.name,"onUpdate:modelValue":r[0]||(r[0]=n=>l.value.name=n),required:""},null,8,["modelValue"])]),e("div",null,[i(q,{for:"email",value:"Email"}),i(M,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:l.value.email,"onUpdate:modelValue":r[1]||(r[1]=n=>l.value.email=n),required:""},null,8,["modelValue"])]),e("div",Tt,[i(B,{onClick:r[2]||(r[2]=F(n=>b(),["prevent"])),class:R(["ms-4",{"opacity-25":!l.value.name||!l.value.email}]),disabled:!l.value.name||!l.value.email},{default:k(()=>r[7]||(r[7]=[$(" Submit ")])),_:1},8,["class","disabled"])])])):(a(),s("div",St,[e("div",null,[i(q,{for:"name",value:"Find A User"}),i(M,{onKeyup:r[3]||(r[3]=n=>C()),modelValue:o.value,"onUpdate:modelValue":r[4]||(r[4]=n=>o.value=n),class:"mt-1 block w-full",placeholder:"Search by name..",type:"text"},null,8,["modelValue"])]),o.value.length>0&&m.value.total>0?(a(),s("div",Nt,[(a(!0),s(j,null,A(m.value.data,n=>(a(),s("a",{href:"#",onClick:t=>T(n.id),class:"border-b py-1",tabindex:"0"},[i(X,{user:n},null,8,["user"])],8,It))),256)),e("div",{class:"text-red-500 text-sm mt-4 cursor-pointer hover:underline",onClick:r[5]||(r[5]=n=>w())}," Create a new user? ")])):S("",!0),o.value.length>0&&m.value.total===0?(a(),s("div",jt,[e("div",{class:"text-red-500 text-sm mt-4 cursor-pointer hover:underline",onClick:r[6]||(r[6]=n=>w())}," We could not find users. Do you want to create a new user? ")])):S("",!0)]))}},Vt={class:"card"},Bt={class:"card-header flex justify-between"},Dt={class:"grid gap-4 grid-cols-6 mt-8"},Mt={key:0},Ut={key:1},Pt=["src"],qt={class:"flex justify-end items-center mt-4"},zt={class:"w-full lg:w-1/3"},Ft={__name:"AdminTeamVoucherTemplatesList",props:{team:{type:Object,required:!0}},setup(g){const c=g,f=h({});function p(l=1){var o;axios.get("/admin/team-voucher-templates?cached=false&where[]=team_id,"+((o=c.team)==null?void 0:o.id)+"&page="+l).then(m=>{f.value=m.data.data}).catch(m=>{I.fire({icon:"error",title:"Oops!",text:m.response.data.message})})}return p(),(l,o)=>(a(),s("div",Vt,[e("div",Bt,[o[1]||(o[1]=e("div",null," Voucher Templates ",-1)),e("div",null,[i(V(D),{href:"/admin/team-voucher-templates/new?teamId="+g.team.id},{default:k(()=>[i(B,{class:""},{default:k(()=>o[0]||(o[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})],-1),$(" New Template ")])),_:1})]),_:1},8,["href"])])]),e("div",Dt,[(a(!0),s(j,null,A(f.value.data,m=>(a(),s("div",null,[m.archived_at?(a(),s("div",Mt,o[2]||(o[2]=[e("div",{class:"border-2 text-center rounded-lg border-dashed p-2 border-red-300 text-red-300 font-bold"}," Archived ",-1)]))):(a(),s("div",Ut,o[3]||(o[3]=[e("div",{class:"border-2 text-center rounded-lg border-dashed p-2 border-green-300 text-green-300 font-bold"}," Active ",-1)]))),i(V(D),{href:"/admin/team-voucher-template/"+m.id},{default:k(()=>[e("img",{src:m.example_template_image_url,alt:"",class:"border rounded"},null,8,Pt)]),_:2},1032,["href"])]))),256))]),e("div",qt,[e("div",zt,[i(U,{onSetDataPage:p,"pagination-data":f.value},null,8,["pagination-data"])])])]))}},Ot={class:"card"},Et={class:""},Kt={class:"text-gray-300 pr-1"},Wt={class:"card"},Lt={class:"flex justify-start items-center mt-4"},Gt={for:"name",class:"w-full font-bold"},Rt={class:"flex justify-start items-center mt-4"},Yt={for:"country",class:"w-full font-bold"},Zt=["value"],Ht={key:0,class:"mt-8 flex justify-end"},Jt={class:"card"},Qt={key:0},Xt={class:"flex justify-between items-center hover:opacity-75"},ea={class:"flex justify-end items-center"},ta={key:0,class:"pr-2 text-xs"},aa={class:"flex"},sa={key:0},na={key:1,class:"px-2"},ia={key:2,class:"px-2"},oa={class:"flex justify-end items-center mt-4"},la={class:"w-full lg:w-1/3"},da={class:"card"},ra={class:"container mx-auto"},ua={class:"container mx-auto"},ma={class:"card"},ca={class:"card"},va={class:"card"},fa={class:"card"},_a={key:0,class:"container mx-auto"},Ma={__name:"Team",props:{id:{required:!0,type:Number}},setup(g){O.extend(ae),O.extend(se);const c=g,f=h(!1),p=h(10),l=h(""),o=h(""),m=h({}),y=h({name:"",country_id:""}),b=h({});E(()=>{T(),u(),w()});function C(x){let d={user_id:x,team_id:c.id};axios.post("/admin/team-users",d).then(_=>{I.fire({title:"Success!",icon:"success",timer:1e3}).then(()=>{u()})}).catch(_=>{console.log(_)})}function w(){axios.get("/countries?limit=250").then(x=>{m.value=x.data.data}).catch(x=>{console.log(x)})}function T(){axios.get("/admin/teams/"+c.id+"?cached=false").then(x=>{y.value=x.data.data,o.value=y.value.country_id,l.value=y.value.name}).catch(x=>{console.log(x)})}function u(x=1){axios.get("/admin/team-users?cached=false&page="+x+"&where[]=team_id,"+c.id+"&relations=user&limit="+p.value+"&orderBy=id,desc").then(d=>{b.value=d.data.data}).catch(d=>{console.log(d)})}function r(x){f.value=!0;let d={send_invite_email:!0};axios.put("/admin/team-users/"+x.id,d).then(_=>{u(),f.value=!1}).catch(_=>{console.log(_),f.value=!1})}function n(x){I.fire({icon:"warning",title:"Are you sure?",text:"This will remove this user from this team. You can always add them back.",showConfirmButton:!0,showCancelButton:!0}).then(d=>{d.isConfirmed&&axios.delete("/admin/team-users/"+x.id).then(_=>{I.fire({title:"Success!",icon:"success",timer:1e3}).then(()=>{u()})}).catch(_=>{console.log(_)})})}function t(x){u(x)}function v(){let x={name:l.value,country_id:o.value};y.value.country_id!==o.value?I.fire({title:"Wait...",icon:"warning",text:"It looks like you're changing this teams' country. Please be aware this will NOT update the selected currency for any of their existing voucher sets.",confirmButtonText:"I get it. Proceed.",cancelButtonText:"Go back",showCancelButton:!0,showConfirmButton:!0,allowOutsideClick:!1}).then(d=>{d.isDismissed||d.isConfirmed&&axios.put("/admin/teams/"+c.id,x).then(_=>{I.fire({title:"Success!",icon:"success",timer:1e3}).then(()=>{T()})}).catch(_=>{console.log(_)})}):axios.put("/admin/teams/"+c.id,x).then(d=>{I.fire({title:"Success!",icon:"success",timer:1e3}).then(()=>{T()})}).catch(d=>{console.log(d)})}return(x,d)=>(a(),s(j,null,[i(V(Y),{title:"Team"}),i(J,null,{header:k(()=>[i(Q)]),default:k(()=>[e("div",Ot,[e("div",Et,[e("h2",null,[e("span",Kt,"#"+N(c.id),1),$(" "+N(y.value.name),1)])])]),e("div",Wt,[d[6]||(d[6]=e("div",{class:"card-header"}," Team details ",-1)),e("div",Lt,[e("label",Gt,[d[3]||(d[3]=$(" Team Name: ")),i(M,{id:"name",type:"text",class:"mt-1 block w-full font-normal",modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=_=>l.value=_)},null,8,["modelValue"])])]),e("div",Rt,[e("label",Yt,[d[4]||(d[4]=$(" Country: ")),Z(e("select",{id:"country",class:"mt-1 block w-full font-normal","onUpdate:modelValue":d[1]||(d[1]=_=>o.value=_)},[(a(!0),s(j,null,A(m.value.data,_=>(a(),s("option",{value:_.id,key:_.id},N(_.name),9,Zt))),128))],512),[[H,o.value]])])]),l.value!==y.value.name||o.value!==y.value.country_id?(a(),s("div",Ht,[i(B,{onClick:d[2]||(d[2]=_=>v())},{default:k(()=>d[5]||(d[5]=[$("Update")])),_:1})])):S("",!0)]),e("div",Jt,[i(te,{loading:f.value},null,8,["loading"]),d[9]||(d[9]=e("div",{class:"card-header"}," Team members ",-1)),b.value.data&&b.value.data.length>0?(a(),s("div",Qt,[(a(!0),s(j,null,A(b.value.data,_=>(a(),s("div",Xt,[i(V(D),{href:x.route("admin.user",_.user_id),class:"border-b p-2 mr-2 flex-grow flex justify-between items-center hover:no-underline"},{default:k(()=>{var z;return[e("div",null,N((z=_.user)==null?void 0:z.name),1),e("div",ea,[_.invitation_sent_at?(a(),s("div",ta," Invited: "+N(V(O).utc(_.invitation_sent_at).fromNow()),1)):S("",!0),d[7]||(d[7]=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})],-1))])]}),_:2},1032,["href"]),e("div",aa,[i(ee,{onClick:z=>r(_),class:"mr-2"},{default:k(()=>[e("div",null,[_.invitation_sent_at?(a(),s("div",sa,"Resend Invite")):f.value?(a(),s("div",na,"Sending..")):(a(),s("div",ia,"Send Invite"))])]),_:2},1032,["onClick"]),i(ne,{onClick:F(z=>n(_),["prevent"])},{default:k(()=>d[8]||(d[8]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-3 font-bold"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})],-1)])),_:2},1032,["onClick"])])]))),256))])):S("",!0),e("div",oa,[e("div",la,[i(U,{onSetDataPage:t,"pagination-data":b.value},null,8,["pagination-data"])])])]),e("div",da,[d[10]||(d[10]=e("div",{class:"card-header"}," Add user to team ",-1)),i(At,{teamId:c.id,onCreateNewTeamUser:C},null,8,["teamId"])]),e("div",ra,[i(Ee,{teamId:c.id,teamName:y.value.name},null,8,["teamId","teamName"])]),e("div",ua,[i(bt,{teamId:c.id,teamName:y.value.name},null,8,["teamId","teamName"])]),e("div",ma,[d[11]||(d[11]=e("div",{class:"card-header"}," Voucher sets created by team ",-1)),i(K,{"team-id":c.id,"filter-voucher-sets":"created_by_team_id"},null,8,["team-id"])]),e("div",ca,[d[12]||(d[12]=e("div",{class:"card-header"}," Voucher sets allocated to team ",-1)),i(K,{"team-id":c.id,"filter-voucher-sets":"allocated_to_service_team_id"},null,8,["team-id"])]),e("div",va,[d[13]||(d[13]=e("div",{class:"card-header"}," Vouchers created by team ",-1)),i(W,{"team-id":c.id,"filter-vouchers":"created_by_team_id"},null,8,["team-id"])]),e("div",fa,[d[14]||(d[14]=e("div",{class:"card-header"}," Vouchers allocated to team ",-1)),i(W,{"team-id":c.id,"filter-vouchers":"allocated_to_service_team_id"},null,8,["team-id"])]),y.value.id?(a(),s("div",_a,[i(Ft,{team:y.value},null,8,["team"])])):S("",!0),d[15]||(d[15]=e("div",{class:"p-32"},null,-1))]),_:1})],64))}};export{Ma as default};
