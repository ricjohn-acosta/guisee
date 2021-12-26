import React from 'react';
import {
  Col, Row, Avatar, Typography,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserBanner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '60px',
    paddingBottom: '30px',
  }}
  >
    <div>
      <Row>
        <Col><Avatar size={120} icon={<UserOutlined />} /></Col>
      </Row>
    </div>
    <div style={{ marginLeft: '40px' }}>
      <Row>
        <Col span={24}><Typography.Title level={1}>Arthur Pog</Typography.Title></Col>
        <Col style={{ marginTop: '10px' }} span={24}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span>
              <Typography style={{
                fontSize: '16px',
                fontWeight: 'bolder',
                marginRight: '5px',
              }}
              >
                172
              </Typography>
            </span>
            likes
            &nbsp;
            <span>
              <Typography style={{
                fontSize: '16px',
                fontWeight: 'bolder',
                marginRight: '5px',
              }}
              >
                32
              </Typography>
            </span>
            followers

            &nbsp;
            <span>
              <Typography style={{
                fontSize: '16px',
                fontWeight: 'bolder',
                marginRight: '5px',
              }}
              >
                21
              </Typography>
            </span>
            following
          </span>
        </Col>
      </Row>
    </div>
  </div>
);

export default UserBanner;
