import React, { useState } from 'react';
import { Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import Dropzone from 'react-dropzone-uploader';
import { getDroppedOrSelectedFiles } from 'html5-file-selector';
import OutfitBuilderInput from './OutfitBuilderInput';
import OutfitBuilderLayout from './OutfitBuilderLayout';

interface OutfitBuilderDropzoneProps {
  category: any
  uploadedCountTop: number
  uploadedCountBottom: number
  uploadedCountFootwear: number
  uploadedCountMisc: number
  handleUploadedCount: (num: number, category: any) => void;
}

const OutfitBuilderDropzone: React.FC<OutfitBuilderDropzoneProps> = (props) => {
  const {
    category,
    uploadedCountTop,
    uploadedCountMisc,
    uploadedCountFootwear,
    uploadedCountBottom,
    handleUploadedCount,
  } = props;

  const [files, setFiles] = useState([]);

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

  const handleChangeStatus = ({ meta }, status) => {
    if (status === 'done') {
      console.log(category.name);
      handleUploadedCount(category.name, getUploadedCount(category.name) + 1);
    }
  };

  const handleFileAdd = (fileArr) => {
    setFiles(fileArr);
  };

  return (
    <div style={{ paddingRight: '24px' }}>
      <Typography>
        <InfoCircleOutlined style={{ fontSize: '16px' }} />
        {' '}
        {category.description}
      </Typography>
      <Dropzone
        onChangeStatus={handleChangeStatus}
        InputComponent={OutfitBuilderInput}
        LayoutComponent={(props) => <OutfitBuilderLayout {...props} addFiles={handleFileAdd} />}
        maxFiles={2}
        accept="image/*"
        initialFiles={files}
      />
    </div>
  );
};

export default OutfitBuilderDropzone;
