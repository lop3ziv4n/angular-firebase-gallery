import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarouselComponent,
    SlideComponent
  ],
  exports: [
    CarouselComponent,
    SlideComponent
  ]
})
export class CarouselModule { }
