import gitHubIcon from "./assets/github.png";
import pokeAPIIcon from "./assets/api.png";
import bugIcon from "./assets/bug.png";

import { useTranslation } from "react-i18next";

import styles from "./Footer.module.scss";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      <div className={styles.footer__row}>
        <section className={styles.footer__column}>
          <h2 className={styles.footer__title}>{t("footer.pokeapiTitle")}</h2>
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
          <h2 className={styles.footer__title}>{t("footer.comeSayHi")}</h2>
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
                <span className={styles.footer__linkText}>
                  {t("footer.github")}
                </span>
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.footer__column}>
          <h2 className={styles.footer__title}>{t("footer.reportBugs")}</h2>
          <a href="/" className={styles.footer__link} aria-label="Report a bug">
            <img
              src={bugIcon}
              className={styles.footer__icon}
              alt="Bug logo"
              width="30"
              height="auto"
            />
            <span className={styles.footer__linkText}>
              {t("footer.report")}
            </span>
          </a>
        </section>
      </div>

      <div className={styles.footer__row}>
        <span className={styles.footer__copyright}>
          &copy; {new Date().getFullYear()} {t("footer.copyright")}
        </span>
      </div>
    </div>
  );
}
