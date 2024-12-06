import { Footer } from '../../components/Footer/Footer.js';
import { Header } from '../../components/Header/Header.js';
import styles from './PageNotFound.module.css';

export const PageNotFound = () => {
    return (
        <div className={styles.pageNotFound}>
            <Header />
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <Footer />
        </div>
    );
};
