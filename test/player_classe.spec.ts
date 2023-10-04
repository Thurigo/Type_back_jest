
import { JogadorClasse, Guerreiro, Bardo, Mago, Ladrao, } from                   '../../type_back/src/Playerclass';

//import { Randon_numero } from '../src/engine';

describe('Teste classe player', () => {
    test('Test Class Do Jogadora',() => {
        const resultado = new JogadorClasse("Thurigo", 50,50, new Guerreiro);

        expect(resultado.vida).toBe(50);
    } )
})