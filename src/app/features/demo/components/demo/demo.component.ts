import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Input, DoCheck, AfterViewInit } from '@angular/core';
import { User } from 'src/app/core/model/user.interface';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Input()
  title: string;
  @Input()
  user: User;

  oldName = '';
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges' + JSON.stringify(changes));
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    if (this.user != null && this.user.name !== this.oldName) {
      console.log('ngDoCheck');
      this.oldName = this.user.name
    }
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }



}
