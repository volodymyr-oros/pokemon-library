import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__row}>
        <section className={styles.footer__column}>
          <h2 className={styles.footer__title}>Website uses PokeAPI</h2>
          <a
            href="https://pokeapi.co/"
            className={styles.footer__link}
            aria-label="Go to PokeAPI"
          >
            pokeapi.co
          </a>
        </section>

        <section className={styles.footer__column}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <a
                href="https://github.com/"
                className={styles.footer__link}
                aria-label="Go to GitHub"
              >
                <img
                  className={styles.footer__icon}
                  src="/icons/github.svg"
                  alt="GitHub logo"
                />
                <span className={styles.footer__linkText}>GitHub</span>
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.footer__column}>
          <h2 className={styles.footer__title}>Found any bugs?</h2>
          <a href="/" className={styles.footer__link}>
            Report Bugs
          </a>
        </section>
      </div>

      <div className={styles.footer__row}>
        <span className={styles.footer__copyright}>
          &copy; {new Date().getFullYear()} All rights reserved
        </span>
      </div>
    </div>
  );
}
