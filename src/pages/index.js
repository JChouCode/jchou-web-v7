import React from 'react'
import { Link, Router } from 'components/Router'
import "./css/index.css"
// import { url } from 'inspector'

export default () => (
  <div className="index">
    <div className="welcome">
      <div data-text="chou" id="logo">chou</div>
    </div>
    <div className="blue-back">
      <div className="top">
        <div id="logo">chou</div>
        <div className="contact">
          <a href="mailto: jc2573@cornell.edu">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail icon</title><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/jeffreychoucu/">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
          <a href="https://github.com/JChouCode">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
          </a>
        </div>
      </div>
      <div className="greeting">
        <h1>Hi, my name is Jeffrey</h1>
        <h2>Current CS Major at Cornell University</h2>
        <a href="https://github.com/JChouCode" id="go-git">
          <div>Check out my projects</div>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
        </a>
      </div>
    </div>
    <div className="intern-wrapper">
      <div className="intern-blue-back"></div>
      <div className="intern">
        <h3>Past internships</h3>
        <table className="intern-table">
          <thead>
            <tr className="border">
              <th rowspan="2">Company</th>
              <th>Position</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="intern-head">
              <td>IoTeX</td>
              <td>Software Engineer Intern</td>
              <td>6/19-9/19</td>
            </tr>
            <tr className="border intern-desc">
              <td colSpan="3">- Independently developed <a href="https://codelabs.iotex.io">https://codelabs.iotex.io</a><br>
              </br>- Built full stack decentralized applications on blockchain</td>
            </tr>
            <tr class="intern-head">
              <td>NASA Ames</td>
              <td>Planetary Science Intern</td>
              <td>7/16-8/18</td>
            </tr>
            <tr className="border intern-desc">
              <td colSpan="3">- Coauthored “Mars as a Remnant Planetary Embryo<br></br>
                that survived the Giant Impact Phase”<br></br>
                - Developed key figures using Matplotlib in Python</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="projects">
      <h4>Featured Projects</h4>
      <div className="projects-flex">
        <div className="work-flex">
          <div className="icon">
            <img src={require("./../assets/mario.png")}></img>
          </div>
          <div className="title">Mario 3 Typescript</div>
          <p>Recreation of Super Mario Bros 3 using Phaser 3 in Typescript</p>
          <a href="https://github.com/JChouCode/mario3-ts">View Source</a>
        </div>
        <div className="work-flex">
          <div className="icon">
            <img src={require("./../assets/iotex.png")}></img>
          </div>
          <div className="title"> IoTeX Codelabs</div>
          <p>Hosted coding tutorials for IoTeX blockchain developers</p>
          <a href="https://github.com/iotexproject/codelabs">View Source</a>
        </div>
        <div className="work-flex">
          <div className="icon">
            <img src={require("./../assets/blockchain.png")}></img>
          </div>
          <div className="title"> RPS Bot</div>
          <p>Bet against this web bot for a chance to win crypto!</p>
          <a href="https://github.com/JChouCode/iotex-rps">View Source</a>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="footer-flex">
        <div className="footer-left">
          <div id="logo">chou</div>
          <div id="copyright">© 2019</div>
        </div>
        <div className="contact">
          <a href="mailto: jc2573@cornell.edu">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail icon</title><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/jeffreychoucu/">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
          <a href="https://github.com/JChouCode">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
)
