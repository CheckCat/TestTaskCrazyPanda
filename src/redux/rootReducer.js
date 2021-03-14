import { FILTER, UPDATE_INDEX_OF_PAGE } from "./types";
import data from '../data.json'

const validateData = (data, numberOfPages) =>
  data.reduce((accum, item, index) => {
    if (!(index % numberOfPages)) accum.push([])
    accum[~~(index / numberOfPages)].push(item)
    return accum
  }, [])

const getIndexOfPage = () => {
  return window.location.pathname.slice(1) ? window.location.pathname.slice(1) : 0
}

const rootReducer = (state = { data: validateData(data, 50), indexOfPage: getIndexOfPage() }, action) => {
  switch (action.type) {
    case FILTER:
      const newData = { ...state }.data
      newData[state.indexOfPage] = action.newList
      return { ...state, data: [...newData] }
    case UPDATE_INDEX_OF_PAGE:
      return { ...state, indexOfPage: getIndexOfPage() }
    default: return { ...state }
  }
}

export default rootReducer