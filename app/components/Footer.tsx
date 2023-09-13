import Image from "@/node_modules/next/image";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterView>
      <Image
        src={"/assets/icons/footer-tel.svg"}
        width={60}
        height={56}
        alt={"FooterTel failed"}
      />
      <TelNumber>{"010-0000-0000"}</TelNumber>
      <Description>{"10:00~18:00 주말/공휴일 제외"}</Description>

      <PolicyBox>
        <Buttons>{"이용약관"}</Buttons>
        <Lines>{"|"}</Lines>
        <Buttons>{"개인정보처리방침"}</Buttons>
        <Lines>{"|"}</Lines>
        <Buttons>{"청소년보호정책"}</Buttons>
        <Lines>{"|"}</Lines>
        <Buttons>{"고객센터"}</Buttons>
      </PolicyBox>
    </FooterView>
  );
}

const FooterView = styled.footer`
  display: flex;
  flex-direction: column;
  height: 202px;
  padding: 19px 31px 0px 31px;
  background-color: #ebecf3;
`;

const TelNumber = styled.text`
  color: #000000;
  font-size: 25px;
  font-weight: 700;
`;

const Description = styled.text`
  color: #000000;
  font-size: 14px;
  font-weight: 300;
`;

const PolicyBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 31px;
`;
const Buttons = styled.button`
  font-size: 12px;
  font-weight: 400;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const Lines = styled.text`
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 400;
`;
