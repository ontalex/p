"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[353],{893:(e,s,l)=>{l.d(s,{r:()=>_});var t,a=l(2791);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},n.apply(this,arguments)}function r(e,s){let{title:l,titleId:r,..._}=e;return a.createElement("svg",n({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":r},_),l?a.createElement("title",{id:r},l):null,t||(t=a.createElement("path",{d:"M6 12.7962L6 3.20377L11.4814 8L6 12.7962ZM6.6585 13.5488L12.1399 8.75258C12.5952 8.35417 12.5952 7.64584 12.1399 7.24743L6.6585 2.45119C6.01192 1.88543 5 2.34461 5 3.20377L5 12.7962C5 13.6554 6.01192 14.1146 6.6585 13.5488Z",fill:"black"})))}const _=a.forwardRef(r);l.p},2613:(e,s,l)=>{l.d(s,{Z:()=>n});l(2791);const t={user__alert:"style_user__alert__Hvfgg",user__error:"style_user__error__50+v3"};var a=l(184);function n(e){let{text:s}=e;return(0,a.jsx)("p",{className:[t.user__alert,t.user__error].join(" "),children:s||"\u0447\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a..."})}},5353:(e,s,l)=>{l.r(s),l.d(s,{default:()=>Z});var t=l(2791),a=l(7689),n=l(1087),r=l(1933),_=l(5251),c=l(2613),o=l(3211);const d="style_content__7bN7R",i="style_wrapper__K0uwp",h="style_link_back__S5fr-",u="style_data_lesson__0HgMH",j="style_caret__uwstg",x="style_link_span__4hvWd",y="style_table__2qy5D",m="style_table_head__MkQmO",p="style_table_body__k6J9K",v="style_table_body_tr__jz7MB",b="style_log_none__5uoMy",g="style_log_has__hzTz6",f="style_log_await__amRTg";var N=l(893);const k="style_box__psZld",w="style_box_name__vOZkx",C="style_box_value__Cuzyr";var O=l(184);const L=e=>{let{name:s,value:l}=e;return(0,O.jsxs)("div",{className:k,children:[(0,O.jsx)("div",{className:w,children:s}),(0,O.jsx)("span",{className:C,children:l})]})},Z=()=>{let e=(0,a.UO)().short_token||null;const{data:s,status:l}=(0,r.useQuery)("logsShare",(async()=>(await fetch("".concat(o.t,"/share/logbook"),{method:"GET",headers:{"Content-Type":"application/json",token:e}})).json()));let k=(0,t.useCallback)((e=>e.type_log.includes("\u041f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442")?g:e.type_log.includes("\u041e\u043f\u043e\u0437\u0434\u0430\u043d\u0438\u0435")?f:b),[]);return e?"loading"===l?(0,O.jsx)(_.Z,{}):"error"===l||"Error!"===s.message||"Error"===s.type?(0,O.jsx)(c.Z,{}):(0,O.jsx)("div",{className:d,children:(0,O.jsxs)("div",{className:i,children:[(0,O.jsxs)(n.OL,{to:"/",className:h,children:[(0,O.jsx)(N.r,{className:j}),(0,O.jsx)("span",{className:x,children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]}),(0,O.jsxs)("div",{className:u,children:[(0,O.jsx)(L,{value:s.date_lesson,name:"\u0414\u0430\u0442\u0430"}),(0,O.jsx)(L,{value:s.name_lesson,name:"\u041f\u0440\u0435\u0434\u043c\u0435\u0442"}),(0,O.jsx)(L,{value:s.number_lesson,name:"\u041d\u043e\u043c\u0435\u0440 \u043f\u0430\u0440\u044b"})]}),(0,O.jsxs)("table",{className:y,cellSpacing:0,children:[(0,O.jsx)("thead",{className:m,children:(0,O.jsxs)("tr",{children:[(0,O.jsx)("th",{children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"}),(0,O.jsx)("th",{children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),(0,O.jsx)("th",{children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"})]})}),(0,O.jsx)("tbody",{className:p,children:null===s||void 0===s?void 0:s.logs.map((e=>(0,O.jsxs)("tr",{className:v,children:[(0,O.jsx)("td",{children:e.full_name}),(0,O.jsx)("td",{className:k(e),children:e.type_log}),(0,O.jsx)("td",{children:Boolean(null!=e.date_start)&&Boolean(null!=e.date_end)?"\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0443\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u043b\u0430\u043d":""})]})))})]})]})}):(0,O.jsx)("div",{children:(0,O.jsx)("h1",{children:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442\u0443 \u043a\u043b\u044e\u0447\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"})})}}}]);
//# sourceMappingURL=353.561d1465.chunk.js.map