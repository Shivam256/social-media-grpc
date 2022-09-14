import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MyPage } from "../../globals/global.styles";

import useUser from "../../hooks/useUser";

const Explore = () => {
  const { fetchUsers, users } = useUser();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <MyPage>
      <h1>just a list of current users</h1>
      {users.length > 0 ? users.map((u) => <Box>{u.username}- <Link to={`/client/profile/${u.id}`} >link</Link> </Box>) : null}
    </MyPage>
  );
};

export default Explore;
