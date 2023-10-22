import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService, Grupo, Jogadores } from '../API.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Escudo, Time } from 'src/entidades/entidades';
import { LoadedImage } from 'ngx-image-cropper';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

import { v4 as uuid } from 'uuid';


import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.css']
})
export class JogadoresComponent implements OnInit {

  grupo!: Grupo;
  jogadores: Array<Jogadores> = [];
  isInclusao!: Boolean;
  isAlteracao!: Boolean;
  form: FormGroup = new FormGroup({});
  times: Array<Time> = [{ nome: 'Brasil' }, { nome: 'América de Natal' }, { nome: 'Atlético Goianiense' }, { nome: 'Atlético Mineiro' }, { nome: 'Atlético Paranaense' }, { nome: 'Avaí' }, { nome: 'Bahia' }, { nome: 'Botafogo' }, { nome: 'Bragantino' }, { nome: 'Ceará' }, { nome: 'Chapecoense' }, { nome: 'Corinthians' }, { nome: 'Coritiba' }, { nome: 'Criciúma' }, { nome: 'Cruzeiro' }, { nome: 'Flamengo' }, { nome: 'Fluminense' }, { nome: 'Fortaleza' }, { nome: 'Figueirense' }, { nome: 'Goiás' }, { nome: 'Grêmio' }, { nome: 'Internacional' }, { nome: 'Internacional de Limeira' }, { nome: 'Joinville' }, { nome: 'Juventude' }, { nome: 'Londrina' }, { nome: 'Luverdense' }, { nome: 'Náutico' }, { nome: 'Palmeiras' }, { nome: 'Paraná' }, { nome: 'Paysandu' }, { nome: 'Ponte Preta' }, { nome: 'Portuguesa' }, { nome: 'Remo' }, { nome: 'Rio Ave' }, { nome: 'Santa Clara' }, { nome: 'Santa Cruz' }, { nome: 'Santo André' }, { nome: 'Santos' }, { nome: 'São Bento' }, { nome: 'São Caetano' }, { nome: 'São Paulo' }, { nome: 'Sampaio Corrêa' }, { nome: 'Santa Clara' }, { nome: 'Sport Recife' }, { nome: 'Vasco da Gama' }, { nome: 'Vila Nova' }, { nome: 'Vitória' }];
  // escudos: Array<Escudo> = [{ nome: 'Bronze' }, { nome: 'Prata' }, { nome: 'Ouro' }, { nome: 'Pichação' }, { nome: 'Vermelha' }, { nome: '100' }, { nome: 'Azul' }, { nome: 'DiamanteAzul' }, { nome: 'DiamanteRoxa' }, { nome: 'DiamenteBranca' }, { nome: 'Heroi' }, { nome: 'Heroi2' }, { nome: 'Icone' }, { nome: 'Aniversariante' }];
  escudos: Array<Escudo> = [{ nome: 'Bronze' }, { nome: 'Prata' }, { nome: 'Ouro' }];
  posicoes: Array<Escudo> = [{ nome: 'GOL' }, { nome: 'ZAG' }, { nome: 'LD' }, { nome: 'LE' }, { nome: 'VOL' }, { nome: 'MC' }, { nome: 'MD' }, { nome: 'ME' }, { nome: 'MEI' }, { nome: 'PE' }, { nome: 'PD' }, { nome: 'SA' }, { nome: 'ATA' }];

  imageChangedEvent: any = '';
  croppedImage: any = null;


  constructor(private authenticator: AuthenticatorService, private router: Router, private activateRouter: ActivatedRoute, private api: APIService, private spinner: NgxSpinnerService) {

  }

