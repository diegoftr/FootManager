import { Component, OnInit } from '@angular/core';
import { APIService, Campeonato, ModelJogadoresCampeonatoConnection, EquipeCampeonato, JogadoresCampeonato, UpdateJogadoresCampeonatoInput, GetCampeonatoQuery, GetEquipeCampeonatoQuery, PartidaCampeonato, GolPartidaCampeonato, GetResultadoCampeonatoQuery } from '../API.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-detalhar-campeonato',
  templateUrl: './detalhar-campeonato.component.html',
  styleUrls: ['./detalhar-campeonato.component.css']
})
export class DetalharCampeonatoComponent implements OnInit {

  campeonato!: Campeonato;
  equipes: Array<EquipeCampeonato> = [];
  jogadoresCampeonato: Array<JogadoresCampeonato> = [];
  partidas: Array<PartidaCampeonato> = [];
  resultadoCampeonato!: GetResultadoCampeonatoQuery;


  constructor(private authenticator: AuthenticatorService, private router: Router, private activateRouter: ActivatedRoute, private api: APIService, private spinner: NgxSpinnerService) {

  }

  async ngOnInit() {
    this.spinner.show();

    this.activateRouter.queryParams.subscribe(async (param) => {
      const idCampeonato = param["idCampeonato"];

      try {
        const campeonato = await this.api.GetCampeonato(idCampeonato);

        this.consultarJogadoresCampeonato(campeonato);
        this.listarEquipesCampeonatos(campeonato);
        await this.listarPartidas(campeonato);
        await this.listarResultadoCampeonato(campeonato);

        this.spinner.hide();
      } catch (error) {
        console.error(error);
      } finally {
        this.spinner.hide();
      }
    });
  }

  async listarResultadoCampeonato(campeonato: GetCampeonatoQuery) {
    const resultadoCampeonato = await this.api.GetResultadoCampeonato(campeonato.id);
    this.resultadoCampeonato = resultadoCampeonato;
    
  }

  filtrarPartidas(partidas: (PartidaCampeonato | null)[] | undefined, tipo: String) {
    return partidas?.filter(p=>p?.tipoPartida == tipo);
  }

  async listarPartidas(c: any) {
    const filter = {
      campeonatoID: {
        eq: c.id,
      },
    };
    const partidas = await this.api.ListPartidaCampeonatoes(filter) as any;
    this.partidas = partidas.items;
    for (const p of partidas.items) {
      p.EquipeA = await this.api.GetEquipeCampeonato(p.partidaCampeonatoEquipeAId);
      p.EquipeB = await this.api.GetEquipeCampeonato(p.partidaCampeonatoEquipeBId);

      const filter = {
        partidacampeonatoID: {
          eq: p.id,
        },
      };
      p.GolPartidaCampeonatoes = await this.api.ListGolPartidaCampeonatoes(filter);

      const as = await this.api.ListGolPartidaCampeonatoes(filter);


    }

    partidas.items.sort((a: { createdAt: number | null; }, b: { createdAt: number | null; }) => {
      if (a.createdAt != null && b.createdAt != null) {
        if (a.createdAt > b.createdAt) {
          return 1;
        } else if (a.createdAt < b.createdAt) {
          return -1;
        } else {
          return 0;
        }
      }
      return 0;
    });

    this.campeonato.PartidaCampeonatoes = partidas;
  }


  incluirResultadoCampeonato() {
    this.router.navigate(['/manterResultadoCampeonato'], { queryParams: { idCampeonato: this.campeonato.id } });
  }

  
  async filtarJogadoresGolPartida(golsPartida:(GolPartidaCampeonato | null)[], idEquipe:string | undefined) {
    var gols = golsPartida.filter(g=> g?.golPartidaCampeonatoEquipeCampeonatoId == idEquipe)
    var retorno : any;
    if(gols != null) {
      for (const g of gols) {
        if(g != null) {
          const j = await this.api.GetJogadores(g!.golPartidaCampeonatoJogadoresGolId!);
          retorno.push("https://stlbuckt213907-dev.s3.us-east-1.amazonaws.com/public/" + j.foto);
        }
      }
    }
    return retorno;
  }

