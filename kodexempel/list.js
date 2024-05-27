function listExamples() {
	let lista = [10, 20, 40, 80]

	// lista[1] = lista[1] / 10
	// lista = lista / 10  <- fungerar inte
	for( let i=0; i<lista.length; i++ ) {
		lista[i] = lista[i] / 10
	}

	console.log('Lista: ', lista)
	for( let i=0; i<lista.length; i++ ) {
		console.log(lista[i])
	}

	/*const arr = ["citron", "persika", "kiwi", "ananas", "apelsin", "banan"]
	for (let i = 0; i < arr.length; i++) {
		if (i > 2)
			console.log(arr[i])
	}*/
	/*
	const colors = ['ruter', 'hjärter', 'spader', 'klöver']
	const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'knekt', 'dam', 'kung', 'ess']
	for( let c=0; c<colors.length; c++ ) {  // alternativt namn för c: "colorIndex"
		// console.log('Färg: ' + colors[c])
		for( let v=0; v<values.length; v++ ) {
			// console.log('Värde: ' + values[v])
			let cardName = colors[c] + ' ' + values[v]
			console.log(cardName)
		}
	}*/
}

export { listExamples }
