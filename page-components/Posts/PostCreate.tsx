// Post.tsx
import {
  Button, Form, Input, Typography,
} from 'antd';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const { Item } = Form;
const { TextArea } = Input;
const { Title } = Typography;
const TextEditor = dynamic(() => import('./TextEditor'));

interface IPostCreate {
  body: string;
}

const PostCreate = (props) => {
  const { enableToolbar } = props;
  const [form] = Form.useForm();

  const onSubmit = (values: IPostCreate) => {
    // logic to submit form to server
    console.log(values.body);
    form.resetFields();
  };
  return (
    <>
      <Form layout="vertical" form={form} onFinish={onSubmit}>
        <Item
          name="body"
          rules={[
            {
              required: true,
              message: 'Please enter body of post',
            },
          ]}
        >
          {/* @ts-ignore */}
          <TextEditor placeholder="Write a description.." enableToolbar={enableToolbar} />
        </Item>

        {/* <Item> */}
        {/*  <Button htmlType="submit" type="primary"> */}
        {/*    Submit */}
        {/*  </Button> */}
        {/* </Item> */}
      </Form>
    </>
  );
};

export default PostCreate;
