(function(e){function t(t){for(var r,n,c=t[0],d=t[1],i=t[2],u=0,f=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&f.push(s[n][0]),s[n]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,c=1;c<a.length;c++){var d=a[c];0!==s[d]&&(r=!1)}r&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},s={app:0},o=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/simple-weight-tracker/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"160c":function(e,t,a){},"2c96":function(e,t,a){"use strict";var r=a("df3a"),s=a.n(r);s.a},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("99af"),a("4de4"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=a("f029"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{on:{openAddRecordModal:function(t){e.showAddRecordModal=!0}}}),a("div",{staticClass:"container"},[e.records.length>1?a("RecordsChart",{attrs:{records:e.records}}):e._e(),a("RecordsList",{attrs:{records:e.records},on:{removeRecord:e.removeRecord,editRecord:e.editRecord}})],1),a("AddRecordModal",{attrs:{active:e.showAddRecordModal},on:{"update:active":function(t){e.showAddRecordModal=t},addRecord:e.addRecord}}),a("EditRecordModal",{attrs:{active:e.showEditRecordModal,record:e.record},on:{"update:active":function(t){e.showEditRecordModal=t},updateRecord:e.updateRecord}})],1)},n=[],c=(a("c740"),a("d81d"),a("a434"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar fixed-top navbar-dark bg-primary"},[a("span",{staticClass:"navbar-brand mb-0 h1"},[e._v("Simple Weight Tracker")]),a("form",{staticClass:"form-inline ml-auto"},[a("button",{staticClass:"btn btn-secondary d-none d-sm-block",attrs:{type:"button"},on:{click:function(t){return e.$emit("openAddRecordModal")}}},[e._v("New Record")]),a("button",{staticClass:"btn btn-secondary font-weight-bold d-block d-sm-none py-1",attrs:{type:"button"},on:{click:function(t){return e.$emit("openAddRecordModal")}}},[a("span",{staticClass:"material-icons pt-1"},[e._v("add")])])])])}),d=[],i={name:"Header"},l=i,u=a("2877"),f=Object(u["a"])(l,c,d,!1,null,null,null),b=f.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card mb-3"},[e.records.length?a("div",{staticClass:"card-body"},e._l(e.records,(function(t,r){return a("div",{key:r},[a("RecordListItem",{attrs:{record:t},on:{removeRecord:function(a){return e.$emit("removeRecord",t)},editRecord:function(a){return e.$emit("editRecord",t)}}}),r!==e.records.length-1?a("hr"):e._e()],1)})),0):a("div",{staticClass:"card-body mt-3"},[a("p",{staticClass:"text-center h-4"},[e._v("No records, yet")])])])},p=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex"},[a("span",[a("strong",[e._v(e._s(e.record.weight)+" kg")])]),a("span",{staticClass:"ml-2"},[a("small",[e._v(e._s(e._f("formatDate")(e.record.date)))])]),a("span",{staticClass:"material-icons clickable ml-auto mr-2",on:{click:function(t){return e.$emit("removeRecord",e.record)}}},[e._v("remove_circle_outline")]),a("span",{staticClass:"material-icons clickable mx-2",on:{click:function(t){return e.$emit("editRecord",e.record)}}},[e._v("create")])])},j=[],v={name:"RecordListItem",props:{record:Object}},g=v,y=(a("2c96"),Object(u["a"])(g,h,j,!1,null,"75c7ade3",null)),w=y.exports,_={name:"RecordList",components:{RecordListItem:w},props:{records:Array}},k=_,C=Object(u["a"])(k,m,p,!1,null,null,null),R=C.exports,M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card mb-3"},[a("canvas",{staticClass:"my-3",attrs:{id:"weightChart"}})])}],O=(a("30ef"),{name:"RecordsChart",props:{records:Array},data:function(){return{chart:void 0,config:void 0}},mounted:function(){var e=document.getElementById("weightChart").getContext("2d");this.config={type:"line",data:{labels:this.records.map((function(e){return new Date(e.date)})),datasets:[{backgroundColor:"#F3969A",borderColor:"#E0878B",data:this.records.map((function(e){return e.weight}))}]},options:{legend:{display:!1},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YYYY HH:mm",tooltipFormat:"ll HH:mm"},scaleLabel:{display:!1}}],yAxes:[{scaleLabel:{display:!1}}]}}},this.chart=new Chart(e,this.config)},watch:{records:function(e){this.config.data.labels=e.map((function(e){return new Date(e.date)})),this.config.data.datasets[0].data=e.map((function(e){return e.weight})),this.chart.update()}}}),$=O,E=Object(u["a"])($,M,x,!1,null,null,null),z=E.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal",attrs:{id:"addRecordModal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[e._m(0),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.weight,expression:"weight",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"0",placeholder:"Enter your weight","aria-label":"your weight","aria-describedby":"basic-addon2"},domProps:{value:e.weight},on:{input:function(t){t.target.composing||(e.weight=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._m(1)])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){return e.$emit("update:active",!1)}}},[e._v("Cancel")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.submitRecord()}}},[e._v("Add Record")])])])])])},D=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v("Add new Record")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[e._v("kg")])])}],S=a("1157"),N=a.n(S),P={name:"AddRecordModal",data:function(){return{weight:void 0}},props:{active:Boolean},watch:{active:function(e){N()("#addRecordModal").modal(e?"show":"hide")}},methods:{submitRecord:function(){!this.weight||this.weight<=0||(this.$emit("addRecord",this.weight),this.$emit("update:active",!1),this.weight=void 0)}}},L=P,F=Object(u["a"])(L,A,D,!1,null,null,null),H=F.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal",attrs:{id:"editRecordModal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[e._m(0),a("div",{staticClass:"modal-body"},[e.record?a("div",{staticClass:"input-group mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.record.weight,expression:"record.weight",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"0",placeholder:"Enter your weight","aria-label":"your weight","aria-describedby":"basic-addon2"},domProps:{value:e.record.weight},on:{input:function(t){t.target.composing||e.$set(e.record,"weight",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._m(1)]):e._e(),e.record?a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e._date,expression:"_date"}],staticClass:"form-control",attrs:{type:"date",min:"0",placeholder:"Date of record","aria-label":"date"},domProps:{value:e._date},on:{input:function(t){t.target.composing||(e._date=t.target.value)}}})]):e._e()]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){return e.$emit("update:active",!1)}}},[e._v("Cancel")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.updateRecord}},[e._v("Save changes")])])])])])},Y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[e._v("Edit Record")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[e._v("kg")])])}],B={name:"EditRecordModal",props:{active:Boolean,record:Object},watch:{active:function(e){N()("#editRecordModal").modal(e?"show":"hide")}},computed:{_date:{get:function(){var e=this.record.date;return"".concat(e.getFullYear(),"-").concat(("0"+(e.getMonth()+1)).substr(-2),"-").concat(("0"+e.getDate()).substr(-2))},set:function(e){this.record.date=new Date(e)}}},methods:{updateRecord:function(){this.$emit("updateRecord",this.record),this.$emit("update:active",!1),this.weight=void 0}}},I=B,T=Object(u["a"])(I,J,Y,!1,null,null,null),U=T.exports,q={name:"App",components:{Header:b,RecordsList:R,RecordsChart:z,AddRecordModal:H,EditRecordModal:U},data:function(){return{records:[],weight:void 0,record:void 0,showAddRecordModal:!1,showEditRecordModal:!1}},methods:{addRecord:function(e){var t=this.records,a=Date.now(),r=this.$uuid.v1();t.push({weight:e,date:a,id:r}),t=t.sort((function(e,t){return e.date-t.date}))},editRecord:function(e){this.record=Object.assign({},e),this.showEditRecordModal=!0},updateRecord:function(e){this._records=this._records.map((function(t){return t.id===e.id?e:t})),this.record=void 0},removeRecord:function(e){var t=this._records,a=t.findIndex((function(t){var a=t.id;return a===e.id}));-1!==a&&t.splice(a,1)}},mounted:function(){localStorage.records&&(this._records=JSON.parse(localStorage.records))},computed:{_records:{get:function(){return this.records},set:function(e){e=e.map((function(e){return e.date instanceof Date||(e.date=new Date(e.date)),e})),this.records=e.sort((function(e,t){return t.date-e.date}))}}},watch:{_records:function(e){localStorage.records=JSON.stringify(e)}}},W=q,G=(a("62e0"),Object(u["a"])(W,o,n,!1,null,"3bc99f2e",null)),K=G.exports,Q=(a("a89b"),a("4989"),a("9483"));Object(Q["a"])("".concat("/simple-weight-tracker/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].use(s["a"]),r["a"].config.productionTip=!1,r["a"].filter("formatDate",(function(e){var t=new Date(e),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=t.getFullYear(),s=a[t.getMonth()],o=t.getDate(),n="0".concat(t.getHours()),c="0".concat(t.getMinutes());return"".concat(o,". ").concat(s," ").concat(r,", ").concat(n.substr(-2),":").concat(c.substr(-2))})),new r["a"]({render:function(e){return e(K)}}).$mount("#app")},"62e0":function(e,t,a){"use strict";var r=a("160c"),s=a.n(r);s.a},a89b:function(e,t,a){},df3a:function(e,t,a){}});
//# sourceMappingURL=app.55d048f1.js.map