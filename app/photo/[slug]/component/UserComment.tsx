import styled from "styled-components";
import Image from "next/image";

interface propsType {
  userName: string;
  userContents: string;
  userLikeCount: number;
  userCreateAt: string;
  isLike: boolean;
}

export default function UserComment({
  userName,
  userContents,
  userLikeCount,
  userCreateAt,
  isLike,
}: propsType) {
  return (
    <UserCommentContainer>
      <div>
        <UserName>{userName}</UserName>
        <UserContentsBox>
          <UserContents>
            <UserContentsDec>{userContents}</UserContentsDec>
          </UserContents>
          {isLike && (
            <UserLikeCountBox>
              <Image
                src={`/assets/icons/iconamoon_heart-fill.svg`}
                alt="LikeFill Icon"
                width={13}
                height={13}
              />
              <UserLikeCount>{userLikeCount}</UserLikeCount>
            </UserLikeCountBox>
          )}
        </UserContentsBox>
      </div>
      <CreateDateBox>
        <CreateDate>{userCreateAt}</CreateDate>
      </CreateDateBox>
    </UserCommentContainer>
  );
}

const UserCommentContainer = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row", "space-between", "end")};
  padding-top: 14px;
  gap: 10px;
`;

const UserName = styled.div`
  color: #a5a5a5;
  font-size: 10px;
  font-weight: 500;
`;

const UserContentsBox = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row", "", "")};
`;

const UserContents = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 15px;
  background-color: #e8e8e8;
  border-radius: 50px;
  width: 100%;
`;

const UserContentsDec = styled.div`
  color: ${({ theme }) => theme.colors.background900};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const UserLikeCountBox = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row", "center", "center")};
  height: 17px;
  padding: 2px 5px 1px 5px;
  border-radius: 7px;
  background: #ffe1f1;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
`;

const UserLikeCount = styled.div`
  color: #ff4e8d;
  font-size: 11px;
  font-weight: 700;
`;

const CreateDateBox = styled.article``;

const CreateDate = styled.div`
  color: #a5a5a5;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
`;
