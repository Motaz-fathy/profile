import React, { useEffect, useRef, useState } from 'react'
import Styled from '../styles/navbar.module.css'
import Experience from '../pages/experience'
import Contact from '../pages/contact'
import  About  from './About'
import { Skills } from '@/pages/Skills'

import {VscThreeBars}  from 'react-icons/vsc'
import {AiOutlineCloseSquare} from 'react-icons/ai'

export  function Navbar  ()  {

  const about = useRef(null)

  const experience = useRef(null)

  const skills = useRef(null)
  
  const contact = useRef(null)


  const [flagnav , setFlagnav] = useState(false)
 

  
  const handelAboutScrolling = () => {
    about.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  const handelExperienceScrolling = () => {
    experience.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }   

  const handelSkillsScrolling = () => {
    skills.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
  } 

  const handelContactScrolling = () => {
    contact.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
  } 

const handleOpenNav = () => {
  setFlagnav(!flagnav)
}


  return (
    <div>
        <nav className={Styled.nav}>
            <div className={Styled.logo}><h1 className={Styled.text}>Motaz</h1></div>
            <ul className={Styled.list}>
                <li className={flagnav ?   Styled.list_item : Styled.active} onClick={handelAboutScrolling}>about</li>
                <li className={flagnav ?   Styled.list_item : Styled.active} onClick={handelExperienceScrolling}>experience</li>
                <li className={flagnav ?   Styled.list_item : Styled.active} onClick={handelSkillsScrolling}>skills</li>
                <li className={flagnav ?   Styled.list_item : Styled.active} onClick={handelContactScrolling}>contact</li>
                <li id={Styled.flagnav} onClick={handleOpenNav}> {flagnav ? 'O' : 'X' }</li>
            </ul>
        </nav>


        <div className={Styled.space}></div>


       <About about={about} /> 
       
       <Experience experience={experience}/>

        <Skills skills={skills}/>

       <Contact contact={contact}/>

       

    </div>
  )
}

 