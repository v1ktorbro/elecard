const defaultState = {
  cards: [],
};

const GET_ALL_CARDS = 'GET_ALL_CARDS';

export const cardsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_CARDS:
      return {...state, cards: action.payload}
    default:
      return state;
  }
};

export const getAllCardsAction = (payload) => ({type: GET_ALL_CARDS, payload});