console.log('Inizio');

let number;

do {
    number= parseInt(prompt('Inserisci un numero da 1 a 3 per selezionare la bevanda'));
} while (number<1 || number>3);

switch(number) {
    case 1:
        console.log("E' stata selezionata l'acqua");
        break;
    case 2:
        console.log("E' stata selezionata coca-cola");
        break;
    case 3:
        console.log("E' stata selezionata birra");
    default:
        break;
}

console.log('Fine');