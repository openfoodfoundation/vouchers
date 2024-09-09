import{A as B}from"./ApplicationLogo-CGgKE9h7.js";import{o as A,A as D,y as w,r as L,a as l,b as c,e as s,z as f,p as C,B as S,d as n,w as r,n as u,C as M,k,u as h,i as m,f as a,h as _,t as b}from"./app-CFlY96qh.js";import{P as N}from"./PrimaryButton-Z5WSCg3Q.js";const T={class:"relative"},z={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:String,default:"py-1 bg-white"}},setup(i){const o=i,t=y=>{d.value&&y.key==="Escape"&&(d.value=!1)};A(()=>document.addEventListener("keydown",t)),D(()=>document.removeEventListener("keydown",t));const e=w(()=>({48:"w-48"})[o.width.toString()]),v=w(()=>o.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":o.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top"),d=L(!1);return(y,p)=>(l(),c("div",T,[s("div",{onClick:p[0]||(p[0]=$=>d.value=!d.value)},[f(y.$slots,"trigger")]),C(s("div",{class:"fixed inset-0 z-40",onClick:p[1]||(p[1]=$=>d.value=!1)},null,512),[[S,d.value]]),n(M,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:r(()=>[C(s("div",{class:u(["absolute z-50 mt-2 rounded-md shadow-lg",[e.value,v.value]]),style:{display:"none"},onClick:p[2]||(p[2]=$=>d.value=!1)},[s("div",{class:u(["rounded-md ring-1 ring-black ring-opacity-5",i.contentClasses])},[f(y.$slots,"content")],2)],2),[[S,d.value]])]),_:3})]))}},g={__name:"DropdownLink",props:{href:{type:String,required:!0}},setup(i){return(o,t)=>(l(),k(h(m),{href:i.href,class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:r(()=>[f(o.$slots,"default")]),_:3},8,["href"]))}},E={__name:"NavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(i){const o=i,t=w(()=>o.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-light leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-light leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(e,v)=>(l(),k(h(m),{href:i.href,class:u(t.value)},{default:r(()=>[f(e.$slots,"default")]),_:3},8,["href","class"]))}},x={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(i){const o=i,t=w(()=>o.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(e,v)=>(l(),k(h(m),{href:i.href,class:u(t.value)},{default:r(()=>[f(e.$slots,"default")]),_:3},8,["href","class"]))}},j={class:"min-h-screen bg-gray-100"},P={class:"bg-white border-b border-gray-100"},V={class:"container mx-auto px-4 sm:px-6 lg:px-8"},q={class:"flex justify-between h-16"},O={class:"flex items-center"},I={class:"shrink-0 flex items-center"},R={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex uppercase"},U={class:"hidden sm:flex sm:items-center sm:ms-6"},F={key:0},G={class:"ms-3 relative"},H={class:"inline-flex rounded-md"},J={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},K={class:"-me-2 flex items-center sm:hidden"},Q={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},W={class:"pt-2 pb-3 space-y-1"},X={class:"pt-4 pb-1 border-t border-gray-200"},Y={class:"px-4"},Z={class:"text-base text-gray-800"},ee={class:"text-sm text-gray-500"},te={class:"mt-3 space-y-1"},se={key:0,class:"bg-white shadow"},re={class:"container mx-auto py-6 px-4"},ie={__name:"AuthenticatedLayout",setup(i){const o=L(!1);return(t,e)=>(l(),c("div",null,[s("div",j,[s("nav",P,[s("div",V,[s("div",q,[s("div",O,[s("div",I,[n(h(m),{href:t.route("dashboard")},{default:r(()=>[n(B,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),s("div",R,[n(E,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>e[1]||(e[1]=[a(" Dashboard ")])),_:1},8,["href","active"]),e[2]||(e[2]=s("a",{href:"/api-documentation",target:"_blank",class:"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-light leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"}," Api Docs ",-1))])]),s("div",U,[t.$page.props.isImpersonating?(l(),c("div",F,[n(N,null,{default:r(()=>[n(h(m),{href:t.route("stop-impersonating")},{default:r(()=>e[3]||(e[3]=[a("Stop Impersonating")])),_:1},8,["href"])]),_:1})])):_("",!0),s("div",G,[n(z,{align:"right",width:"48"},{trigger:r(()=>[s("span",H,[s("button",J,[a(b(t.$page.props.auth.user.name)+" - "+b(t.$page.props.auth.currentTeam.name)+" ",1),e[4]||(e[4]=s("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[s("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1))])])]),content:r(()=>[t.$page.props.auth.user.is_admin?(l(),k(g,{key:0,href:t.route("admin.home")},{default:r(()=>e[5]||(e[5]=[a(" Admin Section ")])),_:1},8,["href"])):_("",!0),n(g,{href:t.route("profile.edit")},{default:r(()=>e[6]||(e[6]=[a(" Profile ")])),_:1},8,["href"]),n(g,{href:t.route("my-team")},{default:r(()=>e[7]||(e[7]=[a(" My Team ")])),_:1},8,["href"]),n(g,{href:t.route("audit-trail")},{default:r(()=>e[8]||(e[8]=[a(" Audit Trail ")])),_:1},8,["href"]),n(g,{href:t.route("logout"),method:"post",as:"button"},{default:r(()=>e[9]||(e[9]=[a(" Log Out ")])),_:1},8,["href"])]),_:1})])]),s("div",K,[s("button",{onClick:e[0]||(e[0]=v=>o.value=!o.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(l(),c("svg",Q,[s("path",{class:u({hidden:o.value,"inline-flex":!o.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),s("path",{class:u({hidden:!o.value,"inline-flex":o.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),s("div",{class:u([{block:o.value,hidden:!o.value},"sm:hidden"])},[s("div",W,[n(x,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>e[10]||(e[10]=[a(" Dashboard ")])),_:1},8,["href","active"]),n(x,{href:t.route("audit-trail"),active:t.route().current("audit-trail")},{default:r(()=>e[11]||(e[11]=[a(" Audit Trail ")])),_:1},8,["href","active"])]),s("div",X,[s("div",Y,[s("div",Z,b(t.$page.props.auth.user.name),1),s("div",ee,b(t.$page.props.auth.user.email),1)]),s("div",te,[n(x,{href:t.route("profile.edit")},{default:r(()=>e[12]||(e[12]=[a(" Profile ")])),_:1},8,["href"]),n(x,{href:t.route("logout"),method:"post",as:"button"},{default:r(()=>e[13]||(e[13]=[a(" Log Out ")])),_:1},8,["href"])])])],2)]),t.$slots.header?(l(),c("header",se,[s("div",re,[f(t.$slots,"header")])])):_("",!0),s("main",null,[f(t.$slots,"default")])])]))}};export{ie as _};
