(this["webpackJsonptest-interesee"]=this["webpackJsonptest-interesee"]||[]).push([[0],{104:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r(12),o=r.n(a),i=(r(95),r(96),r(97),r(58)),c=r(42),l=r(21),s=r(150),u=r(61),j=(r(106),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/BookStack",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_KEY,authDomain:"awesome-book-store.firebaseapp.com",projectId:"awesome-book-store",storageBucket:"awesome-book-store.appspot.com",messagingSenderId:"422945911587",appId:Object({NODE_ENV:"production",PUBLIC_URL:"/BookStack",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).APP_ID,measurementId:"G-NRNWTYVNK3"});u.a.initializeApp(j);var b=u.a,d=r(141),h=r(136),m=r(140),O=r(142),x=r(4);var g=function(t){var e=t.year,r=t.listOfBooks.sort();return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(h.a,{style:{marginLeft:"10%",marginBottom:"10px",marginRight:"10%",display:"block"},children:Object(x.jsxs)(m.a,{style:{margin:"300px, 200px"},children:[Object(x.jsx)(d.a,{variant:"h5",gutterBottom:!0,align:"left",children:e||"forthcoming"}),r.map((function(t){return Object(x.jsxs)(O.a,{children:[Object(x.jsxs)(d.a,{variant:"h6",gutterBottom:!0,color:"textPrimary",display:"block",children:['"',t.title,'" by ',t.author.join(",")]}),Object(x.jsx)(d.a,{variant:"subtitle2",gutterBottom:!0,color:"textPrimary",display:"block",children:t.raiting?10===t.raiting?"\u0414\u0415\u0421\u042f\u0422\u042c \u0418\u0417 \u0414\u0415\u0421\u042f\u0422\u0418 \u041d\u0410 \u041a\u041e\u041d\u0427\u0418\u041a\u0410\u0425 \u041f\u0410\u041b\u042c\u0426\u0415\u0412":t.raiting+"/10":"not rated yet"}),Object(x.jsx)(d.a,{variant:"subtitle2",gutterBottom:!0,color:"textPrimary",display:"block",children:t.ISBN?"ISBN: "+t.ISBN:null})]},Object(s.a)())}))]})})})},p=r(54),f=r(151),y=r(143),v=r(63),S=r.n(v),k=r(76),B=r.n(k),T=r(77),C=r.n(T),E=r(107),N=r(149),I=r(152),w=r(147),A=r(146);var P=function(t){var e=Object(n.useState)([]),r=Object(l.a)(e,2),a=r[0],o=r[1],u=Object(n.useState)(""),j=Object(l.a)(u,2),h=j[0],m=j[1],g=Object(n.useState)(""),v=Object(l.a)(g,2),k=v[0],T=v[1],P=Object(n.useState)(0),_=Object(l.a)(P,2),D=_[0],L=_[1],R=Object(n.useState)(""),K=Object(l.a)(R,2),W=K[0],F=K[1],H=Object(n.useState)(!0),z=Object(l.a)(H,2),Y=z[0],M=z[1],U=W.replace(/-|\s/g,""),q=function(t,e,r){if(t.match(/[0-9]/i)&&13===t.length){for(e=r=0;t[r]&&(e+=t[r++]*(r%2?1:3)););return!(e%10)}return!1},V=Object(n.useState)(""),Z=Object(l.a)(V,2),J=Z[0],G=Z[1];return Object(x.jsx)(O.a,{maxWidth:"xs",children:Object(x.jsxs)(E.a,{className:"form",children:[Object(x.jsxs)(O.a,{className:"form-control-buttons",style:{marginBottom:"20px"},children:[Object(x.jsx)(y.a,{onClick:function(){return M(!0)},style:Y?{backgroundColor:"#a9c7f0",color:"white",marginTop:"20px"}:{marginTop:"20px"},children:Object(x.jsx)(d.a,{children:"Add New"})}),Object(x.jsx)(y.a,{onClick:function(){return M(!1)},style:Y?{marginTop:"20px"}:{backgroundColor:"#a9c7f0",color:"white",marginTop:"20px"},children:Object(x.jsx)(d.a,{children:"Delete"})})]}),Y?Object(x.jsxs)(O.a,{className:"add-form",children:[Object(x.jsx)(O.a,{className:"title-container",style:{marginBottom:"30px"},children:Object(x.jsx)(f.a,{id:"title",label:"Title",helperText:"required field",maxLength:"100",required:!0,onChange:function(t){return m(t.target.value)},value:h})}),0===a.length?Object(x.jsx)(d.a,{variant:"caption",display:"block",style:{color:"red"},children:"at least one author should be added"}):null,a.map((function(t,e){return Object(x.jsxs)(O.a,{children:[Object(x.jsx)(O.a,{className:"author-container",style:{marginBottom:"10px"},children:Object(x.jsx)(f.a,{type:"text",label:"Author",id:"input-author",value:t.author,required:!0,style:{marginLeft:"2%"},onChange:function(e){return r=e.target.value,n=t.key,void o(a.map((function(t){return t.key===n?Object(c.a)(Object(c.a)({},t),{},Object(p.a)({},"author",r)):t})));var r,n}})}),Object(x.jsx)(y.a,{onClick:function(){return e=t.key,void o(a.filter((function(t){return t.key!==e})));var e},children:Object(x.jsx)(S.a,{style:{marginTop:"0.5rem"}})})," "]},e)})),Object(x.jsx)(O.a,{className:"new-author-button",children:Object(x.jsx)(y.a,{onClick:function(){o([].concat(Object(i.a)(a),[{author:"",key:Object(s.a)()}]))},variant:"outlined",color:"primary",style:{marginBottom:"20px",marginTop:"20px"},children:a.length>0?"Co-author":"Add author"})}),Object(x.jsx)(f.a,{label:"Year",type:"number",helperText:"from 1800",value:k,onChange:function(t){return T(t.target.value)},InputProps:{inputProps:{min:1800}},style:{marginBottom:"20px",marginRight:"2rem"}}),Object(x.jsx)(f.a,{label:"Raiting",type:"number",helperText:"from 0 to 10",onChange:function(t){return L(t.target.value)},value:D,InputProps:{inputProps:{min:0,max:10}},style:{marginBottom:"30px"}}),Object(x.jsxs)(O.a,{children:[Object(x.jsx)(f.a,{label:"ISBN",inputProps:{maxLength:17},type:"text",onChange:function(t){return F(t.target.value)},value:q(U)?W.replace(/[^a-zA-Z0-9]/g,"-"):void 0,style:{marginBottom:"30px"}})," ",""!==U?q(U)?Object(x.jsx)(B.a,{style:{color:"green",marginTop:"1rem"}}):Object(x.jsx)(C.a,{style:{color:"red",marginTop:"1rem"}}):null]}),Object(x.jsx)(y.a,{onClick:function(){b.firestore().collection("books").add({author:a.map((function(t){return t.author})).filter((function(t){return""!==t})),year:k?Number.parseInt(k):null,title:h,raiting:D?Number.parseInt(D):null,ISBN:q(U)?W:null}).then((function(){o([]),m(""),T(""),L(0),F("")}))},variant:"contained",color:"primary",size:"large",disabled:0===a.length||!!(""===h||k&&(k<1800||k>(new Date).getFullYear()+3)||D&&(D>10||D<0)||""===a[0].author),style:{marginBottom:"30px"},children:"ADD new book"})]}):Object(x.jsxs)(O.a,{className:"delete-form",children:[Object(x.jsxs)(A.a,{style:{marginTop:"20px"},children:[Object(x.jsx)(N.a,{value:J,onChange:function(t){G(t.target.value)},children:t.books.map((function(t){return Object(x.jsx)(I.a,{value:t.title,children:t.title})}))}),Object(x.jsx)(w.a,{style:{marginBottom:"20px"},children:"Choose book which you want to delete"})]}),Object(x.jsx)(O.a,{children:Object(x.jsxs)(y.a,{variant:"contained",onClick:function(e){return function(){if(!J)return alert("\u0421\u043f\u0435\u0440\u0432\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0443");var e=t.books.filter((function(t){return t.title===J}))[0].id;b.firestore().collection("books").doc(e).delete().then((function(){return console.log("\u0412\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u0443\u0434\u0430\u043b\u0438\u043b\u0438 \u043a\u043d\u0438\u0433\u0443, \u043d\u0443 \u043a\u0430\u043a \u043d\u0435 \u0441\u0442\u044b\u0434\u043d\u043e...")})).catch((function(t){return console.log("error while removing",t)}))}()},color:"secondary",startIcon:Object(x.jsx)(S.a,{}),size:"large",disabled:!J,style:{marginBottom:"20px"},children:[" ","DELETE BOOK"]})})]})]})})},_=r(148),D=r(78),L=r.n(D);var R=function(){return Object(x.jsx)("div",{className:"header",children:Object(x.jsxs)(d.a,{variant:"h2",gutterBottom:!0,style:{color:"white"},children:[Object(x.jsx)(L.a,{style:{fontSize:"3rem",color:"white"}})," ","BookStack"]})})},K={"TITLE-ASC":{column:"title",direction:"asc"},"TITLE-DESC":{column:"title",direction:"desc"}};var W=function(){var t=Object(n.useState)("TITLE-ASC"),e=Object(l.a)(t,2),r=e[0],a=e[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"TITLE-ASC",e=Object(n.useState)([]),r=Object(l.a)(e,2),a=r[0],o=r[1];return Object(n.useEffect)((function(){var e=b.firestore().collection("books").orderBy(K[t].column,K[t].direction).onSnapshot((function(t){var e=t.docs.map((function(t){return Object(c.a)({id:t.id},t.data())}));o(e)}));return function(){return e()}}),[t]),a}(r),u=Object(i.a)(new Set(o.map((function(t){return t.year})))).sort((function(t,e){return(null===e)-(null===t)||+(t>e)||-(t<e)})).reverse(),j=[];u.forEach((function(t){var e=t,r={},n=[];o.forEach((function(t){t.year===e&&n.push(t)})),r.year=e,r.listOfBooks=n,j.push(r)}));var p=(new Date).getFullYear(),f=o.length>0?function(t){for(var e=t.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),n=[t[r],t[e]];t[e]=n[0],t[r]=n[1]}return t}(o.filter((function(t){return t.year<p-3}))).reduce((function(t,e){return t.raiting>e.raiting?t:e})):null;return Object(x.jsxs)("div",{className:"Main",children:[Object(x.jsx)(R,{}),Object(x.jsx)("label",{style:{marginRight:"1%",color:"whitesmoke"},children:"Sort by"}),Object(x.jsxs)(N.a,{value:r,onChange:function(t){return a(t.target.value)},style:{color:"whitesmoke"},children:[Object(x.jsx)(I.a,{value:"TITLE-ASC",children:"Author (A-Z)"}),Object(x.jsx)(I.a,{value:"TITLE-DESC",children:"Author (Z-A)"})]}),Object(x.jsxs)("ul",{children:[f?Object(x.jsx)(O.a,{maxWidth:"md",children:Object(x.jsx)(h.a,{style:{marginLeft:"10%",marginBottom:"10px",marginRight:"10%",display:"block"},children:Object(x.jsxs)(m.a,{style:{margin:"300px, 200px"},children:[Object(x.jsx)(d.a,{variant:"h5",gutterBottom:!0,align:"left",children:"Recomended"}),Object(x.jsxs)(d.a,{variant:"h6",gutterBottom:!0,color:"textPrimary",display:"block",children:['"',f.title,'" by ',f.author.join(","),", ",f.year]}),Object(x.jsx)(d.a,{variant:"subtitle2",gutterBottom:!0,color:"textPrimary",display:"block",children:f.raiting?10===f.raiting?"\u0414\u0415\u0421\u042f\u0422\u042c \u0418\u0417 \u0414\u0415\u0421\u042f\u0422\u0418 \u041d\u0410 \u041a\u041e\u041d\u0427\u0418\u041a\u0410\u0425 \u041f\u0410\u041b\u042c\u0426\u0415\u0412":f.raiting+"/10":"not rated yet"}),Object(x.jsx)(d.a,{variant:"subtitle2",gutterBottom:!0,color:"textPrimary",display:"block",children:f.ISBN?"ISBN: "+f.ISBN:null})]})})}):Object(x.jsx)(_.a,{}),j.map((function(t,e){return Object(x.jsx)(O.a,{maxWidth:"md",children:Object(x.jsx)(g,{year:t.year,listOfBooks:t.listOfBooks},e)})})),Object(x.jsx)(P,{books:o},Object(s.a)())]})]})};var F=function(){return Object(x.jsx)("footer",{children:Object(x.jsx)(O.a,{maxWidth:!1,className:"footer",children:Object(x.jsx)(d.a,{variant:"body2",gutterBottom:!0,className:"footer-text",children:"Made with \ud83c\udfa7 by Keyjey101 \xa9 2021"})})})};var H=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(W,{}),Object(x.jsx)(F,{})]})};o.a.render(Object(x.jsx)(H,{}),document.getElementById("root"))},95:function(t,e,r){},96:function(t,e,r){}},[[104,1,2]]]);
//# sourceMappingURL=main.960cf158.chunk.js.map