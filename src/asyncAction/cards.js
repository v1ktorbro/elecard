import { getAllCardsAction } from "../store/cardsReducer";

export const fetchCards = () => {
  return function(dispatch) {
    fetch('http://contest.elecard.ru/frontend_data/catalog.json')
      .then((res) => {
        if (res.ok) return res.json();
        return Promise.reject(new Error(`Ошибка при получении карточек, статус ответа сервера: ${res.status}`));
      })
      .then((res) => dispatch(getAllCardsAction(res)));
  }
};