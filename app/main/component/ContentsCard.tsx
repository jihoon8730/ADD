import Image from "@/node_modules/next/image";
import styled from "styled-components";

export default function ContentsCard() {
  return (
    <Cards>
      <ImageBox>
        <Image
          src={"/assets/icons/imageTest.png"}
          width={350}
          height={217}
          alt={"imageLoading"}
        />
      </ImageBox>
      <TagBox>
        <Tag colors="#ffa360" backColor="#fff5ee">
          <TagDescription fontColor="#FFA360">{"#산책"}</TagDescription>
        </Tag>
        <Tag colors="#3C67FF" backColor="#EFF2FF">
          <TagDescription fontColor="#3C67FF">{"#명소"}</TagDescription>
        </Tag>
        <Place>
          <Image
            src={"/assets/icons/pin.svg"}
            width={22}
            height={22}
            alt={"Pin-Loading"}
          />
          <PlaceTitle>{"경기도 남양주시"}</PlaceTitle>
        </Place>
      </TagBox>
    </Cards>
  );
}

const Cards = styled.article`
  width: 350px;
  height: 390px;
  margin-top: 20px;
`;

const ImageBox = styled.section`
  border-radius: 19px;
  overflow: hidden;
`;

const TagBox = styled.section`
  display: flex;
  gap: 5px;
  margin-top: 8px;
`;

const Tag = styled.div<{ colors: string; backColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 25px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.colors || "#FFFFFF"};
  background-color: ${(props) => props.backColor || "#ffffff"};
`;

const TagDescription = styled.text<{ fontColor: string }>`
  color: ${(props) => props.fontColor || "#000000"};
  font-size: 13px;
`;

const Place = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row")}
`;

const PlaceTitle = styled.text`
  font-size: 14px;
  font-weight: 500;
  color: #6d6d6d;
`;
