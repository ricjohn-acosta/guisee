import React from 'react';
import {
  Row, Col, Typography, Button, Tag, Avatar, Tabs,
} from 'antd';
import {
  HeartFilled, AppstoreOutlined, TagsOutlined, UserOutlined, EyeFilled,
} from '@ant-design/icons';
import { GalleryCardProps } from '../../Index/ArtGallery/Gallery/GalleryCard';
import Comments from '../Discussion/Comments';

const UserOutfit: React.FC<GalleryCardProps> = () => (
  <div>
    <Row>
      <Col span={12}>
        <Row gutter={[0, 10]}>
          <Col span={20}>
            <Col span={24}>
              <div>
                <img
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  src="https://www.themodestman.com/wp-content/uploads/2019/09/NYC_April_2010_Brock_Eric_Khoi-32-650x880.jpg"
                />
              </div>
            </Col>
            <Col span={24}>
              <div style={{
                height: '100%',
                width: '100%',
                background: 'black',
              }}
              >
                <img
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  src="https://i.pinimg.com/564x/d9/ae/a5/d9aea5776d48e874b27652ae89c77aed.jpg"
                />
              </div>
            </Col>
            <Col span={24}>
              <div style={{
                height: '100%',
                width: '100%',
                background: 'black',
              }}
              >
                <img
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  src="https://i.pinimg.com/originals/97/b1/fb/97b1fbc20804b634771adf5da88d9594.jpg"
                />
              </div>
            </Col>
          </Col>
          <Col
            style={{
              background: '#f8f8f8',
            }}
            span={4}
          >
            <div style={{
              padding: '60px 60px 60px 15px',
              position: 'sticky',
              top: '0',
            }}
            >
              <Row gutter={[0, 2]}>
                <Col span={24}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                  }}
                  >
                    <img
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      src="https://www.themodestman.com/wp-content/uploads/2019/09/NYC_April_2010_Brock_Eric_Khoi-32-650x880.jpg"
                    />
                  </div>
                </Col>

                <Col span={24}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                  }}
                  >
                    <img
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      src="https://i.pinimg.com/236x/d9/ae/a5/d9aea5776d48e874b27652ae89c77aed.jpg"
                    />
                  </div>
                </Col>

                <Col span={24}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                  }}
                  >
                    <img
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      src="https://i.pinimg.com/originals/97/b1/fb/97b1fbc20804b634771adf5da88d9594.jpg"
                    />
                  </div>
                </Col>
              </Row>

            </div>
          </Col>
        </Row>
      </Col>
      <Col
        style={{
          height: '100vh',
          position: 'sticky',
          top: '0',
        }}
        span={12}
      >
        <Row>
          <Col
            span={24}
            style={{ background: '#f8f8f8' }}
          >
            <div style={{
              // overflowY: 'scroll',
              height: '100vh',
              padding: '60px 60px',
            }}
            >
              <Row>
                <Col span={12}>
                  <div style={{

                    marginBottom: '50px',
                  }}
                  >
                    <Typography.Title
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      level={1}
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
                <Col span={12}>
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
                    feeling casual today :)
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
                    <Tag style={{ fontSize: '12px' }}>
                      Minimalist
                    </Tag>
                    <Tag style={{ fontSize: '12px' }}>
                      Casual
                    </Tag>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  >
                    <TagsOutlined style={{ fontSize: '20px' }} />
                    &nbsp;
                    <Typography.Text style={{ fontSize: '12px' }}>Tags:</Typography.Text>
                    &nbsp;
                    <Tag>
                      <Typography.Text
                        style={{ fontSize: '12px' }}
                      >
                        #like4like
                      </Typography.Text>
                    </Tag>
                    <Tag>
                      <Typography.Text
                        style={{ fontSize: '12px' }}
                      >
                        #stylerequest
                      </Typography.Text>
                    </Tag>
                    <Tag>
                      <Typography.Text
                        style={{ fontSize: '12px' }}
                      >
                        #auckland
                      </Typography.Text>
                    </Tag>
                  </div>
                </div>
              </Row>
              <Comments fixedHeight />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default UserOutfit;
