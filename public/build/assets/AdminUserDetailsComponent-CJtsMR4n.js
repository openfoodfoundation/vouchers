import{o as r,c as n,b as s,t,k as c,w as i,e as u,u as m,i as d,a as _,F as l}from"./app-CltQFPkz.js";const p={class:"text-xs"},h={class:""},f={class:"text-sm"},v={__name:"AdminUserDetailsComponent",props:{user:{required:!0,type:Object}},setup(a){const e=a;return(o,x)=>(r(),n(l,null,[s("div",p,"#"+t(e.user.id),1),s("div",h,t(e.user.name),1),e.user.current_team?(r(),c(m(d),{key:0,href:o.route("admin.team",e.user.current_team.id),class:"hover:no-underline hover:opacity-75"},{default:i(()=>[u(t(e.user.current_team.name),1)]),_:1},8,["href"])):_("",!0),s("div",f,t(e.user.email),1)],64))}};export{v as _};
