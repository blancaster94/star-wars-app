import { LoadingController } from "ionic-angular/components/loading/loading-controller";
import { LoadingOptions } from "ionic-angular/components/loading/loading-options";
import { Loading } from "ionic-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class PresenterService {

    constructor(private loadCtrl: LoadingController) {}

    createLoader(opts: LoadingOptions): Loading {
        const loader = this.loadCtrl.create(opts);
        loader.present();
        return loader;
    }
}