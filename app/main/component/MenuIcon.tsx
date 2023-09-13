import Image from "@/node_modules/next/image";
import styled from "styled-components";

export default function MenuIcon({ iconCode }: { iconCode: string }) {
  return (
    <Icons>
      <Image
        src={`/assets/icons/menuIcon/${iconCode}.svg`}
        alt="home"
        width={46}
        height={46}
      />
    </Icons>
  );
}

const Icons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 85px;
  border: 1px solid #b0b0b0;
  border-radius: 85px;
  background-color: #ffffff;
  cursor: pointer;
`;
