import gitHubIcon from "./assets/github.png";
import pokeAPIIcon from "./assets/api.png";
import bugIcon from "./assets/bug.png";
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
            <img
              src={pokeAPIIcon}
              className={styles.footer__icon}
              alt="Pokemon API logo"
              width="30"
              height="auto"
            />
            <span className={styles.footer__linkText}>PokeAPI</span>
          </a>
        </section>

        <section className={styles.footer__column}>
          <h2 className={styles.footer__title}>Come say hi</h2>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <a
                href="https://github.com/volodymyr-oros"
                className={styles.footer__link}
                aria-label="Go to GitHub"
              >
                <img
                  src={gitHubIcon}
                  className={styles.footer__icon}
                  alt="GitHub logo"
                  width="30"
                  height="auto"
                />
                <span className={styles.footer__linkText}>GitHub</span>
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.footer__column}>
          <h2 className={styles.footer__title}>Found any bugs?</h2>
          <a href="/" className={styles.footer__link} aria-label="Report a bug">
            <img
              src={bugIcon}
              className={styles.footer__icon}
              alt="Bug logo"
              width="30"
              height="auto"
            />
            <span className={styles.footer__linkText}>Report Bugs</span>
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
