<template>
    <card-template>
        <b-container class="h-100 p-5" id="question">
            <b-row class="mb-5" >
                <slot name="question"></slot>
            </b-row>
            <b-row class="justify-content-center">
                <b-button variant="primary" size="lg" @click.prevent="onClick()"><slot name="button"></slot></b-button>
            </b-row>
        </b-container>
    </card-template>
</template>

<script>

import cardTemplate from './CardTemplate.vue'

export default {
    methods: {
        onClick() {
            this.$emit('accept')
        }
    },
    components: {
        cardTemplate
    }
}
</script>



