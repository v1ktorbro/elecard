import './Navigation.css';
import { useDispatch, useSelector } from 'react-redux';
import { setNamaSortParamAction } from '../../store/sortReducer';

function Navigation() {
  const dispatch = useDispatch();
  const valueInput = useSelector((state) => state.sort.nameSortParam);
  
  const handlerClick = (evt) => {
    const {value} = evt.target;
    const allInputs = document.querySelectorAll('.navigation__input');

    (valueInput === value) ? dispatch(setNamaSortParamAction('')) : dispatch(setNamaSortParamAction(value));

    allInputs.forEach((inputNode) => {
      const setterStyleContainerInput = (input, value) => {
        const containerInput = input.closest('.navigation__input-wrapper');
        containerInput.style.backgroundColor = value;
      };
      if (inputNode.value !== value) inputNode.checked = false;
      (inputNode.value === value && inputNode.checked) ? setterStyleContainerInput(inputNode, '#c3e5ff') : setterStyleContainerInput(inputNode, 'transparent');
    });
  };

  return (
    <nav className='navigation'>
      <h3 className='navigation__title'>Отсортировать по:</h3>
      <form className='navigation__form-chekbox'>
        <div className='navigation__input-wrapper'>
          <input
            onClick={handlerClick} 
            className={`navigation__input navigation__input_category`} 
            value='category' 
            id='category' 
            type='checkbox' 
          />
          <label className='navigation__label-input navigation__label-input_category' htmlFor='category'>категории</label>
        </div>

        <div className='navigation__input-wrapper'>
          <input 
            onClick={handlerClick} 
            className={`navigation__input navigation__input_date`} 
            value='date' 
            id='date' 
            type='checkbox' 
          />
          <label className='navigation__label-input navigation__label-input_date' htmlFor='date'>дате</label>
        </div>

        <div className='navigation__input-wrapper'>
          <input 
            onClick={handlerClick} 
            className={`navigation__input navigation__input_name`} 
            value='name' 
            id='name'
            type='checkbox' 
          />
          <label className='navigation__label-input navigation__label-input_name' htmlFor='name'>названию файла</label>
        </div>

        <div className='navigation__input-wrapper'>
          <input 
            onClick={handlerClick} 
            className={`navigation__input navigation__input_size`} 
            value='size' 
            id='size'
            type='checkbox' 
          />
          <label className='navigation__label-input navigation__label-input_size' htmlFor='size'>размеру файла</label>
        </div>
      </form>
    </nav>
  );
}

export default Navigation;