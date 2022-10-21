(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[20],{518:function(e,t,n){"use strict";var a=n(4),r=n(3),c=n(22),s=n(8),i=n(0),l=n(6),o=n.n(l),m=n(80),u=n(46),d=n(69),f=n(41),b=n(159),j=n(189),p=i.createContext("default"),O=function(e){var t=e.children,n=e.size;return i.createElement(p.Consumer,null,(function(e){return i.createElement(p.Provider,{value:n||e},t)}))},x=p,h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},y=function(e,t){var n,l,p=i.useContext(x),O=i.useState(1),y=Object(s.a)(O,2),v=y[0],g=y[1],E=i.useState(!1),P=Object(s.a)(E,2),w=P[0],C=P[1],N=i.useState(!0),S=Object(s.a)(N,2),I=S[0],z=S[1],k=i.useRef(),R=i.useRef(),F=Object(u.a)(t,k),W=i.useContext(d.b).getPrefixCls,T=function(){if(R.current&&k.current){var t=R.current.offsetWidth,n=k.current.offsetWidth;if(0!==t&&0!==n){var a=e.gap,r=void 0===a?4:a;2*r<n&&g(n-2*r<t?(n-2*r)/t:1)}}};i.useEffect((function(){C(!0)}),[]),i.useEffect((function(){z(!0),g(1)}),[e.src]),i.useEffect((function(){T()}),[e.gap]);var U=e.prefixCls,V=e.shape,q=e.size,A=e.src,D=e.srcSet,H=e.icon,J=e.className,Z=e.alt,G=e.draggable,L=e.children,M=h(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),X="default"===q?p:q,B=Object(j.a)(),K=i.useMemo((function(){if("object"!==Object(c.a)(X))return{};var e=b.b.find((function(e){return B[e]})),t=X[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:H?t/2:18}:{}}),[B,X]);Object(f.a)(!("string"===typeof H&&H.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(H,"` at https://ant.design/components/icon"));var Q,Y=W("avatar",U),$=o()((n={},Object(r.a)(n,"".concat(Y,"-lg"),"large"===X),Object(r.a)(n,"".concat(Y,"-sm"),"small"===X),n)),_=i.isValidElement(A),ee=o()(Y,$,(l={},Object(r.a)(l,"".concat(Y,"-").concat(V),V),Object(r.a)(l,"".concat(Y,"-image"),_||A&&I),Object(r.a)(l,"".concat(Y,"-icon"),H),l),J),te="number"===typeof X?{width:X,height:X,lineHeight:"".concat(X,"px"),fontSize:H?X/2:18}:{};if("string"===typeof A&&I)Q=i.createElement("img",{src:A,draggable:G,srcSet:D,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&z(!1)},alt:Z});else if(_)Q=A;else if(H)Q=H;else if(w||1!==v){var ne="scale(".concat(v,") translateX(-50%)"),ae={msTransform:ne,WebkitTransform:ne,transform:ne},re="number"===typeof X?{lineHeight:"".concat(X,"px")}:{};Q=i.createElement(m.a,{onResize:T},i.createElement("span",{className:"".concat(Y,"-string"),ref:function(e){R.current=e},style:Object(a.a)(Object(a.a)({},re),ae)},L))}else Q=i.createElement("span",{className:"".concat(Y,"-string"),style:{opacity:0},ref:function(e){R.current=e}},L);return delete M.onError,delete M.gap,i.createElement("span",Object(a.a)({},M,{style:Object(a.a)(Object(a.a)(Object(a.a)({},te),K),M.style),className:ee,ref:F}),Q)},v=i.forwardRef(y);v.displayName="Avatar",v.defaultProps={shape:"circle",size:"default"};var g=v,E=n(50),P=n(26),w=n(188),C=function(e){return e?"function"===typeof e?e():e:null},N=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},S=i.forwardRef((function(e,t){var n=e.prefixCls,r=e.title,c=e.content,s=N(e,["prefixCls","title","content"]),l=(0,i.useContext(d.b).getPrefixCls)("popover",n);return i.createElement(w.a,Object(a.a)({},s,{prefixCls:l,ref:t,overlay:function(e){return i.createElement(i.Fragment,null,r&&i.createElement("div",{className:"".concat(e,"-title")},C(r)),i.createElement("div",{className:"".concat(e,"-inner-content")},C(c)))}(l)}))}));S.displayName="Popover",S.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var I=S,z=function(e){var t=i.useContext(d.b),n=t.getPrefixCls,a=t.direction,c=e.prefixCls,s=e.className,l=void 0===s?"":s,m=e.maxCount,u=e.maxStyle,f=e.size,b=n("avatar-group",c),j=o()(b,Object(r.a)({},"".concat(b,"-rtl"),"rtl"===a),l),p=e.children,x=e.maxPopoverPlacement,h=void 0===x?"top":x,y=Object(E.a)(p).map((function(e,t){return Object(P.a)(e,{key:"avatar-key-".concat(t)})})),v=y.length;if(m&&m<v){var w=y.slice(0,m),C=y.slice(m,v);return w.push(i.createElement(I,{key:"avatar-popover-key",content:C,trigger:"hover",placement:h,overlayClassName:"".concat(b,"-popover")},i.createElement(g,{style:u},"+".concat(v-m)))),i.createElement(O,{size:f},i.createElement("div",{className:j,style:e.style},w))}return i.createElement(O,{size:f},i.createElement("div",{className:j,style:e.style},y))},k=g;k.Group=z;t.a=k},524:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(25),c=n.n(r),s=n(95),i=n(71),l=n(0),o=n(535),m=n(265),u=n(518),d=n(467),f=n(468),b=n(429),j=n(103),p=n(439),O=n(31),x=n(160),h=n(42);t.default=function(e){var t=Object(h.g)(),n=o.a.useForm(),r=Object(i.a)(n,1)[0],y=Object(l.useState)({name:"",email:"",username:"",company:"",phone:"",website:"",address:"",city:"",postcode:""}),v=Object(i.a)(y,2),g=(v[0],v[1]),E=e.match.params.id,P=parseInt(E);Object(l.useEffect)((function(){(function(){var e=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,r.setFieldsValue({name:n.filter((function(e){return e.id===P}))[0].name,email:n.filter((function(e){return e.id===P}))[0].email,username:n.filter((function(e){return e.id===P}))[0].username,phone:n.filter((function(e){return e.id===P}))[0].phone,website:n.filter((function(e){return e.id===P}))[0].website,address:(a=n.filter((function(e){return e.id===P}))[0].address,a.suite+" "+a.street),city:n.filter((function(e){return e.id===P}))[0].address.city,postcode:n.filter((function(e){return e.id===P}))[0].address.zipcode,company:n.filter((function(e){return e.id===P}))[0].company.name}),e.abrupt("return",n);case 8:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,P]);return Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{alignItems:"center",mobileFlex:!1,className:"text-center text-md-left",children:Object(a.jsx)(u.a,{size:90,src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",icon:Object(a.jsx)(p.a,{})})}),Object(a.jsx)("div",{className:"mt-4",children:Object(a.jsx)(o.a,{onFinish:function(e){var n="updatable";m.b.loading({content:"Updating...",key:n}),setTimeout((function(){g({name:e.name,email:e.email,username:e.username,company:e.company,phone:e.phone,website:e.website,address:e.address,city:e.city,postcode:e.postcode}),m.b.success({content:"Done!",key:n,duration:2})}),1e3),t.push("/app/main/clients/client-list/")},form:r,name:"basicInformation",layout:"vertical",children:Object(a.jsx)(d.a,{children:Object(a.jsxs)(f.a,{xs:24,sm:24,md:24,lg:16,children:[Object(a.jsxs)(d.a,{gutter:O.c,children:[Object(a.jsx)(f.a,{xs:24,sm:24,md:12,children:Object(a.jsx)(o.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:Object(a.jsx)(b.a,{})})}),Object(a.jsx)(f.a,{xs:24,sm:24,md:12,children:Object(a.jsx)(o.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(a.jsx)(b.a,{})})}),Object(a.jsx)(f.a,{xs:24,sm:24,md:12,children:Object(a.jsx)(o.a.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please enter a valid email!"}],children:Object(a.jsx)(b.a,{})})}),Object(a.jsx)(f.a,{xs:24,sm:24,md:12,children:Object(a.jsx)(o.a.Item,{label:"Company",name:"company",children:Object(a.jsx)(b.a,{})})}),Object(a.jsx)(f.a,{xs:24,sm:24,md:12,children:Object(a.jsx)(o.a.Item,{label:"Phone Number",name:"phone",children:Object(a.jsx)(b.a,{})})}),Object(a.jsx)(f.a,{xs:24,sm:24,md:12,children:Object(a.jsx)(o.a.Item,{label:"Website",name:"website",children:Object(a.jsx)(b.a,{})})}),Object(a.jsx)(f.a,{xs:24,sm:24,md:24,children:Object(a.jsx)(o.a.Item,{label:"Address",name:"address",children:Object(a.jsx)(b.a,{})})}),Object(a.jsx)(f.a,{xs:24,sm:24,md:12,children:Object(a.jsx)(o.a.Item,{label:"City",name:"city",children:Object(a.jsx)(b.a,{})})}),Object(a.jsx)(f.a,{xs:24,sm:24,md:12,children:Object(a.jsx)(o.a.Item,{label:"Post code",name:"postcode",children:Object(a.jsx)(b.a,{})})})]}),Object(a.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Save Change"})]})})})})]})}}}]);
//# sourceMappingURL=20.e16cba79.chunk.js.map