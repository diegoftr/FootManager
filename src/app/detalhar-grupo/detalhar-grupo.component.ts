import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService, Grupo } from '../API.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-detalhar-grupo',
  templateUrl: './detalhar-grupo.component.html',
  styleUrls: ['./detalhar-grupo.component.css']
})
export class DetalharGrupoComponent {

  grupo!: Grupo;


  constructor(private router: Router, private activateRouter:ActivatedRoute, private api: APIService, private spinner: NgxSpinnerService) {
    this.spinner.show();
    this.activateRouter.queryParams.subscribe(param => {
      var idGrupo = param["idGrupo"];

      api.GetGrupo(idGrupo).then(g=> {
        this.grupo = g;
        this.spinner.hide();
      });

    });
  }

  acaoVoltar() {
    this.router.navigate(['/home']);
  }

  acaoBotaoAtletas(idGrupo:String) {
    this.router.navigate(['/jogadores'], { queryParams: { idGrupo: idGrupo}});
  }

}
