import { Component} from '@angular/core';
import { API, I18n } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { Router } from '@angular/router';


API.configure(awsconfig);
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {



  constructor(private router: Router) {
    I18n.setLanguage('pt');
  }

  ngOnInit(): void {

  }


  ngOnDestroy() {
  }

  home() {
    this.router.navigate(['/home']);
  }

}
