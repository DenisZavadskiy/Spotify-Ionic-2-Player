import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-track',
  templateUrl: 'track.html'
})
export class TrackPage {
  track: any;
  artists: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.track = navParams.data.track;
    console.log(this.track);
  }

  ionViewDidLoad() {
    this.artists = this.track.artists.map(el => el.name).join(' & ');
  }

}
