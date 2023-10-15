"use client";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import PhotoSlick from "./component/photoSlick";

export default function PhotoDetail() {
  const pathName = usePathname();
  console.log("pathName: " + pathName);
  return (
    <Container>
      <PhotoSlick />
      <ContentsView></ContentsView>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const ContentsView = styled.section`
  height: auto;
`;
