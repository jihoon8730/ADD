"use client";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

export default function Photo() {
  const [isHotLatest, setIsHotLatest] = useState("hot");

  const handleHotLatestBtn = (isActive: string) => {
    if (isActive === "hot") {
      setIsHotLatest("hot");
    } else if (isActive === "latest") {
      setIsHotLatest("latest");
    }
  };

  return (
    <Container>
      <Contents>
        <TitleViewBox>
          <Title>{"사진"}</Title>
          <Dec>{"다양한 장소들의 후기들을 공유하고 볼 수 있어요."}</Dec>
        </TitleViewBox>
      </Contents>
      <HotLatestView>
        <HotLatestButton
          underLine={isHotLatest === "hot" ? "1px" : "0"}
          activeColor={isHotLatest === "hot" ? "#000000" : "#979797"}
          onClick={() => {
            handleHotLatestBtn("hot");
          }}
        >
          {"인기순"}
        </HotLatestButton>
        <HotLatestButton
          underLine={isHotLatest === "latest" ? "1px" : "0"}
          activeColor={isHotLatest === "latest" ? "#000000" : "#979797"}
          onClick={() => {
            handleHotLatestBtn("latest");
          }}
        >
          {"최신순"}
        </HotLatestButton>
        <PhotoContents>
          <ContentsNone>
            <MessageBox>
              <Image
                src={`/assets/icons/photo-black.svg`}
                alt="menuIcon"
                width={100}
                height={100}
              />
              <AlertMessage>{"현재 등록된 사진이 없어요"}</AlertMessage>
              <Dec>{"사진을 먼저 등록해 보시는건 어때요?"}</Dec>
            </MessageBox>
          </ContentsNone>
        </PhotoContents>
      </HotLatestView>
    </Container>
  );
}

const Container = styled.main`
  margin: 0 auto;
  width: 428px;
  min-width: 428px;
  background-color: #ffffff;
`;

const Contents = styled.div`
  padding: 0 18px;
`;

const TitleViewBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Dec = styled.div`
  font-size: 14px;
  color: #909090;
`;

const HotLatestView = styled.div`
  width: 100%;
  margin-top: 8px;
`;

const HotLatestButton = styled.button<{
  underLine: string;
  activeColor: string;
}>`
  width: 50%;
  border: 0;
  border-bottom: ${(props) => props.underLine || 0} solid #000;
  color: ${(props) => props.activeColor || "#979797"};
  padding: 15px 0 15px 0;
  background-color: #ffffff;
  cursor: pointer;
`;

const PhotoContents = styled.div`
  height: auto;
  margin-top: 25px;
`;

const ContentsNone = styled.div`
  height: 715px;
  ${({ theme }) => theme.MIXINS.flexBox("row")};
`;

const MessageBox = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("column")};
`;

const AlertMessage = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 700;
`;
