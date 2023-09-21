import React from "react";
import styles from './Header.module.css';
import igniteLogo from '../assets/logo.svg'

export class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <img src={igniteLogo} alt="Ignite Logo" />
      </header>
    )
  }
}