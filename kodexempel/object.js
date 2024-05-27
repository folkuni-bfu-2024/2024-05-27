function objectExamples() {
	const shoeStore = {
		owner: 'Sune Sandal',
		address: 'Skogatan 7',
		// city: 'Småland'
	}
	shoeStore.city = 'Karlstad'

	const toyStore = {
		owner: 'Greta Garbo',
		address: 'Grågatan 9',
		city: 'Götelaborg'
	}

	const toyStore2 = { ...toyStore }
	const toyStore3 = toyStore2  // toyStore3 refererar till samma objekt som toyStore2

	toyStore.owner = 'Sune Sandal'
	toyStore2.address = 'Kungsgatan 1'

	// definiera funktionen
	function printStoreInfo(store) {
		console.log('Affären ägs av: ' + store.owner)
		console.log('Den ligger på ' + store.address + ' i ' + store.city)
	}

	printStoreInfo(shoeStore)  // anropa funktionen
	printStoreInfo(toyStore)  // anropa funktionen
	printStoreInfo(toyStore2)  // anropa funktionen
	printStoreInfo(toyStore3)  // anropa funktionen
}

export { objectExamples }
