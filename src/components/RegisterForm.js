import React, { useState, useEffect } from "react";
import {
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Grid,
  TextField,
  Button,
  Paper,
  Avatar,
  Typography,
  Checkbox,
  Alert,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import axios from "../config/config";
import Notification from "./utils/Notification";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [confirmRules, setConfirmRules] = useState(false);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  // eslint-disable-next-line
  const [success, setSuccess] = useState(false);

  const axiosSubmit = async (event) => {
    event.preventDefault();
    if (password !== rePassword) {
      return setErrMsg("Пароли не совпадают!");
    }
    try {
      await axios
        .post(`/api/users/register`, {
          username: login,
          email: email,
          password: password,
        })
        .then(async (response) => {
          if (!response.data.success) {
            return setErrMsg(response.data.msg);
          }
          setSuccess(true);
          
          setNotify({
            isOpen: true,
            message: response.data.msg,
            type: "success",
          });

          localStorage.setItem("isAuth", true);
          localStorage.setItem("Username", login);
          await new Promise((r) => setTimeout(r, 1000));
          navigate("/login");
        });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  useEffect(() => {
    setErrMsg("");
  }, [login, email, rePassword, password]);

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
    <Grid>
      {errMsg !== "" ? (
        <Alert aria-live="assertive" severity="error">
          {errMsg}
        </Alert>
      ) : (
        ""
      )}

      <Paper elevation={24} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlined />
          </Avatar>
          <h2 style={headerStyle}>Регистрация</h2>
          <Typography variant="caption">Заполните форму регистрации</Typography>
        </Grid>

        <TextField
          fullWidth
          label="Логин"
          variant="standard"
          placeholder="Введите логин"
          onChange={(event) => setLogin(event.target.value)}
          value={login}
        />

        <TextField
          fullWidth
          label="Почта"
          variant="standard"
          placeholder="Введите почту"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <FormLabel id="demo-row-radio-buttons-group-label">Ваш пол</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="male" control={<Radio />} label="Мужской" />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Женский"
          />
        </RadioGroup>
        <TextField
          fullWidth
          label="Пароль"
          variant="standard"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <TextField
          fullWidth
          label="Повторите пароль"
          variant="standard"
          type="password"
          onChange={(event) => setRePassword(event.target.value)}
          value={rePassword}
        />
        <FormControlLabel
          control={
            <Checkbox
              size="medium"
              color="success"
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              onChange={(event) => setConfirmRules(event.target.checked)}
            />
          }
          label="Я принимаю условия проекта"
        />

        <Button
          variant="contained"
          color="success"
          size="large"
          disabled={!confirmRules}
          onClick={axiosSubmit}
        >
          Зарегестрироваться
        </Button>
      </Paper>
      <Notification notify={notify} setNotify={setNotify} />
    </Grid>
  );
};

export default RegisterForm;
