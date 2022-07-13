import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../asyncAction/cards';
import { setParamCategory } from '../../store/paramsReducer';

function App() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);

  const setUniqParamCategory = (cards) => { 
    let obj = {};
    let categoryArr = [];
    let count = 1;
    cards.forEach((card) => {
      if (!(card.category in obj)) obj[card.category] = count;
      else obj[card.category] = count++;
      return obj;
    });
    Object.keys(obj).forEach((nameCategory) => {
      categoryArr.push(nameCategory);
    });
    return dispatch(setParamCategory(categoryArr));
  };

  React.useEffect(() => {
    setUniqParamCategory(cards);
  }, [cards]);

  React.useEffect(() => {
    dispatch(fetchCards());
  }, []);
  
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
