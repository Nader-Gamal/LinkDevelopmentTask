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
  activeDot: number = 0; // Active dot index for tracking the current slide
  currentSlide: BannerSlide | undefined; // Current slide object
  titleModified: boolean = false; // Flag to check if title has been modified

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

    // Modify title if dotNumber is 2, title has more than 2 words, and not modified before
    if (dotNumber === 2 && !this.titleModified) {
      const words = slide.title.split(' ');
      if (words.length > 2) {
        words.splice(2, 0, '<br/>');
        slide.title = words.join(' ');
        this.titleModified = true; // Set flag to true after modification
      }
    } else {
      this.currentSlide.title = slide.title;
    }
  }
}
