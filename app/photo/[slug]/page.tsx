"use client";
import styled from "styled-components";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PhotoSlick from "./component/photoSlick";
import UserComment from "./component/UserComment";
import MyComment from "./component/MyComment";

import Button from "@mui/material/Button";
import { lime, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#DBE3FF",
    },
  },
});

export default function PhotoDetail() {
  const pathName = usePathname();
  // console.log("pathName: " + pathName);
  return (
    <Container>
      <PhotoSlick />
      <ContentsView>
        <TopTitleView>
          <HotBestView>
            <HotBox>
              <Image
                src={`/assets/icons/simple-line-icons_badge.svg`}
                alt="menuIcon"
                width={20}
                height={20}
              />
              <HotText>{"실시간 인기"}</HotText>
            </HotBox>
            <BestBox>
              <Image
                src={`/assets/icons/simple-line-icons_badge_blue.svg`}
                alt="menuIcon"
                width={20}
                height={20}
              />
              <BestText>{"주인장 추천"}</BestText>
            </BestBox>
          </HotBestView>
          <AdView>
            <AdBox>
              <Image
                src={`/assets/icons/simple-line-icons_badge_black.svg`}
                alt="menuIcon"
                width={20}
                height={20}
              />
              <AdText>{"본 게시물은 광고 게시물입니다."}</AdText>
            </AdBox>
          </AdView>
        </TopTitleView>
        <TitleView>
          <div>
            <TitleText>{"첫 잠실 데이트 했어요🥰"}</TitleText>
          </div>
          <NameDateBox>
            <Name>{"romii**"}</Name>
            <Date>{"2023-08-25"}</Date>
          </NameDateBox>
          <TagBox>
            <Tag colors="#ffa360" groundcolor="#fff5ee">
              <TagDescription fontcolor="#ffa360">{"#핫플"}</TagDescription>
            </Tag>
            <Tag colors="#3C67FF" groundcolor="#EFF2FF">
              <TagDescription fontcolor="#3C67FF">{"#명소"}</TagDescription>
            </Tag>
          </TagBox>
          <PlaceBox>
            <Image
              src={`/assets/icons/pin.svg`}
              alt="menuIcon"
              width={21}
              height={21}
            />
            <PlaceText>{"서울 잠실동"}</PlaceText>
          </PlaceBox>
        </TitleView>
        <DescriptionBox>
          <DescriptionText>
            {
              "첫 잠실 데이트를 했는데 예상보다 훨씬 좋았어요! 전체적으로 예쁘곡ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ첫 잠실 데이트를 했는데 예상보다 훨씬 좋았어요! 전체적으로 예쁘곡ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ첫 잠실 데이트를 했는데 예상보다 훨씬 좋았어요! 전체적으로 예쁘곡ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ첫 잠실 데이트를 했는데 예상보다 훨씬 좋았어요! 전체적으로 예쁘곡ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ첫 잠실 데이트를 했는데 예상보다 훨씬 좋았어요! 전체적으로 예쁘곡ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ첫 잠실 데이트를 했는데 예상보다 훨씬 좋았어요! 전체적으로 예쁘곡ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ첫 잠실 데이트를 했는데 예상보다 훨씬 좋았어요! 전체적으로 예쁘곡ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ첫 잠실 데이트를 했는데 예상보다 훨씬 좋았어요! 전체적으로 예쁘곡ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ첫 잠실 데이트를 했는데 예상보다 훨씬 좋았어요! 전체적으로 예쁘곡ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ첫 잠실 데이트를 했는데 예상보다 훨씬 좋았어요! 전체적으로 예쁘곡ㄱㄱㄱㄱㄱ"
            }
          </DescriptionText>
        </DescriptionBox>
        <BottomBox>
          <div>
            <PriceView>
              <PriceBox>
                <Price>{"총 비용 : 33,000원"}</Price>
              </PriceBox>
            </PriceView>
          </div>
          <LikeCommentBox>
            <LikeCountBox>
              <Image
                src={`/assets/icons/iconamoon_heart-duotone.svg`}
                alt="like Icon"
                width={36}
                height={36}
              />
              <LikeCount>{"1.2 k"}</LikeCount>
            </LikeCountBox>
            <CommentCountBox>
              <Image
                src={`/assets/icons/message_box.svg`}
                alt="Message Icon"
                width={28}
                height={25}
              />
              <CommentCount>{"41"}</CommentCount>
            </CommentCountBox>
          </LikeCommentBox>
        </BottomBox>
      </ContentsView>
      <CommentView>
        <CommentListBox>
          <UserComment
            userName={"romii**"}
            userContents={"헐 곰인형 이제 없어요?ㅠㅠ"}
            userLikeCount={32}
            userCreateAt={"12:00 PM"}
            isLike={true}
          />
          <UserComment
            userName={"loiiooi**"}
            userContents={
              "여기 주변에 맛집 같은 거 많나요? 아니 진짜 궁금해서물어보는 거예요. "
            }
            userLikeCount={32}
            userCreateAt={"12:00 PM"}
            isLike={false}
          />
          <MyComment
            myName={"글쓴이"}
            myContents={"맛집 이런 건 제 2 롯데월드몰 외에는 없던 것 같아요"}
            myCreateAt={"14:00 PM"}
          />
        </CommentListBox>
        <CommentInputBox>
          <TextInput placeholder={"궁금한 점이 있다면 물어보세요!"}></TextInput>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" size="small">
              <Image
                src={`/assets/icons/fluent_send-regular.svg`}
                alt="Message Icon"
                width={27}
                height={27}
              />
            </Button>
          </ThemeProvider>
        </CommentInputBox>
      </CommentView>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const ContentsView = styled.section`
  background-color: #ffffff;
  padding: 18px 23px 21px 23px;
  height: auto;
  border-bottom: 1px solid #aeaeae;
`;

const TopTitleView = styled.section``;

const HotBestView = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row")};
  gap: 8px;
`;

const AdView = styled.article`
  ${({ theme }) => theme.MIXINS.flexBox("row")};
`;

const HotBox = styled.article`
  ${({ theme }) => theme.MIXINS.flexBox("row", "", "center")};
  gap: 8px;
`;

const BestBox = styled.article`
  ${({ theme }) => theme.MIXINS.flexBox("row", "", "center")};
  gap: 8px;
`;

const HotText = styled.div`
  color: ${({ theme }) => theme.colors.pink300};
  font-size: 12px;
  font-weight: 700;
`;

const BestText = styled.div`
  color: #8458ff;
  font-size: 12px;
  font-weight: 700;
`;

const AdBox = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row", "", "center")};
  gap: 8px;
`;

const AdText = styled.div`
  color: #525252;
  font-size: 12px;
  font-weight: 700;
`;

const TitleView = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("column", "center", "center")};
`;

const TitleText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;

const NameDateBox = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row")};
  gap: 8px;
`;

const Name = styled.div`
  color: #6f6f6f;
  font-size: 12px;
  font-weight: 400;
`;

const Date = styled.div`
  color: #6f6f6f;
  font-size: 12px;
  font-weight: 400;
`;

const TagBox = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row")};
  gap: 10px;
  margin-top: 5px;
`;

const Tag = styled.div<{ colors: string; groundcolor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 25px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.colors || "#FFFFFF"};
  background-color: ${(props) => props.groundcolor || "#ffffff"};
`;

const TagDescription = styled.p<{ fontcolor: string }>`
  color: ${(props) => props.fontcolor || "#000000"};
  font-size: 13px;
`;

const PlaceBox = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row")};
  margin-top: 7px;
`;

const PlaceText = styled.div`
  color: #6d6d6d;
  font-size: 14px;
  font-weight: 500;
`;

const DescriptionBox = styled.article`
  margin-top: 20px;
`;

const DescriptionText = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
`;

const BottomBox = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row", "space-between", "center")};
  margin-top: 38px;
`;

const PriceView = styled.article`
  ${({ theme }) => theme.MIXINS.flexBox("row", "", "center")};
  margin-top: 10px;
`;

const PriceBox = styled.div`
  background-color: ${({ theme }) => theme.colors.green50};
  border-radius: 20px;
  padding: 3px 10px;
`;

const Price = styled.div`
  color: ${({ theme }) => theme.colors.green400};
  font-size: 16px;
  font-weight: 700;
`;

const LikeCommentBox = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row", "", "center")};
  gap: 24px;
`;

const LikeCountBox = styled.article`
  ${({ theme }) => theme.MIXINS.flexBox("row", "", "center")};
  gap: 5px;
`;

const LikeCount = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.background900};
`;

const CommentCountBox = styled.article`
  ${({ theme }) => theme.MIXINS.flexBox("row", "", "center")};
  gap: 5px;
`;

const CommentCount = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.background900};
`;

const CommentView = styled.section`
  height: auto;
  padding: 0px 23px 52px 23px;
  background-color: #ffffff;
`;

const CommentListBox = styled.article``;

const CommentInputBox = styled.article`
  ${({ theme }) => theme.MIXINS.flexBox("row", "space-between", "center")};
  margin-top: 44px;
  gap: 10px;
`;

const TextInput = styled.input`
  padding: 11px 11px;
  border-radius: 10px;
  background: #e8e8e8;
  border: none;
  width: 100%;

  &::placeholder {
    color: #898989;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
