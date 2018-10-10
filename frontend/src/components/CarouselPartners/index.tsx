import * as React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Item from './Item';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";




const Wraper = styled.div`
width: 1170px;
margin: 0 auto;
`

const H2 = styled.h2`
color: #000;
text-align: center;
padding-top: 50px;
padding-bottom: 20px;
font-weight: 600;
font-size: 42px;
font-family: 'Raleway',sans-serif;
`

interface ILocation {
  id: number;
  Logo: string;
};

interface IState {
  listData: ILocation[];
}

class CarouselPartners extends React.Component<{},IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      listData: [
        {
          id: 1,
          Logo: 'apIII-logo.png',
        },
        {
          id: 2,
          Logo: 'bioinfo-logo.png',
        },
        {
          id: 3,
          Logo: 'ch-logo.png',
        },
        {
          id: 4,
          Logo: 'chs-logo.png',
        },
        {
          id: 5,
          Logo: 'eh-logo.png',
        },
        {
          id: 6,
          Logo: 'glm-logo.png',
        },
        {
          id: 7,
          Logo: 'grl-logo.png',
        },
        {
          id: 9,
          Logo: 'thc-logo.png',
        },
        {
          id: 10,
          Logo: 'wk-logo.png',
        },
      ]
    }
  }
  public render() {
    const list  = this.state.listData;
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
    };
    return (
      <Wraper>
        <H2> Nasi Partnerzy </H2>
        <Slider {...settings}>

          {list.map((item: any) => (
          <Item title={item.id} img={item.Logo} />
          ))}
        </Slider>
      </Wraper>
    );
  }
}

export default CarouselPartners;
