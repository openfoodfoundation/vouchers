import{E as D,G as v}from"./app-B_Y3AxQI.js";var M={exports:{}};(function(s,h){(function(t,e){s.exports=e()})(D,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(e,Y,i){var a=Y.prototype,c=a.format;i.en.formats=t,a.format=function(r){r===void 0&&(r="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,l=function(f,m){return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(A,p,o){var u=o&&o.toUpperCase();return p||m[o]||t[o]||m[u].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(F,L,d){return L||d.slice(1)})})}(r,n===void 0?{}:n);return c.call(this,l)}}})})(M);var x=M.exports;const g=v(x);export{g as l};
