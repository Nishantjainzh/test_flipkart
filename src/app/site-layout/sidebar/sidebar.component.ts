import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { CategoryInterface } from '../category-interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categoryData: any;
  constructor(private productService:ProductService ) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(data =>{
      this.categoryData = data
    })
  }

}
