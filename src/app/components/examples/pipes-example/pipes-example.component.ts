import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inst-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss'],
})
export class PipesExampleComponent {
  title = ' Lorem ipsum dolor sit amet';
  url = 'https://angular.io/api/common/SlicePipe';
  date = new Date(2022, 4, 12, 10);
}
