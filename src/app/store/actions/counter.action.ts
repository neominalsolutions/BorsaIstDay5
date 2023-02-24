import { ActionCreatorProps, createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment'); // +1
export const decrement = createAction('[Counter Component] Decrement'); // -1
export const reset = createAction('[Counter Component] Reset'); // 0

export const incrementByValue = createAction(
  '[Counter Component] IncrementByValue',
  props<{ value: number }>()
); // +1

// props ile dışarıdan gönderilecek olan payload parametresine göre bir state güncellemesi yapacağız.
