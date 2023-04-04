import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-sist',
  templateUrl: './software-sist.component.html',
  styleUrls: ['./software-sist.component.css']
})
export class SoftwareSistComponent implements OnInit {

  activeIndex = 0;
  slides = [
    { image: 'assets/slider/foto.png', alt: 'image not load' },
    { image: 'assets/slider/dispositivo.png', alt: 'image not load' },
    { image: 'assets/slider/interface.png', alt: 'image not load' },
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
    }, 5000);
  }

  constructor() { }

  ngOnInit() {
    this.slideShow();
  }

}
