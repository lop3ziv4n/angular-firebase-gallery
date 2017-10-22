import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {UploadService} from './services/upload.service';

import {UploadDropComponent} from './upload-drop/upload-drop.component';
import {UploadDropListComponent} from './upload-drop-list/upload-drop-list.component';
import {UploadDropDetailComponent} from './upload-drop-detail/upload-drop-detail.component';
import {FileDropDirective} from './directive/file-drop.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    UploadDropComponent,
    UploadDropListComponent,
    UploadDropDetailComponent,
    FileDropDirective
  ],
  providers: [
    UploadService
  ],
  exports: [
    UploadDropListComponent
  ]
})
export class UploadDropModule {
}
