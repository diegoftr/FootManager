import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Paises } from 'src/entidades/entidades';
import { APIService } from '../API.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-manter-equipe-campeonato',
  templateUrl: './manter-equipe-campeonato.component.html',
  styleUrls: ['./manter-equipe-campeonato.component.css']
})
export class ManterEquipeCampeonatoComponent implements OnInit {

  idCampeonato! : string;
  idEquipe!: string;

  paises: Array<Paises> = [
    { "nome": "Alemanha" },
    { "nome": "Argentina" },
    { "nome": "Áustria" },
    { "nome": "Bélgica" },
    { "nome": "Brasil" },
    { "nome": "Chile" },
    { "nome": "Colômbia" },
    { "nome": "Croácia" },
    { "nome": "Espanha" },
    { "nome": "França" },
    { "nome": "Holanda" },
    { "nome": "Inglaterra" },
    { "nome": "Itália" },
    { "nome": "México" },
    { "nome": "Portugal" },
    { "nome": "Rússia" },
    { "nome": "Suécia" },
    { "nome": "Suíça" },
    { "nome": "Uruguai" },
    { "nome": "Venezuela" },
    { "nome": "Fluminense" },
    { "nome": "Chelsea" },
    { "nome": "Paris Saint-Germain" },
    { "nome": "Real Madrid" },
  ]

  constructor(private authenticator: AuthenticatorService, private router: Router, private activateRouter: ActivatedRoute, private api: APIService, private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, Validators.required),
      pais: new FormControl(null, Validators.required),
      equipeCampeonatoCampeonatoId: new FormControl(null),
    });

    this.activateRouter.queryParams.subscribe(param => {
      var idCampeonato = param["idCampeonato"];
      var idEquipe = param["idEquipe"];
      this.idEquipe = idEquipe;
      this.idCampeonato = idCampeonato;
    });
  }


  form: FormGroup = new FormGroup({});

  acaoVoltar() {
    this.router.navigate(['/detalharCampeonato'], { queryParams: { idCampeonato: this.idCampeonato } });
  }


  salvarEquipe() {
    this.spinner.show();
    if (this.form.valid) {

      this.form.get('equipeCampeonatoCampeonatoId')?.setValue(this.idCampeonato);
      this.form.get('id')?.setValue(this.idEquipe != null ? this.idEquipe : uuid());

      this.api.CreateEquipeCampeonato(this.form.value).then(a => {
        this.spinner.hide();
        this.acaoVoltar();
      });
    }
  }
}
