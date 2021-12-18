import "./Header.scss"

//Hooks
import { NavLink, Link } from "react-router-dom";
import { useRef } from "react"

//components
import SignUpModal from "../Sign-up-modal/Sign-up-modal";

//images
import RuLangIcon from "../../Assets/image/russia.png"
import UzLangIcon from "../../Assets/image/uzbekistan.png"
import Minefer from "../../Assets/image/minefer";
import Liked from "../../Assets/image/liked.png";
import Shopping from "../../Assets/image/shopping.png"
import LogoHead from "../../Assets/image/matnar-logo.png"


function Header() {

    const langBox = useRef();

    const langModal = () => {
        langBox.current.style.display = "block";
    }

    const langModalNone = (evt) => {
        if (evt.currentTarget === langBox.current) {
            langBox.current.style.display = "none";
        }
    }

    const modalLink = useRef();

    const onHoverModal = () => {
        modalLink.current.style.display = "flex";
    }
    const onModal = () => {
        modalLink.current.style.display = "none";
    }
    
    const CloseWindow = useRef();
    
    const HandleOpenModal = () => {
        CloseWindow.current.style.display = "flex"
    }

    const searchInput = useRef();

    const OpenSearch = () => {
        searchInput.current.style.right = '165px'
    }
    const CloseSearch = (evt) => {
        if (evt.target !== searchInput.current) {
            searchInput.current.style.right = '-230px'
        }
    }

    return (
        <>
            <header className="site-header">
                <div className="site-header__wrapper">
                    <div className="header-top">
                        <div className="header-top__left">
                            <p className="header-top__tel">+998 99 111 11 95 | Работаем 7 дней в неделю | 24/7</p>
                            <ul className="header-top__list">
                                <li className="header-top__item"><NavLink className="header-top__lang-link" activeClassName="header-top__link-active" to="/" exact>Женское</NavLink></li>
                                <li className="header-top__item"><NavLink className="header-top__lang-link" activeClassName="header-top__link-active" to="/men">Мужское</NavLink></li>
                                <li className="header-top__item"><NavLink className="header-top__lang-link" activeClassName="header-top__link-active" to="/kids">Детское</NavLink></li>
                            </ul>
                        </div>
                        <a className="site-logo__link" href="/"><img src={LogoHead} alt="site logo" /></a>
                        <div className="header-top__right">
                            <button className="header-lang__btn" onClick={langModal}><img src={RuLangIcon} alt="ru flag" /></button>
                            <div className="modal-lang__select" ref={langBox} onMouseLeave={langModalNone} onClick={langModalNone}>
                                <button className="modal-lang__btn"><img src={RuLangIcon} alt="flag" /><span>Русский</span></button>
                                <button className="modal-lang__btn"><img src={UzLangIcon} alt="flag" /><span>O'zbekcha</span></button>
                            </div>
                            
                            <SignUpModal modalLink={CloseWindow} />
                            <button className="header__btn" onClick={HandleOpenModal}>Личный кабинет</button>
                            <div className="header-btn__box">
                                <div>
                                    <button className="header__btn search-open__btn" onClick={OpenSearch}><Minefer /></button>
                                    <div className="search-input__wrap" ref={searchInput} onMouseLeave={CloseSearch}>
                                        <form> 
                                            <input className="search__input" type="search" placeholder="Поиск" />
                                        </form>
                                    </div>
                                </div>
                                <button className="header__btn"><img src={Liked} alt="liked" /></button>
                                <button className="header__btn"><img src={Shopping} alt="shopping" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <ul className="header-links-list">
                            <li className="header-links-item"><Link className="header-link" to="/">НОВИНКИ</Link></li>
                            <li className="header-links-item"><Link className="header-link" to="/" onMouseEnter={onHoverModal} onMouseLeave={onModal}>БРЕНДЫ</Link></li>
                            <li className="header-links-item"><Link className="header-link" to="/" onMouseEnter={onHoverModal} onMouseLeave={onModal}>ОДЕЖДА</Link></li>
                            <li className="header-links-item"><Link className="header-link" to="/" onMouseEnter={onHoverModal} onMouseLeave={onModal}>ОБУВЬ</Link></li>
                            <li className="header-links-item"><Link className="header-link" to="/" onMouseEnter={onHoverModal} onMouseLeave={onModal}>СУМКИ</Link></li>
                            <li className="header-links-item"><Link className="header-link" to="/" onMouseEnter={onHoverModal} onMouseLeave={onModal}>АКСЕССУАРЫ</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="modal-link" onMouseEnter={onHoverModal} onMouseLeave={onModal} ref={modalLink}>
                <div className="modal-link__wrapper">
                    <div className="modal-wrapper__left">
                        <h3>По разделам</h3>
                        <ul className="modal-clothes__categories">
                            <li><Link className="link-unstyled" to="/">Женская одежда</Link></li>
                            <li><Link className="link-unstyled" to="/">Женская обувь</Link></li>
                            <li><Link className="link-unstyled" to="/">Женская сумки</Link></li>
                        </ul>
                    </div>
                    <div className="modal-wrapper__brand-box">
                        <ul className="modal-brands__wrapper-list">
                            <li><Link className="link-unstyled" to="/">Alexander McQueen</Link></li>
                            <li><Link className="link-unstyled" to="/">Balenciaga</Link></li>
                            <li><Link className="link-unstyled" to="/">Bottega Veneta</Link></li>
                            <li><Link className="link-unstyled" to="/">Brunello Cucinelli</Link></li>
                            <li><Link className="link-unstyled" to="/">Burberry</Link></li>
                            <li><Link className="link-unstyled" to="/">Dolce & Gabbana</Link></li>
                            <li><Link className="link-unstyled" to="/">Ermenegildo Zegna</Link></li>
                            <li><Link className="link-unstyled" to="/">Gucci</Link></li>
                            <li><Link className="link-unstyled" to="/">Kiton</Link></li>
                            <li><Link className="link-unstyled" to="/">Loro Piana</Link></li>
                            <li><Link className="link-unstyled" to="/">Moncler</Link></li>
                            <li><Link className="link-unstyled" to="/">Off-White</Link></li>
                        </ul>
                        <ul className="modal-brands__wrapper-list">
                            <li><Link className="link-unstyled" to="/">Ralpth Lauren</Link></li>
                            <li><Link className="link-unstyled" to="/">Saint Laurent</Link></li>
                            <li><Link className="link-unstyled" to="/">Santoni</Link></li>
                            <li><Link className="link-unstyled" to="/">Stone Island</Link></li>
                            <li><Link className="link-unstyled" to="/">Tom Ford</Link></li>
                            <li><Link className="link-unstyled" to="/">Valentino</Link></li>
                            <li><Link className="link-unstyled" to="/">Varsace</Link></li>
                            <li><Link className="link-unstyled" to="/">Zilli</Link></li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://picsum.photos/600/350" alt="brand" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;