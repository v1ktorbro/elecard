import './Card.css';
import React from 'react';

const data = {
	"image": "animals/baby-monkey-4888534__480.jpg",
	"filesize": 74353,
	"timestamp": 1393824669830,
	"category": "animals",
};

function Card() {
  const url = 'http://contest.elecard.ru/frontend_data/';
  const handlerTimeStamp = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const handlerSizeInMB = (sizeInBytes) => (sizeInBytes / (1024 * 1024)).toFixed(2);

  const [isHoverCard, setIsHoverCard] = React.useState(false);

  const toggleStateHandler = () => setIsHoverCard(prev => !prev);

  return (
    <article 
      className='card'
      onMouseEnter={toggleStateHandler}
      onMouseLeave={toggleStateHandler}
    >
      <img 
        src={`${url}/${data.image}`}
        className='card__image'
        alt={`Изображение из категории ${data.category}`} 
      />
      <button className='card__btn-delete' type='button' title='Удалить карточку' />
      <div className={`card__info-block ${isHoverCard && 'card__info-block_open'}`}>
        <span>{`Категория: ${data.category}`}</span>
        <span>{`Файл создан: ${handlerTimeStamp(data.timestamp)}`}</span>
        <span>{`Размер файла: ${handlerSizeInMB(data.filesize)} Mb`}</span>
      </div>
    </article>
  );
}

export default Card;