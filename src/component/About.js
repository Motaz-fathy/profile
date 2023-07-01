import styled from "@/styles/about.module.css";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function About({ about }) {
  const { ref: AboutRight, inView: RightVisable } = useInView();
  const { ref: AboutLeft, inView: LeftVisable } = useInView();

  return (
    <div className={styled.parent_about} ref={about}>
      <div className={styled.container}>
        <div
          ref={AboutRight}
          className={` ${styled.right}  ${RightVisable
            ? styled.animateRight
            : " "}`}
        >
          <h1 className={styled.h1}>
            Hi, I’m <span>Motaz Fathy </span>
          </h1>
          <div />
          <section className={styled.text}>
            <h4>
              Web Developer specializing in front-end development . Experienced
              with all stages of the development cycle for dynamic web projects.
            </h4>
            <Link
              href={"https://drive.google.com/file/d/12iB-32AYEltP8o16HSRLZCKKYUD-ocgi/view?usp=sharing"}
              target="_blank"
              className={styled.btn_download}
            >
              Download CV
            </Link>
          </section>
        </div>
        <div
          className={`${styled.left} ${LeftVisable ? styled.animateLeft : ""}`}
          ref={AboutLeft}
        >
          <div className={styled.containerImg}>
            <Image src="/profile.jpg" className={styled.img} width={300} height={400} alt="motaz"/>
          </div>
        </div>
      </div>
    </div>
  );
}
