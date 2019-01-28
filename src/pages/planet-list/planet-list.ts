import { HttpClient } from '@angular/common/http';
import { Planet } from './../../models/planet';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

@IonicPage({
  name: 'planet-list'
})
@Component({
  selector: 'page-planet-list',
  templateUrl: 'planet-list.html',
})
export class PlanetListPage {

  private planetList: Planet[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ngOnInit() {
    let data = this.navParams.data;

    if (data instanceof Array) {
      this.fetchURLList(data).subscribe(
        (res: Planet[]) => {
          this.planetList = res;
        }
      );
    } else {
      this.http.get(data).subscribe(
        (res) => {
          this.planetList = res['results'] as Planet[];
        }
      )
    }
  }

  private fetchURLList(urls: string[]): Observable<any[]> {
    let result = [];
    urls.forEach((url) => {
      result.push(this.http.get(url));
    });

    return Observable.forkJoin(result);
  }

  goToPlanetDetailPage(planet: Planet) {
    this.navCtrl.push('planet-detail', planet);
  }

}
