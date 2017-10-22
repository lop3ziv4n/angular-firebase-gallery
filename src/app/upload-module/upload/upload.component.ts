import {Component, OnInit} from '@angular/core';
import {UploadService} from '../services/upload.service';
import {Upload} from '../models/upload';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFiles: FileList;
  currentUpload: Upload;
  title = 'Upload File Firebase';

  constructor(private uploadService: UploadService) {
  }

  ngOnInit() {
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    const file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.uploadService.pushUpload(this.currentUpload);
  }

  uploadMulti() {
    const files = this.selectedFiles;
    if (_.isEmpty(files)) {
      return;
    }
    const filesIndex = _.range(files.length);
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.uploadService.pushUpload(this.currentUpload);
    });
  }
}
