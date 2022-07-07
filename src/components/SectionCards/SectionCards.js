import './SectionCards.css';
import React from 'react';
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '../../asyncAction/cards';

function SectionCards() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);

  React.useEffect(() => {
    dispatch(fetchCards());
  }, []);

  return (
    <section className='section-cards'>
      {cards.map((card) => {
        return (
          <Card key={card.timestamp}  data={card}/>
        );
      })}
    </section>
  );
}

export default SectionCards;