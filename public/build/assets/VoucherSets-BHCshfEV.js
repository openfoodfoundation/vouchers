import{_ as v}from"./AuthenticatedLayout-D52oe_Gx.js";import{r as p,o as x,a,b as o,d,u as n,w as m,F as f,Z as y,e,j as g,h as l,k,i as w,t as i}from"./app-CFlY96qh.js";import{_ as b}from"./AdminTopNavigation-D044hfaf.js";import{P as B}from"./PaginatorComponent-B-4F4MiF.js";import{d as c}from"./dayjs.min-DxcSCvAK.js";import{r as V}from"./relativeTime-DsQLhzQG.js";import{u as j}from"./utc-B3HsdkEh.js";import"./ApplicationLogo-CGgKE9h7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PrimaryButton-Z5WSCg3Q.js";import"./sweetalert2.esm.all-Do4KgkwR.js";import"./SecondaryButton-CLxNt9-p.js";const C={class:"card"},T={key:0},N={class:"border-b flex justify-between items-center py-2 sm:p-2"},P={class:"text-sm"},D={class:"font-bold text-xs"},F={key:0},$={key:1},z={key:2,class:"text-red-500 text-xs"},A={class:"text-xs opacity-50"},E={class:"text-center"},L={class:"flex justify-end items-center mt-4"},M={class:"w-full lg:w-1/3"},Y={__name:"VoucherSets",setup(Z){c.extend(V),c.extend(j);const h=p(50),r=p({});x(()=>{u()});function u(_=1){axios.get("/admin/voucher-sets?cached=false&page="+_+"&limit="+h.value+"&orderBy=created_at,desc&relations=createdByTeam,allocatedToServiceTeam").then(s=>{r.value=s.data.data}).catch(s=>{console.log(s)})}return(_,s)=>(a(),o(f,null,[d(n(y),{title:"Voucher sets"}),d(v,null,{header:m(()=>[d(b)]),default:m(()=>[e("div",C,[r.value.data&&r.value.data.length?(a(),o("div",T,[(a(!0),o(f,null,g(r.value.data,t=>(a(),k(n(w),{href:_.route("admin.voucher-set",t.id),class:"hover:no-underline hover:opacity-75"},{default:m(()=>[e("div",N,[e("div",P,[e("div",D," #"+i(t.id),1),t.created_by_team?(a(),o("div",F," Created by: "+i(t.created_by_team.name),1)):l("",!0),t.allocated_to_service_team?(a(),o("div",$," Allocated to: "+i(t.allocated_to_service_team.name),1)):l("",!0),t.is_test?(a(),o("div",z," Test voucher set ")):l("",!0),e("div",A,[e("div",E,i(n(c).utc(t.created_at).fromNow())+" ("+i(n(c)(t.created_at))+") ",1)])]),s[0]||(s[0]=e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})])],-1))])]),_:2},1032,["href"]))),256))])):l("",!0),e("div",L,[e("div",M,[d(B,{onSetDataPage:u,"pagination-data":r.value},null,8,["pagination-data"])])])])]),_:1})],64))}};export{Y as default};
