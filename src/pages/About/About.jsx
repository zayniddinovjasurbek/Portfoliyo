import React from 'react'
import "./About.css"

//icons
import { FaGoogle } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const About = () => {
    return (
        <div className='about-container' id='about'>
            <div className='about-info'>
                <h1>About</h1>
                <div className="p">Salom! Mening ismim Jasurbek, va men 17 yoshdaman.
                    Frontend developmentga qiziqishim  yoshligimdan
                    boshlangan. Hozirda men o'zimni bu sohada rivojlantirishga
                    va yanada ko'proq bilim olishga intilmoqdaman.

                    Frontend developer sifatida, men HTML, CSS, va JavaScript texnologiyalarini
                    puxta o'rganganman. Ayniqsa, React va  Vite bilan ishlashni yaxshi ko'raman.
                    Ularning kuchli va moslashuvchanligi menga murakkab veb-saytlarni  osonlik
                    bilan yaratishga imkon beradi.
                </div>
            </div>

            <div className='web-site'>
                <div className='icons'>
                    <a href="https://mail.google.com/mail/u/0/#inbox">
                        <FaGoogle />
                        <p>
                            Google
                        </p>

                    </a>

                </div>

                <div className='icons'>
                    <a href="t.me/zayniddinoff_o8">
                        <FaTelegramPlane />
                        <p>
                            Telegram
                        </p>
                    </a>


                </div>

                <div className='icons'>
                    <a href="https://www.instagram.com/zayniddinoff_08/">
                        <RiInstagramFill />
                        <p>
                            Instagarm
                        </p>
                    </a>

                </div>

                <div className='icons'>

                    <a href="https://www.linkedin.com/">
                        <FaLinkedin />
                        <p>
                            Linked In
                        </p>
                    </a>
                </div>

                <div className='icons'>
                    <a href="https://github.com/">
                        <FaGithub />
                        <p>
                            Git Hub
                        </p>
                    </a>

                </div>
            </div>

        </div>
    )
}

export default About
