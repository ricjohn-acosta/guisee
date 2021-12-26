import React from 'react';
import {
  Col, Row, Avatar, Typography,
} from 'antd';
import { UserOutlined, HeartOutlined } from '@ant-design/icons';

const CommentBase = (props) => {
  const { data } = props;

  return (
    <div style={{ margin: '24px 0' }}>
      <Row style={{ width: '100%' }} gutter={[0, 0]}>
        <Col style={{ marginRight: '22px' }} span={1}>
          <Avatar icon={<UserOutlined />} size="large" />
        </Col>
        <Col span={20}>
          <b>
            <span style={{
              color: 'black',
              marginRight: '2px',
              fontWeight: 'bolder',
            }}
            >
              {data.user}
            </span>
          </b>
          &nbsp;
          {data?.comment}
          <div style={{ display: 'flex' }}>
            <Typography style={{
              fontSize: '14px',
              fontWeight: 'lighter',
              marginRight: '5px',
            }}
            >
              {data?.datePosted}
            </Typography>
            <Typography style={{
              fontSize: '14px',
              fontWeight: 'bold',
              marginRight: '5px',
            }}
            >
              &nbsp;
              {data?.likes}
              {' '}
              likes
            </Typography>
            &nbsp;
            <Typography style={{
              fontSize: '14px',
              fontWeight: 'bold',
              marginRight: '5px',
            }}
            >
              Reply
            </Typography>
          </div>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'end' }} span={2}>
          <HeartOutlined />
        </Col>
      </Row>
    </div>
  );
};

const Comment = (props) => {
  const { data } = props;

  return (
    <div style={{ overflow: 'auto' }}>
      <CommentBase data={data} />
      <div style={{
        marginLeft: '26px',
        marginTop: '28px',
      }}
      >
        {data.replies.length !== 0 && data.replies.map((reply) => <CommentBase data={reply} />)}
      </div>
    </div>
  );
};

export default Comment;
