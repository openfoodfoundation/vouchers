import{r as v,o as w,b as l,c as d,d as e,F as k,g as V,a as i,w as c,e as m,t as a,u as _,i as u,f as B}from"./app-vZoJq0kq.js";import{P as T}from"./PaginatorComponent-CVPpIDQx.js";import{d as x}from"./dayjs.min-C5CYVcWM.js";import{r as C}from"./relativeTime-DsKKDU9y.js";import{u as N}from"./utc-C1niODe_.js";const q={key:0},I={class:"w-full text-xs"},j={class:"hover:bg-gray-100 border-b"},F={class:"py-1"},D={class:"text-right"},P={key:0},A={key:1},Y={class:"text-right"},E={key:0},L={key:1},M={class:"flex justify-end"},R={class:"flex justify-end items-center mt-4"},$={class:"w-full lg:w-1/3"},O={__name:"VoucherSetsComponent",props:{teamId:{required:!1,default:null},filterVoucherSets:{required:!1,default:null}},setup(b){x.extend(C),x.extend(N);const r=b,f=v(50),o=v({});w(()=>{r.teamId&&(f.value=10),h()});function h(p=1){let s="";r.teamId&&r.filterVoucherSets&&(s="&where[]="+r.filterVoucherSets+","+r.teamId),axios.get("/admin/voucher-sets?cached=false&page="+p+"&limit="+f.value+s+"&orderBy=created_at,desc&relations=createdByTeam,allocatedToServiceTeam,currencyCountry").then(t=>{o.value=t.data.data}).catch(t=>{console.log(t)})}return(p,s)=>o.value.data&&o.value.data.length?(l(),d("div",q,[e("table",I,[s[1]||(s[1]=e("thead",{class:"bg-gray-200 font-bold border-b"},[e("tr",null,[e("td",{class:"p-2"},"ID"),e("td",null,"Test?"),e("td",null,"Created By"),e("td",null,"Allocated To"),e("td",null,"Approved"),e("td",{class:"text-right"},"Total Value"),e("td",{class:"text-right"},"Value Remainaing"),e("td")])],-1)),e("tbody",null,[(l(!0),d(k,null,V(o.value.data,t=>{var g,y;return l(),d("tr",j,[e("td",F,[i(_(u),{href:"/admin/voucher-set/"+t.id},{default:c(()=>[m(" #"+a(t.id),1)]),_:2},1032,["href"])]),e("td",null,a(t.is_test?"Yes":""),1),e("td",null,[i(_(u),{href:"/admin/team/"+t.created_by_team_id},{default:c(()=>{var n;return[m(a((n=t.created_by_team)==null?void 0:n.name),1)]}),_:2},1032,["href"])]),e("td",null,[i(_(u),{href:"/admin/team/"+t.allocated_to_service_team_id},{default:c(()=>{var n;return[m(a((n=t.allocated_to_service_team)==null?void 0:n.name),1)]}),_:2},1032,["href"])]),e("td",null,a(t.merchant_approval_request_id?"Yes":"--"),1),e("td",D,[t.merchant_approval_request_id?(l(),d("div",P,a(Number(t.total_set_value/100).toFixed(2))+" "+a((g=t.currency_country)==null?void 0:g.currency_code),1)):(l(),d("div",A," -- "))]),e("td",Y,[t.merchant_approval_request_id?(l(),d("div",E,a(Number(t.total_set_value_remaining/100).toFixed(2))+" "+a((y=t.total_set_value_remaining)==null?void 0:y.currency_code),1)):(l(),d("div",L," -- "))]),e("td",M,[i(_(u),{class:"secondaryButton",href:"/admin/voucher-set/"+t.id},{default:c(()=>s[0]||(s[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})],-1)])),_:2},1032,["href"])])])}),256))])]),e("div",R,[e("div",$,[i(T,{onSetDataPage:h,"pagination-data":o.value},null,8,["pagination-data"])])])])):B("",!0)}};export{O as _};
