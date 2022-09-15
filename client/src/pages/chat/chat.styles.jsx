import { styled, Box } from "@mui/material";

export const ChatContainer = styled(Box)(() => ({
  width: "100%",
  height: "85vh",
  // padding: "10px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  borderRadius: "10px",
  display: "flex",
  // gap: "10px",
}));

export const ChatSidebar = styled(Box)(() => ({
  width: "20%",
  height: "100%",
  // backgroundColor:'red',
  padding: "5px",
  borderRight: "1px solid #a4a4a4",
}));

export const ChatScreen = styled(Box)(() => ({
  height: "100%",
  flex: 1,
  padding: "5px",
  // backgroundColor:'red'
}));

export const UserOverview = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "10px",
  backgroundColor: "#f0f0f0",
  borderRadius: "5px",
cursor: "pointer",
}));
