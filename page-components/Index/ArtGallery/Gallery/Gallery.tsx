import React from 'react';
import { Row } from 'antd';
import Masonry from 'react-masonry-css';
import mockGalleryCardData from '../../../../utils/mockData/mockGalleryCard';
import GalleryCard from './GalleryCard';

const items = [<img
  style={{
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  }}
  src="https://images.unsplash.com/photo-1636453966235-a5e76101975c?w=500&h=500&fit=crop"
/>, <img
  style={{
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  }}
  src="https://resi.ze-robot.com/dl/4k/4k-desktop-wallpaper.-2560%C3%971440.jpg"
/>, <img
  style={{
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  }}
  src="https://resi.ze-robot.com/dl/4k/4k-desktop-wallpaper.-2560%C3%971440.jpg"
/>];

const Gallery = () => (
  <div style={{
    paddingTop: '10px',
  }}
  >
    {/* <Row> */}
    {/*  {mockGalleryCardData.map((data) => ( */}
    {/*    <GalleryCard */}
    {/*      id={data.id} */}
    {/*      description={data.description} */}
    {/*      artist={data.artist} */}
    {/*      assets={data.assets} */}
    {/*      category={data.category} */}
    {/*      datePosted={data.datePosted} */}
    {/*      likes={data.likes} */}
    {/*      tags={data.tags} */}
    {/*      title={data.title} */}
    {/*      views={data.views} */}
    {/*      type={data.type} */}
    {/*    /> */}
    {/*  ))} */}
    {/* </Row> */}
    <Masonry
      breakpointCols={{
        default: 5,
        1100: 4,
        700: 3,
        500: 2,
      }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {mockGalleryCardData.map((data) => (
        <GalleryCard
          id={data.id}
          description={data.description}
          artist={data.artist}
          assets={data.assets}
          topic={data.topic}
          datePosted={data.datePosted}
          likes={data.likes}
          tags={data.tags}
          title={data.title}
          views={data.views}
          type={data.type}
        />
      ))}
    </Masonry>
  </div>
);

export default Gallery;
