import{_ as c}from"./AuthenticatedLayout-D52oe_Gx.js";import{r as s,o as i,a as l,b as d,d as a,u,w as o,F as p,Z as _,e as f}from"./app-CFlY96qh.js";import{_ as h}from"./AdminTopNavigation-D044hfaf.js";import"./ApplicationLogo-CGgKE9h7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PrimaryButton-Z5WSCg3Q.js";import"./sweetalert2.esm.all-Do4KgkwR.js";const N={__name:"Vouchers",setup(g){const r=s(20),n=s({});i(()=>{m()});function m(t=1){axios.get("/admin/teams?cached=false&page="+t+"&limit="+r.value+"&orderBy=id,desc").then(e=>{n.value=e.data.data}).catch(e=>{console.log(e)})}return(t,e)=>(l(),d(p,null,[a(u(_),{title:"Vouchers"}),a(c,null,{header:o(()=>[a(h)]),default:o(()=>[e[0]||(e[0]=f("div",{class:"card"},null,-1))]),_:1})],64))}};export{N as default};
