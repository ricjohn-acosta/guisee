import React from 'react';
import { Col, Row } from 'antd';
import ImageUploaders from './ImageUploaders';
import ImagePreviews from './ImagePreviews';

const ImageUploadContainer: React.FC = () => (
  <div>
    <Row>
      <Col span={24}>
        <ImageUploaders />
      </Col>
      <Col span={24}>
        <ImagePreviews />
      </Col>
    </Row>
  </div>
);

export default ImageUploadContainer;
