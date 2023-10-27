import { Fotos } from '../API.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService} from '../API.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

import { v4 as uuid } from 'uuid';

import { Storage } from 'aws-amplify';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-manter-fotos',
  templateUrl: './manter-fotos.component.html',
  styleUrls: ['./manter-fotos.component.css']
})
export class ManterFotosComponent implements OnInit {

  fotos: Array<Fotos> = [];
  imageChangedEvent: any = '';
  id: string = '';
  form: FormGroup = new FormGroup({});
  


  constructor(private authenticator: AuthenticatorService, private router: Router, private activateRouter: ActivatedRoute, private api: APIService, private spinner: NgxSpinnerService) {

  }

  ngOnInit() {

    
    this.activateRouter.queryParams.subscribe(param => {
      var id = param["id"];

      this.id = id;

      this.form = new FormGroup({
        id: new FormControl(null),
        foto: new FormControl(null),
        idGrupoFoto: new FormControl(id),
      });

      var filter = {
        idGrupoFoto: {
          eq: id
        }
      };
      this.api.ListFotos(filter).then(f=> {
        this.fotos = f.items as any;
      })
    });
  }

  salvarFoto() {
    var fotoSelfie = (<HTMLInputElement>document.getElementById('fotoSelfie'));

    if(fotoSelfie.value != "") {
      this.spinner.show();
      this.form.get('id')?.setValue(uuid());

  
      fetch(fotoSelfie.value as any)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], "File name", { type: "image/png" })
          Storage.put(this.id + Math.floor(Math.random() * 100000) + 1 + '.png', file).then((a: { key: any; }) => {
            this.form.get('foto')?.setValue(a.key)

            this.api.CreateFotos(this.form.value).then(a => {
              this.ngOnInit();
              this.spinner.hide();
            });
          })
        })
      
    }


  }

  isSelfie() {
    var fotoSelfie = (<HTMLInputElement>document.getElementById('fotoSelfie'));

    if (fotoSelfie && fotoSelfie.value != '') {
      return true
    }
    return false
  }

  reduzirTamanhoBase64(base64: any, largura: any, altura: any) {
    return new Promise((resolve, reject) => {
      // Crie uma nova imagem em base64
      const imagem = new Image();
      imagem.src = base64;

      // Quando a imagem estiver carregada, redimensione-a
      imagem.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Defina as dimensões do canvas para redimensionar a imagem
        canvas.width = largura;
        canvas.height = altura;

        ctx!.drawImage(imagem, 0, 0, largura, altura);

        // Converta o canvas de volta para base64
        const imagemRedimensionadaBase64 = canvas.toDataURL('image/png'); // Você pode ajustar o formato aqui

        // Resolva a promessa com a imagem redimensionada em base64
        resolve(imagemRedimensionadaBase64);
      };

      // Lide com erros de carregamento da imagem, se necessário
      imagem.onerror = function () {
        reject(new Error('Erro ao carregar a imagem base64.'));
      };
    });
  }

  capturarFotoSelfie($event: any): void {

    this.imageChangedEvent = $event;

    this.spinner.show();
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();

    var fotoSelfie = (<HTMLInputElement>document.getElementById('fotoSelfie'));

    myReader.onloadend = (e) => {
      if (e != null && e.target != null && e.target.result != null) {

        fotoSelfie.value = e.target.result.toString()
        this.spinner.hide();

      }

    }
    if (file)
      myReader.readAsDataURL(file);
  }

  isLogado() {
    return this.authenticator.user != null && this.authenticator.user.username != 'visitante';
  }

  acaoVoltar() {
    this.router.navigate(['/detalharCampeonato'], { queryParams: { idCampeonato: this.id } });
  }

}
