(this.webpackJsonpthephonebook=this.webpackJsonpthephonebook||[]).push([[0],{41:function(e,n,t){"use strict";t.r(n);var r=t(16),a=t.n(r),o=t(3),c=t(5),u=t(2),s=t(0),i=function(e){var n=e.data,t=e.removeHandler;return Object(s.jsxs)("ul",{children:[" ",n.name," | ",n.number," ",Object(s.jsx)("button",{onClick:function(){return t(n)},children:"remove"})]})},l=function(e){var n=e.persons,t=e.filterValue,r=e.removeHandler;return Object(s.jsx)(s.Fragment,{children:n.filter((function(e){return e.name.toLowerCase().includes(t)})).map((function(e){return Object(s.jsx)(i,{data:e,removeHandler:r},e.name)}))})},d=t(4),m=t.n(d),b="/api/persons",j={getAll:function(){return m.a.get(b).then((function(e){return e.data}))},addEntry:function(e){return m.a.post(b,e).then((function(e){return e.data}))},removeEntry:function(e){return m.a.delete("".concat(b,"/").concat(e))},updateEntry:function(e,n){return m.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))}},f=function(e){var n=e.submitHandler,t=e.nameHandler,r=e.numberHandler,a=e.newName,o=e.newNumber;return Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsxs)("div",{children:[" Name: ",Object(s.jsx)("input",{value:a,onChange:t})," "]}),Object(s.jsxs)("div",{children:[" Number: ",Object(s.jsx)("input",{value:o,onChange:r})," "]}),Object(s.jsxs)("div",{children:[" ",Object(s.jsx)("button",{type:"submit",children:"add"}),"  "]})]})},h=function(e){var n=e.filterHandler;return Object(s.jsxs)(s.Fragment,{children:["Filter by name: ",Object(s.jsx)("input",{onChange:n})]})},p=function(e){var n=e.message,t=e.type,r={background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return"success"===t&&(r=Object(c.a)(Object(c.a)({},r),{},{color:"green"})),"error"===t&&(r=Object(c.a)(Object(c.a)({},r),{},{color:"red"})),null===n?null:Object(s.jsx)("div",{style:r,children:n})},O=function(){var e=Object(u.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(u.useState)(""),c=Object(o.a)(a,2),i=c[0],d=c[1],m=Object(u.useState)(""),b=Object(o.a)(m,2),O=b[0],g=b[1],y=Object(u.useState)(""),v=Object(o.a)(y,2),x=v[0],w=v[1],H=Object(u.useState)({message:null,type:null}),k=Object(o.a)(H,2),E=k[0],N=k[1];Object(u.useEffect)((function(){j.getAll().then((function(e){r(e)}))}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(p,{message:E.message,type:E.type}),Object(s.jsx)(h,{filterHandler:function(e){w(e.target.value.toLowerCase())}}),Object(s.jsx)("h3",{children:"Add a new person:"}),Object(s.jsx)(f,{submitHandler:function(e){if(e.preventDefault(),""===i)return window.alert("Name field is empty."),null;if(""===O)return window.alert("Phone field is empty."),null;var n={name:i,number:O},a=t.filter((function(e){return e.name===i}));a.length>0?window.confirm("".concat(i," is already on the phonebook, replace the old number with a new one?"))&&j.updateEntry(a[0].id,n).then((function(e){r(t.map((function(n){return n.id!==e.id?n:e}))),d(""),g(""),N({message:"".concat(n.name,"'s number has been updated."),type:"success"}),setTimeout((function(){return N({message:null,type:null})}),5e3)})).catch((function(e){N({message:"Information of ".concat(n.name," has already been removed from server."),type:"error"}),r(t.filter((function(e){return e.name!==n.name}))),setTimeout((function(){return N({message:null,type:null})}),5e3)})):j.addEntry(n).then((function(e){r(t.concat(e)),d(""),g("")}))},newName:i,newNumber:O,nameHandler:function(e){d(e.target.value)},numberHandler:function(e){g(e.target.value)}}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(l,{persons:t,removeHandler:function(e){window.confirm("Delete ".concat(e.name,"?"))&&j.removeEntry(e.id).then((function(){r(t.filter((function(n){return n.name!==e.name}))),N({message:"".concat(e.name," has been removed from the phonebook."),type:"success"}),setTimeout((function(){return N({message:null,type:null})}),5e3)})).catch((function(e){console.log(e.response.status),console.log(e.response.headers),N({message:"The entry couldn't be deleted. It may not be in the server anymore. Error code ".concat(e.response.status),type:"error"}),setTimeout((function(){return N({message:null,type:null})}),5e3)}))},filterValue:x})]})};a.a.render(Object(s.jsx)(O,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.5e255f6d.chunk.js.map