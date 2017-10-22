import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {UploadComponent} from './upload/upload.component';
import {UploadListComponent} from './upload-list/upload-list.component';
import {UploadDetailComponent} from './upload-detail/upload-detail.component';

import {UploadService} from './services/upload.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    UploadComponent,
    UploadListComponent,
    UploadDetailComponent
  ],
  providers: [
    UploadService
  ],
  exports: [
    UploadListComponent
  ]
})
export class UploadModule {
}
