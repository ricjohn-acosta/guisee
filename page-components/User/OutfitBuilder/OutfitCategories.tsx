import React, { useState } from 'react';
import {
  Col, Row, Tabs, Typography,
} from 'antd';
import OutfitBuilderDropzone from './OutfitBuilderDropzone';

const categories = [{
  key: '1',
  name: 'Top',
  description: 'Tops include shirts, jackets, hoodies, sweaters, vests, etc..',
},
{
  key: '2',
  name: 'Bottom',
  description: 'Bottoms include jeans, shorts, trousers & chinos, etc..',
},
{
  key: '3',
  name: 'Footwear',
  description: 'Footwear includes sneakers, sandals, dress shoes, etc..',
},
{
  key: '4',
  name: 'Misc.',
  description: 'Miscellaneous items include accessories like jewelries, hats, belts, scarves, etc..',
}];

const OutfitCategories = () => {
  const { TabPane } = Tabs;

  const [uploadedCountTop, setUploadedCountTop] = useState(0);
  const [uploadedCountBottom, setUploadedCountBottom] = useState(0);
  const [uploadedCountFootwear, setUploadedCountFootwear] = useState(0);
  const [uploadedCountMisc, setUploadedCountMisc] = useState(0);

  const handleUploadedCount = (category, count) => {
    console.log(category);
    switch (category) {
      case 'Top':
        console.log('test');
        setUploadedCountTop(count);
        return;
      case 'Bottom':
        setUploadedCountBottom(count);
        return;

      case 'Footwear':
        setUploadedCountFootwear(count);
        return;

      case 'Misc.':
        setUploadedCountMisc(count);
        break;

      default:
        break;
    }
  };

  const getUploadedCount = (name) => {
    switch (name) {
      case 'Top':
        return uploadedCountTop;
      case 'Bottom':
        return uploadedCountBottom;

      case 'Footwear':
        return uploadedCountFootwear;

      default:
        return uploadedCountMisc;
    }
  };

  return (
    <Tabs
      style={{
        height: '400px',
        overflow: 'auto',
      }}
      tabPosition="left"
      key="1"
    >
      {categories.map((category) => (
        <TabPane
          key={category.key}
          tab={(
            <div>
              <Row style={{ width: '100%' }} gutter={[6, 0]}>
                <Col
                  style={{
                    display: 'flex',
                    justifyContent: 'start',
                  }}
                  span={8}
                >
                  <Typography>{category.name}</Typography>
                </Col>
                <Col span={2} />
                <Col
                  style={{
                    display: 'flex',
                    justifyContent: 'end',
                  }}
                  span={14}
                >
                  <div>
                    {getUploadedCount(category.name)}
                    /2
                  </div>
                </Col>
              </Row>
            </div>
          )}
        >
          <OutfitBuilderDropzone
            category={category}
            uploadedCountTop={uploadedCountTop}
            uploadedCountBottom={uploadedCountBottom}
            uploadedCountFootwear={uploadedCountFootwear}
            uploadedCountMisc={uploadedCountMisc}
            handleUploadedCount={handleUploadedCount}
          />
        </TabPane>
      ))}
    </Tabs>
  );
};
export default OutfitCategories;
