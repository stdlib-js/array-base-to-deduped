"use strict";var l=function(n,e){return function(){try{return e||n((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var p=l(function(g,o){
var f=require('@stdlib/math-base-assert-is-nan/dist');function c(n,e){var r,u,i,a,v,t;if(a=[],i=n.length,i===0)return a;for(u=NaN,r=0,t=0;t<i;t++)v=n[t],v===u?(r+=1,r<=e&&a.push(u)):(u=v,r=1,a.push(u));return a}function d(n,e){var r,u,i,a,v,t,s;if(a=[],i=n.length,i===0)return a;for(v=!1,u=NaN,r=0,s=0;s<i;s++)t=n[s],t===u||v&&f(t)?(r+=1,r<=e&&a.push(u)):(u=t,r=1,a.push(u),v=!1,f(u)&&(v=!0));return a}function h(n,e,r){return r?d(n,e):c(n,e)}o.exports=h
});var N=p();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
