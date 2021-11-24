import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../product-interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  productList : any;
  constructor(private productSerice: ProductService) { }

  ngOnInit(): void {
    this.productSerice.viewProduct().subscribe(data =>{
      this.productList = data;
     // console.log(this.productList);      
    });
  }

  display(){
    
    console.log('check data');
    
  }

}
