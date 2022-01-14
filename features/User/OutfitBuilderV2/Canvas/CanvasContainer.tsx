import React from 'react';
import { Col, Row } from 'antd';
import styles from './CanvasContainer.module.scss';
import Toolbar from './Toolbar';
import Canvas from './Canvas';

const CanvasContainer: React.FC = () => (
  <div className={styles['canvas-container']}>
    <Row>
      <Col
        span={24}
      >
        <Toolbar />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <Canvas />
      </Col>
    </Row>
  </div>
);

export default CanvasContainer;
