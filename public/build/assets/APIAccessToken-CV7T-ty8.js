import{_ as D,S as C}from"./AuthenticatedLayout-C2hWJ0Ka.js";import{c as B,g as F,r as N,o as P,a as l,b as d,d as u,u as x,w as m,F as $,Z as S,e as s,t as a,f as i,i as j,h as f}from"./app-CZIcKt2y.js";import{_ as E}from"./AdminTopNavigation-_co5wfWU.js";import{d as p}from"./dayjs.min-B2A1-x4Q.js";import{r as V}from"./relativeTime-D2v-S27q.js";import{P as z}from"./PrimaryButton-DvVpI_7K.js";import"./ApplicationLogo-CjnD_xkm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";var A={exports:{}};(function(v,k){(function(t,r){v.exports=r()})(B,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(r,_,h){var o=_.prototype,e=o.format;h.en.formats=t,o.format=function(n){n===void 0&&(n="YYYY-MM-DDTHH:mm:ssZ");var M=this.$locale().formats,L=function(b,Y){return b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(X,y,c){var g=c&&c.toUpperCase();return y||Y[c]||t[c]||Y[g].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(ee,T,w){return T||w.slice(1)})})}(n,M===void 0?{}:M);return e.call(this,L)}}})})(A);var I=A.exports;const H=F(I),R={class:"card"},Z={class:"card"},q={class:"my-1"},G={key:0,class:"my-1"},U={class:"my-1"},J={key:1,class:"my-1"},K={key:2,class:"my-1"},O={class:"card"},Q={key:0},W={class:"card"},de={__name:"APIAccessToken",props:{id:{required:!0,type:Number}},setup(v){const k=v,t=N({});P(()=>{_()});function r(o){return p.extend(V),p.extend(H),p(o).fromNow()+" ("+p(o).format("LLL")+")"}function _(){axios.get("/admin/user-personal-access-tokens/"+k.id+"?cached=false&relations=user").then(o=>{t.value=o.data.data}).catch(o=>{console.log(o)})}function h(){C.fire({title:"Are you sure you want to delete this token?",text:"This action cannot be undone, and the user will no longer be able to use this token. Please confirm if you wish to proceed.",icon:"warning",confirmButtonColor:"#3085d6",confirmButtonText:"Revoke this token",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete("/admin/user-personal-access-tokens/"+k.id).then(e=>{window.location.href=route("admin.api-access-tokens")}).catch(e=>{console.log(e)})})}return(o,e)=>(l(),d($,null,[u(x(S),{title:"API Access Token"}),u(D,null,{header:m(()=>[u(E)]),default:m(()=>[s("div",R,[s("h2",null,a(t.value.name)+" (#"+a(t.value.id)+") ",1)]),s("div",Z,[e[6]||(e[6]=s("div",{class:"card-header"}," API Access Token details ",-1)),s("div",q,[e[1]||(e[1]=s("span",{class:"font-bold"}," Name: ",-1)),i(" "+a(t.value.name),1)]),t.value.tokenable_id?(l(),d("div",G,[e[2]||(e[2]=s("span",{class:"font-bold"}," Assigned To: ",-1)),u(x(j),{href:o.route("admin.user",{id:t.value.tokenable_id})},{default:m(()=>{var n;return[i(a((n=t.value.user)==null?void 0:n.name),1)]}),_:1},8,["href"])])):f("",!0),s("div",U,[e[3]||(e[3]=s("span",{class:"font-bold"}," Created: ",-1)),i(" "+a(r(t.value.created_at)),1)]),t.value.last_used_at?(l(),d("div",J,[e[4]||(e[4]=s("span",{class:"font-bold"}," Last used: ",-1)),i(" "+a(r(t.value.last_used_at)),1)])):f("",!0),t.value.expires_at?(l(),d("div",K,[e[5]||(e[5]=s("span",{class:"font-bold"}," Expires: ",-1)),i(" "+a(r(t.value.expires_at)),1)])):f("",!0)]),s("div",O,[e[7]||(e[7]=s("div",{class:"card-header"}," Abilities ",-1)),t.value.abilities&&t.value.abilities.length?(l(),d("div",Q,a(t.value.abilities.join(", ")),1)):f("",!0)]),s("div",W,[u(z,{onClick:e[0]||(e[0]=n=>h())},{default:m(()=>e[8]||(e[8]=[i(" Revoke this token ")])),_:1})])]),_:1})],64))}};export{de as default};
