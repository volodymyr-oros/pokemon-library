import LanguageSwitcher from "@component/LanguageSwitcher/LanguageSwitcher";
import logo from "./assets/logo.png";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={`${styles.header__logo} ${styles.logo}`}>
        <a
          href="/"
          className={styles.logo__link}
          aria-label="Go to homepage"
          data-testid="logo"
        >
          <img
            src={logo}
            className={styles.logo__img}
            alt="Pokemon Library Logo"
            width="150"
            height="auto"
          />
        </a>
      </div>
      <LanguageSwitcher />
    </div>
  );
}
