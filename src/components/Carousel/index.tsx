import styled from '@emotion/styled';
import { ImageProps } from '@type/styles/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  title: string;
  images: ImageProps[];
}

const Carousel = ({ title, images }: CarouselProps) => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <CarouselContainer>
      <h2>{title}</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 30px;
`;

export default Carousel;
