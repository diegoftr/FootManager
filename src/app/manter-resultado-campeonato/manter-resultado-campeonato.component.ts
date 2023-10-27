import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { APIService, Campeonato, EquipeCampeonato, GolPartidaCampeonato, Jogadores, JogadoresCampeonato, PartidaCampeonato } from '../API.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-manter-resultado-campeonato',
  templateUrl: './manter-resultado-campeonato.component.html',
  styleUrls: ['./manter-resultado-campeonato.component.css']
})
export class ManterResultadoCampeonatoComponent implements OnInit { 

  campeonato!: Campeonato;
  equipes: Array<EquipeCampeonato> = [];
  jogadoresCamp: Array<JogadoresCampeonato> = [];
  form: FormGroup = new FormGroup({});


  constructor(private authenticator: AuthenticatorService, private router: Router, private activateRouter: ActivatedRoute, private api: APIService, private spinner: NgxSpinnerService) {

  }

  async ngOnInit() {
    this.spinner.show();


    this.activateRouter.queryParams.subscribe(async (param) => {
      const idCampeonato = param["idCampeonato"];

      
      try {

        const resultado = await this.api.GetResultadoCampeonato(idCampeonato);


        this.form = new FormGroup({
          id: new FormControl(resultado == null ? null : resultado.id),
          agradecimento: new FormControl(resultado == null ? null : resultado.agradecimento),
          resultadoCampeonatoArtilheiroId: new FormControl(resultado == null ? null : resultado.resultadoCampeonatoArtilheiroId, Validators.required),
          resultadoCampeonatoGoleiroId: new FormControl(resultado == null ? null : resultado.resultadoCampeonatoGoleiroId, Validators.required),
          resultadoCampeonatoDestaqueId: new FormControl(resultado == null ? null : resultado.resultadoCampeonatoDestaqueId, Validators.required),
          resultadoCampeonatoCampeaoId: new FormControl(resultado == null ? null : resultado.resultadoCampeonatoCampeaoId, Validators.required),
          resultadoCampeonatoSegundoId: new FormControl(resultado == null ? null : resultado.resultadoCampeonatoSegundoId, Validators.required),
          resultadoCampeonatoTerceiroId: new FormControl(resultado == null ? null : resultado.resultadoCampeonatoTerceiroId, Validators.required),
          resultadoCampeonatoAssistenciasId: new FormControl(resultado == null ? null : resultado.resultadoCampeonatoAssistenciasId, Validators.required),
        });


        const campeonato = await this.api.GetCampeonato(idCampeonato);
        this.campeonato = campeonato as any;

        const filter = {
          equipeCampeonatoCampeonatoId: {
            eq: campeonato.id,
          },
        };
        const equipesResponse = await this.api.ListEquipeCampeonatoes(filter);
        this.equipes = equipesResponse.items as any;

        var filter2 = {
          and: [
            {
              jogadoresCampeonatoCampeonatoId: {  eq: this.campeonato.id }
            }
          ]
        };
        var jogadoresCamp = await this.api.ListJogadoresCampeonatoes(filter2);
        this.jogadoresCamp = jogadoresCamp.items as any
        await this.jogadoresCamp.forEach(async (j) => {
          await this.api.GetJogadores(j.jogadoresCampeonatoJogadoresId as string).then(a => {
            j.Jogadores = a;
          })
        })
        
      } catch (error) {
        alert('Erro:' + error);
      } finally {
        this.spinner.hide();
      }
    });
  }

  listaGoleiros() {
    return this.jogadoresCamp.filter(j=>j.classificacao == 'Goleiro')
  }

  acaoVoltar() {
    this.router.navigate(['/detalharCampeonato'], { queryParams: { idCampeonato: this.campeonato.id } });
  }

  salvarResultadoFinal() {
    
    if(this.form.valid) {
      this.spinner.show();
      if(this.form.get('id')?.value != null) {
        this.api.UpdateResultadoCampeonato(this.form.value)
      } else {
        this.form.get('id')?.setValue(this.campeonato.id)
        this.api.CreateResultadoCampeonato(this.form.value)
      }

      this.acaoVoltar();

    }

  }



}
