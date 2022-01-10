import React, { useState } from 'react';
import {
  Button, Checkbox, Col, Form, Input, Popover, Row, Tag, Typography,
} from 'antd';
import { CloseCircleFilled, InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import PostCreate from './PostCreate';
import EditableTagGroup from '../../components/Elements/Tags/EditableTagGroup';

const { Item } = Form;

const PostDiscussion = () => {
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
        <Typography>
          <InfoCircleOutlined style={{ fontSize: '16px' }} />
          &nbsp;
          Have a convo about current fashion trends or pop culture!
        </Typography>
      </div>
      <Input placeholder="Title" />
      <div style={{ marginTop: '6px' }}>
        <PostCreate enableToolbar={false} />
      </div>
      <Popover placement="right" trigger="click" title="Categories" content={CategoryContent}>
        <Tag
          style={{
            marginBottom: '6px',
            cursor: 'pointer',
          }}
        >
          <PlusOutlined />
          {' '}
          Add category
        </Tag>
      </Popover>
      <EditableTagGroup />
      <div style={{ marginTop: '40px' }}>
        <Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Item>
      </div>
    </div>
  );
};

export default PostDiscussion;
