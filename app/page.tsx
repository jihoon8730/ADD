"use client";

import Image from "@/node_modules/next/image";
import styled from "styled-components";
import ContentsCard from "./components/ContentsCard";
import MenuIcon from "./components/MenuIcon";
import Slick from "./components/Slick";

import { useRouter } from "next/navigation";

export default function main() {
  const router = useRouter();

  return (
    <Container>
      <SliderView>
        <Slick />
      </SliderView>

      <MenuView>
        <IconBox onClick={() => router.push("/photo")}>
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
        <ContentsCard />
        <ContentsCard />
        <ContentsCard />
      </ContentsView>
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  margin: 0 auto;
  width: 428px;
  min-width: 428px;
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

const MenuText = styled.div`
  margin-top: 6px;
  color: #000000;
  font-size: 16px;
  font-weight: 800;
`;

const ContentsView = styled.article`
  margin-top: 34px;
  padding: 26px 36px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const Title = styled.div`
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

const Description = styled.div`
  color: #656565;
  font-size: 9px;
  font-weight: 700;
`;
