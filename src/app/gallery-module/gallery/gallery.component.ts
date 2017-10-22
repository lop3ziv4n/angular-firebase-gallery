import {Component, OnChanges, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {GalleryImageService} from '../services/gallery-image.service';
import {GalleryImage} from '../models/gallery-image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  images: Observable<GalleryImage[]>;
  title = 'Gallery File Firebase';

  constructor(private galleryImageService: GalleryImageService) {
  }

  ngOnInit() {
    this.images = this.galleryImageService.getImages();
  }

  ngOnChanges() {
    this.images = this.galleryImageService.getImages();
  }
}
