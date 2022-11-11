import css from "./Auth.module.css"
import AuthHeader from "../AuthHeader/AuthHeader"
import { Link, useLocation } from 'react-router-dom';

export default function Auth() {
    const location = useLocation();
    return (
        <>
            <section className={css.hero}>
                <AuthHeader></AuthHeader>
                <div className={css.container}>
                    <div className={css.navbuttons}>
                        <ul className={css.links}>
                            <li>
                                <Link
                                    to={`/auth`}
                                    state={{ from: location }}
                                >
                                    <a href="#">
                                        <div className={css.auth}>

                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/reg`}
                                    state={{ from: location }}
                                >
                                    <a href="#">
                                        <div className={css.reg}>

                                        </div>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={css.login_content}>
                        <div className={css.social}>
                            <p>Увійти через</p>
                            <ul className={css.social_log}>
                                <li><button className={css.google}></button></li>
                                <li><button className={css.facebook}></button></li>
                            </ul>
                            <p>Або</p>
                            <ul className={css.inputs}>
                                <li>
                                    <input type="email" placeholder="Адреса електронної пошти" className={css.enter} />
                                </li>
                                <li>
                                    <input type="password" placeholder="Пароль" className={css.enter} />
                                    <br></br>
                                    <a href='#' className={css.forgot}>Забули пароль?</a>
                                </li>
                                <li>
                                    <input type="radio" className={css.radiobutton} />
                                    <label className={css.attention}> Запам'ятати мене
                                    </label>
                                </li>
                                <li>
                                    <Link
                                        to={`/`}
                                        state={{ from: location }}
                                    >
                                        <button type="submit" className={css.btn_login}>Увійти</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}