import { Atacar, Fugir, GoldAndar } from "../../type_back/src/Batalha";
import { Loja } from "../../type_back/src/Loja";
import { Guerreiro, JogadorClasse } from "../../type_back/src/Playerclass"
import { Inimigo, criarListaDeInimigo } from "../../type_back/src/inimigo";
import { criarListaDeItens } from "../../type_back/src/itens";
import { Randon_numero } from "../../type_back/src/randon_number";

describe('Teste Run inteira', () => {
    test('testando a run interira todos os modulos junto', () =>{ 
        var Player = new JogadorClasse('Thurigo',1,1, new Guerreiro);
        const inimigo = criarListaDeInimigo(8);
        const itens = criarListaDeItens(8);
        var dado = Randon_numero(1,8)
        
        var batalha = Atacar(Player,inimigo[dado]);
        Player = Fugir(Player,inimigo[dado]);
        //PERDE 1 DE DEFESA fica com 0
                
        Player = batalha.jogador

        // Perde 1 de vida fica com 0 
        // Não desse a defesa porque ta em 0 


        Player = Loja(Player,itens[1]);
        // Ganha 1 de vida e 1 de defesa 
        
        Player = GoldAndar(Player);
        

        expect(Player).toMatchObject<JogadorClasse>({nome: 'Thurigo',vida : 1, gold: 5 ,classe:{nome:"Guerreiro" ,agilidade:2, forca: 2, defesa: 1, carisma: 2, sorte: 2}})

        expect(batalha.inimigo.defesa).toBe(0)
    })
})