import styled from "styled-components";
import Image from "next/image";

interface propsTypes {
  myName: string;
  myContents: string;
  myCreateAt: string;
}

export default function MyComment({
  myName,
  myContents,
  myCreateAt,
}: propsTypes) {
  return (
    <MyCommentContainer>
      <MyCreateDate>{myCreateAt}</MyCreateDate>
      <MyContentsBox>
        <MyName>{myName}</MyName>
        <MyContents>
          <MyContentsDec>{myContents}</MyContentsDec>
        </MyContents>
      </MyContentsBox>
      <div></div>
    </MyCommentContainer>
  );
}

const MyCommentContainer = styled.article`
  ${({ theme }) => theme.MIXINS.flexBox("row", "space-between", "end")};
  margin-top: 14px;
`;

const MyCreateDate = styled.div`
  color: #a5a5a5;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
`;

const MyContentsBox = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("column", "", "end")};
`;

const MyName = styled.div`
  color: #a5a5a5;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
`;

const MyContents = styled.div`
  display: inline-flex;
  padding: 11px 13px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 400px;
  background: #dbe3ff;
`;

const MyContentsDec = styled.div`
  color: #174aff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
