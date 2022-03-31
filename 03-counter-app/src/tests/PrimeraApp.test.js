import { shallow} from 'enzyme';
import '@testing-library/jest-dom';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp/>', () => {

    test('Debe de mostrar <PrimeraApp/> correctamente', () => {
        
        const saludo = 'Hola';
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/> );

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('Debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola';
        const subtitulo = 'es noche';
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo } 
                subtitulo={subtitulo}
            /> 
        );
        
        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);
        expect( textoParrafo ).toBe( subtitulo );
    })
    

//   test('Debe mostrar el mensaje "Hola"', () => {
    
//         const saludo = "Hola";
//         //renderizar función
//         const { getByText } = render(<PrimeraApp saludo={ saludo } />);

//         expect( getByText(saludo) ).toBeInTheDocument();
//   })
  
})
