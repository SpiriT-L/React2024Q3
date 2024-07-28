import { Link, useLocation } from 'react-router-dom';
import img from './img/404.png';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const location = useLocation();
  return (
    <main>
      <h2 className={styles.title}>Not Found Page</h2>
      <img className={styles.notFoundPage} src={img} alt="404 Not Found Page" />
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
      <p className={styles.text}>
        <Link to="/">Go back to the homepage</Link>
      </p>
    </main>
  );
};

export default NotFoundPage;
