<template>
  <cardTemplate>
    <b-form class="h-100 p-5" id="question" :form="form" novalidate>
      <!-- people details -->
      <b-form-group v-if="show === 0" label="How many people currently live at the house">
        <b-form-radio-group
          stacked
          size="md"
          :options="homeResidents"
          v-model="$v.form.homeResidents.$model"
          name="homeResidents"
          :state="$v.form.homeResidents.$dirty ? !$v.form.homeResidents.$error : null"
        />
      </b-form-group>

      <!-- -->
      <b-form-group
        v-if="show === 1"
        label="Which of the following kitchen appliances do you have"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-5"
      >
        <b-form-group label="Kettle" horizontal>
          <b-form-radio-group
            size="md"
            v-model="$v.form.appliances.kettle.$model"
            :options="boolean"
            :state="$v.form.appliances.kettle.$dirty ? !$v.form.appliances.kettle.$error : null"
          />
        </b-form-group>

        <b-form-group label="Microwave" horizontal>
          <b-form-radio-group
            size="md"
            v-model="$v.form.appliances.microwave.$model"
            :options="boolean"
            :state="$v.form.appliances.microwave.$dirty ? !$v.form.appliances.microwave.$error : null"
          />
        </b-form-group>

        <b-form-group label="Oven" horizontal>
          <b-form-radio-group
            size="md"
            v-model="$v.form.appliances.oven.$model"
            :options="oven"
            :state="$v.form.appliances.oven.$dirty ? !$v.form.appliances.oven.$error : null"
          />
        </b-form-group>
      </b-form-group>

      <b-form-group
        v-if="show === 2"
        label="Do you have airconditioning in your house?"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-5"
      >
        <b-form-group label="Air Conditioning" horizontal id="aircon">
          <b-form-radio-group
            size="md"
            v-model="form.appliances.aircon.exists"
            :options="boolean"
            required
          />
        </b-form-group>

        <b-form-group
          v-if="form.appliances.aircon.exists === 'true'"
          label="What is the Air Conditioners Capacity?"
          horizontal
        >
          <b-form-radio-group
            size="md"
            v-model="form.appliances.aircon.size"
            :options="size"
            required
          />
        </b-form-group>

        <b-form-group
          v-if="form.appliances.aircon.exists === 'true'"
          label="When do you normally use the Air Conditioner?"
          horizontal
        >
          <b-form-radio-group
            size="md"
            v-model="form.appliances.aircon.use"
            :options="airconuse"
            required
          />
        </b-form-group>
      </b-form-group>

      <b-form-group
        v-if="show === 3"
        label="What king of hotwater do you have in your house?"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-5"
      >
            <b-form-group label="Hot Water System" horizontal>
          <b-form-checkbox-group
            size="md"
            v-model="form.appliances.hotWater.exists"
            :options="hotWater"
            required
          />
        </b-form-group>

        <b-form-group
          v-if="form.appliances.hotWater.exists.includes('Electric')"
          label="Are you on Off-Peak (Tariff 33)"
          horizontal
        >
          <b-form-radio-group
            size="md"
            v-model="form.appliances.hotWater.offPeak"
            :options="boolean"
            required
          />
        </b-form-group>

        <b-form-group
          v-if="form.appliances.hotWater.exists.includes('Electric')"
          label="What is the Capacity of the Elecric Hot Water System Only?"
          horizontal
        >
          <b-form-radio-group
            size="md"
            v-model="form.appliances.hotWater.size"
            :options="hotWaterSize"
            required
          />
        </b-form-group>
      </b-form-group>

      <b-form-group
        v-if="show === 4"
        label="Do you have a pool or spa in your house?"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-5"
      >
        <b-form-group label="Pool" horizontal>
          <b-form-radio-group size="md" v-model="form.appliances.pool" :options="boolean" required/>
        </b-form-group>

        <b-form-group label="Spa" horizontal>
          <b-form-radio-group size="md" v-model="form.appliances.spa" :options="boolean" required/>
        </b-form-group>
      </b-form-group>

      <!-- page error display -->
      <div class="error" v-show="nextPageError">Please fill out all data</div>

      <!-- buttons at the bottom of the form -->
      <b-button type="back" @click.prevent="onBack()" variant="secondary" v-if="show > 0">Back</b-button>
      <b-button type="next" @click.prevent="onNext()" variant="primary" v-if="show < 4">Next</b-button>
      <b-button type="finish" @click.prevent="onSubmit()" variant="primary" v-else>Finish</b-button>
    </b-form>
  </cardTemplate>
