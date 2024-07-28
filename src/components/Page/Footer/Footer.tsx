import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import discord from './img/discord.svg';
import github from './img/github.svg';
import rss from './img/rss.svg';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerBlock}>
            <div className={styles.discord}>
              <Link to="//discordapp.com/users/795219921138483201">
                <img
                  className={styles.discordImg}
                  src={discord}
                  alt="Discord"
                />
              </Link>
            </div>
            <div className={styles.rss}>
              <Link to="//rs.school/courses/reactjs">
                <img className={styles.rssImg} src={rss} alt="RS School" />
              </Link>
            </div>
            <div className={styles.github}>
              <Link to="//github.com/SpiriT-L">
                <img className={styles.githubImg} src={github} alt="GitHub" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
