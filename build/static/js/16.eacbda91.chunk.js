(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[16],{499:function(A,n,e){},537:function(A,n,e){"use strict";e.r(n);var t=e(2),a=e(18),c=e(519),i=e(71),s=e(0),r=e(492),l=e.n(r),o=(e(499),e(500)),d=e(265),j=[{id:1,name:"Table",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAABbCAIAAABs2olpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADrSURBVHhe7dExAQAgDMCwgQ0MI5sHF2meCui6cyaq/RtS+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2ntp7Wf1n5a+2EzD/kOAVkpEwACAAAAAElFTkSuQmCC",x:50,y:50},{id:2,name:"Chair",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAIAAACgvKk3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAtSURBVEhLY+xgkGagHmCC0lQCo8aRD0aNIx+MGkc+GDWOfDBqHPlgBBnHwAAAsY0A1fdPaokAAAAASUVORK5CYII=",x:50,y:50},{id:3,name:"Wall horizontal",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAE6CAIAAABCgU+KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABqSURBVGhD7cqhEYBAEMDAgyqv/0owyMw8ErFrYnLt7nxwvz3xNV/zNV/zNV/zNV/zNV/zNV/zNV/zNV/zNV/zNV/zNV/zNV/zNV/zNV/zNV/zNV/zNV/zNV/zNV/zNV/zNV/zNV/79zfzAPuSA3xRFDzpAAAAAElFTkSuQmCC",x:50,y:50},{id:4,name:"Wall vetical",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAToAAAANCAIAAAC2KDWqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABGSURBVGhD7dMxDQAxDMDA9FGGP5IuBfGW7hYj8NndAQq+V+D37AoZdoUMu0KGXSHDrpBhV8iwK2TYFTLsChl2hQy7QsTMBQF+ASJp8q5PAAAAAElFTkSuQmCC",x:50,y:50}];n.default=function(){var A=Object(s.useState)(0),n=Object(i.a)(A,2),e=n[0],r=n[1],f=Object(s.useState)({x:0,y:0}),p=Object(i.a)(f,2),u=p[0],h=p[1],m=Object(s.useState)([]),x=Object(i.a)(m,2),b=x[0],g=x[1],N=function(){r({drag:++e})},O=function(A,n){var t=b.map((function(A){return A.id===n.node.id?Object(a.a)(Object(a.a)({},A),{},{x:n.x,y:n.y}):A}));g(t),r({drag:--e})},V=function(A,n){var e=u.x,t=u.y;h({x:e+n.deltaX,y:t+n.deltaY})};return Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{className:"elements",children:[Object(t.jsx)("h3",{children:"Elements"}),Object(t.jsxs)("div",{className:"import-export",children:[Object(t.jsx)("label",{for:"file-upload",class:"custom-upload",children:"Import plan"}),Object(t.jsx)("input",{id:"file-upload",type:"file",onChange:function(A){var n=new FileReader;n.readAsText(A.target.files[0],"UTF-8"),n.onload=function(A){console.log("e.target.result",JSON.parse(A.target.result)),g(JSON.parse(A.target.result))}}}),Object(t.jsx)("a",{href:function(){return!1},onClick:function(A){if(b.length<1)d.b.error("There are no items on the plan");else{var n=JSON.stringify(b),e=new Blob([n],{type:"text/plain"}),t=URL.createObjectURL(e),a=document.createElement("a");a.download="user-info.json",a.href=t,a.click()}},children:"Export plan to file"})]}),j.map((function(A){return Object(t.jsxs)("div",{className:"item",children:[Object(t.jsx)("p",{children:A.name}),Object(t.jsx)("img",{src:A.img,alt:""}),Object(t.jsx)("div",{className:"add",children:Object(t.jsx)("button",{onClick:function(){return function(A){var n=Object(o.a)();g([].concat(Object(c.a)(b),[Object(a.a)(Object(a.a)({},A),{},{id:n})]))}(A)},children:"Add"})})]})}))]}),b.length>0?Object(t.jsxs)("div",{className:"room",children:[Object(t.jsx)("h3",{children:"Room"}),b.map((function(A){return Object(t.jsx)(l.a,{defaultPosition:{x:A.x,y:A.y},onDrag:V,onStop:O,onStart:N,children:Object(t.jsxs)("div",{id:A.id,className:"box",children:[Object(t.jsx)("span",{onClick:function(n){return function(A){var n=b.filter((function(n){return n.id!==A}));g(n)}(A.id)},className:"remove",children:"X"}),Object(t.jsx)("img",{src:A.img,alt:""})]})})}))]}):Object(t.jsx)("div",{className:"room",children:Object(t.jsx)("h3",{children:"Room"})})]})}}}]);
//# sourceMappingURL=16.eacbda91.chunk.js.map