  carregarImagemJogadorGol(idEquipe:string , gol:GolPartidaCampeonato | null) {
    var retorno;
    if(gol?.golPartidaCampeonatoEquipeCampeonatoId == idEquipe) {

      var equipe = this.equipes.filter(e=>e.id == idEquipe)[0];
      if(equipe != null && equipe.JogadoresCampeonatoes != null && equipe.JogadoresCampeonatoes.items != null) {
        var jogador = equipe.JogadoresCampeonatoes.items.filter(j=>j!.id == gol.golPartidaCampeonatoJogadoresGolId)[0];
        if(jogador != null && jogador.Jogadores != null) {
          retorno = jogador!.Jogadores!.foto;
        }

      }
    }
    return retorno;
  }

  retornarJson(obj: any) {
    return JSON.stringify(obj);
  }

  calcularPontosGanhos(idEquipe: string) {
    var pontos = 0;
    if (this.campeonato != null && this.campeonato.PartidaCampeonatoes != null && this.campeonato.PartidaCampeonatoes.items != null) {
      var partidas = this.campeonato.PartidaCampeonatoes.items.filter(p => p?.tipoPartida == 'Normal' && (p!.partidaCampeonatoEquipeAId == idEquipe || p!.partidaCampeonatoEquipeBId == idEquipe));
      for (const p of partidas) {
        var resultado = this.resultadoPartida(idEquipe, p!);
        if (resultado == 'EMPATE') {
          pontos = pontos + 1;
        } else if (resultado == 'VITORIA') {
          pontos = pontos + 3;
        }
      }
    }
    return pontos;
  }

  quantPartidasJogadas(idEquipe: string) {
    var quant = 0;
    if (this.campeonato != null && this.campeonato.PartidaCampeonatoes != null && this.campeonato.PartidaCampeonatoes.items != null) {
      quant = this.campeonato.PartidaCampeonatoes.items.filter(p => p?.tipoPartida == 'Normal' && (p!.partidaCampeonatoEquipeAId == idEquipe || p!.partidaCampeonatoEquipeBId == idEquipe)).length;
    }
    return quant;
  }

  quantGols(idEquipe: string, resultadoEsperado: string) {
    var golsContra = 0;
    var golsAFavor = 0;

    if (this.campeonato != null && this.campeonato.PartidaCampeonatoes != null && this.campeonato.PartidaCampeonatoes.items != null) {
      var partidas = this.campeonato.PartidaCampeonatoes.items.filter(p => p?.tipoPartida == 'Normal' && (p!.partidaCampeonatoEquipeAId == idEquipe || p!.partidaCampeonatoEquipeBId == idEquipe));
      for (const p of partidas) {
        if (p != null && p?.GolPartidaCampeonatoes != null) {
          golsAFavor = golsAFavor + p?.GolPartidaCampeonatoes?.items.filter(g => g?.golPartidaCampeonatoEquipeCampeonatoId == idEquipe).length;
          golsContra = golsContra + p?.GolPartidaCampeonatoes?.items.filter(g => g?.golPartidaCampeonatoEquipeCampeonatoId != idEquipe).length;

        }

      }
    }
    if (resultadoEsperado == 'MARCADOS') {
      return golsAFavor;
    } else if (resultadoEsperado == 'CONTRA') {
      return golsContra;
    } else {
      return golsAFavor - golsContra;
    }
  }

