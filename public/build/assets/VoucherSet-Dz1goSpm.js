import{_ as x}from"./AuthenticatedLayout-8mYNjvMq.js";import{r as h,o as y,a as i,b as l,d as n,u as o,w as v,F as b,Z as g,e,t as a,h as u,f as _,i as c}from"./app-BJ7ObvRL.js";import{_ as V}from"./AdminTopNavigation-DevE2OXG.js";import{d}from"./dayjs.min-CPTtnoPh.js";import{r as k}from"./relativeTime-DmIkWEcB.js";import{u as T}from"./utc-0w4r8yT7.js";import{_ as N}from"./VouchersComponent-DTQdBVso.js";import"./ApplicationLogo-BF5n9Q1I.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PrimaryButton-DUQpwMEB.js";import"./sweetalert2.esm.all-BccGxJ0c.js";import"./PaginatorComponent-B2V6C4LW.js";import"./SecondaryButton-B5eatlOV.js";const $={class:"card"},w={key:0,class:"font-bold text-red-500 text-sm"},S={class:"card"},B={class:"grid grid-cols-4 gap-y-12 text-center mt-8"},C={class:"font-bold text-3xl"},E={class:"font-bold text-3xl"},F={class:"font-bold text-3xl"},j={class:"font-bold text-3xl"},q={key:0},A={class:"font-bold text-3xl"},D={class:"text-xs"},L={key:1},M={class:"font-bold text-3xl"},R={class:"text-xs"},Z={class:"card"},z={key:0},G={key:1,class:"text-xs mt-2"},H={class:"card"},I={key:0},J={class:"card"},de={__name:"VoucherSet",props:{id:{required:!0}},setup(f){d.extend(k),d.extend(T);const m=f,s=h({});y(()=>{p()});function p(){axios.get("/admin/voucher-sets/"+m.id+"?cached=false&relations=createdByTeam,allocatedToServiceTeam").then(r=>{s.value=r.data.data}).catch(r=>{console.log(r)})}return(r,t)=>(i(),l(b,null,[n(o(g),{title:"Voucher set"}),n(x,null,{header:v(()=>[n(V)]),default:v(()=>[e("div",$,[e("h2",null,a(m.id),1),s.value.is_test?(i(),l("div",w," Test voucher set ")):u("",!0)]),e("div",S,[t[6]||(t[6]=e("div",{class:"card-header"}," Voucher set details ",-1)),e("div",B,[e("div",null,[e("div",C," $"+a(s.value.total_set_value/100),1),t[0]||(t[0]=_(" Total set value "))]),e("div",null,[e("div",E," $"+a(s.value.total_set_value_remaining/100),1),t[1]||(t[1]=_(" Total remaining value "))]),e("div",null,[e("div",F,a(s.value.num_vouchers),1),t[2]||(t[2]=_(" # Vouchers "))]),e("div",null,[e("div",j,a(s.value.num_voucher_redemptions),1),t[3]||(t[3]=_(" # Redemptions "))]),s.value.last_redemption_at?(i(),l("div",q,[t[4]||(t[4]=e("div",null," Last redeemed ",-1)),e("div",A,a(o(d).utc(s.value.last_redemption_at).fromNow()),1),e("div",D," ("+a(o(d)(s.value.last_redemption_at))+") ",1)])):u("",!0),s.value.expires_at?(i(),l("div",L,[t[5]||(t[5]=e("div",null," Expires ",-1)),e("div",M,a(o(d).utc(s.value.expires_at).fromNow()),1),e("div",R," ("+a(o(d)(s.value.expires_at))+") ",1)])):u("",!0)])]),e("div",Z,[t[7]||(t[7]=e("div",{class:"card-header"}," Created by team ",-1)),s.value.created_by_team?(i(),l("div",z,[n(o(c),{href:r.route("admin.team",{id:s.value.created_by_team_id})},{default:v(()=>[_(a(s.value.created_by_team.name),1)]),_:1},8,["href"])])):u("",!0),s.value.created_at?(i(),l("div",G," Created at: "+a(o(d).utc(s.value.created_at).fromNow())+" ("+a(o(d)(s.value.created_at))+") ",1)):u("",!0)]),e("div",H,[t[8]||(t[8]=e("div",{class:"card-header"}," Allocated to team ",-1)),s.value.allocated_to_service_team?(i(),l("div",I,[n(o(c),{href:r.route("admin.team",{id:s.value.allocated_to_service_team_id})},{default:v(()=>[_(a(s.value.allocated_to_service_team.name),1)]),_:1},8,["href"])])):u("",!0)]),e("div",J,[t[9]||(t[9]=e("div",{class:"card-header"}," Vouchers ",-1)),n(N,{"voucher-set-id":m.id},null,8,["voucher-set-id"])]),t[10]||(t[10]=e("div",{class:"pb-32"},null,-1))]),_:1})],64))}};export{de as default};
