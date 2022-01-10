import React from 'react';
import { Row, Typography } from 'antd';
import { getDroppedOrSelectedFiles } from 'html5-file-selector';

const OutfitBuilderInput = ({
  files,
  accept,
  onFiles,
  extra: { maxFiles },
}) => {
  const getFilesFromEvent = (e): any => new Promise((resolve) => {
    getDroppedOrSelectedFiles(e)
      .then((chosenFiles) => {
        resolve(chosenFiles.map((f) => f.fileObject));
      });
  });

  if (files.length >= maxFiles) {
    return (
      <Row style={{ paddingTop: '10px' }}>
        <Typography.Title level={4}>
          File limit reached!
        </Typography.Title>
      </Row>
    );
  }
  return (
    <label style={{
      cursor: 'pointer',
      width: '100%',
      height: '100%',
      padding: 15,
    }}
    >
      {

        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <Row>
            <Typography.Title level={4}>
              Drag and drop an image,
              {' '}
              <span style={{ color: '#a5a5a5' }}>Browse</span>
            </Typography.Title>
          </Row>
          {/* <label className="rounded" htmlFor="upload">Add Attachment</label> */}
        </div>
    }
      <input
        style={{ display: 'none' }}
        type="file"
        id="upload"
        accept={accept}
        multiple
        onChange={(e) => {
          getFilesFromEvent(e)
            .then((chosenFiles) => {
              onFiles(chosenFiles);
            });
        }}
      />
    </label>
  );
};

export default OutfitBuilderInput;
