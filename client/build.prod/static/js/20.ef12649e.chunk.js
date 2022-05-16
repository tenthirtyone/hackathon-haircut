(this["webpackJsonpcarpatin-dashboard"]=this["webpackJsonpcarpatin-dashboard"]||[]).push([[20],{1713:function(e,t,a){"use strict";a.r(t),a.d(t,"Invoice",(function(){return de}));var c=a(23),n=a.n(c),i=a(33),r=a(14),s=a(1),l=a(22),o=a(108),j=a(240),b=a(615),d=a(107),x=a(241),u=a(598),O=a(611),h=a(700),y=a(348),m=a(613),f=a(651),v=a(584),p=a(644),g=a(641),w=a(0),C=function(e){var t=e.invoice;return Object(w.jsxs)(m.a,{variant:"outlined",children:[Object(w.jsx)(f.a,{title:"Invoice Details"}),Object(w.jsx)(v.a,{}),Object(w.jsxs)(u.a,{container:!0,children:[Object(w.jsx)(u.a,{item:!0,md:6,xs:12,children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(g.a,{label:"Customer Name",value:t.customerName}),Object(w.jsx)(g.a,{label:"Invoice Number",value:"#".concat(t.id)}),Object(w.jsx)(g.a,{label:"Invoice Date",value:Object(y.a)(t.issueDate,"dd MMM yyyy")})]})}),Object(w.jsx)(u.a,{item:!0,md:6,xs:12,children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(g.a,{label:"Due Date",value:Object(y.a)(t.dueDate,"dd MMM yyyy")}),Object(w.jsx)(g.a,{label:"Notes",value:"\u201c".concat(t.note,"\u201d")})]})})]})]})},S=a(755),D=function(e){var t=e.invoice;return Object(w.jsxs)(m.a,{variant:"outlined",children:[Object(w.jsx)(f.a,{title:"Line Items"}),Object(w.jsx)(v.a,{}),Object(w.jsx)(S.a,{invoice:t})]})},T=a(631),V=a.n(T),A=function(e){var t=e.invoice;return Object(w.jsxs)(m.a,{variant:"outlined",children:[Object(w.jsx)(f.a,{title:"Payment"}),Object(w.jsx)(v.a,{}),Object(w.jsxs)(u.a,{container:!0,children:[Object(w.jsx)(u.a,{item:!0,md:6,xs:12,children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(g.a,{label:"Date of Payment",value:Object(y.a)(t.paymentAt,"dd MMM yyyy")}),Object(w.jsx)(g.a,{label:"Payment Method",value:t.paymentMethod}),Object(w.jsx)(g.a,{label:"Transaction ID",value:t.transactionId})]})}),Object(w.jsx)(u.a,{item:!0,md:6,xs:12,children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(g.a,{label:"Amount",value:V()(t.totalAmount).format("".concat(t.currencySymbol,"0,0.00"))}),Object(w.jsx)(g.a,{label:"Transaction Fees",value:V()(t.transactionFees).format("".concat(t.currencySymbol,"0,0.00"))}),Object(w.jsx)(g.a,{label:"Status",value:t.paymentStatus})]})})]})]})},I=a(16),M=a(1737),k=a(614),P=a(965),N=a(963),B=a(966),z=a(821),E=a(967),L=[{id:"1",type:"chargeComplete",chargeId:"th_2JCleBj4vHz",createdAt:Object(I.a)(new Date,15)},{id:"2",actualStatus:"Complete",oldStatus:"Pending",type:"orderStatus",createdAt:Object(I.a)(new Date,53)}],H=function(e){return"chargeComplete"===e.type?Object(w.jsxs)(w.Fragment,{children:["Stripe charge complete",Object(w.jsx)("br",{}),"Charge ID:"," ",e.chargeId]}):Object(w.jsxs)(w.Fragment,{children:["Order status changed from"," ",Object(w.jsx)("strong",{children:e.oldStatus})," ","payment to"," ",Object(w.jsx)("strong",{children:e.actualStatus}),"."]})},R=function(){return Object(w.jsxs)(m.a,{variant:"outlined",children:[Object(w.jsx)(f.a,{title:"Payment History"}),Object(w.jsx)(v.a,{}),Object(w.jsx)(k.a,{children:Object(w.jsx)(P.a,{sx:{my:0,p:0},children:L.map((function(e,t){return Object(w.jsxs)(s.Fragment,{children:[Object(w.jsxs)(N.a,{sx:{alignItems:"center",minHeight:"auto","&::before":{display:"none"}},children:[Object(w.jsx)(B.a,{sx:{alignSelf:"center",boxShadow:"none",flexShrink:0,m:0},variant:"outlined"}),Object(w.jsxs)(z.a,{sx:{pr:0},children:[Object(w.jsx)(d.a,{color:"textSecondary",sx:{mr:1},variant:"body2",children:H(e)}),Object(w.jsxs)(d.a,{component:"p",color:"textSecondary",sx:{whiteSpace:"nowrap"},variant:"caption",children:[Object(M.a)(e.createdAt)," ","ago"]})]})]}),L.length>t+1&&Object(w.jsx)(E.a,{sx:{backgroundColor:"neutral.200",height:22,ml:"5px",my:1}})]},e.id)}))})})]})},F=a(15),W=a(30),$=a(52),q=a(719),G=a(544),U=a(134),J=a(250),_=a(260),Q=a(670),K=a(667),X=a(27),Y=Object(X.a)(Object(w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(w.jsx)("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),Object(w.jsx)("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Mail"),Z=a(649),ee=a(668),te=a(669),ae=a(136),ce=a(57),ne=a(790),ie=[{label:"Invoice created",value:"invoiceCreated"},{label:"Payment received",value:"paymentConfirmation"}],re=function(e){var t=e.invoice,a=Object(W.h)(),c=Object(U.a)(),n=Object(r.a)(c,3),i=n[0],l=n[1],o=n[2],j=Object(U.a)(),b=Object(r.a)(j,3),d=b[0],u=b[1],O=b[2],h=Object(U.a)(),y=Object(r.a)(h,3),p=y[0],g=y[1],C=y[2],S=Object(s.useState)(ie[0].value),D=Object(r.a)(S,2),T=D[0],V=D[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(m.a,Object(F.a)(Object(F.a)({variant:"outlined"},e),{},{children:[Object(w.jsx)(f.a,{title:"Send Notification"}),Object(w.jsx)(v.a,{}),Object(w.jsxs)(k.a,{children:[Object(w.jsx)(ce.a,{fullWidth:!0,onChange:function(e){V(e.target.value)},select:!0,value:T,children:ie.map((function(e){return Object(w.jsx)(G.a,{value:e.value,children:e.label},e.value)}))}),Object(w.jsx)(x.a,{color:"primary",onClick:function(){V(T),$.b.success("Notification sent")},startIcon:Object(w.jsx)(Y,{}),sx:{mt:2},variant:"outlined",children:"Send Email"})]}),Object(w.jsx)(v.a,{}),Object(w.jsxs)(ee.a,{children:[Object(w.jsx)(te.a,{icon:K.a,label:"Preview",onClick:function(){return a("/dashboard/invoices/1/preview")}}),Object(w.jsx)(te.a,{icon:J.a,label:"Mark Paid",onClick:l}),Object(w.jsx)(te.a,{icon:Q.a,label:"Duplicate",onClick:u}),Object(w.jsx)(q.PDFDownloadLink,{document:Object(w.jsx)(ne.a,{invoice:t}),fileName:"invoice",style:{color:"inherit",textDecoration:"none"},children:Object(w.jsx)(te.a,{icon:_.a,label:"Download (PDF)"})}),Object(w.jsx)(te.a,{icon:Z.a,label:"Delete",onClick:g})]})]})),Object(w.jsx)(ae.a,{message:"Are you sure you want to mark this invoice as paid? This can't be undone.",onCancel:o,onConfirm:function(){o(),$.b.error("This action is not available on demo")},open:i,title:"Mark Invoice as paid",variant:"info"}),Object(w.jsx)(ae.a,{message:"Are you sure you want to duplicate this invoice? This can't be undone.",onCancel:O,onConfirm:function(){O(),$.b.error("This action is not available on demo")},open:d,title:"Duplicate Invoice",variant:"warning"}),Object(w.jsx)(ae.a,{message:"Are you sure you want to delete this invoice? This can't be undone.",onCancel:C,onConfirm:function(){C(),$.b.error("This action is not available on demo")},open:p,title:"Delete Invoice",variant:"error"})]})},se=a(246),le=a(58),oe=a(159),je=a(158),be=a(81),de=function(){var e=Object(le.a)(),t=Object(s.useState)({isLoading:!0}),a=Object(r.a)(t,2),c=a[0],y=a[1],m=Object(s.useCallback)(Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y((function(){return{isLoading:!0}})),t.prev=1,t.next=4,h.a.getInvoice();case 4:a=t.sent,e.current&&y((function(){return{isLoading:!1,data:a}})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0),e.current&&y((function(){return{isLoading:!1,error:t.t0.message}}));case 12:case"end":return t.stop()}}),t,null,[[1,8]])}))),[]);Object(s.useEffect)((function(){m().catch(console.error)}),[]),Object(s.useEffect)((function(){be.a.push({event:"page_view"})}),[]);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(o.a,{children:Object(w.jsx)("title",{children:"Invoice: Summary | Carpatin Dashboard"})}),Object(w.jsx)(j.a,{sx:{backgroundColor:"background.default",flexGrow:1},children:Object(w.jsx)(O.a,{maxWidth:"lg",sx:{display:"flex",flexDirection:"column",height:"100%"},children:c.isLoading?Object(w.jsxs)(j.a,{sx:{py:4},children:[Object(w.jsx)(b.a,{height:42}),Object(w.jsx)(b.a,{}),Object(w.jsx)(b.a,{})]}):c.error?Object(w.jsx)(j.a,{sx:{py:4},children:Object(w.jsxs)(j.a,{sx:{alignItems:"center",backgroundColor:"background.default",display:"flex",flexDirection:"column",p:3},children:[Object(w.jsx)(je.a,{}),Object(w.jsx)(d.a,{color:"textSecondary",sx:{mt:2},variant:"body2",children:c.error})]})}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(j.a,{sx:{py:4},children:[Object(w.jsx)(j.a,{sx:{mb:2},children:Object(w.jsx)(x.a,{color:"primary",component:l.b,startIcon:Object(w.jsx)(oe.a,{}),to:"/dashboard/invoices",variant:"text",children:"Invoices"})}),Object(w.jsxs)(j.a,{sx:{alignItems:"center",display:"flex"},children:[Object(w.jsxs)(d.a,{color:"textPrimary",variant:"h4",children:["#",c.data.id]}),Object(w.jsx)(j.a,{sx:{flexGrow:1}}),Object(w.jsx)(x.a,{color:"primary",component:l.b,size:"large",startIcon:Object(w.jsx)(K.a,{}),to:"/dashboard/invoices/1/preview",variant:"contained",children:"Preview"})]}),Object(w.jsx)(j.a,{sx:{mt:2},children:Object(w.jsx)(se.a,{color:"error.main",label:"Unpaid"})})]}),Object(w.jsxs)(u.a,{container:!0,spacing:3,children:[Object(w.jsxs)(u.a,{container:!0,item:!0,lg:8,spacing:3,sx:{height:"fit-content",order:{md:2,xs:1}},xs:12,children:[Object(w.jsx)(u.a,{item:!0,xs:12,children:Object(w.jsx)(C,{invoice:c.data})}),Object(w.jsx)(u.a,{item:!0,xs:12,children:Object(w.jsx)(A,{invoice:c.data})}),Object(w.jsx)(u.a,{item:!0,xs:12,children:Object(w.jsx)(D,{invoice:c.data})})]}),Object(w.jsxs)(u.a,{container:!0,item:!0,lg:4,spacing:3,sx:{height:"fit-content",order:{md:2,xs:1}},xs:12,children:[Object(w.jsx)(u.a,{item:!0,xs:12,children:Object(w.jsx)(re,{invoice:c.data})}),Object(w.jsx)(u.a,{item:!0,xs:12,children:Object(w.jsx)(R,{})})]})]})]})})})]})}},641:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var c=a(15),n=a(36),i=a(604),r=a(583),s=a(107),l=a(240),o=a(0),j=["align","children","component","value","label"],b=function(e){var t=e.align,a=e.children,b=e.component,d=e.value,x=e.label,u=Object(n.a)(e,j);return Object(o.jsx)(i.a,Object(c.a)(Object(c.a)({component:b,disableGutters:!0,sx:{px:3,py:1.5}},u),{},{children:Object(o.jsx)(r.a,{disableTypography:!0,primary:Object(o.jsx)(s.a,{color:"textPrimary",sx:{minWidth:"vertical"===t?"inherit":180},variant:"subtitle2",children:x}),secondary:Object(o.jsx)(l.a,{sx:{flex:1,mt:"vertical"===t?.5:0},children:a||Object(o.jsx)(s.a,{color:"textSecondary",variant:"body2",children:d})}),sx:{alignItems:"flex-start",display:"flex",flexDirection:"vertical"===t?"column":"row",my:0}})}))};b.defaultProps={align:"vertical"}},644:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a(603),n=a(0),i=function(e){var t=e.children;return Object(n.jsx)(c.a,{disablePadding:!0,children:t})}},649:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a(27),n=a(0),i=Object(c.a)(Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})}),"Trash")},667:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a(27),n=a(0),i=Object(c.a)(Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(n.jsx)("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),Object(n.jsx)("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})]}),"Eye")},668:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(15),n=a(603),i=a(0),r=function(e){return Object(i.jsx)(n.a,Object(c.a)({dense:!0,sx:{backgroundColor:"neutral.100",width:"100%"}},e))}},669:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var c=a(15),n=a(36),i=a(589),r=a(582),s=a(583),l=a(0),o=["icon","label"],j=function(e){var t=e.icon,a=e.label,j=Object(n.a)(e,o);return Object(l.jsxs)(i.a,Object(c.a)(Object(c.a)({},j),{},{children:[Object(l.jsx)(r.a,{children:Object(l.jsx)(t,{fontSize:"small",sx:{color:"text.secondary"}})}),Object(l.jsx)(s.a,{primary:a})]}))}},670:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var c=a(27),n=a(0),i=Object(c.a)(Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(n.jsx)("path",{d:"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"}),Object(n.jsx)("path",{d:"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"})]}),"Duplicate")},700:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var c=a(23),n=a.n(c),i=a(33),r=a(31),s=a(32),l=a(17),o=a(16),j=a(41),b=a(160),d=a(161),x=a(135),u=a(59),O=new Date,h=[{currencySymbol:"$",dueDate:Object(l.a)(O,2),id:"DEV5437",issueDate:Object(l.a)(O,9),paymentMethod:"Credit Card",status:"ongoing",totalAmount:192.5},{currencySymbol:"$",dueDate:Object(l.a)(O,1),id:"DEV5436",issueDate:Object(l.a)(O,12),paymentMethod:"Credit Card",status:"ongoing",totalAmount:192},{currencySymbol:"$",dueDate:Object(l.a)(O,14),id:"DEV54375",issueDate:Object(l.a)(O,4),paymentMethod:"PayPal",status:"ongoing",totalAmount:60},{currencySymbol:"$",dueDate:Object(l.a)(O,22),id:"DEV5434",issueDate:Object(l.a)(O,12),paymentMethod:"Credit Card",status:"draft",totalAmount:631},{currencySymbol:"$",dueDate:Object(l.a)(O,32),id:"DEV5433",issueDate:Object(l.a)(O,19),paymentMethod:"PayPal",status:"paid",totalAmount:1200},{currencySymbol:"$",dueDate:Object(l.a)(O,12),id:"DEV5432",issueDate:Object(l.a)(O,5),paymentMethod:"PayPal",status:"overdue",totalAmount:631}],y={createdAt:Object(l.a)(O,10),currencySymbol:"$",customerName:"Natalie Rusell",dueDate:Object(l.a)(Object(o.a)(O,29),2),id:"DEV5437",issueDate:Object(l.a)(Object(o.a)(O,45),9),note:"\u201cPlease confirm once paid.\u201d",paymentAt:Object(l.a)(Object(o.a)(O,11),5),paymentMethod:"Credit Card",paymentStatus:"Failed",status:"ongoing",subtotalAmount:160,taxAmount:32.5,totalAmount:192.5,transactionFees:0,transactionId:"tran_54febasdaoiuhqja1837hj",lineItems:[{currency:"USD",currencySymbol:"$",discountAmount:0,image:"/static/product-01.png",name:"Watch with Leather Strap",quantity:1,sku:"BBAK01-A",subtotalAmount:160,taxAmount:32.5,totalAmount:192.5,unitAmount:160,isTaxable:!0}]},m=new(function(){function e(){Object(r.a)(this,e)}return Object(s.a)(e,[{key:"getInvoices",value:function(){var e=Object(i.a)(n.a.mark((function e(t){var a,c,i,r,s,l,o,O,y,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j.b){e.next=3;break}return e.next=3,Object(u.a)(j.b);case 3:return a=t.filters,c=t.sort,i=t.sortBy,r=t.page,s=t.query,l=t.view,o=h.filter((function(e){var t;return!(s&&!(null===(t=e.id)||void 0===t?void 0:t.toLowerCase().includes(s.toLowerCase())))&&("undefined"===typeof l||"all"===l||e.status===l)})),O=Object(b.a)(o,a),y=Object(x.a)(O,c,i),m=Object(d.a)(y,r),e.abrupt("return",Promise.resolve({invoices:m,invoicesCount:O.length}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getInvoice",value:function(){var e=Object(i.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j.b){e.next=3;break}return e.next=3,Object(u.a)(j.b);case 3:return e.abrupt("return",Promise.resolve(y));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}())},755:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var c=a(631),n=a.n(c),i=a(694),r=a(717),s=a(695),l=a(696),o=a(716),j=a(240),b=a(107),d=a(244),x=a(0),u=function(e){var t=e.invoice;return Object(x.jsx)("div",{children:Object(x.jsx)(d.a,{children:Object(x.jsxs)(i.a,{sx:{minWidth:500},children:[Object(x.jsx)(r.a,{children:Object(x.jsxs)(s.a,{children:[Object(x.jsx)(l.a,{children:"Item"}),Object(x.jsx)(l.a,{children:"Qty"}),Object(x.jsx)(l.a,{children:"Total"}),Object(x.jsx)(l.a,{children:"Tax"})]})}),Object(x.jsxs)(o.a,{children:[t.lineItems.map((function(e){return Object(x.jsxs)(s.a,{children:[Object(x.jsx)(l.a,{children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(b.a,{color:"inherit",variant:"body2",children:e.name}),Object(x.jsx)(b.a,{color:"textSecondary",variant:"body2",children:"".concat(e.currency,"  ").concat(n()(e.unitAmount).format("".concat(e.currencySymbol,"0,0.00")))})]})}),Object(x.jsx)(l.a,{children:e.quantity}),Object(x.jsx)(l.a,{children:n()(e.subtotalAmount).format("".concat(e.currencySymbol,"0,0.00"))}),Object(x.jsx)(l.a,{sx:{width:150},children:n()(e.taxAmount).format("".concat(e.currencySymbol,"0,0.00"))})]},e.name)})),Object(x.jsxs)(s.a,{children:[Object(x.jsx)(l.a,{}),Object(x.jsx)(l.a,{}),Object(x.jsx)(l.a,{}),Object(x.jsx)(l.a,{children:Object(x.jsxs)(j.a,{sx:{alignItems:"center",display:"flex"},children:[Object(x.jsx)(b.a,{color:"textSecondary",sx:{mr:1},variant:"subtitle2",children:"Tax"}),Object(x.jsx)(b.a,{color:"textPrimary",variant:"subtitle2",children:n()(t.taxAmount).format("".concat(t.currencySymbol,"0,0.00"))})]})})]}),Object(x.jsxs)(s.a,{children:[Object(x.jsx)(l.a,{}),Object(x.jsx)(l.a,{}),Object(x.jsx)(l.a,{}),Object(x.jsx)(l.a,{children:Object(x.jsxs)(j.a,{sx:{alignItems:"center",display:"flex"},children:[Object(x.jsx)(b.a,{color:"textSecondary",sx:{mr:1},variant:"subtitle2",children:"Total"}),Object(x.jsx)(b.a,{color:"textPrimary",variant:"h6",children:n()(t.totalAmount).format("".concat(t.currencySymbol,"0,0.00"))})]})})]})]})]})})})}},790:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a(348),n=a(631),i=a.n(n),r=a(719),s=a(0),l=r.StyleSheet.create({page:{backgroundColor:"#ffffff",padding:24},h4:{fontSize:24,fontWeight:600,lineHeight:1.5},subtitle2:{fontSize:12,fontWeight:500,letterSpacing:0,lineHeight:1.57},body2:{fontSize:10,lineHeight:1.47},h6:{fontSize:12,fontWeight:600,lineHeight:1.6},gutterBottom:{marginBottom:4},header:{flexDirection:"row",justifyContent:"space-between"},status:{textTransform:"uppercase",color:"rgba(236, 76, 71, 1)"},details:{flexDirection:"row",justifyContent:"space-between",marginTop:12},dates:{flexDirection:"row",justifyContent:"space-between",marginBottom:36,marginTop:48},notes:{marginTop:32},table:{display:"flex",width:"auto",border:"1px solid #e1e3ea",borderRadius:6},tableHeader:{backgroundColor:"rgba(243, 244, 247, 1)"},tableBody:{},tableRow:{borderBottomWidth:1,borderColor:"#EEEEEE",borderStyle:"solid",flexDirection:"row"},tableCell1:{padding:6,width:"".concat(60,"%"),justifyContent:"center"},tableCellN:{padding:6,width:"".concat(13.333333333333334,"%"),justifyContent:"center"}}),o=function(e){var t=e.invoice;return Object(s.jsx)(r.Document,{children:Object(s.jsxs)(r.Page,{size:"A4",style:l.page,children:[Object(s.jsxs)(r.View,{style:l.header,children:[Object(s.jsx)(r.View,{children:Object(s.jsxs)(r.Text,{style:l.h4,children:["#",t.id]})}),Object(s.jsx)(r.View,{children:Object(s.jsx)(r.Text,{style:[l.h4,l.status],children:t.status})})]}),Object(s.jsxs)(r.View,{style:l.details,children:[Object(s.jsxs)(r.View,{children:[Object(s.jsx)(r.Text,{style:[l.subtitle2,l.gutterBottom],children:"Invoice to"}),Object(s.jsx)(r.Text,{style:l.body2,children:"Acme LTD GB54423345"}),Object(s.jsx)(r.Text,{style:l.body2,children:"340 Lemon St. #5554"}),Object(s.jsx)(r.Text,{style:l.body2,children:"Spring Valley, California"}),Object(s.jsx)(r.Text,{style:l.body2,children:"United States"})]}),Object(s.jsxs)(r.View,{children:[Object(s.jsx)(r.Text,{style:[l.subtitle2,l.gutterBottom],children:"Invoice for"}),Object(s.jsx)(r.Text,{style:l.body2,children:"Natalie Rusell"}),Object(s.jsx)(r.Text,{style:l.body2,children:"3845 Salty Street"}),Object(s.jsx)(r.Text,{style:l.body2,children:"Salt Lake City"}),Object(s.jsx)(r.Text,{style:l.body2,children:"United States"})]})]}),Object(s.jsxs)(r.View,{style:l.dates,children:[Object(s.jsxs)(r.View,{children:[Object(s.jsx)(r.Text,{style:[l.subtitle2,l.gutterBottom],children:"Invoice Date"}),Object(s.jsx)(r.Text,{style:l.body2,children:Object(c.a)(t.dueDate,"dd MMM yyyy")})]}),Object(s.jsxs)(r.View,{children:[Object(s.jsx)(r.Text,{style:[l.subtitle2,l.gutterBottom],children:"Due Date"}),Object(s.jsx)(r.Text,{style:l.body2,children:Object(c.a)(t.issueDate,"dd MMM yyyy")})]})]}),Object(s.jsx)(r.View,{children:Object(s.jsxs)(r.View,{style:l.table,children:[Object(s.jsx)(r.View,{style:l.tableHeader,children:Object(s.jsxs)(r.View,{style:l.tableRow,children:[Object(s.jsx)(r.View,{style:[l.h6,l.tableCell1],children:Object(s.jsx)(r.Text,{children:"Description"})}),Object(s.jsx)(r.View,{style:[l.h6,l.tableCellN],children:Object(s.jsx)(r.Text,{children:"Qty"})}),Object(s.jsx)(r.View,{style:[l.h6,l.tableCellN],children:Object(s.jsx)(r.Text,{children:"Total"})}),Object(s.jsx)(r.View,{style:[l.h6,l.tableCellN],children:Object(s.jsx)(r.Text,{children:"Tax"})})]})}),Object(s.jsxs)(r.View,{style:l.tableBody,children:[t.lineItems.map((function(e){return Object(s.jsxs)(r.View,{style:l.tableRow,children:[Object(s.jsxs)(r.View,{style:l.tableCell1,children:[Object(s.jsx)(r.Text,{style:l.body2,children:e.name}),Object(s.jsx)(r.Text,{style:l.body2,children:e.unitAmount})]}),Object(s.jsx)(r.View,{style:l.tableCellN,children:Object(s.jsx)(r.Text,{style:l.body2,children:e.quantity})}),Object(s.jsx)(r.View,{style:l.tableCellN,children:Object(s.jsx)(r.Text,{style:l.body2,children:i()(e.subtotalAmount).format("".concat(e.currencySymbol,"0,0.00"))})}),Object(s.jsx)(r.View,{style:l.tableCellN,children:Object(s.jsx)(r.Text,{style:l.body2,children:i()(e.taxAmount).format("".concat(e.currencySymbol,"0,0.00"))})})]},e.name)})),Object(s.jsxs)(r.View,{style:l.tableRow,children:[Object(s.jsx)(r.View,{style:l.tableCell1}),Object(s.jsx)(r.View,{style:l.tableCellN}),Object(s.jsx)(r.View,{style:l.tableCellN}),Object(s.jsx)(r.View,{style:l.tableCellN,children:Object(s.jsxs)(r.View,{style:{flexDirection:"row"},children:[Object(s.jsx)(r.Text,{style:[l.body2,{marginRight:8}],children:"Tax"}),Object(s.jsx)(r.Text,{style:l.body2,children:i()(t.taxAmount).format("".concat(t.currencySymbol,"0,0.00"))})]})})]}),Object(s.jsxs)(r.View,{style:l.tableRow,children:[Object(s.jsx)(r.View,{style:l.tableCell1}),Object(s.jsx)(r.View,{style:l.tableCellN}),Object(s.jsx)(r.View,{style:l.tableCellN}),Object(s.jsx)(r.View,{style:l.tableCellN,children:Object(s.jsxs)(r.View,{style:{flexDirection:"row"},children:[Object(s.jsx)(r.Text,{style:[l.body2,{marginRight:8}],children:"Total"}),Object(s.jsx)(r.Text,{style:l.subtitle2,children:i()(t.totalAmount).format("".concat(t.currencySymbol,"0,0.00"))})]})})]})]})]})}),Object(s.jsxs)(r.View,{style:l.notes,children:[Object(s.jsx)(r.Text,{style:[l.subtitle2,l.gutterBottom],children:"Notes"}),Object(s.jsx)(r.Text,{style:l.body2,children:t.note})]})]})})}},825:function(e,t){},826:function(e,t){},833:function(e,t){},834:function(e,t){},886:function(e,t){}}]);
//# sourceMappingURL=20.ef12649e.chunk.js.map