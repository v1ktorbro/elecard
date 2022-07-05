import './Pagination.css';

function Pagination() {
  
  return (
    <article className={`pagination`}>
      <ul className='pagination__list'>
        <button 
          type='button'
          className={`pagination__btn pagination__btn_double-arrow pagination__btn_double-arrow-prev`}
        />
        <button 
        
          type='button'
          className={`pagination__btn pagination__btn_single-arrow pagination__btn_single-arrow-prev`}
        />
        {[...Array(3)].map((item, index) => {
            return (
              <li 
                className={`pagination__item-list ${index === 2 && 'pagination__item-list_active'}`}
                key={index}
              >{index}</li>
            );
        })}
        <button 
          type='button'
          className={`pagination__btn pagination__btn_single-arrow pagination__btn_single-arrow-next`}
        />
        <button 
          type='button'
          className={`pagination__btn pagination__btn_double-arrow pagination__btn_double-arrow-next`}
        />
      </ul>
    </article>
  );
}

export default Pagination;