const defaultState = {
  categoryArr: [],
  fileSizeArr: [],
  timeStampArr: [],
};

const SET_PARAM_CATEGORY = 'SET_PARAM_CATEGORY'; 

export const paramsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PARAM_CATEGORY:
      // return console.log(action.payload, 'пипырка');
      return {...state, categoryArr: [...state.categoryArr, action.payload]};
      // return handlerCategoryParam(action.payload);
    default:
      return state;
  }
};

export const setParamCategory = (payload) => ({type: SET_PARAM_CATEGORY, payload});