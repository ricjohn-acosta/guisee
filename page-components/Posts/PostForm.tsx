import React from 'react';
import {
  Input, Row, Tabs, Typography,
} from 'antd';
import PostOutfitShowcase from './PostOutfitShowcase';

const { TabPane } = Tabs;

const PostForm = () => (
  <div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '60px 0 30px 0',
    }}
    >
      <Typography.Title>Create a post</Typography.Title>
    </div>
    <div style={{ maxWidth: '640px', margin: '30px auto' }}>
      <Tabs defaultActiveKey="1" type="card" centered>
        <TabPane tab="Outfit showcase" key="1">
          <PostOutfitShowcase />
        </TabPane>
        <TabPane tab="Style request" key="2">
          <div style={{ height: '100%' }}>Style request</div>
        </TabPane>
        <TabPane tab="Discussion" key="3">
          <div style={{ height: '100%' }}>Discussion</div>
        </TabPane>
      </Tabs>
    </div>
  </div>
);

export default PostForm;
