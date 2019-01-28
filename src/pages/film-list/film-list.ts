import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Film } from '../../models/film';

@IonicPage({
  name: 'film-list'
})
@Component({
  selector: 'page-film-list',
  templateUrl: 'film-list.html',
})
export class FilmListPage {

  private filmList: Film[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ngOnInit() {
    let data = this.navParams.data;

    if (data instanceof Array) {

    } else {
      this.http.get(data).subscribe(
        (res) => {
          this.filmList = res['results'] as Film[];
        }
      )
    }
  }

  goToFilmDetailPage(film: Film) {
    this.navCtrl.push('film-detail', film);
  }
}
