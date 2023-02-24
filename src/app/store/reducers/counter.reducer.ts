import { createReducer, on } from '@ngrx/store';
import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from '../actions/counter.action';

export type counterState = {
  counter: number;
  active?: boolean;
};

// state initial değer üzerindne çalışır.
const initialCounterState: counterState = {
  counter: 0,
  active: false,
};

// state'in güncellenmesi işlemlerini burada yaptık
export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state: counterState) => {
    // on ile increment action geldiğinde state nasıl bir güncellenem olacak
    console.log('state', state);
    return {
      ...state,
      counter: state.counter + 1,
    } as counterState;
  }),
  on(decrement, (state: counterState) => {
    console.log('state-dec', state);
    return {
      ...state, // spread
      counter: state.counter - 1,
    } as counterState;
  }),
  on(reset, (state: counterState) => {
    console.log('state-reset', state);
    return {
      ...state,
      counter: 0,
    } as counterState;
  }),
  on(incrementByValue, (state: counterState, action: any) => {
    console.log('state-reset', 'action', state, action);
    return {
      ...state,
      counter: action.value,
    } as counterState;
  })
);
