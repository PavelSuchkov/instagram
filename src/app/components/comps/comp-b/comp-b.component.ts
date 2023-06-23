import { Component, OnInit } from '@angular/core';
import { ValueService } from '../../../services/value.service';
import { Observable } from 'rxjs';
import { BeautyLoggerService } from '../../../services/beauty-logger.service';

@Component({
  selector: 'inst-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
  // providers: [ValueService],  // это делает ValueService для компонента уникальным
  // и для каждого компонента своим
})
export class CompBComponent implements OnInit {
  value = new Observable();

  constructor(
    private valueService: ValueService,
    private loggerService: BeautyLoggerService
  ) {}

  ngOnInit(): void {
    //в таком варианте не нужно делать отписку. Нужно юзать с | async
    this.value = this.valueService.value$;
  }

  decValueHandler() {
    this.valueService.dec();
    this.loggerService.log('dec value', 'info');
  }
}
