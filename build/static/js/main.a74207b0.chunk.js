(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(13),o=t.n(r),u=t(3),m=t(2),i=t.n(m),l="/api/persons",s=function(e){return i.a.post(l,e)},f=function(e,n){return i.a.put("".concat(l,"/").concat(e),n)},d=function(e){return i.a.delete("".concat(l,"/").concat(e))},b=(t(36),function(e){var n=e.message;return c.a.createElement("div",{className:"message"},n)}),h=function(e){var n=e.change;return c.a.createElement("div",null,"filter shown with",c.a.createElement("input",{onChange:n}))},p=function(e){var n=e.submit,t=e.changeName,a=e.changeNumber;return c.a.createElement("form",{onSubmit:n},c.a.createElement("div",null,"name: ",c.a.createElement("input",{onChange:t})),c.a.createElement("div",null,"number: ",c.a.createElement("input",{onChange:a})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add")))},E=function(e){var n=e.persons,t=e.remove;return c.a.createElement(c.a.Fragment,null,n.map((function(e){return c.a.createElement("p",{key:e.name},e.name," || ",e.number," || ",c.a.createElement("button",{onClick:t},"delete"))})))},v=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)([]),m=Object(u.a)(o,2),l=m[0],v=m[1],g=Object(a.useState)(""),w=Object(u.a)(g,2),j=w[0],O=w[1],k=Object(a.useState)(""),C=Object(u.a)(k,2),N=C[0],y=C[1],S=Object(a.useState)(null),T=Object(u.a)(S,2),L=T[0],A=T[1],D="/api/persons",I=function(){i.a.get(D).then((function(e){r(e.data),v(e.data)}))};Object(a.useEffect)((function(){I()}),[]);var J,x=function(){s({name:j,number:N}),A("Added ".concat(j)),setTimeout((function(){A(null)}),5e3),I()},B=function(){t.forEach((function(e){if(j===e.name&&window.confirm("".concat(e.name," is already added to phonebook, replace the older number with a new one?"))){var n={name:e.name,number:N,id:e.id};f(e.id,n),A("Updated ".concat(e.name)),setTimeout((function(){A(null)}),5e3)}}))};return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(b,{style:{borderColor:""},message:L}),c.a.createElement(h,{change:function(e){var n=e.target.value.toLowerCase();v(t.filter((function(e){return e.name.toLowerCase().includes(n)})))}}),c.a.createElement("h3",null,"Add a new"),c.a.createElement(p,{submit:function(e){e.preventDefault(),t.forEach((function(e){e.name===j&&(J=!0)})),!j||J?B(j):x()},changeName:function(e){O(e.target.value)},changeNumber:function(e){y(e.target.value)}}),c.a.createElement("h3",null,"Numbers"),c.a.createElement(E,{persons:l,remove:function(e){t.forEach((function(n){e.target.parentNode.innerHTML.includes(n.name&&n.number)&&window.confirm("Delete ".concat(n.name))&&(d(n.id).catch((function(e){A("Information of ".concat(n.name," has already been removed from server"))})),A("Removed ".concat(n.name)),setTimeout((function(){A(null)}),5e3))}))}}))};o.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a74207b0.chunk.js.map