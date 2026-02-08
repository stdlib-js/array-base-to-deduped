"use strict";var l=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var p=l(function(g,o){
var f=require('@stdlib/math-base-assert-is-nan/dist');function c(n,e){var u,r,i,a,v,t;if(a=[],i=n.length,i===0)return a;for(r=NaN,u=0,t=0;t<i;t++)v=n[t],v===r?(u+=1,u<=e&&a.push(r)):(r=v,u=1,a.push(r));return a}function d(n,e){var u,r,i,a,v,t,s;if(a=[],i=n.length,i===0)return a;for(v=!1,r=NaN,u=0,s=0;s<i;s++)t=n[s],t===r||v&&f(t)?(u+=1,u<=e&&a.push(r)):(r=t,u=1,a.push(r),v=!1,f(r)&&(v=!0));return a}function h(n,e,u){return u?d(n,e):c(n,e)}o.exports=h
});var N=p();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
