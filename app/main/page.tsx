"use client";

import styled from "styled-components";
import TopNavigation from "../components/TopNavigation";
import MenuIcon from "./component/MenuIcon";
import Slick from "./component/Slick";

export default function main() {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <Container>
        <TopNavigation />

        <SliderView>
          <Slick />
        </SliderView>

        <MenuView>
          <IconBox>
            <MenuIcon iconCode={"picture"} />
            <MenuText>{"사진"}</MenuText>
          </IconBox>
          <IconBox>
            <MenuIcon iconCode={"place"} />
            <MenuText>{"지역"}</MenuText>
          </IconBox>
          <IconBox>
            <MenuIcon iconCode={"mdi"} />
            <MenuText>{"느낌"}</MenuText>
          </IconBox>
          <IconBox>
            <MenuIcon iconCode={"local"} />
            <MenuText>{"장소"}</MenuText>
          </IconBox>
        </MenuView>
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

const SliderView = styled.article`
  background-color: royalblue;
`;

const MenuView = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 23px;
  padding: 0 18px;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuText = styled.text`
  margin-top: 6px;
  color: #000000;
  font-size: 16px;
  font-weight: 800;
`;
