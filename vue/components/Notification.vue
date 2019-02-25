<template>
  <b-alert
      class="alert"
      :show="dismissCountDown"
      dismissible
      :variant="variant"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>{{ message }}</p>
    </b-alert>
</template>

<script>
export default {
  props: {
      variant: {
        require: false,
        type: String,
        default: "success"
      },
      message: {
        require: true,
        type: String 

      }
  },
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 5,
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
  }

}
</script>

<style lang="scss" scoped>
  .alert {
    float: right;
    clear: right;
  }
</style>

