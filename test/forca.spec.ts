import { JogadorClasse, Guerreiro, Bardo, Mago, Ladrao, } from     '../../type_back/src/Playerclass';

import { Inimigo,criarListaDeInimigo } from     '../../type_back/src/inimigo';
import { Atacar, Fugir, Papear } from '../../type_back/src/Batalha';
import { Randon_numero } from '../../type_back/src/randon_number';

describe('Teste batalha ataque', () => {
    test('Teste de batalha de defesa' ,() => {
        const Player = new JogadorClasse('Thurigo', 3,3 ,new Guerreiro)
        const lista = criarListaDeInimigo(8)
        const dado = Randon_numero(1,3);
        const test_Player = Atacar(Player,lista[dado]);
        expect(test_Player.classe.defesa).toBe(0);
    })

    test('Teste de batalha de agilidade' ,() => {
        const Player = new JogadorClasse('Thurigo', 3,3 ,new Guerreiro)
        const lista = criarListaDeInimigo(8)
        const dado = Randon_numero(1,3);
        const test_Player = Fugir(Player,lista[dado]);
        expect(test_Player.classe.defesa).toBe(0);
    })


    test('Teste de batalha de agilidade' ,() => {
        const Player = new JogadorClasse('Thurigo', 3,3 ,new Guerreiro)
        const lista = criarListaDeInimigo(8)
        const dado = Randon_numero(1,3);
        const test_Player = Papear(Player,lista[dado]);
        expect(test_Player.classe.defesa).toBe(0);
    })

})

