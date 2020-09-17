import * as ACTIONTYPE from '../Types'

const initialState = {
  testValue: 'reached'
}
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONTYPE.TEST_TYPE:
      return {
        ...state,
        testValue: 'reachedagain',
      }
    default:
      return {
        ...state,
      }
  }
}

export default homeReducer;