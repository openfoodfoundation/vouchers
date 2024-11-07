import{r as h,o as V,c as s,a as i,u as _,w as u,F as A,Q as B,b as r,Z as R,e as v,t as l,d as a,f as c,n as g}from"./app-vZoJq0kq.js";import{_ as j,S as w}from"./AuthenticatedLayout-5kr8beat.js";import{P as q}from"./PrimaryButton-DaKkab-r.js";import{_ as k}from"./SecondaryButton-BpSOmNoX.js";import{d as p}from"./dayjs.min-C5CYVcWM.js";import{r as I}from"./relativeTime-DsKKDU9y.js";import{u as M}from"./utc-C1niODe_.js";import"./ApplicationLogo-Y4qEm-3G.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const $={key:0,class:"card"},P={key:1,class:"card"},D={class:"pt-4"},E={class:"pt-4"},N={key:0},F={key:1},L={key:2,class:"pb-4"},O={key:0,class:"py-8"},Y={key:1,class:"py-4"},z={class:"text-xs capitalize"},Z={key:2},G={key:0,class:"px-2 text-green-500"},H={key:1,class:"px-2 text-red-500"},oe={__name:"VoucherSetMerchantTeamApproval",props:{approvalRequestId:{type:String,required:!0},approve:{type:Boolean,default:!0}},setup(x){p.extend(I),p.extend(M);const m=x,t=h({}),o=h(!0),f=h(!1);V(()=>{T(),o.value=!!m.approve});function C(){B().props.auth.user.current_team_id===t.value.merchant_team_id&&(f.value=!0)}function T(){axios.get("/my-team-vsmtar/"+m.approvalRequestId+"?cached=false&relations=voucherSet.createdByTeam,voucherSet.allocatedToServiceTeam,merchantTeam").then(n=>{t.value=n.data.data,C()}).catch(n=>{console.log(n)})}function b(){let n="Approve";o.value||(n="Reject"),w.fire({title:o.value?"Are you sure approving?":"Are you sure rejecting?",text:'You are selecting "'+n+'" - any previous approvals or rejections will be overwritten. Sure?',icon:"warning",confirmButtonColor:"#3085d6",confirmButtonText:o.value?"Approve involvement":"Reject involvement",allowOutsideClick:!1,showCancelButton:!0}).then(e=>{if(e.isConfirmed){let d={approval_status:o.value?"approved":"rejected"};axios.put("/my-team-vsmtar/"+m.approvalRequestId,d).then(y=>{w.fire({title:o.value?"Approved!":"Rejected!",text:"Thank you for processing.",icon:"success",confirmButtonColor:"#3085d6",allowOutsideClick:!1,confirmButtonText:"Go to dashboard"}).then(S=>{S.isConfirmed&&(window.location.href=route("dashboard"))})}).catch(y=>{console.log(y)})}})}return(n,e)=>(r(),s(A,null,[i(_(R),{title:"Dashboard"}),i(j,null,{header:u(()=>e[3]||(e[3]=[v(" Voucher set approval ")])),default:u(()=>[!f.value&&t.value.merchant_team?(r(),s("div",$,' This request is related to a different merchant team. Please log into team "'+l(t.value.merchant_team.name)+'". ',1)):(r(),s("div",P,[e[9]||(e[9]=a("div",{class:"card-header"}," Voucher Set ",-1)),a("div",D,[a("div",null,[e[4]||(e[4]=a("div",{class:"font-bold"}," Voucher set details ",-1)),a("div",E," ID: "+l(t.value.voucher_set_id),1),t.value.voucher_set&&t.value.voucher_set.created_by_team?(r(),s("div",N," Created by team: "+l(t.value.voucher_set.created_by_team.name),1)):c("",!0),t.value.voucher_set&&t.value.voucher_set.allocated_to_service_team?(r(),s("div",F," Service team name: "+l(t.value.voucher_set.allocated_to_service_team.name),1)):c("",!0),t.value.voucher_set?(r(),s("div",L," Voucher set total value: $"+l((t.value.voucher_set.total_set_value/100).toFixed(2)),1)):c("",!0)]),t.value.merchant_team?(r(),s("div",O," You have been requested to approve your team's ("+l(t.value.merchant_team.name)+") involvement with this voucher set, which will be redeeming vouchers within the Vine platform. Approving this request means that your organisation will apply discounts as per voucher redemptions made at your shop or premises using the Vine system. Vouchers up to the value of the voucher set above may be redeemed at your premises or store. Please select your choice below. ",1)):c("",!0),t.value.approval_status!=="ready"?(r(),s("div",Y,[a("div",null," You have already "+l(t.value.approval_status)+" "+l(_(p).utc(t.value.approval_status_last_updated_at).fromNow())+" so no further action is needed. ",1),a("div",z,l(t.value.approval_status)+" at ("+l(_(p)(t.value.approval_status_last_updated_at))+") ",1)])):(r(),s("div",Z,[i(k,{onClick:e[0]||(e[0]=d=>o.value=!1),class:g(["mr-2",{"opacity-50":o.value}])},{default:u(()=>e[5]||(e[5]=[a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4 mr-2 text-red-500"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"})],-1),v(" Reject ")])),_:1},8,["class"]),i(k,{onClick:e[1]||(e[1]=d=>o.value=!0),class:g(["ml-2",{"opacity-50":!o.value}])},{default:u(()=>e[6]||(e[6]=[a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4 mr-2 text-green-500"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})],-1),v(" Approve ")])),_:1},8,["class"]),a("div",null,[i(q,{onClick:e[2]||(e[2]=d=>b()),class:"mt-4"},{default:u(()=>[e[7]||(e[7]=v(" Selected: ")),o.value?(r(),s("span",G,"APPROVED")):(r(),s("span",H,"REJECTED")),e[8]||(e[8]=v(" > Click Here To Save "))]),_:1})])]))])]))]),_:1})],64))}};export{oe as default};
