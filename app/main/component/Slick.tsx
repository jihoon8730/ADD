import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slick() {
  var settings = {
    // dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <Images>
        <h3>1</h3>
        {/* 내용 입력 */}
      </Images>
      <Images>
        <h3>2</h3>
      </Images>
      <Images>
        <h3>3</h3>
      </Images>
      <Images>
        <h3>4</h3>
      </Images>
    </Slider>
  );
}

const Images = styled.div`
  width: 100%;
  height: 144px;
  background-color: red;
`;
