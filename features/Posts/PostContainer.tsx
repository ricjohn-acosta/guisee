import React from 'react';
import { Tabs, Typography } from 'antd';
import PostOutfitShowcase from './PostOutfitShowcase';
import PostStyleRequest from './PostStyleRequest';
import PostDiscussion from './PostDiscussion';
import PostListing from './PostListing';
import styles from './PostContainer.module.scss';
import PostOutfitbuilder from './PostOutfitbuilder';

const { TabPane } = Tabs;

const PostContainer = () => (
  <>
    <div className={styles['container-banner']}>
      <Typography.Title>Create a post</Typography.Title>
    </div>
    <div className={styles['tabs-container']}>
      <Tabs defaultActiveKey="1" type="card" centered>
        <TabPane tab="Outfit showcase" key="1">
          <PostOutfitShowcase />
        </TabPane>
        <TabPane tab="Outfit build" key="2">
          <PostOutfitbuilder />
        </TabPane>
        <TabPane tab="Style request" key="3">
          <PostStyleRequest />
        </TabPane>
        <TabPane tab="Discussion" key="4">
          <PostDiscussion />
        </TabPane>
        <TabPane tab="List a product" key="5">
          <PostListing />
        </TabPane>
      </Tabs>
    </div>
  </>
);

export default PostContainer;
