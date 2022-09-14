import { Box, styled } from "@mui/material";

export const HeaderContainer = styled(Box)(() => ({
  width: "100vw",
  position: "absolute",
  top: "0px",
  height: "50px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "20px 50px",
  justifyContent: "space-between",
  "& .section-2": {
    width: "fit-content",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "40px",
  },
  "& svg": {
    transform: "scale(1.5)",
    cursor: "pointer",
  },
  ".logo": {
    fontSize: "1.4em",
    fontWeight: 600,
  },
}));
