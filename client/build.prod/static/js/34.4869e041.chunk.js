(this["webpackJsonpcarpatin-dashboard"]=this["webpackJsonpcarpatin-dashboard"]||[]).push([[34],{1694:function(e,t,n){"use strict";n.r(t),n.d(t,"ProductInventory",(function(){return q}));var a=n(28),r=n(23),c=n.n(r),i=n(33),s=n(15),o=n(14),j=n(36),d=n(1),l=n(108),u=n(631),b=n.n(u),x=n(695),O=n(696),h=n(240),v=n(599),f=n(107),p=n(1727),g=n(1736),m=n(47),y=n(241),w=n(613),C=n(651),k=n(584),S=n(694),I=n(717),L=n(716),R=n(615),z=n(256),H=n(639),M=n(640),P=n(244),B=n(58),D=n(174),N=n(81),A=n(0),E=["onSaveQuantity","variant"],Q=function(e){var t=e.onSaveQuantity,n=e.variant,a=Object(j.a)(e,E),r=Object(d.useState)("add"),c=Object(o.a)(r,2),i=c[0],l=c[1],u=Object(d.useState)(""),w=Object(o.a)(u,2),C=w[0],k=w[1],S=Number.parseInt(C,10);return Object(A.jsxs)(x.a,Object(s.a)(Object(s.a)({},a),{},{children:[Object(A.jsx)(O.a,{children:Object(A.jsxs)(h.a,{sx:{alignItems:"center",display:"flex"},children:[Object(A.jsx)(v.a,{src:n.image,sx:{mr:2},variant:"rounded",children:Object(A.jsx)(D.a,{})}),Object(A.jsx)(f.a,{color:"inherit",variant:"body2",children:n.name})]})}),Object(A.jsx)(O.a,{children:n.quantity}),Object(A.jsx)(O.a,{children:b()(n.price).format("$0,0.00")}),Object(A.jsx)(O.a,{children:n.sku}),Object(A.jsx)(O.a,{sx:{width:333},children:Object(A.jsxs)(h.a,{sx:{display:"flex"},children:[Object(A.jsxs)(p.a,{exclusive:!0,onChange:function(e,t){t&&l(t)},value:i,children:[Object(A.jsx)(g.a,{value:"add",children:"Add"}),Object(A.jsx)(g.a,{value:"set",children:"Set"})]}),Object(A.jsx)(m.c,{inputProps:{sx:{px:1.5,py:1.75}},onChange:function(e){k(e.target.value)},sx:{borderColor:"neutral.300",borderRadius:1,borderStyle:"solid",borderWidth:1,maxHeight:48,mx:1},type:"number",value:C}),Object(A.jsx)(y.a,{color:"primary",disabled:Number.isNaN(S)||S<0||0===S&&"add"===i,onClick:function(){null===t||void 0===t||t(n.id,S,i),k("")},variant:"contained",children:"Save"})]})})]}))},q=function(){var e=Object(B.a)(),t=Object(d.useState)({isLoading:!0}),n=Object(o.a)(t,2),r=n[0],s=n[1],j=Object(d.useState)([]),u=Object(o.a)(j,2),b=u[0],v=u[1],f=Object(d.useCallback)(Object(i.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s((function(){return{isLoading:!0}})),t.prev=1,t.next=4,z.a.getProduct();case 4:n=t.sent,e.current&&s((function(){return{isLoading:!1,data:n}})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0),e.current&&s((function(){return{isLoading:!1,error:t.t0.message}}));case 12:case"end":return t.stop()}}),t,null,[[1,8]])}))),[]);Object(d.useEffect)((function(){f().catch(console.error)}),[f]),Object(d.useEffect)((function(){var e;v((null===(e=r.data)||void 0===e?void 0:e.variants)||[])}),[r.data]),Object(d.useEffect)((function(){N.a.push({event:"page_view"})}),[]);var p=function(e,t,n){var r=Object(a.a)(b),c=r.findIndex((function(t){return t.id===e}));r[c].quantity="add"===n?r[c].quantity+t:t,v(r)},g=r.isLoading,m=Boolean(!r.isLoading&&r.error),y=Boolean(!r.isLoading&&!r.error&&!b.length);return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(l.a,{children:Object(A.jsx)("title",{children:"Product: Inventory | Carpatin Dashboard"})}),Object(A.jsx)(h.a,{sx:{backgroundColor:"background.default",flexGrow:1},children:Object(A.jsxs)(w.a,{sx:{minHeight:600,display:"flex",flexDirection:"column"},variant:"outlined",children:[Object(A.jsx)(C.a,{title:"Inventory Management"}),Object(A.jsx)(k.a,{}),Object(A.jsx)(P.a,{children:Object(A.jsxs)(S.a,{sx:{minWidth:900},children:[Object(A.jsx)(I.a,{children:Object(A.jsxs)(x.a,{children:[Object(A.jsx)(O.a,{children:"Variant"}),Object(A.jsx)(O.a,{children:"Inventory"}),Object(A.jsx)(O.a,{children:"Price"}),Object(A.jsx)(O.a,{children:"SKU"}),Object(A.jsx)(O.a,{children:"Actions"})]})}),Object(A.jsx)(L.a,{children:b.map((function(e){return Object(A.jsx)(Q,{onSaveQuantity:p,variant:e},e.id)}))})]})}),g&&Object(A.jsxs)(h.a,{sx:{p:2},children:[Object(A.jsx)(R.a,{height:42}),Object(A.jsx)(R.a,{height:42}),Object(A.jsx)(R.a,{height:42})]}),m&&Object(A.jsx)(H.a,{error:r.error,sx:{flexGrow:1,m:2}}),y&&Object(A.jsx)(M.a,{sx:{flexGrow:1,m:2}})]})})]})}},628:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(27),r=n(0),c=Object(a.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus")},633:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(27),r=n(0),c=Object(a.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{clipRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",fillRule:"evenodd"})}),"Refresh")},634:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(27),r=n(0),c=Object(a.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"QuestionMarkOutlined")},639:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(15),r=n(36),c=n(107),i=n(241),s=n(4),o=n(158),j=n(633),d=n(0),l=["error","onReload"],u=Object(s.a)("div")((function(e){var t=e.theme;return{alignItems:"center",backgroundColor:t.palette.neutral[100],display:"flex",flexDirection:"column",justifyContent:"center",padding:t.spacing(3)}})),b=function(e){var t=e.error,n=e.onReload,s=Object(r.a)(e,l);return Object(d.jsxs)(u,Object(a.a)(Object(a.a)({},s),{},{children:[Object(d.jsx)(o.a,{sx:{color:"text.secondary"}}),Object(d.jsx)(c.a,{color:"textSecondary",sx:{mt:2},variant:"body2",children:t||"Error loading data, please try again."}),n&&Object(d.jsx)(i.a,{color:"primary",onClick:n,startIcon:Object(d.jsx)(j.a,{fontSize:"small"}),sx:{mt:2},variant:"text",children:"Reload Data"})]}))}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(15),r=n(36),c=n(107),i=n(241),s=n(4),o=n(628),j=n(634),d=n(0),l=["onCreate"],u=Object(s.a)("div")((function(e){var t=e.theme;return{alignItems:"center",backgroundColor:t.palette.neutral[100],display:"flex",flexDirection:"column",justifyContent:"center",padding:t.spacing(3)}})),b=function(e){var t=e.onCreate,n=Object(r.a)(e,l);return Object(d.jsxs)(u,Object(a.a)(Object(a.a)({},n),{},{children:[Object(d.jsx)(j.a,{sx:{color:"text.secondary"}}),Object(d.jsx)(c.a,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"There are not objects here yet."}),t&&Object(d.jsx)(i.a,{color:"primary",onClick:t,startIcon:Object(d.jsx)(o.a,{fontSize:"small"}),sx:{mt:2},variant:"contained",children:"Create Object"})]}))}}}]);
//# sourceMappingURL=34.4869e041.chunk.js.map