<template>
    <b-col cols="6" class="description mt-3 mb-3 pb-3 pt-3">
        <h1>Description</h1>
        {{ JSON.stringify(product) }}

    </b-col>
</template>

<script>
export default {
    props: {
        product: Object
    }
}
</script>


<style lang="scss" scoped>
    .description {
        background-color: lightgray
        
    }
   
  
</style>