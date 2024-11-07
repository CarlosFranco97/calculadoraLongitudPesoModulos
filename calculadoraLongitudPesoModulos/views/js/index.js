import { metroAKilometros, kilometrosAMillas, millasAMetros } from "../../helpers/conversorLongitud.js";
import {gramosAKilogramos, kilogramosALibras, librasAGramos} from '../../helpers/conversionPeso.js'

let varCentinela = 1; 

while(varCentinela != 0){
    let opcion = Number(prompt("Ingrese la acción que desea realizar \n 1) metros a km \n 2) kilometros a millas \n 3) millas a metros \n 4) gramos a kg \n 5) kg a libras \n 6) libras a gramos" ));
    switch(opcion){
        case 1:
            let metros = Number(prompt('Ingrese el valor en metros'));
            console.log(`${metroAKilometros(metros)} kilometros`);
            break;
        case 2:
            let kilometros = Number(prompt('Ingres el valor en kilometros')); 
            console.log(`${kilometrosAMillas(kilometros)} millas`);

            break;
        case 3:
            let millas = Number(prompt('Ingrese las millas'));
            console.log(`${millasAMetros(millas)} metros`);
            break;
        case 4:
            let gramos = Number(prompt('Ingrese los gramos'));
            console.log(`${gramosAKilogramos(gramos)} kilogramos`);
            break;
        case 5:
            let kilogramos = Number(prompt('Ingrese los kilogramos')); 
            console.log(`${kilogramosALibras(kilogramos)} libras`);
            break;

        case 6:
            let libras = Number(prompt('Ingrese las libras')); 
            console.log(`${librasAGramos(libras)} gramos`);
            break; 
        case 7: 
            varCentinela = 0;

        default:
        console.log('Ingresa una opción valida');
    }
}