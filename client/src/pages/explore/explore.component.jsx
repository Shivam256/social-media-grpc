import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyPage } from "../../globals/global.styles";

import useUser from "../../hooks/useUser";

const Explore = () => {
  const { fetchUsers, users } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <MyPage>
      <h1>Platform users</h1>
      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        {users.length > 0
          ? users.map((u) => (
              <Grid item md={2}>
                <Box
                  sx={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "10px",
                    // border: "1px solid black",
                    minHeight: "70px",
                    maxHeight: "70px",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onClick={()=>{
                    navigate(`/client/profile/${u.id}`)
                  }}

                >
                  <Avatar />
                  <Typography>{u.username}</Typography>

                  {/* {u.username}- <Link to={`/client/profile/${u.id}`}>link</Link>{" "} */}
                </Box>
              </Grid>
            ))
          : null}
      </Grid>
      {/* {users.length > 0
        ? users.map((u) => (
            <Box
              sx={{
                width: "40%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid black",
              }}
            >
              {u.username}- <Link to={`/client/profile/${u.id}`}>link</Link>{" "}
            </Box>
          ))
        : null} */}
    </MyPage>
  );
};

export default Explore;
