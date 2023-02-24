import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reset } from 'src/app/store/actions/counter.action';
import { counterState } from 'src/app/store/reducers/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter$!: Observable<number>;

  constructor(private store: Store<counterState>) {
    this.counter$ = this.store.select('counter');
    this.store.select('counter').subscribe((value) => {
      console.log('value', value);
    });
  }

  reset() {
    this.store.dispatch(reset()); // counter resetlenmesini sağlamış olduk
  }
}
