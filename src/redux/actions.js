import { ADD, EDIT } from './types';

export const add = elem => ({
  type: ADD,
  newElem: elem
})

export const edit = (elem, index) => ({
  type: EDIT,
  indexOfPrevElem: index,
  newElem: elem
})
