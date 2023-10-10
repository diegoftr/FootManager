import { NgModule, isDevMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { DetalharGrupoComponent } from './detalhar-grupo/detalhar-grupo.component';
import { HomeComponent } from './home/home.component';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatMenuModule} from '@angular/material/menu';
import { MatSliderModule} from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ImageCropperModule } from 'ngx-image-cropper';
import { LoginComponent } from './login/login.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { PartidasComponent } from './partidas/partidas.component';
import { PeladaComponent } from './pelada/pelada.component';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { DetalharCampeonatoComponent } from './detalhar-campeonato/detalhar-campeonato.component';
import { ManterEquipeCampeonatoComponent } from './manter-equipe-campeonato/manter-equipe-campeonato.component';
import { SelecionarJogadoresComponent } from './selecionar-jogadores/selecionar-jogadores.component';
import { ManterPartidaCampeonatoComponent } from './manter-partida-campeonato/manter-partida-campeonato.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ManterResultadoCampeonatoComponent } from './manter-resultado-campeonato/manter-resultado-campeonato.component';
import { ManterFotosComponent } from './manter-fotos/manter-fotos.component';


@NgModule({
  declarations: [
    AppComponent,
    DetalharGrupoComponent,
    HomeComponent,
    JogadoresComponent,
    LoginComponent,
    PartidasComponent,
    PeladaComponent,
    CampeonatosComponent,
    DetalharCampeonatoComponent,
    ManterEquipeCampeonatoComponent,
    SelecionarJogadoresComponent,
    ManterPartidaCampeonatoComponent,
    ManterResultadoCampeonatoComponent,
    ManterFotosComponent,
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatSliderModule,
    AmplifyAuthenticatorModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatInputModule,
    AppRoutingModule,
    MatListModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ImageCropperModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: MAT_DATE_LOCALE , useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
