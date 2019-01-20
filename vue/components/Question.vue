<template>
    <cardTemplate>
        <b-container class="h-100 p-5" id="question" :form="form">



            <b-row class="h-25" >
                {{ JSON.stringify(this.questions)}}
            </b-row>
        
            <b-row class="h-25">
                {{ JSON.stringify(this.form)}}
            </b-row>
                
            <b-row class="h-25">
                
            </b-row>



        </b-container>
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
            show: 0
        }
    }
}
</script>



