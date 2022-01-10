import React from 'react';
import Slider from 'react-slick';
import { Typography } from 'antd';
import styles from './FeaturedWork.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeaturedWorkCard from './FeaturedWorkCard';

function PrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      tabIndex={0}
      aria-label="next-button"
      role="button"
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          this.focus();
        }
      }}
    />
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      tabIndex={0}
      aria-label="next-button"
      role="button"
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          this.focus();
        }
      }}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  // arrows: false,
};

const FeaturedWork = () => (
  <div className={styles['featured-work-container']}>
    {/* <Typography.Title level={2}>Featured outfits</Typography.Title> */}
    <Slider {...settings}>
      <FeaturedWorkCard />
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  </div>
);

export default FeaturedWork;
