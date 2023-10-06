
import { Itens, criarListaDeItens } from '../../type_back/src/itens';
import { JogadorClasse, Guerreiro, Bardo, Mago, Ladrao, } from  '../../type_back/src/Playerclass';
import { Randon_numero } from '../../type_back/src/randon_number';
import { Loja } from '../../type_back/src/Loja'

describe('Teste da Loja', () => {
    test('Teste itens Loja', () => {
        const player = new JogadorClasse('Thurigo',3,3,new Guerreiro);
        const lista = criarListaDeItens(8);
        const dado = Randon_numero(1,3);
        const test_Player = Loja(player, lista[dado]);

        expect(test_Player).toMatchObject<JogadorClasse>({nome: 'Thurigo',vida : 4, gold: 2 ,classe:{nome:"Guerreiro" ,agilidade:2, forca: 2, defesa: 2, carisma: 2, sorte: 2}})
    })
})
