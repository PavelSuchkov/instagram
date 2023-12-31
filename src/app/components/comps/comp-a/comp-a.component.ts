import { Component, OnInit } from '@angular/core';
import { ValueService } from '../../../services/value.service';
import { BehaviorSubject } from 'rxjs';
import { BeautyLoggerService } from '../../../services/beauty-logger.service';

@Component({
  selector: 'inst-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
  // providers: [ValueService],
})
export class CompAComponent implements OnInit {
  value = 0;

  constructor(
    private valueService: ValueService,
    private loggerService: BeautyLoggerService
  ) {}

  ngOnInit(): void {
    //подписка на поток. Не забудь отписаться
    this.valueService.value$.subscribe((value) => {
      this.value = value;
    });
  }

  addValueHandler() {
    this.valueService.add();
    // console.log('add value');
    this.loggerService.log('add value', 'success');
  }
}
