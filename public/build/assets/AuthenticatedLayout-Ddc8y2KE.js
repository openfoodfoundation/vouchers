import{A as B}from"./ApplicationLogo-CmYXJ9Tu.js";import{o as A,A as D,y as x,r as L,a as i,b as p,e as t,z as c,p as C,B as S,d as r,w as s,n as u,C as M,k as w,u as g,i as m,f as a,h as k,t as b}from"./app-De6ADG2Z.js";import{P as N}from"./PrimaryButton-7kF1Zoeu.js";const T={class:"relative"},z={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:String,default:"py-1 bg-white"}},setup(n){const o=n,e=y=>{d.value&&y.key==="Escape"&&(d.value=!1)};A(()=>document.addEventListener("keydown",e)),D(()=>document.removeEventListener("keydown",e));const l=x(()=>({48:"w-48"})[o.width.toString()]),v=x(()=>o.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":o.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top"),d=L(!1);return(y,f)=>(i(),p("div",T,[t("div",{onClick:f[0]||(f[0]=$=>d.value=!d.value)},[c(y.$slots,"trigger")]),C(t("div",{class:"fixed inset-0 z-40",onClick:f[1]||(f[1]=$=>d.value=!1)},null,512),[[S,d.value]]),r(M,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:s(()=>[C(t("div",{class:u(["absolute z-50 mt-2 rounded-md shadow-lg",[l.value,v.value]]),style:{display:"none"},onClick:f[2]||(f[2]=$=>d.value=!1)},[t("div",{class:u(["rounded-md ring-1 ring-black ring-opacity-5",n.contentClasses])},[c(y.$slots,"content")],2)],2),[[S,d.value]])]),_:3})]))}},h={__name:"DropdownLink",props:{href:{type:String,required:!0}},setup(n){return(o,e)=>(i(),w(g(m),{href:n.href,class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:s(()=>[c(o.$slots,"default")]),_:3},8,["href"]))}},E={__name:"NavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(n){const o=n,e=x(()=>o.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-light leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-light leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(l,v)=>(i(),w(g(m),{href:n.href,class:u(e.value)},{default:s(()=>[c(l.$slots,"default")]),_:3},8,["href","class"]))}},_={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(n){const o=n,e=x(()=>o.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(l,v)=>(i(),w(g(m),{href:n.href,class:u(e.value)},{default:s(()=>[c(l.$slots,"default")]),_:3},8,["href","class"]))}},j={class:"min-h-screen bg-gray-100"},P={class:"bg-white border-b border-gray-100"},V={class:"container mx-auto px-4 sm:px-6 lg:px-8"},q={class:"flex justify-between h-16"},O={class:"flex items-center"},I={class:"shrink-0 flex items-center"},R={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex uppercase"},U=t("a",{href:"/api-documentation",target:"_blank",class:"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-light leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"}," Api Docs ",-1),F={class:"hidden sm:flex sm:items-center sm:ms-6"},G={key:0},H={class:"ms-3 relative"},J={class:"inline-flex rounded-md"},K={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},Q=t("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),W={class:"-me-2 flex items-center sm:hidden"},X={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Y={class:"pt-2 pb-3 space-y-1"},Z={class:"pt-4 pb-1 border-t border-gray-200"},ee={class:"px-4"},te={class:"text-base text-gray-800"},se={class:"text-sm text-gray-500"},oe={class:"mt-3 space-y-1"},re={key:0,class:"bg-white shadow"},ae={class:"container mx-auto py-6 px-4"},de={__name:"AuthenticatedLayout",setup(n){const o=L(!1);return(e,l)=>(i(),p("div",null,[t("div",j,[t("nav",P,[t("div",V,[t("div",q,[t("div",O,[t("div",I,[r(g(m),{href:e.route("dashboard")},{default:s(()=>[r(B,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),t("div",R,[r(E,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:s(()=>[a(" Dashboard ")]),_:1},8,["href","active"]),U])]),t("div",F,[e.$page.props.isImpersonating?(i(),p("div",G,[r(N,null,{default:s(()=>[r(g(m),{href:e.route("stop-impersonating")},{default:s(()=>[a("Stop Impersonating")]),_:1},8,["href"])]),_:1})])):k("",!0),t("div",H,[r(z,{align:"right",width:"48"},{trigger:s(()=>[t("span",J,[t("button",K,[a(b(e.$page.props.auth.user.name)+" - "+b(e.$page.props.auth.currentTeam.name)+" ",1),Q])])]),content:s(()=>[e.$page.props.auth.user.is_admin?(i(),w(h,{key:0,href:e.route("admin.home")},{default:s(()=>[a(" Admin Section ")]),_:1},8,["href"])):k("",!0),r(h,{href:e.route("profile.edit")},{default:s(()=>[a(" Profile ")]),_:1},8,["href"]),r(h,{href:e.route("my-team")},{default:s(()=>[a(" My Team ")]),_:1},8,["href"]),r(h,{href:e.route("audit-trail")},{default:s(()=>[a(" Audit Trail ")]),_:1},8,["href"]),r(h,{href:e.route("logout"),method:"post",as:"button"},{default:s(()=>[a(" Log Out ")]),_:1},8,["href"])]),_:1})])]),t("div",W,[t("button",{onClick:l[0]||(l[0]=v=>o.value=!o.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(i(),p("svg",X,[t("path",{class:u({hidden:o.value,"inline-flex":!o.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:u({hidden:!o.value,"inline-flex":o.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),t("div",{class:u([{block:o.value,hidden:!o.value},"sm:hidden"])},[t("div",Y,[r(_,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:s(()=>[a(" Dashboard ")]),_:1},8,["href","active"]),r(_,{href:e.route("audit-trail"),active:e.route().current("audit-trail")},{default:s(()=>[a(" Audit Trail ")]),_:1},8,["href","active"])]),t("div",Z,[t("div",ee,[t("div",te,b(e.$page.props.auth.user.name),1),t("div",se,b(e.$page.props.auth.user.email),1)]),t("div",oe,[r(_,{href:e.route("profile.edit")},{default:s(()=>[a(" Profile ")]),_:1},8,["href"]),r(_,{href:e.route("logout"),method:"post",as:"button"},{default:s(()=>[a(" Log Out ")]),_:1},8,["href"])])])],2)]),e.$slots.header?(i(),p("header",re,[t("div",ae,[c(e.$slots,"header")])])):k("",!0),t("main",null,[c(e.$slots,"default")])])]))}};export{de as _};
