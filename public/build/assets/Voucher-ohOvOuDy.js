import{r as h,o as I,c as a,a as f,u as n,w as _,F as p,b as i,Z as P,e as r,d as t,t as o,f as u,i as A,g as D,h as S,l as E,s as F,D as U}from"./app-PGSrYc0C.js";import{_ as Y,S as x}from"./AuthenticatedLayout-BOEFobd0.js";import{d as l}from"./dayjs.min-DFSSt0JW.js";import{r as L}from"./relativeTime-DPYuZ6Nx.js";import{l as M}from"./localizedFormat-Dfa9cZ_L.js";import{u as O}from"./utc-DLwj_WUI.js";import{P as g}from"./PrimaryButton-CImOG1a7.js";import{_ as q}from"./SecondaryButton-Bfqjj9_w.js";import"./ApplicationLogo-CdQOFfDC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const z={class:"grid grid-cols-2 gap-8 container mx-auto mt-8"},G={class:"card"},Z={class:"opacity-25"},H={key:0,class:"mt-4"},J={key:1,class:"font-bold text-red-500 text-sm"},K={class:"card"},Q={key:0},W={class:"card"},X={class:"grid grid-cols-4 gap-y-12 text-center mt-8"},ee={class:"font-bold text-3xl"},te={class:"font-bold text-3xl"},se={class:"font-bold text-3xl"},oe={key:0},ie={class:"font-bold text-3xl"},ae={class:"text-xs"},de={key:1},re={class:"font-bold text-3xl"},le={class:"text-xs"},ne={class:"grid grid-cols-2 gap-8 container mx-auto"},ue={class:"card"},ce={key:0},ve={key:1,class:"text-xs mt-2"},_e={class:"card"},me={key:0},fe={class:"card"},he={key:0,class:"text-sm"},be={class:"border-b py-2 sm:p-2"},ye={class:"font-bold"},pe={key:0},xe={class:"font-bold"},ge={key:1},ke={class:"font-bold"},we={class:"card"},Be={class:"card-header flex justify-between"},Ve={class:"mt-4"},Ce={key:0},De={class:"py-1 border-b border-gray-200 flex justify-between"},Se={class:"font-medium"},Te={class:"italic text-gray-500"},Re={key:1},Ne={class:"mt-8"},$e={class:"mt-2 flex justify-between"},je={class:"w-full"},Ie={class:"flex space-x-4"},ze={__name:"Voucher",props:{voucherId:{type:String,required:!1}},setup(T){l.extend(L),l.extend(M),l.extend(O);const R=T,m=h(""),b=h(null),y=h(!1),s=h({});I(()=>{B()});function k(){y.value=!1,m.value=""}function N(){x.fire({title:"Are you sure?",icon:"warning",text:"You cannot resend this voucher to a different email address after this. You can resend it to the same person, but not a different person. Please double-check you have the details correct.",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"All good, send it!",cancelButtonText:"Go back"}).then(c=>{c.isConfirmed&&w()})}function w(){var e;let c={voucher_id:s.value.id,beneficiary_email:m.value};(e=s.value.voucher_beneficiary_distributions)!=null&&e.length&&(c={resend_beneficiary_distribution_id:s.value.voucher_beneficiary_distributions[0].id}),axios.post("/voucher-beneficiary-distributions",c).then(v=>{x.fire({title:"Nice!",icon:"success",text:v.data.data.message,showConfirmButton:!1,timer:600}),k(),B()}).catch(v=>{x.fire({title:"Oops!",icon:"error",text:v.response.data.meta.message}),console.log(v)})}function B(){axios.get("/my-team-vouchers/"+R.voucherId+"?cached=false&relations=createdByTeam,allocatedToServiceTeam,voucherBeneficiaryDistributions,voucherRedemptions.redeemedByUser,voucherRedemptions.redeemedByTeam,voucherSet").then(c=>{s.value=c.data.data}).catch(c=>{console.log(c)})}function $(){y.value=!0,U(()=>{b.value&&b.value.scrollIntoView({behavior:"smooth"})})}return(c,e)=>(i(),a(p,null,[f(n(P),{title:"Voucher"}),f(Y,null,{header:_(()=>e[1]||(e[1]=[r(" Voucher ")])),default:_(()=>{var v,V,C;return[t("div",z,[t("div",G,[e[2]||(e[2]=t("div",{class:"card-header"}," Voucher Details ",-1)),t("h2",Z," ID: "+o(s.value.id),1),s.value.voucher_short_code?(i(),a("div",H,[t("h2",null," Short Code: "+o(s.value.voucher_short_code),1)])):u("",!0),s.value.is_test?(i(),a("div",J," Test voucher ")):u("",!0)]),t("div",K,[e[3]||(e[3]=t("div",{class:"card-header"}," Voucher set ",-1)),s.value.voucher_set_id?(i(),a("div",Q,[f(n(A),{href:c.route("voucher-set",{id:s.value.voucher_set_id})},{default:_(()=>[r(o(s.value.voucher_set_id),1)]),_:1},8,["href"])])):u("",!0)])]),t("div",W,[e[9]||(e[9]=t("div",{class:"card-header"}," Usage overview ",-1)),t("div",X,[t("div",null,[t("div",ee," $"+o(s.value.voucher_value_original/100),1),e[4]||(e[4]=r(" Original value "))]),t("div",null,[t("div",te," $"+o(s.value.voucher_value_remaining/100),1),e[5]||(e[5]=r(" Remaining value "))]),t("div",null,[t("div",se,o(s.value.num_voucher_redemptions??"0"),1),e[6]||(e[6]=r(" # Redemptions "))]),s.value.last_redemption_at?(i(),a("div",oe,[e[7]||(e[7]=t("div",null," Last redeemed ",-1)),t("div",ie,o(n(l).utc(s.value.last_redemption_at).fromNow()),1),t("div",ae," ("+o(n(l)(s.value.last_redemption_at))+") ",1)])):u("",!0),(v=s.value.voucher_set)!=null&&v.expires_at?(i(),a("div",de,[e[8]||(e[8]=t("div",null," Expires ",-1)),t("div",re,o(n(l).utc(s.value.voucher_set.expires_at).fromNow()),1),t("div",le," ("+o(n(l)(s.value.voucher_set.expires_at))+") ",1)])):u("",!0)])]),t("div",ne,[t("div",ue,[e[10]||(e[10]=t("div",{class:"card-header"}," Created by team ",-1)),s.value.created_by_team?(i(),a("div",ce,o(s.value.created_by_team.name),1)):u("",!0),s.value.created_at?(i(),a("div",ve," Created at: "+o(n(l).utc(s.value.created_at).fromNow())+" ("+o(n(l)(s.value.created_at))+") ",1)):u("",!0)]),t("div",_e,[e[11]||(e[11]=t("div",{class:"card-header"}," Allocated to team ",-1)),s.value.allocated_to_service_team?(i(),a("div",me,o(s.value.allocated_to_service_team.name),1)):u("",!0)])]),t("div",fe,[e[15]||(e[15]=t("div",{class:"card-header"}," Voucher redemptions ",-1)),s.value.voucher_redemptions&&s.value.voucher_redemptions.length?(i(),a("div",he,[(i(!0),a(p,null,D(s.value.voucher_redemptions,d=>(i(),a("div",be,[t("div",null,[e[12]||(e[12]=r(" Redeemed amount: ")),t("span",ye,"$"+o(d.redeemed_amount/100),1)]),d.redeemed_by_user&&d.redeemed_by_team?(i(),a("div",pe,[e[13]||(e[13]=r(" Redeemed by: ")),t("span",xe,o(d.redeemed_by_user.name)+" ("+o(d.redeemed_by_team.name)+")",1)])):u("",!0),d.created_at?(i(),a("div",ge,[e[14]||(e[14]=r(" Redeemed at: ")),t("span",ke,o(n(l).utc(d.created_at).fromNow())+" ("+o(n(l)(d.created_at))+")",1)])):u("",!0)]))),256))])):u("",!0)]),t("div",we,[t("div",Be,[e[18]||(e[18]=t("div",null,[t("div",null," Beneficiary Distributions ")],-1)),t("div",null,[(V=s.value.voucher_beneficiary_distributions)!=null&&V.length?(i(),S(g,{key:0,onClick:w},{default:_(()=>e[16]||(e[16]=[r(" Resend ")])),_:1})):(i(),S(g,{key:1,onClick:$},{default:_(()=>e[17]||(e[17]=[r(" Send to beneficiary ")])),_:1}))])]),t("div",Ve,[(C=s.value.voucher_beneficiary_distributions)!=null&&C.length?(i(),a("div",Ce,[(i(!0),a(p,null,D(s.value.voucher_beneficiary_distributions,(d,j)=>(i(),a("div",De,[t("div",Se,o(j===0?"Distributed":"Re-distributed")+" "+o(n(l).utc(d.created_at).fromNow()),1),t("div",Te,o(n(l)(d.created_at).format("llll")),1)]))),256))])):(i(),a("div",Re," This voucher has not been distributed yet. "))])]),y.value?(i(),a("div",{key:0,ref_key:"distributionSectionRef",ref:b,class:"card"},[e[22]||(e[22]=t("div",{class:"card-header"},[r(" Distribute to beneficiary "),t("div",{class:"text-xs"}," You can email this voucher to a beneficiary here. ")],-1)),t("div",Ne,[e[21]||(e[21]=t("label",{for:"beneficiary-email"}," Please enter the beneficiary's email ",-1)),t("div",$e,[t("div",je,[E(t("input",{id:"beneficiary-email","onUpdate:modelValue":e[0]||(e[0]=d=>m.value=d),class:"md:w-1/3",placeholder:"beneficiary@example.com",type:"email"},null,512),[[F,m.value]])]),t("div",Ie,[f(q,{onClick:k},{default:_(()=>e[19]||(e[19]=[r(" Cancel ")])),_:1}),f(g,{disabled:!m.value,class:"disabled:cursor-not-allowed disabled:opacity-25",onClick:N},{default:_(()=>e[20]||(e[20]=[r(" Send ")])),_:1},8,["disabled"])])])])],512)):u("",!0),e[23]||(e[23]=t("div",{class:"pb-32"},null,-1))]}),_:1})],64))}};export{ze as default};
