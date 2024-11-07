import{_ as h,S as y}from"./AuthenticatedLayout-5kr8beat.js";import{r as A,o as x,c as i,a as r,u as v,w as d,F as w,b as l,Z as g,d as t,t as a,e as n,i as T,f as u}from"./app-vZoJq0kq.js";import{_ as B}from"./AdminTopNavigation-4Uk9emPw.js";import{d as c}from"./dayjs.min-C5CYVcWM.js";import{r as C}from"./relativeTime-DsKKDU9y.js";import{l as N}from"./localizedFormat-nrVdoHZM.js";import{P}from"./PrimaryButton-DaKkab-r.js";import"./ApplicationLogo-Y4qEm-3G.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const F={class:"card"},L={class:"card"},V={class:"my-1"},$={key:0,class:"my-1"},I={class:"my-1"},S={key:1,class:"my-1"},j={key:2,class:"my-1"},E={class:"card"},R={key:0},q={class:"card"},Q={__name:"APIAccessToken",props:{id:{required:!0,type:Number}},setup(k){const p=k,s=A({});x(()=>{_()});function m(o){return c.extend(C),c.extend(N),c(o).fromNow()+" ("+c(o).format("LLL")+")"}function _(){axios.get("/admin/user-personal-access-tokens/"+p.id+"?cached=false&relations=user").then(o=>{s.value=o.data.data}).catch(o=>{console.log(o)})}function b(){y.fire({title:"Are you sure you want to delete this token?",text:"This action cannot be undone, and the user will no longer be able to use this token. Please confirm if you wish to proceed.",icon:"warning",confirmButtonColor:"#3085d6",confirmButtonText:"Revoke this token",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete("/admin/user-personal-access-tokens/"+p.id).then(e=>{window.location.href=route("admin.api-access-tokens")}).catch(e=>{console.log(e)})})}return(o,e)=>(l(),i(w,null,[r(v(g),{title:"API Access Token"}),r(h,null,{header:d(()=>[r(B)]),default:d(()=>[t("div",F,[t("h2",null,a(s.value.name)+" (#"+a(s.value.id)+") ",1)]),t("div",L,[e[6]||(e[6]=t("div",{class:"card-header"}," API Access Token details ",-1)),t("div",V,[e[1]||(e[1]=t("span",{class:"font-bold"}," Name: ",-1)),n(" "+a(s.value.name),1)]),s.value.tokenable_id?(l(),i("div",$,[e[2]||(e[2]=t("span",{class:"font-bold"}," Assigned To: ",-1)),r(v(T),{href:o.route("admin.user",{id:s.value.tokenable_id})},{default:d(()=>{var f;return[n(a((f=s.value.user)==null?void 0:f.name),1)]}),_:1},8,["href"])])):u("",!0),t("div",I,[e[3]||(e[3]=t("span",{class:"font-bold"}," Created: ",-1)),n(" "+a(m(s.value.created_at)),1)]),s.value.last_used_at?(l(),i("div",S,[e[4]||(e[4]=t("span",{class:"font-bold"}," Last used: ",-1)),n(" "+a(m(s.value.last_used_at)),1)])):u("",!0),s.value.expires_at?(l(),i("div",j,[e[5]||(e[5]=t("span",{class:"font-bold"}," Expires: ",-1)),n(" "+a(m(s.value.expires_at)),1)])):u("",!0)]),t("div",E,[e[7]||(e[7]=t("div",{class:"card-header"}," Abilities ",-1)),s.value.abilities&&s.value.abilities.length?(l(),i("div",R,a(s.value.abilities.join(", ")),1)):u("",!0)]),t("div",q,[r(P,{onClick:e[0]||(e[0]=f=>b())},{default:d(()=>e[8]||(e[8]=[n(" Revoke this token ")])),_:1})])]),_:1})],64))}};export{Q as default};
