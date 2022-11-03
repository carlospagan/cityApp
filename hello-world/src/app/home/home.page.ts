import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CidadesService } from '../cidades.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  cidades: object;
  regiao: string;

  constructor(
    private router: Router,
    private cidadesService: CidadesService

  ) {
    this.cidades = [];
    this.regiao = '';
  }

  goToPage() {
   this.router.navigate(['/cidades']);
  }

  ngOnInit() {
    this.regiao = history.state.cidade.name;

    console.log(history.state);

    this.cidadesService.obterCidadesByRegion(this.regiao).subscribe( data => {
      this.cidades = data;
      console.log(this.cidades);
    })
  }

}