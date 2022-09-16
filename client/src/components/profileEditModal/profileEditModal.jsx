import { Avatar, Box, Modal, Slide, styled, Badge } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react";
import { Fade } from "react-reveal";
import { CustomButton, CustomTextField } from "../../globals/global.styles";
import { useDropzone } from "react-dropzone";

import useAuth from "../../hooks/useAuth";

const ProfileEditModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "30vw",
  height: "fit-content",
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
  alignItems: "center",
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

const ProfileEditModal = ({ state, toggleModal }) => {
  const [isUploadActive, setIsUploadActive] = useState(false);
  const [userData, setUserData] = useState({
    profilePic: "",
    username: "",
    phone: "",
  });

  const toggleIsUploadActive = () => {
    setIsUploadActive(!isUploadActive);
  };

  const { user } = useAuth();

  useEffect(() => {
    setUserData({
      profilePic: user.profilePic,
      username: user.username,
      phone: user.phone,
    });
  }, [user]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setUserData({
      ...userData,
      profilePic: URL.createObjectURL(acceptedFiles[0]),
    });
  }, []);

  const { getRootProps, isDragActive, getInputProps } = useDropzone({ onDrop });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Modal open={state} onClose={toggleModal}>
      <Slide in={state} direction="up">
        <ProfileEditModalContainer>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              alignItems: "center",
              "& .react-reveal": { width: "100%" },
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "40px",
                    backgroundColor: "#8e8e8e",
                    display: "grid",
                    placeItems: "center",
                    cursor: "pointer",
                    "& svg": {
                      transform: "scale(1.8)",
                    },
                  }}
                  onClick={toggleIsUploadActive}
                >
                  {isUploadActive ? (
                    <Icon icon="ep:close-bold" color="white" />
                  ) : (
                    <Icon icon="ci:edit" color="white" />
                  )}
                </Box>
              }
            >
              <Avatar
                sx={{ width: "150px", height: "150px" }}
                src={userData.profilePic}
              />
            </Badge>

            {isUploadActive ? (
              <Fade>
                <Box
                  sx={{
                    border: isDragActive
                      ? "2px dashed #109ece"
                      : "2px dashed #a4a4a4",
                    width: "100%",
                    padding: "55px 20px",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  drag and drop the image here!
                </Box>
              </Fade>
            ) : (
              <Box>
                <CustomTextField
                  label="Username"
                  style={{ marginBottom: "20px" }}
                  name="username"
                />
                <CustomTextField label="Phone" name="phone" />
              </Box>
            )}

            <Box sx={{ display: "flex", gap: "20px" }}>
              <CustomButton>SAVE</CustomButton>
              <CustomButton onClick={toggleModal}>CLOSE</CustomButton>
            </Box>
          </Box>
        </ProfileEditModalContainer>
      </Slide>
    </Modal>
  );
};

export default ProfileEditModal;
