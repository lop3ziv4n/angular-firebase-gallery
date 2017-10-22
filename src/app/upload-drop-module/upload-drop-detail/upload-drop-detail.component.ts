import {Component, Input, OnInit} from '@angular/core';
import {Upload} from '../models/upload';
import {UploadService} from '../services/upload.service';

@Component({
  selector: 'app-upload-drop-detail',
  templateUrl: './upload-drop-detail.component.html',
  styleUrls: ['./upload-drop-detail.component.css']
})
export class UploadDropDetailComponent implements OnInit {

  @Input() upload: Upload;

  constructor(private uploadService: UploadService) {
  }

  ngOnInit() {
  }

  deleteUpload() {
    this.uploadService.deleteUpload(this.upload);
  }

}
