import React from 'react';
import '../styles/vars.css';
import '../styles/global.css';
import '../styles/main.less';
import '../styles/react-dropzone.css';

interface MyAppProps {
  Component: any
  pageProps: any
}

const MyApp = ({
  Component,
  pageProps,
}): React.ReactElement<MyAppProps> => <Component {...pageProps} />;

export default MyApp;
