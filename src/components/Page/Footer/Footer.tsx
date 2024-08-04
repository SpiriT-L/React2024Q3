import Link from 'next/link';
import discord from '../../../../public/discord.svg';
import github from '../../../../public/github.svg';
import rss from '../../../../public/rss.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerBlock}>
            <div className={styles.discord}>
              <Link href="//discordapp.com/users/795219921138483201">
                <img
                  className={styles.discordImg}
                  src={discord.src}
                  alt="Discord"
                />
              </Link>
            </div>
            <div className={styles.rss}>
              <Link href="//rs.school/courses/reactjs">
                <img className={styles.rssImg} src={rss.src} alt="RS School" />
              </Link>
            </div>
            <div className={styles.github}>
              <Link href="//github.com/SpiriT-L">
                <img
                  className={styles.githubImg}
                  src={github.src}
                  alt="GitHub"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
