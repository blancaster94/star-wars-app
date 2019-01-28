import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanetListPage } from './planet-list';

@NgModule({
  declarations: [
    PlanetListPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanetListPage),
  ],
})
export class PlanetListPageModule {}
