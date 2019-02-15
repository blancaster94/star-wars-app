import { Loading } from 'ionic-angular';
import { PresenterService } from './../../services/presenter-service';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { People } from '../../models/people';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Navbar } from 'ionic-angular/navigation/nav-interfaces';
import { LoadingOptions } from 'ionic-angular/components/loading/loading-options';

@IonicPage({
  name: 'people-list'
})
@Component({
  selector: 'page-people-list',
  templateUrl: 'people-list.html',
})
export class PeopleListPage {

  peopleList: People[];
  pageCounter: number;
  previousUrl: string;
  nextUrl: string;
  @ViewChild('navBar') navBar: Navbar;
  private baseUrl: string;
  private loader: Loading;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient,
    private presenterService: PresenterService,
  ) {
    this.peopleList = [];
    this.baseUrl = '';
  }

  ngOnInit() {
    this.navBar.setBackButtonText('');
    let data = this.navParams.data;

    if (data instanceof Array) {
      this.fetchURLList(data).subscribe(
        (res: People[]) => {
          this.peopleList = res;
        }
      );
    } else {
      this.http.get(data).subscribe(
        (res) => {
          this.previousUrl = res['previous'];
          this.nextUrl = res['next'];
          this.peopleList = res['results'];
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

  goToNext() {
    this.showLoader();
    this.http.get(this.nextUrl).subscribe(
      (res) => {
        this.previousUrl = res['previous'];
        this.nextUrl = res['next'];
        this.peopleList = res['results'];
        this.loader.dismiss();
      }
    )
  }

  goToPrevious() {
    this.showLoader();
    this.http.get(this.previousUrl).subscribe(
      (res) => {
        this.previousUrl = res['previous'];
        this.nextUrl = res['next'];
        this.peopleList = res['results'];
        this.loader.dismiss();
      }
    )
  }

  onPersonClick(person: any) {
    this.navCtrl.push('people-detail', person);
  }

  showLoader() {
    const opts: LoadingOptions = {};
    opts.enableBackdropDismiss = false;
    opts.showBackdrop = false;

    this.loader = this.presenterService.createLoader(opts);
  }

}
