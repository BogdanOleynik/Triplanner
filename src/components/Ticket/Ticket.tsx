import css from './Ticket.module.css';
import sprite from '../../images/sprite.svg';
import place from '../../images/place.svg';
import date from '../../images/date.svg';
import pink from '../../images/pink.svg';
import { Link, useLocation } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import logo from '../../images/search_logo.svg';
import { useEffect, useState } from 'react';
import { useGetCitiesQuery, useLazyGetTicketsQuery } from '../../store/triplanner/triplanner.api';
import { useCitySuggest } from '../../hooks/debounce';
import { TicketOffered } from '../TicketOffered/TicketOffered';

export interface SearchParams {
    fromId: string;
    toId?: string;
    departureTime?: Date;
    arrivalTime?: Date;
    type?: string;
}

export function Ticket() {
    const [fromSearch, setFromSearch] = useState('')
    const [toSearch, setToSearch] = useState('')

    const [dropdownFrom, setDropdownFrom] = useState(false)
    const [dropdownTo, setDropdownTo] = useState(false)

    const [fromCitySuggest, toCitySuggest] = useCitySuggest(fromSearch, toSearch)

    const fromData = useGetCitiesQuery(fromCitySuggest, {
        skip: fromCitySuggest.length < 1,
        refetchOnFocus: true
    }).data

    const toData = useGetCitiesQuery(toCitySuggest, {
        skip: toCitySuggest.length < 1,
        refetchOnFocus: true
    }).data

    useEffect(() => {
        setDropdownFrom(fromCitySuggest.length > 0 && fromData?.length! > 0 && fromData?.findIndex((c) => c.name === fromSearch) === -1)
    }, [fromCitySuggest, fromData, fromSearch])

    useEffect(() => {
        setDropdownTo(toCitySuggest.length > 0 && toData?.length! > 0 && toData?.findIndex((c) => c.name === toSearch) === -1)
    }, [toCitySuggest, toData, toSearch])

    const clickHandlerFrom = (cityName: string) => {
        setFromSearch(cityName)
        setDropdownFrom(false)
    }

    const clickHandlerTo = (cityName: string) => {
        setToSearch(cityName)
        setDropdownTo(false)
    }
    const location = useLocation();
    return (
        <>
            <div className={css.ticket__header}>
                <div className={css.ticket__container}>
                    <div className={css.ticket}>
                        <div className={css.main__direction__bg}>
                            <ul className={css.directions__thumb}>
                                <li className={css.all__transport}>
                                    <svg
                                        width="62px"
                                        height="25px"
                                        aria-label=""
                                        className={css.highlighted__direction}
                                    >
                                        <use href={sprite + '#icon-directions_transport'}></use>
                                    </svg>
                                </li>
                                <li className={css.directions__transport}>
                                    <svg width="62px" height="25px" aria-label="">
                                        <use href={sprite + '#icon-background_flight'}></use>
                                        <use href={sprite + '#icon-directions-flight'}></use>
                                    </svg>
                                </li>
                                <li className={css.directions__transport}>
                                    <svg width="62px" height="25px" aria-label="">
                                        <use href={sprite + '#icon-background_railway'}></use>
                                        <use href={sprite + '#icon-directions_railway'}></use>
                                    </svg>
                                </li>
                                <li className={css.directions__transport}>
                                    <svg width="62px" height="25px" aria-label="">
                                        <use href={sprite + '#icon-background_bus'}></use>
                                        <use href={sprite + '#icon-directions_bus'}></use>
                                    </svg>
                                </li>
                                <li className={css.directions__transport}>
                                    <svg width="62px" height="25px" aria-label="">
                                        <use href={sprite + '#icon-background_shelter'}></use>
                                        <use href={sprite + '#icon-directions_shelter'}></use>
                                    </svg>
                                </li>
                                <li className={css.directions__transport}>
                                    <svg width="62px" height="25px" aria-label="">
                                        <use href={sprite + '#icon-background_attractions'}></use>
                                        <use href={sprite + '#icon-directions_attractions'}></use>
                                    </svg>
                                </li>
                                <li className={css.directions__transport}>
                                    <svg width="62px" height="25px" aria-label="">
                                        <use href={sprite + '#icon-background_car'}></use>
                                        <use href={sprite + '#icon-directions_car'}></use>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className={css.search}>
                                <li className={css.search__from}>
                                    <img
                                        src={place}
                                        alt=""
                                        className={css.input__icon}
                                        width="22px"
                                        height="24px"

                                    />
                                    <input
                                        type="text"
                                        placeholder="Чернівці, Україна"
                                        autoComplete="off"
                                        autoFocus
                                        value={fromSearch}
                                        onChange={e => setFromSearch(e.target.value)}
                                        className={css.input__direction}
                                    />
                                    {dropdownFrom && <ul className={css.dropdown__list}>
                                        {fromData?.map(city => (
                                            <li
                                                key={city.id}
                                                onClick={() => clickHandlerFrom(city.name)}
                                                className={css.dropdown__list__item}
                                            >{city.name}</li>
                                        ))}
                                    </ul>}
                                </li>

                                <li className={css.input__wrapper}>
                                    <svg
                                        width="19px"
                                        height="19px"
                                        aria-label=""
                                        className={css.add}
                                    >
                                        <use href={sprite + '#icon-add'}></use>
                                    </svg>
                                    <img
                                        src={place}
                                        alt=""
                                        className={css.input__icon}
                                        width="22px"
                                        height="24px"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Lausanne, Schweiz (QLS)"
                                        autoComplete="off"
                                        autoFocus
                                        value={toSearch}
                                        onChange={e => setToSearch(e.target.value)}
                                        className={css.input__direction}
                                    />
                                    {dropdownTo && <ul className={css.dropdown__list}>
                                        {toData?.map(city => (
                                            <li
                                                key={city.id}
                                                onClick={() => clickHandlerTo(city.name)}
                                                className={css.dropdown__list__item}
                                            >{city.name}</li>
                                        ))}
                                    </ul>}
                                    <svg
                                        width="19px"
                                        height="19px"
                                        aria-label=""
                                        className={css.arrows__direction}
                                    >
                                        <use href={sprite + '#icon-arrows-direction'}></use>
                                    </svg>
                                </li>
                            </ul>
                            <ul className={css.search__dates}>
                                <li className={css.search__date}>
                                    <img
                                        src={date}
                                        alt=""
                                        className={css.input__icon}
                                        width="22px"
                                        height="24px"
                                    />
                                    <input
                                        type="text"
                                        autoComplete="off"
                                        autoFocus
                                        placeholder="01.09.2022"
                                        className={css.input__date}
                                    />
                                </li>

                                <li className={css.search__date}>
                                    <img
                                        src={date}
                                        alt=""
                                        className={css.input__icon}
                                        width="22px"
                                        height="24px"
                                    />
                                    <input
                                        type="text"
                                        autoComplete="off"
                                        autoFocus
                                        placeholder="Назад"
                                        className={css.input__date}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className={css.transport__thumb}>
                            <ul className={css.radiobuttons__options}>
                                <li className={css.transport__option}>
                                    <label className={css.radio__route__label}>
                                        <input
                                            type="radio"
                                            id="route__check"
                                            className={css.radio__route__input}
                                        />
                                        шукати всі види транспорту
                                    </label>
                                </li>
                                <li className={css.transport__option}>
                                    <label className={css.radio__route__label}>
                                        <input
                                            type="radio"
                                            id="route__check"
                                            className={css.radio__route__input}
                                        />
                                        автобуси
                                    </label>
                                </li>
                            </ul>
                            <ul className={css.radiobuttons}>
                                <li className={css.transport__option}>
                                    <label className={css.radio__route__label}>
                                        <input
                                            type="radio"
                                            id="route__check"
                                            className={css.radio__route}
                                        />
                                        авіаперельоти
                                    </label>
                                </li>
                                <li className={css.transport__option}>
                                    <label className={css.radio__route__label}>
                                        <input
                                            type="radio"
                                            id="route__check"
                                            className={css.radio__route}
                                        />
                                        залізниця
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className={css.transport__filter__thumb}>
                            <ul className={css.transport__filter}>
                                <button
                                    type="button"
                                    className={css.transport__filter__results}
                                >
                                    всі результати
                                </button>
                                <button type="button" className={css.transport__filter__btn}>
                                    найдешевші
                                </button>
                                <button type="button" className={css.transport__filter__btn}>
                                    найшвидші
                                </button>
                                <button type="button" className={css.transport__filter__btn}>
                                    рекомендуємо!
                                </button>
                            </ul>
                        </div>
                        <TicketOffered></TicketOffered>
                        <TicketOffered></TicketOffered>
                        <TicketOffered></TicketOffered>
                    </div>
                </div>
                <div className={css.navigation}>
                    <Link to={`/`} state={{ from: location }} >
                        <img
                            src={logo}
                            alt=""
                            className={css.logo}
                            width="126px"
                            height="30px"
                        />
                    </Link>
                    <Navigation />
                </div>

            </div>
        </>
    );
}
