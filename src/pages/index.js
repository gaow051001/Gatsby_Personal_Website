// Step 1: Import React
import * as React from 'react'
import { 
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPython,
  FaJava,
} from 'react-icons/fa'
import {
  SiCplusplus,
} from 'react-icons/si'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { 
  main,
  titleBgBox,
  titleBox,
  titleCard,
  titleContain,
  titleHead,
  titleInfo,
  titleCardBox,
  infoCard,
  infoCard2,
  infoCardBox,
  infoCardBox2,
  infoCardBoxHead,
  infoCardBoxText,
  head,
  headSkill,
  paragraph,
  socialList,
  socialListItem,
  // gradientBorder,
} from '../components/index.module.css'
// import {
//   card,
//   title,
//   bar,
//   emptybar,
//   filledbar,
//   circle,
//   stroke,
//   svgColor,
// } from '../components/card.module.css'
import {
  sectionHead,
  sectionParagraph,
} from '../components/section.module.css'
import {
  separatorLine,
} from '../components/layout.module.css'
import {
  card,
  cards,
  card__apply,
  card__icon,
  card__link,
  card__exit,
  card__title,
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  bar,
  emptybar,
  filledbar,
} from '../components/card2.module.css'
import {
  timeline,
  content,
} from '../components/timeline.module.css'

import { Fade } from "react-awesome-reveal";

import '../components/global.css';

const IconStyles = {
  height: "4.0em",
  width: "4.0em",
  //backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
  color: "#65AFFF", 
}

