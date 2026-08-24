import React from "react";
import { House } from "./components/House/House";
import styles from "./Main.module.css";

export const Main: React.FC = () => {
  return <div className={styles.mainPage}><House></House></div>;
};
