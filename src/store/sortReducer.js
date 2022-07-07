const defaultState = {
  nameSortParam: '',
};

const SET_NAME_SORT_PARAM = 'SET_NAME_SORT_PARAM';

export const sortReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_NAME_SORT_PARAM:
      return {...state, nameSortParam: action.payload};
    default:
      return state;
  }
};

export const setNamaSortParamAction = (payload) => ({type: SET_NAME_SORT_PARAM, payload});