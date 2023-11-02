import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturaP1PageRoutingModule } from './asignatura-p1-routing.module';

import { AsignaturaP1Page } from './asignatura-p1.page';
import { QRCodeComponent } from 'angularx-qrcode';

import {QRCodeModule} from 'angularx-qrcode';

@NgModule({
  imports: [
    QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturaP1PageRoutingModule
  ],
  declarations: [AsignaturaP1Page]
})
export class AsignaturaP1PageModule {}
