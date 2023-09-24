"use client";
import styled from "styled-components";

export default function Photo() {
  return (
    <Container>
      <Contents>
        <TitleViewBox>
          <Title>{"사진"}</Title>
          <Dec>{"다양한 장소들의 후기들을 공유하고 볼 수 있어요."}</Dec>
        </TitleViewBox>
      </Contents>
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
