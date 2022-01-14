import React from 'react';
import { Button, Divider, Typography } from 'antd';

const ImageUploaders = () => (
  <div style={{
    height: '25vh',
  }}
  >
    <Divider orientation="center">
      Add an image
    </Divider>
    <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
      <Button style={{ height: '60px' }}>Add from your device</Button>
      <Typography style={{ display: 'flex', justifyContent: 'center' }}>or</Typography>
      <Button style={{ height: '60px' }}>Add using image URL</Button>
    </div>
  </div>
);

export default ImageUploaders;
