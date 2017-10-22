import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {GalleryComponent} from './gallery/gallery.component';
import {ImageComponent} from './image/image.component';

import {GalleryImageService} from './services/gallery-image.service';

const routes: Routes = [
  {path: 'image/:id', component: ImageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    GalleryComponent,
    ImageComponent
  ],
  providers: [
    GalleryImageService
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule {
}
