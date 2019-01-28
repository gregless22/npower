<!-- Products.vue -->
<!-- App.vue -->

<template>
	 <layout>
		 <b-container class="ml-5 mr-5">
			 <b-row>
				<product 
					v-for="(product, index) in products" 
					:key="index" 
					:product="product"
				>
				
				</product>
			 </b-row>
		 </b-container>
	 	<!-- {{ JSON.stringify(products) }} -->
	</layout>
</template>

<script>
// get components that are required
	import layout from '../Layout'
	import product from '../components/Product.vue'

// get the base data for the products
	import products from '../assets/products.json'


	export default {
		components: {
			layout,
			product
		},
		data() {
			return {
				products: products
			}
		}

	}
</script>