import React from 'react';
import { Layout } from 'antd';
import NavBar from '../Navigation/Header/NavBar';
import styles from './PageLayout.module.css';
import PageFooter from '../Navigation/Footer/PageFooter';

const {
  Header, Footer, Content,
} = Layout;

interface PageLayoutProps {
  children?: any,
  background?: string
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, background }) => (
  <Layout className={styles.layout}>
    <Header className={styles['header-container']}><NavBar /></Header>
    <Content style={{ background }} className={styles['content-container']}>{children}</Content>
    <Footer className={styles['footer-container']}><PageFooter /></Footer>
  </Layout>
);

export default PageLayout;
