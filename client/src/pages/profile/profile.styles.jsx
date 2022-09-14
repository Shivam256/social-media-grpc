import { styled, Box } from "@mui/material";

export const ProfileContainer = styled(Box)(() => ({
  width: "50%",
  height: "fit-content",
  padding: "30px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  borderRadius: "10px",
  display: "flex",
  gap: "30px",
  "& .stats-contanier": {
    display: "flex",
    gap: "30px",
    marginTop: "10px",
  },
  "& .stat": {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    gap: "10px",
  },
  "& .stat-number": {
    fontSize: "2em",
  },
  "& .addFriend-svg": {
    transform: "scale(1.5)",
    cursor: "pointer",
  },
}));
