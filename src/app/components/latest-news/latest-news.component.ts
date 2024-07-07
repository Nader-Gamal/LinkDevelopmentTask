import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Category } from 'src/app/interfaces/category';
import { News } from 'src/app/interfaces/news';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
})
export class LatestNewsComponent implements OnInit, OnDestroy {
  newsList: News[] = [];
  allCategories: Category[] = [];
  filteredNewsList: News[] = [];
  showAllNews = false;
  buttonText = 'View More News';
  selectedCategory: number | null = null;
  private newsSubscription: Subscription | undefined;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.fetchNews();
    this.fetchCategories();
  }

  // Fetch news data and initialize states
  fetchNews(): void {
    this.newsSubscription = this.newsService.getNews().subscribe({
      next: (data) => {
        this.newsList = data.News.map((news) => ({
          ...news,
          categoryID: Number(news.categoryID),
          isLiked: false, // Initialize the like state
          showShareIcons: false, // Initialize the share state
        }));
        this.sortNewsByDate(this.newsList); // Sort the news by date
        this.updateFilteredNewsList();
        this.mapCategoryNames();
      },
      error: (error) => {
        console.error('Error fetching news data', error);
      },
    });
  }

  // Fetch category data
  fetchCategories(): void {
    this.newsService.getNewsCategories().subscribe({
      next: (categories) => {
        this.allCategories = categories.newsCategory;
        this.mapCategoryNames();
      },
      error: (error) => {
        console.error('Error fetching categories data', error);
      },
    });
  }

  // Map category names to news items
  mapCategoryNames(): void {
    if (this.newsList.length > 0 && this.allCategories.length > 0) {
      this.newsList.forEach((news) => {
        const category = this.allCategories.find(
          (cat) => cat.id === news.categoryID
        );
        if (category) {
          news.categoryID = category.id; // Ensure this remains a number
        }
      });
    }
  }

  // Filter news based on selected category
  filterNewsByCategory(categoryId: number | null): void {
    this.selectedCategory = categoryId;
    this.updateFilteredNewsList();
  }

  // Update the filtered news list based on the selected category and whether to show all news
  updateFilteredNewsList(): void {
    if (this.selectedCategory === null) {
      this.filteredNewsList = this.showAllNews
        ? [...this.newsList]
        : this.newsList.slice(0, 6);
    } else {
      const filtered = this.newsList.filter(
        (news) => news.categoryID === this.selectedCategory
      );
      this.filteredNewsList = this.showAllNews
        ? filtered
        : filtered.slice(0, 6);
    }

    this.buttonText = this.showAllNews ? 'View Less News' : 'View More News';
  }

  // Toggle the display of all news items
  toggleShowAllNews(): void {
    this.showAllNews = !this.showAllNews;
    this.updateFilteredNewsList();
  }

  // Sort news items by published date
  sortNewsByDate(newsList: News[]): void {
    newsList.sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime()
    );
  }

  // Get category name based on category ID
  getCategoryName(categoryId: number): string {
    const category = this.allCategories.find((cat) => cat.id === categoryId);
    return category ? category.name : '';
  }

  // Toggle the like state of a news item
  toggleLike(news: News): void {
    news.isLiked = !news.isLiked;
  }

  // Toggle the display of share icons for a news item
  toggleShare(news: News): void {
    news.showShareIcons = !news.showShareIcons;
  }

  // Unsubscribe from the news subscription to avoid memory leaks
  ngOnDestroy(): void {
    if (this.newsSubscription) {
      this.newsSubscription.unsubscribe();
    }
  }
}
