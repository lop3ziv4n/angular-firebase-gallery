import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../models/image';
import * as _ from 'lodash';

@Component({
  selector: 'app-selected-image',
  templateUrl: './selected-image.component.html',
  styleUrls: ['./selected-image.component.css']
})
export class SelectedImageComponent implements OnInit {

  @Input() selectedImages: Image[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  remove(image: Image) {
    _.remove(this.selectedImages, image);
  }

  isSelectedImages() {
    return !_.isEmpty(this.selectedImages);
  }
}
