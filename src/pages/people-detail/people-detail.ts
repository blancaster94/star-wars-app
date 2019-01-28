import { People } from './../../models/people';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'people-detail'
})
@Component({
  selector: 'page-people-detail',
  templateUrl: 'people-detail.html',
})
export class PeopleDetailPage {

  person: People;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit() {
    let data = this.navParams.data;
    if (typeof data === 'object') {
      this.person = this.navParams.data;
    } else {
      //fetch because its a URL

    }
  }

  goToHomeWorldPage(homeworldUrl: string) {
    this.navCtrl.push('planet-detail', homeworldUrl);
  }

  goToFilmsPage() {

  }

  goToSpeciesPage(){}

  goToVehiclesPage() {}

  goToStarshipsPage() {}

}
