import {Component} from '@angular/core';
import {NavController, LoadingController, ToastController} from 'ionic-angular';
import {Storage} from "@ionic/storage";

import {SpotifyService} from "../../providers/spotify.service";
import {TrackPage} from "../track/track";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tracks: any[] = [];
  loader: any;
  limit: string;
  playlist: any[] = [];

  constructor(public navCtrl: NavController,
              private spotify: SpotifyService,
              private loadingCtrl: LoadingController,
              private storage: Storage,
              public toastCtrl: ToastController) {
  }

  search(query) {
    this.loader = this.loadingCtrl.create();
    this.loader.present();
    this.limit = localStorage.getItem('limit');

    this.spotify.searchTracks(query, this.limit)
      .subscribe(
        (res: any) => {
          this.tracks = res.tracks.items;
          this.loader.dismiss();
          console.log(this.tracks);
        },
        (err) => {
          this.loader.dismiss();
          alert(err);
        });
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });

    toast.present();
  }

  ionViewWillEnter() {
    this.storage.get('playlist')
      .then(val => {
        if(val) {
          this.playlist = val;
        } else {
          this.storage.set('playlist', this.playlist);
        }
      });
  }

  showMore(track) {
    this.navCtrl.push(TrackPage, {
      track: track
    });
  }

  addToPlaylist(track) {
    let foundTrack: any = this.playlist.find(item => item.id === track.id);

    if (foundTrack) {
      this.presentToast(`Track '${foundTrack.name}' is present in playlist`);
    } else {
      this.playlist.push(track);
      this.storage.set('playlist', this.playlist);
      this.presentToast(`Track '${track.name}' was added successfully`);
    }
  }
}
