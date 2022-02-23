import { createReducer, on } from '@ngrx/store';
import { Record } from '../../models';
import { getShow, getShowSuccess } from '../actions';

export interface ShowState {
  id: number;
  show: Record;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialShow: ShowState = {
  id: 0,
  show: <Record>{},
  loaded: false,
  loading: false,
  error: null,
};

export const _showReducer = createReducer(
  initialShow,
  on(getShow, (state, { id }) => ({ ...state, loading: true, id })),

  on(getShowSuccess, (state, { show }) => ({
    ...state,
    loading: false,
    loaded: true,
    show,
  }))
);

export function showReducer(state: any, action: any) {
  return _showReducer(state, action);
}
