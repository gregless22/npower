<!-- App.vue -->

<template>
  	<b-container fluid>
  		<b-row class="h-25">
			<b-col>
				<b-row>
					<b-col cols=1>
						<!-- this is a horizontal spacer -->
					</b-col>
					<b-col>
						<b-navbar-brand href="#" class="pl-5 pt-2 pb-2 d-none d-sm-block">
							<img src="./assets/images/logo.png" alt="Logo of NPower">
						</b-navbar-brand>
					</b-col>
				</b-row>  
				<b-row>
					<navbar></navbar>
				</b-row>
				<b-row class="h-25">
					<!-- Use this as a spacer -->
				</b-row>
			</b-col>	
  		</b-row>
  		<b-row class="justify-content-md-center h-50 text-center"> 
	  		<!-- <b-col align-self="center" class="text-center h-100"> -->
	  			<slot></slot>
	  		<!-- </b-col> -->
		</b-row>
		<b-row align-v="end" class="h-25">
			<img src="./assets/images/footer.jpg" alt="Footer image" class="w-100">
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
	.container-fluid {
		height: 100vh;
	}
</style>