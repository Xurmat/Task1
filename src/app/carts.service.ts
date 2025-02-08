import { Injectable } from '@angular/core';
import { Cart } from './loadingpage/cart';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  carts:Cart[] = [
    {title: 'Build your first angular app', footer: 'Homes App Tutorial'},

   ];
  constructor() { }

}
