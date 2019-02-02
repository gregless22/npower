<template>
	<b-navbar toggleable="sm" type="dark" variant="dark" class="w-100">
		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		<b-collapse is-nav id="nav_collapse">
			<b-navbar-nav justified class="w-100">
				<b-nav-item href="/">Gas and Electricity</b-nav-item>
		 		<b-nav-item href="/products">Products</b-nav-item>
			  	<b-nav-item href="/survey">Survey</b-nav-item>
			  	<b-nav-item href="/contact">Contact</b-nav-item>
			  	<b-nav-item href="/about">About</b-nav-item>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
	export default {
		data() {
			return {
				links: {
					Home: '',
					Products: 'Active',
					Survey: '',
					Contact: '',
					About: ''
				}
			}
		},
		name: 'navbar'
	}
</script>