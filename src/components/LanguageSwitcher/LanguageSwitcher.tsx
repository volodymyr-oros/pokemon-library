import { useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./LanguageSwitcher.module.scss";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setCurrentLanguage(value);
    i18n.changeLanguage(value);
  };

  return (
    <div className={styles.switcher}>
      <label className={styles.switcher__label} htmlFor="selector">
        {t("languageSwitcher.label")}:
      </label>

      <select
        onChange={handleLanguageChange}
        className={styles.switcher__selector}
        name="Selectlanguage"
        id="selector"
        value={currentLanguage}
      >
        <option value="en">{t("languageSwitcher.enOption")}</option>
        <option value="uk">{t("languageSwitcher.ukOption")}</option>
      </select>
    </div>
  );
}
