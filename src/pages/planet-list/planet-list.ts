import { Planet } from './../../models/planet';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'planet-list'
})
@Component({
  selector: 'page-planet-list',
  templateUrl: 'planet-list.html',
})
export class PlanetListPage {

  private planetList: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {

  }

}
