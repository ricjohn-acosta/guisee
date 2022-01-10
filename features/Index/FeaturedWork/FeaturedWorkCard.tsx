import React from 'react';
import { Row, Col, Typography } from 'antd';

const FeaturedWorkCard = () => (
  <Row>
    <Col style={{ textAlign: 'center', display: 'flex' }} span={12}>
      <div style={{ margin: 'auto' }}>
        <Typography.Title level={4}>Featured outfit</Typography.Title>
        <Typography.Title level={3}>davinki</Typography.Title>
      </div>
    </Col>
    <Col
      style={{
        display: 'flex', justifyContent: 'center',
      }}
      span={12}
    >
      <div style={{
        width: '450px', height: '450px',
      }}
      >
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          src="https://media.gq-magazine.co.uk/photos/5d31ce282cb3030009e3a980/master/w_1600%2Cc_limit/20190719-NASA-02_b.jpg"
        />
      </div>
    </Col>
  </Row>
);

export default FeaturedWorkCard;
