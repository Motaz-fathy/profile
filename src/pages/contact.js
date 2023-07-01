import React from "react";
import styled from "@/styles/contact.module.css";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Contact = ({ contact }) => {
  const { ref: text1, inView: text1Visable } = useInView();
  const { ref: text2, inView: text2Visable } = useInView();
  const { ref: input, inView: inputVisable } = useInView();

  const handelSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className={styled.parent} ref={contact}>
      <div>
        <h1 className={styled.title}> Contact Me </h1>
        <section className={styled.send}>
          <form className={styled.form} onSubmit={handelSubmit}>
            <input
              type="email"
              placeholder="your E-mail "
              className={`${styled.email} ${text1Visable ? styled.animEmail : ""}`}
              ref={text1}
            />
            <textarea
              ref={text2}
              type="text"
              placeholder="send message"
              className={ `${styled.message} ${text2Visable ? styled.animMessage : ""}`}
            />
            <button 
              className={styled.submit} 
              ref={input}
            >
              Send
            </button>
          </form>
        </section>
        <section className={styled.media}>
          <div className={styled.links}>
            <Link href={"https://www.linkedin.com/in/motaz-fathi-09a17a118/"}>
              <FaLinkedinIn />
            </Link>
            <Link href={"https://github.com/Motaz-fathy"} target="_blank">
              <FaGithub />
            </Link>
            <Link href={"https://twitter.com/motazfathi2"} target="_blank">
              <FaTwitter />
            </Link>
          </div>
          <p> @copy right by Motaz Fathy 2023</p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
