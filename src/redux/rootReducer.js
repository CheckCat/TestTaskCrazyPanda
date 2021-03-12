import { FILTER, UPDATE_TEXTAREA_VALUE } from "./types";
import data from '../data.json'

const validateData = (data, numberOfPages) =>
  data.reduce((accum, item, index) => {
    if (!(index % numberOfPages)) accum.push([])
    accum[~~(index / numberOfPages)].push(item)
    return accum
  }, [])

const rootReducer = (state = {textareaValue: "", data: validateData(data, 50)}, action) => {
    switch (action.type) {
        case FILTER:
            const newData = {...state}.data
            newData[action.indexOfPage] = action.newList
            return {...state, data: [...newData]}
        case UPDATE_TEXTAREA_VALUE: 
            return {...state, textareaValue: action.text}
        default: return {...state}
    }
}

export default rootReducer