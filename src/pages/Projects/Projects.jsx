import React from "react";
import { motion } from "framer-motion";
import "./projects.css";
import { Container, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Projects = () => {
  return (
    <motion.div
      className="projects"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.1 }}
    >
      <Container maxWidth="xl" className="title">
       <h2 className="ingithub"> projects in github </h2>

        <Grid container className="container">
          <Grid xl={4} md={4} xs={12} item className="item">
            <div className="body">
              <div className="card">
                <h4>E-commerce client </h4>
                <a href="https://github.com/Motaz-fathy/E-commerce-client">
                  <GitHubIcon />
                </a>
              </div>
              <div className="using">Reactjs , redux , html , css </div>
            </div>
          </Grid>
          <Grid xl={4} md={4} xs={12} item className="item">
            <div className="body">
              <div className="card">
                <h4>E-commerce server </h4>
                <a href="https://github.com/Motaz-fathy/E-commerce_server">
                  <GitHubIcon />
                </a>
              </div>
              <div className="using">nodejs , express , mongoose , jwt</div>
            </div>
          </Grid>
          <Grid xl={4} md={4} xs={12} item className="item">
            <div className="body">
              <div className="card">
                <h4>CRUD full stack</h4>
                <a href="https://github.com/Motaz-fathy/CRUD">
                  <GitHubIcon />
                </a>
              </div>
              <div className="using">nodejs , express , mongoose , jwt , reactjs , redux </div>
            </div>
          </Grid>
          <Grid xl={4} md={4} xs={12} item className="item">
            <div className="body">
              <div className="card">
                <h4>profile client </h4>
                <a href="https://github.com/Motaz-fathy/pofile">
                  <GitHubIcon />
                </a>
              </div>
              <div className="using">Reactjs , redux , html , css</div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};