  quantGolsJogador(idJogador: string) {
    var quantGols = 0;
    if (this.campeonato != null && this.campeonato.PartidaCampeonatoes != null && this.campeonato.PartidaCampeonatoes?.items != null) {
      this.campeonato.PartidaCampeonatoes?.items.forEach(p => {
        if (p?.GolPartidaCampeonatoes != null) {
          quantGols = quantGols + p.GolPartidaCampeonatoes?.items.filter(g => g?.golPartidaCampeonatoJogadoresGolId == idJogador).length;
        }
      })
    }
    return quantGols;
  }

  quantAssistenciaJogador(idJogador: string) {
    var quantGols = 0;
    if (this.campeonato != null && this.campeonato.PartidaCampeonatoes != null && this.campeonato.PartidaCampeonatoes?.items != null) {
      this.campeonato.PartidaCampeonatoes?.items.forEach(p => {
        if (p?.GolPartidaCampeonatoes != null) {
          quantGols = quantGols + p.GolPartidaCampeonatoes?.items.filter(g => g?.golPartidaCampeonatoJogadoresAssistenciaId == idJogador).length;
        }
      })
    }
    return quantGols;
  }

  quantResultado(idEquipe: string, resultadoEsperado: string) {
    var quant = 0;
    if (this.campeonato != null && this.campeonato.PartidaCampeonatoes != null && this.campeonato.PartidaCampeonatoes.items != null) {
      var partidas = this.campeonato.PartidaCampeonatoes.items.filter(p => p?.tipoPartida == 'Normal' && (p!.partidaCampeonatoEquipeAId == idEquipe || p!.partidaCampeonatoEquipeBId == idEquipe));
      for (const p of partidas) {
        var resultado = this.resultadoPartida(idEquipe, p!);
        if (resultado == resultadoEsperado) {
          quant++;
        }
      }
    }
    return quant;
  }

  resultadoPartida(idEquipe: String, partida: PartidaCampeonato) {
    var golsEquipe = partida?.GolPartidaCampeonatoes?.items.filter(g => g?.golPartidaCampeonatoEquipeCampeonatoId == idEquipe).length;
    var golsAdversario = partida?.GolPartidaCampeonatoes?.items.filter(g => g?.golPartidaCampeonatoEquipeCampeonatoId != idEquipe).length;
    if (golsEquipe == golsAdversario) {
      return 'EMPATE'
    } else if (golsEquipe! > golsAdversario!) {
      return 'VITORIA'
    } else {
      return 'DERROTA'
    }
  }

  quantidadeGolsEquipe(gols: any, idEquipe: any) {
    return gols.filter((a: { golPartidaCampeonatoEquipeCampeonatoId: any; }) => a?.golPartidaCampeonatoEquipeCampeonatoId == idEquipe).length
  }

  async listarEquipesCampeonatos(c: any) {

    try {
      const filter = {
        equipeCampeonatoCampeonatoId: {
          eq: c.id,
        },
      };

      const equipesResponse = await this.api.ListEquipeCampeonatoes(filter);
      this.equipes = equipesResponse.items as any;

      for (const equipe of this.equipes) {

        const filter2 = {
          equipecampeonatoID: {
            eq: equipe.id,
          },
        }

        const jogadoresResponse = await this.api.ListJogadoresCampeonatoes(filter2);
        const jogadores = jogadoresResponse.items as JogadoresCampeonato[];

        for (const jogador of jogadores) {
          const jogadorResponse = await this.api.GetJogadores(jogador.jogadoresCampeonatoJogadoresId!);
          jogadorResponse.foto = "https://stlbuckt213907-dev.s3.us-east-1.amazonaws.com/public/" + jogadorResponse.foto!;
          jogador.Jogadores = jogadorResponse;
        }

        const conexao: ModelJogadoresCampeonatoConnection = {
          __typename: 'ModelJogadoresCampeonatoConnection',
          items: jogadores,
        };
        equipe.JogadoresCampeonatoes = conexao;
      }

    } catch (error) {
      console.error(error);
    }
  }

