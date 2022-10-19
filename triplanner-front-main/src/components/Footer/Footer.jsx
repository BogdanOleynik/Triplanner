import css from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <section className={css.footer__background}>
        <div className={css.links__thumb}>
          <li className={css.triplanner}>TriPlanner (c) 2022</li>
          <ul className={css.conditions}>
            <li className={css.link}>
              <a href="/#" className={css.footer__links}>
                Політика конфіденційності
              </a>
            </li>
            <li className={css.link}>
              <a href="/#" className={css.footer__links}>
                Умови повернення
              </a>
            </li>
            <li className={css.link}>
              <a href="/#" className={css.footer__links}>
                Політика Cookie
              </a>
            </li>
          </ul>

          <ul>
            <li className={css.link}>
              <a href="/#" className={css.footer__links}>
                Згода на обробку даних
              </a>
            </li>
            <li className={css.link}>
              <a href="/#" className={css.footer__links}>
                Публічна оферта
              </a>
            </li>
          </ul>

          <ul>
            <li className={css.link}>
              <a href="/#" className={css.footer__links}>
                Контакти
              </a>
            </li>
            <li className={css.link}>
              <a href="/#" className={css.footer__links}>
                Про нас
              </a>
            </li>
            <li className={css.link}>
              <a href="/#" className={css.footer__links}>
                Допомога
              </a>
            </li>
            <li className={css.link}>
              <a href="/#" className={css.footer__links}>
                Співробітництво
              </a>
            </li>
          </ul>
          <ul>
            <li className={css.link}>
              <a href="/#" className={css.footer__links}>
                Мапа сайту
              </a>
            </li>
            <li className={css.link}>
              <a href="/#" className={css.footer__links}>
                Мапа COVID-правил
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
