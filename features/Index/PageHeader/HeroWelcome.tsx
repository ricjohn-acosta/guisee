import React from 'react';
import { Typography } from 'antd';
import styles from './HeroWelcome.module.css';

const HeroWelcome = () => (
  <header className={styles['hero-welcome-container']}>
    <div>
      <Typography.Title className={styles['hero-welcome-header']} level={1}>
        Unearth your true style
      </Typography.Title>
      <Typography.Title className={styles['hero-welcome-subheader']}>
        Discover different fashion styles or collaborate with others to find your own.
      </Typography.Title>
    </div>
  </header>
);

export default HeroWelcome;
