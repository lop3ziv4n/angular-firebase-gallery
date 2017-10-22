import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {GalleryImage} from '../models/gallery-image';
import * as firebase from 'firebase';

@Injectable()
export class GalleryImageService {

  basePath = '/gallery-image';
  images: Observable<GalleryImage[]>;

  constructor(private db: AngularFireDatabase) {
  }

  getImages() {
    this.images = this.db.list(this.basePath).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.val();
        const $key = a.payload.key;
        return {$key, ...data};
      });
    });
    return this.images;
  }

  getImage(key: string) {
    return firebase.database().ref(`${this.basePath}/${key}`).once('value')
      .then((snap) => snap.val());
  }

}
