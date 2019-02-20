<template>
  <cardTemplate>
    <b-form :form="form" novalidate>
      <!-- page 1 items -->
      <!-- name input -->
      <b-form-group v-if="show === 0" id="nameGroup" label="Your Name:" label-for="nameInput">
        <b-form-input
          :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
          id="nameInput"
          type="text"
          v-model.trim="$v.form.name.$model"
          placeholder="Enter name"
        ></b-form-input>
        <b-form-invalid-feedback>This is a required field and must be at least 3 characters</b-form-invalid-feedback>
      </b-form-group>

      <!-- email input -->
      <b-form-group
        v-if="show === 0"
        label="Email address:"
        label-for="emailInput"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
          id="emailInput"
          type="email"
          v-model.trim="$v.form.email.$model"
          placeholder="Enter email"
        ></b-form-input>
        <b-form-invalid-feedback>Email address is not valid</b-form-invalid-feedback>
      </b-form-group>

      <!-- page 2 items -->
      <!-- home type details -->
      <b-form-group v-if="show === 1" label="Home Type" label-for="homeInput">
        <b-form-select
          id="homeInput"
          :options="homeType"
          v-model="$v.form.homeType.$model"
          :state="$v.form.homeType.$dirty ? !$v.form.homeType.$error : null"
        ></b-form-select>
        <b-form-invalid-feedback>Please select home type from drop down</b-form-invalid-feedback>
      </b-form-group>

      <!-- ownership details -->
      <b-form-group v-if="show === 1" label="Do you own the home or renting?">
        <b-form-radio-group
          size="md"
          stacked
          v-model="$v.form.homeOwner.$model"
          :options="homeOwner"
          name="ownerInput"
          :state="$v.form.homeOwner.$dirty ? !$v.form.homeOwner.$error : null"
        />
        {{ $v.form.homeOwner }}
      </b-form-group>

      <!-- postcode entre -->
      <b-form-group v-if="show === 1" label="Enter Postcode:" label-for="postcode">
        <b-form-input
          id="postcode"
          type="number"
          v-model.trim="$v.form.postcode.$model"
          placeholder="4000"
          :state="$v.form.postcode.$dirty ? !$v.form.postcode.$error : null"
        ></b-form-input>
        <b-form-invalid-feedback>Postcode is not valid</b-form-invalid-feedback>
      </b-form-group>

      <!-- page error display -->
      <div class="error" v-show="nextPageError">Please fill out all data</div>

      <!-- buttons at the bottom of the form -->
      <b-button type="back" @click.prevent="onBack()" variant="secondary" v-if="show > 0">Back</b-button>
      <b-button type="next" @click.prevent="onNext()" variant="primary" v-if="show < 1">Next</b-button>
      <b-button type="finish" @click.prevent="onSubmit()" variant="primary" v-else>Finish</b-button>
    </b-form>
  </cardTemplate>
</template>

<script>
//import for validation
import { validationMixin } from "vuelidate";
import { required, minLength, email, helpers } from "vuelidate/lib/validators";

const postcodeAU = helpers.regex(
  "value",
  /^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/
);

import cardTemplate from "./CardTemplate";
export default {
  data() {
    return {
      homeType: ["House", "Apartment", "Duplex", "Townhouse"],
      homeOwner: [
        { text: "Owner", value: "owner" },
        { text: "Renting", value: "renting" }
      ],
      show: 0,
      nextPageError: false
    };
  },
  props: {
    form: Object
  },
  mixins: [validationMixin],
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      postcode: {
        required,
        postcodeAU
      },
      homeType: {
        required
      },
      homeOwner: {
        required
      }
    }
  },
  components: {
    cardTemplate
  },
  methods: {
    onSubmit(evt) {
      // check the second page
      if (
        this.$v.form.homeType.$invalid ||
        this.$v.form.homeOwner.$invalid ||
        this.$v.form.postcode.$invalid
      ) {
        this.$v.form.homeType.$touch();
        this.$v.form.homeOwner.$touch();
        this.$v.form.postcode.$touch();
        this.nextPageError = true;
      } else {
        this.form.homeType = this.$v.form.homeType.$model;
        this.form.homeOwner = this.$v.form.homeOwner.$model;
        this.form.postcode = this.$v.form.postcode.$model;
        // emit to the parent with the data.
        this.nextPageError = true;
        this.$emit("input", this.form);
      }
    },
    onNext(evt) {
      // check the first page
      if (this.$v.form.name.$invalid || this.$v.form.email.$invalid) {
        this.nextPageError = true;
        this.$v.form.name.$touch();
        this.$v.form.email.$touch();
      } else {
        this.form.name = this.$v.form.name.$model;
        this.form.email = this.$v.form.email.$model;
        this.nextPageError = false;
        this.show++;
      }
    },
    onBack() {
      this.show--;
    }
  }
};
</script>

<style lang="css">
.error {
  color: crimson;
}
</style>


