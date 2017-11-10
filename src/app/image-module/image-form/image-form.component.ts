import {Component, OnInit} from '@angular/core';
import {Image} from '../models/image';
import {ImageService} from '../services/image.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {

  selectedImages: Image[] = [];
  nextPhotoInterval = 5000;
  noLoopSlides = true;
  urls: string[] = [
    '-KwwH4eWSwQ6gLHOzWdm',
    '-KwwTRbUPfOnTlbt3Hgl'
  ];

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.initImages();
  }

  isImageActive(): boolean {
    return true;
  }

  private initImages() {
    _.each(this.urls, (url) => {
      this.getImageUrl(url);
    });
  }

  private getImageUrl(url: string) {
    this.imageService.getImage(url)
      .then(image => {
        this.selectedImages.push(image);
      });
  }
}
