import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {HomePage} from '../pages/home/home';
import {SettingsPage} from '../pages/settings/settings';
import {TabsPage} from '../pages/tabs/tabs';
import {TrackPage} from "../pages/track/track";
import {AlbumPage} from "../pages/album/album";
import {PlaylistPage} from "../pages/playlist/playlist";

import {SpotifyService} from "../providers/spotify.service";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    SettingsPage,
    TrackPage,
    AlbumPage,
    PlaylistPage,
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
    AlbumPage,
    PlaylistPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: SpotifyService, useClass: SpotifyService},
    Storage
  ]
})
export class AppModule {
}
