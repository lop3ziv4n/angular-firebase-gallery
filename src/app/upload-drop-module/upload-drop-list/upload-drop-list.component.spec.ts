import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UploadDropListComponent} from './upload-drop-list.component';

describe('UploadDropListComponent', () => {
  let component: UploadDropListComponent;
  let fixture: ComponentFixture<UploadDropListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadDropListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
