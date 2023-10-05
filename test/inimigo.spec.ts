
import { criarListaDeInimigo, Inimigo } from '../../type_back/src/inimigo';

describe('criarListaDeInimigo', () => {
    test('deve criar uma lista de inimigos', () => {

        const listaDeInimigos = criarListaDeInimigo(8);

        expect(listaDeInimigos).toHaveLength(8);

        listaDeInimigos.forEach((inimigo) => {
            expect(inimigo).toBeInstanceOf(Inimigo);
        });
    });
});