//import { StaticImage } from 'gatsby-plugin-image'
//import background from '../images/greecebg2.jpg' 

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <div className={main}>
        <div className={titleBgBox}>
          <div className={titleBox}>
              <div className={titleContain}>
                <Fade direction="down" delay="20" triggerOnce>
                  <div className={titleHead}></div>
                </Fade>
                <div className={titleInfo}>
                  <Fade direction="down" delay="20" triggerOnce>
                    <div className={titleCard}>
                        <h1 className={head}>Welcome</h1>
                    </div>
                    <div className={titleCardBox} >
                        <p className={paragraph}>I'm Wei-Jie Gao,
                          <br></br> 
                          Software Developer & Designer.
                          <br></br>
                          Also a Traveler, Critical-Thinker, and Learner.
                        </p>
                    </div>
                  </Fade>
                  <div className={titleCardBox}>
                    <ul className={socialList}>
                      <Fade direction="left" cascade damping={0.3} triggerOnce>
                        <li className={socialListItem}>
                          <Link to={"https://www.linkedin.com/in/wei-jie-gao-01aa29187/"}><FaLinkedin style={IconStyles}/></Link>
                        </li>
                        <li className={socialListItem}>
                          <Link to={"https://github.com/gaow051001"}><FaGithub style={IconStyles}/></Link>
                        </li>
                        <li className={socialListItem}>
                          <Link to={"https://www.facebook.com/weijie.gao.58"}><FaFacebook style={IconStyles}/></Link>
                        </li>
                        <li className={socialListItem}>
                          <Link to={"mailto:gaow051001@gmail.com"}><FaEnvelope style={IconStyles}/></Link>
                        </li>
                      </Fade>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>  
        <hr className={separatorLine}/> 
        {/* <hr/> */}
        <div className={infoCard}>
          <div className={infoCardBox}> 
            <h2 className={sectionHead}>
              About Me
            </h2>
            <p className={sectionParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <hr className={separatorLine}/>
        <div className={infoCard2}>
          <div className={infoCardBox2}>
            <h1 className={headSkill}>
              Programming Language
            </h1>
          </div>
          <div className={cards}>
            <div class={card + " " +card3}>
              <div class={card__icon}><SiCplusplus/>
                <div class={bar}>
                  <div class={emptybar}></div>
                  <div class={filledbar}></div>
                </div>
              </div>
              
              {/* <p class={card__exit}><i class="fas fa-times"></i></p> */}
              <h2 class={card__title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
              <p class={card__apply}>
                <a class={card__link} href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
              </p>
            </div>
            <div class={card + " " +card4}>
              <div class={card__icon}><FaJava/>
                <div class={bar}>
                  <div class={emptybar}></div>
                  <div class={filledbar}></div>
                </div>
              </div>
              {/* <p class={card__exit}><i class="fas fa-times"></i></p> */}
              <h2 class={card__title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
              <p class={card__apply}>
                <a class={card__link} href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
              </p>
            </div>
            <div class={card + " " +card2}>
              <div class={card__icon}><FaPython/>
                <div class={bar}>
                  <div class={emptybar}></div>
                  <div class={filledbar}></div>
                </div>  
              </div>
              {/* <p class={card__exit}><i class="fas fa-times"></i></p> */}
              <h2 class={card__title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
              <p class={card__apply}>
                <a class={card__link} href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
              </p>
            </div>
            {/* <div class={card}>
              <h3 class={title}>Card 1</h3>
              <div class={bar}>
                <div class={emptybar}></div>
                <div class={filledbar}></div>
              </div>
              <div class={circle}>
                <svg className={svgColor} version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle class={stroke} cx="60" cy="60" r="50"/>
              </svg>
              </div>
            </div>
            <div class={card}>
              <h3 class={title}>Card 2</h3>
              <div class={bar}>
                <div class={emptybar}></div>
                <div class={filledbar}></div>
              </div>
              <div class={circle}>
                <svg className={svgColor} version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle class={stroke} cx="60" cy="60" r="50"/>
              </svg>
              </div>
            </div>
            <div class={card}>
              <h3 class={title}>Card 3</h3>
              <div class={bar}>
                <div class={emptybar}></div>
                <div class={filledbar}></div>
              </div>
              <div class={circle}>
                <svg className={svgColor} version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle class={stroke} cx="60" cy="60" r="50"/>
              </svg>
              </div>
            </div> */}
          </div>
        </div>
        {/* <hr className={separatorLine}/>  */}
        <div className={infoCardBox2}>
          <div className={infoCardBox2}>
            <h1 className={headSkill}>
              Experience
            </h1>
          </div>
          <div className={timeline}>
            <ul>
              <li>
                <span>3rd January 2020</span>
                <div class={content}>
                  <div class={infoCardBoxHead}>
                  </div>
                  <div class={infoCardBoxText}>
                    <h3>What Is Lorem Ipsum?</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <span>3rd January 2020</span>
                <div class={content}>
                  <h3>What Is Lorem Ipsum?</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <hr className={separatorLine}/>  */}
      </div>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage

// import * as React from "react"<img alt="etc" src={background}/>

// const pageStyles = {
//   color: "#232129",
//   padding: 96,
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }
// const headingAccentStyles = {
//   color: "#663399",
// }
// const paragraphStyles = {
//   marginBottom: 48,
// }
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }
// const listStyles = {
//   marginBottom: 96,
//   paddingLeft: 0,
// }
// const listItemStyles = {
//   fontWeight: 300,
//   fontSize: 24,
//   maxWidth: 560,
//   marginBottom: 30,
// }

// const linkStyle = {
//   color: "#8954A8",
//   fontWeight: "bold",
//   fontSize: 16,
//   verticalAlign: "5%",
// }

// const docLinkStyle = {
//   ...linkStyle,
//   listStyleType: "none",
//   marginBottom: 24,
// }

// const descriptionStyle = {
//   color: "#232129",
//   fontSize: 14,
//   marginTop: 10,
//   marginBottom: 0,
//   lineHeight: 1.25,
// }

// const docLink = {
//   text: "Documentation",
//   url: "https://www.gatsbyjs.com/docs/",
//   color: "#8954A8",
// }

// const badgeStyle = {
//   color: "#fff",
//   backgroundColor: "#088413",
//   border: "1px solid #088413",
//   fontSize: 11,
//   fontWeight: "bold",
//   letterSpacing: 1,
//   borderRadius: 4,
//   padding: "4px 6px",
//   display: "inline-block",
//   position: "relative",
//   top: -2,
//   marginLeft: 10,
//   lineHeight: 1,
// }

// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial/",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//     color: "#E95800",
//   },
//   {
//     text: "How to Guides",
//     url: "https://www.gatsbyjs.com/docs/how-to/",
//     description:
//       "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
//     color: "#1099A8",
//   },
//   {
//     text: "Reference Guides",
//     url: "https://www.gatsbyjs.com/docs/reference/",
//     description:
//       "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
//     color: "#BC027F",
//   },
//   {
//     text: "Conceptual Guides",
//     url: "https://www.gatsbyjs.com/docs/conceptual/",
//     description:
//       "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
//     color: "#0D96F2",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//     color: "#8EB814",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     badge: true,
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//     color: "#663399",
//   },
// ]

// const IndexPage = () => {
//   return (
//     <main style={pageStyles}>
//       <h1 style={headingStyles}>
//         Congratulations
//         <br />
//         <span style={headingAccentStyles}>— you just made a Gatsby site! 🎉🎉🎉</span>
//       </h1>
//       <p style={paragraphStyles}>
//         Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
//         update in real-time. 😎
//       </p>
//       <ul style={listStyles}>
//         <li style={docLinkStyle}>
//           <a
//             style={linkStyle}
//             href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
//           >
//             {docLink.text}
//           </a>
//         </li>
//         {links.map(link => (
//           <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
//             <span>
//               <a
//                 style={linkStyle}
//                 href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
//               >
//                 {link.text}
//               </a>
//               {link.badge && (
//                 <span style={badgeStyle} aria-label="New Badge">
//                   NEW!
//                 </span>
//               )}
//               <p style={descriptionStyle}>{link.description}</p>
//             </span>
//           </li>
//         ))}
//       </ul>
//       <img
//         alt="Gatsby G Logo"
//         src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
//       />
//     </main>
//   )
// }

// export default IndexPage

// export const Head = () => <title>Home Page</title>
