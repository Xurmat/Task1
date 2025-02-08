import { Injectable } from '@angular/core';
import { Cart } from './loadingpage/cart';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  carts:Cart[] = [
    {title: 'Build your first angular app', description: 'Work through a full tutorial to create your first application.', footer: 'Homes App Tutorial'},
    {title: 'What is Angular ?', description: 'Get a high-level overview of the Angular platform.', footer: 'Platform overview'},
    {title: 'Learn and Explore', description: 'Learn about the fundamental design concepts and architecture of Angular applications.', footer: 'Introduction to Angular concepts'},
    {title: 'Set up your environment', description: 'Set up your local environment for development with the Angular CLI.', footer: 'Local setup'},
   ];
  constructor() { }

}
