import { Component, OnInit } from '@angular/core';
import { BannerSlide } from 'src/app/interfaces/banner';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  bannerSlides: BannerSlide[] = [];
  activeDot: number = 0; // Assuming this is needed for active dot tracking
  currentSlide: BannerSlide | undefined; // Variable to hold the current slide

  constructor(private bannerService: BannerService) {}

  ngOnInit(): void {
    this.fetchBannerData();
  }

  private fetchBannerData(): void {
    this.bannerService.getBannerData().subscribe({
      next: (data) => {
        this.bannerSlides = data.slides;
        this.updateSlide(this.activeDot);
        console.log(data);
      },
      error: (error) => {
        console.error('Error fetching banner data:', error);
      },
    });
  }

  setActiveDot(dotNumber: number): void {
    this.activeDot = dotNumber;
    this.updateSlide(dotNumber);
  }

  updateSlide(dotNumber: number): void {
    const slide = this.bannerSlides[dotNumber];
    this.currentSlide = slide; // Assign current slide

    // Modify title if dotNumber is 2 and title has more than 2 words
    if (dotNumber === 2) {
      const words = slide.title.split(' ');
      if (words.length > 2) {
        words.splice(2, 0, '<br/>');
        slide.title = words.join(' ');
      }
    } else {
      this.currentSlide.title = slide.title;
    }
  }
}
