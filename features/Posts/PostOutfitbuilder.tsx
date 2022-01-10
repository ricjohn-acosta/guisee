import React from 'react';
import { Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import OutfitBuilder from '../User/OutfitBuilder/OutfitBuilder';

const PostOutfitBuilder = () => (
  <div>
    <div style={{ marginBottom: '20px' }}>
      <Typography.Title level={5} style={{ fontWeight: 'bolder' }}>
        <InfoCircleOutlined style={{ fontSize: '16px' }} />
        &nbsp;
        Got an outfit idea? Build it and share it with everyone
      </Typography.Title>
    </div>
    <br />
    <OutfitBuilder height="360px" />
    {/* <div style={{ marginTop: '6px' }}> */}
    {/*  <PostCreate enableToolbar={false} /> */}
    {/* </div> */}
    {/* <Popover placement="right" trigger="click" title="Categories" content={CategoryContent}> */}
    {/*  <Tag */}
    {/*    style={{ */}
    {/*      marginBottom: '6px', */}
    {/*      cursor: 'pointer', */}
    {/*    }} */}
    {/*  > */}
    {/*    <PlusOutlined /> */}
    {/*    {' '} */}
    {/*    Add category */}
    {/*  </Tag> */}
    {/* </Popover> */}
    {/* <EditableTagGroup /> */}
    {/* <div style={{ marginTop: '40px' }}> */}
    {/*  <Item> */}
    {/*    <Button htmlType="submit" type="primary"> */}
    {/*      Submit */}
    {/*    </Button> */}
    {/*  </Item> */}
    {/* </div> */}
  </div>
);

export default PostOutfitBuilder;
