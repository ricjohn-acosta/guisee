import { Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState, useRef, useEffect } from 'react';
import TweenOneGroup from 'rc-tween-one/lib/TweenOneGroup';

const EditableTagGroup = () => {
  const [tags, setTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputEl = useRef(null);

  useEffect(() => {
    if (inputEl && inputVisible) {
      inputEl.current.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags((prevState) => [...prevState, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const forMap = (tag) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {`#${tag}`}
      </Tag>
    );

    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100,
          }}
          onEnd={(e) => {
            if (e.type === 'appear' || e.type === 'enter') {
              // @ts-ignore
              e.target.style = 'display: inline-block';
            }
          }}
          leave={{
            opacity: 0,
            width: 0,
            scale: 0,
            duration: 200,
          }}
          appear={false}
        >
          {tags.map(forMap)}
        </TweenOneGroup>
      </div>
      {inputVisible && (
      <Input
        ref={inputEl}
        type="text"
        size="small"
        style={{ width: 78 }}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputConfirm}
        onPressEnter={handleInputConfirm}
      />
      )}
      {!inputVisible && (
      <Tag onClick={showInput}>
        <PlusOutlined />
        {' '}
        Add tag
      </Tag>
      )}
    </div>
  );
};
export default EditableTagGroup;
