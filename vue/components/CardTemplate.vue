<template>
    <b-row class="h-100 w-50">
        <b-col cols="1"></b-col>
        <b-col>
            <b-container class="h-100 p-5" id="question">
                <slot></slot>
            </b-container>
        </b-col>
        <b-col cols="1"></b-col> 
    </b-row>
</template>

<script>
export default {
    
}
</script>

<style lang="css" scoped>
    #question {
        background-color:#e0e0e0
    }
</style>