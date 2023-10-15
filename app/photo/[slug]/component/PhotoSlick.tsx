import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CenterMode() {
  const settings = {
    customPaging: function (i: number) {
      return <SelectImageBox src={`/assets/abstract0${i + 1}.png`} />;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <CustomSlider {...settings}>
        <div>
          <Images src={"/assets/abstract01.png"} />
        </div>
        <div>
          <Images src={"/assets/abstract02.png"} />
        </div>
        <div>
          <Images src={"/assets/abstract03.png"} />
        </div>
        <div>
          <Images src={"/assets/abstract04.png"} />
        </div>
      </CustomSlider>
    </div>
  );
}

const CustomSlider = styled(Slider)`
  .slick-dots.slick-thumb {
    width: 100%;
    padding: 10px 20px;
    background-color: black;
  }
`;

const SelectImageBox = styled.img``;

const Images = styled.img`
  width: 428px;
  height: 420px;
`;
