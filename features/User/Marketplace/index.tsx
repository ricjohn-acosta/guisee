import React, { useState } from 'react';
import {
  Row, Col, Typography, Button, Tag, Avatar, Tabs, Popover, Modal,
} from 'antd';
import {
  HeartFilled,
  AppstoreOutlined,
  TagsOutlined,
  UserOutlined,
  EyeFilled,
  InfoCircleFilled,
  CalendarOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { GalleryCardProps } from '../../Index/ArtGallery/Gallery/GalleryCard';
import Comments from '../Discussion/Comments';

const UserOutfit: React.FC<GalleryCardProps> = () => {
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);

  const showInfoModal = () => {
    setIsInfoModalVisible(true);
  };

  const handleInfoModalOk = () => {
    setIsInfoModalVisible(false);
  };

  const handleInfoModalCancel = () => {
    setIsInfoModalVisible(false);
  };

  return (
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
                    src="https://cdn.shopify.com/s/files/1/1233/5476/products/984217211121_1500x1500.jpg?v=1613293649"
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
                    src="https://cc-west-usa.oss-accelerate.aliyuncs.com/22e55756-df34-421b-9e0d-733358511e06.jpg"
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
                    src="https://cc-west-usa.oss-accelerate.aliyuncs.com/5e01c4a6-4d16-4c36-8ced-40ece8ccf65c.jpg"
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
                      width: '85px',
                      height: '85px',
                    }}
                    >
                      <img
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        src="https://cdn.shopify.com/s/files/1/1233/5476/products/984217211121_1500x1500.jpg?v=1613293649"
                      />
                    </div>
                  </Col>

                  <Col span={24}>
                    <div style={{
                      width: '85px',
                      height: '85px',
                    }}
                    >
                      <img
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        src="https://cc-west-usa.oss-accelerate.aliyuncs.com/22e55756-df34-421b-9e0d-733358511e06.jpg"
                      />
                    </div>
                  </Col>

                  <Col span={24}>
                    <div style={{
                      width: '85px',
                      height: '85px',
                    }}
                    >
                      <img
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        src="https://cc-west-usa.oss-accelerate.aliyuncs.com/5e01c4a6-4d16-4c36-8ced-40ece8ccf65c.jpg"
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
            height: '100%',
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
                padding: '60px 60px',
              }}
              >
                <Row>
                  <Col span={24}>
                    <div style={{ marginBottom: '24px' }}>
                      <Typography.Title level={3}>$100</Typography.Title>
                    </div>
                    <div>
                      <a href="https://mahoganyfair.com/" target="_blank" rel="noreferrer">
                        mahoganyfair.com
                      </a>
                    </div>
                    <div style={{
                      marginBottom: '50px',
                    }}
                    >
                      <Row style={{ marginBottom: '30px' }}>
                        <Col span={12}>
                          <Typography.Title level={1}>
                            <a>
                              CASUAL WEAR SINGLE WESTERN WILD CASUAL SUIT
                            </a>
                          </Typography.Title>
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
                      <Typography.Title
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        level={3}
                      >
                        <Avatar size="large" icon={<UserOutlined />} />
                        &nbsp;
                        arthur_boutiques
                      </Typography.Title>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div>
                    <div style={{ fontSize: '16px' }}>
                      Fabric name: polyester fiberMain fabric composition: polyester fiber
                      (polyester)
                      size bust shoulder sleeve length S 108 45 58.5 67.5 M 112 46 59.5 69.5 L 116
                      47
                      60.5 71.5 XL 120 48 61.5 73.5 XXL 124 49 62.5 75.5 UNITl:cm 1. Asian sizes are
                      1
                      to 2 sizes smaller than European and American people. Choose the larger size
                      if
                      your size between two sizes. Please allow 2-3cm differences due to manual
                      measurement. 2. Please check the size chart carefully before you buy the item,
                      if you don't know how to
                    </div>
                  </div>
                </Row>
                <Row style={{ marginTop: '50px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'end',
                  }}
                  >
                    <Button icon={<HeartFilled style={{ color: 'black' }} />}>Like</Button>
                    &nbsp;
                    <Button>Follow</Button>
                    &nbsp;
                    <Button>Save</Button>
                    &nbsp;
                    <Popover content="Post details">
                      <Button
                        onClick={showInfoModal}
                        icon={(
                          <InfoCircleFilled
                            style={{ color: 'black' }}
                          />
                      )}
                      />
                    </Popover>
                    <Modal
                      centered
                      title={<Typography.Title level={3}>Post details</Typography.Title>}
                      visible={isInfoModalVisible}
                      onOk={handleInfoModalOk}
                      onCancel={handleInfoModalCancel}
                      footer={[]}
                    >
                      <Row style={{ padding: '34px 40px 40px 40px' }} gutter={[0, 12]}>
                        <Col span={24}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '8px',
                          }}
                          >
                            <CalendarOutlined style={{ fontSize: '20px' }} />
                            &nbsp;
                            <Typography.Text
                              style={{
                                fontSize: '16px',
                                fontWeight: 'bolder',
                              }}
                            >
                              Date posted
                            </Typography.Text>
                          </div>
                          <div>
                            November 12, 2021
                          </div>
                        </Col>
                        <Col style={{ marginTop: '6px' }} span={24}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '8px',
                          }}
                          >
                            <AppstoreOutlined style={{ fontSize: '20px' }} />
                            &nbsp;
                            <Typography.Text
                              style={{
                                fontSize: '16px',
                                fontWeight: 'bolder',
                              }}
                            >
                              Category
                            </Typography.Text>
                          </div>
                          <div>
                            <Tag style={{ fontSize: '12px' }}>
                              Minimalist
                            </Tag>
                            <Tag style={{ fontSize: '12px' }}>
                              Casual
                            </Tag>
                          </div>
                          <br />
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '8px',
                          }}
                          >
                            <TagsOutlined style={{ fontSize: '20px' }} />
                            &nbsp;
                            <Typography.Text style={{
                              fontSize: '16px',
                              fontWeight: 'bolder',
                            }}
                            >
                              Tags
                            </Typography.Text>
                          </div>
                          <div>
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
                        </Col>
                      </Row>
                    </Modal>
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
};

export default UserOutfit;
