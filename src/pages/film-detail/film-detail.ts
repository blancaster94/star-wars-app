import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Film } from '../../models/film';

@IonicPage({
  name: 'film-detail'
})
@Component({
  selector: 'page-film-detail',
  templateUrl: 'film-detail.html',
})
export class FilmDetailPage {

  private film: Film;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ngOnInit() {
    let data = this.navParams.data;
    if (typeof data === 'object') {
      this.film = data;
    } else {
      this.http.get(data).subscribe(
        (res: Film) => {
          this.film = res;
        }
      )
    }
  }

  goToPeopleListPage(){
    this.navCtrl.push('people-list', this.film.characters);
  }
  goToPlanetListPage(){
    this.navCtrl.push('planet-list', this.film.planets);
  }
  goToStarshipListPage(){

  }
  goToVehicleListPage(){

  }
  goToSpeciesListListPage(){

  }
}
