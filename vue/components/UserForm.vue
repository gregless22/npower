<template>
  <cardTemplate>
    <b-form :form="form" novalidate :class="pageValidated">
      <!-- page 1 items -->
      <!-- name input -->
      <b-form-group
        v-if="show === 0"
        id="nameGroup"
        label="Your Name:"
        label-for="nameInput"
        class="form-group"
        :class="{ 'form-group--error': $v.form.name.$error }"
      >
        <b-form-input
          :class="nameValid"
          id="nameInput"
          type="text"
          v-model="form.name"
          placeholder="Enter name"
        ></b-form-input>
        <pre>
        {{ $v.form.name }}
        </pre>
      </b-form-group>

      <!-- email input -->
      <b-form-group
        v-if="show === 0"
        label="Email address:"
        label-for="emailInput"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="emailInput"
          type="email"
          v-model="form.email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <!-- page 2 items -->
      <!-- home type details -->
      <b-form-group v-if="show === 1" label="Home Type" label-for="homeInput">
        <b-form-select id="homeInput" :options="homeType" required v-model="form.homeType"></b-form-select>
      </b-form-group>

      <!-- ownership details -->
      <b-form-group v-if="show === 1" label="Do you own the home or renting?">
        <b-form-radio-group
          buttons
          size="md"
          v-model="form.homeOwner"
          :options="homeOwner"
          required
          name="ownerInput"
        />
      </b-form-group>

      <!-- postcode entre -->
      <b-form-group v-if="show === 1" label="Enter Postcode:" label-for="postcode">
        <b-form-input
          id="postcode"
          type="number"
          v-model="form.postcode"
          required
          placeholder="4000"
        ></b-form-input>
      </b-form-group>

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
import { required, minLength, email } from "vuelidate/lib/validators";

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
      pageValidated: "not-validated"
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
        minLength: minLength(4)
      },
      email: {
        required,
        email
      }
    }
  },
  computed: {
    nameValid: function() {
      if (this.pageValidated === "was-validated") {
        if (this.$v.form.name.$invalid) {
          return "is-invalid";
        } else {
          return "is-valid";
        }
      }
    }
  },
  components: {
    cardTemplate
  },
  methods: {
    onSubmit(evt) {
      // emit to the parent with the data.
      this.$emit("input", this.form);
    },
    onNext(evt) {
      // check the first page
      if (this.show === 0) {
        if (this.$v.form.name.$invalid && this.$v.form.email.$invalid) {
          // document.getElementById("main-form").classList.add("was-validated");
          this.pageValidated = "was-validated"
        } else {
          // document.getElementById("nameInput").classList.remove("was-validated");
          this.pageValidated = "not-validated"
          this.show++;
        }
      }
      // check the second page
      else if (this.show === 1) {
      }
    },
    onBack() {
      this.show--;
    }
  }
};
</script>

