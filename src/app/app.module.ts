import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {HomePage} from '../pages/home/home';
import {SettingsPage} from '../pages/settings/settings';
import {TabsPage} from '../pages/tabs/tabs';
import {TrackPage} from "../pages/track/track";

import {SpotifyService} from "../providers/spotify.service";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    SettingsPage,
    TrackPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    SettingsPage,
    TrackPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: SpotifyService, useClass: SpotifyService}
  ]
})
export class AppModule {
}
