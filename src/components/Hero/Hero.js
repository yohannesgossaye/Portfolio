import React from 'react';
import './Hero.css';
import profile_img from '../../abc/yoh.JPG'; // Ensure this path is correct
import AnchorLink from 'react-anchor-link-smooth-scroll'; 

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt='John Gossaye' />
        <h1><span>I'm Yohannes Gossaye,</span> fullstack developer based in Ethiopia.</h1>
        <p>I am a full-stack developer based in Ethiopia, passionate about building innovative web applications.
             With expertise in both front-end and back-end technologies.
             My goal is to leverage technology to solve real-world problems and contribute to meaningful projects.</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className='hero-resume'>My resume</div>
        </div>
    </div>
  );
}

export default Hero;