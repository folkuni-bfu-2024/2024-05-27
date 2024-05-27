console.log('')
console.log('Detta är ett demo av funktioner.')

// Funktionen har from och to som "input"
function slumpa(from, to) {
	let r = Math.random() * (to - from + 1) + from
	return Math.floor(r)
	// Funktionen använder return för att skicka "output"
}

console.log('Nu ska vi slumpa ett tal')
let x = slumpa(1, 4)  // NU anropas funktionen
console.log('Talet är: ' + x)
console.log('')

function greeting(user) {
	console.log('Välkommen ' + user + '!')
}

greeting('Anna')
greeting('Henrik')


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

console.log('')

/*
Terminalkommandon:
pwd   // present working directory
ls     // lista alla filer i aktuell mapp
cd "sökväg"  // byta mapp
clear
*/