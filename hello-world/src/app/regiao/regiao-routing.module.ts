import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegiaoPage } from './regiao.page';

const routes: Routes = [
  {
    path: '',
    component: RegiaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegiaoPageRoutingModule {}
