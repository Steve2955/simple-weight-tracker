(function(e){function t(t){for(var s,o,c=t[0],d=t[1],i=t[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);l&&l(t);while(f.length)f.shift()();return n.push.apply(n,i||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,c=1;c<a.length;c++){var d=a[c];0!==r[d]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},r={app:0},n=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/simple-weight-tracker/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=d;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("99af"),a("4de4"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{on:{openAddRecordModal:function(t){e.showAddRecordModal=!0}}}),a("div",{staticClass:"container"},[e.records.length>1?a("RecordsChart",{attrs:{records:e.records}}):e._e(),a("RecordsList",{attrs:{records:e.records},on:{removeRecord:e.removeRecord,editRecord:e.editRecord}})],1),a("AddRecordModal",{attrs:{active:e.showAddRecordModal},on:{"update:active":function(t){e.showAddRecordModal=t},addRecord:e.addRecord}}),a("EditRecordModal",{attrs:{active:e.showEditRecordModal,record:e.record},on:{"update:active":function(t){e.showEditRecordModal=t},updateRecord:e.updateRecord}})],1)},n=[],o=(a("c740"),a("a434"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar fixed-top navbar-dark bg-primary"},[a("span",{staticClass:"navbar-brand mb-0 h1"},[e._v("Simple Weight Tracker")]),a("form",{staticClass:"form-inline ml-auto"},[a("button",{staticClass:"btn btn-secondary d-none d-sm-block",attrs:{type:"button"},on:{click:function(t){return e.$emit("openAddRecordModal")}}},[e._v("New Record")]),a("button",{staticClass:"btn btn-secondary font-weight-bold d-block d-sm-none py-1",attrs:{type:"button"},on:{click:function(t){return e.$emit("openAddRecordModal")}}},[a("span",{staticClass:"material-icons pt-1"},[e._v("add")])])])])}),c=[],d={name:"Header"},i=d,l=a("2877"),u=Object(l["a"])(i,o,c,!1,null,null,null),f=u.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card mb-3"},[e.records.length?a("div",{staticClass:"card-body"},e._l(e.records,(function(t,s){return a("div",{key:s},[a("RecordListItem",{attrs:{record:t},on:{removeRecord:function(a){return e.$emit("removeRecord",t)},editRecord:function(a){return e.$emit("editRecord",t)}}}),s!==e.records.length-1?a("hr"):e._e()],1)})),0):a("div",{staticClass:"card-body mt-3"},[a("p",{staticClass:"text-center h-4"},[e._v("No records, yet")])])])},m=[],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex"},[a("span",[a("strong",[e._v(e._s(e.record.weight)+" kg")])]),a("span",{staticClass:"ml-2"},[a("small",[e._v(e._s(e._f("formatDate")(e.record.date)))])]),a("span",{staticClass:"material-icons ml-auto mr-2",on:{click:function(t){return e.$emit("removeRecord",e.record)}}},[e._v("remove_circle_outline")]),a("span",{staticClass:"material-icons mx-2",on:{click:function(t){return e.$emit("editRecord",e.record)}}},[e._v("create")])])},h=[],j={name:"RecordListItem",props:{record:Object}},v=j,g=Object(l["a"])(v,p,h,!1,null,null,null),y=g.exports,w={name:"RecordList",components:{RecordListItem:y},props:{records:Array}},_=w,R=Object(l["a"])(_,b,m,!1,null,null,null),C=R.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card mb-3"},[a("canvas",{staticClass:"my-3",attrs:{id:"weightChart"}})])}],M=(a("d81d"),a("30ef"),{name:"RecordsChart",props:{records:Array},data:function(){return{chart:void 0,config:void 0}},mounted:function(){var e=document.getElementById("weightChart").getContext("2d");this.config={type:"line",data:{labels:this.records.map((function(e){return new Date(e.date)})),datasets:[{backgroundColor:"#F3969A",borderColor:"#E0878B",data:this.records.map((function(e){return e.weight}))}]},options:{legend:{display:!1},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YYYY HH:mm",tooltipFormat:"ll HH:mm"},ticks:{source:"labels"},scaleLabel:{display:!1}}],yAxes:[{scaleLabel:{display:!1}}]}}},this.chart=new Chart(e,this.config)},watch:{records:function(e){this.config.data.labels=e.map((function(e){return new Date(e.date)})),this.config.data.datasets[0].data=e.map((function(e){return e.weight})),this.chart.update()}}}),$=M,O=Object(l["a"])($,k,x,!1,null,null,null),E=O.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal",attrs:{id:"addRecordModal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[e._m(0),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.weight,expression:"weight",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"0",placeholder:"Enter your weight","aria-label":"your weight","aria-describedby":"basic-addon2"},domProps:{value:e.weight},on:{input:function(t){t.target.composing||(e.weight=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._m(1)])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){return e.$emit("update:active",!1)}}},[e._v("Cancel")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.submitRecord()}}},[e._v("Add Record")])])])])])},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v("Add new Record")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[e._v("kg")])])}],S=a("1157"),D=a.n(S),L={name:"AddRecordModal",data:function(){return{weight:void 0}},props:{active:Boolean},watch:{active:function(e){D()("#addRecordModal").modal(e?"show":"hide")}},methods:{submitRecord:function(){!this.weight||this.weight<=0||(this.$emit("addRecord",this.weight),this.$emit("update:active",!1),this.weight=void 0)}}},N=L,P=Object(l["a"])(N,z,A,!1,null,null,null),H=P.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal",attrs:{id:"editRecordModal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[e._m(0),a("div",{staticClass:"modal-body"},[e.record?a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.record.weight,expression:"record.weight",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"0",placeholder:"Enter your weight","aria-label":"your weight","aria-describedby":"basic-addon2"},domProps:{value:e.record.weight},on:{input:function(t){t.target.composing||e.$set(e.record,"weight",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._m(1)]):e._e()]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){return e.$emit("update:active",!1)}}},[e._v("Cancel")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.updateRecord}},[e._v("Save changes")])])])])])},I=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v("Edit Record")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[e._v("kg")])])}],F={name:"EditRecordModal",props:{active:Boolean,record:Object},watch:{active:function(e){D()("#editRecordModal").modal(e?"show":"hide")}},methods:{updateRecord:function(){this.$emit("updateRecord",this.record),this.$emit("update:active",!1),this.weight=void 0}}},T=F,Y=Object(l["a"])(T,J,I,!1,null,null,null),B=Y.exports,U={name:"App",components:{Header:f,RecordsList:C,RecordsChart:E,AddRecordModal:H,EditRecordModal:B},data:function(){return{records:[],weight:void 0,record:void 0,showAddRecordModal:!1,showEditRecordModal:!1}},methods:{addRecord:function(e){var t=this.records,a=Date.now();t.push({weight:e,date:a})},editRecord:function(e){this.record=Object.assign({},e),this.showEditRecordModal=!0},updateRecord:function(e){var t=this.records,a=t.findIndex((function(t){var a=t.date;return a===e.date}));this.$set(t,a,e),this.record=void 0},removeRecord:function(e){var t=this.records,a=t.findIndex((function(t){var a=t.date;return a===e.date}));-1!==a&&t.splice(a,1)}},mounted:function(){localStorage.records&&(this.records=JSON.parse(localStorage.records))},watch:{records:function(e){localStorage.records=JSON.stringify(e)}}},q=U,W=(a("a96a"),Object(l["a"])(q,r,n,!1,null,"97b275ac",null)),G=W.exports;a("a89b"),a("4989");s["a"].config.productionTip=!1,s["a"].filter("formatDate",(function(e){var t=new Date(e),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=t.getFullYear(),r=a[t.getMonth()],n=t.getDate(),o="0".concat(t.getHours()),c="0".concat(t.getMinutes());return"".concat(n,". ").concat(r," ").concat(s,", ").concat(o.substr(-2),":").concat(c.substr(-2))})),new s["a"]({render:function(e){return e(G)}}).$mount("#app")},a89b:function(e,t,a){},a96a:function(e,t,a){"use strict";var s=a("d1d2"),r=a.n(s);r.a},d1d2:function(e,t,a){}});
//# sourceMappingURL=app.b6119600.js.map