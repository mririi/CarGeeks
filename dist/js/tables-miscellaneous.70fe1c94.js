(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tables-miscellaneous"],{"0bc7":function(t,e,a){},2532:function(t,e,a){"use strict";var i=a("23e7"),s=a("e330"),o=a("5a34"),r=a("1d80"),n=a("577e"),l=a("ab13"),c=s("".indexOf);i({target:"String",proto:!0,forced:!l("includes")},{includes:function(t){return!!~c(n(r(this)),n(o(t)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,a){var i=a("861d"),s=a("c6b6"),o=a("b622"),r=o("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==s(t))}},"4df4":function(t,e,a){"use strict";var i=a("da84"),s=a("0366"),o=a("c65b"),r=a("7b0b"),n=a("9bdd"),l=a("e95a"),c=a("68ee"),d=a("07fa"),p=a("8418"),u=a("9a1f"),f=a("35a1"),_=i.Array;t.exports=function(t){var e=r(t),a=c(this),i=arguments.length,h=i>1?arguments[1]:void 0,g=void 0!==h;g&&(h=s(h,i>2?arguments[2]:void 0));var m,b,v,y,w,x,k=f(e),C=0;if(!k||this==_&&l(k))for(m=d(e),b=a?new this(m):_(m);m>C;C++)x=g?h(e[C],C):e[C],p(b,C,x);else for(y=u(e,k),w=y.next,b=a?new this:[];!(v=o(w,y)).done;C++)x=g?n(y,h,[v.value,C],!0):v.value,p(b,C,x);return b.length=C,b}},"5a34":function(t,e,a){var i=a("da84"),s=a("44e7"),o=i.TypeError;t.exports=function(t){if(s(t))throw o("The method doesn't accept regular expressions");return t}},"9bdd":function(t,e,a){var i=a("825a"),s=a("2a62");t.exports=function(t,e,a,o){try{return o?e(i(a)[0],a[1]):e(a)}catch(r){s(t,"throw",r)}}},a630:function(t,e,a){var i=a("23e7"),s=a("4df4"),o=a("1c7e"),r=!o((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:r},{from:s})},ab13:function(t,e,a){var i=a("b622"),s=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[s]=!1,"/./"[t](e)}catch(i){}}return!1}},caad:function(t,e,a){"use strict";var i=a("23e7"),s=a("4d64").includes,o=a("44d2");i({target:"Array",proto:!0},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d81d:function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").map,o=a("1dde"),r=o("map");i({target:"Array",proto:!0,forced:!r},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},f69e:function(t,e,a){"use strict";a("0bc7")},fbf8:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout-px-spacing"},[i("portal",{attrs:{to:"breadcrumb"}},[i("ul",{staticClass:"navbar-nav flex-row"},[i("li",[i("div",{staticClass:"page-header"},[i("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb"},[i("li",{staticClass:"breadcrumb-item"},[i("a",{attrs:{href:"javascript:;"}},[t._v("DataTables")])]),i("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[i("span",[t._v("Miscellaneous")])])])])])])])]),t._m(0),i("div",{staticClass:"row layout-top-spacing"},[i("div",{staticClass:"col-xl-12 col-lg-12 col-sm-12 layout-spacing"},[i("div",{staticClass:"panel p-0"},[i("div",{staticClass:"custom-table"},[i("div",{staticClass:"table-header"},[i("div",{staticClass:"d-flex align-items-center"},[i("span",[t._v("Results :")]),i("span",{staticClass:"ml-2"},[i("b-select",{attrs:{size:"sm"},model:{value:t.table_option.page_size,callback:function(e){t.$set(t.table_option,"page_size",e)},expression:"table_option.page_size"}},[i("b-select-option",{attrs:{value:"5"}},[t._v("5")]),i("b-select-option",{attrs:{value:"10"}},[t._v("10")]),i("b-select-option",{attrs:{value:"20"}},[t._v("20")]),i("b-select-option",{attrs:{value:"50"}},[t._v("50")])],1)],1)]),i("div",{staticClass:"d-flex"},[i("b-dropdown",{ref:"column_dropdown",staticClass:"custom-dropdown column-visibility mr-2 flex-shrink-0",attrs:{right:!0,variant:"outline-primary"},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Columns "),i("svg",{staticClass:"feather feather-chevron-down",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[i("polyline",{attrs:{points:"6 9 12 15 18 9"}})])]},proxy:!0}])},t._l(t.columns,(function(e,a){return i("b-checkbox",{key:a,staticClass:"checkbox-outline-primary mx-3 my-2",attrs:{variant:"primary"},model:{value:e.is_visible,callback:function(a){t.$set(e,"is_visible",a)},expression:"column.is_visible"}},[t._v(" "+t._s(e.label)+" ")])})),1),i("div",{staticClass:"header-search"},[i("div",[i("b-input",{attrs:{size:"sm",placeholder:"Search..."},model:{value:t.table_option.search_text,callback:function(e){t.$set(t.table_option,"search_text",e)},expression:"table_option.search_text"}}),i("div",{staticClass:"search-image"},[i("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[i("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),i("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])],1)])],1)]),i("b-table",{ref:"basic_table",attrs:{responsive:"",items:t.items,fields:t.visible_fields,"per-page":t.table_option.page_size,"current-page":t.table_option.current_page,filter:t.table_option.search_text,"sort-by":"first_name","show-empty":!0},on:{filtered:t.on_filtered},scopedSlots:t._u([{key:"cell(id)",fn:function(e){return[i("b-checkbox",{staticClass:"checkbox-outline-primary",attrs:{value:e.value,variant:"primary"},on:{change:t.check_select_all},model:{value:t.selected_rows,callback:function(e){t.selected_rows=e},expression:"selected_rows"}})]}},{key:"cell(thumb)",fn:function(t){return[i("img",{staticClass:"rounded-circle profile-img",attrs:{src:a("7584")("./"+t.item.thumb),alt:"avatar"}})]}},{key:"cell(status)",fn:function(e){return[i("b-badge",{attrs:{variant:e.value.class}},[t._v(t._s(e.value.key))])]}},{key:"cell(action)",fn:function(){return[i("a",{staticClass:"cancel",attrs:{href:"javascript:;"}},[i("svg",{staticClass:"feather feather-x-circle table-cancel",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}},[i("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),i("line",{attrs:{x1:"15",y1:"9",x2:"9",y2:"15"}}),i("line",{attrs:{x1:"9",y1:"9",x2:"15",y2:"15"}})])])]},proxy:!0}])}),i("div",{staticClass:"table-footer"},[i("div",{staticClass:"dataTables_info"},[t._v("Showing "+t._s(t.meta.total_items?t.meta.start_index+1:0)+" to "+t._s(t.meta.end_index+1)+" of "+t._s(t.meta.total_items))]),i("div",{staticClass:"paginating-container pagination-solid flex-column align-items-right"},[i("b-pagination",{staticClass:"rounded",attrs:{"total-rows":t.table_option.total_rows,"per-page":t.table_option.page_size,"prev-text":"Prev","next-text":"Next","first-text":"First","last-text":"Last","first-class":"first","prev-class":"prev","next-class":"next","last-class":"last"},scopedSlots:t._u([{key:"first-text",fn:function(){return[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[i("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"}})])]},proxy:!0},{key:"prev-text",fn:function(){return[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[i("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[i("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0},{key:"last-text",fn:function(){return[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[i("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})])]},proxy:!0}]),model:{value:t.table_option.current_page,callback:function(e){t.$set(t.table_option,"current_page",e)},expression:"table_option.current_page"}})],1)])],1)])])]),t._m(1),i("div",{staticClass:"row layout-top-spacing"},[i("div",{staticClass:"col-xl-12 col-lg-12 col-sm-12 layout-spacing"},[i("div",{staticClass:"panel p-0"},[i("div",{staticClass:"custom-table"},[i("div",{staticClass:"table-header"},[i("div",{staticClass:"d-flex align-items-center"},[i("span",[t._v("Results :")]),i("span",{staticClass:"ml-2"},[i("b-select",{staticClass:"h-auto",model:{value:t.table_option1.page_size,callback:function(e){t.$set(t.table_option1,"page_size",e)},expression:"table_option1.page_size"}},[i("b-select-option",{attrs:{value:"5"}},[t._v("5")]),i("b-select-option",{attrs:{value:"10"}},[t._v("10")]),i("b-select-option",{attrs:{value:"20"}},[t._v("20")]),i("b-select-option",{attrs:{value:"50"}},[t._v("50")])],1)],1)]),i("div",{staticClass:"header-search"},[i("b-input",{attrs:{size:"sm",placeholder:"Search..."},model:{value:t.table_option1.search_text,callback:function(e){t.$set(t.table_option1,"search_text",e)},expression:"table_option1.search_text"}}),i("div",{staticClass:"search-image"},[i("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[i("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),i("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])],1)]),i("b-table",{ref:"basic_table1",attrs:{responsive:"",items:t.filter_items1,fields:t.columns1,"per-page":t.table_option1.page_size,"current-page":t.table_option1.current_page,filter:t.table_option1.search_text,"show-empty":!0},on:{filtered:t.on_filtered1},scopedSlots:t._u([{key:"top-row",fn:function(){return t._l(t.columns1,(function(e){return i("td",{key:e.key},[i("b-input",{attrs:{size:"sm",placeholder:e.label},model:{value:t.column_filters[e.key],callback:function(a){t.$set(t.column_filters,e.key,a)},expression:"column_filters[field.key]"}})],1)}))},proxy:!0},{key:"cell(salary)",fn:function(e){return[t._v(" "+t._s(e.item.salary?"$"+e.item.salary:"")+" ")]}},{key:"cell(action)",fn:function(){return[i("a",{staticClass:"cancel",attrs:{href:"javascript:;"}},[i("svg",{staticClass:"feather feather-x-circle table-cancel",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}},[i("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),i("line",{attrs:{x1:"15",y1:"9",x2:"9",y2:"15"}}),i("line",{attrs:{x1:"9",y1:"9",x2:"15",y2:"15"}})])])]},proxy:!0}])}),i("div",{staticClass:"table-footer"},[i("div",{staticClass:"dataTables_info"},[t._v("Showing "+t._s(t.meta1.total_items?t.meta1.start_index+1:0)+" to "+t._s(t.meta1.end_index+1)+" of "+t._s(t.meta1.total_items))]),i("div",{staticClass:"paginating-container pagination-solid flex-column align-items-right"},[i("b-pagination",{staticClass:"rounded",attrs:{"total-rows":t.table_option1.total_rows,"per-page":t.table_option1.page_size,"prev-text":"Prev","next-text":"Next","first-text":"First","last-text":"Last","first-class":"first","prev-class":"prev","next-class":"next","last-class":"last"},scopedSlots:t._u([{key:"first-text",fn:function(){return[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[i("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"}})])]},proxy:!0},{key:"prev-text",fn:function(){return[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[i("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[i("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0},{key:"last-text",fn:function(){return[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[i("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})])]},proxy:!0}]),model:{value:t.table_option1.current_page,callback:function(e){t.$set(t.table_option1,"current_page",e)},expression:"table_option1.current_page"}})],1)])],1)])])]),t._m(2),i("div",{staticClass:"row layout-top-spacing"},[i("div",{staticClass:"col-xl-12 col-lg-12 col-sm-12 layout-spacing"},[i("div",{staticClass:"panel p-0"},[i("div",{staticClass:"custom-table table3"},[i("div",{staticClass:"table-header"},[i("div",{staticClass:"d-flex align-items-center"},[i("span",[t._v("Results :")]),i("span",{staticClass:"ml-2"},[i("b-select",{staticClass:"h-auto",model:{value:t.table_option2.page_size,callback:function(e){t.$set(t.table_option2,"page_size",e)},expression:"table_option2.page_size"}},[i("b-select-option",{attrs:{value:"5"}},[t._v("5")]),i("b-select-option",{attrs:{value:"10"}},[t._v("10")]),i("b-select-option",{attrs:{value:"20"}},[t._v("20")]),i("b-select-option",{attrs:{value:"50"}},[t._v("50")])],1)],1)]),i("div",{staticClass:"header-search"},[i("b-input",{attrs:{size:"sm",placeholder:"Search..."},model:{value:t.table_option2.search_text,callback:function(e){t.$set(t.table_option2,"search_text",e)},expression:"table_option2.search_text"}}),i("div",{staticClass:"search-image"},[i("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[i("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),i("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])],1)]),i("b-table",{ref:"basic_table2",attrs:{responsive:"",items:t.items2,fields:t.columns2,"per-page":t.table_option2.page_size,"current-page":t.table_option2.current_page,filter:t.table_option2.search_text,"sort-by":"id","show-empty":!0},on:{filtered:t.on_filtered2,"sort-changed":t.clear_selection2},scopedSlots:t._u([{key:"head(id)",fn:function(){return[i("b-checkbox",{staticClass:"checkbox-outline-primary",attrs:{variant:"primary"},on:{change:function(e){return t.select_all2()}},model:{value:t.is_select_all2,callback:function(e){t.is_select_all2=e},expression:"is_select_all2"}})]},proxy:!0},{key:"cell(id)",fn:function(e){return[i("b-checkbox",{staticClass:"checkbox-outline-primary",attrs:{value:e.value,variant:"primary"},on:{change:t.check_select_all2},model:{value:t.selected_rows2,callback:function(e){t.selected_rows2=e},expression:"selected_rows2"}})]}},{key:"cell(thumb)",fn:function(t){return[i("img",{staticClass:"rounded-circle profile-img",attrs:{src:a("7584")("./"+t.item.thumb),alt:"avatar"}})]}},{key:"cell(status)",fn:function(e){return[i("b-badge",{attrs:{variant:e.value.class}},[t._v(t._s(e.value.key))])]}},{key:"cell(action)",fn:function(){return[i("b-button",{attrs:{variant:"outline-primary",size:"sm"}},[t._v("View")])]},proxy:!0}])}),i("div",{staticClass:"table-footer"},[i("div",{staticClass:"dataTables_info"},[t._v("Showing "+t._s(t.meta2.total_items?t.meta2.start_index+1:0)+" to "+t._s(t.meta2.end_index+1)+" of "+t._s(t.meta2.total_items))]),i("div",{staticClass:"paginating-container pagination-solid flex-column align-items-right"},[i("b-pagination",{staticClass:"rounded",attrs:{"total-rows":t.table_option2.total_rows,"per-page":t.table_option2.page_size,"prev-text":"Prev","next-text":"Next","first-text":"First","last-text":"Last","first-class":"first","prev-class":"prev","next-class":"next","last-class":"last"},scopedSlots:t._u([{key:"first-text",fn:function(){return[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[i("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"}})])]},proxy:!0},{key:"prev-text",fn:function(){return[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[i("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[i("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0},{key:"last-text",fn:function(){return[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[i("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})])]},proxy:!0}]),model:{value:t.table_option2.current_page,callback:function(e){t.$set(t.table_option2,"current_page",e)},expression:"table_option2.current_page"}})],1)])],1)])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"seperator-header layout-top-spacing"},[a("h4",{},[t._v("Show/ Hide Columns")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"seperator-header layout-top-spacing"},[a("h4",{},[t._v("Individual column searching (text inputs)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"seperator-header layout-top-spacing"},[a("h4",{},[t._v("Column Filter")])])}],o=(a("4de4"),a("d3b7"),a("b64b"),a("caad"),a("2532"),a("d81d"),a("a630"),a("3ca3"),a("ddb0"),{metaInfo:{title:"Bootstrap Miscellaneous Table"},data:function(){return{items:[],columns:[],table_option:{total_rows:0,current_page:1,page_size:10,search_text:""},meta:{},items1:[],columns1:[],table_option1:{total_rows:0,current_page:1,page_size:10,search_text:""},meta1:{},column_filters:{id:"",name:"",position:"",office:"",age:"",start_date:"",salary:""},items2:[],columns2:[],table_option2:{total_rows:0,current_page:1,page_size:10,search_text:""},meta2:{},is_select_all2:!1,selected_rows2:[]}},watch:{table_option:{handler:function(){this.get_meta()},deep:!0},table_option1:{handler:function(){this.get_meta1()},deep:!0},table_option2:{handler:function(){this.get_meta2(),this.clear_selection2()},deep:!0}},computed:{visible_fields:function(){return this.columns.filter((function(t){return t.is_visible}))},filter_items1:function(){var t=this,e=this.items1.filter((function(e){return Object.keys(t.column_filters).every((function(a){var i=e[a]?String(e[a]).toLowerCase():"";return i.includes(t.column_filters[a].toLowerCase())}))}));return e}},mounted:function(){this.bind_data()},methods:{bind_data:function(){this.columns=[{key:"name",label:"Name",sortable:!0,is_visible:!0},{key:"position",label:"Position",sortable:!0,is_visible:!0},{key:"office",label:"Office",sortable:!0,is_visible:!0},{key:"age",label:"Age",sortable:!0,is_visible:!0},{key:"start_date",label:"Start Date",sortable:!0,is_visible:!0},{key:"salary",label:"Salary",sortable:!0,is_visible:!0}],this.items=[{id:1,name:"Tiger Nixon",position:"System Architect",office:"Edinburgh",age:61,start_date:"2011/04/25",salary:"320,800"},{id:2,name:"Garrett Winters",position:"Accountant",office:"Tokyo",age:63,start_date:"2011/07/25",salary:"170,750"},{id:3,name:"Ashton Cox",position:"Junior Technical Author",office:"San Francisco",age:66,start_date:"2009/01/12",salary:"86,000"},{id:4,name:"Cedric Kelly",position:"Senior Javascript Developer",office:"Edinburgh",age:22,start_date:"2012/03/29",salary:"433,060"},{id:5,name:"Airi Satou",position:"Accountant",office:"Tokyo",age:33,start_date:"2008/11/28",salary:"162,700"},{id:6,name:"Brielle Williamson",position:"Integration Specialist",office:"New York",age:61,start_date:"2012/12/02",salary:"372,000"},{id:7,name:"Herrod Chandler",position:"Sales Assistant",office:"San Francisco",age:59,start_date:"2012/08/06",salary:"137,500"},{id:8,name:"Rhona Davidson",position:"Integration Specialist",office:"Tokyo",age:55,start_date:"2010/10/14",salary:"327,900"},{id:9,name:"Colleen Hurst",position:"Javascript Developer",office:"San Francisco",age:39,start_date:"2009/09/15",salary:"205,500"},{id:10,name:"Sonya Frost",position:"Software Engineer",office:"Edinburgh",age:23,start_date:"2008/12/13",salary:"103,600"},{id:11,name:"Jena Gaines",position:"Office Manager",office:"London",age:30,start_date:"2008/12/19",salary:"90,560"},{id:12,name:"Quinn Flynn",position:"Support Lead",office:"Edinburgh",age:22,start_date:"2013/03/03",salary:"342,000"},{id:13,name:"Charde Marshall",position:"Regional Director",office:"San Francisco",age:36,start_date:"2008/10/16",salary:"470,600"},{id:14,name:"Haley Kennedy",position:"Senior Marketing Designer",office:"London",age:43,start_date:"2012/12/18",salary:"313,500"},{id:15,name:"Tatyana Fitzpatrick",position:"Regional Director",office:"London",age:19,start_date:"2010/03/17",salary:"385,750"},{id:16,name:"Michael Silva",position:"Marketing Designer",office:"London",age:66,start_date:"2012/11/27",salary:"198,500"},{id:17,name:"Paul Byrd",position:"Chief Financial Officer (CFO)",office:"New York",age:64,start_date:"2010/06/09",salary:"725,000"},{id:18,name:"Gloria Little",position:"Systems Administrator",office:"New York",age:59,start_date:"2009/04/10",salary:"237,500"},{id:19,name:"Bradley Greer",position:"Software Engineer",office:"London",age:41,start_date:"2012/10/13",salary:"132,000"},{id:20,name:"Dai Rios",position:"Personnel Lead",office:"Edinburgh",age:35,start_date:"2012/09/26",salary:"217,500"},{id:21,name:"Jenette Caldwell",position:"Development Lead",office:"New York",age:61,start_date:"2011/09/03",salary:"345,000"},{id:22,name:"Yuri Berry",position:"Chief Marketing Officer (CMO)",office:"New York",age:40,start_date:"2009/06/25",salary:"675,000"},{id:23,name:"Caesar Vance",position:"Pre-Sales Support",office:"New York",age:21,start_date:"2011/12/12",salary:"106,450"},{id:24,name:"Doris Wilder",position:"Sales Assistant",office:"Sidney",age:23,start_date:"2010/09/20",salary:"85,600"},{id:25,name:"Angelica Ramos",position:"Chief Executive Officer (CEO)",office:"London",age:47,start_date:"2009/10/09",salary:"1,200,000"},{id:26,name:"Gavin Joyce",position:"Developer",office:"Edinburgh",age:42,start_date:"2010/12/22",salary:"92,575"},{id:27,name:"Jennifer Chang",position:"Regional Director",office:"Singapore",age:28,start_date:"2010/11/14",salary:"57,650"}],this.table_option.total_rows=this.items.length,this.get_meta(),this.columns1=[{key:"id",label:"#",sortable:!0},{key:"name",label:"Name",sortable:!0},{key:"position",label:"Position",sortable:!0},{key:"office",label:"Office",sortable:!0},{key:"age",label:"Age",sortable:!0},{key:"start_date",label:"Start Date",sortable:!0},{key:"salary",label:"Salary",sortable:!0},{key:"action",label:"Actions",class:"actions text-center"}],this.items1=[{id:1,name:"Tiger Nixon",position:"System Architect",office:"Edinburgh",age:61,start_date:"2011/04/25",salary:"320,800"},{id:2,name:"Garrett Winters",position:"Accountant",office:"Tokyo",age:63,start_date:"2011/07/25",salary:"170,750"},{id:3,name:"Ashton Cox",position:"Junior Technical Author",office:"San Francisco",age:66,start_date:"2009/01/12",salary:"86,000"},{id:4,name:"Cedric Kelly",position:"Senior Javascript Developer",office:"Edinburgh",age:22,start_date:"2012/03/29",salary:"433,060"},{id:5,name:"Airi Satou",position:"Accountant",office:"Tokyo",age:33,start_date:"2008/11/28",salary:"162,700"},{id:6,name:"Brielle Williamson",position:"Integration Specialist",office:"New York",age:61,start_date:"2012/12/02",salary:"372,000"},{id:7,name:"Herrod Chandler",position:"Sales Assistant",office:"San Francisco",age:59,start_date:"2012/08/06",salary:"137,500"},{id:8,name:"Rhona Davidson",position:"Integration Specialist",office:"Tokyo",age:55,start_date:"2010/10/14",salary:"327,900"},{id:9,name:"Colleen Hurst",position:"Javascript Developer",office:"San Francisco",age:39,start_date:"2009/09/15",salary:"205,500"},{id:10,name:"Sonya Frost",position:"Software Engineer",office:"Edinburgh",age:23,start_date:"2008/12/13",salary:"103,600"},{id:11,name:"Jena Gaines",position:"Office Manager",office:"London",age:30,start_date:"2008/12/19",salary:"90,560"},{id:12,name:"Quinn Flynn",position:"Support Lead",office:"Edinburgh",age:22,start_date:"2013/03/03",salary:"342,000"},{id:13,name:"Charde Marshall",position:"Regional Director",office:"San Francisco",age:36,start_date:"2008/10/16",salary:"470,600"},{id:14,name:"Haley Kennedy",position:"Senior Marketing Designer",office:"London",age:43,start_date:"2012/12/18",salary:"313,500"},{id:15,name:"Tatyana Fitzpatrick",position:"Regional Director",office:"London",age:19,start_date:"2010/03/17",salary:"385,750"},{id:16,name:"Michael Silva",position:"Marketing Designer",office:"London",age:66,start_date:"2012/11/27",salary:"198,500"},{id:17,name:"Paul Byrd",position:"Chief Financial Officer (CFO)",office:"New York",age:64,start_date:"2010/06/09",salary:"725,000"},{id:18,name:"Gloria Little",position:"Systems Administrator",office:"New York",age:59,start_date:"2009/04/10",salary:"237,500"},{id:19,name:"Bradley Greer",position:"Software Engineer",office:"London",age:41,start_date:"2012/10/13",salary:"132,000"},{id:20,name:"Dai Rios",position:"Personnel Lead",office:"Edinburgh",age:35,start_date:"2012/09/26",salary:"217,500"},{id:21,name:"Jenette Caldwell",position:"Development Lead",office:"New York",age:61,start_date:"2011/09/03",salary:"345,000"},{id:22,name:"Yuri Berry",position:"Chief Marketing Officer (CMO)",office:"New York",age:40,start_date:"2009/06/25",salary:"675,000"},{id:23,name:"Caesar Vance",position:"Pre-Sales Support",office:"New York",age:21,start_date:"2011/12/12",salary:"106,450"},{id:24,name:"Doris Wilder",position:"Sales Assistant",office:"Sidney",age:23,start_date:"2010/09/20",salary:"85,600"},{id:25,name:"Angelica Ramos",position:"Chief Executive Officer (CEO)",office:"London",age:47,start_date:"2009/10/09",salary:"1,200,000"},{id:26,name:"Gavin Joyce",position:"Developer",office:"Edinburgh",age:42,start_date:"2010/12/22",salary:"92,575"},{id:27,name:"Jennifer Chang",position:"Regional Director",office:"Singapore",age:28,start_date:"2010/11/14",salary:"57,650"}],this.table_option1.total_rows=this.items1.length,this.get_meta1(),this.columns2=[{key:"id",label:"",thClass:"header-checkbox"},{key:"thumb",label:"Profile",thClass:"text-center w-90"},{key:"first_name",label:"First Name",sortable:!0},{key:"last_name",label:"Last Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"phone",label:"Mobile No.",sortable:!0},{key:"status",label:"Status"},{key:"action",label:"Actions",class:"actions text-center"}],this.items2=[{id:1,thumb:"profile-9.jpeg",first_name:"Tiger",last_name:"Nixon",email:"tiger@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}},{id:2,thumb:"profile-11.jpeg",first_name:"Garrett",last_name:"Winters",email:"garrett@gmail.com",phone:"222-222-2222",status:{key:"Closed",class:"danger"}},{id:3,thumb:"profile-12.jpeg",first_name:"Ashton",last_name:"Cox",email:"ashton@gmail.com",phone:"333-333-3333",status:{key:"Suspended",class:"warning"}},{id:4,thumb:"profile-13.jpeg",first_name:"Cedric",last_name:"Kelly",email:"cedric@gmail.com",phone:"444-444-4444",status:{key:"Suspended",class:"warning"}},{id:5,thumb:"profile-14.jpeg",first_name:"Airi",last_name:"Satou",email:"airi@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}},{id:6,thumb:"profile-15.jpeg",first_name:"Brielle",last_name:"Williamson",email:"brielle@gmail.com",phone:"666-666-6666",status:{key:"Closed",class:"danger"}},{id:7,thumb:"profile-16.jpeg",first_name:"Herrod",last_name:"Chandler",email:"herrod@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}}],this.table_option2.total_rows=this.items2.length,this.get_meta2()},hide_dropdown:function(t){t.preventDefault()},show_hide_columns:function(t){t.is_visible=!t.is_visible},on_filtered:function(t){this.refresh_table(t.length)},refresh_table:function(t){this.table_option.total_rows=t,this.table_option.currentPage=1},get_meta:function(){this.meta=this.get_common_meta(this.table_option)},get_common_meta:function(t){var e,a,i=t.page_size<1?1:Math.ceil(t.total_rows/t.page_size);i=Math.max(i||0,1);var s=5,o="undefined"!==typeof s&&s<i;o?(e=Math.max(t.current_page-Math.floor(s/2),1),a=e+s-1,a>i&&(a=i,e=a-s+1)):(e=1,a=i);var r=(t.current_page-1)*t.page_size,n=Math.min(r+t.page_size-1,t.total_rows-1),l=Array.from(Array(a+1-e).keys()).map((function(t){return e+t}));return{total_items:t.total_rows,current_page:t.current_page,page_size:t.page_size,total_pages:i,start_page:e,end_page:a,start_index:r,end_index:n,pages:l}},on_filtered1:function(t){this.refresh_table1(t.length)},refresh_table1:function(t){this.table_option1.total_rows=t,this.table_option1.currentPage=1},get_meta1:function(){this.meta1=this.get_common_meta(this.table_option1)},on_filtered2:function(t){this.refresh_table2(t.length)},refresh_table2:function(t){this.table_option2.total_rows=t,this.table_option2.currentPage=1},get_meta2:function(){this.meta2=this.get_common_meta(this.table_option2)},select_all2:function(){this.selected_rows2=this.$refs.basic_table2.paginatedItems.map((function(t){return t.id})),this.is_select_all2||this.clear_selection2(),this.check_select_all2()},check_select_all2:function(){var t=this.$refs.basic_table2.paginatedItems.map((function(t){return t.id}));this.is_select_all2=!1,t.length==this.selected_rows2.length&&(this.is_select_all2=!0)},clear_selection2:function(){this.is_select_all2=!1,this.selected_rows2=[]}}}),r=o,n=(a("f69e"),a("2877")),l=Object(n["a"])(r,i,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=tables-miscellaneous.70fe1c94.js.map