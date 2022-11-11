import css from './TicketOffered.module.css';
import sprite from '../../images/sprite.svg';
import place from '../../images/place.svg';
import date from '../../images/date.svg';
import pink from '../../images/pink.svg';

export function TicketOffered() {
    return (
        <>
            <section>
                <div className={css.offered__ticket}>
                    <ul className={css.travels__filter__btn}>
                        <li>
                            <button type="button" className={css.transport__price__btn}>
                                найдешевший
                            </button>
                        </li>

                        <li className={css.price__btn}>
                            <button
                                type="button"
                                className={css.transport__filter__price}
                            >
                                ~ 37 год
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className={css.transport__filter__price}
                            >
                                ~ 79 EUR
                            </button>
                        </li>
                    </ul>
                    <ul className={css.travel__options__images}>
                        <li>
                            <svg width="24px" height="24px" aria-label="">
                                <use href={sprite + '#icon-directions_bus-2'}></use>
                            </svg>
                        </li>
                        <li className={css.arrow}>
                            <svg width="34px" height="8px" aria-label="">
                                <use href={sprite + '#icon-yellow-arrow'}></use>
                            </svg>
                        </li>
                        <li>
                            <svg width="24px" height="24px" aria-label="">
                                <use href={sprite + '#icon-directions_bus-2'}></use>
                            </svg>
                        </li>
                        <li>
                            <svg width="34px" height="8px" aria-label="">
                                <use href={sprite + '#icon-yellow-arrow'}></use>
                            </svg>
                        </li>
                        <li>
                            <svg width="24px" height="24px" aria-label="">
                                <use href={sprite + '#icon-directions_railway-2'}></use>
                            </svg>
                        </li>
                        <li>
                            <svg width="34px" height="8px" aria-label="">
                                <use href={sprite + '#icon-pink-arrow'}></use>
                            </svg>
                        </li>
                        <li>
                            <svg width="24px" height="24px" aria-label="">
                                <use href={sprite + '#icon-directions_railway-2'}></use>
                            </svg>
                        </li>
                        <li>
                            <svg width="34px" height="8px" aria-label="">
                                <use href={sprite + '#icon-pink-arrow'}></use>
                            </svg>
                        </li>
                        <li>
                            <svg width="24px" height="24px" aria-label="">
                                <use href={sprite + '#icon-flight-2'}></use>
                            </svg>
                        </li>
                        <li>
                            <svg width="34px" height="8px" aria-label="">
                                <use href={sprite + '#icon-blue-arrow'}></use>
                            </svg>
                        </li>
                        <li>
                            <img src={pink} alt="" width="17px" height="20px" />
                        </li>
                    </ul>
                    <ul className={css.routes}>
                        <li className={css.route}>
                            Залізничний вокзал “Чернівці”
                            <svg
                                width="3px"
                                height="6px"
                                aria-label=""
                                className={css.link__icon}
                            >
                                <use href={sprite + '#icon-yellow-link'}></use>
                            </svg>
                        </li>
                        <li className={css.route}>
                            Автовокзал Катовіце
                            <svg
                                width="3px"
                                height="6px"
                                aria-label=""
                                className={css.link__icon}
                            >
                                <use href={sprite + '#icon-yellow-link'}></use>
                            </svg>
                        </li>
                        <li className={css.route}>
                            Katowice Sadowa
                            <svg
                                width="3px"
                                height="6px"
                                aria-label=""
                                className={css.link__icon}
                            >
                                <use href={sprite + '#icon-pink-link'}></use>
                            </svg>
                        </li>
                        <li className={css.route}>
                            Wien
                            <svg
                                width="3px"
                                height="6px"
                                aria-label=""
                                className={css.link__icon}
                            >
                                <use href={sprite + '#icon-pink-link'}></use>
                            </svg>
                        </li>
                        <li className={css.route}>
                            Zurich (ZRH)
                            <svg
                                width="3px"
                                height="6px"
                                aria-label=""
                                className={css.link__icon}
                            >
                                <use href={sprite + '#icon-blue-link'}></use>
                            </svg>
                        </li>
                        <li className={css.route}>Lausanne (QLS)</li>
                        <li className={css.notification}>
                            <p>
                                <svg
                                    width="23px"
                                    height="22px"
                                    aria-label=""
                                    className={css.notification__image}
                                >
                                    <use href={sprite + '#icon-notification'}></use>
                                </svg>
                            </p>
                            Наразі через введення Правового режиму Воєнного стану в
                            Україні проходження кордону може займати більше часу! Читати
                            більше: dpsu.gov.ua
                        </li>
                        <div className={css.ticket__buttons}>
                            <button type="button" className={css.download__btn}>
                                <svg
                                    width="16px"
                                    height="16px"
                                    aria-label=""
                                    className={css.button__icon}
                                >
                                    <use href={sprite + '#icon-pdf'}></use>
                                </svg>
                                <span className={css.button__text}>Завантажити PDF</span>
                            </button>

                            <button type="button" className={css.search__btn}>
                                <svg
                                    width="16px"
                                    height="16px"
                                    aria-label=""
                                    className={css.button__icon}
                                >
                                    <use href={sprite + '#icon-search'}></use>
                                </svg>
                                <span className={css.button__text}> Відкрити деталі</span>
                            </button>
                        </div>
                    </ul>
                </div>
            </section>
        </>
    )
}