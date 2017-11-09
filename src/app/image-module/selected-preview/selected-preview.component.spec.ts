import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPreviewComponent } from './selected-preview.component';

describe('SelectedPreviewComponent', () => {
  let component: SelectedPreviewComponent;
  let fixture: ComponentFixture<SelectedPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
