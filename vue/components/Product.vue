<template>
<b-col id="product" class="m-3 p-3" md>
    <a :href="'/products/'+ this.$vnode.key">
  
    <h3>{{ product.name }}</h3>
    <h4>{{ product.description }}</h4>

    <!-- this needs some work with alignment also turn into a component -->
    <benefit> 
        <img slot="image" src="../assets/images/panels.svg" alt="Solar Panel Icon" width="100px">
        <p slot="text"> {{ product.solarPanels }} x Solar Panels</p>
    </benefit>

    <benefit> 
        <img slot="image" src="../assets/images/inverter.svg" alt="Invertor Icon" width="100px">
        <p slot="text"> {{ product.inverter }} x Inverter</p>
    </benefit>

    <benefit v-if="product.freeInstallation"> 
        <img slot="image" src="../assets/images/installation.svg" alt="Instalation Icon" width="100px">
        <p slot="text">Free Installation</p>
    </benefit>

    <benefit v-if="product.powerwall > 0"> 
        <img slot="image" src="../assets/images/battery.svg" alt="Battery Icon" width="100px">
        <p slot="text">{{ product.powerwall }} x powerwall</p>
    </benefit>

   
    
    





    
       
    </a>


    
</b-col>
</template>

<script>

// import require components
import benefit from '../components/Benefit'

export default {
    props: {
        product: Object
    },
    components: {
        benefit
    }
}
</script>


<style lang="scss" scoped>
    #product {
        background-color: lightgray
        
    }
    h3 {
        color: blue
    }
    h4 {

    }
  
</style>