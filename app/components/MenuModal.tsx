import { Opacity } from "@mui/icons-material";
import React, { useState } from "react";
import Modal from "react-modal";
import SideBarIcon from "../../public/assets/icons/menu-bar.svg";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "75%",
    outline: "none",
    overflow: "auto",
    borderRadius: "0px",
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
        <h2>모달 제목</h2>
        <p>모달 내용</p>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </div>
  );
};

export default MenuModal;
