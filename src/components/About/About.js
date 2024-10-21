import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../abc/last.jpg'; 

const About = () => {
  return (
    <div id='about' className='about'>  
    <div className='about-title'>
        <h1>About Me </h1>
        <img src={theme_pattern} alt='' />
    </div>
        <div className='about-sections'>
            <div className='about-left'>
            <img src={profile_img} alt='' />
            </div>
            <div className='about-right'>
            <div className='about-para'>
            <p>Hello! I'm Yohannes Gossaye, a passionate full-stack developer based in Ethiopia. With a strong foundation in both front-end and back-end technologies, I thrive on creating innovative web applications that solve real-world problems. My journey in tech has equipped me with the skills to design intuitive user interfaces and build robust server-side solutions.</p>
            <p>I believe in the power of technology to drive change and am committed to delivering impactful projects that enhance user experiences. I am always eager to learn and grow, and I welcome opportunities to collaborate on exciting ideas. Let's connect and explore how we can work together!</p>
            </div>
            <div className='about-skills'>
            <div className='about-skill'>
            <p> HTML & CSS</p><hr style={{width:"50%"}} />
            </div>
            <div className='about-skill'>
            <p> REACT JS</p><hr style={{width:"70%"}} />
            </div>
            <div className='about-skill'>
            <p> PHP</p><hr style={{width:"60%"}} />
            </div>
            <div className='about-skill'>
            <p> JAVA</p><hr style={{width:"50%"}} />
            </div>

            </div>
            </div>
        </div>
        <div className='about-achievements'>
        <div className='about-achievement'>
            <h1>2+</h1>
            <p>YEARS OF EXPERIANCE</p>
            </div>
            <hr />
            <div className='about-achievement'>
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className='about-achievement'>
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
            </div>
            </div>
    </div>
  )
}

export default About