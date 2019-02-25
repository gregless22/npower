<template>
  <layout>
    <b-container class="ml-5 mr-5">
      <b-row class="h-100">
        <product :product="products[id]"></product>
        <description :product="products[id]"></description>
      </b-row>
    </b-container>
  </layout>
</template>

<script>
// get components that are required
import layout from "../Layout";
import product from "../components/Product.vue";
import description from "../components/Description.vue";

// get the base data for the products
import products from "../assets/products.json";

export default {
  components: {
    layout,
    product,
    description
  },
  data() {
    return {
      products: products,
      id: window.location.href.split("/").pop()
    };
  }
};
</script>