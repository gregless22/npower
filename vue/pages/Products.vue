<!-- Products.vue -->
<!-- App.vue -->

<template>
	 <layout>
		 
	 		<product 
			 v-for="(product, index) in products" 
			 :key="index" 
			 :product="product"
			 >

	 		</product>
		 
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