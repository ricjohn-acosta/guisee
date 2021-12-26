import React from 'react';
import {
  Card, Col, Row, Tag, Typography,
} from 'antd';
import {
  EyeFilled, HeartFilled, CopyOutlined, MessageFilled,
} from '@ant-design/icons';
import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface GalleryCardProps {
  id: string,
  description: string,
  title: string,
  artist: string,
  datePosted: string,
  tags: string[],
  topic: string,
  assets: string[],
  views: number,
  likes: number,
  type: string
}

const GalleryCard: React.FC<GalleryCardProps> = (props) => {
  const {
    id,
    description,
    title,
    artist,
    datePosted,
    assets,
    views,
    likes,
    tags,
    type,
    topic,
  } = props;

  const router = useRouter();

  const translateTopic = (tag) => {
    switch (tag) {
      case 'style-request':
        return <Tag color="magenta" style={{ fontSize: '0.7em' }}>STYLE REQUEST</Tag>;

      case 'original-content':
        return <Tag color="geekblue" style={{ fontSize: '0.7em' }}>OC</Tag>;

      case 'discussion':
        return <Tag color="volcano" style={{ fontSize: '0.7em' }}>DISCUSSION</Tag>;

      default:
        return null;
    }
  };

  const showTopic = (topic: string) => (
    <div style={{
      paddingTop: '5px',
      display: 'flex',
      justifyContent: 'start',
    }}
    >
      {translateTopic(topic)}
    </div>
  );

  const showMedia = (type: string, assets: string[]) => {
    switch (type) {
      case 'video':
        return (
          <div style={{ height: '500px' }}>
            <ReactPlayer
              url="/testdata/test-video.mp4"
              width="100%"
              height="100%"
              playing
            />
          </div>
        );

      case 'text':
        return (
          <div style={{ padding: '20px' }}>
            <Typography.Title level={3}>
              {assets[0]}
            </Typography.Title>
          </div>
        );

      default:
        return (
          <div>
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              src={assets[0]}
            />

          </div>
        );
    }
  };

  const cardType = (topic: string) => {
    switch (topic) {
      case 'fit-check':
        return 'outfit';
      case 'style-request':
        return 'style-request';
      case 'discussion':
        return 'discussion';
      default:
        return null;
    }
  };

  return (
    <Link href={`${artist}/${cardType(topic)}/${id}`}>
      <a>
        <div>
          <Card
            hoverable
            bordered={false}
            cover={(
              <>
                {assets.length > 1 && (
                  <div>
                    <CopyOutlined style={{
                      fontSize: '1.6em',
                      position: 'absolute',
                      right: '0',
                      color: '#fdfdfd',
                      padding: '10px',
                    }}
                    />
                  </div>
                )}
                {showMedia(type, assets)}
              </>
            )}
            style={{ margin: '15px' }}
          >
            <Row>
              <Col span={12}>
                <b>{artist}</b>
                <Typography style={{ fontSize: '12px' }}>
                  {views}
                  {' '}
                  views
                </Typography>
                <br />
                {showTopic(topic)}

              </Col>
              <Col span={12}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'end',
                }}
                >
                  <HeartFilled style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    marginRight: '2.5px',
                  }}
                  />
                  {likes}
                  &nbsp;
                  <MessageFilled style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    marginRight: '2.5px',
                  }}
                  />
                  23
                  {/* &nbsp; */}
                  {/* <EyeFilled style={{ */}
                  {/*  display: 'flex', */}
                  {/*  alignItems: 'center', */}
                  {/*  justifyContent: 'center', */}
                  {/*  fontSize: '16px', */}
                  {/*  marginRight: '2.5px', */}
                  {/* }} */}
                  {/* /> */}
                  {/* {views} */}
                  <br />
                </div>
                <br />
              </Col>
            </Row>
          </Card>
        </div>
      </a>
    </Link>
  );
};

export default GalleryCard;
