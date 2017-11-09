import {Injectable} from '@angular/core';
import {Image} from '../models/image';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ImageService {

  basePath = '/gallery-image';
  images: Observable<Image[]>;

  constructor(private db: AngularFireDatabase) {
  }

  getImage(key: string) {
    return firebase.database().ref(`${this.basePath}/${key}`).once('value')
      .then((snap) => snap.val());
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

  pushImage(image: Image) {
    const storageRef = firebase.storage().ref();
    const imageTask = storageRef.child(`${this.basePath}/${image.file.name}`).put(image.file);
    imageTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        image.progress = (snap.bytesTransferred / snap.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
      },
      () => {
        image.url = imageTask.snapshot.downloadURL;
        image.name = image.file.name;
        this.saveFileData(image);
        return undefined;
      }
    );
  }

  private saveFileData(image: Image) {
    this.db.list(`${this.basePath}/`).push(image);
  }
}
