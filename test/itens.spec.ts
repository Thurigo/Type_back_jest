import { Itens, criarListaDeItens } from '../../type_back/src/itens';

describe('Teste clase e lista de itens', () => {
    test('Teste lista e classe', () => {
        const ListaDeItens = criarListaDeItens(8);

        expect(ListaDeItens).toHaveLength(8);

        ListaDeItens.forEach((itens) => {
            expect(itens).toBeInstanceOf(Itens);
        })

    })



})
