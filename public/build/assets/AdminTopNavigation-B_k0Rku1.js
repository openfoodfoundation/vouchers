import{r as x,s as T,a as l,b as a,e,d as r,w as d,f as u,u as c,i as h,p as L,x as V,t as k,F as b,j as p,h as f}from"./app-CLWo_2_0.js";import{S as j}from"./sweetalert2.all-CR-AECOm.js";const N=e("h2",null," Admin Dashboard ",-1),R={class:"flex justify-between flex-wrap"},A={class:"w-full md:mt-4 md:w-2/3 md:flex-grow lg:flex lg:justify-start lg:items-start lg:gap-x-4 grid grid-cols-3"},z={class:"w-full md:w-1/3"},C={class:"py-1 h-full w-full pt-4 md:pt-0"},D=e("div",{class:"text-xs mt-1 text-gray italic"},"Min. 3 chars",-1),B={class:"h-full"},E={key:0,class:"absolute top-48 left-0 w-full h-full min-h-full min-w-full"},U={class:"bg-white border rounded-lg p-4 mt-6 w-3/4 mx-auto z-20 relative overflow-y-scroll max-h-screen"},F={class:"mb-4 text-2xl"},$={key:0,class:"mb-8"},q=e("div",{class:"font-bold text-gray-300 mb-1"}," Users ",-1),I=["href"],O={class:"flex space-x-4"},P=["innerHTML"],G=["innerHTML"],J=e("i",{class:"fa fa-chevron-right flex items-center"},null,-1),K={key:1,class:"my-8"},Q=e("div",{class:"font-bold text-gray-300 mb-1"}," Teams ",-1),W=["href"],X={class:"flex"},Y=["innerHTML"],Z=e("i",{class:"fa fa-chevron-right flex items-center"},null,-1),ee={key:2,class:"my-8"},se=e("div",{class:"font-bold text-gray-300 mb-1"}," Voucher Sets ",-1),te=["href"],le={class:"flex"},ae=["innerHTML"],ne=e("i",{class:"fa fa-chevron-right flex items-center"},null,-1),oe={key:3,class:"my-8"},ie=e("div",{class:"font-bold text-gray-300 mb-1"}," Vouchers ",-1),re=["href"],de={class:"flex"},ue=["innerHTML"],ce=e("i",{class:"fa fa-chevron-right flex items-center"},null,-1),he={key:1,class:"absolute top-48 left-0 w-full h-full min-h-full min-w-full"},fe={class:"bg-white border rounded-lg p-4 mt-6 w-3/4 mx-auto z-20 relative overflow-y-scroll max-h-screen"},ve={class:"text-2xl"},be={__name:"AdminTopNavigation",setup(_e){const o=x(""),n=x({users:[],teams:[],vouchers:[],voucherSets:[]}),v=x(!1),_=x(!1);T(o,()=>{o.value.length>=3?M():(v.value=!1,_.value=!1)}),T(n,()=>{v.value=!1,_.value=!1,o.value.length>=3&&(n.value.users.length||n.value.teams.length||n.value.vouchers.length||n.value.voucherSets.length?v.value=!0:_.value=!0)});function M(){o.value&&o.value.length>=3&&axios.get("/admin/search?cached=false&query="+o.value).then(t=>{n.value=t.data.data}).catch(t=>{j.fire({icon:"error",title:"Oops!",text:t.response.data.message})})}function m(t){let i=new RegExp(o.value,"ig"),s=t.matchAll(i);if(s.length===0)return t;let w=0;return s.forEach(g=>{const S=t.slice(0,g.index+w),H=t.slice(g.index+w+g[0].length),y='<b class="text-blue-500">'+g[0]+"</b>";t=S+y+H,w+=y.length-g[0].length}),t}return(t,i)=>(l(),a(b,null,[N,e("div",R,[e("div",A,[r(c(h),{href:t.route("admin.home")},{default:d(()=>[u(" Admin Home ")]),_:1},8,["href"]),r(c(h),{href:t.route("admin.users")},{default:d(()=>[u(" Users ")]),_:1},8,["href"]),r(c(h),{href:t.route("admin.teams")},{default:d(()=>[u(" Teams ")]),_:1},8,["href"]),r(c(h),{href:t.route("admin.teams")},{default:d(()=>[u(" Voucher Sets ")]),_:1},8,["href"]),r(c(h),{href:t.route("admin.teams")},{default:d(()=>[u(" Vouchers ")]),_:1},8,["href"]),r(c(h),{href:t.route("admin.teams")},{default:d(()=>[u(" Redemptions ")]),_:1},8,["href"]),r(c(h),{href:t.route("admin.api-access-tokens")},{default:d(()=>[u(" API Access Tokens ")]),_:1},8,["href"])]),e("div",z,[e("div",C,[L(e("input",{id:"admin-search-box","onUpdate:modelValue":i[0]||(i[0]=s=>o.value=s),autofocus:"",class:"border-gray-200 placeholder:text-gray-400 rounded p-3 w-full text-blue",placeholder:"Search..",type:"search"},null,512),[[V,o.value]]),D])])]),e("div",B,[v.value?(l(),a("div",E,[e("div",{class:"bg-black fixed top-18 w-full h-screen opacity-60 z-10",onClick:i[1]||(i[1]=s=>v.value=!1)}),e("div",U,[e("div",F,'Search Results for "'+k(o.value)+'"',1),n.value.users.length>0?(l(),a("div",$,[q,e("div",null,[(l(!0),a(b,null,p(n.value.users,s=>(l(),a("div",null,[e("a",{href:"/admin/user/"+s.id,class:"flex justify-between w-full py-2 border-b",tabindex:"0"},[e("div",O,[e("div",{innerHTML:m(s.name)},null,8,P),e("div",{innerHTML:m(s.email)},null,8,G)]),J],8,I)]))),256))])])):f("",!0),n.value.teams.length>0?(l(),a("div",K,[Q,e("div",null,[(l(!0),a(b,null,p(n.value.teams,s=>(l(),a("div",null,[e("a",{href:"/admin/team/"+s.id,class:"flex justify-between w-full py-2 border-b",tabindex:"0"},[e("div",X,[e("div",{innerHTML:m(s.name)},null,8,Y)]),Z],8,W)]))),256))])])):f("",!0),n.value.voucherSets.length>0?(l(),a("div",ee,[se,e("div",null,[(l(!0),a(b,null,p(n.value.voucherSets,s=>(l(),a("div",null,[e("a",{href:"/admin/voucher-set/"+s.id,class:"flex justify-between w-full py-2 border-b",tabindex:"0"},[e("div",le,[e("div",{innerHTML:m(s.id)},null,8,ae)]),ne],8,te)]))),256))])])):f("",!0),n.value.vouchers.length>0?(l(),a("div",oe,[ie,e("div",null,[(l(!0),a(b,null,p(n.value.vouchers,s=>(l(),a("div",null,[e("a",{href:"/admin/voucher/"+s.id,class:"flex justify-between w-full py-2 border-b",tabindex:"0"},[e("div",de,[e("div",{innerHTML:m(s.id)},null,8,ue)]),ce],8,re)]))),256))])])):f("",!0)])])):f("",!0),_.value?(l(),a("div",he,[e("div",{class:"bg-black fixed top-18 w-full h-screen opacity-60 z-10",onClick:i[2]||(i[2]=s=>_.value=!1)}),e("div",fe,[e("div",ve,'No Search Results for "'+k(o.value)+'"',1)])])):f("",!0)])],64))}};export{be as _};
