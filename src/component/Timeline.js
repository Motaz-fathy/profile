import styled from "@/styles/timeline.module.css";
import { useInView } from "react-intersection-observer";

export function Timeline() {

  const { ref: T1, inView: T1Visable } = useInView();
  const { ref: T2, inView: T2Visable } = useInView();
  const { ref: T3, inView: T3Visable } = useInView();
  const { ref: T4, inView: T4Visable } = useInView();
  const { ref: T5, inView: T5Visable } = useInView();
  

  return (
    <div>
      <div className={styled.timeline}>
        <div className={styled.title}>
          <h1> Experience and Projects </h1>
        </div>

        <div className={`${styled.checkpoint} ${T1Visable ? styled.TimeLineAnmation : ""}`} ref={T1} >
          <div className={styled.point}>
            <h2>04/2022</h2>
            <p className={styled.detalise}>
              Part of my study front-end development was to be trained at
              Appitunity, (Web development) Nasr City, Greater Cairo, Egypt.
            </p>
          </div>
        </div>

        <div className={`${styled.checkpoint} ${T2Visable ? styled.TimeLineAnmation : ""}`} ref={T2}>
          <div className={styled.point}>
            <h2>07/2022</h2>
            <p className={styled.detalise}>
              Part time as frontend developer at candlis in Saudi Arabia in
              large project school system .
            </p>
          </div>
        </div>

        <div className={`${styled.checkpoint} ${T3Visable ? styled.TimeLineAnmation : ""}`} ref={T3}>
          <div className={styled.point}>
            <h2>11/2022</h2>
            <p className={styled.detalise}>
              Developing full stack web application using clean and simple
              interfaces to facilitate using buying and paying products - Using
              : reactjs , materail UI react , redux , redux-think , nodejs ,
              express , mongodb redux-persist{" "}
            </p>
          </div>
        </div>

        <div className={`${styled.checkpoint} ${T4Visable ? styled.TimeLineAnmation : ""}`} ref={T4}>
          <div className={styled.point}>
            <h2>02/2023</h2>
            <p className={styled.detalise}>
              Developing a MERN stack project to handle website builder to make
              client build your website by himself . - Using : grapesjs ,
              reactjs , nodejs , express , mongodb ,bootstrap 4
            </p>
          </div>
        </div>

        <div className={`${styled.checkpoint} ${T5Visable ? styled.TimeLineAnmation : ""}`} ref={T5}>
          <div className={styled.point}>
            <h2>04/2023</h2>
            <p className={styled.detalise}>
              developing a frontend web to add building in google map and save
              the location in localStorge for each user . - Using : react TS ,
              materail ui react , useMemo , google map .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
