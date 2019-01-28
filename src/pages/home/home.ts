import { Category } from './../../models/category';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingOptions } from 'ionic-angular/components/loading/loading-options';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: Category[];
  loaded: boolean;

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    private loadingCtrl: LoadingController
  ) {
    this.categories = [];
    this.loaded = false;
  }

  ngOnInit() {
    // const opts: LoadingOptions = {};
    // opts.enableBackdropDismiss = false;
    // opts.content = 'Loading Categories';
    // const loader = this.loadingCtrl.create(opts);
    // loader.present().then(() => {
    //   if (this.loaded) {
    //     this.loaded = false;
    //     loader.dismiss();
    //   }
    // });
    this.http.get('https://swapi.co/api/').subscribe((res) => {
      Object.keys(res).forEach((key) => {
        this.categories.push(new Category(key, res[key]));
        // this.loaded = true;
      });
    });
  }

  onCategoryClick(category: Category) {
    const categoryName = category.name.toLowerCase();
    if (categoryName === 'people') {
      this.navCtrl.push('people-list', category.url);
    }
    // this.http.get(category.url).subscribe(
    //   (res) => {
    //     this.navCtrl.push(
    //       'category-page',
    //       res
    //     )
    //   }
    // )
  }
}
