"use strict";(globalThis.webpackChunk_edx_frontend_app_learning=globalThis.webpackChunk_edx_frontend_app_learning||[]).push([[974],{47974:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f}),t(89526);var r=t(2652),i=t.n(r),o=t(2389),a=t(93477),s=t(54877),c=t(95765),u=t(36284),l=t(67557);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof n?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const g=e=>{let{payload:n}=e;const{description:t,endDate:r,userTimezone:i}=n,d=i?{timeZone:i}:{};let p;const g=new Date(r)-new Date,f=(0,l.jsx)(o.Z,m({value:g/1e3,numeric:"auto",updateIntervalInSeconds:31536e3},d),"timeRemaining");if(g<864e5){const e=(0,l.jsx)(a.qN,m({day:"numeric",month:"short",year:"numeric",timeZoneName:"short",value:r},d),"courseEndTime");p=(0,l.jsx)(s.Z,{id:"learning.outline.alert.end.short",defaultMessage:"This course is ending {timeRemaining} at {courseEndTime}.",description:"Used when the time remaining is less than a day away.",values:{courseEndTime:e,timeRemaining:f}})}else{const e=(0,l.jsx)(a.Ji,m({day:"numeric",month:"short",year:"numeric",value:r},d),"courseEndDate");p=(0,l.jsx)(s.Z,{id:"learning.outline.alert.end.long",defaultMessage:"This course is ending {timeRemaining} on {courseEndDate}.",description:"Used when the time remaining is more than a day away.",values:{courseEndDate:e,timeRemaining:f}})}return(0,l.jsxs)(c.Z,{variant:"info",icon:u.Z,children:[(0,l.jsx)("strong",{children:p}),(0,l.jsx)("br",{}),t]})};g.propTypes={payload:i().shape({description:i().string,endDate:i().string,userTimezone:i().string}).isRequired};const f=g}}]);
//# sourceMappingURL=974.c089d0e86572c9809d61.js.map