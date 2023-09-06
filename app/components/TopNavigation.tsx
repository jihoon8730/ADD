import styled from "styled-components";

import SideBarIcon from "../../public/assets/icons/menu-bar.svg";
import AddLogo from "../../public/assets/icons/add-logo.svg";

export default function TopNavigation() {
  const handleMenuToggle = () => {
    console.log("***MenuToggle");
  };

  return (
    <Header>
      <ViewBox>
        <SideBarIcon style={{ cursor: "pointer" }} onClick={handleMenuToggle} />
      </ViewBox>
      <ViewBox contentPosition="center">
        <AddLogo />
      </ViewBox>
      <ViewBox />
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
`;

const ViewBox = styled.div<{ contentPosition: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.contentPosition || "flex-start"};
  width: 33.33%;
`;
