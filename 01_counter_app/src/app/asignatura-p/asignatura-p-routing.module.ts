import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturaPPage } from './asignatura-p.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturaPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturaPPageRoutingModule {}
