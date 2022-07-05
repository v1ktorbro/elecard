import './Navigation.css';

function Navigation() {
  return (
    <nav className='navigation'>
      <h3 className='navigation__title'>Отсортировать по:</h3>
      <form className='navigation__form-chekbox'>
        <div className='navigation__input-wrapper'>
          <input className={`navigation__input navigation__input_category`} id='category' type='checkbox' />
          <label className='navigation__label-input navigation__label-input_category' htmlFor='category'>категории</label>
        </div>

        <div className='navigation__input-wrapper'>
          <input className={`navigation__input navigation__input_date`} id='date' type='checkbox' />
          <label className='navigation__label-input navigation__label-input_date' htmlFor='date'>дате</label>
        </div>

        <div className='navigation__input-wrapper'>
          <input className={`navigation__input navigation__input_name`} id='name' type='checkbox' />
          <label className='navigation__label-input navigation__label-input_name' htmlFor='name'>названию файла</label>
        </div>

        <div className='navigation__input-wrapper'>
          <input className={`navigation__input navigation__input_size`} id='size' type='checkbox' />
          <label className='navigation__label-input navigation__label-input_size' htmlFor='size'>размеру файла</label>
        </div>
      </form>
    </nav>
  );
}

export default Navigation;