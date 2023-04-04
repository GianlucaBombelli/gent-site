import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  activeIndex = 0;
  slides = [
    { image: 'assets/flyers1.png', alt: 'Flyers 1' },
  ];

  prevSlide() {
    if (this.activeIndex === 0) {
      this.activeIndex = this.slides.length - 1;
    } else {
      this.activeIndex--;
    }
  }

  nextSlide() {
    if (this.activeIndex === this.slides.length - 1) {
      this.activeIndex = 0;
    } else {
      this.activeIndex++;
    }
  }

  slideShow() {
    setInterval(() => {
      this.nextSlide();
    }, 7500);
  }

  constructor() { }

  ngOnInit() {
    this.slideShow();
  }

}
