import { Avatar, Box, Modal, Slide, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const ImageUploadModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "30vw",
  height: "70vh",
  left: "35vw",
  top: "15vh",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.2)",
  borderRadius: 15,
  display: "flex",
  flexDirection: "column",
  padding: "30px",
  gap: "20px",
  outline: "none",
  "& .heading": {
    fontSize: "1.2em",
    fontWeight: 700,
  },
  "& .sub-heading": {
    fontSize: "0.9em",
    color: "#636363a2",
    fontWeight: 500,
  },
  "& legend": {
    width: "unset",
  },
  [theme.breakpoints.down("md")]: {
    width: "90vw",
    left: "5vw",
  },
}));

const ImageUploadModal = ({ state, toggleModal }) => {
  return (
    <Modal open={state} onClose={toggleModal}>
      <Slide in={state} direction="up">
        <ImageUploadModalContainer>
          <div className="heading">Notifications</div>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            hehhehe
          </Box>
        </ImageUploadModalContainer>
      </Slide>
    </Modal>
  );
};

export default ImageUploadModal;
