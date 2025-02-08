import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty',
  imports: [],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss'
})
export class EmptyComponent {
  @Input('title') cartTitle!: string;
  @Input('description') desc!:string;

  constructor(){

  }
}
