import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
    }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  create() {    
    this.productService.create(this.product).subscribe( (response) => {
      // console.log('Response: ', response);
      this.productService.showMessage('Registro salvo com sucesso.', 'success');
      this.router.navigate(['/products']);
    })    
  }

  read() {
    this.productService.read().subscribe((response) => {
      // console.log('ResponseGet: ', response);
      this.productService.showMessage('Registros carregados com sucesso', 'success');
      this.router.navigate(['/products']);
    })
  }

  delete() {
    this.productService.delete('1').subscribe((response) => {
      // console.log('ResponseDelete: ', response);
      this.productService.showMessage('Registros deletado com sucesso', 'error');
      this.router.navigate(['/products']);
    })
  }

  cancel() {
    this.productService.showMessage('Cadastro cancelado', 'error');
    this.router.navigate(['/products']);
  }



}
