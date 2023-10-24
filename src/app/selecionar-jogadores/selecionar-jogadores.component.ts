import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService, Grupo, Jogadores } from '../API.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Escudo, Time } from 'src/entidades/entidades';
import { LoadedImage } from 'ngx-image-cropper';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Storage } from 'aws-amplify';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-selecionar-jogadores',
  templateUrl: './selecionar-jogadores.component.html',
  styleUrls: ['./selecionar-jogadores.component.css']
})
export class SelecionarJogadoresComponent implements OnInit {

  grupo!: Grupo;
  jogadores: Array<Jogadores> = [];
  form: FormGroup = new FormGroup({});
  idCampeonato!: string;
  idGrupo!: string;
  classificacoes: Array<Escudo> = [{ nome: 'Normal' }, { nome: 'Destaque A' }, { nome: 'Destaque B' }, { nome: 'Pé murcho' }, { nome: 'Goleiro' }];



  constructor(private authenticator: AuthenticatorService, private router: Router, private activateRouter: ActivatedRoute, private api: APIService, private spinner: NgxSpinnerService) {

  }

  isLogado() {
    return this.authenticator.user != null && this.authenticator.user.username != 'visitante';
  }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null),
      classificacao: new FormControl(null, Validators.required),
      jogadoresCampeonatoCampeonatoId: new FormControl(null),
      jogadoresCampeonatoJogadoresId: new FormControl(null, Validators.required),
    });

    this.spinner.show();
    this.activateRouter.queryParams.subscribe(param => {
      var idGrupo = param["idGrupo"];
      var idCampeonato = param["idCampeonato"];

      this.idGrupo = idGrupo;
      this.idCampeonato = idCampeonato;

      var filter = {
        jogadoresGrupoId: {
          eq: idGrupo
        }
      };

      var filterJogCamp = {
        jogadoresCampeonatoCampeonatoId: {
          eq: idCampeonato
        }
      };

      this.api.ListJogadores(filter).then(jogadores => {
        this.api.ListJogadoresCampeonatoes(filterJogCamp).then(jogadoresCamp => {
          const idsDaListaComId = jogadoresCamp.items.map(item => item?.jogadoresCampeonatoJogadoresId);
          this.jogadores = jogadores.items.filter(item => !idsDaListaComId.includes(item?.id)) as any;
         
          this.jogadores.forEach((j, idx, array) => {
            Storage.get(j.foto!, { level: 'public' }).then(arquivo => {
              j.foto = arquivo.split('?')[0];
            });
          });
          this.spinner.hide();

          this.jogadores.sort((a, b) => {
            if (a.nome != null && b.nome != null) {
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
        });
      });
    });
  }

  selecionarJogador() {
    if (this.form.valid) {
      this.form.get('jogadoresCampeonatoCampeonatoId')?.setValue(this.idCampeonato);
      this.form.get('id')?.setValue(uuid());
      this.api.CreateJogadoresCampeonato(this.form.value).then(j=>{
        this.router.navigate(['/detalharCampeonato'], { queryParams: { idCampeonato: this.idCampeonato } });
      })
    }
  }

  acaoVoltar() {
    this.router.navigate(['/detalharCampeonato'], { queryParams: { idCampeonato: this.idCampeonato } });
  }


}
