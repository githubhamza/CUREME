import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, getLoggedInUser, isAdmin, isDoctor } from "./check";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";
const TopMenu = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const routes = ["/Doc", "/Hosp", "/Blog", "/Contact"];
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src={require("../../src/images/logo.png")}
              style={{ width: "50%", height: "50%" }}
            ></img>
          </a>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab
                  label="Doctors"
                  value={routes[0]}
                  component={Link}
                  to={"/Doc"}
                />
                <Tab
                  label="Hospitals"
                  value={routes[1]}
                  component={Link}
                  to={routes[1]}
                />
                <Tab
                  label="Blog"
                  value={routes[2]}
                  component={Link}
                  to={routes[2]}
                />
                <Tab
                  label="Contact Us"
                  value={routes[3]}
                  component={Link}
                  to={routes[3]}
                />
              </Tabs>
              {!isLoggedIn() ? (
                <>
                  <a
                    href="/Login"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button
                      sx={{ marginLeft: "auto" }}
                      variant="contained"
                      style={{ borderRadius: "10px" }}
                    >
                      Login
                    </Button>
                  </a>
                  <a
                    href="/SignUp"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button
                      sx={{ marginLeft: "10px" }}
                      variant="contained"
                      style={{ borderRadius: "10px" }}
                      color="secondary"
                    >
                      SignUp
                    </Button>
                  </a>{" "}
                </>
              ) : (
                <Button
                  sx={{ marginLeft: "10px" }}
                  variant="contained"
                  style={{ borderRadius: "10px" }}
                  color="error"
                  onClick={(e) => {
                    e.preventDefault();
                    localStorage.removeItem("token");
                    navigate("/Login");
                  }}
                >
                  Logout
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default TopMenu;
