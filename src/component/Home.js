import React from "react";
import '../styles/Home.css';
import Footer from "./footer";
import Curriculum from "../resume/curriculum_Javier_Lopez.pdf"
import Resume from "../resume/resume_Javier_Lopez.pdf"

function Home() {
  return (
    <div className='App'>
      <div className="principalContainter">
        <h1 className='title'>hello, i'm Javier</h1>
        <p className='text'>and here you can see and download my resume :-)</p>
        <div className='buttonContainer'>
          <div className='resumeButton'><a href={Curriculum} target="_blank">spanish</a></div>
          <div className='resumeButton'><a href={Resume} target="_blank">english</a></div>
        </div>  
      </div>
      <Footer 
        text="Contact me" 
        linkTo="contact"/>
      
    </div>
    
  );
}

export default Home;
