import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import styles from './ProfilePage.module.css';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../components/UI/Modal/Modal';
import { AuthPage } from '../Auth/AuthPage';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authslice';

export const ProfilePage = ({ onLogout }) => {

    const [isProfileModalOpen, setProfileModalOpen] = useState(false);

    //const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const openProfileModal = () => setProfileModalOpen(true);
    const closeProfileModal = () => setProfileModalOpen(false);

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const dispath = useDispatch();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        } else {
            setProfileModalOpen(true);
        }
    }, []);


    const handleLogout = () => {
        dispath(logout());
        navigate('/');
    };

    if (user === null) {
        return (
            <>
                <Header />
                <div className={styles.loadingMessage}>Checking user data...</div>
                <Footer />
                <Modal isOpen={isProfileModalOpen} onClose={() => setProfileModalOpen(false)}>
                    <AuthPage />
                </Modal>
            </>
        );
    }


    return (
        <>
            <Header />
            <div className={styles.profileContainer}>
                <h1 className={styles.profileTitle}>Profile</h1>
                <div className={styles.userInfo}>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Surname:</strong> {user.surname}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
                <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
            </div>
        <Footer />

        <Modal isOpen={isProfileModalOpen} onClose={closeProfileModal}>
        <AuthPage />
      </Modal>
        </>
    );
};
