import{_ as b}from"./AuthenticatedLayout-DLt9L55p.js";import{r as g,o as k,a,b as r,d as _,u as i,w as c,F as p,Z as w,e,t as o,h as l,i as m,f as u,j as V,k as B}from"./app-CsvKUCVF.js";import{_ as N}from"./AdminTopNavigation-D_3iC7ay.js";import{d as n}from"./dayjs.min-B1s2FNJD.js";import{r as R}from"./relativeTime-B4aTyaiK.js";import{u as T}from"./utc-CuhrPUJG.js";import"./ApplicationLogo-Cox3Zk07.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PrimaryButton-CrY-NrTG.js";const C={class:"grid grid-cols-2 gap-8 container mx-auto mt-8"},$={class:"card"},S={class:"opacity-25"},j={key:0,class:"mt-4"},D={key:1,class:"font-bold text-red-500 text-sm"},E={class:"card"},F={key:0},L={class:"card"},q={class:"grid grid-cols-4 gap-y-12 text-center mt-8"},z={class:"font-bold text-3xl"},A={class:"font-bold text-3xl"},I={class:"font-bold text-3xl"},M={key:0},O={class:"font-bold text-3xl"},U={class:"text-xs"},Z={key:1},G={class:"font-bold text-3xl"},H={class:"text-xs"},J={class:"grid grid-cols-2 gap-8 container mx-auto"},K={class:"card"},P={key:0},Q={key:1,class:"text-xs mt-2"},W={class:"card"},X={key:0},Y={class:"card"},ee={key:0,class:"text-sm"},te={class:"border-b flex justify-between items-center py-2 sm:p-2"},se={class:"text-xs opacity-25"},oe={class:"font-bold"},de={key:0},ae={class:"font-bold"},re={key:1},ie={class:"font-bold"},pe={__name:"Voucher",props:{id:{required:!0}},setup(x){n.extend(R),n.extend(T);const h=x,s=g({});k(()=>{y()});function y(){axios.get("/admin/vouchers/"+h.id+"?cached=false&relations=voucherSet,createdByTeam,allocatedToServiceTeam,voucherRedemptions.redeemedByUser,voucherRedemptions.redeemedByTeam").then(v=>{s.value=v.data.data}).catch(v=>{console.log(v)})}return(v,t)=>(a(),r(p,null,[_(i(w),{title:"Voucher set"}),_(b,null,{header:c(()=>[_(N)]),default:c(()=>{var f;return[e("div",C,[e("div",$,[t[1]||(t[1]=e("div",{class:"card-header"}," Voucher Details ",-1)),e("h2",S," ID: "+o(h.id),1),s.value.voucher_short_code?(a(),r("div",j,[e("h2",null," Short Code: "+o(s.value.voucher_short_code),1),t[0]||(t[0]=e("div",{class:"text-xs text-gray-500"}," Short codes are used in unattended (online) redemptions ",-1))])):l("",!0),s.value.is_test?(a(),r("div",D," Test voucher ")):l("",!0)]),e("div",E,[t[2]||(t[2]=e("div",{class:"card-header"}," Voucher set ",-1)),s.value.voucher_set_id?(a(),r("div",F,[_(i(m),{href:v.route("admin.voucher-set",{id:s.value.voucher_set_id})},{default:c(()=>[u(o(s.value.voucher_set_id),1)]),_:1},8,["href"])])):l("",!0)])]),e("div",L,[t[8]||(t[8]=e("div",{class:"card-header"}," Voucher details ",-1)),e("div",q,[e("div",null,[e("div",z," $"+o(s.value.voucher_value_original/100),1),t[3]||(t[3]=u(" Original value "))]),e("div",null,[e("div",A," $"+o(s.value.voucher_value_remaining/100),1),t[4]||(t[4]=u(" Remaining value "))]),e("div",null,[e("div",I,o(s.value.num_voucher_redemptions??"0"),1),t[5]||(t[5]=u(" # Redemptions "))]),s.value.last_redemption_at?(a(),r("div",M,[t[6]||(t[6]=e("div",null," Last redeemed ",-1)),e("div",O,o(i(n).utc(s.value.last_redemption_at).fromNow()),1),e("div",U," ("+o(i(n)(s.value.last_redemption_at))+") ",1)])):l("",!0),(f=s.value.voucher_set)!=null&&f.expires_at?(a(),r("div",Z,[t[7]||(t[7]=e("div",null," Expires ",-1)),e("div",G,o(i(n).utc(s.value.voucher_set.expires_at).fromNow()),1),e("div",H," ("+o(i(n)(s.value.voucher_set.expires_at))+") ",1)])):l("",!0)])]),e("div",J,[e("div",K,[t[9]||(t[9]=e("div",{class:"card-header"}," Created by team ",-1)),s.value.created_by_team?(a(),r("div",P,[_(i(m),{href:v.route("admin.team",{id:s.value.created_by_team_id})},{default:c(()=>{var d;return[u(o((d=s.value.created_by_team)==null?void 0:d.name),1)]}),_:1},8,["href"])])):l("",!0),s.value.created_at?(a(),r("div",Q," Created at: "+o(i(n).utc(s.value.created_at).fromNow())+" ("+o(i(n)(s.value.created_at))+") ",1)):l("",!0)]),e("div",W,[t[10]||(t[10]=e("div",{class:"card-header"}," Allocated to team ",-1)),s.value.allocated_to_service_team?(a(),r("div",X,[_(i(m),{href:v.route("admin.team",{id:s.value.allocated_to_service_team_id})},{default:c(()=>{var d;return[u(o((d=s.value.allocated_to_service_team)==null?void 0:d.name),1)]}),_:1},8,["href"])])):l("",!0)])]),e("div",Y,[t[15]||(t[15]=e("div",{class:"card-header"}," Voucher redemptions ",-1)),s.value.voucher_redemptions&&s.value.voucher_redemptions.length?(a(),r("div",ee,[(a(!0),r(p,null,V(s.value.voucher_redemptions,d=>(a(),B(i(m),{href:v.route("admin.voucher-redemption",d.id),class:"hover:no-underline hover:opacity-75"},{default:c(()=>[e("div",te,[e("div",null,[e("div",se," #"+o(d.id),1),e("div",null,[t[11]||(t[11]=u(" Redeemed amount: ")),e("span",oe,"$"+o(d.redeemed_amount/100),1)]),d.redeemed_by_user&&d.redeemed_by_team?(a(),r("div",de,[t[12]||(t[12]=u(" Redeemed by: ")),e("span",ae,o(d.redeemed_by_user.name)+" ("+o(d.redeemed_by_team.name)+")",1)])):l("",!0),d.created_at?(a(),r("div",re,[t[13]||(t[13]=u(" Redeemed at: ")),e("span",ie,o(i(n).utc(d.created_at).fromNow())+" ("+o(i(n)(d.created_at))+")",1)])):l("",!0)]),t[14]||(t[14]=e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})])],-1))])]),_:2},1032,["href"]))),256))])):l("",!0)]),t[16]||(t[16]=e("div",{class:"pb-32"},null,-1))]}),_:1})],64))}};export{pe as default};
