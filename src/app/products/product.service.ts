import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../site-layout/category-interface';
import { ProductInterface } from './product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private base_url = 'http://localhost:3000/products';
  private root_url = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) { }

  createProduct(productBody: any): Observable<ProductInterface>{
    return this.httpClient.post<ProductInterface>(this.base_url, productBody);
  }
  updateProduct(productId: any, productBody: any): Observable<ProductInterface>{
    return this.httpClient.put<ProductInterface>(`${this.root_url}`+ productId, productBody);
  }
  viewProduct(): Observable<ProductInterface>{
    return this.httpClient.get<ProductInterface>(`${this.root_url}`);
  }
  deleteProduct(productId: any): Observable<ProductInterface>{
    return this.httpClient.delete<ProductInterface>(`${this.root_url}` + productId);
  }
  searchCategoryProduct(categoryId: any): Observable<ProductInterface>{
    return this.httpClient.get<ProductInterface>(`${this.root_url}/category` + categoryId);
  }
  searchDateProduct(dateParam: any): Observable<ProductInterface>{
    return this.httpClient.get<ProductInterface>(`${this.root_url}/date` + dateParam);
  }
  getCategory(){
    const url = "http://localhost:3000/categories";
    return this.httpClient.get<CategoryInterface>(url);
  }

}
