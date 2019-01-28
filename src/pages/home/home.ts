import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Category } from './../../models/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: Category[];

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
  ) {
    this.categories = [];
  }

  ngOnInit() {
    this.http.get('https://swapi.co/api/').subscribe((res) => {
      Object.keys(res).forEach((key) => {
        this.categories.push(new Category(key, res[key]));
      });
    });
  }

  onCategoryClick(category: Category) {
    const categoryName = category.name.toLowerCase();
    if (categoryName === 'people') {
      this.navCtrl.push('people-list', category.url);
    }
    if (categoryName === 'planets') {
      this.navCtrl.push('planet-list', category.url);
    }
    if (categoryName === 'films') {
      this.navCtrl.push('film-list', category.url);
    }
  }
}