  isLogado() {
    return this.authenticator.user != null;
  }


  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null),
      telefone: new FormControl(null),
      foto: new FormControl(null),
      time: new FormControl(null, Validators.required),
      aniversario: new FormControl(null, Validators.required),
      escudo: new FormControl(null, Validators.required),
      posicao: new FormControl(null, Validators.required),
      jogadoresGrupoId: new FormControl(null),
    });

    this.spinner.show();
    this.activateRouter.queryParams.subscribe(param => {
      var idGrupo = param["idGrupo"];
      var filter = {
        jogadoresGrupoId: {
          eq: idGrupo
        }
      };
      this.api.GetGrupo(idGrupo).then(g => {
        this.api.ListJogadores(filter).then(jogadores => {
          this.jogadores = (jogadores as any).items;

          if (jogadores.items.length == 0)
            this.spinner.hide();
          this.jogadores.forEach((j, idx, array) => {
            j.foto = "https://stlbuckt213907-dev.s3.us-east-1.amazonaws.com/public/" + j.foto;
            if (idx === array.length - 1) {
              this.spinner.hide();
            }
          });
          this.jogadores.sort((a, b) => {
            if (a.nome != null && b.nome != null) {
              if (a.nome > b.nome) {
                return 1;
              } else if (a.nome < b.nome) {
                return -1;
              } else {
                return 0;
              }
            }
            return 0;
          });
          this.grupo = g;
        });

      });

    });
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


  salvarJogador() {
    this.spinner.show();
    if (this.form.valid && this.croppedImage != null) {
      try {
        var telefone = this.form.get('telefone')?.value;
        this.form.get('telefone')?.setValue('+55' + telefone);
        var dateAniversario = this.form.get('aniversario')?.value;
  
        const ano = dateAniversario.getFullYear().toString().padStart(4, '0');
        const mes = (dateAniversario.getMonth() + 1).toString().padStart(2, '0');
        const dia = dateAniversario.getDate().toString().padStart(2, '0');
        const dataFormatada = `${ano}-${mes}-${dia}`;
  
        this.form.get('aniversario')?.setValue(dataFormatada);
        this.form.get('jogadoresGrupoId')?.setValue(this.grupo.id);
        this.form.get('id')?.setValue(uuid());
        this.croppedImage = this.reduzirTamanhoBase64(this.croppedImage, 144, 156).then((imagemRedimensionadaBase64) => {
  
          fetch(imagemRedimensionadaBase64 as any)
            .then(res => res.blob())
            .then(blob => {
              const file = new File([blob], "File name", { type: "image/png" })
              Storage.put(this.form.get('nome')?.value + Math.floor(Math.random() * 100000) + 1 + '.png', file).then((a: { key: any; }) => {
                this.form.get('foto')?.setValue(a.key)
                this.api.CreateJogadores(this.form.value).then(a => {
                  this.isInclusao = false;
                  this.isAlteracao = false;
                  this.limparForm();
                  this.ngOnInit();
                  this.spinner.hide();
                });
              })
            })
        });
      } catch (e) {
        this.spinner.hide();
      }
    } else {
      this.spinner.hide();
    }
  }

  limparForm() {
    this.form = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      telefone: new FormControl(null, Validators.required),
      foto: new FormControl(null),
      time: new FormControl(null, Validators.required),
      aniversario: new FormControl(null, Validators.required),
      escudo: new FormControl(null, Validators.required),
      posicao: new FormControl(null, Validators.required),
      jogadoresGrupoId: new FormControl(null),
    });
  }


  incluirNovoJogador() {
    this.isInclusao = true;
  }

  calcularIdade(aniversario?: string) {
    if (aniversario) {
      const partesDataNascimento = aniversario.split('-');
      const anoNascimento = parseInt(partesDataNascimento[0]);
      const mesNascimento = parseInt(partesDataNascimento[1]);
      const diaNascimento = parseInt(partesDataNascimento[2]);

      const dataAtual = new Date();

      const anoAtual = dataAtual.getFullYear();
      const mesAtual = dataAtual.getMonth() + 1;
      const diaAtual = dataAtual.getDate();

      let idade = anoAtual - anoNascimento;

      if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
      }

      return idade;
    }
    return 0;
  }

  formatarDataAniversario(data?: string) {
    if (data) {
      const partesData = data.split('-');
      const mes = partesData[1];
      const dia = partesData[2];
      const dataFormatada = `${dia}/${mes}`;
      return dataFormatada;
    }
    return '';
  }

  acaoVoltar() {
    if (this.isInclusao || this.isAlteracao) {
      this.isInclusao = false;
      this.isAlteracao = false;
      this.limparForm();
      this.ngOnInit();

    } else {
      this.router.navigate(['/detalharGrupo'], { queryParams: { idGrupo: this.grupo.id } });

    }
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

  isSelfie() {
    var fotoSelfie = (<HTMLInputElement>document.getElementById('fotoSelfie'));

    if (fotoSelfie && fotoSelfie.value != '') {
      return true
    }
    return false
  }

  imageCropped(event: any) {
    // this.croppedImage = event.blob.toString();

    const reader = new FileReader();
    reader.readAsDataURL(event.blob);
    return new Promise(resolve => {
      reader.onloadend = () => {
        this.croppedImage = reader.result;
      };
    });

  }
  imageLoaded(image: LoadedImage) {
  }
  cropperReady() {
  }
  loadImageFailed() {
  }

}
