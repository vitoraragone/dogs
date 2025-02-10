import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Dogs from "../Assets/dogs.svg?react";
import { useContext } from "react";
import { UserContext } from "../userContext";

const Header = () => {
  const { data } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.username}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
