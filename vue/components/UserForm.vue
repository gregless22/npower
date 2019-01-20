<template>
  <cardTemplate>
    <b-form @submit="onSubmit" @reset="onReset" @next="onNext" :form="form">

      <!-- page 1 items -->
      <!-- name input -->
      <b-form-group 
        v-if="show === 0"
        id="nameGroup"
        label="Your Name:"
        label-for="nameInput">
      <b-form-input 
        id="nameInput"
        type="text"
        v-model="form.name"
        required
        placeholder="Enter name">
      </b-form-input>
      </b-form-group>

      <!-- email input -->
      <b-form-group 
        v-if="show === 0"
        label="Email address:"
        label-for="emailInput"
        description="We'll never share your email with anyone else.">
      <b-form-input 
        id="emailInput"
        type="email"
        v-model="form.email"
        required
        placeholder="Enter email">
      </b-form-input>
      </b-form-group>

      <!-- page 2 items -->
      <!-- home type details -->
      <b-form-group v-if="show === 1"
        label="Home Type"
        label-for="homeInput">
      <b-form-select 
        id="homeInput"
        :options="homeType"
        required
        v-model="form.homeType">
      </b-form-select>
      </b-form-group>

      <!-- ownership details -->
      <b-form-group 
        v-if="show === 1"
        label="Do you own the home or renting?">
      <b-form-radio-group 
        buttons
        size="md"
        v-model="form.homeOwner"
        :options="homeOwner"
        required
        name="ownerInput" />
      </b-form-group>

      <!-- postcode entre -->
      <b-form-group 
        v-if="show === 1"
        label="Enter Postcode:"
        label-for="postcode">
      <b-form-input 
        id="postcode"
        type="number"
        v-model="form.postcode"
        required
        placeholder="4000">
      </b-form-input>
      </b-form-group>

      <!-- buttons at the bottom of the form -->
      <b-button type="reset" @click.prevent="onReset()" variant="danger">Reset</b-button>
      <b-button type="back" @click.prevent="onBack()" variant="secondary">Back</b-button>
      <b-button type="next" @click.prevent="onNext()" variant="primary" v-if="show < 1">Next</b-button>
      <b-button type="finish" @click.prevent="onSubmit()" variant="primary" v-else>Finish</b-button>
      
    </b-form>
  </cardTemplate>
</template>

<script>
import cardTemplate from './CardTemplate'
export default {
  data () {
    return {
      homeType: ["House", "Apartment", "Duplex", "Townhouse"],
      homeOwner: [
        { text: 'Owner', value: 'owner' },
        { text: 'Renting', value: 'renting' }
      ],
      show: 0
    }
  },
  props: {
    form: Object
  },
  components: {
    cardTemplate
  },
  methods: {
    onSubmit (evt) {
      
      // emit to the parent with the data.
      this.$emit('input', this.form)
      // this.$emit('accept', this.form)
      
    },
    onReset (evt) {
      // evt.preventDefault();
      // /* Reset our form values */
      // this.form.email = '';
      // this.form.name = '';
      // this.form.food = null;
      // this.form.checked = [];
      // /* Trick to reset/clear native browser form validation state */
      // this.show = false;
      // this.$nextTick(() => { this.show = true });
    },
    onNext(evt) {
      //need to check the results are good.
      // evt.preventDefault()
      this.show++
      // send the form back up to the parent to catch.
    },
    onBack(){
      // TODO if show < 0 then need to emit back to parent.
      this.show--
    }
  }
}
</script>