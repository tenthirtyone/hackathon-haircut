(this["webpackJsonpcarpatin-dashboard"]=this["webpackJsonpcarpatin-dashboard"]||[]).push([[0],{1706:function(e,t,n){"use strict";var r=n(14),o=n(2),i=n(5),a=n(1);n(11);function s(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function f(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function c(e){var t=f(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function p(e){return e instanceof f(e).Element||e instanceof Element}function u(e){return e instanceof f(e).HTMLElement||e instanceof HTMLElement}function l(e){return"undefined"!==typeof ShadowRoot&&(e instanceof f(e).ShadowRoot||e instanceof ShadowRoot)}function d(e){return e?(e.nodeName||"").toLowerCase():null}function m(e){return((p(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return s(m(e)).left+c(e).scrollLeft}function v(e){return f(e).getComputedStyle(e)}function b(e){var t=v(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function y(e,t,n){void 0===n&&(n=!1);var r=m(t),o=s(e),i=u(t),a={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(i||!i&&!n)&&(("body"!==d(t)||b(r))&&(a=function(e){return e!==f(e)&&u(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:c(e);var t}(t)),u(t)?((p=s(t)).x+=t.clientLeft,p.y+=t.clientTop):r&&(p.x=h(r))),{x:o.left+a.scrollLeft-p.x,y:o.top+a.scrollTop-p.y,width:o.width,height:o.height}}function g(e){var t=s(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function O(e){return"html"===d(e)?e:e.assignedSlot||e.parentNode||(l(e)?e.host:null)||m(e)}function w(e){return["html","body","#document"].indexOf(d(e))>=0?e.ownerDocument.body:u(e)&&b(e)?e:w(O(e))}function x(e,t){var n;void 0===t&&(t=[]);var r=w(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=f(r),a=o?[i].concat(i.visualViewport||[],b(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(x(O(a)))}function j(e){return["table","td","th"].indexOf(d(e))>=0}function E(e){return u(e)&&"fixed"!==v(e).position?e.offsetParent:null}function D(e){for(var t=f(e),n=E(e);n&&j(n)&&"static"===v(n).position;)n=E(n);return n&&("html"===d(n)||"body"===d(n)&&"static"===v(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&u(e)&&"fixed"===v(e).position)return null;for(var n=O(e);u(n)&&["html","body"].indexOf(d(n))<0;){var r=v(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var P="top",k="bottom",R="right",L="left",M="auto",B=[P,k,R,L],T="start",W="end",A="viewport",H="popper",S=B.reduce((function(e,t){return e.concat([t+"-"+T,t+"-"+W])}),[]),q=[].concat(B,[M]).reduce((function(e,t){return e.concat([t,t+"-"+T,t+"-"+W])}),[]),C=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function N(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function I(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var U={placement:"bottom",modifiers:[],strategy:"absolute"};function V(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function z(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?U:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},U,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,f={state:o,setOptions:function(n){c(),o.options=Object.assign({},i,o.options,n),o.scrollParents={reference:p(e)?x(e):e.contextElement?x(e.contextElement):[],popper:x(t)};var s=function(e){var t=N(e);return C.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=s.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:f,options:r}),c=function(){};a.push(s||c)}})),f.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(V(t,n)){o.rects={reference:y(t,D(n),"fixed"===o.options.strategy),popper:g(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,p=void 0===c?{}:c,u=i.name;"function"===typeof a&&(o=a({state:o,options:p,name:u,instance:f})||o)}else o.reset=!1,r=-1}}},update:I((function(){return new Promise((function(e){f.forceUpdate(),e(o)}))})),destroy:function(){c(),s=!0}};if(!V(e,t))return f;function c(){a.forEach((function(e){return e()})),a=[]}return f.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var _={passive:!0};var F={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=f(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",n.update,_)})),s&&c.addEventListener("resize",n.update,_),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",n.update,_)})),s&&c.removeEventListener("resize",n.update,_)}},data:{}};function J(e){return e.split("-")[0]}function X(e){return e.split("-")[1]}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function G(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?J(o):null,a=o?X(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case P:t={x:s,y:n.y-r.height};break;case k:t={x:s,y:n.y+n.height};break;case R:t={x:n.x+n.width,y:f};break;case L:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?Y(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case T:t[c]=t[c]-(n[p]/2-r[p]/2);break;case W:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}var K={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=G({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},Q=Math.max,Z=Math.min,$=Math.round,ee={top:"auto",right:"auto",bottom:"auto",left:"auto"};function te(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.offsets,a=e.position,s=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,u=!0===p?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:$($(t*r)/r)||0,y:$($(n*r)/r)||0}}(i):"function"===typeof p?p(i):i,l=u.x,d=void 0===l?0:l,h=u.y,b=void 0===h?0:h,y=i.hasOwnProperty("x"),g=i.hasOwnProperty("y"),O=L,w=P,x=window;if(c){var j=D(n),E="clientHeight",M="clientWidth";j===f(n)&&"static"!==v(j=m(n)).position&&(E="scrollHeight",M="scrollWidth"),j=j,o===P&&(w=k,b-=j[E]-r.height,b*=s?1:-1),o===L&&(O=R,d-=j[M]-r.width,d*=s?1:-1)}var B,T=Object.assign({position:a},c&&ee);return s?Object.assign({},T,((B={})[w]=g?"0":"",B[O]=y?"0":"",B.transform=(x.devicePixelRatio||1)<2?"translate("+d+"px, "+b+"px)":"translate3d("+d+"px, "+b+"px, 0)",B)):Object.assign({},T,((t={})[w]=g?b+"px":"",t[O]=y?d+"px":"",t.transform="",t))}var ne={left:"right",right:"left",bottom:"top",top:"bottom"};function re(e){return e.replace(/left|right|bottom|top/g,(function(e){return ne[e]}))}var oe={start:"end",end:"start"};function ie(e){return e.replace(/start|end/g,(function(e){return oe[e]}))}function ae(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&l(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function se(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function fe(e,t){return t===A?se(function(e){var t=f(e),n=m(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+h(e),y:s}}(e)):u(t)?function(e){var t=s(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):se(function(e){var t,n=m(e),r=c(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=Q(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=Q(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+h(e),f=-r.scrollTop;return"rtl"===v(o||n).direction&&(s+=Q(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(m(e)))}function ce(e,t,n){var r="clippingParents"===t?function(e){var t=x(O(e)),n=["absolute","fixed"].indexOf(v(e).position)>=0&&u(e)?D(e):e;return p(n)?t.filter((function(e){return p(e)&&ae(e,n)&&"body"!==d(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=fe(e,n);return t.top=Q(r.top,t.top),t.right=Z(r.right,t.right),t.bottom=Z(r.bottom,t.bottom),t.left=Q(r.left,t.left),t}),fe(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function pe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ue(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function le(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,f=n.rootBoundary,c=void 0===f?A:f,u=n.elementContext,l=void 0===u?H:u,d=n.altBoundary,h=void 0!==d&&d,v=n.padding,b=void 0===v?0:v,y=pe("number"!==typeof b?b:ue(b,B)),g=l===H?"reference":H,O=e.elements.reference,w=e.rects.popper,x=e.elements[h?g:l],j=ce(p(x)?x:x.contextElement||m(e.elements.popper),a,c),E=s(O),D=G({reference:E,element:w,strategy:"absolute",placement:o}),L=se(Object.assign({},w,D)),M=l===H?L:E,T={top:j.top-M.top+y.top,bottom:M.bottom-j.bottom+y.bottom,left:j.left-M.left+y.left,right:M.right-j.right+y.right},W=e.modifiersData.offset;if(l===H&&W){var S=W[o];Object.keys(T).forEach((function(e){var t=[R,k].indexOf(e)>=0?1:-1,n=[P,k].indexOf(e)>=0?"y":"x";T[e]+=S[n]*t}))}return T}function de(e,t,n){return Q(e,Z(t,n))}function me(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function he(e){return[P,R,k,L].some((function(t){return e[t]>=0}))}var ve=z({defaultModifiers:[F,K,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:J(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,te(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,te(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];u(o)&&d(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});u(r)&&d(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=q.reduce((function(e,n){return e[n]=function(e,t,n){var r=J(e),o=[L,P].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[L,R].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,b=J(v),y=f||(b===v||!m?[re(v)]:function(e){if(J(e)===M)return[];var t=re(e);return[ie(e),t,ie(t)]}(v)),g=[v].concat(y).reduce((function(e,n){return e.concat(J(n)===M?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?q:f,p=X(r),u=p?s?S:S.filter((function(e){return X(e)===p})):B,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=le(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[J(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),O=t.rects.reference,w=t.rects.popper,x=new Map,j=!0,E=g[0],D=0;D<g.length;D++){var W=g[D],A=J(W),H=X(W)===T,C=[P,k].indexOf(A)>=0,N=C?"width":"height",I=le(t,{placement:W,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),U=C?H?R:L:H?k:P;O[N]>w[N]&&(U=re(U));var V=re(U),z=[];if(i&&z.push(I[A]<=0),s&&z.push(I[U]<=0,I[V]<=0),z.every((function(e){return e}))){E=W,j=!1;break}x.set(W,z)}if(j)for(var _=function(e){var t=g.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},F=m?3:1;F>0;F--){if("break"===_(F))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,p=n.altBoundary,u=n.padding,l=n.tether,d=void 0===l||l,m=n.tetherOffset,h=void 0===m?0:m,v=le(t,{boundary:f,rootBoundary:c,padding:u,altBoundary:p}),b=J(t.placement),y=X(t.placement),O=!y,w=Y(b),x="x"===w?"y":"x",j=t.modifiersData.popperOffsets,E=t.rects.reference,M=t.rects.popper,B="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,W={x:0,y:0};if(j){if(i||s){var A="y"===w?P:L,H="y"===w?k:R,S="y"===w?"height":"width",q=j[w],C=j[w]+v[A],N=j[w]-v[H],I=d?-M[S]/2:0,U=y===T?E[S]:M[S],V=y===T?-M[S]:-E[S],z=t.elements.arrow,_=d&&z?g(z):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=F[A],K=F[H],$=de(0,E[S],_[S]),ee=O?E[S]/2-I-$-G-B:U-$-G-B,te=O?-E[S]/2+I+$+K+B:V+$+K+B,ne=t.elements.arrow&&D(t.elements.arrow),re=ne?"y"===w?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,ie=j[w]+ee-oe-re,ae=j[w]+te-oe;if(i){var se=de(d?Z(C,ie):C,q,d?Q(N,ae):N);j[w]=se,W[w]=se-q}if(s){var fe="x"===w?P:L,ce="x"===w?k:R,pe=j[x],ue=pe+v[fe],me=pe-v[ce],he=de(d?Z(ue,ie):ue,pe,d?Q(me,ae):me);j[x]=he,W[x]=he-pe}}t.modifiersData[r]=W}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=J(n.placement),f=Y(s),c=[L,R].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return pe("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ue(e,B))}(o.padding,n),u=g(i),l="y"===f?P:L,d="y"===f?k:R,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],v=D(i),b=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,O=p[l],w=b-u[c]-p[d],x=b/2-u[c]/2+y,j=de(O,x,w),E=f;n.modifiersData[r]=((t={})[E]=j,t.centerOffset=j-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&ae(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=le(t,{elementContext:"reference"}),s=le(t,{altBoundary:!0}),f=me(a,r),c=me(s,o,i),p=he(f),u=he(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]}),be=n(40),ye=n(586),ge=n(61),Oe=n(29),we=n(45),xe=n(0),je=["anchorEl","children","disablePortal","modifiers","open","placement","popperOptions","popperRef","TransitionProps"],Ee=["anchorEl","children","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function De(e){return"function"===typeof e?e():e}var Pe={},ke=a.forwardRef((function(e,t){var n=e.anchorEl,s=e.children,f=e.disablePortal,c=e.modifiers,p=e.open,u=e.placement,l=e.popperOptions,d=e.popperRef,m=e.TransitionProps,h=Object(i.a)(e,je),v=a.useRef(null),b=Object(Oe.a)(v,t),y=a.useRef(null),g=Object(Oe.a)(y,d),O=a.useRef(g);Object(we.a)((function(){O.current=g}),[g]),a.useImperativeHandle(d,(function(){return y.current}),[]);var w=function(e,t){if("ltr"===(t&&t.direction||"ltr"))return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(u,Object(be.a)()),x=a.useState(w),j=Object(r.a)(x,2),E=j[0],D=j[1];a.useEffect((function(){y.current&&y.current.forceUpdate()})),Object(we.a)((function(){if(n&&p){De(n);var e=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;D(t.placement)}}];null!=c&&(e=e.concat(c)),l&&null!=l.modifiers&&(e=e.concat(l.modifiers));var t=ve(De(n),v.current,Object(o.a)({placement:w},l,{modifiers:e}));return O.current(t),function(){t.destroy(),O.current(null)}}}),[n,f,c,p,l,w]);var P={placement:E};return null!==m&&(P.TransitionProps=m),Object(xe.jsx)("div",Object(o.a)({ref:b,role:"tooltip"},h,{children:"function"===typeof s?s(P):s}))})),Re=a.forwardRef((function(e,t){var n=e.anchorEl,s=e.children,f=e.container,c=e.disablePortal,p=void 0!==c&&c,u=e.keepMounted,l=void 0!==u&&u,d=e.modifiers,m=e.open,h=e.placement,v=void 0===h?"bottom":h,b=e.popperOptions,y=void 0===b?Pe:b,g=e.popperRef,O=e.style,w=e.transition,x=void 0!==w&&w,j=Object(i.a)(e,Ee),E=a.useState(!0),D=Object(r.a)(E,2),P=D[0],k=D[1];if(!l&&!m&&(!x||P))return null;var R=f||(n?Object(ge.a)(De(n)).body:void 0);return Object(xe.jsx)(ye.a,{disablePortal:p,container:R,children:Object(xe.jsx)(ke,Object(o.a)({anchorEl:n,disablePortal:p,modifiers:d,ref:t,open:x?!P:m,placement:v,popperOptions:y,popperRef:g},j,{style:Object(o.a)({position:"fixed",top:0,left:0,display:m||!l||x?null:"none"},O),TransitionProps:x?{in:m,onEnter:function(){k(!1)},onExited:function(){k(!0)}}:null,children:s}))})}));t.a=Re}}]);
//# sourceMappingURL=0.9581dfd5.chunk.js.map