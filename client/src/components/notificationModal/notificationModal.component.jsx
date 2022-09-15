import { Avatar, Box, Modal, Slide, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import useUser from "../../hooks/useUser";
import useFriend from "../../hooks/useFriend";
import { Icon } from "@iconify/react";

const NotificationModalContianer = styled(Box)(({ theme }) => ({
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

const RequestOverview = styled(Box)(() => ({
  width: "100%",
  borderRadius: "10px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  padding: "10px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  "& .innerbx": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  },
  "& .icon-btns": {
    transform: "scale(1.5)",
    margin: "0px 5px",
    cursor: "pointer",
  },
}));

const NotificationModal = ({ state, toggleModal }) => {
  const { getFriendRequests, friendRequests, setFriendRequests } = useUser();
  const { approveFriendRequest, rejectFriendRequest } = useFriend();

  useEffect(() => {
    getFriendRequests();
  }, [state]);

  const handleApprove = (fr) => {
    approveFriendRequest(fr.id, fr.userId);
    const newReqs = friendRequests.filter((f) => f.id !== fr.id);
    setFriendRequests([...newReqs]);
  };

  const handleReject = (fr) =>{
    rejectFriendRequest(fr.id);
    const newReqs = friendRequests.filter((f) => f.id !== fr.id);
    setFriendRequests([...newReqs]);
  }

  return (
    <Modal open={state} onClose={toggleModal}>
      <Slide in={state} direction="up">
        <NotificationModalContianer>
          <div className="heading">Notifications</div>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="sub-heading">Friend requests:</div>
            {friendRequests.map((fr) => (
              <RequestOverview>
                <Box className="innerbx">
                  <Avatar />
                  {fr.user}
                </Box>
                <Box className="innerbx">
                  <Icon
                    icon="akar-icons:circle-check"
                    className="icon-btns"
                    color="green"
                    onClick={() => {
                      handleApprove(fr);
                    }}
                  />
                  <Icon
                    icon="charm:circle-cross"
                    className="icon-btns"
                    color="red"
                    onClick={() => {
                      handleReject(fr);
                    }}
                  />
                </Box>
              </RequestOverview>
            ))}
          </Box>
        </NotificationModalContianer>
      </Slide>
    </Modal>
  );
};

export default NotificationModal;
