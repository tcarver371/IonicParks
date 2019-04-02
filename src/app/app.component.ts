import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import{ ParkData} from '../app/providers/park-data'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [ParkData]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
    //This Creates an error which i'm not sure why. Messes up the page completely.
    // The public parkData: ParkData is what creates it. 
    //public parkData: ParkData
  ) {
    this.initializeApp();
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    //parkData.load();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
