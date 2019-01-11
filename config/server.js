module.exports = (express) => {

	// set the port of the app
	const port = process.env.PORT || '3000'

	
	express.listen(port, () => {
		console.log(`Example app listening on port ${port}!`);
	});


}

