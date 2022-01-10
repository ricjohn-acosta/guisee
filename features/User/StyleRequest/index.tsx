import React, { useState } from 'react';
import {
  Avatar, Button, Col, Row, Tag, Typography, Modal,
  Tabs, Rate, Upload,
} from 'antd';
import {
  AppstoreOutlined, EyeFilled, HeartFilled, UserOutlined, InfoCircleOutlined,
} from '@ant-design/icons';
import Dropzone from 'react-dropzone-uploader';
import { GalleryCardProps } from '../../Index/ArtGallery/Gallery/GalleryCard';
import Comments from '../Discussion/Comments';
import { ownedClothes, stylePreference } from '../../../utils/mockData/mockStylePreference';
import OutfitBuilder from '../OutfitBuilder/OutfitBuilder';

const StyleRequest: React.FC<GalleryCardProps> = () => {
  const { TabPane } = Tabs;

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const displayRating = () => stylePreference.map((pref) => (
    <li style={{
      listStyleType: 'none',
      padding: '6px 0px',
    }}
    >
      <Typography>
        <span>{pref.preference}</span>

        &nbsp;
        -
        &nbsp;
        <span style={{
          fontWeight: 'bolder',
          fontSize: '16px',
        }}
        >
          {pref.rating}
        </span>
        &nbsp;
        <Rate
          style={{
            color: 'black',
            margin: '0',
          }}
          defaultValue={pref.rating}
          disabled
        />

      </Typography>
    </li>
  ));

  return (
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
            height: '100vh',
          }}
          >
            <Typography.Title level={2}>
              Arthur1's wardrobe
              {' '}
              <InfoCircleOutlined style={{ fontSize: '16px' }} />
            </Typography.Title>
            <Typography.Title level={4}>Wardrobe breakdown</Typography.Title>
            <Row style={{ marginTop: '20px' }}>
              <ul style={{
                columnCount: 2,
                padding: '0',
              }}
              >
                {displayRating()}
              </ul>
            </Row>
            <Tabs>
              <TabPane
                style={{
                  height: '650px',
                  overflowY: 'auto',
                  overflowX: 'hidden',
                }}
                tab="Owned clothes"
                key="1"
              >
                {ownedClothes.length === 0 ? (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  >
                    <Typography.Title level={5}>
                      Arthur1 has not shared his clothes.. Suggest clothes to Arthur1?
                    </Typography.Title>
                  </div>
                ) : (

                  <Row gutter={[32, 16]}>
                    {ownedClothes.map((piece) => (
                      <Col span={4}>
                        <div style={{
                          width: '140px',
                          height: '140px',
                        }}
                        >
                          <img
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                            src={piece}
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>

                )}

              </TabPane>
              <TabPane tab="Wishlist" key="2" />
            </Tabs>
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
                      <Typography.Title level={1}>
                        Looking for a chill casual style for a date
                      </Typography.Title>
                      <Typography.Title
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        level={3}
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
                    <div style={{ fontSize: '16px' }}>
                      title pretty much sums it up, you can see my stats for more details but yeah
                      these clothes are literally all i have
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
                    &nbsp;
                    <Button onClick={showModal} type="primary">
                      Outfit
                      builder
                    </Button>
                    <Modal
                      centered
                      visible={isModalVisible}
                      onCancel={hideModal}
                      width={800}
                      footer={[
                        <Button onClick={hideModal}>Cancel</Button>,
                        <Button type="primary">Next</Button>,
                      ]}
                    >
                      <OutfitBuilder title="Outfit builder" tabPaddingLeft="24px" />
                    </Modal>
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
                      <Tag color="magenta" style={{ fontSize: '12px' }}>STYLE ME</Tag>
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
};

export default StyleRequest;
