import React, { useState } from 'react';
import {
  Tag, Row, Col, Menu, Dropdown, Button,
} from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { GalleryCardProps } from '../Gallery/GalleryCard';

const FilterViewsButton = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Following
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Popular
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        New
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button>
        View by
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

interface CategoryButtonProps {
  children: React.ReactNode
  onClickHandler?: () => void
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  children,
  onClickHandler,
}) => (
  <Button
    onClick={onClickHandler}
    style={{
      padding: '20px 20px',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {children}
  </Button>
);

const SubCategoryButton = ({
  children,
}) => (
  <Button
    style={{
      padding: '15px 15px',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {children}
  </Button>
);

const CategoryBar = () => {
  const [expandedSubCategory, setExpandedSubCategory] = useState('');

  const showSubCategory = (category: string) => {
    if (category === '') setExpandedSubCategory('');

    if (category === expandedSubCategory) {
      setExpandedSubCategory('');
    } else {
      setExpandedSubCategory(category);
    }
  };

  return (
    <div style={{ padding: '0 20px' }}>
      <Row>
        <Col span={2}>
          <FilterViewsButton />
        </Col>
        <Col span={20}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >

            <CategoryButton onClickHandler={() => showSubCategory('')}>All</CategoryButton>
            &nbsp;
            <CategoryButton
              onClickHandler={() => showSubCategory('OUTFIT-SHOWCASE')}
            >
              Outfit showcase
            </CategoryButton>
            &nbsp;
            <CategoryButton
              onClickHandler={() => showSubCategory('OUTFIT-BUILDS')}
            >
              Outfit builds
            </CategoryButton>
            &nbsp;
            <CategoryButton onClickHandler={() => showSubCategory('')}>
              Style
              requests
            </CategoryButton>
            &nbsp;
            <CategoryButton onClickHandler={() => showSubCategory('')}>Discussions</CategoryButton>
            &nbsp;
            <CategoryButton onClickHandler={() => showSubCategory('')}>Marketplace</CategoryButton>
          </div>
          {(expandedSubCategory === 'OUTFIT-SHOWCASE' || expandedSubCategory === 'OUTFIT-BUILDS') && (
            <div style={{
              marginTop: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              <SubCategoryButton>All outfits</SubCategoryButton>
              &nbsp;
              <SubCategoryButton>Streetwear</SubCategoryButton>
              &nbsp;
              <SubCategoryButton>Workwear</SubCategoryButton>
              &nbsp;
              <SubCategoryButton>Techwear</SubCategoryButton>
              &nbsp;
              <SubCategoryButton>Minimalist</SubCategoryButton>
              &nbsp;
              <SubCategoryButton>Hypebeast</SubCategoryButton>
              &nbsp;
              <SubCategoryButton>High fashion</SubCategoryButton>
              &nbsp;
              <SubCategoryButton>Casual</SubCategoryButton>
              &nbsp;
              <SubCategoryButton>Business</SubCategoryButton>
            </div>
          )}
        </Col>
        <Col span={2} />
      </Row>
    </div>
  );
};

export default CategoryBar;
