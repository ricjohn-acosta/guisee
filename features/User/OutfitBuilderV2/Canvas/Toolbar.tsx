import React from 'react';
import Image from 'next/image';
import { Button, Popover, Space } from 'antd';

const Toolbar = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '6vh',
    padding: '8px',
    borderBottom: 'solid',
    borderBottomWidth: 'thin',
    borderColor: '#d6dee1',
  }}
  >
    <Space>
      <Popover placement="bottom" content="Crop">
        <Button style={{ height: '100%' }} size="small" type="text">
          <Image src="/icons/toolbar-crop.svg" height={30} width={30} />
        </Button>
      </Popover>
      <Popover placement="bottom" content="Remove background">
        <Button style={{ height: '100%' }} size="small" type="text">
          <Image src="/icons/toolbar-bg-remover.svg" height={30} width={30} />
        </Button>
      </Popover>
      <Popover placement="bottom" content="Delete">
        <Button style={{ height: '100%' }} size="small" type="text">
          <Image src="/icons/toolbar-delete-image.svg" height={30} width={30} />
        </Button>
      </Popover>
    </Space>
  </div>
);

export default Toolbar;
