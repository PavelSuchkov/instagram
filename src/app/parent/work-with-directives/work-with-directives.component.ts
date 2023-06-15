import { Component } from '@angular/core';
export interface Fruit {
  id: string;
  name: string;
  price: number;
}
// проработка ngFor, ngif, ngClass
// 1. отрисовать массив фруктов
// 2.нечётные элементы отобразить зелёным  цветом
// 3. чётные элементы отобразить красным
// 4. отобразить только продукты стоимостью больше 7
// 5. Продуктам стооимость более 15 добавить любой стиль который их выделит в списке

@Component({
  selector: 'inst-work-with-directives',
  templateUrl: './work-with-directives.component.html',
  styleUrls: ['./work-with-directives.component.scss'],
})
export class WorkWithDirectivesComponent {
  fruits: Array<Fruit> = [
    { id: '1', name: 'apple', price: 10 },
    { id: '2', name: 'orange', price: 20 },
    { id: '3', name: 'watermelon', price: 30 },
    { id: '4', name: 'banana', price: 34 },
    { id: '5', name: 'pears', price: 12 },
    { id: '6', name: 'raspberries', price: 23 },
    { id: '7', name: 'avocados', price: 17 },
    { id: '8', name: 'mangoes', price: 3 },
    { id: '9', name: 'kiwifruit', price: 7 },
  ];
}
