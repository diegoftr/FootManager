import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalharGrupoComponent } from './detalhar-grupo/detalhar-grupo.component';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



  const routes: Routes = [{
    path: 'home',
    component: HomeComponent,
  },{
    path: 'detalharGrupo',
    component: DetalharGrupoComponent,
  },{
    path: 'jogadores',
    component: JogadoresComponent,
  },{
    path: 'login',
    component: LoginComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
