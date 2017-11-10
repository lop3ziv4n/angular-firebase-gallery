import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CarouselModule} from '../carousel-module/carousel.module';

import {UploadComponent} from './upload/upload.component';
import {GalleryComponent} from './gallery/gallery.component';
import {SelectedImageComponent} from './selected-image/selected-image.component';
import {ImageFormComponent} from './image-form/image-form.component';

import {FileDropDirective} from './directive/file-drop.directive';

import {ImageService} from './services/image.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  declarations: [
    UploadComponent,
    GalleryComponent,
    FileDropDirective,
    SelectedImageComponent,
    ImageFormComponent
  ],
  providers: [
    ImageService
  ],
  exports: [
    ImageFormComponent
  ]
})
export class ImageModule {
}
