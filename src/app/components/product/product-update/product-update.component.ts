import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
    }

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe( product => {
      // console.log('product update:  ', product);
      this.product = product;
    });
  }

  updateProduct() {
    this.productService.update(this.product).subscribe();
    this.productService.showMessage('Cadastro alterado com sucesso', 'success');
    this.router.navigate(['/products']);
  }

  cancel() {
    this.productService.showMessage('Cadastro cancelado', 'error');
    this.router.navigate(['/products']);
  }

}
