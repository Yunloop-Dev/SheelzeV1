import React from "react";
import { AccountBoxOutlined } from "@mui/icons-material";
import { Avatar, Grid, Paper, Typography } from "@mui/material";

const user = localStorage.getItem("Username");

const paperStyle = {
  padding: "30px 20px",
  width: "50vw",
  margin: "20px auto",
};

const Settings = () => {
  return (
    <div>
      <Grid style={{ alignItems: "center", textAlign: "center" }}>
        <Paper elevation={24} style={paperStyle}>
          <Typography>Настройки {user}</Typography>
          <Avatar>
            <AccountBoxOutlined />
          </Avatar>
          <Typography></Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default Settings;
