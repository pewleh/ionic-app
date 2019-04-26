import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Sign Out',
      url: '/login',
      icon: 'arrow-round-back'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },{
      title: 'Photos',
      url: '/home',
      icon: 'arrow-round-up'
    },{
      title: 'Available Missions',
      url: '/home',
      icon: 'arrow-round-up'
    },{
      title: 'My Missions',
      url: '/home',
      icon: 'arrow-round-up'
    },{
      title: 'Chat',
      url: '/home',
      icon: 'arrow-round-up'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
