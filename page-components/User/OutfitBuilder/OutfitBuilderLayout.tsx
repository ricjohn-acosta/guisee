import React, { useState } from 'react';
import {
  Button, Col, Input, Row, Typography,
} from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
import urlToObject from '../../../utils/helpers/convertImageURLToFile';

const OutfitBuilderLayout = ({ ...props }) => {
  const [externalUrl, setExternalUrl] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmitImageUrlInput = async () => {
    setErrorMsg(null);
    const res = await urlToObject(`https://guisee-proxy-cors.herokuapp.com/${externalUrl}`);
    if (res && res.status === 200) {
      props.addFiles([res.file]);
    } else {
      setErrorMsg(res.errorMsg);
    }
  };

  const handleImageUrlInput = (e) => {
    setExternalUrl(e.target.value);
  };

  return (
    <div>
      <div {...props.dropzoneProps}>
        {props.input}
      </div>
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
      <Row style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
      }}
      >
        <Row style={{ width: '100%' }}>
          <Col span={8}>
            <Typography.Title level={4}>
              Enter an image link:&nbsp;
            </Typography.Title>
          </Col>
          <Col span={16}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              {errorMsg && <Typography>{errorMsg}</Typography>}
              <Input
                onChange={(e) => handleImageUrlInput(e)}
                width="100%"
                placeholder="e.g: https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C71crt90LslL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png"
              />
            &nbsp;
              <Button onClick={handleSubmitImageUrlInput}>Add</Button>
            </div>
          </Col>
        </Row>
      </Row>
      <Row style={{ marginTop: '8px' }} gutter={[12, 0]}>
        {props.previews.length > 0 && props.previews.map((preview) => (
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
    </div>
  );
};

export default OutfitBuilderLayout;
