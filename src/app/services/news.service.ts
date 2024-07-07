import { Category } from './../interfaces/category';
import { News } from './../interfaces/news';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private newsUrl = 'https://api.npoint.io/d275425a434e02acf2f7';
  private categoriesUrl = 'https://api.npoint.io/91298d970c27e9a06518';
  constructor(private http: HttpClient) {}

  getNews(): Observable<{ News: News[] }> {
    return this.http.get<{ News: News[] }>(this.newsUrl);
  }
  getNewsCategories(): Observable<{ newsCategory: Category[] }> {
    return this.http.get<{ newsCategory: Category[] }>(this.categoriesUrl);
  }
}
