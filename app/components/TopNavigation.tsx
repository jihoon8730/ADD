import styled from "styled-components";
import AddLogo from "../../public/assets/icons/logo_pink.svg";
import BackButton from "../../public/assets/icons/top-back.svg";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import MenuModal from "./MenuModal";

export default function TopNavigation({
  isModal,
  setIsModal,
}: {
  setIsModal: any;
  isModal: any;
}) {
  // URL 경로 가져오기 NEXT 13
  const pathName = usePathname();
  // Router Next 13
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsModal(!isModal);
    console.log("isModal : ", isModal);
  };

  return (
    <Header>
      {pathName === "/" && (
        <>
          <ViewBox position="">
            <MenuModal />
          </ViewBox>
          <ViewBox position="center">
            <AddLogo />
          </ViewBox>
          <ViewBox position="" />
        </>
      )}
      {pathName === "/photo" && (
        <>
          <ViewBox position="" onClick={() => router.back()}>
            <BackButton />
          </ViewBox>
        </>
      )}
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 428px;
  height: 58px;
  min-width: 428px;
  margin: 0 auto;
  padding: 0 10px 0 10px;
  background-color: #ffffff;
`;

const ViewBox = styled.button<{ position: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.position || "flex-start"};
  width: 33.33%;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
