import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ImageService} from '../services/image.service';
import {Image} from '../models/image';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  @Input() selectedImages: Image[] = [];

  title = 'Gallery File Firebase';
  imageGallery: Observable<Image[]>;

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.imageGallery = this.imageService.getImages();
  }

  ngOnChanges() {
    this.imageGallery = this.imageService.getImages();
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
