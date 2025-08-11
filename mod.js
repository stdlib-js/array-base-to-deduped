// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}function n(n,u,t){return t?function(n,u){var t,e,f,o,a,h,i;if(o=[],0===(f=n.length))return o;for(a=!1,e=NaN,t=0,i=0;i<f;i++)(h=n[i])===e||a&&r(h)?(t+=1)<=u&&o.push(e):(e=h,t=1,o.push(e),a=!1,r(e)&&(a=!0));return o}(n,u):function(r,n){var u,t,e,f,o,a;if(f=[],0===(e=r.length))return f;for(t=NaN,u=0,a=0;a<e;a++)(o=r[a])===t?(u+=1)<=n&&f.push(t):(t=o,u=1,f.push(t));return f}(n,u)}export{n as default};
//# sourceMappingURL=mod.js.map