</template>

<script>
//import for validation
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

import cardTemplate from "./CardTemplate";

export default {
  components: {
    cardTemplate
  },
  props: {
    form: Object,
    questions: Object
  },
  data() {
    return {
      homeResidents: ["1", "2", "3", "4", "5+"],
      boolean: [{ text: "Yes", value: "true" }, { text: "No", value: "false" }],
      size: ["< 3.5kW", "3.5 - 8kW", "8.5 - 15kW", "15+kW"],
      airconuse: ["Day", "Night"],
      hotWater: ["Solar", "Gas", "Electric"],
      hotWaterSize: ["< 2kW", "2 - 3 kW", "3+ kW"],
      oven: [
        { text: "Gas", value: "false" },
        { text: "Electric", value: "true" }
      ],
      show: 0,
      nextPageError: false
    };
  },
  validations: {
    form: {
      homeResidents: {
        required
      },
      appliances: {
        kettle: {
          required
        },
        oven: {
          required
        },
        microwave: {
          required
        }
      }
    }
  },
  methods: {
    onSubmit(evt) {
      const form = document.getElementById("question");
      //check the final page.
      if (this.form.appliances.spa && this.form.appliances.pool) {
        this.$emit("input", this.form);
      } else {
        form.classList.add("was-validated");
        this.nextPageError = true;
      }
    },
    onNext(evt) {
      if (this.show === 0) {
        if (this.$v.form.homeResidents.$invalid) {
          this.$v.form.homeResidents.$touch();
          this.nextPageError = true;
        } else {
          this.form.homeResidents = this.$v.form.homeResidents.$model;
          this.nextPageError = false;
          this.show++;
        }
      } else if (this.show === 1) {
        if (
          this.$v.form.appliances.kettle.$invalid ||
          this.$v.form.appliances.oven.$invalid ||
          this.$v.form.appliances.microwave.$invalid
        ) {
          this.$v.form.appliances.microwave.$touch();
          this.$v.form.appliances.oven.$touch();
          this.$v.form.appliances.kettle.$touch();
          this.nextPageError = true;
        } else {
          this.form.appliances.kettle = this.$v.form.appliances.kettle.$model;
          this.form.appliances.microwave = this.$v.form.appliances.microwave.$model;
          this.form.appliances.oven = this.$v.form.appliances.oven.$model;
          this.nextPageError = false;
          this.show++;
        }
      } else if (this.show === 2) {
        const form = document.getElementById("question");
        if (this.form.appliances.aircon.exists) {
          if (this.form.appliances.aircon.exists === "true") {
            if (
              this.form.appliances.aircon.size &&
              this.form.appliances.aircon.use
            ) {
              form.classList.remove("was-validated");
              this.nextPageError = false;
              this.show++;
            } else {
              form.classList.add("was-validated");
              this.nextPageError = true;
            }
          } else {
            form.classList.remove("was-validated");
            this.nextPageError = false;
            this.show++;
          }
        } else {
          form.classList.add("was-validated");
          this.nextPageError = true;
        }
      } else if (this.show === 3) {
        const form = document.getElementById("question");
        if (this.form.appliances.hotWater.exists.length > 0) {
          if (this.form.appliances.hotWater.exists.includes("Electric")) {
            //check that the other options are now entered
            if (
              this.form.appliances.hotWater.size &&
              this.form.appliances.hotWater.offPeak
            ) {
              form.classList.remove("was-validated");
              this.nextPageError = false;
              this.show++;
            } else {
              form.classList.add("was-validated");
              this.nextPageError = true;
            }
          } else {
            form.classList.remove("was-validated");
            this.nextPageError = false;
            this.show++;
          }
        } else {
          form.classList.add("was-validated");
          this.nextPageError = true;
        }
      }
    },
    onBack() {
      this.show--;
    }
  }
};
</script>



