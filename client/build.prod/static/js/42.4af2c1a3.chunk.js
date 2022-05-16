(this["webpackJsonpcarpatin-dashboard"]=this["webpackJsonpcarpatin-dashboard"]||[]).push([[42],{1724:function(e,t,a){"use strict";a.r(t),a.d(t,"OrganizationBilling",(function(){return J}));var n=a(14),r=a(1),i=a(108),c=a(590),l=a(240),s=a(598),o=a(613),j=a(596),d=a(651),b=a(241),u=a(584),x=a(644),h=a(641),p=a(0),m=function(){var e=Object(c.a)((function(e){return e.breakpoints.down("md")}))?"vertical":"horizontal";return Object(p.jsxs)(o.a,{variant:"outlined",children:[Object(p.jsx)(d.a,{action:Object(p.jsx)(b.a,{color:"primary",size:"small",variant:"text",children:"Edit"}),title:"Billing Information"}),Object(p.jsx)(u.a,{}),Object(p.jsxs)(x.a,{children:[Object(p.jsx)(h.a,{align:e,divider:!0,label:"Name/Company",value:"Acme INC"}),Object(p.jsx)(h.a,{align:e,divider:!0,label:"Country",value:"Germany"}),Object(p.jsx)(h.a,{align:e,divider:!0,label:"Zip Code",value:"6753454"}),Object(p.jsx)(h.a,{align:e,label:"City",value:"Berlin"})]})]})},O=a(23),v=a.n(O),y=a(33),f=a(52),g=a(110),S=a(48),C=a(631),w=a.n(C),P=a(107),T=a(1727),B=a(1736),k=a(962),z=a(816),I=a(960),E=a(608),F=a(814),G=[{id:"1",description:"Up to 2 team members",label:"Free",priceOptions:[{chargeType:"monthly",amount:0},{chargeType:"yearly",amount:0}],value:"free"},{id:"2",description:"Best for simple projects or applications.",label:"Essential",priceOptions:[{chargeType:"monthly",amount:120},{chargeType:"yearly",amount:1320}],value:"essential"},{id:"3",description:"Best for teams and multiple projects that need added security.",label:"Professional",priceOptions:[{chargeType:"monthly",amount:480},{chargeType:"yearly",amount:5280}],value:"professional"}],U=function(){var e=Object(g.a)({initialValues:{plan:"free",submit:null},validationSchema:S.f().shape({plan:S.d().oneOf(G.map((function(e){return e.value})))}),onSubmit:function(){var e=Object(y.a)(v.a.mark((function e(t,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{f.b.success("Plan updated"),a.setStatus({success:!0}),a.setSubmitting(!1)}catch(t){console.error(t),a.setStatus({success:!1}),a.setErrors({submit:t.message}),a.setSubmitting(!1)}case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}),t=Object(r.useState)("monthly"),a=Object(n.a)(t,2),i=a[0],c=a[1];return Object(p.jsxs)(o.a,{variant:"outlined",children:[Object(p.jsx)(d.a,{title:"Subscription Plan"}),Object(p.jsx)(u.a,{}),Object(p.jsxs)(l.a,{sx:{alignItems:"center",display:"flex",px:3,py:2},children:[Object(p.jsx)(P.a,{color:"textPrimary",sx:{mr:3},variant:"subtitle2",children:"Billing"}),Object(p.jsxs)(T.a,{exclusive:!0,onChange:function(e,t){t&&c(t)},size:"small",value:i,children:[Object(p.jsx)(B.a,{value:"monthly",children:"Monthly"}),Object(p.jsx)(B.a,{value:"yearly",children:"Yearly"})]})]}),Object(p.jsx)(u.a,{}),Object(p.jsx)(k.a,{name:"plan",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.plan,children:G.map((function(e){return Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)(z.a,{disableTypography:!0,control:Object(p.jsx)(I.a,{color:"primary"}),label:Object(p.jsxs)(l.a,{sx:{alignItems:"center",display:"flex",width:"100%"},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(P.a,{color:"textPrimary",variant:"body1",children:e.label}),Object(p.jsx)(P.a,{color:"textSecondary",variant:"caption",children:e.description})]}),Object(p.jsx)(l.a,{sx:{flexGrow:1}}),Object(p.jsx)(P.a,{color:"textPrimary",variant:"h5",children:w()(e.priceOptions.find((function(e){return e.chargeType===i})).amount).format("$0,0")})]}),sx:{m:0,px:3,py:1.5},value:e.value}),Object(p.jsx)(u.a,{})]},e.id)}))}),e.touched.plan&&e.errors.plan&&Object(p.jsx)(E.a,{error:!0,children:e.errors.plan}),e.errors.submit&&Object(p.jsx)(E.a,{error:!0,sx:{mt:2},children:e.errors.submit}),Object(p.jsx)(F.a,{children:Object(p.jsx)(b.a,{color:"primary",disabled:e.isSubmitting,onClick:function(){return e.handleSubmit()},variant:"contained",children:"Upgrade Plan"})})]})},D=a(81),J=function(){var e=Object(r.useState)(!0),t=Object(n.a)(e,2),a=t[0],d=t[1],b=Object(c.a)((function(e){return e.breakpoints.down("md")}));Object(r.useEffect)((function(){D.a.push({event:"page_view"})}),[]);var u=b?"horizontal":"vertical";return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(i.a,{children:Object(p.jsx)("title",{children:"Organization: Billing | Carpatin Dashboard"})}),Object(p.jsx)(l.a,{sx:{backgroundColor:"background.default"},children:Object(p.jsxs)(s.a,{container:!0,spacing:3,children:[Object(p.jsx)(s.a,{item:!0,xs:12,children:Object(p.jsx)(o.a,{variant:"outlined",children:Object(p.jsxs)(s.a,{container:!0,children:[Object(p.jsx)(s.a,{item:!0,md:4,xs:12,children:Object(p.jsx)(h.a,{align:u,component:"div",label:"Plan Selected",value:"Free"})}),Object(p.jsx)(s.a,{item:!0,md:4,xs:12,children:Object(p.jsx)(h.a,{align:u,component:"div",label:"Team members",value:"2"})}),Object(p.jsx)(s.a,{item:!0,md:4,xs:12,children:Object(p.jsx)(h.a,{align:u,component:"div",label:"Users",value:"7000"})})]})})}),Object(p.jsx)(s.a,{item:!0,xs:12,children:Object(p.jsx)(m,{})}),a&&Object(p.jsx)(s.a,{item:!0,xs:12,children:Object(p.jsx)(j.a,{onClose:function(){return d(!1)},severity:"info",children:"You will be charged starting 07/22/2021"})}),Object(p.jsx)(s.a,{item:!0,xs:12,children:Object(p.jsx)(U,{})})]})})]})}},641:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(15),r=a(36),i=a(604),c=a(583),l=a(107),s=a(240),o=a(0),j=["align","children","component","value","label"],d=function(e){var t=e.align,a=e.children,d=e.component,b=e.value,u=e.label,x=Object(r.a)(e,j);return Object(o.jsx)(i.a,Object(n.a)(Object(n.a)({component:d,disableGutters:!0,sx:{px:3,py:1.5}},x),{},{children:Object(o.jsx)(c.a,{disableTypography:!0,primary:Object(o.jsx)(l.a,{color:"textPrimary",sx:{minWidth:"vertical"===t?"inherit":180},variant:"subtitle2",children:u}),secondary:Object(o.jsx)(s.a,{sx:{flex:1,mt:"vertical"===t?.5:0},children:a||Object(o.jsx)(l.a,{color:"textSecondary",variant:"body2",children:b})}),sx:{alignItems:"flex-start",display:"flex",flexDirection:"vertical"===t?"column":"row",my:0}})}))};d.defaultProps={align:"vertical"}},644:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(603),r=a(0),i=function(e){var t=e.children;return Object(r.jsx)(n.a,{disablePadding:!0,children:t})}}}]);
//# sourceMappingURL=42.4af2c1a3.chunk.js.map