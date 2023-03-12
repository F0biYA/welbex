import './Footer.css';

function Footer() {

    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__description'>
                    <p className='footer__menu-title'>О компании</p>
                    <a className='footer__link'>Партнёрская программа</a>
                    <a className='footer__link'>Вакансии</a>
                </div>
                <div className='footer__menu'>
                    <p className='footer__menu-title'>Меню</p>
                    <div className='footer__wrapper'>
                        <div className='footer__links'>
                            <a className='footer__link'>Расчёт стоимости</a>
                            <a className='footer__link'>Услуги</a>
                            <a className='footer__link'>Виджеты</a>
                            <a className='footer__link'>Интеграции</a>
                            <a className='footer__link'>Наши клиенты</a>
                        </div>
                        <div className='footer__links'>
                            <a className='footer__link'>Кейсы</a>
                            <a className='footer__link'>Благодарственные письма</a>
                            <a className='footer__link'>Сертификаты</a>
                            <a className='footer__link'>Блог на Youtube</a>
                            <a className='footer__link'>Вопрос / Ответ</a>
                        </div>
                    </div>
                </div>
                <div className='footer__contacts'>
                    <p className='footer__menu-title'>Контакты</p>
                    <span className='footer__contact'>+7-555-555-55-55</span>
                    <div className='footer__icon-container'>
                        <div className='telegram icon'></div>
                        <div className='viber icon'></div>
                        <div className='whatsapp icon'></div>
                    </div>
                    <p className='footer__address'>Москва, Путевой проезд 3с1, к 902</p>
                </div>
                <div className='footer__copyright'>
                    <span className='footer__copyright-text'>©WELBEX 2022. Все права защищены.</span>
                    <a className='footer__copyright-link'>Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer