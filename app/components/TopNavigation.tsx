import styled from "styled-components";

import SideBarIcon from "../../public/assets/icons/menu-bar.svg";
import AddLogo from "../../public/assets/icons/logo_pink.svg";

export default function TopNavigation({
  isModal,
  setIsModal,
}: {
  setIsModal: any;
  isModal: any;
}) {
  const handleMenuToggle = () => {
    setIsModal(!isModal);
    console.log("isModal : ", isModal);
  };

  return (
    <Header>
      <ViewBox contentPosition="">
        <SideBarIcon style={{ cursor: "pointer" }} onClick={handleMenuToggle} />
      </ViewBox>
      <ViewBox contentPosition="center">
        <AddLogo />
      </ViewBox>
      <ViewBox contentPosition="" />
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px 0 10px;
  width: 100%;
  height: 58px;
  background-color: #ffffff;
`;

const ViewBox = styled.div<{ contentPosition: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.contentPosition || "flex-start"};
  width: 33.33%;
`;
