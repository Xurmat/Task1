import { Component, Input } from '@angular/core';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-loadingpage',
  imports: [],
  templateUrl: './loadingpage.component.html',
  styleUrl: './loadingpage.component.scss'
})
export class LoadingpageComponent {
  @Input('title') cartTitle!: string;
  @Input('description') cartDesc!: string;
  @Input('footer') cartfooter!:string;

  constructor(private cartService:CartsService){

  }
}
