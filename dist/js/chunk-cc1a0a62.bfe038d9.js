(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc1a0a62"],{"52f6":function(e,t,s){"use strict";s("b854")},7095:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"layout-px-spacing"},[s("portal",{attrs:{to:"breadcrumb"}},[s("ul",{staticClass:"navbar-nav flex-row"},[s("li",[s("div",{staticClass:"page-header"},[s("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[s("span",[e._v("Update Question")])])])])])])])]),s("div",{staticClass:"row layout-top-spacing"},[s("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("div",{staticClass:"panel-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"flRegistrationForm"}},[s("div",{staticClass:"statbox panel box box-shadow"},[e._m(0),s("div",{staticClass:"panel-body"},[s("b-form",{attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[s("label",[e._v("Question title")]),s("b-form-group",{staticClass:"mb-3"},[s("b-input",{class:[e.is_submit_form1?e.form.titleQ&&e.form.titleQ.length<100&&e.form.titleQ.length>15?"is-valid":"is-invalid":""],attrs:{type:"text",placeholder:"Question title "},model:{value:e.form.titleQ,callback:function(t){e.$set(e.form,"titleQ",t)},expression:"form.titleQ"}}),s("b-form-valid-feedback",[e._v("Looks good!")]),s("b-form-invalid-feedback",{class:{"d-block":e.is_submit_form1&&!e.form.titleQ}},[e._v("Please Enter content between 15 and 100 characters")])],1),s("label",[e._v("Question details")]),s("b-form-group",{staticClass:"mb-3"},[s("b-textarea",{class:[e.is_submit_form1?e.form.contentQ&&e.form.contentQ.length<500&&e.form.contentQ.length>25?"is-valid":"is-invalid":""],attrs:{rows:"4",type:"text",placeholder:"Question details"},model:{value:e.form.contentQ,callback:function(t){e.$set(e.form,"contentQ",t)},expression:"form.contentQ"}}),s("b-form-valid-feedback",[e._v("Looks good!")]),s("b-form-invalid-feedback",{class:{"d-block":e.is_submit_form1&&!e.form.contentQ}},[e._v("Please Enter content between 25 and 500 characters")])],1),s("label",[e._v("Question image")]),s("div",{staticClass:"mb-4"},[s("b-file",{on:{change:e.onFileChanged}})],1),s("label",[e._v("Question Category")]),s("b-select",{attrs:{value:"Default select"},model:{value:e.form.categoryQ,callback:function(t){e.$set(e.form,"categoryQ",t)},expression:"form.categoryQ"}},e._l(e.Questioncategories,(function(t){return s("b-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.typeC))])})),1),s("b-form-valid-feedback",[e._v("Looks good!")]),s("b-form-invalid-feedback",{class:{"d-block":e.is_submit_form1&&!e.form.categoryQ}},[e._v("Please fill the Category")]),s("b-button",{staticClass:"mt-4 col-lg-3 ",attrs:{variant:"primary"},on:{click:e.submit}},[e._v("Submit")])],1)],1)])])])])])])],1)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"panel-heading"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[s("h4",[e._v("Update your Question")])])])])}],i=s("1da1"),o=s("5530"),n=(s("96cf"),s("4de4"),s("d3b7"),s("c1df")),l=s.n(n),c=s("2b0e"),u=s("bc3a"),f=s.n(u),m=(s("a1c4"),s("e520"),s("2f62"));c["default"].filter("formatDate",(function(e){if(e)return l()(String(e)).format("DD MMMM YYYY H:mm")}));var d={name:"Questions",components:{},data:function(){return{form:{titleQ:"",contentQ:"",userprofileQ:"",userentrepriseQ:"",categoryQ:0},image:null,uprofile:[],CurrentUser:[],is_submit_form1:!1}},created:function(){var e=this;for(var t in this.GetUsers(),this.GetUserprofiles(),this.GetQuestioncategories(),this.GetUserentreprises(),this.Users)this.Users[t].username==this.User&&(this.CurrentUser=this.Users[t]);f.a.get("/question/question-detail/"+this.$route.params.id+"/").then((function(t){e.form=t.data;var s=!1;for(var r in e.Userentreprises)e.Userentreprises[r].userE==e.CurrentUser.id&&(s=!0,e.$router.push("/questions"),e.$swal({title:"You cannot access this page !",padding:"2em"}));if(0==s){var a=!1;for(var i in e.Userprofiles)e.Userprofiles[i].userU==e.CurrentUser.id&&(e.Userprofiles[i].id!=e.form.userprofileQ&&(e.$router.push("/questions"),e.$swal({title:"This is not your Question !",padding:"2em"})),a=!0);0==a&&e.$router.push("/auth/userinfo")}}))},methods:Object(o["a"])(Object(o["a"])({onFileChanged:function(e){this.image=e.target.files[0],console.log(this.image)}},Object(m["b"])(["GetUserentreprises","CreateNotification","GetQuestioncategories","CreateQuestion","GetUsers","GetUserprofiles"])),{},{submit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.is_submit_form1=!0,!(e.form.titleQ&&e.form.titleQ.length<100&&e.form.titleQ.length>15&&e.form.contentQ&&e.form.contentQ.length<500&&e.form.contentQ.length>25)){t.next=16;break}if(s=new FormData,null!=e.image&&s.append("imageQ",e.image),s.append("titleQ",e.form.titleQ),s.append("contentQ",e.form.contentQ),s.append("categoryQ",e.form.categoryQ),e.CurrentUser.is_superuser?s.append("accepted",!0):s.append("accepted",!1),s.append("modified",!0),f.a.put("/question/question-update/"+e.$route.params.id+"/",s),0!=e.CurrentUser.is_superuser){t.next=15;break}return t.next=14,e.CreateNotification({message:" requested a Verification on their question !",byuserprofileNo:e.form.userprofileQ,byuserentrepriseNo:e.form.userentrepriseQ,questionNo:1,foradmin:!0});case 14:e.$swal("Good Job!","Your question has been updated successfuly, Please wait for the administator to accept it !","success");case 15:e.$router.push("/questions");case 16:t.next=21;break;case 18:throw t.prev=18,t.t0=t["catch"](0),"Il ya un error!";case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))()}}),computed:Object(o["a"])(Object(o["a"])({},Object(m["c"])({Userentreprises:"StateUserentreprises",Questioncategories:"StateQuestioncategories",Userprofiles:"StateUserprofiles",User:"StateUser",Users:"StateUsers"})),{},{isLoggedIn:function(){return this.$store.getters.isAuthenticated}})},p=d,b=(s("52f6"),s("2877")),v=Object(b["a"])(p,r,a,!1,null,"ead6e778",null);t["default"]=v.exports},a1c4:function(e,t,s){},b854:function(e,t,s){},e520:function(e,t,s){}}]);
//# sourceMappingURL=chunk-cc1a0a62.bfe038d9.js.map