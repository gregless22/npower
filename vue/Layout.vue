<!-- App.vue -->

<template>
  	<b-container>
  		<b-row class="h-25">
  			<navbar></navbar>
  		</b-row>
  		<b-row class="justify-content-md-center h-50"> 
	  		<b-col align-self="center" class="text-center h-100">
	  			<slot></slot>
	  		</b-col>
		</b-row>
		<b-row align-v="end" class="h-25">

		</b-row>

	</b-container>
</template>

<script>
	import navbar from './components/Navbar'
		export default {
			components: {
				navbar
			}
		}
</script>

<style>
	.container {
		height: 100vh;
	}
</style>