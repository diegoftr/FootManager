import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalharGrupoComponent } from './detalhar-grupo/detalhar-grupo.component';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PartidasComponent } from './partidas/partidas.component';
import { PeladaComponent } from './pelada/pelada.component';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { DetalharCampeonatoComponent } from './detalhar-campeonato/detalhar-campeonato.component';
import { ManterEquipeCampeonatoComponent } from './manter-equipe-campeonato/manter-equipe-campeonato.component';
import { SelecionarJogadoresComponent } from './selecionar-jogadores/selecionar-jogadores.component';
import { ManterPartidaCampeonatoComponent } from './manter-partida-campeonato/manter-partida-campeonato.component';
import { ManterResultadoCampeonatoComponent } from './manter-resultado-campeonato/manter-resultado-campeonato.component';
import { ManterFotosComponent } from './manter-fotos/manter-fotos.component';



const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
}, {
  path: 'detalharGrupo',
  component: DetalharGrupoComponent,
}, {
  path: 'jogadores',
  component: JogadoresComponent,
}, {
  path: 'login',
  component: LoginComponent,
}, {
  path: 'partidas',
  component: PartidasComponent,
}, {
  path: 'peladas',
  component: PeladaComponent,
}, {
  path: 'campeonatos',
  component: CampeonatosComponent,
}, {
  path: 'detalharCampeonato',
  component: DetalharCampeonatoComponent,
}, {
  path: 'manterEquipeCampeonato',
  component: ManterEquipeCampeonatoComponent,
}, {
  path: 'selecionarJogador',
  component: SelecionarJogadoresComponent
}, {
  path: 'manterPartida',
  component: ManterPartidaCampeonatoComponent
}, {
  path: 'manterResultadoCampeonato',
  component: ManterResultadoCampeonatoComponent
}, {
  path: 'manterFotos',
  component: ManterFotosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
