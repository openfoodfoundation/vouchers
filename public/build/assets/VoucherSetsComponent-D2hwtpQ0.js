<<<<<<<< HEAD:public/build/assets/VoucherSetsComponent-D2hwtpQ0.js
import{r as f,o as p,a,b as o,F as h,j as g,k as y,w as k,e as t,t as s,h as d,u,i as w,d as x}from"./app-2h_-0PGk.js";import{P as b}from"./PaginatorComponent-BX4O-zxy.js";import{d as n}from"./dayjs.min-VSo3VuGw.js";import{r as B}from"./relativeTime-CC76ka3w.js";import{u as V}from"./utc-DV_EGZf5.js";const C={key:0},T={class:"border-b flex justify-between items-center py-2 sm:p-2"},j={class:"text-xs"},I={class:"font-bold text-sm"},N={key:0,class:"text-red-500 font-bold"},P={key:1},$={key:2},q={key:3},D={class:"flex justify-end items-center mt-4"},F={class:"w-full lg:w-1/3"},G={__name:"VoucherSetsComponent",props:{teamId:{required:!1,default:null},filterVoucherSets:{required:!1,default:null}},setup(v){n.extend(B),n.extend(V);const r=v,m=f(50),i=f({});p(()=>{r.teamId&&(m.value=10),_()});function _(c=1){let l="";r.teamId&&r.filterVoucherSets&&(l="&where[]="+r.filterVoucherSets+","+r.teamId),axios.get("/admin/voucher-sets?cached=false&page="+c+"&limit="+m.value+l+"&orderBy=created_at,desc&relations=createdByTeam,allocatedToServiceTeam").then(e=>{i.value=e.data.data}).catch(e=>{console.log(e)})}return(c,l)=>i.value.data&&i.value.data.length?(a(),o("div",C,[(a(!0),o(h,null,g(i.value.data,e=>(a(),y(u(w),{href:c.route("admin.voucher-set",e.id),class:"hover:no-underline hover:opacity-75"},{default:k(()=>[t("div",T,[t("div",j,[t("div",I," #"+s(e.id),1),e.is_test?(a(),o("div",N," Test voucher set ")):d("",!0),e.created_by_team?(a(),o("div",P," Created by: "+s(e.created_by_team.name),1)):d("",!0),e.allocated_to_service_team?(a(),o("div",$," Allocated to: "+s(e.allocated_to_service_team.name),1)):d("",!0),t("div",null," Total set value: $"+s(e.total_set_value/100),1),t("div",null," Total remaining value: $"+s(e.total_set_value_remaining/100),1),e.created_by_team?(a(),o("div",q," Created at: "+s(u(n).utc(e.created_at).fromNow())+" ("+s(u(n)(e.created_at))+") ",1)):d("",!0)]),l[0]||(l[0]=t("div",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})])],-1))])]),_:2},1032,["href"]))),256)),t("div",D,[t("div",F,[x(b,{onSetDataPage:_,"pagination-data":i.value},null,8,["pagination-data"])])])])):d("",!0)}};export{G as _};
========
import{r as f,o as p,a,b as o,F as h,j as g,k as y,w as k,e as t,t as s,h as d,u,i as w,d as x}from"./app-BjoHTVP_.js";import{P as b}from"./PaginatorComponent-DwJRF5AQ.js";import{d as n}from"./dayjs.min-B2p_X6wh.js";import{r as B}from"./relativeTime-Y3br4wuk.js";import{u as V}from"./utc-DWE2-ZlI.js";const C={key:0},T={class:"border-b flex justify-between items-center py-2 sm:p-2"},j={class:"text-xs"},I={class:"font-bold text-sm"},N={key:0,class:"text-red-500 font-bold"},P={key:1},$={key:2},q={key:3},D={class:"flex justify-end items-center mt-4"},F={class:"w-full lg:w-1/3"},G={__name:"VoucherSetsComponent",props:{teamId:{required:!1,default:null},filterVoucherSets:{required:!1,default:null}},setup(v){n.extend(B),n.extend(V);const r=v,m=f(50),i=f({});p(()=>{r.teamId&&(m.value=10),_()});function _(c=1){let l="";r.teamId&&r.filterVoucherSets&&(l="&where[]="+r.filterVoucherSets+","+r.teamId),axios.get("/admin/voucher-sets?cached=false&page="+c+"&limit="+m.value+l+"&orderBy=created_at,desc&relations=createdByTeam,allocatedToServiceTeam").then(e=>{i.value=e.data.data}).catch(e=>{console.log(e)})}return(c,l)=>i.value.data&&i.value.data.length?(a(),o("div",C,[(a(!0),o(h,null,g(i.value.data,e=>(a(),y(u(w),{href:c.route("admin.voucher-set",e.id),class:"hover:no-underline hover:opacity-75"},{default:k(()=>[t("div",T,[t("div",j,[t("div",I," #"+s(e.id),1),e.is_test?(a(),o("div",N," Test voucher set ")):d("",!0),e.created_by_team?(a(),o("div",P," Created by: "+s(e.created_by_team.name),1)):d("",!0),e.allocated_to_service_team?(a(),o("div",$," Allocated to: "+s(e.allocated_to_service_team.name),1)):d("",!0),t("div",null," Total set value: $"+s(e.total_set_value/100),1),t("div",null," Total remaining value: $"+s(e.total_set_value_remaining/100),1),e.created_by_team?(a(),o("div",q," Created at: "+s(u(n).utc(e.created_at).fromNow())+" ("+s(u(n)(e.created_at))+") ",1)):d("",!0)]),l[0]||(l[0]=t("div",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})])],-1))])]),_:2},1032,["href"]))),256)),t("div",D,[t("div",F,[x(b,{onSetDataPage:_,"pagination-data":i.value},null,8,["pagination-data"])])])])):d("",!0)}};export{G as _};
>>>>>>>> develop:public/build/assets/VoucherSetsComponent-BSgh-1xG.js
