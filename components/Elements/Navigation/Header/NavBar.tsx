import React from 'react';
import { Menu, Button, Typography } from 'antd';
import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar = () => (
  <div>
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <Typography.Title style={{
            marginTop: '5px',
            cursor: 'pointer',
          }}
          >
            guisee
          </Typography.Title>
        </a>
      </Link>
    </div>
    <Menu className={styles['navbar-menu-container']} mode="horizontal">
      <Menu.Item>About</Menu.Item>
      <Menu.Item>Sign up</Menu.Item>
      <Menu.Item style={{ borderBottom: 'none' }}>
        <Button type="primary">
          Sign
          in
        </Button>
      </Menu.Item>
    </Menu>
  </div>
);

export default NavBar;
