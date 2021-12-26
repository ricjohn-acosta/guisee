import React from 'react';
import { Input, Row, Typography } from 'antd';
import mockComments from '../../../utils/mockData/mockComments';
import Comment from './Comment';

interface CommentsProps {
  fixedHeight?: boolean,
}

const Comments: React.FC<CommentsProps> = (props) => {
  const { fixedHeight } = props;

  return (
    <div>
      <Row>
        <div style={{ marginTop: '25px' }}>
          <Typography.Title
            level={4}
            style={{
              color: '#7c7c7c',
              margin: '0',
            }}
          >
            Comments (4)
          </Typography.Title>
        </div>
      </Row>
      <Input placeholder="Add a comment" style={{ marginTop: '6px' }} />
      <div
        className="scroller"
        style={fixedHeight ? {
          height: '450px',
          overflow: 'auto',
        } : {}}
      >

        {mockComments.map((comment) => <Comment data={comment} />)}
      </div>
    </div>
  );
};

export default Comments;
