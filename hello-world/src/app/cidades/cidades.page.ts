import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.page.html',
  styleUrls: ['./cidades.page.scss'],
})
export class CidadesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHomePage(){
    this.router.navigate(["/home"]);
  }
}
