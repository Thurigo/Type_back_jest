import { JogadorClasse, Guerreiro, Bardo, Mago, Ladrao, } from     '../../type_back/src/Playerclass';

import { Atacar, Fugir } from '../../type_back/src/Batalha';

describe('Teste batalha ataque', () => {
    test('Teste de batalha de defesa' ,() => {
        const Player = new JogadorClasse('Thurigo', 3,3 ,new Guerreiro)
        const test_Player = Atacar(Player);
        expect(test_Player.classe.defesa).toBe(5);
    })

    test('Teste de batalha de agilidade' ,() => {
        const Player = new JogadorClasse('Thurigo', 3,3 ,new Guerreiro)
        const test_Player = Fugir(Player);
        expect(test_Player.classe.defesa).toBe(5);
    })
})