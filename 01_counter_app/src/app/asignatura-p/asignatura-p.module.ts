import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturaPPageRoutingModule } from './asignatura-p-routing.module';

import { AsignaturaPPage } from './asignatura-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturaPPageRoutingModule
  ],
  declarations: [AsignaturaPPage]
})
export class AsignaturaPPageModule {}
