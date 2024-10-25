"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[987],{893:(e,t,n)=>{n.d(t,{r:()=>r});var s,a=n(2791);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},l.apply(this,arguments)}function i(e,t){let{title:n,titleId:i,...r}=e;return a.createElement("svg",l({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},r),n?a.createElement("title",{id:i},n):null,s||(s=a.createElement("path",{d:"M6 12.7962L6 3.20377L11.4814 8L6 12.7962ZM6.6585 13.5488L12.1399 8.75258C12.5952 8.35417 12.5952 7.64584 12.1399 7.24743L6.6585 2.45119C6.01192 1.88543 5 2.34461 5 3.20377L5 12.7962C5 13.6554 6.01192 14.1146 6.6585 13.5488Z",fill:"black"})))}const r=a.forwardRef(i);n.p},2613:(e,t,n)=>{n.d(t,{Z:()=>l});n(2791);const s={user__alert:"style_user__alert__Hvfgg",user__error:"style_user__error__50+v3"};var a=n(184);function l(){return(0,a.jsx)("p",{className:[s.user__alert,s.user__error].join(" "),children:"\u0447\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a..."})}},6459:(e,t,n)=>{n.d(t,{Z:()=>o});const s={date_box:"style_date_box__ki9g3",date_info:"style_date_info__FNfsQ",box:"style_box__JjG-z",input:"style_input__pRAGr",box__info:"style_box__info__gQvkY",icon:"style_icon__ZvAC-",info:"style_info__xBfct",btns_date:"style_btns_date__w2b1a",btn_date:"style_btn_date__0vsUj",icon_btn:"style_icon_btn__v3w7Y",icon_btn_left:"style_icon_btn_left__Xn-2S"};var a=n(5470),l=n(893),i=n(2791),r=n(184);function o(e){let{changeDate:t,date:n}=e,o=(0,i.useRef)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:s.date_box,children:[(0,r.jsx)("button",{className:s.btn_date,onClick:e=>{let s=new Date(n),a=s.getDate();s.setDate(a-1),console.log(s),console.log(o.current),o.current.value=s.toISOString().split("T")[0],t(s.toISOString().split("T")[0])},children:(0,r.jsx)(l.r,{className:[s.icon_btn,s.icon_btn_left].join(" ")})}),(0,r.jsxs)("label",{htmlFor:"date",className:s.box,children:[(0,r.jsxs)("div",{className:s.date_info,children:[(0,r.jsx)(a.r,{className:s.icon}),(0,r.jsx)("p",{className:s.info,children:new Intl.DateTimeFormat("ru",{day:"numeric",month:"long",year:"numeric"}).format(new Date(n))})]}),(0,r.jsx)("p",{className:s.info,children:new Intl.DateTimeFormat("ru",{weekday:"long"}).format(new Date(n))}),(0,r.jsx)("input",{type:"date",name:"date",id:"date",defaultValue:new Date(n).toISOString().split("T")[0],onChange:e=>{e.preventDefault(),t(e.target.value)},ref:o,className:s.input,min:"2023-09-01"})]}),(0,r.jsx)("button",{className:s.btn_date,onClick:e=>{let s=new Date(n),a=s.getDate();s.setDate(a+1),console.log(s),console.log(o.current),o.current.value=s.toISOString().split("T")[0],t(s.toISOString().split("T")[0])},children:(0,r.jsx)(l.r,{className:[s.icon_btn,s.icon_btn_right].join(" ")})})]})})}},1987:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var s=n(2791),a=n(1933),l=n(3211);let i=async()=>{let e=await fetch("".concat(l.t,"/individual/all"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")||""}});return e.ok?e.json():{status:"error"}};var r=n(5251),o=n(2613),_=n(763);const c={item:"style_item__bFqnV",item__box:"style_item__box__M0hV4",item__fullname:"style_item__fullname__kKwv-",item__diapason:"style_item__diapason__G-NSj",item__time:"style_item__time__SEW-0",btns_box:"style_btns_box__jz9iU",btn:"style_btn__fSjMH"};var d=n(9857),u=n(6459),m=n(184);function x(){var e,t;const n=a.useMutation({mutationFn:async()=>await i()}),[l,_]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{n.mutate()}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("button",{onClick:()=>n.mutate(),className:c.btn,children:(0,m.jsx)("span",{children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"})}),(0,m.jsxs)(d.Z,{open:l,onClose:()=>{_((e=>!e))},children:[(0,m.jsx)("h1",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),(0,m.jsx)(u.Z,{}),(0,m.jsx)(b,{})]}),n.isLoading&&(0,m.jsx)(r.Z,{}),n.isError&&(0,m.jsx)(o.Z,{}),Boolean((null===(e=n.data)||void 0===e?void 0:e.length)>0)?(0,m.jsx)("div",{children:null===(t=n.data)||void 0===t?void 0:t.map((e=>(0,m.jsxs)("div",{className:c.item,children:[(0,m.jsxs)("div",{className:c.item__box,children:[(0,m.jsx)("p",{className:c.item__fullname,children:e.fullname}),(0,m.jsxs)("div",{className:c.item__diapason,children:[(0,m.jsx)("p",{className:c.item__time,children:new Date(e.date_start).toLocaleDateString("ru")}),(0,m.jsx)("span",{children:"-"}),(0,m.jsx)("p",{className:c.item__time,children:new Date(e.date_end).toLocaleDateString("ru")})]})]}),(0,m.jsxs)("div",{className:c.btns_box,children:[(0,m.jsx)("button",{className:c.btn,children:(0,m.jsx)("span",{children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})}),(0,m.jsx)("button",{className:c.btn,children:(0,m.jsx)("span",{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})]})))}):(0,m.jsx)("p",{children:"\u041d\u0435\u0442\u0443 \u0434\u0430\u043d\u043d\u044b\u0445"})]})}const b=e=>{let{toSet:t,toGet:n}=e;const[a,l]=s.useState(""),i=s.useCallback((0,_.debounce)((e=>{console.log("Search for:",e)}),500),[]);return(0,m.jsxs)("div",{className:c.input,children:[(0,m.jsx)("input",{type:"text",className:c.input__box,value:a,id:"input_student",name:"input_student",list:"input_student_list",onChange:e=>{const t=e.target.value;l(t),i(t)}}),(0,m.jsx)("datalist",{id:"input_student_list",children:a.length>0?(0,m.jsx)(m.Fragment,{}):null}),(0,m.jsx)("div",{className:c.status})]})}}}]);
//# sourceMappingURL=987.4a5c09a1.chunk.js.map