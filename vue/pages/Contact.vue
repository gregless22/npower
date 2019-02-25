<!-- Contact.vue -->

<template>
  <div>
    <layout>
       
      <b-form class="w-100" id="needs-validation" novalidate>
        
          <b-col class="notification-wrapper" cols="2">
            <notification
              v-for="notification in notifications" 
              :key="notification.index" 
              :variant="notification.variant" 
              :message="notification.message">
            </notification>
          </b-col>
       
        <b-row class="h-100" align-h="center">
          <b-col cols="12" md="8" lg="6" class="text-justify">
            <h1>Contact</h1>
            <b-row align-h="start" class="mt-5">
              <b-col cols="12" sm="10" md="8">
                <!-- name field -->
                <b-form-group label="Name:" label-for="name">
                  <b-form-input 
                    id="name" 
                    type="text" 
                    v-model="form.name"
                    required>
                  </b-form-input>
                  <b-form-invalid-feedback>
                    Name is not valid
                  </b-form-invalid-feedback>
                </b-form-group>

                <!-- email field -->
                <b-form-group label="Email:" label-for="email">
                  <b-form-input 
                    id="email" 
                    type="email" 
                    v-model="form.email"
                    required>
                  </b-form-input>
                  <b-form-invalid-feedback>
                    Email is not valid
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <!-- topic field -->
                <b-form-group label="Topic:" label-for="topic">
                  <b-form-input 
                    id="topic" 
                    type="text" 
                    v-model="form.topic"
                    required>
                  </b-form-input>
                  <b-form-invalid-feedback>
                    Topic is required
                  </b-form-invalid-feedback>
                </b-form-group>

                <!-- message field -->
                <b-form-group label="Message:" label-for="message">
                  <b-form-textarea 
                    id="message" 
                    v-model="form.message" 
                    :rows="6" 
                    :max-rows="6"
                    required>
                    </b-form-textarea>
                    <b-form-invalid-feedback>
                    Message is required
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row align-h="end">
              <b-button
                type="finish"
                @click.prevent="onSubmit()"
                variant="primary"
                class="mr-3"
              >Submit</b-button>
            </b-row>
          </b-col>
        </b-row>
       
      </b-form>
    </layout>
  </div>
</template>
		 

<script>
// import components
import layout from "../Layout";
import notification from "../components/Notification";

// import dependancies
import httpRequest from "../services/Requests.js";

export default {
  components: {
    layout,
    notification
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        topic: "",
        message: ""
      },
      notifications: []
    };
  },
  methods: {
    onSubmit() {
      // check if valide
      var forms = document.getElementById("needs-validation");
      if (forms.checkValidity() === false) {
        forms.classList.add("was-validated");
      } else {
        forms.classList.remove("was-validated");
        //axios send to the server
        httpRequest
          .postContact(this.form)
          .then(res => {
            this.notifications.push({
              variant: "success",
              message: "Thankyou. Your request has been recieved"
            });
          })
          .catch(res => {
            this.notifications.push({
              variant: "danger",
              message:
                "There has been and error with the request, please try again"
            });
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.notification-wrapper {
  position: fixed;
  right: 20px;
}
</style>
