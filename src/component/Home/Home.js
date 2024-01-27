import React from 'react'
import "./Home.css"
import photo from "../pic/photo.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import skill4 from "../pic/skill4.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='Home' id='Home'>
        <div className='container f_flex top'>
            <div className='left top'>
                <h3>WELCOME TO MY WOLRD</h3>
                <h1>Hi, I'm <span>Ripam Kundu</span></h1>
                <h2>
                    a
                    <span>
                        <Typewriter words={[" Professional Coder.", " Software Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                    </span>
                </h2>
                <p>Software developer with an emphasis in Python and Web Development. Dedicated
                    to implementing new strategies and improving features of application. An
                    Experienced software engineer with a passion for developing innovative programs
                    that expedite the efficiency and effectiveness of organizational success. Proficient
                    in C/C++, JAVA, Python and SQL, Oracle, GIT, Azure, DevOps, AWS...!</p>
                <div className='Home_btn d_flex'>
                    <div className='col_1'>
                        <h4>FIND WITH ME</h4>
                        <div className='button'>
                            <button className='btn_shadow'>
                                <a href='https://www.facebook.com/rk.kundu26/'><i class='fab fa-facebook-f'></i></a>
                            </button>

                            <button className='btn_shadow'>
                                <a href='https://www.instagram.com/rk_ripam_kundu/'><i class='fab fa-instagram'></i></a>
                            </button>

                            <button className='btn_shadow'>
                                <a href='https://www.linkedin.com/in/rk-ripam-kundu/'><i class='fab fa-linkedin-in'></i></a>
                            </button>

                            <button className='btn_shadow'>
                                <a href='https://github.com/ripamkundu'><i class="fab fa-github"></i></a>
                            </button>
                        </div>
                    </div>
                    <div className='col_1'>
                        <h4>BEST SKILL ON</h4>
                            <button className='btn_shadow'>
                                <img src={skill1} alt='' />
                            </button>

                            <button className='btn_shadow'>
                                <img src={skill2} alt='' />
                            </button>

                            <button className='btn_shadow'>
                                <img src={skill3} alt='' />
                            </button>

                            <button className='btn_shadow'>
                                <img src={skill4} alt='' />
                            </button>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='right_img'>
                    <img src={photo} alt='' />
                </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
