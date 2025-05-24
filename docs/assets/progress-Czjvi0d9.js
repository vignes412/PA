import{c as u}from"./index-_pxMlPBE.js";import{r as f,j as i,c as _}from"./pwa-components-BjuB_FvI.js";import{e as $,P as m}from"./index-BTAPVsZ3.js";/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],O=u("arrow-left",w);/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],z=u("circle-check-big",I);/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],G=u("trending-up",k);var c="Progress",d=100,[A,U]=$(c),[E,M]=A(c),g=f.forwardRef((e,r)=>{const{__scopeProgress:n,value:o=null,max:a,getValueLabel:N=j,...y}=e;(a||a===0)&&!p(a)&&console.error(C(`${a}`,"Progress"));const t=p(a)?a:d;o!==null&&!v(o,t)&&console.error(L(`${o}`,"Progress"));const s=v(o,t)?o:null,b=l(s)?N(s,t):void 0;return i.jsx(E,{scope:n,value:s,max:t,children:i.jsx(m.div,{"aria-valuemax":t,"aria-valuemin":0,"aria-valuenow":l(s)?s:void 0,"aria-valuetext":b,role:"progressbar","data-state":h(s,t),"data-value":s??void 0,"data-max":t,...y,ref:r})})});g.displayName=c;var x="ProgressIndicator",P=f.forwardRef((e,r)=>{const{__scopeProgress:n,...o}=e,a=M(x,n);return i.jsx(m.div,{"data-state":h(a.value,a.max),"data-value":a.value??void 0,"data-max":a.max,...o,ref:r})});P.displayName=x;function j(e,r){return`${Math.round(e/r*100)}%`}function h(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function l(e){return typeof e=="number"}function p(e){return l(e)&&!isNaN(e)&&e>0}function v(e,r){return l(e)&&!isNaN(e)&&e<=r&&e>=0}function C(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${d}\`.`}function L(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${d} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var R=g,V=P;function X({className:e,value:r,...n}){return i.jsx(R,{"data-slot":"progress",className:_("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",e),...n,children:i.jsx(V,{"data-slot":"progress-indicator",className:"bg-primary h-full w-full flex-1 transition-all",style:{transform:`translateX(-${100-(r||0)}%)`}})})}export{O as A,z as C,X as P,G as T};
//# sourceMappingURL=progress-Czjvi0d9.js.map
