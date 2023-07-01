import React from "react";
import styled from "@/styles/experience.module.css";

import { Timeline } from "@/component/Timeline";
const experience = ({ experience }) => {
  return (
    <div ref={experience} className={styled.parent}>
      <Timeline />
    </div>
  );
};

export default experience;
