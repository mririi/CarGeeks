(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f089c17"],{"3f81":function(t,e,a){},a1c4:function(t,e,a){},cbf0:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-px-spacing"},[a("portal",{attrs:{to:"breadcrumb"}},[a("ul",{staticClass:"navbar-nav flex-row"},[a("li",[a("div",{staticClass:"page-header"},[a("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[a("span",[t._v("Add Category")])])])])])])])]),a("div",{staticClass:"row layout-top-spacing"},[a("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[a("div",{staticClass:"panel-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"flRegistrationForm"}},[a("div",{staticClass:"statbox panel box box-shadow"},[t._m(0),a("div",{staticClass:"panel-body"},[a("b-form",{attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("label",[t._v("Category name "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("b-form-group",{staticClass:"mb-3"},[a("b-input",{class:[t.is_submit_form1?t.form.typeC&&t.form.typeC.length<20&&t.form.typeC.length>4?"is-valid":"is-invalid":""],attrs:{type:"text",placeholder:"Category name "},model:{value:t.form.typeC,callback:function(e){t.$set(t.form,"typeC",e)},expression:"form.typeC"}}),a("b-form-valid-feedback",[t._v("Looks good!")]),a("b-form-invalid-feedback",{class:{"d-block":t.is_submit_form1&&!t.form.typeC}},[t._v("Please Enter a title between 4 and 20 characters")])],1),a("label",[t._v("Insert image")]),a("div",{staticClass:"mb-4"},[a("b-file",{on:{change:t.onFileChanged}})],1),a("small",{staticClass:"form-text text-muted mt-3",attrs:{id:"emailHelp2"}},[a("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" Required Fields")]),a("b-button",{staticClass:"mt-4 justfiy-content-end",attrs:{variant:"primary"},on:{click:t.submit}},[t._v("Submit")])],1)],1)])])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-10 col-md-12 col-sm-12 col-12"},[a("h4",[t._v("Add Category")])])])])}],r=a("1da1"),o=a("5530"),n=(a("96cf"),a("a1c4"),a("e520"),a("2f62")),c=a("bc3a"),l=a.n(c),u={metaInfo:{title:"Add Question"},components:{},data:function(){return{form:{typeC:""},image:null,is_submit_form1:!1}},created:function(){this.GetQuestioncategories()},methods:Object(o["a"])(Object(o["a"])({onFileChanged:function(t){this.image=t.target.files[0],console.log(this.image)}},Object(n["b"])(["GetQuestioncategories"])),{},{submit:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.is_submit_form1=!0,!(t.form.typeC&&t.form.typeC.length<20&&t.form.typeC.length>4)){e.next=10;break}return a=new FormData,null!=t.image&&a.append("imageCat",t.image),a.append("typeC",t.form.typeC),e.next=8,l.a.post("/questioncategory/questioncategory-create/",a);case 8:t.$swal("Good Job!","Category created successfully !","success"),t.$router.push("/dashboard/categorylist");case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e["catch"](0),"Il ya un error!";case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()}}),computed:Object(o["a"])(Object(o["a"])({},Object(n["c"])({Questioncategories:"StateQuestioncategories"})),{},{isLoggedIn:function(){return this.$store.getters.isAuthenticated}})},d=u,m=(a("fb6b"),a("2877")),b=Object(m["a"])(d,s,i,!1,null,"71da150d",null);e["default"]=b.exports},e520:function(t,e,a){},fb6b:function(t,e,a){"use strict";a("3f81")}}]);
//# sourceMappingURL=chunk-6f089c17.89f647b4.js.map