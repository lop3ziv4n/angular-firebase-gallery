import {Component, OnInit} from '@angular/core';
import {Upload} from '../models/upload';
import {Observable} from 'rxjs/Observable';
import {UploadService} from '../services/upload.service';

@Component({
  selector: 'app-upload-drop-list',
  templateUrl: './upload-drop-list.component.html',
  styleUrls: ['./upload-drop-list.component.css']
})
export class UploadDropListComponent implements OnInit {

  title = 'List File Firebase';
  uploads: Observable<Upload[]>;

  constructor(private uploadService: UploadService) {
  }

  ngOnInit() {
    this.uploads = this.uploadService.getUploads();
  }

}
