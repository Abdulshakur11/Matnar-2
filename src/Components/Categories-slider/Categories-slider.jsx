import "./Categories-slider.scss"

import {useRef} from "react"
import { Link } from "react-router-dom"

function CategoriesSlider() {

    const ScroolList = useRef();

    const handleNext = () => {
        const allPrev = document.querySelectorAll('.prev');
        allPrev.forEach((link) => link.classList.remove('prev')
        );
        ScroolList.current.classList.add("next");
    }
    const handlePrev = () => {
        const allNext = document.querySelectorAll('.next');
        allNext.forEach((link) => link.classList.remove('next')
        );
        ScroolList.current.classList.add("prev");
    }

    return (
        <div className="categories-section">
            <button className="scrool-btn__style" onClick={handlePrev}>‹‹</button>
            <div className="categories-section__wrapper">
                <ul className="categories__list" ref={ScroolList}>
                    <li className="categories__item">
                        <img src="https://picsum.photos/200/150" alt="clothes" />
                        <h4>КУРТКИ</h4>
                    </li>
                    <li className="categories__item">
                        <img src="https://picsum.photos/200/150" alt="clothes" />
                        <h4>Ботинки</h4>
                    </li>
                    <li className="categories__item">
                        <img src="https://picsum.photos/200/150" alt="clothes" />
                        <h4>Свитеры</h4>
                    </li>
                    <li className="categories__item">
                        <img src="https://picsum.photos/200/150" alt="clothes" />
                        <h4>Рубашки</h4>
                    </li>
                    <li className="categories__item">
                        <img src="https://picsum.photos/200/150" alt="clothes" />
                        <h4>Джинсы</h4>
                    </li>
                    <li className="categories__item">
                        <img src="https://picsum.photos/200/150" alt="clothes" />
                        <h4>Кеды</h4>
                    </li>
                    <li className="categories__item">
                        <img src="https://picsum.photos/200/150" alt="clothes" />
                        <h4>Дубленки</h4>
                    </li>
                    <li className="categories__item">
                        <img src="https://picsum.photos/200/150" alt="clothes" />
                        <h4>Джемперы</h4>
                    </li>
                    <li className="categories__item">
                        <img src="https://picsum.photos/200/150" alt="clothes" />
                        <h4>Челси</h4>
                    </li>
                    <li className="categories__item">
                        <button className="see-all__btn"><Link className="see-all__link" to="/">Смотреть ещё</Link></button>
                    </li>
                </ul>
            </div>
            <button className="scrool-btn__style" onClick={handleNext}>››</button>
        </div>
    )
}

export default CategoriesSlider;