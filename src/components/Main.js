import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Box>
        <Typography variant="h1" component="h2">
          Shellze
        </Typography>
        <Typography variant="h3" component="h4" mt={5} mb={20}>
          Социальная сеть \.-_-./
        </Typography>
      </Box>

      <Link to={`/register`} style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="success"
          size="large"
          href="/register"
        >
          Начать!
        </Button>
      </Link>
    </>
  );
};

export default Main;
