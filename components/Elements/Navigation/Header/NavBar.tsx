import React from 'react';
import {
  Menu, Button, Typography, Avatar, Row, Col, Input,
} from 'antd';
import Link from 'next/link';
import {
  BellOutlined, InboxOutlined, PlusOutlined, SearchOutlined, UserOutlined,
} from '@ant-design/icons';
import styles from './NavBar.module.css';
import useModal from '../../../../hooks/useModal';
import AuthModal from '../../../../features/Authentication/AuthModal';

const NavBar = () => {
  const [modalOpen, setModalOpen, toggleModal] = useModal();

  const authenticated = false;

  const displayMenuItems = () => {
    if (!authenticated) {
      return (
        <>
          <Menu.Item><Typography style={{ fontWeight: 'bolder' }}>Login</Typography></Menu.Item>
          <Menu.Item style={{ borderBottom: 'none' }}>
            <Button onClick={toggleModal} type="primary">
              Sign
              up
            </Button>
            <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} />
          </Menu.Item>
        </>
      );
    }
    return (
      <Row style={{ alignItems: 'center' }} gutter={[18, 0]}>
        <Col style={{ paddingTop: '10px' }}><InboxOutlined style={{ fontSize: '24px' }} /></Col>
        <Col style={{ paddingTop: '10px' }}><BellOutlined style={{ fontSize: '24px' }} /></Col>
        <Col>
          <Avatar
            style={{ fontSize: '24px' }}
            icon={<UserOutlined style={{ fontSize: '24px' }} />}
          />
        </Col>
        <Col>
          <Link href="/posts/new">
            <a>
              <Button type="primary" icon={<PlusOutlined />}>
                New post
              </Button>
            </a>
          </Link>
        </Col>
      </Row>
    );
  };

  return (
    <div>
      <Row>
        <Col span={2}>
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
        </Col>
        <Col style={{ paddingLeft: '20px' }} span={6}>
          <Menu style={{ height: '100%', display: 'flex', alignItems: 'center' }} mode="horizontal">
            <Menu.Item style={{ height: '100%', display: 'flex', alignItems: 'center' }}><Typography style={{ fontWeight: 'bolder' }}>About</Typography></Menu.Item>
            <Menu.Item style={{ height: '100%', display: 'flex', alignItems: 'center' }}><Typography style={{ fontWeight: 'bolder' }}>Be a contributor!</Typography></Menu.Item>
          </Menu>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} span={8}>
          <Input prefix={<SearchOutlined />} style={{ width: '350px' }} placeholder="Search the site" />
        </Col>
        <Col span={8}>
          <Menu className={styles['navbar-menu-container']} mode="horizontal">
            {displayMenuItems()}
          </Menu>
        </Col>

      </Row>

    </div>
  );
};
export default NavBar;
