/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import ImgMotaz from "./p2.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import "./info.css";


export const Info = () => {


  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.1 }}
      className="component"
      xs={9}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid xl={6} md={6} xs={12} item className="contentCenter">
            <div className="img-container">
              <img src={ImgMotaz} />
            </div>
          </Grid>
          <Grid xl={6} md={6} xs={12} item className="contenttext">
            <h2>
              I am Motaz Fathy <br />
              <span>
                (<span className="mern">MERN</span> satck developer)
              </span>
              <p>
                I am a computer science graduated who is interested in Software
                Engineering and building a complex back-end and front-end
                infrastructure of web applications including APIs, database
                design, and internal logic design.
              </p>
              <a tap href="https://www.linkedin.com/in/motaz-fathi-09a17a118/">
                <LinkedInIcon />{" "}
              </a>
              <a href="https://github.com/Motaz-fathy">
                <GitHubIcon />
              </a>
              <a href="#">
                {" "}<FacebookIcon />{" "}
              </a>
              <a href="#">
                {" "}<TwitterIcon />{" "}
              </a>
              <br />
                <Button variant="outlined" id='down'>download cv</Button>
            </h2>
          </Grid>
          <Grid xs={12}></Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};
