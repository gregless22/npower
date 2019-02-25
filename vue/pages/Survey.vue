
<template>
  <layout>

    <b-col class="notification-wrapper" cols="2">
      <notification
        v-for="notification in notifications" 
        :key="notification.index" 
        :variant="notification.variant" 
        :message="notification.message">
      </notification>
    </b-col>

    <!-- question template is used -->
    <question v-if="tracker.question.test === 1" :form="form" @input="onForm" @exit="onExit"></question>

    <!-- question template is used -->
    <question2 v-if="tracker.question.test === 2" :form="form" @input="onForm" @exit="onExit"></question2>

    <!-- user form template is used -->
    <userForm v-if="tracker.form.test" :form="form" @input="onForm" @exit="onExit">
      <!-- send the props in -->
    </userForm>

    <!-- the instruction form is used -->
    <instruction v-if="tracker.instruction.test" @accept="onInstruction">
      <h5 slot="question">{{ instruction[iter].description }}</h5>
      <span v-if="iter === 0" slot="button">Start Survey</span>
      <span v-else slot="button">Continue</span>
    </instruction>
  </layout>
</template>

<script>
//get services
import httpRequest from "../services/Requests.js";
//get the data required.
import index from "../assets/index.json";
import questionsA from "../assets/questionsA.json";
import questionsB from "../assets/questionsB.json";
import questionsC from "../assets/questionsC.json";

//merge into one document
index[1].questions = questionsA;
index[2].questions = questionsB;
index[3].questions = questionsC;

//get the templates required.
import userForm from "../components/UserForm.vue";
import question from "../components/Question";
import question2 from "../components/Question2.vue";
import instruction from "../components/Instruction.vue";
import layout from "../Layout";
import notification from "../components/Notification";

export default {
  components: {
    layout,
    question,
    userForm,
    instruction,
    question2,
    notification
  },
  name: "myForm",
  data() {
    return {
      iter: 0,
      tracker: {
        form: {
          test: false
        },
        question: {
          test: Number
        },
        instruction: {
          test: true
        }
      },
      instruction: index,
      form: {
        // these must be blank, not String etc
        email: "",
        name: "",
        homeType: "",
        homeOwner: "",
        postcode: "",
        homeResidents: "",
        lastBill: "",
        appliances: {
          kettle: "",
          aircon: {
            exists: "",
            size: "",
            use: ""
          },
          hotWater: {
            exists: [],
            size: "",
            offPeak: ""
          },
          microwave: "",
          oven: "",
          pool: "",
          spa: ""
        },
        solar: {
          exists: "",
          panels: "",
          battery: {
            exists: "",
            size: ""
          }
        }
      },
      notifications: []
    };
  },

  methods: {
    onSubmit() {
      // form submit logic
      evt.preventDefault(); //this stops the form reloading the page.
      //send to POST
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = "";
      this.form.name = "";
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onAnswer(evt) {
      evt.preventDefault();
    },
    onInstruction() {
      if (this.instruction[this.iter].questions) {
        // import questions from instruction.questions
        // update the form and questions data.
        this.tracker.form.test = this.instruction[this.iter].questions.form;
        this.tracker.question.test = this.instruction[
          this.iter
        ].questions.questions;
        this.tracker.instruction.test = false;
      }
      this.iter++;
    },
    onForm(evt) {
      //if end of questions post
      if (this.iter == this.instruction.length) {
        //set to 0 so it doesnt go out of range.
        // this.iter = 0;

        // post the notifications
        this.notifications.push({
          varient: "success",
          message: "Thanks for your survey, results are being processed."
        });

        //post here with axios to back end
        httpRequest
          .postSurvey(this.form)
          .then(res => {
            const page = res.data.find(element => {
              return element.page;
            });
            //this is just a delay to read the message.  
            setTimeout(() => {
               if (page) {
              window.location.href = "/products/" + page.page;
            }
            }, 3000)
          })
           .catch(err => {
            console.log(err);
          });
      } else {
        // iterate to the next part
        this.tracker.form.test = false;
        this.tracker.instruction.test = true;
        this.tracker.question.test = false;
      }
    },
    onExit() {
      // window.location.href = "/survey";
      this.notifications.push({
        variant: "warning",
        message:
          "As a renter you are unable to install Solar Panels. Thanks for your time"
      });
      this.iter = 0;
      this.tracker.form.test = false;
      this.tracker.instruction.test = true;
      this.tracker.question.test = false;
    },
    onQuestion(evt) {
      this.tracker.instruction.test = true;
    },
    onNext(evt) {
      evt.preventDefault();
      // go to the next question
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