import { JogadorClasse, Guerreiro, Bardo, Mago, Ladrao, } from '../../type_back/src/Playerclass';

import { Inimigo, criarListaDeInimigo } from '../../type_back/src/inimigo';
import { Atacar, Fugir, GoldAndar, Papear, TentarSorte } from '../../type_back/src/Batalha';
import { Randon_numero } from '../../type_back/src/randon_number';

describe('Teste batalha ataque', () => {

    test('teste gold andar', () => {
        const Player = new JogadorClasse('Thurigo', 3, 3, new Guerreiro)
        const Andartest = GoldAndar(Player);

        expect(Andartest.gold).toBe(8);
    })

    test('Teste de batalha de defesa', () => {
        const Player = new JogadorClasse('Thurigo', 3, 3, new Guerreiro)
        const lista = criarListaDeInimigo(8);
        const dado = Randon_numero(1, 3);
        const test_Player = Atacar(Player, lista[dado]);
        expect(test_Player.classe.defesa).toBe(0);
    })

    test('Teste de batalha de agilidade', () => {
        const Player = new JogadorClasse('Thurigo', 3, 3, new Guerreiro)
        const lista = criarListaDeInimigo(8);
        const dado = Randon_numero(1, 3);
        const test_Player = Fugir(Player, lista[dado]);
        expect(test_Player.classe.defesa).toBe(0);
    })


    test('Teste de batalha de carisma', () => {
        const Player = new JogadorClasse('Thurigo', 3, 3, new Guerreiro)
        const lista = criarListaDeInimigo(8);
        const dado = Randon_numero(1, 3);
        const test_Player = Papear(Player, lista[dado]);
        expect(test_Player.classe.defesa).toBe(0);
    })

    test('Teste de batalha de sorte', () => {
        const Player = new JogadorClasse('Thurigo', 3, 3, new Guerreiro)
        const lista = criarListaDeInimigo(8);
        const dado = Randon_numero(1, 3);
        const test_Player = TentarSorte(Player, lista[dado]);
        expect(test_Player.classe.sorte).toBe(1);
        expect(test_Player.classe.sorte).toBe(2);
    });

})