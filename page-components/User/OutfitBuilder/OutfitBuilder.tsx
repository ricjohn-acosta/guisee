import React from 'react';
import { Typography } from 'antd';
import OutfitCategories from './OutfitCategories';

const OutfitBuilder: React.FC = () => (
  <div>
    <Typography.Title style={{ padding: '20px' }} level={2}>
      Outfit builder
    </Typography.Title>
    <OutfitCategories />
  </div>
);

export default OutfitBuilder;
