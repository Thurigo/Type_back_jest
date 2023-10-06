
import { JogadorClasse, Guerreiro, Bardo, Mago, Ladrao, } from  '../../type_back/src/Playerclass';

//import { Randon_numero } from '../src/engine';

describe('Teste classe player', () => {
    test('Test Class Do Guerreiro',() => {
        const resultado = new JogadorClasse("Thurigo", 50,50, new Guerreiro);

        expect(resultado).toBeInstanceOf(JogadorClasse);
    } )

    test('Test Class Do Bardo',() => {
        const resultado = new JogadorClasse("Thurigo", 50,50, new Bardo);

        expect(resultado).toBeInstanceOf(JogadorClasse);
    } )

    test('Test Class Do Ladrão',() => {
        const resultado = new JogadorClasse("Thurigo", 50,50, new Ladrao);

        expect(resultado).toBeInstanceOf(JogadorClasse);
    } )

    test('Test Class Do Mago',() => {
        const resultado = new JogadorClasse("Thurigo", 50,50, new Mago);

        expect(resultado).toBeInstanceOf(JogadorClasse);
    } )
})


