(function(e){function t(t){for(var s,i,d=t[0],u=t[1],o=t[2],c=0,m=[];c<d.length;c++)i=d[c],r[i]&&m.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,d=1;d<n.length;d++){var u=n[d];0!==r[u]&&(s=!1)}s&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},r={app:0},a=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-week-3-student-sign-in/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var o=0;o<d.length;o++)t(d[o]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"197b":function(e,t,n){},"3d71":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NewStudentForm",{on:{"student-added":e.newStudentAdded}}),n("StudentTable",{attrs:{students:e.students},on:{"student-present":e.studentArrivedOrLeft,"delete-student":e.studentDeleted}}),n("StudentMessage",{attrs:{message:e.message,name:e.name}})],1)},a=[],i=(n("7f7f"),n("55dd"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.errors&&e.errors.length>0,expression:"errors && errors.length > 0"}],staticClass:"alert alert-danger"},e._l(e.errors,function(t){return n("li",{key:t},[e._v(e._s(t))])}),0),n("div",{staticClass:"card add-student m-2 p-2"},[n("form",[n("h4",{staticClass:"card-title"},[e._v("Add new student")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newStudentName,expression:"newStudentName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:e.newStudentName},on:{input:function(t){t.target.composing||(e.newStudentName=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"starID"}},[e._v("Star ID")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newStarID,expression:"newStarID",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"starID"},domProps:{value:e.newStarID},on:{input:function(t){t.target.composing||(e.newStarID=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),n("button",{staticClass:"btn btn-primary",on:{click:function(t){return t.preventDefault(),e.addStudent(t)}}},[e._v("Add")])])])])}),d=[],u={name:"NewStudentForm",data:function(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent:function(){if(this.errors=[],this.newStudentName&&this.newStarID){var e={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",e),this.newStudentName="",this.newStarID=""}else this.errors.push("Name and StarID are required.")}}},o=u,l=(n("a07e"),n("2877")),c=Object(l["a"])(o,i,d,!1,null,null,null),m=c.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"card student-list m-2 p-2"},[n("h4",{staticClass:"card-title"},[e._v("Students")]),n("div",{staticClass:"edit-table-toggle form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.editTable,expression:"editTable"}],staticClass:"form-check-input",attrs:{id:"edit-table",type:"checkbox"},domProps:{checked:Array.isArray(e.editTable)?e._i(e.editTable,null)>-1:e.editTable},on:{change:function(t){var n=e.editTable,s=t.target,r=!!s.checked;if(Array.isArray(n)){var a=null,i=e._i(n,a);s.checked?i<0&&(e.editTable=n.concat([a])):i>-1&&(e.editTable=n.slice(0,i).concat(n.slice(i+1)))}else e.editTable=r}}}),n("label",{staticClass:"form-check-label",attrs:{for:"edit-table"}},[e._v("Edit table?")])]),n("div",{attrs:{id:"student-table"}},[n("table",{staticClass:"table"},[n("tr",[n("th",[e._v("Name")]),n("th",[e._v("StarID")]),n("th",[e._v("Present?")]),n("th",{directives:[{name:"show",rawName:"v-show",value:e.editTable,expression:"editTable"}]},[e._v("Delete")])]),e._l(e.students,function(t){return n("StudentRow",{key:t.name,attrs:{student:t,edit:e.editTable},on:{"student-present":e.studentArrivedOrLeft,"delete-student":e.studentDeleted}})})],2)])])])},p=[],v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("td",[e._v(e._s(e.student.name))]),s("td",[e._v(e._s(e.student.starID))]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.student.present,expression:"student.present"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.student.present)?e._i(e.student.present,null)>-1:e.student.present},on:{change:[function(t){var n=e.student.present,s=t.target,r=!!s.checked;if(Array.isArray(n)){var a=null,i=e._i(n,a);s.checked?i<0&&e.$set(e.student,"present",n.concat([a])):i>-1&&e.$set(e.student,"present",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(e.student,"present",r)},function(t){return e.checked(e.student)}]}})]),s("td",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}]},[s("img",{staticClass:"delete-icon",attrs:{src:n("ed3a")},on:{click:function(t){return e.deleteStudent(e.student)}}})])])},h=[],A={name:"StudentTable",props:{student:Object,edit:Boolean},methods:{checked:function(e){this.$emit("student-present",e)},deleteStudent:function(e){confirm("Delete ".concat(e.name,"?"))&&this.$emit("delete-student",e)}}},b=A,w=Object(l["a"])(b,v,h,!1,null,null,null),g=w.exports,S={name:"StudentTable",components:{StudentRow:g},data:function(){return{editTable:!1}},props:{students:Array},methods:{studentArrivedOrLeft:function(e){this.$emit("student-present",e)},studentDeleted:function(e){this.$emit("delete-student",e)}}},y=S,C=(n("b1d5"),Object(l["a"])(y,f,p,!1,null,null,null)),x=C.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("transition",{attrs:{name:"fade"}},[e.seeMessage?n("div",{staticClass:"alert alert-success"},[e._v(e._s(e.message)+" "+e._s(e.name))]):e._e()])],1)},M=[],_={name:"StudentMessage",data:function(){return{seeMessage:!1}},props:{message:String,name:String},watch:{message:function(){var e=this;this.seeMessage=!0,setTimeout(function(){e.seeMessage=!1},3e3)}}},k=_,D=(n("e517"),Object(l["a"])(k,I,M,!1,null,null,null)),T=D.exports,j={name:"app",data:function(){return{students:[{name:"example",starID:"aa1234aa",present:!0}],message:"",name:""}},components:{NewStudentForm:m,StudentTable:x,StudentMessage:T},methods:{newStudentAdded:function(e){this.students.push(e),this.students.sort(function(e,t){return e.name.toLowerCase()>t.name.toUpperCase()?-1:1})},studentArrivedOrLeft:function(e){this.message=e.present?"Welcome,":"Goodbye, ",this.name=e.name},studentDeleted:function(e){this.students=this.students.filter(function(t){return t!=e})}}},O=j,N=Object(l["a"])(O,r,a,!1,null,null,null),E=N.exports,U=n("9f7b"),P=n.n(U);n("f9e3"),n("2dd8");s["a"].use(P.a),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(E)}}).$mount("#app")},"85a7":function(e,t,n){},a07e:function(e,t,n){"use strict";var s=n("3d71"),r=n.n(s);r.a},b1d5:function(e,t,n){"use strict";var s=n("197b"),r=n.n(s);r.a},e517:function(e,t,n){"use strict";var s=n("85a7"),r=n.n(s);r.a},ed3a:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM2SURBVGhD7ZnLbtNAFIYjbgt23FbAC7BCSmYIUqWIcalYsCTitoMtrItgwQKJdE0rlcsjoCJVFCQeAygPAJQNAVTiJCqgZjhneiyF5Iztie1JkfxLnxTLM+f8x554xuNKqVKlsks3m3t7s7LeVfIusNINxAfgRxjI3wj+7gZy3ZyDNthW36/soe7TU3+udhIMLoRKfAGD2oUwEBvYt9eQJyicP3Ua1aOhkk+BX5w5FzAGFLKMMSl8sYIrd62rxHfOTEbaGJvS5C/dPHUArtQzJnGuQBGPdbW6n9LmI32xehDMv+YSFgEU8QpzUvpsoivvzXwEFLGay53wMWxs4HAiG5MJAlznAvskDGqXyY6bOhdOH4NJ5xsX1DPtn4E4QrbSC28fE2xKiCWylU5mhnWZpM7Xdf/2Tf4cg2kLfbhzHOilp+rHyV6y4I+7wAViASN/3qxpvb2ttx7c49sMgW2wLfZxLKJF9uKFiywYPhtckDEi85ESiojMR3IpAgr4lGoB2A/EWS4AR//WjX8MGVmKGDVvBMcYY7StjZ6qSrJpl1kSM51t2IwNF5GmTSpmxR2yaReM/xds5xjiDOZm3iCek027oOH6eMdkWKMDOB4M6IA0sXlAyfdk0y56e+IDJMAWMaws5hGYWMmmXU7PfwZTBF75UcGdyGQeQG9k0658ChgZNigoyksB//0Qwj8K2zkB1jzeidHhlKUIJd6RTbuggBW2cwyseTIad46LFU+ax+hunsiUmCebdpkNKq4zg/elRFATZNMuWsx95gKMsRsXcyho3OKCsERFJJiPiIpwMY+ESjwke8nC7T6n+QCMFPxCs+X0QoOCRd0yF2w6iEWylV74Io0TBx/QI0p+3ZyrHyZbbgrPyatsUI/A8GmSnckEf54nXGAvKPmIbEyuna1FscomKBDMiR9OyEY2mc1dJda4REUAw+Zlbpu7kXCj1c9ml1jUjcY+Spu/QnXmCiRqjyfOTLuj5CVKU6zMIzYQS06TnQWcpPCqb87MHKLw/kQzdgv4yJmLA/vg8sB5hi1CuMjCTSfct8E1O7544Hc0vEPIzjc18ZbOzeOqMvXCrFSpUjGqVP4C/xYkeiCFjZAAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.e0906c73.js.map