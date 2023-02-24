import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  increment,
  incrementByValue,
} from 'src/app/store/actions/counter.action';
import { counterState } from 'src/app/store/reducers/counter.reducer';

@Component({
  selector: 'app-counter-increment',
  templateUrl: './counter-increment.component.html',
  styleUrls: ['./counter-increment.component.css'],
})
export class CounterIncrementComponent {
  constructor(private store: Store<counterState>) {}

  onIncrementByValue(event: any) {
    let param = {
      value: Number(event.target.value),
    };

    this.store.dispatch(incrementByValue(param));
  }

  onIncrement() {
    this.store.dispatch(increment());
  }
}
