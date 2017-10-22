import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {UploadListComponent} from './upload-module/upload-list/upload-list.component';
import {GalleryComponent} from './gallery-module/gallery/gallery.component';
import {UploadDropListComponent} from './upload-drop-module/upload-drop-list/upload-drop-list.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'uploads', component: UploadListComponent},
  {path: 'uploads-drop', component: UploadDropListComponent},
  {path: 'gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
