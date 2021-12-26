import React from 'react';
import { Row, Col, Typography } from 'antd';

const FeaturedWorkCard = () => (
  <Row>
    <Col style={{ textAlign: 'center', display: 'flex' }} span={12}>
      <div style={{ margin: 'auto' }}>
        <Typography.Title level={4}>"Spaceman"</Typography.Title>
        <Typography>by davinki</Typography>
      </div>
    </Col>
    <Col span={12}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          src="https://images.unsplash.com/photo-1635865653470-8976db975eaf?w=500&h=500&fit=crop"
        />
      </div>
    </Col>
  </Row>
);

export default FeaturedWorkCard;
