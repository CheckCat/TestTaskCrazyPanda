import { FILTER, UPDATE_INDEX_OF_PAGE } from './types';

export const filter = data => ({
  type: FILTER,
  newList: data
})

export const updateIndexOfPage = () => ({
  type: UPDATE_INDEX_OF_PAGE
})