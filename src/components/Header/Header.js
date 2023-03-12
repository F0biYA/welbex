import './Header.css';

function Header() {

    return (
        <header className='header'>
         
               <div className='header__logo'></div>
               <p className='header__logo-title'>крупный интегратор CRM в Росcии и ещё 8 странах</p>
            
            <nav>
                <ul className='header__nav-container'>
                    <li className='header__nav-link'><a href='#' className='header__link'>Услуги</a></li>
                    <li className='header__nav-link'><a href='#' className='header__link'>Виджеты</a></li>
                    <li className='header__nav-link'><a href='#' className='header__link'>Интеграции</a></li>
                    <li className='header__nav-link'><a href='#' className='header__link'>Кейсы</a></li>
                    <li className='header__nav-link'><a href='#' className='header__link hide'>Сертификаты</a></li>
                </ul>
            </nav>
            <div className='header__contacts'>
                <span className='contact-phone'>+7-555-555-55-55</span>
                <div className='telegram icon'></div>
                <div className='viber icon'></div>
                <div className='whatsapp icon'></div>
                </div>
            </header>
    )
}
export default Header