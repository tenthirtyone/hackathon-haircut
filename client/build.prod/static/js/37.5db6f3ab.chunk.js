(this["webpackJsonpcarpatin-dashboard"]=this["webpackJsonpcarpatin-dashboard"]||[]).push([[37],{1693:function(e,t,r){"use strict";r.r(t),r.d(t,"InvoiceCreate",(function(){return E}));var a=r(28),n=r(23),i=r.n(n),l=r(33),o=r(1),s=r(22),c=r(108),u=r(110),d=r(48),h=r(631),b=r.n(h),j=r(52),m=r(240),x=r(611),p=r(241),v=r(107),O=r(613),f=r(614),g=r(598),C=r(584),B=r(964),y=r(609),q=r(816),D=r(813),I=r(814),T=r(652),w=r(57),S=r(159),k=r(628),W=r(649),N=r(0),E=function(){var e=Object(u.a)({enableReinitialize:!0,initialValues:{customerEmail:"",customerName:"",dueDate:null,id:"#DEV5438",issueDate:null,isTaxable:!1,items:[{description:"",price:"",quantity:1}],note:"",subject:"",submit:null},validationSchema:d.f().shape({customerEmail:d.g().email().max(255).required("Customer email is required"),customerName:d.g().max(255).required("Customer name is required"),dueDate:d.c().required("Due date is required"),issueDate:d.c().required("Issued date is required"),isTaxable:d.b().required("Taxable is required"),items:d.a().of(d.f().shape({description:d.g().max(255).required("Service description is required"),quantity:d.e().min(1).required("Quantity is required"),price:d.e().required("Price is required")})),note:d.g().max(1024),subject:d.g().max(255).required("Subject is required")}),onSubmit:function(){var e=Object(l.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{j.b.success("Invoice created"),r.setStatus({success:!0}),r.setSubmitting(!1)}catch(t){console.error(t),r.setStatus({success:!1}),r.setErrors({submit:t.message}),r.setSubmitting(!1)}case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}),t=e.values.items.reduce((function(e,t){return e+Number.parseFloat(t.price)*t.quantity}),0),r=function(t,r){var a,n,i,l,o,s;return(null===e||void 0===e||null===(a=e.touched)||void 0===a?void 0:a.items)&&(null===e||void 0===e||null===(n=e.errors)||void 0===n?void 0:n.items)&&(null===e||void 0===e||null===(i=e.touched)||void 0===i||null===(l=i.items[t])||void 0===l?void 0:l[r])&&(null===e||void 0===e||null===(o=e.errors)||void 0===o||null===(s=o.items[t])||void 0===s?void 0:s[r])};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(c.a,{children:Object(N.jsx)("title",{children:"Invoice: Create | Carpatin Dashboard"})}),Object(N.jsx)(m.a,{sx:{backgroundColor:"background.default",flexGrow:1},children:Object(N.jsxs)(x.a,{maxWidth:"lg",children:[Object(N.jsxs)(m.a,{sx:{py:4},children:[Object(N.jsx)(m.a,{sx:{mb:2},children:Object(N.jsx)(p.a,{color:"primary",component:s.b,startIcon:Object(N.jsx)(S.a,{}),to:"/dashboard/invoices",variant:"text",children:"Invoices"})}),Object(N.jsx)(v.a,{color:"textPrimary",variant:"h4",children:"Create Invoice"})]}),Object(N.jsx)(O.a,{variant:"outlined",children:Object(N.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(N.jsx)(f.a,{children:Object(N.jsxs)(g.a,{container:!0,spacing:2,children:[Object(N.jsx)(g.a,{item:!0,md:6,xs:12,children:Object(N.jsx)(w.a,{error:Boolean(e.touched.subject&&e.errors.subject),fullWidth:!0,helperText:e.touched.subject&&e.errors.subject,label:"Subject",name:"subject",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.subject})}),Object(N.jsx)(g.a,{item:!0,md:6,xs:12,children:Object(N.jsx)(w.a,{disabled:!0,error:Boolean(e.touched.id&&e.errors.id),fullWidth:!0,helperText:e.touched.id&&e.errors.id,label:"Invoice #",name:"id",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.id})}),Object(N.jsx)(g.a,{item:!0,md:6,xs:12,children:Object(N.jsx)(w.a,{error:Boolean(e.touched.customerName&&e.errors.customerName),fullWidth:!0,helperText:e.touched.customerName&&e.errors.customerName,label:"Customer Name",name:"customerName",onBlur:e.handleBlur,onChange:e.handleChange,placeholder:"Dinesh Chugtai",value:e.values.customerName})}),Object(N.jsx)(g.a,{item:!0,md:6,xs:12,children:Object(N.jsx)(w.a,{error:Boolean(e.touched.customerEmail&&e.errors.customerEmail),fullWidth:!0,helperText:e.touched.customerEmail&&e.errors.customerEmail,label:"Customer Email",name:"customerEmail",onBlur:e.handleBlur,onChange:e.handleChange,type:"email",placeholder:"dinesh@pipedpiper.com",value:e.values.customerEmail})}),Object(N.jsx)(g.a,{item:!0,md:6,xs:12,children:Object(N.jsx)(T.a,{error:Boolean(e.touched.issueDate&&e.errors.issueDate),fullWidth:!0,helperText:e.touched.issueDate&&e.errors.issueDate,label:"Issued Date",name:"issueDate",onChange:function(t){return e.setFieldValue("issueDate",t)},value:e.values.issueDate})}),Object(N.jsx)(g.a,{item:!0,md:6,xs:12,children:Object(N.jsx)(T.a,{error:Boolean(e.touched.dueDate&&e.errors.dueDate),fullWidth:!0,helperText:e.touched.dueDate&&e.errors.dueDate,label:"Due Date",name:"dueDate",onChange:function(t){return e.setFieldValue("dueDate",t)},value:e.values.dueDate})}),Object(N.jsx)(g.a,{item:!0,xs:12,children:Object(N.jsx)(C.a,{})}),e.values.items.map((function(t,a){var n=Number.parseFloat(t.price)*t.quantity;return Object(N.jsxs)(o.Fragment,{children:[Object(N.jsx)(g.a,{item:!0,md:6,xs:12,children:Object(N.jsx)(w.a,{error:Boolean(r(a,"description")),fullWidth:!0,helperText:r(a,"description"),label:"Item",name:"items[".concat(a,"].description"),onBlur:e.handleBlur,onChange:e.handleChange,placeholder:"Service description",value:t.description})}),Object(N.jsxs)(g.a,{item:!0,md:6,xs:12,sx:{display:"flex"},children:[Object(N.jsxs)(g.a,{container:!0,spacing:2,children:[Object(N.jsx)(g.a,{item:!0,xs:4,children:Object(N.jsx)(w.a,{error:Boolean(r(a,"quantity")),fullWidth:!0,helperText:r(a,"quantity"),label:"Qty",name:"items[".concat(a,"].quantity"),onBlur:e.handleBlur,onChange:e.handleChange,value:t.quantity})}),Object(N.jsx)(g.a,{item:!0,xs:4,children:Object(N.jsx)(w.a,{error:Boolean(r(a,"price")),fullWidth:!0,helperText:r(a,"price"),label:"Price",name:"items[".concat(a,"].price"),onBlur:e.handleBlur,onChange:e.handleChange,value:t.price,InputProps:{startAdornment:Object(N.jsx)(B.a,{position:"start",children:"$"})}})}),Object(N.jsx)(g.a,{item:!0,xs:4,children:Object(N.jsx)(w.a,{disabled:!0,fullWidth:!0,label:"Total",onBlur:e.handleBlur,onChange:e.handleChange,value:Number.isNaN(n)?"":n,InputProps:{startAdornment:Object(N.jsx)(B.a,{position:"start",children:"$"})}})})]}),Object(N.jsx)(m.a,{sx:{ml:2,mt:3},children:Object(N.jsx)(y.a,{color:"primary",onClick:function(){return t=a,void(e.values.items.length>1&&e.setFieldValue("items",e.values.items.filter((function(e,r){return r!==t}))));var t},type:"button",children:Object(N.jsx)(W.a,{})})})]})]},a)})),Object(N.jsxs)(g.a,{item:!0,xs:12,sx:{alignItems:"center",display:"flex"},children:[Object(N.jsx)(p.a,{color:"primary",onClick:function(){e.setFieldValue("items",[].concat(Object(a.a)(e.values.items),[{description:"",price:"",quantity:1}]))},startIcon:Object(N.jsx)(k.a,{fontSize:"small"}),variant:"text",children:"Add Item"}),Object(N.jsx)(m.a,{sx:{flexGrow:1}}),Object(N.jsx)(v.a,{color:"textSecondary",sx:{mr:1},variant:"subtitle2",children:"Total"}),Object(N.jsx)(v.a,{color:"textPrimary",variant:"h6",children:b()(t).format("$0,0.00")})]}),Object(N.jsx)(g.a,{item:!0,xs:12,children:Object(N.jsx)(q.a,{control:Object(N.jsx)(D.a,{checked:e.values.isTaxable,onChange:function(t){return e.setFieldValue("isTaxable",t.target.checked)}}),label:"Taxable (VAT 19%)"})}),Object(N.jsx)(g.a,{item:!0,xs:12,children:Object(N.jsx)(C.a,{})}),Object(N.jsx)(g.a,{item:!0,xs:12,children:Object(N.jsx)(w.a,{error:Boolean(e.touched.note&&e.errors.note),fullWidth:!0,helperText:e.touched.note&&e.errors.note,label:"Additional Notes",multiline:!0,name:"note",onBlur:e.handleBlur,onChange:e.handleChange,placeholder:"Client notes",rows:4,value:e.values.note})})]})}),Object(N.jsx)(I.a,{sx:{justifyContent:"flex-end"},children:Object(N.jsx)(p.a,{color:"primary",type:"submit",variant:"contained",children:"Create Invoice"})})]})})]})})]})}},628:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(27),n=r(0),i=Object(a.a)(Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus")},649:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(27),n=r(0),i=Object(a.a)(Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})}),"Trash")},652:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(15),n=r(36),i=r(539),l=r(106),o=r(1705),s=r(0),c=["error","fullWidth","helperText","label","onChange","placeholder","value","name"],u=["InputProps"],d=function(e){var t=e.error,r=e.fullWidth,d=e.helperText,h=e.label,b=e.onChange,j=e.placeholder,m=e.value,x=e.name,p=Object(n.a)(e,c);return Object(s.jsx)(o.a,Object(a.a)({onChange:b,renderInput:function(e){var o=e.InputProps,c=Object(n.a)(e,u);return Object(s.jsx)(i.a,Object(a.a)(Object(a.a)({},c),{},{name:x,error:t,fullWidth:r,helperText:d,label:h,placeholder:j,sx:{"& .MuiFilledInput-root":{backgroundColor:"background.paper",borderWidth:1,borderStyle:"solid",borderColor:"neutral.300",borderRadius:1,boxShadow:"0px 1px 2px 0px rgba(9, 30, 66, 0.08)",px:1.5,py:.75,transition:function(e){return e.transitions.create(["border-color","box-shadow"])},"&:hover":{backgroundColor:"background.paper"},"&.Mui-focused":{backgroundColor:"background.paper",boxShadow:function(e){return"".concat(Object(l.a)(e.palette.primary.main,.25)," 0 0 0 0.2rem")}},"& .MuiFilledInput-input":{fontSize:14,height:"unset",lineHeight:1.6,p:0},"&.Mui-disabled":{backgroundColor:"action.disabledBackground",boxShadow:"none",borderColor:Object(l.a)("#D6DBE1",.5)}}},variant:"filled",InputProps:Object(a.a)({disableUnderline:!0},o),InputLabelProps:{shrink:!0,sx:{color:"text.primary",fontSize:14,fontWeight:500,mb:.5,position:"relative",transform:"none"}}}))},value:m},p))}}}]);
//# sourceMappingURL=37.5db6f3ab.chunk.js.map