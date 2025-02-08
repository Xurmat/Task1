import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingpageComponent } from "./loadingpage/loadingpage.component";
import { Cart } from './loadingpage/cart';
import { CartsService } from './carts.service';

@Component({
  selector: 'app-root',
  imports: [LoadingpageComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task1';
  cartTitle = '';
  carts:Cart[];
       constructor(private cartService: CartsService){
        this.carts = this.cartService.carts
       }
}
