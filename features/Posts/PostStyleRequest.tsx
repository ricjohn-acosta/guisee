import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Collapse,
  Form,
  Input,
  Modal,
  Popover,
  Rate,
  Row,
  Tabs,
  Tag,
  Typography,
  Upload,
} from 'antd';
import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import PostCreate from './PostCreate';
import EditableTagGroup from '../../components/Elements/Tags/EditableTagGroup';
import { stylePreference } from '../../utils/mockData/mockStylePreference';
import getBase64 from '../../utils/helpers/getBase64';

const { Item } = Form;
const { Panel } = Collapse;
const { TabPane } = Tabs;

const PostStyleRequest = () => {
  const [categories, setCategories] = useState([]);
  const [newRatings, setNewRatings] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewTitle, setPreviewTitle] = useState(null);

  const displayCollapseCheckbox = () => (
    <Checkbox
      onClick={(event) => event.stopPropagation()}
    />
  );

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
      </>
    );
  };

  const displayCategories = () => categories.map((category) => <Tag>{category}</Tag>);

  const handleRating = (value, preference) => {
    if (newRatings.find((rating) => rating.preference === preference
      && (rating.value === value || rating.value !== value))) {
      const chosenRating = {
        preference,
        value,
      };

      const newArr = newRatings
        .map((rating) => (rating.preference !== preference ? rating : chosenRating));
      setNewRatings(newArr);
    } else {
      setNewRatings((prevState) => [...prevState, {
        preference,
        value,
      }]);
    }
  };

  const displayNewRatingValue = (preference, savedRating) => {
    const newRating = newRatings.find((rating) => rating.preference === preference);

    if (!newRating) {
      return savedRating;
    }
    return newRating.value;
  };

  const displayRating = () => stylePreference.map((pref) => (
    <li style={{
      listStyleType: 'none',
      padding: '6px 0px',
    }}
    >
      <Typography>
        <span>{pref.preference}</span>

        &nbsp;
        -
        &nbsp;
        <span style={{
          fontWeight: 'bolder',
          fontSize: '16px',
          marginRight: '16px',
        }}
        >
          {displayNewRatingValue(pref.preference, pref.rating)}
        </span>
        <Rate
          style={{
            color: 'black',
            margin: '0',
            padding: '0',
          }}
          defaultValue={pref.rating}
          onChange={(value) => handleRating(value, pref.preference)}
        />
      </Typography>
    </li>
  ));

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleHidePreview = () => {
    setPreviewVisible(false);
  };

  return (
    <div style={{ height: '100%' }}>
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Typography>
            <InfoCircleOutlined style={{ fontSize: '16px' }} />
            &nbsp;
            Request for styling from the community
          </Typography>
        </div>
        <Input placeholder="Title" />
        <div style={{ marginTop: '6px' }}>
          <PostCreate enableToolbar={false} />
        </div>
        <Collapse style={{ marginTop: '4px' }}>
          <Panel
            style={{ background: 'white' }}
            header="Confirm wardrobe"
            key="1"
            extra={displayCollapseCheckbox()}
          >
            <Typography.Title level={4}>Wardrobe breakdown</Typography.Title>
            <Typography>
              Your wardrobe consists of your style preferences, clothes you currently own and
              clothes you want to own in the future. This information is useful for other users who
              wants to style you!
            </Typography>
            <Row style={{ marginTop: '20px' }}>
              <ul style={{
                columnCount: 1,
                padding: '0',
              }}
              >
                {displayRating()}
              </ul>
            </Row>
            <Tabs>
              <TabPane
                style={{
                  height: '100%',
                  overflowY: 'auto',
                  overflowX: 'hidden',
                }}
                tab="Owned clothes"
                key="1"
              >
                <Upload listType="picture-card" onPreview={handlePreview}>Upload</Upload>
                <Modal
                  visible={previewVisible}
                  title={previewTitle}
                  onCancel={handleHidePreview}
                  footer={null}
                >
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>

              </TabPane>
              <TabPane tab="Wishlist" key="2" />
            </Tabs>
            <Button style={{ marginTop: '10px' }}>
              Confirm
            </Button>
          </Panel>
        </Collapse>
        <br />
        <div>
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
        </div>
        <EditableTagGroup />
        <div style={{ marginTop: '40px' }}>
          <Item>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Item>
        </div>
      </div>
    </div>
  );
};

export default PostStyleRequest;
