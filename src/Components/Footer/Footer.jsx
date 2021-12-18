import "./Footer.scss"

function Footer() {
    return (
        <div className="footer">
            <h2 className="footer__lead">ИНТЕРНЕТ-МАГАЗИН МУЖСКОЙ ОДЕЖДЫ</h2>
            <p className="footer__text">Лорем ипсум долор сит амет, нам менандри сапиентем яуаерендум цу, ипсум ехпетенда симилияуе вих не. Ехерци цонцептам но хас, еум не проприае деленити медиоцритатем. Те граеци саперет меа, нец не инани популо диссентиас. Ут сеа пурто адхуц. Ут яуандо легере деленит пер, вениам луцилиус ут еос, харум глориатур еу усу.
            Нам миним цивибус те. Ут ест аудиам сцрипта партиендо. Атоморум демоцритум хис ех. Нуллам аудиам ут вим, ут цасе инцоррупте хас. Сит синт алиенум ин, пондерум аргументум еу мел.</p>
            <ul className="footer__list">
                <li className="footer__item">
                    <h3 className="footer-item__lead">Нужна помощь с заказом?</h3>
                    <a className="footer-item__tel" href="tel:+998991111195">Тел: +998991111195</a>
                    <a className="footer-item__mail" href="mailto:info@matnar.uz">Почта: info@matnar.uz</a>
                </li>
                <li className="footer__item">
                    <h3 className="footer-item__lead">Подпишитесь на новости MATNAR</h3>
                    <form>
                        <div className="footer-form__box">
                            <input className="footer-item__email-input" type="email" placeholder="Ваш e-mail" />
                            <button className="footer-item__email-btn">ОТПРАВИТЬ</button>
                        </div>
                    </form>
                </li>
            </ul>
        </div>
    )
}

export default Footer;