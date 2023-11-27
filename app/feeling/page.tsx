"use client";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

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
        <div></div>
      </FeelingMiddle>
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
