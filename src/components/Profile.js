import { AccountBoxOutlined } from "@mui/icons-material";
import { Avatar, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const paperStyle = {
  padding: "30px 20px",
  width: "50vw",
  margin: "20px auto",
};

const user = localStorage.getItem("Username");

const Profile = () => {
  return (
    <div>
      <Grid style={{ alignItems: "center", textAlign: "center" }}>
        <Paper elevation={24} style={paperStyle}>
          <Typography>Профиль {user}</Typography>
          <Avatar>
            <AccountBoxOutlined />
          </Avatar>
          <Typography></Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default Profile;
