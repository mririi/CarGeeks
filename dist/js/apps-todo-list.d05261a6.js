(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apps-todo-list"],{"0ccb":function(t,e,s){var i=s("e330"),a=s("50c4"),u=s("577e"),r=s("1148"),n=s("1d80"),o=i(r),l=i("".slice),c=Math.ceil,d=function(t){return function(e,s,i){var r,d,m=u(n(e)),p=a(s),h=m.length,v=void 0===i?" ":u(i);return p<=h||""==v?m:(r=p-h,d=o(v,c(r/v.length)),d.length>r&&(d=l(d,0,r)),t?m+d:d+m)}};t.exports={start:d(!1),end:d(!0)}},1148:function(t,e,s){"use strict";var i=s("da84"),a=s("5926"),u=s("577e"),r=s("1d80"),n=i.RangeError;t.exports=function(t){var e=u(r(this)),s="",i=a(t);if(i<0||i==1/0)throw n("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(s+=e);return s}},2532:function(t,e,s){"use strict";var i=s("23e7"),a=s("e330"),u=s("5a34"),r=s("1d80"),n=s("577e"),o=s("ab13"),l=a("".indexOf);i({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~l(n(r(this)),n(u(t)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,s){var i=s("861d"),a=s("c6b6"),u=s("b622"),r=u("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==a(t))}},"49ad":function(t,e,s){},"4d90":function(t,e,s){"use strict";var i=s("23e7"),a=s("0ccb").start,u=s("9a0c");i({target:"String",proto:!0,forced:u},{padStart:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,s){var i=s("da84"),a=s("44e7"),u=i.TypeError;t.exports=function(t){if(a(t))throw u("The method doesn't accept regular expressions");return t}},"62e41":function(t,e,s){},"8cc9":function(t,e,s){"use strict";s("49ad")},"97fe":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout-px-spacing todo-list"},[s("portal",{attrs:{to:"breadcrumb"}},[s("ul",{staticClass:"navbar-nav flex-row"},[s("li",[s("div",{staticClass:"page-header"},[s("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("a",{attrs:{href:"javascript:;"}},[t._v("Apps")])]),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[s("span",[t._v("Todo List")])])])])])])])]),s("div",{staticClass:"row layout-top-spacing"},[s("div",{staticClass:"col-xl-12 col-lg-12 col-md-12"},[s("div",{staticClass:"mail-box-container"},[s("div",{staticClass:"mail-overlay",class:{"mail-overlay-show":t.is_show_task_menu},on:{click:function(e){t.is_show_task_menu=!1}}}),s("div",{staticClass:"tab-title",class:{"mail-menu-show":t.is_show_task_menu}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 col-sm-12 col-12 text-center"},[s("svg",{staticClass:"feather feather-clipboard",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}}),s("rect",{attrs:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"}})]),s("h5",{staticClass:"app-title"},[t._v("Todo List")])]),s("perfect-scrollbar",{staticClass:"todoList-sidebar-scroll"},[s("div",{staticClass:"col-md-12 col-sm-12 col-12 mt-4 pl-0"},[s("b-tabs",{attrs:{pills:"","nav-class":"d-block"},model:{value:t.tab_index,callback:function(e){t.tab_index=e},expression:"tab_index"}},[s("b-tab",{attrs:{"button-id":"all-list"},on:{click:function(e){return t.tab_changed("")}},scopedSlots:t._u([{key:"title",fn:function(){return[s("svg",{staticClass:"feather feather-list",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),s("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),s("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),s("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),s("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),s("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})]),t._v(" Inbox "),s("span",{staticClass:"todo-badge badge"},[t._v(" "+t._s(t.task_list&&t.task_list.filter((function(t){return"trash"!=t.status})).length)+" ")])]},proxy:!0}])}),s("b-tab",{attrs:{"button-id":"todo-task-done"},on:{click:function(e){return t.tab_changed("complete")}},scopedSlots:t._u([{key:"title",fn:function(){return[s("svg",{staticClass:"feather feather-thumbs-up",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"}})]),t._v(" Done "),s("span",{staticClass:"todo-badge badge"},[t._v(" "+t._s(t.task_list&&t.task_list.filter((function(t){return"complete"==t.status})).length)+" ")])]},proxy:!0}])}),s("b-tab",{attrs:{"button-id":"todo-task-important"},on:{click:function(e){return t.tab_changed("important")}},scopedSlots:t._u([{key:"title",fn:function(){return[s("svg",{staticClass:"feather feather-star",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("polygon",{attrs:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}})]),t._v(" Important "),s("span",{staticClass:"todo-badge badge"},[t._v(" "+t._s(t.task_list&&t.task_list.filter((function(t){return"important"==t.status})).length)+" ")])]},proxy:!0}])}),s("b-tab",{attrs:{"button-id":"todo-task-trash"},on:{click:function(e){return t.tab_changed("trash")}},scopedSlots:t._u([{key:"title",fn:function(){return[s("svg",{staticClass:"feather feather-trash-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("polyline",{attrs:{points:"3 6 5 6 21 6"}}),s("path",{attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}),s("line",{attrs:{x1:"10",y1:"11",x2:"10",y2:"17"}}),s("line",{attrs:{x1:"14",y1:"11",x2:"14",y2:"17"}})]),t._v(" Trash ")]},proxy:!0}])})],1)],1)]),s("a",{staticClass:"btn",attrs:{id:"addTask",href:"javascript:;"},on:{click:function(e){return t.edit_task()}}},[s("svg",{staticClass:"feather feather-plus",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("line",{attrs:{x1:"12",y1:"5",x2:"12",y2:"19"}}),s("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})]),t._v(" New Task ")])],1)]),s("div",{staticClass:"accordion todo-inbox",attrs:{id:"todo-inbox"}},[s("div",{staticClass:"search"},[s("b-input",{staticClass:"input-search",attrs:{placeholder:"Search Here..."},on:{keyup:function(e){return t.search_tasks()}},model:{value:t.search_task,callback:function(e){t.search_task=e},expression:"search_task"}}),s("div",{staticClass:"d-flex align-items-center",on:{click:function(e){t.is_show_task_menu=!t.is_show_task_menu}}},[s("svg",{staticClass:"feather feather-menu mail-menu d-lg-none",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("line",{attrs:{x1:"3",y1:"12",x2:"21",y2:"12"}}),s("line",{attrs:{x1:"3",y1:"6",x2:"21",y2:"6"}}),s("line",{attrs:{x1:"3",y1:"18",x2:"21",y2:"18"}})])])],1),s("div",{staticClass:"todo-box"},[s("perfect-scrollbar",{staticClass:"todo-box-scroll",attrs:{options:{wheelSpeed:.5,swipeEasing:!0,minScrollbarLength:40,maxScrollbarLength:300,suppressScrollX:!0}}},t._l(t.filtered_task_list,(function(e){return s("div",{key:e.task_id,staticClass:"todo-item all-list",class:{"todo-task-done":"complete"==e.status}},[s("div",{staticClass:"todo-item-inner"},[s("b-checkbox",{staticClass:"checkbox-primary new-control",attrs:{variant:"primary",checked:"complete"==e.status},on:{change:function(s){return t.task_complete(e)}}}),s("div",{staticClass:"todo-content",on:{click:function(s){return t.view_task(e)}}},[s("h5",{staticClass:"todo-heading"},[t._v(t._s(e.title))]),s("p",{staticClass:"meta-date"},[t._v(t._s(e.date))]),s("p",{staticClass:"todo-text"},[t._v(t._s(e.description_text))])]),s("div",{staticClass:"priority-dropdown"},[s("b-dropdown",{attrs:{right:!0,"toggle-tag":"a",variant:"icon-only","toggle-class":t.priority_class(e)},scopedSlots:t._u([{key:"button-content",fn:function(){return[s("svg",{staticClass:"feather feather-alert-octagon",staticStyle:{width:"24px",height:"24px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("polygon",{attrs:{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}}),s("line",{attrs:{x1:"12",y1:"8",x2:"12",y2:"12"}}),s("line",{attrs:{x1:"12",y1:"16",x2:"12",y2:"16"}})])]},proxy:!0}],null,!0)},[s("b-dropdown-item",{attrs:{"link-class":"danger"},on:{click:function(s){return t.set_priority(e,"high")}}},[s("svg",{staticClass:"feather feather-alert-octagon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("polygon",{attrs:{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}}),s("line",{attrs:{x1:"12",y1:"8",x2:"12",y2:"12"}}),s("line",{attrs:{x1:"12",y1:"16",x2:"12",y2:"16"}})]),t._v(" High ")]),s("b-dropdown-item",{attrs:{"link-class":"warning"},on:{click:function(s){return t.set_priority(e,"middle")}}},[s("svg",{staticClass:"feather feather-alert-octagon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("polygon",{attrs:{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}}),s("line",{attrs:{x1:"12",y1:"8",x2:"12",y2:"12"}}),s("line",{attrs:{x1:"12",y1:"16",x2:"12",y2:"16"}})]),t._v(" Middle ")]),s("b-dropdown-item",{attrs:{"link-class":"primary"},on:{click:function(s){return t.set_priority(e,"low")}}},[s("svg",{staticClass:"feather feather-alert-octagon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("polygon",{attrs:{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}}),s("line",{attrs:{x1:"12",y1:"8",x2:"12",y2:"12"}}),s("line",{attrs:{x1:"12",y1:"16",x2:"12",y2:"16"}})]),t._v(" Low ")])],1)],1),s("div",{staticClass:"action-dropdown"},[s("b-dropdown",{attrs:{right:!0,"toggle-tag":"a",variant:"icon-only"},scopedSlots:t._u([{key:"button-content",fn:function(){return[s("svg",{staticClass:"feather feather-more-vertical",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),s("circle",{attrs:{cx:"12",cy:"5",r:"1"}}),s("circle",{attrs:{cx:"12",cy:"19",r:"1"}})])]},proxy:!0}],null,!0)},["trash"==e.status?[s("b-dropdown-item",{on:{click:function(s){return t.delete_task(e,"delete_permanent")}}},[t._v("Permanent Delete")]),s("b-dropdown-item",{on:{click:function(s){return t.delete_task(e,"restore")}}},[t._v("Revive Task")])]:[s("b-dropdown-item",{on:{click:function(s){return t.edit_task(e)}}},[t._v("Edit")]),"important"==e.status?s("b-dropdown-item",{on:{click:function(s){return t.set_important(e)}}},[t._v("Back to List")]):s("b-dropdown-item",{on:{click:function(s){return t.set_important(e)}}},[t._v("Important")]),s("b-dropdown-item",{on:{click:function(s){return t.delete_task(e,"delete")}}},[t._v("Delete")])]],2)],1)],1)])})),0)],1)])]),s("b-modal",{attrs:{centered:"",id:"todoShowListItem","hide-header":!0,"content-class":"todolist-popup"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[s("b-button",{attrs:{variant:"default","data-dismiss":"modal"},on:{click:function(e){return t.$bvModal.hide("todoShowListItem")}}},[s("svg",{staticClass:"feather feather-trash",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("polyline",{attrs:{points:"3 6 5 6 21 6"}}),s("path",{attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}})]),t._v(" Close ")])]},proxy:!0}])},[s("div",{on:{click:function(e){return t.$bvModal.hide("todoShowListItem")}}},[s("svg",{staticClass:"feather feather-x close",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","data-dismiss":"modal"}},[s("line",{attrs:{x1:"18",y1:"6",x2:"6",y2:"18"}}),s("line",{attrs:{x1:"6",y1:"6",x2:"18",y2:"18"}})])]),t.selected_task?s("div",{staticClass:"compose-box"},[s("div",{staticClass:"compose-content"},[s("h5",{staticClass:"task-heading"},[t._v(t._s(t.selected_task.title))]),s("p",{staticClass:"task-text overflow-auto",domProps:{innerHTML:t._s(t.selected_task.description)}})])]):t._e()]),s("b-modal",{attrs:{centered:"",id:"addTaskModal","hide-header":!0,"content-class":"todolist-popup"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[s("b-button",{attrs:{variant:"default","data-dismiss":"modal"},on:{click:function(e){return t.$bvModal.hide("addTaskModal")}}},[s("i",{staticClass:"flaticon-cancel-12"}),t._v(" Discard")]),s("b-button",{staticClass:"add-tsk",attrs:{variant:"default"},on:{click:function(e){return t.save_task()}}},[t._v(t._s(t.params.task_id?"Update":"Add"))])]},proxy:!0}])},[s("div",{on:{click:function(e){return t.$bvModal.hide("addTaskModal")}}},[s("svg",{staticClass:"feather feather-x close",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","data-dismiss":"modal"}},[s("line",{attrs:{x1:"18",y1:"6",x2:"6",y2:"18"}}),s("line",{attrs:{x1:"6",y1:"6",x2:"18",y2:"18"}})])]),s("div",{staticClass:"compose-box"},[s("div",{staticClass:"compose-content"},[s("h5",{},[t._v(t._s(t.params.task_id?"Update Task":"Add Task"))]),s("b-form",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"d-flex mail-to mb-4"},[s("svg",{staticClass:"feather feather-edit-3 flaticon-notes",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M12 20h9"}}),s("path",{attrs:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}})]),s("div",{staticClass:"w-100"},[s("b-input",{attrs:{placeholder:"Task Title"},model:{value:t.params.title,callback:function(e){t.$set(t.params,"title",e)},expression:"params.title"}})],1)])])]),s("div",{staticClass:"d-flex  mail-subject mb-4"},[s("svg",{staticClass:"feather feather-file-text flaticon-menu-list flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}}),s("polyline",{attrs:{points:"14 2 14 8 20 8"}}),s("line",{attrs:{x1:"16",y1:"13",x2:"8",y2:"13"}}),s("line",{attrs:{x1:"16",y1:"17",x2:"8",y2:"17"}}),s("polyline",{attrs:{points:"10 9 9 9 8 9"}})]),s("div",{staticClass:"w-100"},[s("quill-editor",{ref:"editor",staticStyle:{"min-height":"200px"},attrs:{options:t.editor_options},model:{value:t.params.description,callback:function(e){t.$set(t.params,"description",e)},expression:"params.description"}})],1)])])],1)])])],1)])],1)},a=[],u=(s("4de4"),s("d3b7"),s("caad"),s("2532"),s("e9c4"),s("7db0"),s("a4d3"),s("e01a"),s("4d90"),s("a434"),s("2b0e")),r=s("953d"),n=s.n(r);s("a753"),s("8096"),s("14e1"),s("62e41"),s("b1b2");u["default"].use(n.a);var o={metaInfo:{title:"Chat Application"},components:{},data:function(){return{is_show_task_menu:!1,params:{task_id:null,title:"",description:""},tab_index:0,task_list:[],filtered_task_list:[],search_task:"",selected_tab:"",selected_task:null,editor_options:{modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline"],["image","code-block"]]}}}},mounted:function(){this.bind_task_list()},methods:{bind_task_list:function(){this.task_list=[{task_id:1,title:"Meeting with Shaun Park at 4:50pm",date:"Aug, 07 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:""},{task_id:2,title:"Team meet at Starbucks",date:"Aug, 06 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"low",status:""},{task_id:3,title:"Meet Lisa to discuss project details",date:"Aug, 05 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:"complete"},{task_id:4,title:"Download Complete",date:"Aug, 04 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"low",status:""},{task_id:5,title:"Conference call with Marketing Manager",date:"Aug, 03 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"high",status:"important"},{task_id:6,title:"New User Registered",date:"Aug, 02 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:"important"},{task_id:7,title:"Fix issues in new project",date:"Aug, 01 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:""},{task_id:8,title:"Check All functionality",date:"Aug, 07 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:"important"},{task_id:9,title:"Check Repository",date:"Aug, 07 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:"complete"},{task_id:10,title:"Trashed Tasks",date:"Aug, 08 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:"trash"},{task_id:11,title:"Trashed Tasks 2",date:"Aug, 09 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:"trash"},{task_id:12,title:"Trashed Tasks 3",date:"Aug, 10 2020",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",description_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.",priority:"middle",status:"trash"}],this.search_tasks()},tab_changed:function(t){this.selected_tab=t,this.search_tasks(),this.is_show_task_menu=!1},search_tasks:function(){var t,e=this;t=this.selected_tab?this.task_list.filter((function(t){return t.status==e.selected_tab})):this.task_list.filter((function(t){return"trash"!=t.status})),this.filtered_task_list=t.filter((function(t){return t.title.toLowerCase().includes(e.search_task)}))},priority_class:function(t){return"low"==t.priority?"primary":"middle"==t.priority?"warning":"high"==t.priority?"danger":void 0},set_priority:function(t,e){t.priority=e},task_complete:function(t){t.status?t.status="":t.status="complete"},set_important:function(t){"important"==t.status?(t.status="",this.tab_index=0,this.tab_changed("")):t.status="important"},delete_task:function(t,e){"delete"==e&&(t.status="trash"),"delete_permanent"==e?this.task_list=this.task_list.filter((function(e){return e.task_id!=t.task_id})):"restore"==e&&(t.status=""),this.search_tasks()},view_task:function(t){this.selected_task=t,this.$bvModal.show("todoShowListItem")},edit_task:function(t){this.params={task_id:null,title:"",description:""},t&&(this.params=JSON.parse(JSON.stringify(t))),this.$bvModal.show("addTaskModal")},save_task:function(){var t=this;if(!this.params.title)return this.$bvToast.toast("Title is required.",{headerClass:"d-none",bodyClass:"toast-danger",toaster:"b-toaster-top-center",autoHideDelay:1e3}),!1;var e=this.$refs.editor.quill.getText();if(this.params.task_id){var s=this.task_list.find((function(e){return e.task_id==t.params.task_id}));s.title=this.params.title,s.description=this.params.description,s.description_text=e}else{var i=this.task_list.reduce((function(t,e){return e.task_id>t?e.task_id:t}),this.task_list[0].task_id),a=new Date,u=String(a.getDate()).padStart(2,"0"),r=String(a.getMonth()),n=a.getFullYear(),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l={task_id:i+1,title:this.params.title,description:this.params.description,description_text:e,date:o[r]+", "+u+" "+n,priority:"low",status:""};this.task_list.splice(0,0,l),this.search_tasks()}this.$bvModal.hide("addTaskModal"),this.$bvToast.toast("Task saved successfully.",{headerClass:"d-none",bodyClass:"toast-success",toaster:"b-toaster-top-center",autoHideDelay:1e3})}}},l=o,c=(s("8cc9"),s("2877")),d=Object(c["a"])(l,i,a,!1,null,null,null);e["default"]=d.exports},"9a0c":function(t,e,s){var i=s("342f");t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(i)},a434:function(t,e,s){"use strict";var i=s("23e7"),a=s("da84"),u=s("23cb"),r=s("5926"),n=s("07fa"),o=s("7b0b"),l=s("65f0"),c=s("8418"),d=s("1dde"),m=d("splice"),p=a.TypeError,h=Math.max,v=Math.min,g=9007199254740991,b="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!m},{splice:function(t,e){var s,i,a,d,m,f,k=o(this),_=n(k),x=u(t,_),w=arguments.length;if(0===w?s=i=0:1===w?(s=0,i=_-x):(s=w-2,i=v(h(r(e),0),_-x)),_+s-i>g)throw p(b);for(a=l(k,i),d=0;d<i;d++)m=x+d,m in k&&c(a,d,k[m]);if(a.length=i,s<i){for(d=x;d<_-i;d++)m=d+i,f=d+s,m in k?k[f]=k[m]:delete k[f];for(d=_;d>_-i+s;d--)delete k[d-1]}else if(s>i)for(d=_-i;d>x;d--)m=d+i-1,f=d+s-1,m in k?k[f]=k[m]:delete k[f];for(d=0;d<s;d++)k[d+x]=arguments[d+2];return k.length=_-i+s,a}})},ab13:function(t,e,s){var i=s("b622"),a=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[a]=!1,"/./"[t](e)}catch(i){}}return!1}},b1b2:function(t,e,s){},caad:function(t,e,s){"use strict";var i=s("23e7"),a=s("4d64").includes,u=s("44d2");i({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),u("includes")}}]);
//# sourceMappingURL=apps-todo-list.d05261a6.js.map