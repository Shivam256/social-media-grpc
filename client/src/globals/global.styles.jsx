import { Box, styled, Button, TextField } from "@mui/material";

export const MyPage = styled(Box)(() => ({
  width: "100vw",
  height: "100vh",
  padding: "20px",
}));

export const CustomButton = styled(Button)(() => ({
  width: "fit-content",
  height: "fit-content",
  padding: "8px 20px",
  backgroundColor: "#109ece",
  color: "#fff",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#109ece",
    color: "#fff",
  },
}));

export const CustomTextField = styled(TextField)(()=>({
    width:'100%'
}))
