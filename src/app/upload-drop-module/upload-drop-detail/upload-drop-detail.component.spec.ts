import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UploadDropDetailComponent} from './upload-drop-detail.component';

describe('UploadDropDetailComponent', () => {
  let component: UploadDropDetailComponent;
  let fixture: ComponentFixture<UploadDropDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadDropDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDropDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
