"use client";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import ListController from "./ListController";
import TagItem from "./TagItem";

export default function Feeling() {
  return (
    <Container>
      <FeelingHeader>
        <HeaderTitle>{"#느낌"}</HeaderTitle>
        <HeaderDec>{"다양한 테마의 데이트코스를 찾아볼 수 있어요!"}</HeaderDec>
      </FeelingHeader>
      <FeelingMiddle>
        <MiddleFeelingTotal>
          <MiddleCount>{0}</MiddleCount>
        </MiddleFeelingTotal>
      </FeelingMiddle>
      <TagView>
        <TagItem title={"명소"} />
        <TagItem title={"기념일"} />
        <TagItem title={"낭만적인"} />
        <TagItem title={"기억에 남을만한"} />
        <TagItem title={"명소"} />
        <TagItem title={"핫플"} />
        <TagItem title={"문화"} />
        <TagItem title={"맛집"} />
        <TagItem title={"산책"} />
        <TagItem title={"전망대"} />
        <TagItem title={"포토존"} />
      </TagView>
      <ListView>
        <ListController />
      </ListView>
    </Container>
  );
}

const Container = styled.section`
  padding: 0 20px;
  background-color: #ffffff;
`;

const FeelingHeader = styled.article`
  ${({ theme }) => theme.MIXINS.flexBox("column", "", "")};
  gap: 10px;
  color: ${({ theme }) => theme.colors.background900};
  font-size: 24px;
  font-weight: 700;
`;

const HeaderTitle = styled.div``;

const HeaderDec = styled.div`
  color: #909090;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FeelingMiddle = styled.article`
  ${({ theme }) => theme.MIXINS.flexBox("row", "center", "center")};
  margin-top: 31px;
`;

const MiddleFeelingTotal = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row", "center", "center")};
  width: 106px;
  height: 106px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.pink300};
`;

const MiddleCount = styled.div`
  color: #fff;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const TagView = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 53px;
`;

const ListView = styled.section`
  margin-top: 48px;
`;
