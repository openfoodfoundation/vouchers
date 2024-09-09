import{r as v,o as C,s as I,a as i,b as r,d as y,u as x,w as b,F as w,Z as T,e,f,t as a,h as d,p as S,x as B,n as P,j as A}from"./app-CFlY96qh.js";import{_ as N}from"./AuthenticatedLayout-D52oe_Gx.js";import{S as m}from"./sweetalert2.esm.all-Do4KgkwR.js";import{d as _}from"./dayjs.min-DxcSCvAK.js";import{r as j}from"./relativeTime-DsQLhzQG.js";import{u as D}from"./utc-B3HsdkEh.js";import"./ApplicationLogo-CGgKE9h7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PrimaryButton-Z5WSCg3Q.js";const L={class:"card"},q={class:"title text-2xl"},M={class:"uppercase"},z={class:"my-4"},E={key:0,class:"title text-green text-xl text-green-500"},H={key:1,class:"title"},O={key:2,class:"title text-red text-lg text-red-500"},U={class:"text-2xl font-bold mt-12"},Z={key:3,class:"mt-12"},G={key:0},J={class:"my-4"},K={key:0,class:"my-2 text-red-500"},Q={key:0,class:"flex justify-between items-center"},W={class:"w-1/2 pr-2"},X={class:"w-1/2 pl-2"},Y={key:1,class:"grid grid-cols-2 gap-2"},ee={class:""},te={class:""},oe={key:4,class:"mt-8"},se={key:5,class:"mt-12 text-left"},le={class:"title"},ie={class:"flex justify-between items-center py-2 border-b"},re={class:"text-lg"},ae={class:"text-center"},ne={class:"text-xs"},fe={__name:"VoucherRedeem",props:{voucherSetId:{type:String,required:!1},voucherId:{type:String,required:!1}},setup(R){_.extend(j),_.extend(D);const h=R,o=v({}),u=v(!1),n=v(0),c=v(!1);C(()=>{p()});function k(){n.value=(parseInt(o.value.voucher_value_remaining)/100).toFixed(2),u.value=!0}function V(){u.value=!1}function p(){axios.get("/my-team-vouchers/"+h.voucherId+"?cached=false&relations=voucherRedemptions").then(l=>{o.value=l.data.data}).catch(l=>{console.log(l)})}function F(){u.value=!1,m.fire({title:"Redeem all $"+(o.value.voucher_value_remaining/100).toFixed(2)+"?",html:"<p>This will fully redeem this voucher.</p>",icon:"warning",showCancelButton:!0,confirmButtonText:"Redeem!"}).then(l=>{l.value&&g(o.value.voucher_value_remaining.toFixed(0))})}function $(){m.fire({title:"Redeem $"+n.value+"?",html:"<p>This will partially redeem this voucher.</p>",icon:"warning",showCancelButton:!0,confirmButtonText:"Redeem!"}).then(l=>{l.value&&g((n.value*100).toFixed(0))})}function g(l){let t={voucher_id:h.voucherId,voucher_set_id:h.voucherSetId,amount:l};axios.post("/voucher-redemptions",t).then(s=>{m.fire({icon:"success",title:"Redeemed.",text:s.data.meta.message}),u.value=!1,p()}).catch(s=>{m.fire({icon:"error",title:"Oops!",text:s.response.data.message})})}return I(n,l=>{c.value=l>0&&parseInt((l*100).toFixed(0))<=parseInt(o.value.voucher_value_remaining.toFixed(0))}),(l,t)=>(i(),r(w,null,[y(x(T),{title:"Voucher redeem"}),y(N,null,{header:b(()=>t[6]||(t[6]=[e("h2",{class:"font-normal text-xl text-gray-800 leading-tight"},"Voucher Redeem",-1)])),default:b(()=>[e("div",L,[e("div",q,[t[7]||(t[7]=f(" Redeem Voucher ")),e("span",M,a(o.value.voucher_short_code),1)]),e("div",z,[o.value.voucher_value_remaining>0?(i(),r("div",E,"Voucher is Valid")):(i(),r("div",H,"Voucher is Fully Redeemed!")),o.value.is_test?(i(),r("div",O," This is a test voucher. ")):d("",!0),e("div",null,[e("div",U," $"+a((o.value.voucher_value_remaining/100).toFixed(2))+" remaining ",1),e("div",null," of $"+a((o.value.voucher_value_original/100).toFixed(2))+" original value ",1)]),o.value.voucher_value_remaining>0?(i(),r("div",Z,[u.value?(i(),r("div",G,[e("div",J,[t[8]||(t[8]=f(" How much should be redeemed? ")),S(e("input",{inputmode:"decimal",pattern:"[0-9]*",type:"text",step:"0.01","onUpdate:modelValue":t[0]||(t[0]=s=>n.value=s),class:P(["w-full text-center text-xl rounded p-8 border-2 focus:outline-none",{"border-green-500":c.value,"border-red-500":!c.value}]),min:"0.01"},null,2),[[B,n.value,void 0,{number:!0}]]),c.value?d("",!0):(i(),r("div",K," Invalid redemption amount. "))]),c.value?(i(),r("div",Q,[e("div",W,[e("button",{class:"w-full p-8 font-bold text-2xl rounded border bg-gray-300",onClick:t[1]||(t[1]=s=>V())}," Cancel ")]),e("div",X,[e("button",{class:"w-full p-8 font-bold text-2xl rounded border bg-gray-300",onClick:t[2]||(t[2]=s=>$())}," Redeem ")])])):d("",!0)])):(i(),r("div",Y,[e("div",ee,[e("button",{class:"w-full p-8 font-bold text-2xl rounded border bg-gray-300",onClick:t[3]||(t[3]=s=>k())}," Redeem PART ")]),e("div",te,[e("button",{class:"w-full p-8 font-bold text-2xl rounded border bg-gray-300",onClick:t[4]||(t[4]=s=>F())}," Redeem ALL ")])]))])):d("",!0),o.value.voucher_redemptions?d("",!0):(i(),r("div",oe,[e("button",{class:"w-full p-2 rounded border",onClick:t[5]||(t[5]=s=>p())}," See Redemptions ")])),o.value.voucher_redemptions?(i(),r("div",se,[e("div",le," Redemptions ("+a(o.value.voucher_redemptions.length)+") ",1),e("div",null,[(i(!0),r(w,null,A(o.value.voucher_redemptions,s=>(i(),r("div",ie,[e("div",null,[e("div",re," $"+a((s.redeemed_amount/100).toFixed(2)),1)]),e("div",ae,[f(a(x(_).utc(s.created_at).fromNow())+" ",1),e("div",ne," ("+a(x(_)(s.created_at))+") ",1)])]))),256))])])):d("",!0)])])]),_:1})],64))}};export{fe as default};
