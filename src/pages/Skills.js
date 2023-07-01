import styled from "@/styles/skills.module.css";
import { useInView } from "react-intersection-observer";

export const Skills = ({ skills }) => {
  const { ref: Pro1, inView: Pro1Visable } = useInView();
  const { ref: Pro2, inView: Pro2Visable } = useInView();
  const { ref: Pro3, inView: Pro3Visable } = useInView();
  const { ref: Pro4, inView: Pro4Visable } = useInView();
  const { ref: Pro5, inView: Pro5Visable } = useInView();
  const { ref: Pro6, inView: Pro6Visable } = useInView();
  const { ref: Pro7, inView: Pro7Visable } = useInView();
  const { ref: Pro8, inView: Pro8Visable } = useInView();

  return (
    <div ref={skills} className={styled.parent}>
      <h1 className={styled.title}> Skills</h1>

      <div className={styled.container}>
        <div className={styled.progressBarBox}>
          <h4 className={styled.progressBarTitle}>HTML</h4>
          <div className={styled.progressBarItem} ref={Pro1}>
            <div
              className={`${styled.progressBarLine} ${styled.html} ${Pro1Visable
                ? styled.progressBarLineAnime
                : ""}`}
            >
              <span>95%</span>
            </div>
          </div>
        </div>

        <div className={styled.progressBarBox}>
          <h4 className={styled.progressBarTitle}>CSS</h4>
          <div className={styled.progressBarItem} ref={Pro2}>
            <div
              className={`${styled.progressBarLine} ${styled.css} ${Pro2Visable
                ? styled.progressBarLineAnime
                : ""}`}
            >
              <span>80%</span>
            </div>
          </div>
        </div>

        <div className={styled.progressBarBox}>
          <h4 className={styled.progressBarTitle}>Javascipt</h4>
          <div className={styled.progressBarItem} ref={Pro3}>
            <div
              className={`${styled.progressBarLine} ${styled.javascript} ${Pro3Visable
                ? styled.progressBarLineAnime
                : ""}`}
            >
              <span>70%</span>
            </div>
          </div>
        </div>

        <div className={styled.progressBarBox}>
          <h4 className={styled.progressBarTitle}>React js</h4>
          <div className={styled.progressBarItem} ref={Pro4}>
            <div
              className={`${styled.progressBarLine} ${styled.react} ${Pro4Visable
                ? styled.progressBarLineAnime
                : ""}`}
            >
              <span>70%</span>
            </div>
          </div>
        </div>

        <div className={styled.progressBarBox}>
          <h4 className={styled.progressBarTitle}>Redux js</h4>
          <div className={styled.progressBarItem} ref={Pro5}>
            <div
              className={`${styled.progressBarLine} ${styled.redux} ${Pro5Visable
                ? styled.progressBarLineAnime
                : ""}`}
            >
              <span>75%</span>
            </div>
          </div>
        </div>

        <div className={styled.progressBarBox}>
          <h4 className={styled.progressBarTitle}>Node js</h4>
          <div className={styled.progressBarItem} ref={Pro6}>
            <div
              className={`${styled.progressBarLine} ${styled.node} ${Pro6Visable
                ? styled.progressBarLineAnime
                : ""}`}
            >
              <span>70%</span>
            </div>
          </div>
        </div>

        <div className={styled.progressBarBox}>
          <h4 className={styled.progressBarTitle}>Express js</h4>
          <div className={styled.progressBarItem} ref={Pro7}>
            <div
              className={`${styled.progressBarLine} ${styled.node} ${Pro7Visable
                ? styled.progressBarLineAnime
                : ""}`}
            >
              <span>70%</span>
            </div>
          </div>
        </div>

        <div className={styled.progressBarBox}>
          <h4 className={styled.progressBarTitle}>MongoDB</h4>
          <div className={styled.progressBarItem} ref={Pro8}>
            <div
              className={`${styled.progressBarLine} ${styled.mongo} ${Pro8Visable
                ? styled.progressBarLineAnime
                : ""}`}
            >
              <span>60%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
