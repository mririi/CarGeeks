(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bee6ef5"],{2532:function(t,e,a){"use strict";var s=a("23e7"),r=a("e330"),i=a("5a34"),n=a("1d80"),l=a("577e"),o=a("ab13"),c=r("".indexOf);s({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~c(l(n(this)),l(i(t)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,a){var s=a("861d"),r=a("c6b6"),i=a("b622"),n=i("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==r(t))}},"4df4":function(t,e,a){"use strict";var s=a("da84"),r=a("0366"),i=a("c65b"),n=a("7b0b"),l=a("9bdd"),o=a("e95a"),c=a("68ee"),u=a("07fa"),d=a("8418"),p=a("9a1f"),h=a("35a1"),_=s.Array;t.exports=function(t){var e=n(t),a=c(this),s=arguments.length,f=s>1?arguments[1]:void 0,b=void 0!==f;b&&(f=r(f,s>2?arguments[2]:void 0));var g,m,v,w,x,k,y=h(e),C=0;if(!y||this==_&&o(y))for(g=u(e),m=a?new this(g):_(g);g>C;C++)k=b?f(e[C],C):e[C],d(m,C,k);else for(w=p(e,y),x=w.next,m=a?new this:[];!(v=i(x,w)).done;C++)k=b?l(w,f,[v.value,C],!0):v.value,d(m,C,k);return m.length=C,m}},"5a34":function(t,e,a){var s=a("da84"),r=a("44e7"),i=s.TypeError;t.exports=function(t){if(r(t))throw i("The method doesn't accept regular expressions");return t}},6107:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-px-spacing"},[a("portal",{attrs:{to:"breadcrumb"}},[a("ul",{staticClass:"navbar-nav flex-row"},[a("li",[a("div",{staticClass:"page-header"},[a("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"javascript:;"}},[t._v("Dashboard")])]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[a("span",[t._v("Groups")])])])])])])])]),a("div",{staticClass:"row layout-top-spacing"},[a("div",{staticClass:"col-xl-12 col-lg-12 col-sm-12 layout-spacing"},[a("div",{staticClass:"panel p-0"},[a("div",{staticClass:"custom-table table3"},[a("div",{staticClass:"table-header"},[a("div",{staticClass:"d-flex align-items-center"},[a("span",[t._v("Results :")]),a("span",{staticClass:"ml-2"},[a("b-select",{staticClass:"h-auto",model:{value:t.table_option2.page_size,callback:function(e){t.$set(t.table_option2,"page_size",e)},expression:"table_option2.page_size"}},[a("b-select-option",{attrs:{value:"5"}},[t._v("5")]),a("b-select-option",{attrs:{value:"10"}},[t._v("10")]),a("b-select-option",{attrs:{value:"20"}},[t._v("20")]),a("b-select-option",{attrs:{value:"50"}},[t._v("50")])],1)],1),a("span",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],staticClass:"ml-2 mt-2"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"22",height:"20",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36"}},[a("path",{staticClass:"clr-i-solid clr-i-solid-path-1",attrs:{fill:"currentColor",d:"M22 33V19.5L33.47 8A1.81 1.81 0 0 0 34 6.7V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1.67a1.79 1.79 0 0 0 .53 1.27L14 19.58v10.2Z"}}),a("path",{staticClass:"clr-i-solid clr-i-solid-path-1",attrs:{fill:"currentColor",d:"M33.48 4h-31a.52.52 0 0 0-.48.52v1.72a1.33 1.33 0 0 0 .39.95l12 12v10l7.25 3.61V19.17l12-12a1.35 1.35 0 0 0 .36-.91V4.52a.52.52 0 0 0-.52-.52Z"}}),a("path",{attrs:{fill:"none",d:"M0 0h36v36H0z"}})]),a("span",{staticClass:"h6"},[t._v("Filter")])])]),a("b-collapse",{attrs:{id:"collapse-1"}},[a("b-card",{staticClass:"bg-transparent border-0 border-white  ml-3 default mt-2 mb-4"},[a("b-form-group",{attrs:{label:"Categories : "},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.ariaDescribedby;return[a("b-form-checkbox-group",{attrs:{id:"checkbox-group-2","aria-describedby":s,name:"flavour-a1"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},t._l(t.Questioncategories,(function(e){return a("div",{key:e.id},[a("b-form-checkbox",{attrs:{value:e.id}},[t._v(" "+t._s(e.typeC)+" ")])],1)})),0)]}}])})],1)],1),a("div",{staticClass:"header-search"},[a("b-input",{attrs:{size:"sm",placeholder:"Search..."},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("div",{staticClass:"search-image"},[a("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),a("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])],1)],1),a("b-table",{ref:"basic_table2",attrs:{responsive:"",hover:"",bordered:"",items:t.filteredList,fields:t.columns2,"per-page":t.table_option2.page_size,"current-page":t.table_option2.current_page,filter:t.table_option2.search_text,"sort-by":"id","show-empty":!0},on:{filtered:t.on_filtered,"sort-changed":t.clear_selection},scopedSlots:t._u([{key:"cell(accepted)",fn:function(e){return[1==e.item.accepted?a("span",[a("b-badge",{attrs:{variant:"success"}},[t._v("Accepted")])],1):a("span",[a("b-badge",{attrs:{variant:"danger"}},[t._v("Pending")])],1)]}},{key:"cell(userprofileG)",fn:function(e){return t._l(t.Userprofiles,(function(s){return a("span",{key:s.id},[s.id==e.item.userprofileG?a("span",[a("router-link",{attrs:{to:"/profile/"+s.id}},[t._v(" "+t._s(s.firstname)+" "+t._s(s.lastname)+" ")])],1):t._e()])}))}},{key:"cell(imageG)",fn:function(t){return[null!=t.item.imageG?a("span",[a("router-link",{attrs:{to:"/groupdetail/"+t.item.id}},[a("b-avatar",{attrs:{src:"http://127.0.0.1:8000"+t.item.imageG,size:"4rem",rounded:"lg",alt:"",srcset:""}})],1)],1):a("span",[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"4em",height:"4em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 64 64"}},[a("path",{attrs:{fill:"currentColor",d:"M32 2C15.432 2 2 15.432 2 32.001C2 48.567 15.432 62 32 62s30-13.433 30-29.999C62 15.432 48.568 2 32 2zm22 30.001c0 4.629-1.433 8.922-3.876 12.465l-30.591-30.59A21.889 21.889 0 0 1 32 10c12.15 0 22 9.851 22 22.001zm-44 0a21.9 21.9 0 0 1 3.876-12.468l30.591 30.591A21.887 21.887 0 0 1 32 54.001c-12.15 0-22-9.852-22-22z"}})])])]}}])}),a("div",{staticClass:"table-footer"},[a("div",{staticClass:"dataTables_info"},[t._v("Showing "+t._s(t.meta2.total_items?t.meta2.start_index+1:0)+" to "+t._s(t.meta2.end_index+1)+" of "+t._s(t.meta2.total_items))]),a("div",{staticClass:"paginating-container pagination-solid flex-column align-items-right"},[a("b-pagination",{staticClass:"rounded",attrs:{"total-rows":t.table_option2.total_rows,"per-page":t.table_option2.page_size,"prev-text":"Prev","next-text":"Next","first-text":"First","last-text":"Last","first-class":"first","prev-class":"prev","next-class":"next","last-class":"last"},scopedSlots:t._u([{key:"first-text",fn:function(){return[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"}})])]},proxy:!0},{key:"prev-text",fn:function(){return[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]},proxy:!0},{key:"next-text",fn:function(){return[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])]},proxy:!0},{key:"last-text",fn:function(){return[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})])]},proxy:!0}]),model:{value:t.table_option2.current_page,callback:function(e){t.$set(t.table_option2,"current_page",e)},expression:"table_option2.current_page"}})],1)])],1)])])])],1)},r=[],i=a("5530"),n=(a("4de4"),a("d3b7"),a("caad"),a("2532"),a("ac1f"),a("841c"),a("d81d"),a("a630"),a("3ca3"),a("ddb0"),a("2f62")),l={metaInfo:{title:"Bootstrap Custom Table"},data:function(){return{items2:[],columns2:[],table_option2:{total_rows:0,current_page:1,page_size:5,search_text:""},meta2:{},is_select_all2:!1,selected_rows2:[],search:"",category:""}},watch:{table_option:{handler:function(){this.get_meta(),this.clear_selection()},deep:!0},table_option1:{handler:function(){this.get_meta1(),this.clear_selection1()},deep:!0},table_option2:{handler:function(){this.get_meta2(),this.clear_selection2()},deep:!0}},created:function(){this.GetGroups(),this.GetUserprofiles()},mounted:function(){this.bind_data()},computed:Object(i["a"])(Object(i["a"])({},Object(n["c"])({Groups:"StateGroups",Userprofiles:"StateUserprofiles"})),{},{filteredList:function(){var t=this;return this.Groups.filter((function(e){return e.titleG.toLowerCase().includes(t.search.toLowerCase())&&0==e.accepted}))}}),methods:Object(i["a"])(Object(i["a"])({},Object(n["b"])(["GetGroups","GetUserprofiles"])),{},{bind_data:function(){this.columns2=[{key:"imageG",label:"Image",class:"text-center  "},{key:"titleG",label:"Title"},{key:"nbposts",label:"Posts Number"},{key:"nbmembers",label:"Members Number"},{key:"userprofileG",label:"Admin"},{key:"accepted",label:"Status",class:"text-center  "}],this.table_option2.total_rows=this.Groups.length,this.get_meta2()},on_filtered:function(t){this.refresh_table(t.length)},refresh_table:function(t){this.table_option.total_rows=t,this.table_option.currentPage=1},get_meta:function(){this.meta=this.get_common_meta(this.table_option)},get_common_meta:function(t){var e,a,s=t.page_size<1?1:Math.ceil(t.total_rows/t.page_size);s=Math.max(s||0,1);var r=5,i="undefined"!==typeof r&&r<s;i?(e=Math.max(t.current_page-Math.floor(r/2),1),a=e+r-1,a>s&&(a=s,e=a-r+1)):(e=1,a=s);var n=(t.current_page-1)*t.page_size,l=Math.min(n+t.page_size-1,t.total_rows-1),o=Array.from(Array(a+1-e).keys()).map((function(t){return e+t}));return{total_items:t.total_rows,current_page:t.current_page,page_size:t.page_size,total_pages:s,start_page:e,end_page:a,start_index:n,end_index:l,pages:o}},select_all:function(){this.selected_rows=this.$refs.basic_table.paginatedItems.map((function(t){return t.id})),this.is_select_all||this.clear_selection(),this.check_select_all()},check_select_all:function(){var t=this.$refs.basic_table.paginatedItems.map((function(t){return t.id}));this.is_select_all=!1,t.length==this.selected_rows.length&&(this.is_select_all=!0)},clear_selection:function(){this.is_select_all=!1,this.selected_rows=[]},on_filtered1:function(t){this.refresh_table1(t.length)},refresh_table1:function(t){this.table_option1.total_rows=t,this.table_option1.currentPage=1},get_meta1:function(){this.meta1=this.get_common_meta(this.table_option1)},select_all1:function(){this.selected_rows1=this.$refs.basic_table1.paginatedItems.map((function(t){return t.id})),this.is_select_all1||this.clear_selection1(),this.check_select_all1()},check_select_all1:function(){var t=this.$refs.basic_table1.paginatedItems.map((function(t){return t.id}));this.is_select_all1=!1,t.length==this.selected_rows1.length&&(this.is_select_all1=!0)},clear_selection1:function(){this.is_select_all1=!1,this.selected_rows1=[]},on_filtered2:function(t){this.refresh_table2(t.length)},refresh_table2:function(t){this.table_option2.total_rows=t,this.table_option2.currentPage=1},get_meta2:function(){this.meta2=this.get_common_meta(this.table_option2)},select_all2:function(){this.selected_rows2=this.$refs.basic_table2.paginatedItems.map((function(t){return t.id})),this.is_select_all2||this.clear_selection2(),this.check_select_all2()},check_select_all2:function(){var t=this.$refs.basic_table2.paginatedItems.map((function(t){return t.id}));this.is_select_all2=!1,t.length==this.selected_rows2.length&&(this.is_select_all2=!0)},clear_selection2:function(){this.is_select_all2=!1,this.selected_rows2=[]}})},o=l,c=(a("b9f4"),a("2877")),u=Object(c["a"])(o,s,r,!1,null,null,null);e["default"]=u.exports},"9bdd":function(t,e,a){var s=a("825a"),r=a("2a62");t.exports=function(t,e,a,i){try{return i?e(s(a)[0],a[1]):e(a)}catch(n){r(t,"throw",n)}}},a630:function(t,e,a){var s=a("23e7"),r=a("4df4"),i=a("1c7e"),n=!i((function(t){Array.from(t)}));s({target:"Array",stat:!0,forced:n},{from:r})},ab13:function(t,e,a){var s=a("b622"),r=s("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[r]=!1,"/./"[t](e)}catch(s){}}return!1}},b9f4:function(t,e,a){"use strict";a("eeed")},caad:function(t,e,a){"use strict";var s=a("23e7"),r=a("4d64").includes,i=a("44d2");s({target:"Array",proto:!0},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d81d:function(t,e,a){"use strict";var s=a("23e7"),r=a("b727").map,i=a("1dde"),n=i("map");s({target:"Array",proto:!0,forced:!n},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},eeed:function(t,e,a){}}]);
//# sourceMappingURL=chunk-4bee6ef5.278a99a7.js.map