import React from "react";
import styles from "./sidebar.module.scss";
import { Items } from "../../assets/icons/Items";
import { Timeline } from "../../assets/icons/Timeline";
import { Book } from "../../assets/icons/Book";
import { Settings } from "../../assets/icons/Settings";
import { Message } from "../../assets/icons/Message";
import { Files } from "../../assets/icons/Files";
export const SideBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo_wrapper}>
        <img className={styles.logo} src="./logo.png" />
      </div>
      <div className={styles.items}>
        <div className={styles.item_wrapper}>
          <Items className={styles.item} size={20} />
        </div>
        <div className={styles.item_wrapper}>
          <Timeline className={styles.item} size={20} />
        </div>
        <div className={styles.item_wrapper}>
          <Book className={styles.item} size={20} />
        </div>
        <div className={styles.item_wrapper}>
          <Settings className={styles.item} size={20} />
        </div>
        <div className={styles.item_wrapper}>
          <Message className={styles.item} size={20} />
        </div>
        <div className={styles.item_wrapper}>
          <Files className={styles.item} size={20} />
        </div>
      </div>
    </div>
  );
};
