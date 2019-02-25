<template>
<b-col class="m-3 p-3 bg-light product-card" md>
    <a :href="'/products/'+ pageIndex">
    <b-row class="mb-3">
        <b-col>
        <h3>{{ product.name }}</h3>
        <h4>{{ product.description }}</h4>
        </b-col>
    </b-row>
    <!-- this needs some work with alignment also turn into a component -->
    <benefit> 
        <img slot="image" src="../assets/images/panels.svg" alt="Solar Panel Icon" width="80">
        <p slot="text"> {{ product.solarPanels }} x Solar Panels</p>
    </benefit>

    <benefit> 
        <img slot="image" src="../assets/images/inverter.svg" alt="Invertor Icon" width="80">
        <p slot="text"> {{ product.inverter }} x Inverter</p>
    </benefit>

    <benefit v-if="product.freeInstallation"> 
        <img slot="image" src="../assets/images/installation.svg" alt="Instalation Icon" width="80">
        <p slot="text">Free Installation</p>
    </benefit>

    <benefit v-if="product.powerwall > 0"> 
        <img slot="image" src="../assets/images/battery.svg" alt="Battery Icon" width="80">
        <p slot="text">{{ product.powerwall }} x powerwall</p>
    </benefit>
    

    <b-button align-v="end" align-h="center" class="enquire-button" variant="primary" size="lg" @click.prevent="enquire()">Enquire</b-button>

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
    },
    methods: {
        enquire() {
            window.location.href = '/contact'
        }
    },
    computed: {
        pageIndex() {
            return this.$vnode.key === 0 ? 0 : this.$vnode.key || ''
        }
    }
    
}
</script>


<style lang="scss" scoped>
 
    h3 {
        color: blue;
    }
    h4 {
        color: black;
    }

    a:hover {
        text-decoration: none;
    }

    .product-card:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-decoration: none;
    }

    .enquire-button {
        position: absolute;
        bottom: 20px;
        -webkit-transform:translate(-50%, -50%);
	    transform:translate(-50%, -50%);
    }
  
</style>