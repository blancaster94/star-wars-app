import { Planet } from './../../models/planet';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage({
  name: 'planet-detail'
})
@Component({
  selector: 'page-planet-detail',
  templateUrl: 'planet-detail.html',
})
export class PlanetDetailPage {

  private planet: Planet;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ngOnInit() {
    let data = this.navParams.data;
    if (typeof data === 'object') {
      this.planet = data;
    } else {
      // fetch by url
      console.log(data);

      this.http.get(data).subscribe(
        (res) => {
          console.log(res);
          this.planet = res as Planet;
        }
      )
    }
  }

  goToPeopleListPage() {
    let x = 1;
    console.log(this.planet.residents);
    this.navCtrl.push('people-list', this.planet.residents);
  }

}
