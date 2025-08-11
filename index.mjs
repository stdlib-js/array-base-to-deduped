// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";function t(t,n,e){return e?function(t,n){var e,s,u,a,i,f,h;if(a=[],0===(u=t.length))return a;for(i=!1,s=NaN,e=0,h=0;h<u;h++)(f=t[h])===s||i&&r(f)?(e+=1)<=n&&a.push(s):(s=f,e=1,a.push(s),i=!1,r(s)&&(i=!0));return a}(t,n):function(r,t){var n,e,s,u,a,i;if(u=[],0===(s=r.length))return u;for(e=NaN,n=0,i=0;i<s;i++)(a=r[i])===e?(n+=1)<=t&&u.push(e):(e=a,n=1,u.push(e));return u}(t,n)}export{t as default};
//# sourceMappingURL=index.mjs.map
