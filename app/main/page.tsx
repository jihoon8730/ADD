"use client";

import Image from "@/node_modules/next/image";
import styled from "styled-components";
import Footer from "../components/Footer";
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

        <ContentsView>
          <TitleBox>
            <Title>{"어디든 이야기 👀"}</Title>
            <OtherStories>
              <Description>{"다른 이야기들 살펴보기"}</Description>
              <Image
                src={"/assets/icons/right-Arrow.svg"}
                width={12}
                height={12}
                alt={"right-Arrow failed"}
              />
            </OtherStories>
          </TitleBox>
        </ContentsView>

        <Footer />
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

const SliderView = styled.article``;

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

const ContentsView = styled.article`
  margin-top: 34px;
  padding: 0 36px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const Title = styled.text`
  color: #000000;
  font-size: 24px;
  font-weight: 800;
`;

const OtherStories = styled.button`
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding: 9px;
  border: 0px;
  border-radius: 10px;
  cursor: pointer;
`;

const Description = styled.text`
  color: #656565;
  font-size: 9px;
  font-weight: 700;
`;
