import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the SpotifyService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class SpotifyService {
  baseUrl: string;

  constructor(public http: Http) {
    this.baseUrl = 'https://api.spotify.com/v1/search?';
  }

  searchTracks(query, type, limit) {
    let params: string = [
      `q=${query}`,
      `type=${type}`,
      `limit=${limit}`
    ].join('&');

    return this.http.get(this.baseUrl + params)
      .map(res => res.json());
  }

}
