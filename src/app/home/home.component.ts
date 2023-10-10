import { Component, OnInit } from '@angular/core';
import { APIService, Grupo, ListGruposQuery } from '../API.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  form: FormGroup = new FormGroup({});
  grupos: Array<Grupo> = [];


  constructor(private router: Router, private api: APIService, private spinner: NgxSpinnerService, private authenticator: AuthenticatorService) {
  }

  async ngOnInit() {

    var logIn = {username: "Visitante",
    password: "Visitante"}
    if(await this.authenticator.user == null)
      await Auth.signIn(logIn);

    this.spinner.show();
    this.form = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null)
    });

    // this.api.CreateGrupo(this.form.value).then( grupo => {
    // });
    this.api.ListGrupos().then((grupo: ListGruposQuery) => {
      this.grupos = (grupo as any).items
      if(this.grupos.length == 1) {
        this.acaoBotaoDetalharGrupo(this.grupos[0].id);
      }
      this.spinner.hide();
    });
  }

  acaoBotaoDetalharGrupo(idGrupo:String) {
    this.router.navigate(['/detalharGrupo'], { queryParams: { idGrupo: idGrupo}});
  }

}
