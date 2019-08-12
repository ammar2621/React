import React from 'react';
import logo from './img/logo-ALTA@2x.png'
import logo1 from './img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
import logo2 from './img/img-dot@2x.png'
import logo3 from './img/logo-ALTA-v2@2x.png'
import fb from './img/ic_fb@2x.png'
import twitter from './img/ic-twitter@2x.png'
import ig from './img/ic-instagram@2x.png'
import linked from './img/ic-linkedin@2x.png'
import './main.css';


export function About() {
    return(
        <div>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="header-logo-alterra">
                                <img src={logo} height="67px" width="134px" />    
                            </div>
                        </div>
                        <div className="col-md-5 header-menu-right">
                            <ul className="topMenu">
                                <li id="home"><a href="index.html">HOME</a></li>
                                <li id="about"><a href="about-me.html">ABOUT</a></li>
                                <li><a>EXPERIENCE</a></li>
                                <li id="contact"><a href="form.html">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container-fluid about-me">
                <div className="row">
                    <div className="about-me-text">
                        ABOUT ME.
                    </div>
                </div>
            </div>
            <div className="container main-content">
                <div className="row">
                    <div className="col-md-7 colMain"> 
                        <div className="main-content-paragraph">
                            <p>Hello! I'm Anna Sullivan, a full-stack engineer based in Malang, IDN who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel perfect user interfaces with efficient and modern backends.</p>
                            <p>Shortly after graduating from Alterra Academy, I joined the engineering team at Alterra where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
                            <p>Here's few technologies I've been working with recently:</p>
                        </div>
                        <div className="main-content-table">
                            <table className="table-hp" width="453px" height="116px">
                                <tr>
                                    <td>HTML & CSS</td>
                                    <td>Serverless</td>
                                    <td>Scrum</td>
                                </tr>
                                <tr>
                                    <td>Programming</td>
                                    <td>Restful API</td>
                                    <td>Test-Driven Dev</td>
                                </tr>
                                <tr>
                                    <td>Database</td>
                                    <td>Javascript</td>
                                    <td>Software Testing</td>
                                </tr>
                                <tr>
                                    <td>Git & GitHub</td>
                                    <td>Single Page App</td>
                                    <td>UX/UI Designer</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="main-content-images">
                            <img src={logo1} width="249px" height="249px" className="main-content-image-person" />
                            <img src={logo2} width="90px" height="76px" className="main-content-image-dot" />
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-logo-alterra">
                                <img src={logo3} width="110px" height="57px" />
                            </div>

                        </div>
                        <div className="col-md-3 social">
                            <div className="social-content">
                                <h5>Social Media</h5>
                                <ul className="social-media">
                                    <li><a href="https://facebook.com"><img src={fb} width="20px" height="20px" /></a></li>
                                    <li><a href="https://twitter.com"><img src={twitter} width="20px" height="20px" /></a></li>
                                    <li><a href="https://instagram.com"><img src={ig} width="20px" height="20px" /></a></li>
                                    <li><a href="https://linkedin.com"><img src={linked} width="20px" height="20px" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="copyright">
                                <h5>Copyright &copy; Alterra</h5>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
    </div>
    )
}

export default About;
