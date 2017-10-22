import {Component, OnInit} from '@angular/core';
import {Upload} from '../models/upload';
import {Observable} from 'rxjs/Observable';
import {UploadService} from '../services/upload.service';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.css']
})
export class UploadListComponent implements OnInit {

  title = 'List File Firebase';
  uploads: Observable<Upload[]>;

  constructor(private uploadService: UploadService) {
  }

  ngOnInit() {
    this.uploads = this.uploadService.getUploads();
  }

}
