import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <nav>
        <Link className={styles["link"]} href="/">
          Home
        </Link>
        <Link className={styles["link"]} href="/about">
          About
        </Link>
        <Link className={styles["link"]} href="/contacts">
          Contacts
        </Link>
        <Link className={styles["link"]} href="/blog">
          Blog
        </Link>
      </nav>
    </div>
  );
};

export default Header;
