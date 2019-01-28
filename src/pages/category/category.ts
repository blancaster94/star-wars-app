import { Vehicle } from './../../models/vehicle';
import { Species } from './../../models/species';
import { Planet } from './../../models/planet';
import { Film } from './../../models/film';
import { People } from './../../models/people';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Category } from '../../models/category';
import { Starship } from '../../models/starship';

@IonicPage({
  name: 'category-page'
})
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  category: Category;
  people: People[];
  films: Film[];
  planets: Planet[];
  species: Species[];
  starships: Starship[];
  vehicles: Vehicle[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.category = this.navParams.data;
    this.category.results.forEach(
      (result) => {
      }
    )
  }

}
