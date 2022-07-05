import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <a href='https://www.elecard.com/ru' target={'_blank'} rel={'noreferrer'} className={`footer__link footer__link_elecard`} />
      <a href='https://github.com/v1ktorbro/elecard' target={'_blank'} rel={'noreferrer'} className={`footer__link footer__link_github`} />
      <a href='https://t.me/viktorAbr' target={'_blank'} rel={'noreferrer'} className={`footer__link footer__link_telegram`} />
    </footer>
  );
}

export default Footer;