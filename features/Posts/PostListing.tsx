import React, { useState } from 'react';
import {
  Button, Checkbox, Col, Form, Input, Popover, Row, Tag, Typography,
} from 'antd';
import { CloseCircleFilled, InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Dropzone from 'react-dropzone-uploader';
import PostCreate from './PostCreate';
import EditableTagGroup from '../../components/Elements/Tags/EditableTagGroup';
import OutfitBuilderInput from '../User/OutfitBuilder/OutfitBuilderInput';

const { Item } = Form;

const DropzoneLayout = ({
  input,
  previews,
  dropzoneProps,
  files,
  extra: { maxFiles },
}) => {
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

  const displayCategories = () => categories.map((category) => <Tag>{category}</Tag>);

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Typography.Title level={5} style={{ fontWeight: 'bolder' }}>
          <InfoCircleOutlined style={{ fontSize: '16px' }} />
          &nbsp;
          Promote your custom made products!
        </Typography.Title>
      </div>
      <Row style={{ marginTop: '10px' }}>
        <Input prefix="$" style={{ width: '50%' }} placeholder="Price" />
      </Row>
      <Input style={{ marginTop: '10px' }} placeholder="Title" />
      <Row style={{ marginTop: '10px' }}>
        <Input placeholder="Company URL" />
      </Row>
      <Row style={{
        marginTop: '10px',
        marginBottom: '10px',
      }}
      >
        <Input placeholder="Product URL" />
      </Row>
      <div style={{ background: 'white' }} {...dropzoneProps}>
        {files.length <= maxFiles && input}
      </div>
      <div style={{ marginTop: '6px' }}>
        <PostCreate enableToolbar={false} />
      </div>
      {categories.length > 0 && displayCategories()}
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
      {previews.length > 0 && (
        <div style={{
          display: 'flex',
          justifyContent: 'end',
        }}
        >
          <Typography.Title level={5}>
            {previews.length}
            /
            {maxFiles}
          </Typography.Title>
        </div>
      )}
      {previews.length > 0 && (
        <Row>
          {previews.map((preview) => (
            <Col
              span={6}
            >
              <div style={{
                height: '150px',
                width: '150px',
              }}
              >
                <span style={{
                  display: 'flex',
                  justifyContent: 'end',
                }}
                >
                  <CloseCircleFilled onClick={() => preview.props.fileWithMeta.remove()} />
                </span>
                <img
                  alt={preview.props.meta.name}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  src={preview.props.meta.previewUrl}
                />
              </div>
            </Col>
          ))}
        </Row>
      )}
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

const PostListing = () => (
  <div style={{ height: '100%' }}>
    <Dropzone LayoutComponent={DropzoneLayout} InputComponent={OutfitBuilderInput} maxFiles={5} />
  </div>
);

export default PostListing;
