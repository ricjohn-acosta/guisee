import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const UserContent = () => (
  <div style={{ maxWidth: '1280px', margin: '60px auto' }}>
    <Tabs defaultActiveKey="1" type="card">
      <TabPane tab="Posts" key="1">
        <div style={{ height: '100%' }}>test1</div>
      </TabPane>
      <TabPane tab="Wardrobe" key="2">
        <div style={{ height: '100%' }}>test2</div>
      </TabPane>
      <TabPane tab="Testimonials" key="3">
        <div style={{ height: '100%' }}>test3</div>
      </TabPane>
      <TabPane tab="About" key="4">
        <div style={{ height: '100%' }}>test3</div>
      </TabPane>
    </Tabs>
  </div>
);

export default UserContent;
