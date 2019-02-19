<!-- Contact.vue -->

<template>
  <div>
    <layout>
      <b-container fluid>
        <b-row class="h-100" align-h="center">
          <b-col cols="12" md="7" lg="4" class="text-justify">
            <h1>Contact</h1>
            <b-row align-h="start" class="mt-5">
              <b-col cols="12" sm="10" md="8">
                <!-- name field -->
                <b-form-group label="Name:" label-for="name">
                  <b-form-input id="name" type="text" v-model="form.name"></b-form-input>
                </b-form-group>

                <!-- email field -->
                <b-form-group label="Email:" label-for="email">
                  <b-form-input id="email" type="email" v-model="form.email"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <!-- topic field -->
                <b-form-group label="Topic:" label-for="topic">
                  <b-form-input id="topic" type="text" v-model="form.topic"></b-form-input>
                </b-form-group>

                <!-- message field -->
                <b-form-group label="Message:" label-for="message">
                  <b-form-textarea id="message" v-model="form.message" :rows="6" :max-rows="6"></b-form-textarea>
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
      </b-container>
      {{form}}
    </layout>
  </div>
</template>
			 
			 </b-col>
			 </b-row>
	 	</b-container>
	 	
	</layout>
  </div>
</template>

<script>
// import components
import layout from "../Layout";

// import dependancies
import axios from "axios";

//environmanet variable
const serverURL = `http://npower.app/contact`;

export default {
  components: {
    layout
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        topic: "",
        message: ""
      }
    };
  },
  methods: {
    onSubmit() {
      //axios send to the server
      axios
        .post(serverURL)
        .then(res => {
          alert(JSON.stringify(res));
        })
        .catch(res => {
          alert("sorry there was an error with the server");
        });
    }
  }
};
</script>