import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmListPage } from './film-list';

@NgModule({
  declarations: [
    FilmListPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmListPage),
  ],
})
export class FilmListPageModule {}
