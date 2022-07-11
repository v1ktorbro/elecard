import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { useDispatch } from 'react-redux';
import { fetchCards } from '../../asyncAction/cards';
import React from 'react';

function App() {
  const dispatch = useDispatch();

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
