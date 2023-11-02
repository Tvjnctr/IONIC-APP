import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturaP1Page } from './asignatura-p1.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturaP1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturaP1PageRoutingModule {}
