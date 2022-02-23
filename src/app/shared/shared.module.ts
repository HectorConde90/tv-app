import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [HttpClientModule, RouterModule, SwiperModule],
})
export class SharedModule {}
