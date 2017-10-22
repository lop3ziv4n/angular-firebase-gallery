import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {environment} from '../environments/environment';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {UploadModule} from './upload-module/upload.module';
import {UiModule} from './ui-module/ui.module';
import {GalleryModule} from './gallery-module/gallery.module';
import {UploadDropModule} from './upload-drop-module/upload-drop.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    UiModule,
    UploadModule,
    GalleryModule,
    UploadDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
