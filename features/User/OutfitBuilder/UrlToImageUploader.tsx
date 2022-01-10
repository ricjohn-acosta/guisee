import React, { useRef, useState } from 'react';
import {
  Button, Col, Input, Row, Typography,
} from 'antd';
import urlToObject from '../../../utils/helpers/convertImageURLToFile';

const UrlToImageUploader = (props) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [externalUrl, setExternalUrl] = useState(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

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
    <Row style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10px',
    }}
    >
      <Row style={{ width: '100%' }}>
        <Col span={7}>
          <Typography.Title level={5}>
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
              id="imageUploader-input"
              onChange={(e) => handleImageUrlInput(e)}
              width="100%"
              placeholder="e.g: https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C71crt90LslL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png"
            />
            &nbsp;
            <Button id="imageUploader-submit-btn" onClick={handleSubmitImageUrlInput}>Add</Button>
          </div>
        </Col>
      </Row>
    </Row>
  );
};
export default UrlToImageUploader;
