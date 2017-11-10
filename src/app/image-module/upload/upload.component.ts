import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../models/image';
import {ImageService} from '../services/image.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @Input() selectedImages: Image[] = [];

  images: Image[] = [];
  dropZoneActive = false;
  enabledUpload = true;
  title = 'Upload Drop File Firebase';

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
  }

  detectFiles($event) {
    _.each($event.target.files, (file) => {
      this.images.push(new Image(file));
      this.enabledUpload = true;
    });
  }

  dropZoneState($event: boolean) {
    this.dropZoneActive = $event;
  }

  clear() {
    this.images = [];
    this.enabledUpload = true;
  }

  upload() {
    const files = this.images;
    if (_.isEmpty(files)) {
      return;
    }
    const filesIndex = _.range(files.length);
    _.each(filesIndex, (idx) => {
      const image = files[idx];
      if (this.imageWasAdded(image)) {
        this.imageService.pushImage(image);
      }
    });
    this.enabledUpload = false;
  }

  private imageWasAdded(image: Image): boolean {
    return _.isEmpty(image.url);
  }

  selected(image: Image) {
    if (!this.imageCanBeAdded(image)) {
      this.selectedImages.push(image);
    }
  }

  private imageCanBeAdded(image: Image): boolean {
    return _.filter(this.selectedImages, _.iteratee(['name', image.name])).length > 0;
  }

}
