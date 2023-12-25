"use client";
import Image from "next/image";
import styled from "styled-components";
import AddImageItem from "./AddImageItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Post() {
  return (
    <Container>
      <AddImageBox>
        <AddImageItem />
        <AddImageItem />
        <AddImageItem />
        <AddImageItem />
      </AddImageBox>
      <AddImageUpload>
        <Image
          src={`/assets/icons/ic_twotone-add-photo.svg`}
          alt="add photo"
          width={114}
          height={114}
        />
      </AddImageUpload>
      <AddTextBox>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              width: "100%",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="제목을 입력해 주세요"
            variant="standard"
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { marginTop: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-multiline-static"
            label="700자 내외로 내용을 입력해주세요."
            multiline
            rows={6}
            variant="standard"
          />
        </Box>
      </AddTextBox>
    </Container>
  );
}

const Container = styled.div``;

const AddImageBox = styled.section`
  ${({ theme }) => theme.MIXINS.flexBox()};
  gap: 8px;
  background-color: #111111;
  padding: 10px 20px;
`;

const AddImageUpload = styled.section`
  ${({ theme }) => theme.MIXINS.flexBox()};
  background-color: #e6e6e6;
  height: 420px;
`;

const AddTextBox = styled.section`
  padding: 10px 20px;
  background: #ffffff;
`;
