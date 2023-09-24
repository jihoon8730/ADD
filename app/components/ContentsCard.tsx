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
        <Tag colors="#ffa360" groundcolor="#fff5ee">
          <TagDescription fontcolor="#FFA360">{"#산책"}</TagDescription>
        </Tag>
        <Tag colors="#3C67FF" groundcolor="#EFF2FF">
          <TagDescription fontcolor="#3C67FF">{"#명소"}</TagDescription>
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
      <DecView>
        <Title>{"다시 찾을 명소 중 하나"}</Title>
        <Description>
          {
            "Copy 처음에는 여기가 괜찮은 줄 전혀 몰랐거든요? 그런데 막상 가보니 까 재밌는 것들도 엄청 많고 산책하는 거 좋아하시면 완전 강추드 립니다😊 사실 양심 고백을 하자면 굉장히 별로였는데 돈 받아..."
          }
        </Description>
      </DecView>
      <PriceView>
        <PriceBox>
          <Price>{"총 비용 : 33,000원"}</Price>
        </PriceBox>
      </PriceView>
    </Cards>
  );
}

const Cards = styled.article`
  width: 350px;
  height: auto;
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

const Place = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row")}
`;

const PlaceTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #6d6d6d;
`;

const DecView = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("column", "center", "start")};
  margin-top: 5px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Description = styled.div`
  font-size: 14px;
  color: #8e8e8e;
`;

const PriceView = styled.section`
  ${({ theme }) => theme.MIXINS.flexBox("row", "end")};
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
