<template>
    <cardTemplate>
        <b-form class="h-100 p-5" id="question" :form="form" @submit="onSubmit" @next="onNext">


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

        <!-- -->
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
                    required 
                />
            </b-form-group>
            <b-form-group
                v-if="form.appliances.aircon.exists === 'true'"
                label="What is the Air Conditioners Capacity?"
                horizontal>
                <b-form-radio-group
                    buttons
                    size="md"
                    v-model="form.appliances.aircon.size"
                    :options="size"
                    required 
                />
            </b-form-group>

            <b-form-group
                v-if="!form.appliances.aircon.exists"
                label="When do you normally use the Air Conditioner?"
                horizontal>
                <b-form-radio-group
                    buttons
                    size="md"
                    v-model="form.appliances.aircon.use"
                    :options="airconuse"
                    required 
                />
            </b-form-group>

            <b-form-group 
                label="Hot Water System"
                horizontal>
                <b-form-checkbox-group
                    buttons
                    size="md"
                    v-model="form.appliances.hotWater.exists"
                    :options="hotWater"
                    required />
            </b-form-group>

             <b-form-group
                v-if="form.appliances.hotWater.exists.includes('Electric')" 
                label="Are you on Off-Peak (Tariff 33)"
                horizontal>
                <b-form-radio-group
                    buttons
                    size="md"
                    v-model="form.appliances.hotWater.offPeak"
                    :options="boolean"
                    required />
            </b-form-group>

            <b-form-group
                v-if="form.appliances.hotWater.exists.includes('Electric')" 
                label="What is the Capacity of the Elecric Hot Water System Only?"
                horizontal>
                <b-form-radio-group
                    buttons
                    size="md"
                    v-model="form.appliances.hotWater.size"
                    :options="hotWaterSize"
                    required />
            </b-form-group>

            <b-form-group 
                label="Microwave"
                horizontal>
                <b-form-radio-group
                    buttons
                    size="md"
                    v-model="form.appliances.microwave"
                    :options="boolean"
                    required />
            </b-form-group>

            <b-form-group 
                label="Oven"
                horizontal>
                <b-form-radio-group
                    buttons
                    size="md"
                    v-model="form.appliances.oven"
                    :options="boolean"
                    required />
            </b-form-group>

            <b-form-group 
                label="Pool"
                horizontal>
                <b-form-radio-group
                    buttons
                    size="md"
                    v-model="form.appliances.pool"
                    :options="boolean"
                    required />
            </b-form-group>

            <b-form-group 
                label="Spa"
                horizontal>
                <b-form-radio-group
                    buttons
                    size="md"
                    v-model="form.appliances.spa"
                    :options="boolean"
                    required />
            </b-form-group>

        </b-form-group>

        
    

        <!-- buttons at the bottom of the form -->
        <b-button type="back" @click.prevent="onBack()" variant="secondary" v-if="show > 0">Back</b-button>
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



