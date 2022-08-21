import React from "react";
import { Routes, Route , useLocation} from "react-router-dom";
import { Info } from "../Info/Info";
import { Contact } from "../Contact/Contact";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";
import { AnimatePresence } from 'framer-motion'


export const Home = () => {


const location = useLocation()

  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<Info />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/skills" element={<Skills />} />
    </Routes>
    </AnimatePresence>
  );
};
