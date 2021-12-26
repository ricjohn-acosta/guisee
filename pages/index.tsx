import React from 'react';
import Head from 'next/head';
import PageLayout from '../components/Elements/Layout/PageLayout';
import IndexPage from '../page-components/Index/IndexPage';

const Index = (): React.ReactElement => (
  <PageLayout>
    <Head>
      <script src="js/load-image.js" />
    </Head>
    <IndexPage />
  </PageLayout>
);

export default Index;
