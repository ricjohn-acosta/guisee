import React from 'react';
import { Col, Row } from 'antd';
import styles from './OutfitBuilderContainer.module.scss';
import ImageUploadContainer from './Uploader/ImageUploadContainer';
import CanvasContainer from './Canvas/CanvasContainer';

const OutfitBuilder = () => (
  <div className={styles['outfit-builder-container']}>
    <Row gutter={[12, 0]}>
      <Col span={4}>
        <ImageUploadContainer />
      </Col>
      <Col span={20}>
        <CanvasContainer />
      </Col>
    </Row>
  </div>
);

export default OutfitBuilder;
