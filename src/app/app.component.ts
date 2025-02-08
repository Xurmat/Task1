import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from "./empty/empty.component";

@Component({
  selector: 'app-root',
  imports: [ CommonModule, EmptyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task1';

}
