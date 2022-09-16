import { styled, Box, Grid } from "@mui/material";

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

export const PostsContainer = styled(Grid)(() => ({
  width: "80%",
  marginTop: "20px",
}));

export const Post = styled(Grid)(() => ({
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  margin:'10px 10px',
  "& .post-content": {
    width: "100%",
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const PostImage = styled(Box)(({ src }) => ({
  width: "100%",
  height: "200px",
  backgroundImage: `url('${src}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
}));
