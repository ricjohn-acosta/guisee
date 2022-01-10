import React, { useState } from 'react';
import {
  Modal, Row, Typography, Upload,
} from 'antd';
import getBase64 from '../../../utils/helpers/getBase64';
import UrlToImageUploader from '../../../features/User/OutfitBuilder/UrlToImageUploader';

const { Dragger } = Upload;

interface DraggerUploaderProps {
  height?: number
  maxFiles?: number
}

const DraggerUploader: React.FC<DraggerUploaderProps> = (props) => {
  const {
    height,
    maxFiles,
  } = props;

  const [fileList, setFileList] = useState<any>([{
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:320,width:240,fit:crop/output=quality:70/compress/https://cdn.fs.grailed.com/api/file/LE6RutFT6GqMP4YPRhkw',
  }]);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewTitle, setPreviewTitle] = useState(null);

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

  const handleDraggerChange = ({ file, fileList }) => {
    console.log(file, fileList);
    setFileList(fileList);
  };

  console.log(fileList);

  return (
    <div style={{ marginTop: '20px' }}>
      <UrlToImageUploader />
      <Row style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <div style={{ padding: '8px' }}>
          <Typography style={{ fontSize: '15px' }}>
            or
          </Typography>
        </div>
      </Row>
      <Dragger
        id="dragger-uploader"
        height={height}
        listType="picture-card"
        onPreview={handlePreview}
        maxCount={maxFiles}
        fileList={fileList}
        onChange={handleDraggerChange}
      >
        <Typography.Title level={5}>Click or drag image here to upload</Typography.Title>
      </Dragger>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        onCancel={handleHidePreview}
        footer={null}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default DraggerUploader;
