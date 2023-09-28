import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService, Grupo, Jogadores } from '../API.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Escudo, Time } from 'src/entidades/entidades';


@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.css']
})
export class JogadoresComponent {

  grupo!: Grupo;
  jogadores: Array<Jogadores> = [];
  isInclusao!: Boolean;
  isAlteracao!: Boolean;
  form: FormGroup = new FormGroup({});
  times: Array<Time> = [ { nome: 'Brasil' }, { nome: 'América de Natal' },   { nome: 'Atlético Goianiense' },   { nome: 'Atlético Mineiro' },   { nome: 'Atlético Paranaense' },   { nome: 'Avaí' },   { nome: 'Bahia' },   { nome: 'Botafogo' },   { nome: 'Bragantino' },   { nome: 'Ceará' },   { nome: 'Chapecoense' },   { nome: 'Corinthians' },   { nome: 'Coritiba' },   { nome: 'CRB' },   { nome: 'Criciúma' },   { nome: 'Cruzeiro' },   { nome: 'CSA' },   { nome: 'Flamengo' },   { nome: 'Fluminense' },   { nome: 'Fortaleza' },   { nome: 'Figueirense' },   { nome: 'Goiás' },   { nome: 'Grêmio' },   { nome: 'Guarani' },   { nome: 'Internacional' },   { nome: 'Internacional de Limeira' },   { nome: 'Joinville' },   { nome: 'Juventude' },   { nome: 'Londrina' },   { nome: 'Luverdense' },   { nome: 'Náutico' },   { nome: 'Palmeiras' },   { nome: 'Paraná' },   { nome: 'Paysandu' },   { nome: 'Ponte Preta' },   { nome: 'Portuguesa' },   { nome: 'Remo' },   { nome: 'Rio Ave' },   { nome: 'Santa Clara' },   { nome: 'Santa Cruz' },   { nome: 'Santo André' },   { nome: 'Santos' },   { nome: 'São Bento' },   { nome: 'São Caetano' },   { nome: 'São Paulo' },   { nome: 'Sampaio Corrêa' },   { nome: 'Santa Clara' },   { nome: 'Sport Recife' },   { nome: 'Vasco da Gama' },   { nome: 'Vila Nova' },   { nome: 'Vitória' }];
  escudos: Array<Escudo> = [ {nome:'vermelha'}, {nome:'100'}, {nome:'aniversariante'}, {nome:'azul'}, {nome:'bronze'}, {nome:'diamanteazul'}, {nome:'diamanteroxa'}, {nome:'diamentebranca'}, {nome:'heroi'}, {nome:'heroi2'}, {nome:'icone'}, {nome:'ouro'}, {nome:'ouropreto'}, {nome:'pichação'}, {nome:'prata'}];

  constructor(private router: Router, private activateRouter:ActivatedRoute, private api: APIService, private spinner: NgxSpinnerService) {

    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email]),
      telefone: new FormControl(null),
      foto: new FormControl(null, Validators.required),
      time: new FormControl(null, Validators.required),
      aniversario: new FormControl(null, Validators.required),
      escudo: new FormControl(null, Validators.required),
      posicao: new FormControl(null, Validators.required)
    });

    this.spinner.show();
    this.activateRouter.queryParams.subscribe(param => {
      var idGrupo = param["idGrupo"];
      var filter = {
        jogadoresGrupoId: {
          eq: idGrupo
        }
      };
      api.GetGrupo(idGrupo).then(g=> {
        api.ListJogadores(filter).then(jogadores => {
          this.jogadores = (jogadores as any).items;
          
          this.jogadores.sort((a, b) => {
            // Use o operador de comparação ">" para ordenar por nome em ordem alfabética crescente
            if(a.nome != null && b.nome != null) {
              if (a.nome > b.nome) {
                return 1;
              } else if (a.nome < b.nome) {
                return -1;
              } else {
                return 0;
              }
            }
            return 0;
          });
          
          this.grupo = g;
          this.spinner.hide();
        });

      });

    });
  }
  

  incluirNovoJogador() {
    this.isInclusao = true;
  }

  calcularIdade(aniversario?: string) {
    if(aniversario) {
      const partesDataNascimento = aniversario.split('-');
      const anoNascimento = parseInt(partesDataNascimento[0]);
      const mesNascimento = parseInt(partesDataNascimento[1]);
      const diaNascimento = parseInt(partesDataNascimento[2]);
    
      const dataAtual = new Date();
    
      const anoAtual = dataAtual.getFullYear();
      const mesAtual = dataAtual.getMonth() + 1;
      const diaAtual = dataAtual.getDate(); 
    
      let idade = anoAtual - anoNascimento;
    
      if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
      }
    
      return idade;
    }
    return 0;
  }

  formatarDataAniversario(data?: string) {
    if(data) {
      const partesData = data.split('-'); 
      const mes = partesData[1];
      const dia = partesData[2];
      const dataFormatada = `${dia}/${mes}`;
      return dataFormatada;
    }
    return '';
  }

  acaoVoltar() {
    this.router.navigate(['/detalharGrupo'], { queryParams: { idGrupo: this.grupo.id}});
  }

}
