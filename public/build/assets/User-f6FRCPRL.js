import{r as b,Q as x,o as L,c as n,a as o,u as p,w as r,F as f,b as a,Z as Q,d as t,t as u,i as P,e as m,f as _,g as h,l as S,m as U,k as W,n as $,h as z}from"./app-CblTTgyL.js";import{_ as Y,S as A}from"./AuthenticatedLayout-CFkkM4Xw.js";import{_ as Z}from"./AdminTopNavigation-C3cfuSp_.js";import{P as G}from"./PaginatorComponent-CMgspZ9V.js";import{_ as H}from"./AdminUserDetailsComponent-Dw2XKneS.js";import{P as g}from"./PrimaryButton-lhUrXoRs.js";import{_ as J}from"./TextInput-BT-7frEH.js";import{_ as K}from"./SecondaryButton-B0hUOCHS.js";import"./ApplicationLogo-ByNwEwX1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const X={class:"card"},ee={class:"flex justify-between items-center"},te={key:0},se={class:"card"},ie={class:"card"},ae={key:0},ne={key:0},le={key:0,class:"text-xs text-red-500"},oe={class:""},de={class:"flex justify-end items-center mt-4"},re={class:"w-full lg:w-1/3"},ue={class:"card"},me={for:"admin",class:"cursor-pointer flex justify-start items-center"},ce={class:"card"},ve={key:0},pe={class:"border-b py-2"},fe={class:"list-item ml-8"},_e={key:0},he={class:"ml-8 text-xs"},ke={key:1},be={class:"card"},Ae={key:0},ge={class:"flex justify-start items-center space-x-4 pb-4"},ye={class:"grid grid-cols-1 md:grid-cols-2 md:gap-2"},xe={class:"border rounded-xl p-4"},Pe={class:"text-xs"},we={class:"mt-8"},Te=["for"],Ce=["id","value"],Se={class:"pb-4"},Ue={class:"flex items-center justify-end mt-4"},Fe={__name:"User",props:{id:{required:!0,type:Number}},setup(B){const k=B,V=b(5),l=b({name:"",token_abilities:[]}),w=x().props.personalAccessTokenAbilities,j=x().props.platformAppTokenAbilities,I=x().props.redemptionAppTokenAbilities,c=b({}),d=b({});L(()=>{y(),T()});function N(){l.value.user_id=d.value.id,axios.post("/admin/user-personal-access-tokens",l.value).then(i=>{let e=i.data.data.token,s=i.data.data.secret;A.fire({title:"Personal access token issued!",html:'<div>Please note that the token will be displayed only once. Make sure to save it securely.</div><div class="mt-4">Token: <b>'+e+'</b></div><div class="mt-4">Secret: <b>'+s+'</b></div><div class="mt-4 text-xs">You will need the secret in order to sign your API requests.</div>',icon:"warning",confirmButtonColor:"#3085d6",confirmButtonText:"Got it!"}).then(v=>{l.value={name:"",token_abilities:[]},y()})}).catch(i=>{A.fire({icon:"error",title:"Oops..",text:i.response.data.meta.message})})}function y(){axios.get("/admin/users/"+k.id+"?cached=false&relations=currentTeam").then(i=>{d.value=i.data.data}).catch(i=>{console.log(i)})}function T(i=1){axios.get("/admin/team-users?cached=false&page="+i+"&where[]=user_id,"+k.id+"&relations=team&limit="+V.value+"&orderBy=id,desc").then(e=>{c.value=e.data.data}).catch(e=>{})}function q(i){T(i)}function C(i){return i.replaceAll("-"," ")}function D(){l.value.token_abilities=Object.keys(j),A.fire({icon:"info",title:"Platform Apps",html:'<div>We have selected the minimum required abilities for an API token for a "Platform" type app.</div><div class="mt-4">Be careful with these abilities, as they can perform additive and destructive actions, like creating teams, users and more API tokens.</div>'})}function M(){l.value.token_abilities=Object.keys(I),A.fire({icon:"info",title:"Redemption Apps",html:'<div>We have selected the minimum required abilities for an API token for a "Redemption" type app.</div><div class="mt-4">Be careful with these abilities, as they can redeem vouchers. Ensure the correct rights have been assigned.</div>'})}function R(){l.value.token_abilities=[]}function F(){let i={is_admin:d.value.is_admin};axios.put("/admin/users/"+k.id,i).then(e=>{y()}).catch(e=>{console.log(e)})}return(i,e)=>(a(),n(f,null,[o(p(Q),{title:"Users"}),o(Y,null,{header:r(()=>[o(Z)]),default:r(()=>[t("div",X,[t("div",ee,[t("h2",null,u(d.value.name),1),t("div",null,[i.$page.props.isImpersonating===null?(a(),n("div",te,[o(g,null,{default:r(()=>[o(p(P),{href:i.route("admin.impersonate",k.id)},{default:r(()=>e[7]||(e[7]=[m("Impersonate")])),_:1},8,["href"])]),_:1})])):_("",!0)])])]),t("div",se,[e[8]||(e[8]=t("div",{class:"card-header"}," User details ",-1)),o(H,{user:d.value},null,8,["user"])]),t("div",ie,[e[9]||(e[9]=t("div",{class:"card-header"}," User teams ",-1)),c.value.data&&c.value.data.length>0?(a(),n("div",ae,[(a(!0),n(f,null,h(c.value.data,s=>(a(),z(p(P),{href:i.route("admin.team",s.team_id),class:"hover:no-underline hover:opacity-75"},{default:r(()=>[t("div",{class:$({"border-b p-2":c.value.data.length>1})},[s.team?(a(),n("div",ne,[s.team_id===d.value.current_team_id?(a(),n("div",le,"*Current team ")):_("",!0),t("div",oe,u(s.team.name),1)])):_("",!0)],2)]),_:2},1032,["href"]))),256))])):_("",!0),t("div",de,[t("div",re,[o(G,{onSetDataPage:q,"pagination-data":c.value},null,8,["pagination-data"])])])]),t("div",ue,[e[11]||(e[11]=t("div",{class:"card-header"}," Admin status ",-1)),t("label",me,[S(t("input",{onChange:e[0]||(e[0]=s=>F()),type:"checkbox",id:"admin",class:"mr-4","true-value":1,"false-value":0,"onUpdate:modelValue":e[1]||(e[1]=s=>d.value.is_admin=s)},null,544),[[U,d.value.is_admin]]),e[10]||(e[10]=m(" User is System Admin "))])]),t("div",ce,[e[12]||(e[12]=t("div",{class:"card-header"}," User Personal Access Tokens (PATs) ",-1)),d.value.tokens&&d.value.tokens.length?(a(),n("div",ve,[(a(!0),n(f,null,h(d.value.tokens,s=>(a(),n("div",pe,[o(p(P),{href:i.route("admin.api-access-token",{id:s.id})},{default:r(()=>[t("div",fe,u(s.name),1),s.abilities&&s.abilities.length?(a(),n("div",_e,[(a(!0),n(f,null,h(s.abilities,v=>(a(),n("div",he," - "+u(C(v)),1))),256))])):_("",!0)]),_:2},1032,["href"])]))),256))])):(a(),n("div",ke,"User does not have PATs."))]),t("div",be,[e[20]||(e[20]=t("div",{class:"card-header"}," Create Personal Access Token ",-1)),p(w).length?(a(),n("div",Ae,[e[18]||(e[18]=t("div",{class:"mt-8 mb-4"},[t("h2",null,"Step 1: Select Token Abilities")],-1)),t("div",ge,[o(K,{onClick:R},{default:r(()=>e[13]||(e[13]=[m(" Clear Selected ")])),_:1}),e[16]||(e[16]=t("div",{class:"pl-16"}," Quick select: ",-1)),o(g,{onClick:e[2]||(e[2]=s=>D())},{default:r(()=>e[14]||(e[14]=[m(" Platform App ")])),_:1}),o(g,{onClick:e[3]||(e[3]=s=>M())},{default:r(()=>e[15]||(e[15]=[m(" Redemption App ")])),_:1})]),t("div",ye,[(a(!0),n(f,null,h(p(w),s=>(a(),n("div",xe,[t("div",null,[t("h2",null,u(s.name),1),t("div",Pe,u(s.description),1),t("div",we,[(a(!0),n(f,null,h(s.abilities,(v,O)=>(a(),n("div",null,[t("label",{for:v,class:"cursor-pointer"},[S(t("input",{type:"checkbox",id:v,class:"mr-4",value:O,"onUpdate:modelValue":e[4]||(e[4]=E=>l.value.token_abilities=E)},null,8,Ce),[[U,l.value.token_abilities]]),m(" "+u(C(v)),1)],8,Te)]))),256))])])]))),256))]),e[19]||(e[19]=t("div",{class:"mt-8"},[t("h2",null,"Step 2: Give the Token a name")],-1)),t("div",Se,[o(J,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:l.value.name,"onUpdate:modelValue":e[5]||(e[5]=s=>l.value.name=s),required:""},null,8,["modelValue"])]),t("div",null," Selected Abilities: "+u(l.value.token_abilities.join(", ")),1),t("div",Ue,[o(g,{onClick:e[6]||(e[6]=W(s=>N(),["prevent"])),class:$(["",{"opacity-25":!l.value.name}]),desabled:!l.value.name},{default:r(()=>e[17]||(e[17]=[m(" Create New Token ")])),_:1},8,["class","desabled"])])])):_("",!0)])]),_:1})],64))}};export{Fe as default};
