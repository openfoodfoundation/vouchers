import{o as _,c as x,z as g,s as $,j as C,A as B,y as D,k as E,d as t,w as l,l as f,B as p,b as e,C as y,n as b,a as V,D as U,r as h,T as A,E as S,e as w,u as i,g as T}from"./app-CltQFPkz.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./InputError-BvuiNLgG.js";import{_ as M,a as O}from"./InputLabel-DBzdtO78.js";import{_ as P}from"./SecondaryButton-D6O32Iz2.js";const W={},j={class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"};function F(a,n){return _(),x("button",j,[g(a.$slots,"default")])}const v=N(W,[["render",F]]),I={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},K=e("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),L=[K],q={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(a,{emit:n}){const o=a,s=n;$(()=>o.show,()=>{o.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const d=()=>{o.closeable&&s("close")},r=u=>{u.key==="Escape"&&o.show&&d()};C(()=>document.addEventListener("keydown",r)),B(()=>{document.removeEventListener("keydown",r),document.body.style.overflow=null});const c=D(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[o.maxWidth]);return(u,m)=>(_(),E(U,{to:"body"},[t(y,{"leave-active-class":"duration-200"},{default:l(()=>[f(e("div",I,[t(y,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[f(e("div",{class:"fixed inset-0 transform transition-all",onClick:d},L,512),[[p,a.show]])]),_:1}),t(y,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:l(()=>[f(e("div",{class:b(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",c.value])},[a.show?g(u.$slots,"default",{key:0}):V("",!0)],2),[[p,a.show]])]),_:3})],512),[[p,a.show]])]),_:3})]))}},G={class:"space-y-6"},H=e("header",null,[e("h2",{class:"text-lg font-medium text-gray-900"},"Delete Account"),e("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1),J={class:"p-6"},Q=e("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete your account? ",-1),R=e("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),X={class:"mt-6"},Y={class:"mt-6 flex justify-end"},ae={__name:"DeleteUserForm",setup(a){const n=h(!1),o=h(null),s=A({password:""}),d=()=>{n.value=!0,S(()=>o.value.focus())},r=()=>{s.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>o.value.focus(),onFinish:()=>s.reset()})},c=()=>{n.value=!1,s.reset()};return(u,m)=>(_(),x("section",G,[H,t(v,{onClick:d},{default:l(()=>[w("Delete Account")]),_:1}),t(q,{show:n.value,onClose:c},{default:l(()=>[e("div",J,[Q,R,e("div",X,[t(M,{for:"password",value:"Password",class:"sr-only"}),t(O,{id:"password",ref_key:"passwordInput",ref:o,modelValue:i(s).password,"onUpdate:modelValue":m[0]||(m[0]=k=>i(s).password=k),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:T(r,["enter"])},null,8,["modelValue"]),t(z,{message:i(s).errors.password,class:"mt-2"},null,8,["message"])]),e("div",Y,[t(P,{onClick:c},{default:l(()=>[w(" Cancel ")]),_:1}),t(v,{class:b(["ms-3",{"opacity-25":i(s).processing}]),disabled:i(s).processing,onClick:r},{default:l(()=>[w(" Delete Account ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{ae as default};
