import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
  
    test('getSaludo debe retornar Hola Mariana', () => {
        
        const nombre = 'Mariana';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe(' Hola ' + nombre);
    })
    
    //getSaludo debe retornar Hola Andrea si no hay argumento nombre

    test('getSaludo no tiene argumento, retorna el por defecto', () => {
        
        const saludo = getSaludo(  );

        expect( saludo ).toBe(' Hola Andrea');
        console.log(saludo)
    })
    
})
