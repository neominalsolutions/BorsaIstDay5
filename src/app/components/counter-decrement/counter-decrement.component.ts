import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement } from 'src/app/store/actions/counter.action';
import { counterState } from 'src/app/store/reducers/counter.reducer';

@Component({
  selector: 'app-counter-decrement',
  templateUrl: './counter-decrement.component.html',
  styleUrls: ['./counter-decrement.component.css'],
})
export class CounterDecrementComponent {
  constructor(private store: Store<counterState>) {}

  onDecrement() {
    this.store.dispatch(decrement());
  }
}
