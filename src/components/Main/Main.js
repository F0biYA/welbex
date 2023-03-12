import './Main.css';
import icon from '../../images/line.png'
function Main() {

    return (
        <section className='main'>
            <div className='main__leftContainer'>
                <h2 className='main__subtitle'>Зарабатывайте больше</h2>
                <h1 className='main__title'>с WELBEX</h1>
                <p className='main__text'>Развиваем и контролируем продажи за вас</p>
            </div>
            <div className='main__rightContainer'>
                <h3 className='main__rightTitle'>Вместе <span className='main__subtitleGradient'>с бесплатной консультацией</span > мы дарим:</h3>
                <div className='main__descriptionContainer'>
                    <div className='main__description'>
                        <p className='main__description-title'>Виджеты</p>
                        <p className='main__description-text'>30 готовых решений</p>
                        <p className='main__description-title'>Skype Аудит</p>
                        <p className='main__description-text'>отдела продаж и CRM системы</p>
                    </div>
                    <div className='main__description'>
                        <p className='main__description-title'>Dashboard</p>
                        <p className='main__description-text'>с показателями вашего бизнеса</p>
                        <p className='main__description-title'>35 дней</p>
                        <p className='main__description-text'>использования CRM</p>
                    </div>
                    </div>
                    <div className='main__description-mobile'>
                        <div className='main__wrapper'> <img className='main__icon' src={icon} alt='icon' /> <p className='main__description-title'>Skype аудит</p></div>
                        <div className='main__wrapper'> <img className='main__icon' src={icon} alt='icon' /> <p className='main__description-title'>30 виджетов</p></div>
                        <div className='main__wrapper'> <img className='main__icon' src={icon} alt='icon' /> <p className='main__description-title'>Dashboard</p></div>
                        <div className='main__wrapper'> <img className='main__icon' src={icon} alt='icon' /> <p className='main__description-title'>Месяц аmoCRM</p></div>
                    </div>
                
                <button className='main__button'>Получить консультацию</button>
            </div>

        </section>)
}
export default Main;