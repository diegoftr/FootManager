import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  constructor(private router: Router, private authenticator: AuthenticatorService) {
  }

  async ngOnInit() {
    var logIn = {username: "Visitante",
    password: "Visitante"}
    if(this.authenticator.user == null)
      await Auth.signIn(logIn);
    this.router.navigate(['/home']);
  }

  abrirLogin() {
    this.router.navigate(['/login']);
  }
}
