import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { People } from '../../models/people';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

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
  private baseUrl: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.peopleList = [];
    this.baseUrl = '';
  }

  ngOnInit() {
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
    this.http.get(this.nextUrl).subscribe(
      (res) => {
        this.previousUrl = res['previous'];
        this.nextUrl = res['next'];
        this.peopleList = res['results'];
      }
    )
  }

  goToPrevious() {
    this.http.get(this.previousUrl).subscribe(
      (res) => {
        this.previousUrl = res['previous'];
        this.nextUrl = res['next'];
        this.peopleList = res['results'];
      }
    )
  }

  onPersonClick(person: any) {
    this.navCtrl.push('people-detail', person);
  }

}
