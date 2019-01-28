import { Vehicle } from './../../models/vehicle';
import { DetailPageBase } from './../../base/detail-page';
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
export class PlanetDetailPage extends DetailPageBase {

  private planet: Planet;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    super(navCtrl, navParams, http);
  }

  ngOnInit() {
    this.planet = this.getDetail<Planet>();
  }

  goToPeopleListPage() {
    // this.navCtrl.push('people-list', this.planet.residents);
    this.pushPage('people-list', this.planet.residents)
  }

}
