import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CidadesService } from '../cidades.service';

@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.page.html',
  styleUrls: ['./regiao.page.scss'],
})
export class RegiaoPage implements OnInit {

  private regioes: Regioes[] = [
    {
      name:"Norte",
      imgUrl:"https://a.cdn-hotels.com/gdcs/production61/d51/e1bd12cf-a49e-4d1c-94fe-655fd07fb721.jpg"
    },
    {
      name:"Nordeste",
      imgUrl:"https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/geografia-clima-da-regiao-nordeste.jpg"
    },
    {
      name:"Centro-Oeste",
      imgUrl:"https://www.rioquente.com.br/images/news/0251/pontos_turisticos_da_regiao_centro-oeste_meio.jpg"
    },
    {
      name: "Sul",
      imgUrl: '../assets/regiaosul.jpg'
    },
    {
      name: "Sudeste",
      imgUrl: '../assets/regiaosudeste.jpeg'
    }

  ];

  constructor(
    private router: Router,
    private cidadesService: CidadesService
  ) {
  
  }
  
  goToPage(Cidade) {
    console.log(Cidade);
    this.router.navigate(['/home'], { state: { cidade: Cidade } });
  }

  ngOnInit() {

  }

  protected getRegioes(): Regioes[] {
    return this.regioes;
  }

}

interface Regioes {
  name: string;
  imgUrl: string;
}