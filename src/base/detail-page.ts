import { NavParams, NavController } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

export class DetailPageBase {

  constructor(public navCtrl: NavController,public navParams: NavParams, public http: HttpClient) {}

  getDetail<T>(): T {
    let detailsObject: T;
    let data = this.navParams.data;
    if (typeof data === 'object') {
      detailsObject = data as T;
      console.log(detailsObject);
    } else {
      this.http.get(data).subscribe(
        (res) => {
          detailsObject = res as T;
        }
      )
    }

    return detailsObject;
  }

  pushPage(page: string, data) {
    this.navCtrl.push(page, data);
  }

}