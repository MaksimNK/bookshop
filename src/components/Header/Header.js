import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";
import { CiSearch, CiBookmark } from "react-icons/ci";
import { PiUserCircleDuotone } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Modal } from "../UI/Modal/Modal";
import { AuthPage } from "../../pages/Auth/AuthPage";
import { Logo } from "../UI/Logo/Logo";

export const Header = () => {
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const openProfileModal = () => setProfileModalOpen(true);
  const closeProfileModal = () => setProfileModalOpen(false);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navbarList}>
            <li><Link to="/"><Logo /></Link></li>
            <li><Link to="/catalog">Каталог</Link></li>
            <li><Link to="/delivery">Доставка и оплата</Link></li>
            <li><Link to="/about">О нас</Link></li>
          </ul>
        </nav>

        <nav>
          <ul className={styles.navbarIconList}>
            <li>
              <Link to="/search">
                <CiSearch className={styles.icon} />
              </Link>
            </li>
            <li>
            {isAuthenticated ? (
                <Link to="/profile">
                  <PiUserCircleDuotone className={styles.icon} />
                </Link>
              ) : (
                <button
                  onClick={openProfileModal}
                  className={styles.iconButton}
                >
                  <PiUserCircleDuotone className={styles.icon} />
                </button>
              )}
            </li>
            <li>
              {isAuthenticated ? (
                <Link to="/basket">
                  <MdOutlineShoppingCart className={styles.icon} />
                </Link>
              ) : (
                <button
                  onClick={openProfileModal}
                  className={styles.iconButton}
                >
                  <MdOutlineShoppingCart className={styles.icon} />
                </button>
              )}
            </li>
            <li>
              {isAuthenticated ? (
                <Link to="/favorites">
                  <CiBookmark className={styles.icon} />
                </Link>
              ) : (
                <button
                  onClick={openProfileModal}
                  className={styles.iconButton}
                >
                  <CiBookmark className={styles.icon} />
                </button>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <Modal isOpen={isProfileModalOpen} onClose={closeProfileModal}>
        <AuthPage />
      </Modal>
    </>
  );
};
