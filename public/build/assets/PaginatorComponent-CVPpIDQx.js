import{_ as m}from"./SecondaryButton-BpSOmNoX.js";import{_ as u}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{K as d,b as s,c as r,d as e,a as l,w as p,t as n,f as g}from"./app-vZoJq0kq.js";const f={components:{SecondaryButton:m},props:{paginationData:{type:Object,required:!0},showSummary:{type:Boolean,required:!1,default:!0}},mounted(){},created(){},methods:{paginatePrevious(){this.paginationData.current_page>1&&(this.component?this.$emit("setDataPageForComponent",{page:this.paginationData.current_page-1,component:this.component}):this.$emit("setDataPage",this.paginationData.current_page-1))},paginateNext(){this.paginationData.total>this.paginationData.to&&(this.component?this.$emit("setDataPageForComponent",{page:this.paginationData.current_page+1,component:this.component}):this.$emit("setDataPage",this.paginationData.current_page+1))}}},h={key:0},w={class:"grid grid-cols-2 gap-2 text-center"},_={key:0,class:"w-full text-center text-sm"};function D(x,t,a,v,k,o){const i=d("SecondaryButton");return a.paginationData.total>a.paginationData.per_page?(s(),r("div",h,[e("div",w,[e("div",null,[l(i,{class:"px-8 w-full flex justify-center",onClick:t[0]||(t[0]=c=>o.paginatePrevious())},{default:p(()=>t[2]||(t[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5 8.25 12l7.5-7.5"})],-1)])),_:1})]),e("div",null,[l(i,{class:"px-8 w-full flex justify-center",onClick:t[1]||(t[1]=c=>o.paginateNext())},{default:p(()=>t[3]||(t[3]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})],-1)])),_:1})])]),a.showSummary?(s(),r("div",_," Showing "+n(a.paginationData.from)+" - "+n(a.paginationData.to)+" of "+n(a.paginationData.total),1)):g("",!0)])):g("",!0)}const P=u(f,[["render",D]]);export{P};
