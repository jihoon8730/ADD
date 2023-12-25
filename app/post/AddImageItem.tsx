import Image from "next/image";
import styled from "styled-components";

export default function AddImageItem() {
  return (
    <ItemBox>
      <Image
        src={`/assets/icons/ic_twotone-add-photo.svg`}
        alt="add photo"
        width={38}
        height={38}
      />
    </ItemBox>
  );
}

const ItemBox = styled.article`
  ${({ theme }) => theme.MIXINS.flexBox()};
  width: 90px;
  height: 90px;
  background-color: #e6e6e6;
`;
