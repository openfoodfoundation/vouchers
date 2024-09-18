import{S as p,_ as g}from"./AuthenticatedLayout-C2hWJ0Ka.js";import{r as m,a as c,b as v,d as t,e,w as l,u as r,i as n,t as u,F as y,Z as w}from"./app-CZIcKt2y.js";import{_ as S}from"./AdminTopNavigation-_co5wfWU.js";import{_ as d}from"./SecondaryButton-XBgzHCm9.js";import{_ as $}from"./AjaxLoadingIndicator-DUq7o1e5.js";import{_ as j}from"./AuditItemsComponent-CcuR1sr1.js";import"./ApplicationLogo-CjnD_xkm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PrimaryButton-DvVpI_7K.js";import"./dayjs.min-B2A1-x4Q.js";const V={class:"card"},b={class:"grid grid-cols-2 lg:grid-cols-4 gap-4"},B={class:"w-full"},N={class:"flex justify-center text-3xl"},D={class:"w-full"},F={class:"flex justify-center text-3xl"},R={class:"w-full"},k={class:"flex justify-center text-3xl"},C={class:"w-full"},O={class:"flex justify-center text-3xl"},A={class:"w-full"},E={class:"flex justify-center text-3xl"},H={class:"w-full"},I={class:"flex justify-center text-3xl"},T={class:"w-full"},U={class:"flex justify-center text-3xl"},Z={class:"w-full"},q={class:"flex justify-center text-3xl"},z={__name:"SystemStatisticsComponent",setup(h){const _=m(!1),o=m({num_users:0,num_teams:0,num_voucher_sets:0,num_vouchers:0,num_voucher_redemptions:0,sum_voucher_value_total:0,sum_voucher_value_redeemed:0,sum_voucher_value_remaining:0});function x(){_.value=!0,axios.get("/admin/system-statistics?cached=false&limit=1&orderBy=id,desc").then(a=>{var s,f;(s=a.data.data)!=null&&s.data[0]&&(o.value=(f=a.data.data)==null?void 0:f.data[0]),_.value=!1}).catch(a=>{p.fire({icon:"error",title:"Oops!",text:a.response.data.meta.message}),_.value=!1})}function i(a){return Intl.NumberFormat("en",{notation:"compact"}).format(a)}return x(),(a,s)=>(c(),v("div",V,[t($,{loading:_.value},null,8,["loading"]),e("div",b,[t(d,null,{default:l(()=>[e("div",B,[t(r(n),{href:a.route("admin.users"),class:"hover:no-underline"},{default:l(()=>[e("div",N,u(i(o.value.num_users)),1),s[0]||(s[0]=e("div",{class:"text-xs"}," # Users ",-1))]),_:1},8,["href"])])]),_:1}),t(d,null,{default:l(()=>[e("div",D,[t(r(n),{href:a.route("admin.teams"),class:"hover:no-underline"},{default:l(()=>[e("div",F,u(i(o.value.num_teams)),1),s[1]||(s[1]=e("div",{class:"text-xs"}," # Teams ",-1))]),_:1},8,["href"])])]),_:1}),s[8]||(s[8]=e("div",{class:"hidden lg:inline"},null,-1)),s[9]||(s[9]=e("div",{class:"hidden lg:inline"},null,-1)),t(d,null,{default:l(()=>[e("div",R,[t(r(n),{href:a.route("admin.voucher-sets"),class:"hover:no-underline"},{default:l(()=>[e("div",k,u(i(o.value.num_voucher_sets)),1),s[2]||(s[2]=e("div",{class:"text-xs"}," # Voucher Sets ",-1))]),_:1},8,["href"])])]),_:1}),t(d,null,{default:l(()=>[e("div",C,[t(r(n),{href:a.route("admin.vouchers"),class:"hover:no-underline"},{default:l(()=>[e("div",O,u(i(o.value.num_vouchers)),1),s[3]||(s[3]=e("div",{class:"text-xs"}," # Vouchers ",-1))]),_:1},8,["href"])])]),_:1}),t(d,null,{default:l(()=>[e("div",A,[t(r(n),{href:a.route("admin.vouchers"),class:"hover:no-underline"},{default:l(()=>[e("div",E,u(i(o.value.sum_voucher_value_total)),1),s[4]||(s[4]=e("div",{class:"text-xs"}," $ Voucher (Original) ",-1))]),_:1},8,["href"])])]),_:1}),t(d,null,{default:l(()=>[e("div",H,[t(r(n),{href:a.route("admin.vouchers"),class:"hover:no-underline"},{default:l(()=>[e("div",I,u(i(o.value.sum_voucher_value_remaining)),1),s[5]||(s[5]=e("div",{class:"text-xs"}," $ Vouchers Remaining ",-1))]),_:1},8,["href"])])]),_:1}),t(d,null,{default:l(()=>[e("div",T,[t(r(n),{href:a.route("admin.voucher-redemptions"),class:"hover:no-underline"},{default:l(()=>[e("div",U,u(i(o.value.num_voucher_redemptions)),1),s[6]||(s[6]=e("div",{class:"text-xs"}," # Redemptions ",-1))]),_:1},8,["href"])])]),_:1}),t(d,null,{default:l(()=>[e("div",Z,[t(r(n),{href:a.route("admin.voucher-redemptions"),class:"hover:no-underline"},{default:l(()=>[e("div",q,u(i(o.value.sum_voucher_value_redeemed)),1),s[7]||(s[7]=e("div",{class:"text-xs"}," $ Redemptions ",-1))]),_:1},8,["href"])])]),_:1})])]))}},ee={__name:"AdminHome",setup(h){return(_,o)=>(c(),v(y,null,[t(r(w),{title:"Dashboard"}),t(g,null,{header:l(()=>[t(S)]),default:l(()=>[t(z),t(j,{"is-admin":!0})]),_:1})],64))}};export{ee as default};
