import React, { useState } from 'react';
import {
  Button, Checkbox, Form, Input, Popover, Row, Tag, Typography,
} from 'antd';
import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import PostCreate from './PostCreate';
import EditableTagGroup from '../../components/Elements/Tags/EditableTagGroup';
import OutfitBuilder from '../User/OutfitBuilder/OutfitBuilder';

const { Item } = Form;

const PostOutfitBuilder = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (category) => {
    const index = categories.indexOf(category);
    if (index === -1) {
      setCategories((prevState) => [...prevState, category]);
    } else if (index >= 0) {
      setCategories((prevState) => prevState.filter((value) => value !== category));
    }
  };

  const CategoryContent = () => {
    const categories = ['Streetwear', 'Workwear', 'Techwear', 'Minimalist', 'Hypebeast', 'High fashion', 'Casual', 'Business'];
    return (
      <>
        <Checkbox.Group>
          {categories.map((category) => (
            <Row>
              <Checkbox
                onChange={() => handleAddCategory(category)}
                value={category}
              >
                {category}
              </Checkbox>
            </Row>
          ))}
        </Checkbox.Group>
        {/* <div style={{ marginTop: '10px' }}> */}
        {/*  <Button type="primary">Apply</Button> */}
        {/* </div> */}
      </>
    );
  };

  return (
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
};

export default PostOutfitBuilder;
