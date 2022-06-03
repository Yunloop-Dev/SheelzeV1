import React, { useEffect,  useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Typography,
  Button,
  Alert,
} from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useAuth from "../models/user";
import axios from "../config/config";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    await axios
      .post("/api/users/login", { login: user, password: pwd })
      .then((response) => {
        if (!response.data.success) {
          return setErrMsg(response.data.msg);
        }
        login();
        localStorage.setItem("isAuth", response.data.success);
        localStorage.setItem("userData", JSON.stringify(response.data?.user));
        navigate("/profile");
      });
  };

  const paperStyle = {
    padding: "30px 20px",
    width: "300px",
    margin: "20px auto",
  };

  const headerStyle = {
    margin: 0,
  };

  const avatarStyle = {
    backgroundColor: "#abcdef",
  };

  return (
    <>
      {errMsg !== "" ? (
        <Alert aria-live="assertive" severity="error">
          {errMsg}
        </Alert>
      ) : (
        ""
      )}
      <Grid>
        <Paper elevation={24} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlined />
            </Avatar>
            <h2 style={headerStyle}>Авторизация</h2>
            <Typography variant="caption">
              Заполните форму регистрации
            </Typography>
          </Grid>
          <TextField
            fullWidth
            label="Логин"
            variant="standard"
            placeholder="Введите логин"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <TextField
            fullWidth
            label="Пароль"
            variant="standard"
            placeholder="Пароль"
            type="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <br />
          <br />
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={handleSubmit}
          >
            Авторизоваться
          </Button>
        </Paper>
      </Grid>

      <p>
        Нужен аккаунт?
        <br />
        <span>
          <a href="/register">Регистрация</a>
        </span>
      </p>
    </>
  );
};
export default Login;
