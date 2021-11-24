import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
  productList : any;
  searchCategory: any;
  constructor(private productService: ProductService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(data =>{
      this.searchCategory = data.id;
    });
    this.productService.searchCategoryProduct(this.searchCategory).subscribe(categoryData =>{
      this.productList = categoryData;
      console.log(categoryData);
      
    });
  }

}
