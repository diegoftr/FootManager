import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { APIService, Campeonato, EquipeCampeonato, GolPartidaCampeonato, Jogadores, JogadoresCampeonato, PartidaCampeonato } from '../API.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-manter-partida-campeonato',
  templateUrl: './manter-partida-campeonato.component.html',
  styleUrls: ['./manter-partida-campeonato.component.css']
})
export class ManterPartidaCampeonatoComponent implements OnInit { 

  campeonato!: Campeonato;
  equipes: Array<EquipeCampeonato> = [];
  isInclusao :boolean = false; 
  isAlteracao :boolean = false; 
  form: FormGroup = new FormGroup({});
  tiposPartidas: Array<String> = ['Normal', 'Disputa 3º','Final'];
  partida!: PartidaCampeonato;
  jogadoresCamp: Array<JogadoresCampeonato> = [];
  gols: Array<GolPartidaCampeonato> = [];



  constructor(private authenticator: AuthenticatorService, private router: Router, private activateRouter: ActivatedRoute, private api: APIService, private spinner: NgxSpinnerService) {

  }

  async ngOnInit() {
    this.spinner.show();


    this.activateRouter.queryParams.subscribe(async (param) => {
      const idCampeonato = param["idCampeonato"];
      const idPartida = param["idPartida"];

      if(idPartida == null) {
        this.form = new FormGroup({
          id: new FormControl(null),
          tipoPartida: new FormControl(null, Validators.required),
          campeonatoID: new FormControl(null),
          partidaCampeonatoEquipeAId: new FormControl(null, Validators.required),
          partidaCampeonatoEquipeBId: new FormControl(null, Validators.required),
        });

        this.isInclusao = true;
      } else {

        this.form = new FormGroup({
          id: new FormControl(idPartida),
          partidacampeonatoID: new FormControl(idCampeonato),
          golPartidaCampeonatoJogadoresGolId: new FormControl(null, Validators.required),
          golPartidaCampeonatoJogadoresAssistenciaId: new FormControl(null, Validators.required),
          golPartidaCampeonatoEquipeCampeonatoId: new FormControl(null, Validators.required),
        });

        this.isAlteracao = true;
      }


      try {
        const campeonato = await this.api.GetCampeonato(idCampeonato);
        this.campeonato = campeonato as any;

        const filter = {
          equipeCampeonatoCampeonatoId: {
            eq: campeonato.id,
          },
        };
        const equipesResponse = await this.api.ListEquipeCampeonatoes(filter);
        this.equipes = equipesResponse.items as any;

        if(this.isAlteracao) {
          const partida = await this.api.GetPartidaCampeonato(idPartida);
          partida.EquipeA = await this.api.GetEquipeCampeonato(partida.partidaCampeonatoEquipeAId!);
          partida.EquipeB = await this.api.GetEquipeCampeonato(partida.partidaCampeonatoEquipeBId!);

          const filter = {
            partidacampeonatoID: {
              eq: partida.id,
            },
          };
          const gols = await this.api.ListGolPartidaCampeonatoes(filter);

          await gols.items.forEach(async (g) => {
            var gol = g as any;
            gol.EquipeCampeonato = await this.api.GetEquipeCampeonato(g!.golPartidaCampeonatoEquipeCampeonatoId!);

            gol.JogadoresGol = await this.api.GetJogadoresCampeonato(g!.golPartidaCampeonatoJogadoresGolId!);
            gol.JogadoresGol.Jogadores = await this.api.GetJogadores(gol.JogadoresGol.jogadoresCampeonatoJogadoresId);

            gol.JogadoresAssistencia = await this.api.GetJogadoresCampeonato(g!.golPartidaCampeonatoJogadoresAssistenciaId!);
            gol.JogadoresAssistencia.Jogadores = await this.api.GetJogadores(gol.JogadoresAssistencia.jogadoresCampeonatoJogadoresId);

            g = gol;
          })

          this.gols = gols.items as any;
          this.partida = partida as any;
        }

        this.spinner.hide();
      } catch (error) {
        alert('Erro:' + error);
      } finally {
        this.spinner.hide();
      }
    });
  }

  async excluirGol(idGol: any) {
    const filter = {
      id: idGol,
    };
    if (confirm("Deseja excluir gol ?")) {
      await this.api.DeleteGolPartidaCampeonato(filter);
      this.ngOnInit();
    }
  }

  async carregarJogadores(evento: any) {
    try {
      this.spinner.show();
      var filter2 = {
        and: [
          {
            equipecampeonatoID: {  eq: evento.value }
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
    } finally {
      this.spinner.hide();
    }
    
  }


  golsMarcados(idEquipe: string) {
    return this.gols.filter(g=> g.golPartidaCampeonatoEquipeCampeonatoId == idEquipe).length;
  }

  async salvarGol() {
    try {
      if(this.form.valid) {
        this.spinner.show();
        this.form.get('campeonatoID')?.setValue(this.campeonato.id)
        this.form.get('id')?.setValue(uuid());
        this.form.get('partidacampeonatoID')?.setValue(this.partida.id)
  
        const partida = await this.api.CreateGolPartidaCampeonato(this.form.value);
  
        this.ngOnInit();
      }
    } catch (error) {
      console.error(error)
      alert('Erro ao incluir');
      this.spinner.hide();
    } 
  }

  async salvarPartida() {
    try {
      if(this.form.valid && (this.form.get('partidaCampeonatoEquipeAId')?.value != this.form.get('partidaCampeonatoEquipeBId')?.value)) {
        this.form.get('campeonatoID')?.setValue(this.campeonato.id)
        this.form.get('id')?.setValue(uuid());
  
        this.spinner.show();
        const partida = await this.api.CreatePartidaCampeonato(this.form.value);
  
        this.ngOnInit();
      }
    } catch (error) {
      console.error(error)
      alert('Erro ao incluir');
      this.spinner.hide();
    } 

  }

  acaoVoltar() {
    this.router.navigate(['/detalharCampeonato'], { queryParams: { idCampeonato: this.campeonato.id } });

  }

}
