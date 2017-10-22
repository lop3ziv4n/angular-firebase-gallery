import {Component, Input, OnInit} from '@angular/core';
import {Upload} from '../models/upload';
import {UploadService} from '../services/upload.service';

@Component({
  selector: 'app-upload-detail',
  templateUrl: './upload-detail.component.html',
  styleUrls: ['./upload-detail.component.css']
})
export class UploadDetailComponent implements OnInit {

  @Input() upload: Upload;

  constructor(private uploadService: UploadService) {
  }

  ngOnInit() {
  }

  deleteUpload() {
    this.uploadService.deleteUpload(this.upload);
  }

}
