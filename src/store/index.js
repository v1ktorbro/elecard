import { createStore, combineReducers, applyMiddleware } from 'redux';
import { sortReducer } from './sortReducer';
import { cardsReducer } from './cardsReducer';
import { paramsReducer } from './paramsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  sort: sortReducer,
  cards: cardsReducer,
  params: paramsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools((applyMiddleware(thunk))));