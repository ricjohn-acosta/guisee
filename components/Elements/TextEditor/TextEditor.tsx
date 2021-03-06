// TextEditor.tsx
import React from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'code'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'code',
];

interface OnChangeHandler {
  event: () => void;
}

type Props = {
  value: string;
  placeholder: string;
  onChange: OnChangeHandler;
  enableToolbar: boolean;
};

const TextEditor: React.FC<Props> = ({
  value, onChange, placeholder, enableToolbar,
}) => {
  const getToolbar = () => {
    if (enableToolbar) {
      return modules;
    }

    return { toolbar: false };
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        value={value || ''}
        modules={getToolbar()}
        formats={formats}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default TextEditor;
