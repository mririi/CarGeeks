<template>
  <div class="layout-px-spacing">
    <portal to="breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page"><span>Update Service</span></li>
              </ol>
            </nav>
          </div>
        </li>
      </ul>
    </portal>

    <div class="row layout-top-spacing">
      <div class="col-xl-12 col-md-12 col-sm-12 col-12">
        <div class="panel-body">
          <div class="row">
            <div id="flRegistrationForm" class="col-lg-12 layout-spacing">
              <div class="statbox panel box box-shadow">
                <div class="panel-heading">
                  <div class="row">
                    <div class="col-xl-10 col-md-12 col-sm-12 col-12">
                      <h4>Update {{form.titleS}}</h4>
                    </div>
                  </div>
                </div>
                <div class="panel-body">
                  <b-form novalidate @submit.prevent="submit">
                    <label >Title <span style="color:red">*</span></label>
                    <b-form-group class="mb-3">
                      <b-input type="text" placeholder="Service title " v-model="form.titleS" :class="[is_submit_form1 ? (form.titleS && form.titleS.length<24 && form.titleS.length>15 ? 'is-valid' : 'is-invalid') : '']"></b-input>
                      <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                      <b-form-invalid-feedback :class="{ 'd-block': is_submit_form1 && !form.titleS  }">Please enter a title between 15 and 24 characters</b-form-invalid-feedback>
                    </b-form-group>
                    <label >Service details <span style="color:red">*</span></label>
                    <b-form-group class="mb-3">
                      <b-textarea rows="4" type="text" v-model="form.details" placeholder="Service details" :class="[is_submit_form1 ? (form.details && form.details.length<500 && form.details.length>25 ? 'is-valid' : 'is-invalid') : '']"></b-textarea>
                    <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                      <b-form-invalid-feedback :class="{ 'd-block': is_submit_form1 && !form.details }">Please enter content between 25 and 500 characters</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-row class="mb-1">
                    <label class="col-6" >Address <span style="color:red">*</span></label>
                    <label >Email <span style="color:red">*</span></label>
                    </b-form-row>
                  <b-form-row>
                    <b-form-group class="col-6 mb-3">
                      <b-input  type="text" v-model="form.addressS" placeholder="Service Address" :class="[is_submit_form1 ? (form.addressS ? 'is-valid' : 'is-invalid') : '']" />
                    <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                      <b-form-invalid-feedback :class="{ 'd-block': is_submit_form1 && !form.addressS }">Please enter an address !</b-form-invalid-feedback>
                    </b-form-group>
                    
                    
                    <b-form-group class="mb-3 col-6">
                      <b-input type="text" placeholder="Email " v-model="form.email"  :class="[is_submit_form1 ? (form.email && email_validate(form.email) ? 'is-valid' : 'is-invalid') : '']"></b-input>
                      <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                      <b-form-invalid-feedback :class="{ 'd-block': is_submit_form1 && !form.email && !email_validate(form.email)  }">Please enter a valid email !</b-form-invalid-feedback>
                    </b-form-group>
                    </b-form-row>
                    <b-form-row class="mb-1">
                    <b-form-group  class="col-md-6">
                      <label>Phone number <span style="color:red">*</span></label>
                      <b-input type="number" v-model="form.contactS" :class="[is_submit_form1 ? (form.contactS ? 'is-valid' : 'is-invalid') : '']" />
                      <b-form-invalid-feedback :class="{ 'd-block': is_submit_form1 && !form.contactS }">Please fill the Phone number</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group class="col-md-6" >
                      <label>Select Country <span style="color:red">*</span></label>
                      <country-select
                        class="country-select"
                        v-model="form.country"
                        :country="form.country"
                        countryName
                        topCountry="US"
                        :class="[is_submit_form1 ? (form.country ? 'is-valid' : 'is-invalid') : '']"
                      />
                      <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                      <b-form-invalid-feedback :class="{ 'd-block': is_submit_form1 && !form.country }">Please fill the Country</b-form-invalid-feedback>
                    </b-form-group>
                    </b-form-row>
                    <b-form-row class="mb-1">
                    <label class="col-6" >Select Type <span style="color:red">*</span></label>
                    <label >Price <span style="color:red">*</span></label>
                    </b-form-row>
                    <b-form-row class="mb-1">
                    <b-form-group class="col-6">
                    <b-select value="Default select" v-model="form.typeS" :class="[is_submit_form1 ? (form.typeS ? 'is-valid' : 'is-invalid') : '']">
                      <b-select-option value="0">Select Type</b-select-option>
                      <b-select-option v-for="c in Servicetypes" :key="c.id" :value="c.id">{{c.descT}}</b-select-option>
                    </b-select>
                    <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                      <b-form-invalid-feedback :class="{ 'd-block': is_submit_form1 && !form.typeS }">Please fill the Type</b-form-invalid-feedback>
                   </b-form-group>
                    <b-form-group class="col-6 mb-3">
                      <b-input type="number"  v-model="form.priceS" placeholder="Price" :class="[is_submit_form1 ? (form.priceS ? 'is-valid' : 'is-invalid') : '']" />
                    <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                      <b-form-invalid-feedback :class="{ 'd-block': is_submit_form1 && !form.priceS }">Please Enter an address</b-form-invalid-feedback>
                    </b-form-group>
                    
                  </b-form-row>
                  <label >Insert image</label>
                    <div class="mb-4">
                      <b-file @change="onFileChanged"></b-file>
                    </div>
                     <small id="emailHelp2" class="form-text text-muted mt-3"><span style="color:red">*</span> Required Fields</small>
                    <b-button v-show="!disable"  @click="submit" variant="primary" class="mt-4 justfiy-content-end">Update</b-button>
                    <b-button v-show="disable" variant="primary" class="disabled">Updating..</b-button>                 
                  </b-form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.layout-px-spacing {
  min-height: calc(100vh - 170px) !important;
}
</style>
<script>
import axios from 'axios'
import '@/assets/sass/components/cards/card.scss';
import '@/assets/sass/forms/file-upload-with-preview.min.css';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'UpdateService',
  props:{
  },
  data() {
    return {
      disable:false,
      form: {
        titleS: '',
        addressS: '',
        userprofileS:'',
        priceS:null,
        country:'',
        contactS:0,
        email:'',
        details:'',
        typeS:0,
        promoted:''
      },
      mode:false,
      image:null,
      uprofile:[],
      CurrentUser:[],
      is_submit_form1:false, 
    };
  },
  created: function() {
    this.GetUsers()
    this.GetUserprofiles()
    this.GetServicetypes()
    this.GetUserentreprises()
    for (let u in this.Users){
      if(this.Users[u].username==this.User)
        {
          this.CurrentUser = this.Users[u];
        }
      }
       axios.get('/service/service-detail/' + this.$route.params.id + '/').then((response) => {
      this.form = response.data;
    
      let existuserentreprise=false
      for (let ue in this.Userentreprises){
      if(this.Userentreprises[ue].userE==this.CurrentUser.id)
        {
          existuserentreprise = true
          if(this.Userentreprises[ue].id!=this.form.userentrepriseS){
          this.$router.push('/services')
          this.$swal({
              title: 'This is not your Service !',
              padding: '2em'
          });
          }
        }
      }
      if (existuserentreprise==false){
        let existuserprofile=false
      for (let uu in this.Userprofiles){
      if(this.Userprofiles[uu].userU==this.CurrentUser.id)
        {
          if(this.Userprofiles[uu].id!=this.form.userprofileS){
            this.$router.push('/services')
            this.$swal({
              
              title: 'This is not your Service !',
              padding: '2em'
          });
          }
          existuserprofile = true
        }
      }
      if (existuserprofile==false){
        
        this.$router.push('/auth/userinfo')
      }
      }});
     
  },
    methods: {
    email_validate(email) {
      const regexp = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;
      return regexp.test(email);
    },
   onFileChanged (event) {
      this.image = event.target.files[0]
    },
    ...mapActions(["GetUserentreprises","CreateNotification","GetServicetypes","GetUsers","GetUserprofiles"]),
    async submit() {
      try {
        
        this.is_submit_form1 = true;
                if (this.form.titleS && this.form.titleS.length<100 && this.form.titleS.length>15 &&
                this.form.details && this.form.details.length<500 && this.form.details.length>25 &&
                  this.form.addressS &&
                  this.form.typeS &&
                  this.form.country &&
                  this.form.contactS &&
                  this.form.priceS &&
                  this.form.email && this.email_validate(this.form.email)
                ) {
                  this.disable=true
                  
      var formdata = new FormData();
      if (this.image!=null)
      {
        formdata.append("imageS", this.image);
      }
        formdata.append("titleS", this.form.titleS);
        formdata.append("addressS", this.form.addressS);
        formdata.append("contactS", this.form.contactS);
        formdata.append("country", this.form.country);
        formdata.append("priceS", this.form.priceS);
        formdata.append("email", this.form.email);
        formdata.append("details", this.form.details);
        formdata.append("typeS", this.form.typeS);
        if (this.CurrentUser.is_superuser){
        formdata.append("accepted", true);
        }else{
          formdata.append("accepted", false);
        }
        formdata.append("promoted", this.form.promoted);
        if(this.form.userprofileS!=null){
        formdata.append("userprofileS", this.form.userprofileS);
        }
        else if (this.form.userentrepriseS!=null){
        formdata.append("userentrepriseS", this.form.userentrepriseS);
        }
        
        await axios.post('/service/service-update/' + this.$route.params.id + '/',formdata);
        if (this.CurrentUser.is_superuser==false){
        await this.CreateNotification({message:' requested a Verification on their service !',byuserprofileNo:this.form.userprofileS,byuserentrepriseNo:this.form.userentrepriseS,serviceNo:this.form.id,foradmin:true})
        this.$swal('Good Job!', 'Your service has been updated successfuly, Please wait for the administator to accept it !', 'success');
        }
        
        this.$router.push("/services");
        }
      } catch (error) {
        this.disable=false
        console.log(error)
      }
    },
    
    },
    computed: {
    ...mapGetters({Userentreprises:"StateUserentreprises", Servicetypes:"StateServicetypes",Userprofiles:"StateUserprofiles", User: "StateUser",Users: "StateUsers"}),
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    },
    },
};
</script>