import './SectionCards.css';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

function SectionCards() {
  const cards = useSelector((state) => state.cards.cards);

  return (
    <section className='section-cards'>
      {cards.map((card) => {
        return (
          <Card key={card.timestamp} data={card}/>
        );
      })}
    </section>
  );
}

export default SectionCards;