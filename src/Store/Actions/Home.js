import * as ACTIONTYPE from '../Types';

export const testAction = () => {
  return (dispatch, getState) => {
    dispatch(setTestValue());
  }
}

const setTestValue = () => {
  return {
    type: ACTIONTYPE.TEST_TYPE,
    payload: {}
  }
}