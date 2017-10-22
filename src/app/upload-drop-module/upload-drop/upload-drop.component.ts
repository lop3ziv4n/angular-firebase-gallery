import {Component, OnInit} from '@angular/core';
import {UploadService} from '../services/upload.service';
import {Upload} from '../models/upload';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload-drop',
  templateUrl: './upload-drop.component.html',
  styleUrls: ['./upload-drop.component.css']
})
export class UploadDropComponent implements OnInit {

  uploads: Upload[] = [];
  dropZoneActive = false;
  enabledUpload = true;
  title = 'Upload Drop File Firebase';

  constructor(private uploadService: UploadService) {
  }

  ngOnInit() {
  }

  detectFiles($event) {
    _.each($event.target.files, (file) => {
      this.uploads.push(new Upload(file));
    });
  }

  dropZoneState($event: boolean) {
    this.dropZoneActive = $event;
  }

  clear() {
    this.uploads = [];
    this.enabledUpload = true;
  }

  upload() {
    const files = this.uploads;
    if (_.isEmpty(files)) {
      return;
    }
    const filesIndex = _.range(files.length);
    _.each(filesIndex, (idx) => {
      this.uploadService.pushUpload(files[idx]);
    });
    this.enabledUpload = false;
  }
}
