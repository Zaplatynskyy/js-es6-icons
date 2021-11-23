const myIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// elemento di funzione che mi ritorna un array che raggruppa i tipi di elementi presenti nel mio arrai di dati 
const arrayType = () => {
	let arrayOption = [];
	// dato il mio array ed inserisco il type facendo una verifica per non creare doppioni
	myIcons.forEach(element => {
		if(!arrayOption.includes(element.type)) {
			arrayOption.push(element.type);
		}
	});

	return arrayOption;
}

// ciclo for per inserire colori casuali per tipo ad elementi di un array 
for(let i = 0; i < arrayType().length; i++) {
	const color = randomColor();
	// cambio il mio array dati di icone assegnando un nuovo colore per ogni tipo di elementi
	myIcons.forEach(element => {
		if(element.type == arrayType()[i]) {
			element.color = color;
		}
	});	
}

// creo dinamicamente la finestra select con un valore generico
document.querySelector('.header_nav').innerHTML += `
	<select id="filter">
		<option value="all">All</option>
	</select>
`;

// richiamo la funzione addSelect per inserire altri elementi dentro la select in base ai tipi di dati contenuti dentro il mio array myIcons
addSelect(arrayType(), 'filter');

// all'avvito della pagina setto il select su 'all' generico
document.getElementById('filter').value = 'all';
// avvio un ciclo per creare un icona per ogni elemento del mio array di oggetti
myIcons.forEach(addIcon);

// definisco ed assegno l'evento change alla mia section in modo da cambiare gli elementi visualizzati in base al tipo di elemento selezionato
const filterSelected = document.getElementById('filter');
filterSelected.addEventListener("change",
    function () {
        document.querySelector('.icons').innerHTML = '';
        const filterType = document.getElementById('filter').value;
        
        myIcons.filter(element => { 
            if(element.type == filterType) {
                addIcon(element);
            } else if (filterType == 'all') {
                addIcon(element);
            }
        });
    }
);

// ******FUNZIONI

// funzione per creare ed inserire un div icon con i suoi vari elementi, dentro il suo apposito contenitore icons
function addIcon(element) {
    const i = document.createElement('i'); 
    i.classList.add(element.family, element.prefix + element.name);
	i.style.color = element.color;  

    const name = document.createElement('div'); 
    name.className = 'name';
    name.innerHTML = `${element.name}`; 
    
    const icon = document.createElement('div');
    icon.className = 'icon';
    icon.append(i, name);
    
    document.querySelector('.icons').append(icon);
}

// funzione per creare lista option in una select di partenza di id: idSelect, sulla base del tipo di dati di un array: arrayData
function addSelect(array, idSelect) {
	
	array.forEach(element => {
		const option = document.createElement('option');
		option.value = element;
		option.innerHTML = element.charAt(0).toUpperCase() + element.slice(1);
			
		document.getElementById(idSelect).append(option);
	});
}

// funzione che restituisce un colore rgb casuale
function randomColor() {
	let color = '#';
	for(let i = 0; i < 6; i++) {
		const rangeColor = '0123456789ABCDEF';
		const numRandom = Math.floor(Math.random() * rangeColor.length);
		color += rangeColor[numRandom];
	}
	
	return color;
}

// Milestone 1 Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

// Milestone 2 Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

// Milestone 3 Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

// BONUS 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F. 
// 2- popolare le options della select della milestone 3 dinamicamente.