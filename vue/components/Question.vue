<template>
    <cardTemplate>
        <b-form class="h-100 p-5" id="question" :form="form" @submit="onSubmit" @reset="onReset" @next="onNext">


        <!-- people details -->
        <b-form-group 
            v-if="show === 0"
            label="How many people currently live at the house">
        <b-form-radio-group 
            buttons
            size="md"
            v-model="form.homeResidents"
            :options="homeResidents"
            required
            name="homeResidents" />
        </b-form-group>

        <!-- people details -->
        <b-form-group 
            v-if="show === 1"
            label="Which of the following Appliances do you have"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-5">
            <b-form-group 
                label="Kettle"
                horizontal>
                <b-form-radio-group
                    buttons
                    size="md"
                    v-model="form.appliances.kettle"
                    :options="boolean"
                    required />
            </b-form-group>
            <b-form-group 
                label="Air Conditioning"
                horizontal>
                <b-form-radio-group
                    buttons
                    size="md"
                    v-model="form.appliances.aircon.exists"
                    :options="boolean"
                    required />
            </b-form-group>
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
    components: {
        cardTemplate
    },
    props: {
        form: Object,
        questions: Object
    },
    data () {
        return {
            homeResidents: [ "1", "1 - 2", "2 - 3", "4+"],
            boolean: ["Yes", "No"],
            appliances: [
               
            ],
            show: 0
        }
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



