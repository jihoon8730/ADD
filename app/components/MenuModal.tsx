import React, { useState } from "react";
import Modal from "react-modal";
import SideBarIcon from "../../public/assets/icons/menu-bar.svg";
import styled from "styled-components";

import AddLogo from "../../public/assets/icons/logo_pink.svg";
import CloseIcon from "../../public/assets/icons/x-circle.svg";
import MenuModalSelect from "./MenuModalSelect";

const customStyles: any = {
  overlay: {
    position: "fixed",
    top: 0,
    left: "auto",
    right: "auto",
    bottom: 0,
    width: "428px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "288px",
    outline: "none",
    overflow: "auto",
    padding: 0,
    borderRadius: "0px 20px 0 0",
    backgroundColor: "#DFF4EE",
  },
};

const MenuModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <SideBarIcon onClick={openModal} />
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <ModalView>
          <CloseButton>
            <CloseIcon style={{ cursor: "pointer" }} onClick={closeModal}>
              {"닫기"} /
            </CloseIcon>
          </CloseButton>
          <LogoBox>
            <AddLogo />
          </LogoBox>
          <SelectView>
            <MenuModalSelect iconCode="select-menu" title="내가 쓴 글" />
            <MenuModalSelect iconCode="write" title="이야기 작성하러 가기" />
            <MenuModalSelect iconCode="qna" title="어디든지 문의하기" />
            <MenuModalSelect iconCode="logout" title="로그아웃" />
          </SelectView>
        </ModalView>
      </Modal>
    </div>
  );
};

const ModalView = styled.div``;

const CloseButton = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row", "flex-end")};
  padding-right: 10px;
  padding-top: 10px;
`;

const LogoBox = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row", "center")}
  margin-top: 18px;
`;

const SelectView = styled.section`
  margin-top: 36px;
`;

export default MenuModal;
