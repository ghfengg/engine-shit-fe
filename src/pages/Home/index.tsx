import bannerImg from '@/assets/banner2.jpeg';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Avatar, Button, Carousel } from 'antd';
import React from 'react';
import { Link } from 'umi';
import styles from './index.less';

import battle1 from '@/assets/battle/battle1.jpeg';
import battle2 from '@/assets/battle/battle2.jpeg';
import battle3 from '@/assets/battle/battle3.jpeg';
import battle4 from '@/assets/battle/battle4.jpeg';

import greenTeck from '@/assets/judges/gt.jpg';
import mrWiggles from '@/assets/judges/MrWiggles.jpg';
import pete from '@/assets/judges/pete.jpg';
import poppinC from '@/assets/judges/poppinC.jpg';
import salah from '@/assets/judges/salah.jpg';

const HomePage: React.FC = () => {
  const carouselRef = React.useRef<any>(null);
  const [showPrev, setShowPrev] = React.useState(false);
  const [showNext, setShowNext] = React.useState(true);

  const battleCards = [
    {
      title: 'Engine Shit VOL.7.0',
      subtitle: 'Meet the Crew Members',
      image: battle1,
    },
    {
      title: 'Engine Shit VOL.8.0',
      subtitle: 'Dynamic Dance Shows',
      image: battle2,
    },
    {
      title: 'Engine Shit VOL.9.0',
      subtitle: 'Music & Dance Fusion',
      image: battle3,
    },
    {
      title: 'Engine Shit VOL.10.0',
      subtitle: 'Passion for Street Dance',
      image: battle4,
    },
    {
      title: 'Engine Shit VOL.11.0',
      subtitle: 'Passion for Street Dance',
      image: battle1,
    },
    {
      title: 'Engine Shit VOL.10.0',
      subtitle: 'Passion for Street Dance',
      image: battle2,
    },
  ];

  const ogMembers = [
    { name: 'GreenTeck', avatar: greenTeck, title: 'Popping Master' },
    { name: 'Salah', avatar: salah, title: 'Electric Boogaloo' },
    { name: 'Mr Wiggles', avatar: mrWiggles, title: 'Breaking Pioneer' },
    { name: 'Popin Pete', avatar: pete, title: 'Electric Boogaloo' },
    { name: 'Popping C', avatar: poppinC, title: 'Popping' },
  ];

  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setShowPrev(newIndex > 0);
    setShowNext(newIndex < battleCards.length - 4);
  };

  return (
    <div className={styles.container}>
      {/* 顶部导航 */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>Engine Shit</div>
        <div className={styles.navLinks}>
          <a href="#">About Us</a>
          <a href="#">Battle Culture</a>
          <Link to="/judgeSystem">Judge System</Link>
          <a href="#">Shop</a>
        </div>
        <div className={styles.auth}>
          <Button>Contact Us</Button>
          {/* <Button type="primary">Sign up</Button> */}
        </div>
      </nav>

      {/* 英雄区块 */}
      <section
        className={styles.hero}
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={styles.heroContent}>
          <h1>Immerse in the World of Dance Battles!</h1>
          <p>Join the Dance Community</p>
          <Button type="primary" size="large">
            Join Now
          </Button>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.dancerSilhouette}></div>
        </div>
      </section>

      {/* 舞蹈展示区 */}
      <section className={styles.battles}>
        <h2>热门Battle赛事</h2>
        <div className={styles.battleCarousel}>
          {showPrev && (
            <Button
              className={styles.prevButton}
              icon={<LeftOutlined />}
              onClick={() => carouselRef.current?.prev()}
            />
          )}
          <Carousel
            ref={carouselRef}
            slidesToShow={4}
            dots={false}
            infinite={false}
            beforeChange={handleBeforeChange}
          >
            {battleCards.map((card, index) => (
              <div key={index} className={styles.battleCard}>
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>
            ))}
          </Carousel>
          {showNext && (
            <Button
              className={styles.nextButton}
              icon={<RightOutlined />}
              onClick={() => carouselRef.current?.next()}
            />
          )}
        </div>
      </section>

      {/* Battle赛事区域后添加 */}
      <section className={styles.ogSection}>
        <h2>Judges Show</h2>
        <div className={styles.ogGrid}>
          {ogMembers.map((member, index) => (
            <div key={index} className={styles.ogCard}>
              <Avatar
                size={120}
                src={member.avatar}
                className={styles.ogAvatar}
              />
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 页脚 */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>Main Sponser</div>
          <div className={styles.footerLinks}>
            <a href="#">杭州·电胶囊街舞Studio</a>
            <a href="#">漳州·舞法S街舞POPPING馆</a>
          </div>
          <div className={styles.copyright}>©Engine Shit 2025</div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
