import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { APIService, Campeonato, Grupo } from '../API.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-campeonatos',
  templateUrl: './campeonatos.component.html',
  styleUrls: ['./campeonatos.component.css']
})
export class CampeonatosComponent implements OnInit {

  grupo!: Grupo;
  isInclusao!: Boolean;
  isAlteracao!: Boolean;
  form: FormGroup = new FormGroup({});
  campeonatos: Array<Campeonato> = [];


  constructor(private authenticator: AuthenticatorService, private router: Router, private activateRouter: ActivatedRoute, private api: APIService, private spinner: NgxSpinnerService) {

  }

  ngOnInit(): void {

    this.form = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, Validators.required),
      icone: new FormControl(null, [Validators.required]),
      data: new FormControl(null, [Validators.required]),
      campeonatoGrupoId: new FormControl(null),
    });

    this.spinner.show();
    this.activateRouter.queryParams.subscribe(param => {
      var idGrupo = param["idGrupo"];
      var filter = {
        campeonatoGrupoId: {
          eq: idGrupo
        }
      };
      this.api.GetGrupo(idGrupo).then(g => {
        this.grupo = g;
        this.api.ListCampeonatoes(filter).then(c => {
          this.campeonatos = (c as any).items
          this.spinner.hide();
        })
      });
    });
  }

  isLogado() {
    return this.authenticator.user != null && this.authenticator.user.username != 'visitante';
  }

  acaoVoltar() {
    if (this.isInclusao || this.isAlteracao) {
      this.router.navigate(['/campeonatos'], { queryParams: { idGrupo: this.grupo.id } });

    } else {
      this.router.navigate(['/detalharGrupo'], { queryParams: { idGrupo: this.grupo.id } });

    }
  }

  salvarCampeonato() {
    this.spinner.show();
    if (this.form.valid) {
      this.form.get('campeonatoGrupoId')?.setValue(this.grupo.id);
      var data = this.form.get('data')?.value;

      const ano = data.getFullYear().toString().padStart(4, '0');
      const mes = (data.getMonth() + 1).toString().padStart(2, '0');
      const dia = data.getDate().toString().padStart(2, '0');
      const dataFormatada = `${ano}-${mes}-${dia}`;

      this.form.get('id')?.setValue(uuid());

      this.form.get('data')?.setValue(dataFormatada);
      this.api.CreateCampeonato(this.form.value).then(a => {
        this.isInclusao = false;
        this.spinner.hide();
        this.ngOnInit();
      });

    }
  }

  formatarData(data?: any) {
    if (data) {
      const partesData = data.split('-');
      const mes = partesData[1];
      const dia = partesData[2];
      const ano = partesData[0];

      const dataFormatada = `${dia}/${mes}/${ano}`;
      return dataFormatada;
    }
    return '';
  }

  detalharCampeonato(id: string) {
    this.router.navigate(['/detalharCampeonato'], { queryParams: { idCampeonato: id } });

  }

  incluirNovoCampeonato() {
    this.isInclusao = true;
  }

}
