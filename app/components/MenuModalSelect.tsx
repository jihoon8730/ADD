import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface MenuModalSelectState {
  iconCode: string;
  title: string;
  url: string;
}

export default function MenuModalSelect({
  iconCode,
  title,
  url,
}: MenuModalSelectState) {
  const router = useRouter();

  const handlePage = () => {
    router.push(url);
  };
  return (
    <SelectView onClick={handlePage}>
      <Icons>
        <Image
          src={`/assets/icons/${iconCode}.svg`}
          alt="menuIcon"
          width={24}
          height={24}
        />
      </Icons>
      <Title>{title}</Title>
    </SelectView>
  );
}

const SelectView = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row", "flex-start")};
  border-top: 1px solid #797979;
  padding: 20px;
  cursor: pointer;
`;

const Icons = styled.div`
  width: 80px;
`;

const Title = styled.div`
  font-size: 16px;
`;
