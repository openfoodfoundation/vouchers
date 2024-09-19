import{r as p,s as T,a as n,b as r,e as s,d as a,w as u,f as d,u as f,i as v,p as S,D as V,t as M,F as x,j as w,h as m}from"./app-Be3sEMEx.js";import{S as j}from"./AuthenticatedLayout-CIjOjlEx.js";const N={class:"flex justify-between flex-wrap"},R={class:"w-full md:mt-4 md:w-2/3 md:flex-grow lg:flex lg:justify-start lg:items-start lg:gap-x-4 grid grid-cols-3 font-normal text-base"},A={class:"w-full md:w-1/3"},D={class:"py-1 h-full w-full pt-4 md:pt-0"},z={class:"h-full"},C={key:0,class:"absolute top-48 left-0 w-full h-full min-h-full min-w-full"},B={class:"bg-white border rounded-lg p-4 mt-6 w-3/4 mx-auto z-20 relative overflow-y-scroll max-h-screen"},E={class:"mb-4 text-2xl"},U={key:0,class:"mb-8"},F=["href"],$={class:"flex space-x-4"},q=["innerHTML"],I=["innerHTML"],O={key:1,class:"my-8"},P=["href"],G={class:"flex"},J=["innerHTML"],K={key:2,class:"my-8"},Q=["href"],W={class:"flex"},X=["innerHTML"],Y={key:3,class:"my-8"},Z=["href"],ee={class:"flex"},se=["innerHTML"],le={class:"ml-2"},te=["innerHTML"],ne={key:1,class:"absolute top-48 left-0 w-full h-full min-h-full min-w-full"},re={class:"bg-white border rounded-lg p-4 mt-6 w-3/4 mx-auto z-20 relative overflow-y-scroll max-h-screen"},ie={class:"text-2xl"},de={__name:"AdminTopNavigation",setup(oe){const o=p(""),i=p({users:[],teams:[],vouchers:[],voucherSets:[]}),c=p(!1),g=p(!1);T(o,()=>{o.value.length>=3?k():(c.value=!1,g.value=!1)}),T(i,()=>{c.value=!1,g.value=!1,o.value.length>=3&&(i.value.users.length||i.value.teams.length||i.value.vouchers.length||i.value.voucherSets.length?c.value=!0:g.value=!0)});function k(){o.value&&o.value.length>=3&&axios.get("/admin/search?cached=false&query="+o.value).then(t=>{i.value=t.data.data}).catch(t=>{j.fire({icon:"error",title:"Oops!",text:t.response.data.message})})}function h(t){let e=new RegExp(o.value,"ig"),l=t.matchAll(e);if(l.length===0)return t;let y=0;return l.forEach(b=>{const H=t.slice(0,b.index+y),L=t.slice(b.index+y+b[0].length),_='<b class="text-blue-500">'+b[0]+"</b>";t=H+_+L,y+=_.length-b[0].length}),t}return(t,e)=>(n(),r(x,null,[e[19]||(e[19]=s("h2",null," Admin Dashboard ",-1)),s("div",N,[s("div",R,[a(f(v),{href:t.route("admin.home")},{default:u(()=>e[3]||(e[3]=[d(" Admin Home ")])),_:1},8,["href"]),a(f(v),{href:t.route("admin.users")},{default:u(()=>e[4]||(e[4]=[d(" Users ")])),_:1},8,["href"]),a(f(v),{href:t.route("admin.teams")},{default:u(()=>e[5]||(e[5]=[d(" Teams ")])),_:1},8,["href"]),a(f(v),{href:t.route("admin.voucher-sets")},{default:u(()=>e[6]||(e[6]=[d(" Voucher Sets ")])),_:1},8,["href"]),a(f(v),{href:t.route("admin.vouchers")},{default:u(()=>e[7]||(e[7]=[d(" Vouchers ")])),_:1},8,["href"]),a(f(v),{href:t.route("admin.voucher-redemptions")},{default:u(()=>e[8]||(e[8]=[d(" Redemptions ")])),_:1},8,["href"]),a(f(v),{href:t.route("admin.api-access-tokens")},{default:u(()=>e[9]||(e[9]=[d(" API Access Tokens ")])),_:1},8,["href"])]),s("div",A,[s("div",D,[S(s("input",{id:"admin-search-box","onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),autofocus:"",class:"border-gray-200 placeholder:text-gray-400 rounded p-3 w-full text-blue",placeholder:"Search..",type:"search"},null,512),[[V,o.value]]),e[10]||(e[10]=s("div",{class:"text-xs mt-1 text-gray italic"},"Min. 3 chars",-1))])])]),s("div",z,[c.value?(n(),r("div",C,[s("div",{class:"bg-black fixed top-18 w-full h-screen opacity-60 z-10",onClick:e[1]||(e[1]=l=>c.value=!1)}),s("div",B,[s("div",E,'Search Results for "'+M(o.value)+'"',1),i.value.users.length>0?(n(),r("div",U,[e[12]||(e[12]=s("div",{class:"font-bold text-gray-300 mb-1"}," Users ",-1)),s("div",null,[(n(!0),r(x,null,w(i.value.users,l=>(n(),r("div",null,[s("a",{href:"/admin/user/"+l.id,class:"flex justify-between w-full py-2 border-b",tabindex:"0"},[s("div",$,[s("div",{innerHTML:h(l.name)},null,8,q),s("div",{innerHTML:h(l.email)},null,8,I)]),e[11]||(e[11]=s("i",{class:"fa fa-chevron-right flex items-center"},null,-1))],8,F)]))),256))])])):m("",!0),i.value.teams.length>0?(n(),r("div",O,[e[14]||(e[14]=s("div",{class:"font-bold text-gray-300 mb-1"}," Teams ",-1)),s("div",null,[(n(!0),r(x,null,w(i.value.teams,l=>(n(),r("div",null,[s("a",{href:"/admin/team/"+l.id,class:"flex justify-between w-full py-2 border-b",tabindex:"0"},[s("div",G,[s("div",{innerHTML:h(l.name)},null,8,J)]),e[13]||(e[13]=s("i",{class:"fa fa-chevron-right flex items-center"},null,-1))],8,P)]))),256))])])):m("",!0),i.value.voucherSets.length>0?(n(),r("div",K,[e[16]||(e[16]=s("div",{class:"font-bold text-gray-300 mb-1"}," Voucher Sets ",-1)),s("div",null,[(n(!0),r(x,null,w(i.value.voucherSets,l=>(n(),r("div",null,[s("a",{href:"/admin/voucher-set/"+l.id,class:"flex justify-between w-full py-2 border-b",tabindex:"0"},[s("div",W,[s("div",{innerHTML:h(l.id)},null,8,X)]),e[15]||(e[15]=s("i",{class:"fa fa-chevron-right flex items-center"},null,-1))],8,Q)]))),256))])])):m("",!0),i.value.vouchers.length>0?(n(),r("div",Y,[e[18]||(e[18]=s("div",{class:"font-bold text-gray-300 mb-1"}," Vouchers ",-1)),s("div",null,[(n(!0),r(x,null,w(i.value.vouchers,l=>(n(),r("div",null,[s("a",{href:"/admin/voucher/"+l.id,class:"flex justify-between w-full py-2 border-b",tabindex:"0"},[s("div",ee,[s("div",{innerHTML:h(l.id)},null,8,se),s("div",le,[s("div",{innerHTML:h("("+l.voucher_short_code+")")},null,8,te)])]),e[17]||(e[17]=s("i",{class:"fa fa-chevron-right flex items-center"},null,-1))],8,Z)]))),256))])])):m("",!0)])])):m("",!0),g.value?(n(),r("div",ne,[s("div",{class:"bg-black fixed top-18 w-full h-screen opacity-60 z-10",onClick:e[2]||(e[2]=l=>g.value=!1)}),s("div",re,[s("div",ie,'No Search Results for "'+M(o.value)+'"',1)])])):m("",!0)])],64))}};export{de as _};
