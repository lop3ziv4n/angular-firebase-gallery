import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Upload} from '../models/upload';
import * as _ from 'lodash';

@Directive({
  selector: '[appFileDrop]'
})
export class FileDropDirective {

  @Input() uploads: Upload[] = [];
  @Output() filesHovered: EventEmitter<boolean> = new EventEmitter();
  @Output() filesDropped: EventEmitter<Upload[]> = new EventEmitter<Upload[]>();

  private element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('drop', ['$event'])
  onDrop($event) {
    const transfer = this._getTransfer($event);
    if (!transfer) {
      return;
    }
    this._preventAndStop($event);
    this._addFiles(transfer.files);
    this.filesHovered.emit(false);
    this.filesDropped.emit(this.uploads);
  }

  @HostListener('draenter', ['$event'])
  onDragEnter($event) {
    this._preventAndStop($event);
    this.filesHovered.emit(true);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    const transfer = this._getTransfer($event);
    transfer.dropEffect = 'copy';
    this._preventAndStop($event);
    this.filesHovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    this._preventAndStop($event);
    this.filesHovered.emit(false);
  }

  private _getTransfer($event) {
    return $event.dataTransfer ? $event.dataTransfer : $event.originalEvent.dataTransfer;
  }

  private _preventAndStop($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  private _addFiles(files: FileList): void {
    _.each(files, (file) => {
      if (this._fileCanBeAdded(file)) {
        this.uploads.push(new Upload(file));
      }
    });
  }

  private _fileCanBeAdded(file: File): boolean {
    return (!this._fileIsAlreadyDropped(file) && this._fileTypeIsImage(file.type));
  }

  private _fileIsAlreadyDropped(file: File): boolean {
    return _.filter(this.uploads, _.iteratee(['name', file.name])).length > 0;
  }

  private _fileTypeIsImage(fileType: string): boolean {
    return (fileType === '' ? false : fileType.startsWith('image'));
  }
}
