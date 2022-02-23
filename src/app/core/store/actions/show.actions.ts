import { createAction, props } from '@ngrx/store';
import { Record } from '../../models';

export const getShow = createAction(
  '[Show] Get Show ',
  props<{ id: number }>()
);
export const getShowSuccess = createAction(
  '[Show] Get Success ',
  props<{ show: Record }>()
);
