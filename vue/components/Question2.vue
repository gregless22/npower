<template>
    <cardTemplate>
        <b-form class="h-100 p-5" id="question" :form="form">

        <!-- last bill details -->
        <b-form-group 
            v-if="show === 0"
            label="How much is your normal power bill?"
            label-for="lastBill">
        <b-form-input
            type="number"
            id="lastBill" 
            v-model="form.lastBill"
            required
            placeholder="eg. $400"/>
        </b-form-group>

         <!-- people details -->
        <b-form-group 
            v-if="show === 0"
            label="Do you have any current solar instalation?"
            horizontal
        >
        <b-form-radio-group 
            buttons
            size="md"
            v-model="form.solar.exists"
            :options="boolean"
            required
         />
        </b-form-group>

        <!-- solar details -->
        <b-form-group 
            v-if="form.solar.exists === 'true'"
            label="How many watts of Panels do you have?"
            label-for="panels">
        <b-form-input
            type="number"
            id="panels" 
            v-model="form.solar.panels"
            placeholder="12"/>
        </b-form-group>

        <b-form-group
            v-if="form.solar.exists === 'true'" 
            label="Do you have Batteries"
            horizontal>
            <b-form-radio-group
                buttons
                size="md"
                v-model="form.solar.battery.exists"
                :options="boolean"
                required 
            />
        </b-form-group>

            <b-form-group
                v-if="form.solar.battery.exists === 'true'"
                label="How many amps is the battery?"
                horizontal>
                <b-form-radio-group
                    buttons
                    size="md"
                    v-model="form.solar.battery.size"
                    :options="size"
                    required 
                />
            </b-form-group>        
        

        <!-- buttons at the bottom of the form -->
        <b-button type="back" @click.prevent="onBack()" variant="secondary" v-if="show > 0">Back</b-button>
        <b-button type="next" @click.prevent="onNext()" variant="primary" v-if="show < 0">Next</b-button>
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
            boolean: [
                {text: "Yes", value: "true"},
                {text: "No", value: "false"}
                ],
            size: ["< 3.5kW", "3.5 - 8kW", "8.5 - 15kW", "15+kW"],
            airconuse: [ "Day", "Night" ],
            hotWater: ["Solar", "Gas", "Electric"],
            hotWaterSize: ["< 2kW", "2 - 3 kW", "3+ kW"],
            oven: [
                {text: "Gas", value: "false"},
                {text: "Electric", value: "true"}
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



