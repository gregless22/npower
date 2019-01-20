
<template>
	<layout>

  <!-- question template is used -->
  <question 
    v-if="tracker.question.test" 
    :form="form"
    :questions="instruction[tracker.instruction.iter].questions"
    @input="onForm">
  </question>
  
  <!-- user form template is used -->
    <userForm 
      v-if="tracker.form.test" 
      :form="form"
      @input="onForm"
      > 
      <!-- send the props in -->
    </userForm>

  <!-- the instruction form is used -->
  <instruction v-if="tracker.instruction.test" @accept="onInstruction">
    <h5 slot="question">
        {{ instruction[tracker.instruction.iter].description }}    
    </h5>
  </instruction>
{{ JSON.stringify(this.instruction[tracker.instruction.iter].questions) }}

  </layout>  
</template>

<script>
  //get the data required.
  import index from '../assets/index.json'
  import questionsA from '../assets/questionsA.json'
  import questionsB from '../assets/questionsB.json'
  import questionsC from '../assets/questionsC.json'
  
  //merge into one document
  index[1].questions = questionsA
  index[2].questions = questionsB
  index[3].questions = questionsC

  //get the templates required.
  import userForm from '../components/UserForm.vue'
  import question from '../components/Question'
  import instruction from '../components/Instruction.vue'
  import layout from '../Layout'

  //get the validator.
  import { validationMixin } from "vuelidate"
  import { required, minLength } from "vuelidate/lib/validators"

  export default {
    components: {
      layout,
      question,
      userForm,
      instruction
    },
    name: "myForm",
    data() {
      return {
        tracker: {
          form: {
            test: false,
          },
          question: {
            test: false,
            iter: 0
          },
          instruction: {
            test: true,
            iter: 0
          }
        },
        instruction: index,
        form: {  // these must be blank, not String etc 
          email: "",
          name: "",
          homeType: "",
          homeOwner: "",
          postcode: "",
          residents: "",
          lastBill: ""
      },
      }
    },
    mixins: [
      validationMixin
    ],
    validations: {
      form: {
        food: {
          required
        },
        name: {
          required,
          minLength: minLength(3)   
        }
      }
    },
    methods: {
      onSubmit() {
        // form submit logic
        evt.preventDefault(); //this stops the form reloading the page.
      //send to POST
      },
      onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
      },
      onAnswer(evt){
        evt.preventDefault();
      },
      onInstruction(){
        if ((this.instruction[this.tracker.instruction.iter]).questions) {
          // import questions from instruction.questions
          // update the form and questions data.
          this.tracker.form.test = this.instruction[this.tracker.instruction.iter].questions.form
          this.tracker.question.test = this.instruction[this.tracker.instruction.iter].questions.questions
          this.tracker.instruction.test = false

        } 

          // iterate to the next part
          this.tracker.instruction.iter++
      },
      onForm(evt) {
        
        // iterate to the next part
          this.tracker.form.test = false
          this.tracker.instruction.test = true
          this.tracker.question.test = false
      },
      onQuestion(evt) {
        this.tracker.instruction.test = true
      },
      onNext(evt) {
        evt.preventDefault();
        // go to the next question
      }
    }
  }
</script>