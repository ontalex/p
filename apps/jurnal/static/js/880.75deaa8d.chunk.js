"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[880],{2613:(e,t,s)=>{s.d(t,{Z:()=>l});s(2791);const n={user__alert:"style_user__alert__Hvfgg",user__error:"style_user__error__50+v3"};var r=s(184);function l(e){let{text:t}=e;return(0,r.jsx)("p",{className:[n.user__alert,n.user__error].join(" "),children:t||"\u0447\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a..."})}},880:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var n=s(2791),r=s(1933),l=s(3211);let a=async(e,t)=>{let s=await fetch("".concat(l.t,"/").concat("min"===t?"min":"","order"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")||""},body:JSON.stringify(e)});return s.ok?s.json():{status:"error"}};var d=s(184);function o(e){let{orderReq:t}=e;return Boolean(t.date_start)?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("caption",{children:["\u041e\u0442\u0447\u0451\u0442 \u0441 ",null===t||void 0===t?void 0:t.date_start," \u043f\u043e ",null===t||void 0===t?void 0:t.date_end]}),(0,d.jsxs)("thead",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{rowSpan:3,children:"\u0418\u0421\u041f-421"}),null===t||void 0===t?void 0:t.lessons.map((e=>(0,d.jsx)("th",{children:new Date(e.lesson_date).toLocaleDateString("ru",{day:"2-digit",month:"2-digit"})}))),(0,d.jsx)("th",{rowSpan:3,children:"\u041e\u043f\u043e\u0437\u0434\u0430\u043d\u0438\u044f"}),(0,d.jsx)("th",{rowSpan:3,children:"\u041d\u0423 (\u043f\u043e \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439)"}),(0,d.jsx)("th",{rowSpan:3,children:"\u041d (\u043f\u043e \u043d\u0435 \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439)"}),(0,d.jsx)("th",{rowSpan:3,children:"\u041d\u0411 (\u043f\u043e \u0431\u043e\u043b\u0435\u0437\u043d\u0438)"}),(0,d.jsx)("th",{rowSpan:3,children:"\u0412\u0441\u0435\u0433\u043e \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0447\u0430\u0441\u043e\u0432"})]}),(0,d.jsx)("tr",{children:null===t||void 0===t?void 0:t.lessons.map((e=>(0,d.jsx)("th",{style:{maxWidth:"200px"},children:e.lesson_name})))}),(0,d.jsx)("tr",{children:null===t||void 0===t?void 0:t.lessons.map((e=>(0,d.jsx)("th",{children:e.lesson_number})))})]}),(0,d.jsx)("tbody",{children:null===t||void 0===t?void 0:t.students.map((e=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:{width:"300px"},children:e.student_fullname}),e.logs.map((e=>(0,d.jsx)("td",{children:e||" "}))),(0,d.jsx)("td",{children:e.total.delays}),(0,d.jsx)("td",{children:e.total.respectfully}),(0,d.jsx)("td",{children:e.total.disrespectful}),(0,d.jsx)("td",{children:e.total.disease}),(0,d.jsx)("td",{children:e.total.respectfully+e.total.disrespectful+e.total.disease})]})))}),(0,d.jsxs)("tfoot",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"\u041a\u0443\u0440\u0430\u0442\u043e\u0440"}),(0,d.jsx)("td",{colSpan:4,children:"\u042f\u043a\u043e\u0432\u0435\u0446 \u0415. \u0415."}),(0,d.jsx)("td",{colSpan:3,children:" "})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"\u0421\u0442\u0430\u0440\u043e\u0441\u0442\u0430"}),(0,d.jsx)("td",{colSpan:4,children:"\u0411\u043e\u0440\u0438\u0441\u043e\u0432 \u0410. \u041e."}),(0,d.jsx)("td",{colSpan:3,children:" "})]})]})]}):(0,d.jsx)(d.Fragment,{children:"FALSE"})}function i(e){let{orderReq:t}=e;return Boolean(t.date_start)?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("caption",{children:["\u041e\u0442\u0447\u0451\u0442 \u0441 ",null===t||void 0===t?void 0:t.date_start," \u043f\u043e ",null===t||void 0===t?void 0:t.date_end]}),(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{rowSpan:1,children:"\u0418\u0421\u041f-421"}),(0,d.jsx)("th",{rowSpan:1,children:"\u041e\u043f\u043e\u0437\u0434\u0430\u043d\u0438\u044f"}),(0,d.jsx)("th",{rowSpan:1,children:"\u041d\u0423 (\u043f\u043e \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439)"}),(0,d.jsx)("th",{rowSpan:1,children:"\u041d (\u043f\u043e \u043d\u0435 \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439)"}),(0,d.jsx)("th",{rowSpan:1,children:"\u041d\u0411 (\u043f\u043e \u0431\u043e\u043b\u0435\u0437\u043d\u0438)"}),(0,d.jsx)("th",{rowSpan:1,children:"\u0412\u0441\u0435\u0433\u043e \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0447\u0430\u0441\u043e\u0432"})]})}),(0,d.jsx)("tbody",{children:null===t||void 0===t?void 0:t.students.map((e=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:{width:"300px"},children:e.student_fullname}),(0,d.jsx)("td",{children:e.total.delays}),(0,d.jsx)("td",{children:e.total.respectfully}),(0,d.jsx)("td",{children:e.total.disrespectful}),(0,d.jsx)("td",{children:e.total.disease}),(0,d.jsx)("td",{children:e.total.respectfully+e.total.disrespectful+e.total.disease})]})))}),(0,d.jsxs)("tfoot",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"\u041a\u0443\u0440\u0430\u0442\u043e\u0440"}),(0,d.jsx)("td",{colSpan:3,children:"\u042f\u043a\u043e\u0432\u0435\u0446 \u0415. \u0415."}),(0,d.jsx)("td",{colSpan:2,children:" "})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"\u0421\u0442\u0430\u0440\u043e\u0441\u0442\u0430"}),(0,d.jsx)("td",{colSpan:3,children:"\u0411\u043e\u0440\u0438\u0441\u043e\u0432 \u0410. \u041e."}),(0,d.jsx)("td",{colSpan:2,children:" "})]})]})]}):(0,d.jsx)(d.Fragment,{children:"FALSE"})}var c=s(5251),x=s(2613);function h(){let e=(0,n.useRef)(null),[t,s]=(0,n.useState)((new Date).toISOString().split("T")[0]),[l,h]=(0,n.useState)((new Date).toISOString().split("T")[0]),[j,p]=(0,n.useState)("max"),[u,m]=(0,n.useState)({}),_=(0,r.useMutation)({mutationFn:e=>a(e,j),onSuccess:e=>{m(e)}}),S=(0,n.useCallback)((e=>{e.preventDefault(),_.mutate({start_date:new Date(t).toISOString().split("T")[0],end_date:new Date(l).toISOString().split("T")[0]})}),[t,l,j]);return(0,d.jsxs)("div",{className:"export",children:[(0,d.jsxs)("form",{onSubmit:S,children:[(0,d.jsxs)("label",{className:"export__box",children:[(0,d.jsx)("span",{children:"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0430\u0442\u0430"}),(0,d.jsx)("input",{className:"export__input",onSubmit:e=>e.preventDefault(),type:"date",name:"date_start",id:"date_start",defaultValue:(new Date).toISOString().split("T")[0],onChange:e=>s(e.target.value)})]}),(0,d.jsxs)("label",{className:"export__box",children:[(0,d.jsx)("span",{children:"\u041a\u043e\u043d\u0435\u0447\u043d\u0430\u044f \u0434\u0430\u0442\u0430"}),(0,d.jsx)("input",{className:"export__input",onSubmit:e=>e.preventDefault(),type:"date",name:"date_end",id:"date_end",defaultValue:(new Date).toISOString().split("T")[0],onChange:e=>h(e.target.value)})]}),(0,d.jsxs)("label",{className:"export__minbox",htmlFor:"typeOrderId",children:[(0,d.jsx)("p",{children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0447\u0451\u0442"}),(0,d.jsx)("input",{className:"export__check",onChange:e=>{m({}),p(e.target.checked?"min":"max")},type:"checkbox",name:"typeOrder",id:"typeOrderId"}),(0,d.jsx)("div",{className:"export__checkbox"})]}),(0,d.jsx)("button",{className:"export_getReq",children:(0,d.jsx)("span",{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"})})]}),_.isLoading&&(0,d.jsx)(c.Z,{}),_.isError&&(0,d.jsx)(x.Z,{}),Boolean(u.students)?(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(n.Suspense,{fallback:(0,d.jsx)(c.Z,{}),children:[(0,d.jsx)("button",{className:"export_getReq",onClick:()=>(e=>{let t=document.createElement("a");t.download="report_".concat(_.data.date_start,"_").concat(_.data.date_end,".xls");let s=new Blob(['<htmlxmlns:o="urn:schemas-microsoft-com:office:office"xmlns:x="urn:schemas-microsoft-com:office:excel"xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8" />\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>2023-10-02 - 2023-10-08</x:Name><x:WorksheetOptions><x:DisplayGridlines /></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body><table border="2">'.concat(e,"</table></body></html>")],{type:"application/vnd.ms-excel"});t.href=URL.createObjectURL(s),t.click(),URL.revokeObjectURL(t.href)})(e.current.innerHTML),children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c XLS"}),(0,d.jsx)("div",{className:"export_container",children:(0,d.jsx)("table",{cellSpacing:0,ref:e,children:"min"===j?(0,d.jsx)(i,{orderReq:u}):(0,d.jsx)(o,{orderReq:u})})})]})}):(0,d.jsx)("p",{children:"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0432\u0430\u0448\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0430..."})]})}}}]);
//# sourceMappingURL=880.75deaa8d.chunk.js.map