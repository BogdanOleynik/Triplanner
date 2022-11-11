import {Header} from "../../Header/Header"
import css from "./SiteMap.module.css"
import { Link, useLocation } from 'react-router-dom';

export default function SiteMap() {
    const location = useLocation();
    return (
        <>
            <section className={css.hero}>
                <Header></Header>
                <div className={css.map}>
                    <div className={css.navbuttons}>
                        <ul className={css.links}>
                            <li>
                                <a href="#">
                                    <div className={css.flight}>

                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className={css.railway}>

                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className={css.bus}>

                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className={css.shelter}>

                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className={css.car}>

                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={css.sitemap}>
                        <div className={css.sitemap_info}>
                            Карта сайту
                        </div>
                        <div className={css.leftlist}>
                            <ul className={css.left}>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучені Штати – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Мексика – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучені Штати – Канада
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучені Штати – Китай
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Японія – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучені Штати – Італія
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучені Штати – Іспанія
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Німеччина – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучені Штати – Бразилія
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Колумбія – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучені Штати – Домініканська Республіка
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучене Королівство – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Іспанія – Сполучене Королівствo
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Мексика – Канада
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Греція – Франція
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Іспанія – Польща
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Гватемала – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Іспанія – Сполучене Королівствo
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Мексика – Канада
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Греція – Франція
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.leftlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Іспанія – Китай
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={css.rightlist}>
                            <ul className={css.right}>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучені Штати – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Мексика – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучені Штати – Канада
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучені Штати – Китай
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Японія – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучені Штати – Італія
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучені Штати – Іспанія
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Німеччина – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучені Штати – Бразилія
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Колумбія – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучені Штати – Домініканська Республіка
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Сполучене Королівство – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Іспанія – Сполучене Королівствo
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Мексика – Канада
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Греція – Франція
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Іспанія – Польща
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Гватемала – Сполучені Штати
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Іспанія – Сполучене Королівствo
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Мексика – Канада
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Греція – Франція
                                        </a>
                                    </Link>
                                </li>
                                <li className={css.rightlink}>
                                    <Link
                                        to={`/tickets/ticketId`}
                                        state={{ from: location }}
                                    >
                                        <a href="#">
                                            Рейси Іспанія – Китай
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link
                            to={`/homeauthed`}
                            state={{ from: location }}
                        >
                            <a href="/#">
                                <div className={css.buttonlink}>

                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}