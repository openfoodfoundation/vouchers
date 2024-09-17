import{_ as p}from"./AuthenticatedLayout-DLt9L55p.js";import{r as y,o as x,a,b as i,d as u,u as l,w as n,F as b,Z as g,e as d,t as o,h as m,f as s,i as v}from"./app-CsvKUCVF.js";import{_ as V}from"./AdminTopNavigation-D_3iC7ay.js";import{d as _}from"./dayjs.min-B1s2FNJD.js";import{r as k}from"./relativeTime-B4aTyaiK.js";import{u as R}from"./utc-CuhrPUJG.js";import"./ApplicationLogo-Cox3Zk07.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PrimaryButton-CrY-NrTG.js";const B={class:"grid grid-cols-2 gap-8 container mx-auto mt-8"},N={class:"card"},$={class:"opacity-25"},T={key:0,class:"font-bold text-red-500 text-sm"},w={class:"card"},D={key:0},C={key:1},F={class:"card"},j={class:"grid grid-cols-4 gap-y-12 text-center mt-8"},q={class:"font-bold text-3xl"},E={key:0},I={class:"font-bold text-3xl"},M={class:"font-bold text-3xl"},S={class:"text-xs"},U={class:"card"},Z={key:0},z={key:1},W={__name:"VoucherRedemption",props:{id:{required:!0}},setup(h){_.extend(k),_.extend(R);const c=h,t=y({});x(()=>{f()});function f(){axios.get("/admin/voucher-redemptions/"+c.id+"?cached=false&relations=redeemedByUser,redeemedByTeam,voucher").then(r=>{t.value=r.data.data}).catch(r=>{console.log(r)})}return(r,e)=>(a(),i(b,null,[u(l(g),{title:"Voucher redemption"}),u(p,null,{header:n(()=>[u(V)]),default:n(()=>[d("div",B,[d("div",N,[e[0]||(e[0]=d("div",{class:"card-header"}," Voucher Redemption Details ",-1)),d("h2",$," ID: "+o(c.id),1),t.value.is_test?(a(),i("div",T," Test voucher redemption ")):m("",!0)]),d("div",w,[e[3]||(e[3]=d("div",{class:"card-header"}," Voucher and voucher set ",-1)),t.value.voucher_id?(a(),i("div",D,[e[1]||(e[1]=s(" Voucher ")),u(l(v),{href:r.route("admin.voucher",t.value.voucher_id)},{default:n(()=>[s("#"+o(t.value.voucher_id),1)]),_:1},8,["href"])])):m("",!0),t.value.voucher_set_id?(a(),i("div",C,[e[2]||(e[2]=s(" Voucher set ")),u(l(v),{href:r.route("admin.voucher-set",t.value.voucher_set_id)},{default:n(()=>[s("#"+o(t.value.voucher_set_id),1)]),_:1},8,["href"])])):m("",!0)])]),d("div",F,[e[7]||(e[7]=d("div",{class:"card-header"}," Voucher redemption details ",-1)),d("div",j,[d("div",null,[d("div",q," $"+o(t.value.redeemed_amount/100),1),e[4]||(e[4]=s(" Redeemed value "))]),t.value.voucher?(a(),i("div",E,[d("div",I," $"+o(t.value.voucher.voucher_value_remaining/100),1),e[5]||(e[5]=s(" Voucher remaining value "))])):m("",!0),d("div",null,[e[6]||(e[6]=d("div",null," Redeemed at ",-1)),d("div",M,o(l(_).utc(t.value.created_at).fromNow()),1),d("div",S," ("+o(l(_)(t.value.created_at))+") ",1)])])]),d("div",U,[e[8]||(e[8]=d("div",{class:"card-header"}," Redeemed by ",-1)),t.value.redeemed_by_user?(a(),i("div",Z,[u(l(v),{href:r.route("admin.user",t.value.redeemed_by_user_id)},{default:n(()=>[s(o(t.value.redeemed_by_user.name),1)]),_:1},8,["href"])])):m("",!0),t.value.redeemed_by_team?(a(),i("div",z,[u(l(v),{href:r.route("admin.team",t.value.redeemed_by_team_id)},{default:n(()=>[s(o(t.value.redeemed_by_team.name),1)]),_:1},8,["href"])])):m("",!0)]),e[9]||(e[9]=d("div",{class:"pb-32"},null,-1))]),_:1})],64))}};export{W as default};
