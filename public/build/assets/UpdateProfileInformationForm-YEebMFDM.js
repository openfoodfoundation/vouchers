import{Q as y,T as g,a as l,b as n,e as s,d as a,u as e,f as m,w as u,p as h,B as x,h as f,C as V,m as k,i as b}from"./app-CLWo_2_0.js";import{_ as p}from"./InputError-BBp322Ue.js";import{_ as v}from"./InputLabel-Bbc6sIKf.js";import{P as w}from"./PrimaryButton-DzdjS49d.js";import{_}from"./TextInput-BoZkehg1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),s("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1),S={key:0},N={class:"text-sm mt-2 text-gray-800"},C={class:"mt-2 font-medium text-sm text-green-600"},E={class:"flex items-center gap-4"},P={key:0,class:"text-sm text-gray-600"},D={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(d){const r=y().props.auth.user,t=g({name:r.name,email:r.email});return(c,o)=>(l(),n("section",null,[B,s("form",{onSubmit:o[2]||(o[2]=k(i=>e(t).patch(c.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[s("div",null,[a(v,{for:"name",value:"Name"}),a(_,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(t).name=i),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(p,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),s("div",null,[a(v,{for:"email",value:"Email"}),a(_,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":o[1]||(o[1]=i=>e(t).email=i),required:"",autocomplete:"username"},null,8,["modelValue"]),a(p,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),d.mustVerifyEmail&&e(r).email_verified_at===null?(l(),n("div",S,[s("p",N,[m(" Your email address is unverified. "),a(e(b),{href:c.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:u(()=>[m(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),h(s("div",C," A new verification link has been sent to your email address. ",512),[[x,d.status==="verification-link-sent"]])])):f("",!0),s("div",E,[a(w,{disabled:e(t).processing},{default:u(()=>[m("Save")]),_:1},8,["disabled"]),a(V,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:u(()=>[e(t).recentlySuccessful?(l(),n("p",P,"Saved.")):f("",!0)]),_:1})])],32)]))}};export{D as default};
