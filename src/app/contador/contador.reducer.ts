import { createReducer, on, Action } from '@ngrx/store';
import {
  incrementar,
  decrementar,
  reset,
  multiplicar,
  dividir,
} from './contador.actions';

export const initialState = 0;

const _contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero),
  on(reset, () => initialState)
);

export function contadorReducer(state: number, action: Action) {
  return _contadorReducer(state, action);
}
