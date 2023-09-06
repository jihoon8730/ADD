"use client";

import styled from "styled-components";
import TopNavigation from "./components/TopNavigation";

export default function Page() {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <Container>
        <TopNavigation />

        <SliderView></SliderView>
      </Container>
    </div>
  );
}

const Container = styled.main`
  margin: 0 auto;
  width: 428px;
  height: auto;
  background-color: #ffffff;
`;

const SliderView = styled.div`
  background-color: royalblue;
  height: 144px;
`;
