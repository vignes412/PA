import{c as $}from"./index-DoxOVinb.js";import{r as v,j as i,c as y}from"./pwa-components-DFRzXAPN.js";import{c as I,P as m}from"./DashboardLayout-c4N3lsWj.js";/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],D=$("circle-check-big",_);var u="Progress",c=100,[E,O]=I(u),[j,C]=E(u),f=v.forwardRef((r,e)=>{const{__scopeProgress:n,value:o=null,max:a,getValueLabel:h=M,...N}=r;(a||a===0)&&!d(a)&&console.error(R(`${a}`,"Progress"));const t=d(a)?a:c;o!==null&&!p(o,t)&&console.error(w(`${o}`,"Progress"));const s=p(o,t)?o:null,b=l(s)?h(s,t):void 0;return i.jsx(j,{scope:n,value:s,max:t,children:i.jsx(m.div,{"aria-valuemax":t,"aria-valuemin":0,"aria-valuenow":l(s)?s:void 0,"aria-valuetext":b,role:"progressbar","data-state":P(s,t),"data-value":s??void 0,"data-max":t,...N,ref:e})})});f.displayName=u;var g="ProgressIndicator",x=v.forwardRef((r,e)=>{const{__scopeProgress:n,...o}=r,a=C(g,n);return i.jsx(m.div,{"data-state":P(a.value,a.max),"data-value":a.value??void 0,"data-max":a.max,...o,ref:e})});x.displayName=g;function M(r,e){return`${Math.round(r/e*100)}%`}function P(r,e){return r==null?"indeterminate":r===e?"complete":"loading"}function l(r){return typeof r=="number"}function d(r){return l(r)&&!isNaN(r)&&r>0}function p(r,e){return l(r)&&!isNaN(r)&&r<=e&&r>=0}function R(r,e){return`Invalid prop \`max\` of value \`${r}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${c}\`.`}function w(r,e){return`Invalid prop \`value\` of value \`${r}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${c} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var A=f,L=x;function T({className:r,value:e,...n}){return i.jsx(A,{"data-slot":"progress",className:y("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",r),...n,children:i.jsx(L,{"data-slot":"progress-indicator",className:"bg-primary h-full w-full flex-1 transition-all",style:{transform:`translateX(-${100-(e||0)}%)`}})})}export{D as C,T as P};
//# sourceMappingURL=progress-CwerKmR9.js.map
