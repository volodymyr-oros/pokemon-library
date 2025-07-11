import Header from "@component/Header/Header";
import Footer from "@component/Footer/Footer";

import type { MainLayoutProps } from "@layout-type/MainLayoutProps";

import styles from "./MainLayout.module.scss";

export default function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className={`${className} ${styles.template}`}>
      <header className={styles.template__header}>
        <Header />
      </header>
      <main className={styles.template__page}>{children}</main>
      <footer className={styles.template__footer}>
        <Footer />
      </footer>
    </div>
  );
}
