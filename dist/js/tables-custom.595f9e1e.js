(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tables-custom"],{"191f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout-px-spacing"},[s("portal",{attrs:{to:"breadcrumb"}},[s("ul",{staticClass:"navbar-nav flex-row"},[s("li",[s("div",{staticClass:"page-header"},[s("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("a",{attrs:{href:"javascript:;"}},[t._v("DataTables")])]),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[s("span",[t._v("Custom")])])])])])])])]),t._m(0),s("div",{staticClass:"row layout-top-spacing"},[s("div",{staticClass:"col-xl-12 col-lg-12 col-sm-12 layout-spacing"},[s("div",{staticClass:"panel p-0"},[s("div",{staticClass:"custom-table"},[s("div",{staticClass:"table-header"},[s("div",{staticClass:"d-flex align-items-center"},[s("span",[t._v("Results :")]),s("span",{staticClass:"ml-2"},[s("b-select",{attrs:{size:"sm"},model:{value:t.table_option.page_size,callback:function(e){t.$set(t.table_option,"page_size",e)},expression:"table_option.page_size"}},[s("b-select-option",{attrs:{value:"5"}},[t._v("5")]),s("b-select-option",{attrs:{value:"10"}},[t._v("10")]),s("b-select-option",{attrs:{value:"20"}},[t._v("20")]),s("b-select-option",{attrs:{value:"50"}},[t._v("50")])],1)],1)]),s("div",{staticClass:"header-search"},[s("b-input",{attrs:{size:"sm",placeholder:"Search..."},model:{value:t.table_option.search_text,callback:function(e){t.$set(t.table_option,"search_text",e)},expression:"table_option.search_text"}}),s("div",{staticClass:"search-image"},[s("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),s("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])],1)]),s("b-table",{ref:"basic_table",attrs:{responsive:"",items:t.items,fields:t.columns,"per-page":t.table_option.page_size,"current-page":t.table_option.current_page,filter:t.table_option.search_text,"sort-by":"first_name","show-empty":!0},on:{filtered:t.on_filtered,"sort-changed":t.clear_selection},scopedSlots:t._u([{key:"head(id)",fn:function(){return[s("b-checkbox",{staticClass:"checkbox-outline-primary",attrs:{variant:"primary"},on:{change:function(e){return t.select_all()}},model:{value:t.is_select_all,callback:function(e){t.is_select_all=e},expression:"is_select_all"}})]},proxy:!0},{key:"cell(id)",fn:function(e){return[s("b-checkbox",{staticClass:"checkbox-outline-primary",attrs:{value:e.value,variant:"primary"},on:{change:t.check_select_all},model:{value:t.selected_rows,callback:function(e){t.selected_rows=e},expression:"selected_rows"}})]}},{key:"cell(thumb)",fn:function(t){return[s("img",{staticClass:"rounded-circle profile-img",attrs:{src:a("7584")("./"+t.item.thumb),alt:"avatar"}})]}},{key:"cell(status)",fn:function(e){return[s("b-badge",{attrs:{variant:e.value.class}},[t._v(t._s(e.value.key))])]}},{key:"cell(action)",fn:function(){return[s("a",{staticClass:"cancel",attrs:{href:"javascript:;"}},[s("svg",{staticClass:"feather feather-x-circle table-cancel",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}},[s("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),s("line",{attrs:{x1:"15",y1:"9",x2:"9",y2:"15"}}),s("line",{attrs:{x1:"9",y1:"9",x2:"15",y2:"15"}})])])]},proxy:!0}])}),s("div",{staticClass:"table-footer"},[s("div",{staticClass:"dataTables_info"},[t._v("Showing "+t._s(t.meta.total_items?t.meta.start_index+1:0)+" to "+t._s(t.meta.end_index+1)+" of "+t._s(t.meta.total_items))]),s("div",{staticClass:"paginating-container pagination-solid flex-column align-items-right"},[s("b-pagination",{staticClass:"rounded",attrs:{"total-rows":t.table_option.total_rows,"per-page":t.table_option.page_size,"prev-text":"Prev","next-text":"Next","first-text":"First","last-text":"Last","first-class":"first","prev-class":"prev","next-class":"next","last-class":"last"},scopedSlots:t._u([{key:"first-text",fn:function(){return[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"}})])]},proxy:!0},{key:"prev-text",fn:function(){return[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0},{key:"last-text",fn:function(){return[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})])]},proxy:!0}]),model:{value:t.table_option.current_page,callback:function(e){t.$set(t.table_option,"current_page",e)},expression:"table_option.current_page"}})],1)])],1)])])]),t._m(1),s("div",{staticClass:"row layout-top-spacing"},[s("div",{staticClass:"col-xl-12 col-lg-12 col-sm-12 layout-spacing"},[s("div",{staticClass:"panel p-0"},[s("div",{staticClass:"custom-table"},[s("div",{staticClass:"table-header"},[s("div",{staticClass:"d-flex align-items-center"},[s("span",[t._v("Results :")]),s("span",{staticClass:"ml-2"},[s("b-select",{staticClass:"h-auto",model:{value:t.table_option1.page_size,callback:function(e){t.$set(t.table_option1,"page_size",e)},expression:"table_option1.page_size"}},[s("b-select-option",{attrs:{value:"5"}},[t._v("5")]),s("b-select-option",{attrs:{value:"10"}},[t._v("10")]),s("b-select-option",{attrs:{value:"20"}},[t._v("20")]),s("b-select-option",{attrs:{value:"50"}},[t._v("50")])],1)],1)]),s("div",{staticClass:"header-search"},[s("b-input",{attrs:{size:"sm",placeholder:"Search..."},model:{value:t.table_option1.search_text,callback:function(e){t.$set(t.table_option1,"search_text",e)},expression:"table_option1.search_text"}}),s("div",{staticClass:"search-image"},[s("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),s("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])],1)]),s("b-table",{ref:"basic_table1",attrs:{responsive:"",hover:"",items:t.items1,fields:t.columns1,"per-page":t.table_option1.page_size,"current-page":t.table_option1.current_page,filter:t.table_option1.search_text,"show-empty":!0},on:{filtered:t.on_filtered1,"sort-changed":t.clear_selection1},scopedSlots:t._u([{key:"head(id)",fn:function(){return[s("b-checkbox",{staticClass:"checkbox-outline-primary",attrs:{variant:"primary"},on:{change:function(e){return t.select_all1()}},model:{value:t.is_select_all1,callback:function(e){t.is_select_all1=e},expression:"is_select_all1"}})]},proxy:!0},{key:"cell(id)",fn:function(e){return[s("b-checkbox",{staticClass:"checkbox-outline-primary",attrs:{value:e.value,variant:"primary"},on:{change:t.check_select_all1},model:{value:t.selected_rows1,callback:function(e){t.selected_rows1=e},expression:"selected_rows1"}})]}},{key:"cell(thumb)",fn:function(t){return[s("img",{staticClass:"rounded-circle profile-img",attrs:{src:a("7584")("./"+t.item.thumb),alt:"avatar"}})]}},{key:"cell(status)",fn:function(e){return[s("b-badge",{attrs:{variant:e.value.class}},[t._v(t._s(e.value.key))])]}},{key:"cell(action)",fn:function(){return[s("b-dropdown",{staticClass:"custom-dropdown",attrs:{right:!0,variant:"icon-only","toggle-tag":"a"},scopedSlots:t._u([{key:"button-content",fn:function(){return[s("svg",{staticClass:"feather feather-more-horizontal",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),s("circle",{attrs:{cx:"19",cy:"12",r:"1"}}),s("circle",{attrs:{cx:"5",cy:"12",r:"1"}})])]},proxy:!0}])},[s("b-dropdown-item",[t._v("View")]),s("b-dropdown-item",[t._v("Edit")]),s("b-dropdown-item",[t._v("View Response")]),s("b-dropdown-item",[t._v("Delete")])],1)]},proxy:!0}])}),s("div",{staticClass:"table-footer"},[s("div",{staticClass:"dataTables_info"},[t._v("Showing "+t._s(t.meta1.total_items?t.meta1.start_index+1:0)+" to "+t._s(t.meta1.end_index+1)+" of "+t._s(t.meta1.total_items))]),s("div",{staticClass:"paginating-container pagination-solid flex-column align-items-right"},[s("b-pagination",{staticClass:"rounded",attrs:{"total-rows":t.table_option1.total_rows,"per-page":t.table_option1.page_size,"prev-text":"Prev","next-text":"Next","first-text":"First","last-text":"Last","first-class":"first","prev-class":"prev","next-class":"next","last-class":"last"},scopedSlots:t._u([{key:"first-text",fn:function(){return[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"}})])]},proxy:!0},{key:"prev-text",fn:function(){return[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0},{key:"last-text",fn:function(){return[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})])]},proxy:!0}]),model:{value:t.table_option1.current_page,callback:function(e){t.$set(t.table_option1,"current_page",e)},expression:"table_option1.current_page"}})],1)])],1)])])]),t._m(2),s("div",{staticClass:"row layout-top-spacing"},[s("div",{staticClass:"col-xl-12 col-lg-12 col-sm-12 layout-spacing"},[s("div",{staticClass:"panel p-0"},[s("div",{staticClass:"custom-table table3"},[s("div",{staticClass:"table-header"},[s("div",{staticClass:"d-flex align-items-center"},[s("span",[t._v("Results :")]),s("span",{staticClass:"ml-2"},[s("b-select",{staticClass:"h-auto",model:{value:t.table_option2.page_size,callback:function(e){t.$set(t.table_option2,"page_size",e)},expression:"table_option2.page_size"}},[s("b-select-option",{attrs:{value:"5"}},[t._v("5")]),s("b-select-option",{attrs:{value:"10"}},[t._v("10")]),s("b-select-option",{attrs:{value:"20"}},[t._v("20")]),s("b-select-option",{attrs:{value:"50"}},[t._v("50")])],1)],1)]),s("div",{staticClass:"header-search"},[s("b-input",{attrs:{size:"sm",placeholder:"Search..."},model:{value:t.table_option2.search_text,callback:function(e){t.$set(t.table_option2,"search_text",e)},expression:"table_option2.search_text"}}),s("div",{staticClass:"search-image"},[s("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),s("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])],1)]),s("b-table",{ref:"basic_table2",attrs:{responsive:"",hover:"",items:t.items2,fields:t.columns2,"per-page":t.table_option2.page_size,"current-page":t.table_option2.current_page,filter:t.table_option2.search_text,"sort-by":"id","show-empty":!0},on:{filtered:t.on_filtered,"sort-changed":t.clear_selection},scopedSlots:t._u([{key:"cell(thumb)",fn:function(t){return[s("img",{staticClass:"rounded profile-img",attrs:{src:a("7584")("./"+t.item.thumb),alt:"avatar"}})]}},{key:"cell(status)",fn:function(e){return[s("b-badge",{attrs:{variant:e.value.class}},[t._v(t._s(e.value.key))])]}},{key:"cell(action)",fn:function(){return[s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip"}],staticClass:"mr-1",attrs:{href:"javascript:void(0);",title:"Edit"}},[s("svg",{staticClass:"feather feather-edit-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}})])]),s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip"}],attrs:{href:"javascript:void(0);",title:"Delete"}},[s("svg",{staticClass:"feather feather-trash",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}},[s("polyline",{attrs:{points:"3 6 5 6 21 6"}}),s("path",{attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}})])])]},proxy:!0}])}),s("div",{staticClass:"table-footer"},[s("div",{staticClass:"dataTables_info"},[t._v("Showing "+t._s(t.meta2.total_items?t.meta2.start_index+1:0)+" to "+t._s(t.meta2.end_index+1)+" of "+t._s(t.meta2.total_items))]),s("div",{staticClass:"paginating-container pagination-solid flex-column align-items-right"},[s("b-pagination",{staticClass:"rounded",attrs:{"total-rows":t.table_option2.total_rows,"per-page":t.table_option2.page_size,"prev-text":"Prev","next-text":"Next","first-text":"First","last-text":"Last","first-class":"first","prev-class":"prev","next-class":"next","last-class":"last"},scopedSlots:t._u([{key:"first-text",fn:function(){return[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"}})])]},proxy:!0},{key:"prev-text",fn:function(){return[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0},{key:"last-text",fn:function(){return[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})])]},proxy:!0}]),model:{value:t.table_option2.current_page,callback:function(e){t.$set(t.table_option2,"current_page",e)},expression:"table_option2.current_page"}})],1)])],1)])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"seperator-header layout-top-spacing"},[a("h4",{},[t._v("Style 1")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"seperator-header layout-top-spacing"},[a("h4",{},[t._v("Style 2")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"seperator-header layout-top-spacing"},[a("h4",{},[t._v("Style 3")])])}],l=(a("d81d"),a("a630"),a("3ca3"),a("d3b7"),a("ddb0"),{metaInfo:{title:"Bootstrap Custom Table"},data:function(){return{items:[],columns:[],table_option:{total_rows:0,current_page:1,page_size:5,search_text:""},meta:{},is_select_all:!1,selected_rows:[],items1:[],columns1:[],table_option1:{total_rows:0,current_page:1,page_size:5,search_text:""},meta1:{},is_select_all1:!1,selected_rows1:[],items2:[],columns2:[],table_option2:{total_rows:0,current_page:1,page_size:5,search_text:""},meta2:{},is_select_all2:!1,selected_rows2:[]}},watch:{table_option:{handler:function(){this.get_meta(),this.clear_selection()},deep:!0},table_option1:{handler:function(){this.get_meta1(),this.clear_selection1()},deep:!0},table_option2:{handler:function(){this.get_meta2(),this.clear_selection2()},deep:!0}},mounted:function(){this.bind_data()},methods:{bind_data:function(){this.columns=[{key:"id",label:"",thClass:"header-checkbox"},{key:"first_name",label:"First Name",sortable:!0},{key:"last_name",label:"Last Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"phone",label:"Mobile No.",sortable:!0},{key:"thumb",label:"Profile",class:"text-center w-90"},{key:"status",label:"Status"},{key:"action",label:"Actions",class:"actions text-center"}],this.items=[{id:1,thumb:"profile-9.jpeg",first_name:"Tiger",last_name:"Nixon",email:"tiger@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}},{id:2,thumb:"profile-11.jpeg",first_name:"Garrett",last_name:"Winters",email:"garrett@gmail.com",phone:"222-222-2222",status:{key:"Closed",class:"danger"}},{id:3,thumb:"profile-12.jpeg",first_name:"Ashton",last_name:"Cox",email:"ashton@gmail.com",phone:"333-333-3333",status:{key:"Suspended",class:"warning"}},{id:4,thumb:"profile-13.jpeg",first_name:"Cedric",last_name:"Kelly",email:"cedric@gmail.com",phone:"444-444-4444",status:{key:"Suspended",class:"warning"}},{id:5,thumb:"profile-14.jpeg",first_name:"Airi",last_name:"Satou",email:"airi@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}},{id:6,thumb:"profile-15.jpeg",first_name:"Brielle",last_name:"Williamson",email:"brielle@gmail.com",phone:"666-666-6666",status:{key:"Closed",class:"danger"}},{id:7,thumb:"profile-16.jpeg",first_name:"Herrod",last_name:"Chandler",email:"herrod@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}}],this.table_option.total_rows=this.items.length,this.get_meta(),this.columns1=[{key:"id",label:"",thClass:"header-checkbox"},{key:"thumb",label:"Profile",thClass:"w-90"},{key:"name",label:"Name",tdClass:"text-secondary font-weight-bold",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"phone",label:"Mobile No.",sortable:!0},{key:"status",label:"Status"},{key:"action",label:"Actions",class:"actions text-center"}],this.items1=[{id:1,thumb:"profile-9.jpeg",name:"Tiger Nixon",email:"tiger@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}},{id:2,thumb:"profile-11.jpeg",name:"Garrett Winters",email:"garrett@gmail.com",phone:"222-222-2222",status:{key:"Closed",class:"danger"}},{id:3,thumb:"profile-12.jpeg",name:"Ashton Cox",email:"ashton@gmail.com",phone:"333-333-3333",status:{key:"Suspended",class:"warning"}},{id:4,thumb:"profile-13.jpeg",name:"Cedric Kelly",email:"cedric@gmail.com",phone:"444-444-4444",status:{key:"Suspended",class:"warning"}},{id:5,thumb:"profile-14.jpeg",name:"Airi Satou",email:"airi@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}},{id:6,thumb:"profile-15.jpeg",name:"Brielle Williamson",email:"brielle@gmail.com",phone:"666-666-6666",status:{key:"Closed",class:"danger"}},{id:7,thumb:"profile-16.jpeg",name:"Herrod Chandler",email:"herrod@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}}],this.table_option1.total_rows=this.items1.length,this.get_meta1(),this.columns2=[{key:"id",label:"ID",sortable:!0},{key:"thumb",label:"Profile",thClass:"text-center w-90"},{key:"first_name",label:"First Name",sortable:!0},{key:"last_name",label:"Last Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"phone",label:"Mobile No.",sortable:!0},{key:"status",label:"Status"},{key:"action",label:"Actions",class:"actions text-center"}],this.items2=[{id:1,thumb:"profile-9.jpeg",first_name:"Tiger",last_name:"Nixon",email:"tiger@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}},{id:2,thumb:"profile-11.jpeg",first_name:"Garrett",last_name:"Winters",email:"garrett@gmail.com",phone:"222-222-2222",status:{key:"Closed",class:"danger"}},{id:3,thumb:"profile-12.jpeg",first_name:"Ashton",last_name:"Cox",email:"ashton@gmail.com",phone:"333-333-3333",status:{key:"Suspended",class:"warning"}},{id:4,thumb:"profile-13.jpeg",first_name:"Cedric",last_name:"Kelly",email:"cedric@gmail.com",phone:"444-444-4444",status:{key:"Suspended",class:"warning"}},{id:5,thumb:"profile-14.jpeg",first_name:"Airi",last_name:"Satou",email:"airi@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}},{id:6,thumb:"profile-15.jpeg",first_name:"Brielle",last_name:"Williamson",email:"brielle@gmail.com",phone:"666-666-6666",status:{key:"Closed",class:"danger"}},{id:7,thumb:"profile-16.jpeg",first_name:"Herrod",last_name:"Chandler",email:"herrod@gmail.com",phone:"555-555-5555",status:{key:"Approved",class:"primary"}}],this.table_option2.total_rows=this.items2.length,this.get_meta2()},on_filtered:function(t){this.refresh_table(t.length)},refresh_table:function(t){this.table_option.total_rows=t,this.table_option.currentPage=1},get_meta:function(){this.meta=this.get_common_meta(this.table_option)},get_common_meta:function(t){var e,a,s=t.page_size<1?1:Math.ceil(t.total_rows/t.page_size);s=Math.max(s||0,1);var i=5,l="undefined"!==typeof i&&i<s;l?(e=Math.max(t.current_page-Math.floor(i/2),1),a=e+i-1,a>s&&(a=s,e=a-i+1)):(e=1,a=s);var r=(t.current_page-1)*t.page_size,o=Math.min(r+t.page_size-1,t.total_rows-1),n=Array.from(Array(a+1-e).keys()).map((function(t){return e+t}));return{total_items:t.total_rows,current_page:t.current_page,page_size:t.page_size,total_pages:s,start_page:e,end_page:a,start_index:r,end_index:o,pages:n}},select_all:function(){this.selected_rows=this.$refs.basic_table.paginatedItems.map((function(t){return t.id})),this.is_select_all||this.clear_selection(),this.check_select_all()},check_select_all:function(){var t=this.$refs.basic_table.paginatedItems.map((function(t){return t.id}));this.is_select_all=!1,t.length==this.selected_rows.length&&(this.is_select_all=!0)},clear_selection:function(){this.is_select_all=!1,this.selected_rows=[]},on_filtered1:function(t){this.refresh_table1(t.length)},refresh_table1:function(t){this.table_option1.total_rows=t,this.table_option1.currentPage=1},get_meta1:function(){this.meta1=this.get_common_meta(this.table_option1)},select_all1:function(){this.selected_rows1=this.$refs.basic_table1.paginatedItems.map((function(t){return t.id})),this.is_select_all1||this.clear_selection1(),this.check_select_all1()},check_select_all1:function(){var t=this.$refs.basic_table1.paginatedItems.map((function(t){return t.id}));this.is_select_all1=!1,t.length==this.selected_rows1.length&&(this.is_select_all1=!0)},clear_selection1:function(){this.is_select_all1=!1,this.selected_rows1=[]},on_filtered2:function(t){this.refresh_table2(t.length)},refresh_table2:function(t){this.table_option2.total_rows=t,this.table_option2.currentPage=1},get_meta2:function(){this.meta2=this.get_common_meta(this.table_option2)},select_all2:function(){this.selected_rows2=this.$refs.basic_table2.paginatedItems.map((function(t){return t.id})),this.is_select_all2||this.clear_selection2(),this.check_select_all2()},check_select_all2:function(){var t=this.$refs.basic_table2.paginatedItems.map((function(t){return t.id}));this.is_select_all2=!1,t.length==this.selected_rows2.length&&(this.is_select_all2=!0)},clear_selection2:function(){this.is_select_all2=!1,this.selected_rows2=[]}}}),r=l,o=(a("92af"),a("2877")),n=Object(o["a"])(r,s,i,!1,null,null,null);e["default"]=n.exports},"4df4":function(t,e,a){"use strict";var s=a("da84"),i=a("0366"),l=a("c65b"),r=a("7b0b"),o=a("9bdd"),n=a("e95a"),c=a("68ee"),p=a("07fa"),h=a("8418"),u=a("9a1f"),d=a("35a1"),_=s.Array;t.exports=function(t){var e=r(t),a=c(this),s=arguments.length,m=s>1?arguments[1]:void 0,g=void 0!==m;g&&(m=i(m,s>2?arguments[2]:void 0));var f,b,v,w,x,k,y=d(e),C=0;if(!y||this==_&&n(y))for(f=p(e),b=a?new this(f):_(f);f>C;C++)k=g?m(e[C],C):e[C],h(b,C,k);else for(w=u(e,y),x=w.next,b=a?new this:[];!(v=l(x,w)).done;C++)k=g?o(w,m,[v.value,C],!0):v.value,h(b,C,k);return b.length=C,b}},"6ea4":function(t,e,a){},"92af":function(t,e,a){"use strict";a("6ea4")},"9bdd":function(t,e,a){var s=a("825a"),i=a("2a62");t.exports=function(t,e,a,l){try{return l?e(s(a)[0],a[1]):e(a)}catch(r){i(t,"throw",r)}}},a630:function(t,e,a){var s=a("23e7"),i=a("4df4"),l=a("1c7e"),r=!l((function(t){Array.from(t)}));s({target:"Array",stat:!0,forced:r},{from:i})},d81d:function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").map,l=a("1dde"),r=l("map");s({target:"Array",proto:!0,forced:!r},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=tables-custom.595f9e1e.js.map