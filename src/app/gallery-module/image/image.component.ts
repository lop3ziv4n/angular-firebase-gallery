import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GalleryImageService} from '../services/gallery-image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  imageUrl = '';
  imageName = '';

  constructor(private galleryImageService: GalleryImageService, private route: ActivatedRoute) {
  }

  getImageUrl(key: string) {
    this.galleryImageService.getImage(key)
      .then(image => {
        this.imageUrl = image.url;
        this.imageName = image.name;
      });
  }

  ngOnInit() {
    this.getImageUrl(this.route.snapshot.params['id']);
  }

}
