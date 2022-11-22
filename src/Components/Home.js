import React from "react";
import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
import topMyPic from "../transparent-my-pic.png";
import lp1 from "../light-pink1.png";
import lp2 from "../light-pink2.png";
import lp3 from "../light-pink3.png";
import SP from "../socialParagon.png";
import NB from "../notebook.png";
import TC from "../textConverter.png";
// import Chatplugin from "./Chatplugin";

// import { useNavigate } from 'react-router-dom'

const Home = () => {
  const ref = useRef(null);
  const homeref = useRef(null);
  const aboutref = useRef(null);
  const portfolioref = useRef(null);
  const contactref = useRef(null);
  const emptyclick = useRef(null);
  // const [counter, setcounter] = useState(0);
  // const navigate= useNavigate()
  // const onStart=()=>{
  //   starting();
  // }
  // let locali=0
  // function starting(){
  //   setInterval(function(){
  //     locali= locali+1
  //     if(locali<4){
  //       document.getElementsByClassName('start-btn')[0].style.display="none"
  //       document.getElementsByClassName('counter')[0].style.display="block"
  //       if(locali===1){
  //         setcounter(3)
  //       }else if(locali===2){
  //         setcounter(2)
  //       }else if(locali===3){
  //         setcounter(1)
  //       }

  //     }else if(locali<6){
  //       document.getElementsByClassName('start-btn-container')[0].style.display="none"
  //       document.getElementsByClassName('counter')[0].style.display="none"
  //       document.getElementsByClassName('top-section')[0].style.display="block"
  //       document.getElementsByClassName('top-text-area')[0].style.display="block"
  //     }else if(locali<8){
  //       document.getElementsByClassName('top-text-area')[0].style.display="none"
  //       document.getElementsByClassName('top-text-area2')[0].style.display="block"
  //     }else if(locali<10){
  //       // document.getElementsByClassName('top-text-area2')[0].style.display="none"
  //       document.getElementsByClassName('top-text-area3')[0].style.display="block"
  //     }else if(locali<12){
  //       document.getElementsByClassName('top-text-area3')[0].style.display="none"
  //       document.getElementsByClassName('top-text-area4')[0].style.display="block"

  //     }else if(locali<14){
  //       document.getElementsByClassName('second-section')[0].style.display="block"
  //       // document.getElementsByClassName('top-section')[0].style.display="none"

  //       ref.current?.scrollIntoView({behavior: 'smooth'});
  //     }
  //     },1000 )

  // }

  return (
    <div>
      {/* <div className='start-btn-container'>
            <button className='start-btn' onClick={onStart}>Start</button>
            <h1 className='counter'>{counter}</h1>
          </div>
        <section className='top-section'>
   
        <div className='top-section-body'>
        <div className='top-hi-container'>          
       
        <div className='top-text-area'>
            <img src={lp1} />
        </div>
        <div className='top-text-area2'>
        <img src={lp2} />

        </div>
        <div className='top-text-area3'>
        <img src={lp1} />

        </div>
        <div className='top-text-area4'>
            <h3>Let's start our<br/> journey.</h3>
        </div>
          <img src={topHi} className='hi-top' alt=''/>
          <img src={hand} className='hand-top' alt=''/>
        </div>
        </div>
        </section> */}
      <section ref={ref} className="second-section" id="about-section">
        <div
          ref={emptyclick}
          onClick={() => {
          }}
          className="empty-element"
        ></div>
        <div className="navbar-container">
          <img src={topMyPic} className="top-logo" alt="" />
          <div className="nav-ul-container">
            <div
              onClick={() => {
                let element =
                  document.getElementsByClassName("nav-ul")[0].style;
                let hr1 =
                  document.getElementsByClassName("hamburger-hr-1")[0].style;
                let hr2 =
                  document.getElementsByClassName("hamburger-hr-2")[0].style;
                let hr3 =
                  document.getElementsByClassName("hamburger-hr-3")[0].style;
                let hmbIco =
                  document.getElementsByClassName("hamburger-icon")[0].style;
                if (!element.display) {
                  element.display = "block";
                  element.opacity = "1";
                  element.position = "absolute";
                  element.right = "0";
                  hmbIco.backgroundColor = "#007bff";
                  hmbIco.width = "32px";
                  hmbIco.height = "25px";
                  hr2.display = "none";
                  hr1.transform = "rotate(45deg)";
                  hr1.position = "absolute";
                  hr1.bottom = "36px";
                  hr3.transform = "rotate(135deg)";
                  hr3.position = "absolute";
                  hr3.bottom = "36px";
                  hr1.backgroundColor = "white";
                  hr3.backgroundColor = "white";
                } else if (element.display === "none") {
                  element.display = "block";
                  element.opacity = "1";
                  element.position = "absolute";
                  element.right = "0";
                  hmbIco.backgroundColor = "#007bff";
                  hmbIco.width = "32px";
                  hmbIco.height = "25px";
                  hr2.display = "none";
                  hr1.transform = "rotate(45deg)";
                  hr1.position = "absolute";
                  hr1.bottom = "36px";
                  hr3.transform = "rotate(135deg)";
                  hr3.position = "absolute";
                  hr3.bottom = "36px";
                  hr1.backgroundColor = "white";
                  hr3.backgroundColor = "white";
                } else {
                  element.display = "none";
                  element.opacity = "0";
                  hmbIco.backgroundColor = "white";
                  hr2.display = "block";
                  hr1.backgroundColor = "#007bff";
                  hr3.backgroundColor = "#007bff";
                  hr1.transform = "rotate(0deg)";
                  hr3.transform = "rotate(0deg)";
                  hmbIco.width = "unset";
                  hr3.position = "static";
                  hr1.position = "static";

                  hmbIco.height = "unset";
                }
              }}
              className="hamburger-icon"
            >
              <hr className="hamburger-hr-1" />
              <hr className="hamburger-hr-2" />
              <hr className="hamburger-hr-3" />
            </div>
            <ul className="nav-ul">
              <li
                className="nav-li"
                onClick={() => {
                  homeref.current?.scrollIntoView({behavior: 'smooth'});
                }}
              >
                Home
              </li>
              <li className="nav-li" onClick={() => {
                  aboutref.current?.scrollIntoView({behavior: 'smooth'});
                }}>About</li>
              <li className="nav-li" onClick={() => {
                  portfolioref.current?.scrollIntoView({behavior: 'smooth'});
                }}>Portfolio</li>
              <li className="nav-li" onClick={() => {
                  contactref.current?.scrollIntoView({behavior: 'smooth'});
                }}>Contact</li>
            </ul>
          </div>
        </div>
        <h2 className="sec-title" ref={homeref} >Welcome!</h2>
        <div className="slider">
          <img className="img-lp1" src={lp1} alt="" />
          <img className="img-lp2" src={lp2} alt="" />
          <img className="img-lp3" src={lp3} alt="" />
          <div className="arrow">
            <p
              onClick={() => {
                let sliderdot1 =
                  document.getElementsByClassName("slider-dot1")[0].style;
                let sliderdot2 =
                  document.getElementsByClassName("slider-dot2")[0].style;
                let sliderdot3 =
                  document.getElementsByClassName("slider-dot3")[0].style;
                let imglp1 =
                  document.getElementsByClassName("img-lp1")[0].style;
                let imglp2 =
                  document.getElementsByClassName("img-lp2")[0].style;
                let imglp3 =
                  document.getElementsByClassName("img-lp3")[0].style;
                let sectitle =
                  document.getElementsByClassName("sec-title")[0].style;
                let connector1 =
                  document.getElementsByClassName("connector-1")[0].style;

                if (!sliderdot1.backgroundColor) {
                } else if (sliderdot1.backgroundColor === "black") {
                } else if (sliderdot1.backgroundColor === "white") {
                  if (sliderdot2.backgroundColor === "black") {
                    imglp2.display = "none";
                    imglp2.opacity = "0";
                    imglp1.display = "block";
                    imglp1.opacity = "1";
                    sliderdot2.backgroundColor = "white";
                    sliderdot1.backgroundColor = "black";
                    sectitle.backgroundColor = "#dfb4c6";
                    connector1.backgroundColor = "#dfb4c6";
                    sectitle.color = "white";
                  } else if (sliderdot3.backgroundColor === "black") {
                    imglp3.display = "none";
                    imglp3.opacity = "0";
                    imglp2.display = "block";
                    imglp2.opacity = "1";
                    imglp1.opacity = "1";
                    sliderdot3.backgroundColor = "white";
                    sliderdot2.backgroundColor = "black";
                    sectitle.backgroundColor = "#f6f0cf";
                    connector1.backgroundColor = "#f6f0cf";
                    sectitle.color = "black";
                  }
                }
              }}
              className="arrow1"
            >
              &#10148;
            </p>
            <p
              onClick={() => {
                let sliderdot1 =
                  document.getElementsByClassName("slider-dot1")[0].style;
                let sliderdot2 =
                  document.getElementsByClassName("slider-dot2")[0].style;
                let sliderdot3 =
                  document.getElementsByClassName("slider-dot3")[0].style;
                let imglp1 =
                  document.getElementsByClassName("img-lp1")[0].style;
                let imglp2 =
                  document.getElementsByClassName("img-lp2")[0].style;
                let imglp3 =
                  document.getElementsByClassName("img-lp3")[0].style;
                let sectitle =
                  document.getElementsByClassName("sec-title")[0].style;
                  let connector1 =
                  document.getElementsByClassName("connector-1")[0].style;

                if (!sliderdot1.backgroundColor) {
                  imglp1.display = "none";
                  imglp1.opacity = "0";
                  imglp2.display = "block";
                  imglp2.opacity = "1";
                  sliderdot1.backgroundColor = "white";
                  sliderdot2.backgroundColor = "black";
                  sectitle.backgroundColor = "#f6f0cf";
                  connector1.backgroundColor = "#f6f0cf";
                  sectitle.color = "black";
                } else if (sliderdot3.backgroundColor === "black") {
                } else {
                  if (sliderdot2.backgroundColor === "black") {
                    imglp2.display = "none";
                    imglp2.opacity = "0";
                    imglp3.display = "block";
                    imglp3.opacity = "1";
                    imglp1.opacity = "1";
                    sliderdot2.backgroundColor = "white";
                    sliderdot3.backgroundColor = "black";
                    sectitle.backgroundColor = "#fffcf9";
                    connector1.backgroundColor = "#fffcf9";
                    sectitle.color = "black";
                  } else if (sliderdot1.backgroundColor === "black") {
                    imglp1.display = "none";
                    imglp1.opacity = "0";
                    imglp2.display = "block";
                    imglp2.opacity = "1";
                    imglp1.opacity = "1";
                    sliderdot1.backgroundColor = "white";
                    sliderdot2.backgroundColor = "black";
                    sectitle.backgroundColor = "#f6f0cf";
                    connector1.backgroundColor = "#f6f0cf";
                    sectitle.color = "black";
                  }
                }
              }}
              className="arrow2"
              style={{ color: "" }}
            >
              &#10148;
            </p>
          </div>

          <div className="slider-dot">
            <hr className="slider-dot1" />
            <hr className="slider-dot2" />
            <hr className="slider-dot3" />
          </div>
        </div>
        <div className="connector-1"></div>
        <div ref={aboutref} className="third-section">
          <div className="sticky-container">

          <h1>About Me</h1>
          <p className="about-me">
            I am a Full Stack web developer based on Bangladesh. I can build fully working websites.
            I use Mongo DB as database, Node JS and Express on server side and
            React on frontend which ensure the best user experience.
          </p>
          </div>
        </div>
        <div ref={portfolioref} className="fourth-section">
              <h1>Portfolio</h1>
            <div className="portolios">
              <div className="portfolio-card">
                <img className="portfolio-featured-image" src={SP} alt=""/>
                <h3 className="portfolio-title">Social Paragon</h3>
                <p className="portfolio-description">
                  This is a social media platform created by me. I have used Mongo DB, Express, React JS, Node JS, JS, HTML and CSS in this project.
                </p>
                <a href="https://paragon.learnfacts.xyz" className="visit-site" >Visit</a>
              </div>
              <div className="portfolio-card">
                <img className="portfolio-featured-image" src={NB} alt=""/>
                <h3 className="portfolio-title">Note Book</h3>
                <p className="portfolio-description">
                  It is a place where you can create notes and find them later. All your notes are private and only you can see them. I have used Mongo DB, Express, React JS, Node JS, JS, HTML and CSS, and Bootstrap in this project.
                </p>
                <a href="https://nafisniloy.github.io/notebook" className="visit-site">Visit</a>
              </div>
              <div className="portfolio-card">
                <img className="portfolio-featured-image" src={TC} alt=""/>
                <h3 className="portfolio-title">Text Converter</h3>
                <p className="portfolio-description">
                  This is a small tool website where you can count your text and emplement basic convertion. I have used React JS, JS, HTML, CSS and Bootstrap in this project.
                </p>
                <a href="https://nafisniloy.github.io/text-converter/" className="visit-site">Visit</a>
              </div>
            </div>
        </div>
        <div className="contact-section" ref={contactref} id="contact-section">
          <h2>Contact</h2>
              <div className="contacts-container">
                <h3>Email</h3>
                <b>mdabunafisniloy@gmail.com</b>
              </div>
              <div className="contacts-container">
              <h3>Mobile</h3>
           <b>+8801888606568</b>
              </div>
        </div>
        {/* <Chatplugin/> */}
      </section>
    </div>
  );
};

export default Home;
