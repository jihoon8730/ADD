"use client";
import styled from "styled-components";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PhotoSlick from "./component/photoSlick";

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
              <Text>{"실시간 인기"}</Text>
            </HotBox>
          </HotBestView>
        </TopTitleView>
      </ContentsView>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const ContentsView = styled.section`
  background-color: #ffffff;
  padding: 18px 23px 0 23px;
  height: 500px;
`;

const TopTitleView = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row", "center", "center")};
`;

const HotBestView = styled.div``;

const HotBox = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row", "", "center")};
  gap: 8px;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.pink300};
  font-size: 12px;
  font-weight: 700;
`;
