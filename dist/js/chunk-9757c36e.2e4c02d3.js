(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9757c36e"],{2532:function(t,e,a){"use strict";var s=a("23e7"),i=a("e330"),r=a("5a34"),o=a("1d80"),n=a("577e"),l=a("ab13"),c=i("".indexOf);s({target:"String",proto:!0,forced:!l("includes")},{includes:function(t){return!!~c(n(o(this)),n(r(t)),arguments.length>1?arguments[1]:void 0)}})},"31ff":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-px-spacing"},[a("portal",{attrs:{to:"breadcrumb"}},[a("ul",{staticClass:"navbar-nav flex-row"},[a("li",[a("div",{staticClass:"page-header"},[a("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"javascript:;"}},[t._v("Dashboard")])]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[a("span",[t._v("Question Categories")])])])])])])])]),a("div",{staticClass:"row layout-top-spacing"},[a("div",{staticClass:"col-xl-12 col-lg-12 col-sm-12 layout-spacing"},[a("div",{staticClass:"panel p-0"},[a("div",{staticClass:"custom-table table3"},[a("div",{staticClass:"table-header"},[a("div",{staticClass:"d-flex align-items-center"},[a("span",[t._v("Results :")]),a("span",{staticClass:"ml-2"},[a("b-select",{staticClass:"h-auto",model:{value:t.table_option2.page_size,callback:function(e){t.$set(t.table_option2,"page_size",e)},expression:"table_option2.page_size"}},[a("b-select-option",{attrs:{value:"5"}},[t._v("5")]),a("b-select-option",{attrs:{value:"10"}},[t._v("10")]),a("b-select-option",{attrs:{value:"20"}},[t._v("20")]),a("b-select-option",{attrs:{value:"50"}},[t._v("50")])],1)],1)]),a("div",{staticClass:"header-search"},[a("b-input",{attrs:{size:"sm",placeholder:"Search..."},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("div",{staticClass:"search-image"},[a("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),a("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])],1)]),a("b-table",{ref:"basic_table2",attrs:{responsive:"",hover:"",bordered:"",items:t.filteredList,fields:t.columns2,"per-page":t.table_option2.page_size,"current-page":t.table_option2.current_page,filter:t.table_option2.search_text,"sort-by":"id","show-empty":!0},on:{filtered:t.on_filtered,"sort-changed":t.clear_selection},scopedSlots:t._u([{key:"cell(actions)",fn:function(e){return[a("span",{directives:[{name:"b-modal",rawName:"v-b-modal",value:t.modalUpdateCategory(e.item.id),expression:"modalUpdateCategory(data.item.id)"}]},[a("svg",{staticClass:"feather feather-edit-2 text-success",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}})])]),a("b-modal",{attrs:{id:"modalUpdateCategory"+e.item.id,"hide-footer":"",title:"Modify Category","title-tag":"h4","modal-class":"register-modal","footer-class":"justify-content-center"}},[a("form",{staticClass:"mt-0"},[a("div",{staticClass:"form-group"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"currentColor",d:"m21.558 3.592l-1.15-1.15a1.49 1.49 0 0 0-2.12 0L13 7.731V11h3.27l5.288-5.288a1.49 1.49 0 0 0 0-2.12ZM15.579 9.45h-1.03V8.42L18 4.973l1.03 1.03Z"}}),a("path",{attrs:{fill:"currentColor",d:"M19 19H5V5h6V3H5a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2v-6h-2Z"}})]),a("b-form-textarea",{staticClass:"mb-2",class:[t.is_submit_updatecat?t.form.typeC&&t.form.typeC.length<20&&t.form.typeC.length>4?"is-valid":"is-invalid":""],attrs:{type:"text",placeholder:"Enter your reply content here"},model:{value:e.item.typeC,callback:function(a){t.$set(e.item,"typeC",a)},expression:"data.item.typeC"}}),a("b-form-valid-feedback",[t._v("Looks good!")]),a("b-form-invalid-feedback",{class:{"d-block":t.is_submit_updatecat&&!t.form.typeC}},[t._v("Please Enter content between 4 and 20 characters")]),a("div",{staticClass:"mt-4 mb-5"},[a("svg",{staticClass:"mb-1",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[a("g",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[a("path",{attrs:{d:"M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z"}}),a("circle",{attrs:{cx:"8.5",cy:"8.5",r:"2.5"}}),a("path",{attrs:{d:"M14.526 12.621L6 22h12.133A3.867 3.867 0 0 0 22 18.133V18c0-.466-.175-.645-.49-.99l-4.03-4.395a2 2 0 0 0-2.954.006Z"}})])]),a("b-file",{on:{change:t.onFileChanged}})],1)],1),a("b-button",{staticClass:"mt-2 mb-2",attrs:{variant:"primary",block:""},on:{click:function(a){return t.updatecat(e.item.typeC,e.item.id)}}},[t._v("Update")])],1)])]}},{key:"cell(imageCat)",fn:function(t){return[null!=t.item.imageCat?a("span",[a("b-avatar",{attrs:{src:"http://127.0.0.1:8000"+t.item.imageCat,size:"4rem",rounded:"lg",alt:"",srcset:""}})],1):a("span",[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"4em",height:"4em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 64 64"}},[a("path",{attrs:{fill:"currentColor",d:"M32 2C15.432 2 2 15.432 2 32.001C2 48.567 15.432 62 32 62s30-13.433 30-29.999C62 15.432 48.568 2 32 2zm22 30.001c0 4.629-1.433 8.922-3.876 12.465l-30.591-30.59A21.889 21.889 0 0 1 32 10c12.15 0 22 9.851 22 22.001zm-44 0a21.9 21.9 0 0 1 3.876-12.468l30.591 30.591A21.887 21.887 0 0 1 32 54.001c-12.15 0-22-9.852-22-22z"}})])])]}}])}),a("div",{staticClass:"table-footer"},[a("div",{staticClass:"dataTables_info"},[t._v("Showing "+t._s(t.meta2.total_items?t.meta2.start_index+1:0)+" to "+t._s(t.meta2.end_index+1)+" of "+t._s(t.meta2.total_items))]),a("div",{staticClass:"paginating-container pagination-solid flex-column align-items-right"},[a("b-pagination",{staticClass:"rounded",attrs:{"total-rows":t.table_option2.total_rows,"per-page":t.table_option2.page_size,"prev-text":"Prev","next-text":"Next","first-text":"First","last-text":"Last","first-class":"first","prev-class":"prev","next-class":"next","last-class":"last"},scopedSlots:t._u([{key:"first-text",fn:function(){return[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"}})])]},proxy:!0},{key:"prev-text",fn:function(){return[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0},{key:"last-text",fn:function(){return[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})])]},proxy:!0}]),model:{value:t.table_option2.current_page,callback:function(e){t.$set(t.table_option2,"current_page",e)},expression:"table_option2.current_page"}})],1)])],1)])])])],1)},i=[],r=a("1da1"),o=a("5530"),n=(a("96cf"),a("4de4"),a("d3b7"),a("caad"),a("2532"),a("ac1f"),a("841c"),a("d81d"),a("a630"),a("3ca3"),a("ddb0"),a("bc3a")),l=a.n(n),c=a("2f62"),d={metaInfo:{title:"Bootstrap Custom Table"},data:function(){return{items2:[],columns2:[],table_option2:{total_rows:0,current_page:1,page_size:5,search_text:""},meta2:{},is_select_all2:!1,is_submit_updatecat:!1,selected_rows2:[],search:"",category:"",form:{typeC:""}}},watch:{table_option:{handler:function(){this.get_meta(),this.clear_selection()},deep:!0},table_option1:{handler:function(){this.get_meta1(),this.clear_selection1()},deep:!0},table_option2:{handler:function(){this.get_meta2(),this.clear_selection2()},deep:!0}},created:function(){this.GetQuestioncategories()},mounted:function(){this.bind_data()},computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])({Questioncategories:"StateQuestioncategories"})),{},{filteredList:function(){var t=this;return this.Questioncategories.filter((function(e){return e.typeC.toLowerCase().includes(t.search.toLowerCase())}))}}),methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["GetQuestioncategories"])),{},{modalUpdateCategory:function(t){return"modalUpdateCategory"+t},onFileChanged:function(t){this.image=t.target.files[0]},updatecat:function(t,e){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(s.prev=0,a.form.typeC=t,a.is_submit_updatecat=!0,!(a.form.typeC&&a.form.typeC.length<20&&a.form.typeC.length>4)){s.next=12;break}return a.$bvModal.hide("modalUpdateCategory"+e),i=new FormData,null!=a.image&&i.append("imageCat",a.image),i.append("typeC",a.form.typeC),s.next=10,l.a.post("/questioncategory/questioncategory-update/"+e+"/",i);case 10:a.$swal("Good Job!","Category updated successfully !","success"),a.is_submit_updatecat=!1;case 12:s.next=17;break;case 14:throw s.prev=14,s.t0=s["catch"](0),"Il ya un errora !";case 17:case"end":return s.stop()}}),s,null,[[0,14]])})))()},bind_data:function(){this.columns2=[{key:"imageCat",label:"Image",class:"text-center  "},{key:"typeC",label:"Title"},{key:"actions",label:"Actions",class:"text-center  "}],this.table_option2.total_rows=this.Questioncategories.length,this.get_meta2()},on_filtered:function(t){this.refresh_table(t.length)},refresh_table:function(t){this.table_option.total_rows=t,this.table_option.currentPage=1},get_meta:function(){this.meta=this.get_common_meta(this.table_option)},get_common_meta:function(t){var e,a,s=t.page_size<1?1:Math.ceil(t.total_rows/t.page_size);s=Math.max(s||0,1);var i=5,r="undefined"!==typeof i&&i<s;r?(e=Math.max(t.current_page-Math.floor(i/2),1),a=e+i-1,a>s&&(a=s,e=a-i+1)):(e=1,a=s);var o=(t.current_page-1)*t.page_size,n=Math.min(o+t.page_size-1,t.total_rows-1),l=Array.from(Array(a+1-e).keys()).map((function(t){return e+t}));return{total_items:t.total_rows,current_page:t.current_page,page_size:t.page_size,total_pages:s,start_page:e,end_page:a,start_index:o,end_index:n,pages:l}},select_all:function(){this.selected_rows=this.$refs.basic_table.paginatedItems.map((function(t){return t.id})),this.is_select_all||this.clear_selection(),this.check_select_all()},check_select_all:function(){var t=this.$refs.basic_table.paginatedItems.map((function(t){return t.id}));this.is_select_all=!1,t.length==this.selected_rows.length&&(this.is_select_all=!0)},clear_selection:function(){this.is_select_all=!1,this.selected_rows=[]},on_filtered1:function(t){this.refresh_table1(t.length)},refresh_table1:function(t){this.table_option1.total_rows=t,this.table_option1.currentPage=1},get_meta1:function(){this.meta1=this.get_common_meta(this.table_option1)},select_all1:function(){this.selected_rows1=this.$refs.basic_table1.paginatedItems.map((function(t){return t.id})),this.is_select_all1||this.clear_selection1(),this.check_select_all1()},check_select_all1:function(){var t=this.$refs.basic_table1.paginatedItems.map((function(t){return t.id}));this.is_select_all1=!1,t.length==this.selected_rows1.length&&(this.is_select_all1=!0)},clear_selection1:function(){this.is_select_all1=!1,this.selected_rows1=[]},on_filtered2:function(t){this.refresh_table2(t.length)},refresh_table2:function(t){this.table_option2.total_rows=t,this.table_option2.currentPage=1},get_meta2:function(){this.meta2=this.get_common_meta(this.table_option2)},select_all2:function(){this.selected_rows2=this.$refs.basic_table2.paginatedItems.map((function(t){return t.id})),this.is_select_all2||this.clear_selection2(),this.check_select_all2()},check_select_all2:function(){var t=this.$refs.basic_table2.paginatedItems.map((function(t){return t.id}));this.is_select_all2=!1,t.length==this.selected_rows2.length&&(this.is_select_all2=!0)},clear_selection2:function(){this.is_select_all2=!1,this.selected_rows2=[]}})},u=d,h=(a("b05b"),a("2877")),p=Object(h["a"])(u,s,i,!1,null,null,null);e["default"]=p.exports},"44e7":function(t,e,a){var s=a("861d"),i=a("c6b6"),r=a("b622"),o=r("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"4df4":function(t,e,a){"use strict";var s=a("da84"),i=a("0366"),r=a("c65b"),o=a("7b0b"),n=a("9bdd"),l=a("e95a"),c=a("68ee"),d=a("07fa"),u=a("8418"),h=a("9a1f"),p=a("35a1"),_=s.Array;t.exports=function(t){var e=o(t),a=c(this),s=arguments.length,f=s>1?arguments[1]:void 0,m=void 0!==f;m&&(f=i(f,s>2?arguments[2]:void 0));var g,b,v,w,x,C,y=p(e),k=0;if(!y||this==_&&l(y))for(g=d(e),b=a?new this(g):_(g);g>k;k++)C=m?f(e[k],k):e[k],u(b,k,C);else for(w=h(e,y),x=w.next,b=a?new this:[];!(v=r(x,w)).done;k++)C=m?n(w,f,[v.value,k],!0):v.value,u(b,k,C);return b.length=k,b}},"5a34":function(t,e,a){var s=a("da84"),i=a("44e7"),r=s.TypeError;t.exports=function(t){if(i(t))throw r("The method doesn't accept regular expressions");return t}},"9bdd":function(t,e,a){var s=a("825a"),i=a("2a62");t.exports=function(t,e,a,r){try{return r?e(s(a)[0],a[1]):e(a)}catch(o){i(t,"throw",o)}}},"9f99":function(t,e,a){},a630:function(t,e,a){var s=a("23e7"),i=a("4df4"),r=a("1c7e"),o=!r((function(t){Array.from(t)}));s({target:"Array",stat:!0,forced:o},{from:i})},ab13:function(t,e,a){var s=a("b622"),i=s("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[i]=!1,"/./"[t](e)}catch(s){}}return!1}},b05b:function(t,e,a){"use strict";a("9f99")},caad:function(t,e,a){"use strict";var s=a("23e7"),i=a("4d64").includes,r=a("44d2");s({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d81d:function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").map,r=a("1dde"),o=r("map");s({target:"Array",proto:!0,forced:!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-9757c36e.2e4c02d3.js.map