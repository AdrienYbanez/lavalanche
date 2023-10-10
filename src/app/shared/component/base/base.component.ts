import {Component, OnDestroy} from '@angular/core';
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-base',
  template: '',
  styleUrls: []
})
export class BaseComponent implements OnDestroy {
  protected $_subcriptions: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.$_subcriptions.next();
    this.$_subcriptions.complete();
  }

}
