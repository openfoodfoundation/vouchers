import{J as n,h as l,w as t,b as d,a as r,u as a,m as p,d as e,e as f,n as u,j as c}from"./app-BeoXE9Ay.js";import{_}from"./GuestLayout-C1q2rHz3.js";import{_ as w}from"./InputError-CfVYaD1V.js";import{_ as b}from"./InputLabel-pyGc1ZHf.js";import{P as x}from"./PrimaryButton-C4Jij1yK.js";import{_ as g}from"./TextInput-DoCCI7Ek.js";import"./ApplicationLogo-BQ2BXfcK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={class:"flex justify-end mt-4"},T={__name:"ConfirmPassword",setup(C){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(P,o)=>(d(),l(_,null,{default:t(()=>[r(a(p),{title:"Confirm Password"}),o[2]||(o[2]=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1)),e("form",{onSubmit:c(i,["prevent"])},[e("div",null,[r(b,{for:"password",value:"Password"}),r(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":o[0]||(o[0]=m=>a(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),r(w,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",y,[r(x,{class:u(["ms-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>o[1]||(o[1]=[f(" Confirm ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{T as default};
