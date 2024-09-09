import{Q as g,T as x,a as l,b as n,e as a,d as o,u as t,f as m,w as u,p as V,B as _,h as c,C as k,m as b,i as h}from"./app-CFlY96qh.js";import{_ as p}from"./InputError-CtaVr7j8.js";import{_ as v}from"./InputLabel-DMH_e1pT.js";import{P as w}from"./PrimaryButton-Z5WSCg3Q.js";import{_ as y}from"./TextInput-3hkd_5bN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={key:0},S={class:"text-sm mt-2 text-gray-800"},N={class:"mt-2 font-medium text-sm text-green-600"},C={class:"flex items-center gap-4"},E={key:0,class:"text-sm text-gray-600"},A={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(d){const r=g().props.auth.user,s=x({name:r.name,email:r.email});return(f,e)=>(l(),n("section",null,[e[6]||(e[6]=a("header",null,[a("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),a("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1)),a("form",{onSubmit:e[2]||(e[2]=b(i=>t(s).patch(f.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[a("div",null,[o(v,{for:"name",value:"Name"}),o(y,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:t(s).name,"onUpdate:modelValue":e[0]||(e[0]=i=>t(s).name=i),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(p,{class:"mt-2",message:t(s).errors.name},null,8,["message"])]),a("div",null,[o(v,{for:"email",value:"Email"}),o(y,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(s).email,"onUpdate:modelValue":e[1]||(e[1]=i=>t(s).email=i),required:"",autocomplete:"username"},null,8,["modelValue"]),o(p,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),d.mustVerifyEmail&&t(r).email_verified_at===null?(l(),n("div",B,[a("p",S,[e[4]||(e[4]=m(" Your email address is unverified. ")),o(t(h),{href:f.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:u(()=>e[3]||(e[3]=[m(" Click here to re-send the verification email. ")])),_:1},8,["href"])]),V(a("div",N," A new verification link has been sent to your email address. ",512),[[_,d.status==="verification-link-sent"]])])):c("",!0),a("div",C,[o(w,{disabled:t(s).processing},{default:u(()=>e[5]||(e[5]=[m("Save")])),_:1},8,["disabled"]),o(k,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:u(()=>[t(s).recentlySuccessful?(l(),n("p",E,"Saved.")):c("",!0)]),_:1})])],32)]))}};export{A as default};
