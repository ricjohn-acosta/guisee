import React from 'react';
import {
  Avatar, Button, Col, Row, Tag, Typography,
} from 'antd';
import {
  AppstoreOutlined, EyeFilled, HeartFilled, UserOutlined,
} from '@ant-design/icons';
import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from 'chart.js';
import { GalleryCardProps } from '../../Index/ArtGallery/Gallery/GalleryCard';
import Comments from './Comments';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const StyleRequest: React.FC<GalleryCardProps> = () => (
  <div>
    <Row>
      <Col
        style={{
          height: '100vh',
          position: 'sticky',
          top: '0',
          padding: '60px 30px',
        }}
        span={12}
      >
        <div style={{
          height: '100%',
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto',
        }}
        >
          <Typography.Title level={1}>
            What do you guys think about the state of fashion?
          </Typography.Title>
        </div>
      </Col>
      <Col
        style={{ background: '#f8f8f8' }}
        span={12}
      >
        <Row>
          <Col span={24}>
            <div style={{
              padding: '60px 60px',
            }}
            >
              <Row>
                <Col span={15}>
                  <div style={{

                    marginBottom: '50px',
                  }}
                  >
                    <Typography.Title
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      level={2}
                    >
                      <Avatar size="large" icon={<UserOutlined />} />
                      &nbsp;
                      Arthur1
                    </Typography.Title>
                    <Typography.Title
                      level={5}
                      style={{
                        fontWeight: 'lighter',
                        marginTop: '5px',
                      }}
                    >
                      November 12, 2021
                    </Typography.Title>
                  </div>
                </Col>
                <Col span={9}>
                  <div style={{
                    paddingTop: '14px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  >
                    <HeartFilled />
                    &nbsp;
                    2132
                    &nbsp;
                    <EyeFilled />
                    &nbsp;
                    213
                  </div>
                </Col>
              </Row>
              <Row>
                <div>
                  <div style={{ fontSize: '20px' }}>
                    Personally I think weve come to the point where everything is acceptable
                    and no one really gives a fuck about what they look anymore. Thoughts?
                  </div>
                </div>
              </Row>
              <Row>
                <div style={{
                  display: 'flex',
                  justifyContent: 'end',
                  marginTop: '5rem',
                }}
                >
                  <Button icon={<HeartFilled style={{ color: 'black' }} />}>Like</Button>
                  &nbsp;
                  <Button>Follow</Button>
                  &nbsp;
                  <Button>Save</Button>
                </div>
              </Row>
              <Row>
                <div style={{ marginTop: '12px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                  >
                    <AppstoreOutlined style={{ fontSize: '20px' }} />
                    &nbsp;
                    <Typography.Text style={{ fontSize: '12px' }}>Category:</Typography.Text>
                    &nbsp;
                    <Tag color="volcano" style={{ fontSize: '12px' }}>DISCUSSION</Tag>
                  </div>
                </div>
              </Row>
              <Comments fixedHeight={false} />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default StyleRequest;
