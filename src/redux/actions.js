import { FILTER, UPDATE_TEXTAREA_VALUE } from './types';

export const filter = (data, index) => ({
  type: FILTER,
  newList: data,
  indexOfPage: index
})

export const updateTextareaValue = text => ({
  type: UPDATE_TEXTAREA_VALUE,
  text
})