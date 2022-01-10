import React from 'react';
import { Typography } from 'antd';
import OutfitCategories from './OutfitCategories';

interface OutfitBuilderProps {
  title?: string;
  height?: string;
  tabPaddingLeft?: string;
}

const OutfitBuilder: React.FC<OutfitBuilderProps> = ({ title, tabPaddingLeft, height }) => (
  <div>
    {title && (
    <Typography.Title style={{ padding: '20px' }} level={2}>
      {title}
    </Typography.Title>
    )}
    <OutfitCategories tabPaddingLeft={tabPaddingLeft} height={height} />
  </div>
);

export default OutfitBuilder;
