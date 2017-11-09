import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {UploadComponent} from './upload/upload.component';
import {GalleryComponent} from './gallery/gallery.component';
import {SelectedPreviewComponent} from './selected-preview/selected-preview.component';
import {SelectedImageComponent} from './selected-image/selected-image.component';
import {ImageFormComponent} from './image-form/image-form.component';

import {FileDropDirective} from './directive/file-drop.directive';

import {ImageService} from './services/image.service';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    UploadComponent,
    GalleryComponent,
    SelectedPreviewComponent,
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
