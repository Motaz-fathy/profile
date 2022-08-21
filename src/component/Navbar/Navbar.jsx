import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import WorkIcon from "@mui/icons-material/Work";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PersonIcon from "@mui/icons-material/Person";

export const Navbar = () => {
  return (
    <nav>
      <BottomNavigation
        className="navbg"
        sx={{ width: 100 }}
      >
        <Link to={"/"}>
          {" "}<BottomNavigationAction

            icon={<PersonIcon />}
            className="icon"
          />
        </Link>
        <Link to={"/projects"}>
          {" "}<BottomNavigationAction
       
            icon={<WorkIcon />}
            className="icon"

          />
        </Link>
        <Link to={"/skills"}>
          {" "}<BottomNavigationAction

            icon={<SettingsSuggestIcon />}
            className="icon"

          />
        </Link>
        <Link to={"/contact"}>
          {" "}<BottomNavigationAction

            icon={<ContactPhoneIcon />}
            className="icon"

          />
        </Link>
      </BottomNavigation>
    </nav>
  );
};
