import Image from "next/image";
import styled from "styled-components";

export default function HotListItem() {
  return (
    <Container>
      <NoListView>
        <Image
          src="/assets/icons/Rectangle.png"
          width={73}
          height={73}
          alt="No List Image"
        />
        <NoListMsg>{"아직 추가된 게시물이 없어요"}</NoListMsg>
        <NoListMsgSub>{"다른 느낌을 선택해보시는 건 어때요?"}</NoListMsgSub>
      </NoListView>
    </Container>
  );
}

const Container = styled.div`
  height: 400px;
  ${({ theme }) => theme.MIXINS.flexBox()};
`;

const NoListView = styled.article`
  ${({ theme }) => theme.MIXINS.flexBox("column")};
`;

const NoListMsg = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.background900};
`;

const NoListMsgSub = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.background900};
`;