  async consultarJogadoresCampeonato(c: any) {
    var filter2 = {
      and: [
        {
          jogadoresCampeonatoCampeonatoId: {
            eq: c.id
          }
        }, {
          equipecampeonatoID: { attributeExists: false }
        }
      ]
    };
    this.api.ListJogadoresCampeonatoes(filter2).then(j => {
      this.jogadoresCampeonato = j.items as any

      this.jogadoresCampeonato.forEach(async (j) => {
        await this.api.GetJogadores(j.jogadoresCampeonatoJogadoresId as string).then(a => {
          j.Jogadores = a;
        })
      })
      this.campeonato = c;

    });
  }

  async sortearEquipes() {
    if (confirm("Deseja sortear equipes ?")) {
      this.spinner.show();

      this.shuffleArray(this.jogadoresCampeonato);


      const bons = this.jogadoresCampeonato.filter(jogador => jogador.classificacao === 'Destaque' && jogador.equipecampeonatoID == null);
      const ruins = this.jogadoresCampeonato.filter(jogador => jogador.classificacao === 'Pé murcho' && jogador.equipecampeonatoID == null);
      const normais = this.jogadoresCampeonato.filter(jogador => jogador.classificacao === 'Normal' && jogador.equipecampeonatoID == null);

      this.shuffleArray(this.equipes);
      bons.forEach((jogador, index) => {
        const equipeIndex = index % this.equipes.length;
        jogador.equipecampeonatoID = this.equipes[equipeIndex].id;
      });

      this.shuffleArray(this.equipes);
      ruins.forEach((jogador, index) => {
        const equipeIndex = index % this.equipes.length;
        jogador.equipecampeonatoID = this.equipes[equipeIndex].id;
      });

      this.shuffleArray(this.equipes);
      normais.forEach((jogador, index) => {
        const equipeIndex = index % this.equipes.length;
        jogador.equipecampeonatoID = this.equipes[equipeIndex].id;
      });

      const todosJogadores = bons.concat(ruins, normais);

      await this.atualizarJogadores(todosJogadores);
      this.spinner.hide();

    }
  }

  async atualizarJogadores(todosJogadores: any) {
    try {
      for (const jogador of todosJogadores) {

        var jog =
        {
          id: jogador.id,
          classificacao: jogador.classificacao,
          jogadoresCampeonatoCampeonatoId: jogador.jogadoresCampeonatoCampeonatoId,
          jogadoresCampeonatoJogadoresId: jogador.jogadoresCampeonatoJogadoresId,
          equipecampeonatoID: jogador.equipecampeonatoID
        }

        await this.api.UpdateJogadoresCampeonato(jog);
      }
      alert('Atualização dos jogadores concluída com sucesso!');
      this.ngOnInit();
    } catch (e) {
      alert('Erro ao atualizar jogadores: ' + e);
    }
  }


  shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  incluirEquipeCampeonato() {
    this.router.navigate(['/manterEquipeCampeonato'], { queryParams: { idCampeonato: this.campeonato.id } });
  }

  incluirPartidaCampeonato() {
    this.router.navigate(['/manterPartida'], { queryParams: { idCampeonato: this.campeonato.id } });
  }

  alterarPartidaCampeonato(idPartida: string) {
    this.router.navigate(['/manterPartida'], { queryParams: { idCampeonato: this.campeonato.id, idPartida: idPartida } });
  }

  isLogado() {
    return this.authenticator.user != null && this.authenticator.user.username != 'visitante';
  }

  acaoVoltar() {
    this.router.navigate(['/campeonatos'], { queryParams: { idGrupo: this.campeonato.Grupo?.id } });
  }

  incluirJogadoresCampeonato() {
    this.router.navigate(['/selecionarJogador'], { queryParams: { idCampeonato: this.campeonato.id, idGrupo: this.campeonato.Grupo?.id } });

  }

  abrirManterFotos() {
    this.router.navigate(['/manterFotos'], { queryParams: { id: this.campeonato.id } });
  }

}
