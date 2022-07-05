import './Header.css';

function Header() {
  return (
    <header className='header'>
      <a href='https://www.elecard.com/ru' target={'_blank'} rel={'noreferrer'} className='header__logo' />
      <button type='reset' className='header__btn-reset'>Сбросить</button>
    </header>
  );
}

export default Header;