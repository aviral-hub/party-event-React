import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import SpeakerCard from '../components/speaker-card'
import ContentList1 from '../components/content-list1'
import Slide from '../components/slide'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Freshtopia Fiesta spectacular first-year fresher’s bash</title>
        <meta
          name="description"
          content="Freshers, your ultimate welcome party is here! Dive into Freshtopia Fiesta!"
        />
        <meta
          property="og:title"
          content="Freshtopia Fiesta spectacular first-year fresher’s bash "
        />
        <meta
          property="og:description"
          content="Freshers, your ultimate welcome party is here! Dive into *Freshtopia Fiesta!*—a spectacular first-year fresher’s bash designed to kick off your college life in style!\n\n📅 Date:28 September 2024  \n"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c0635195-fcf7-4081-9e4e-a58278352e92/56fa4fb2-d53e-40d4-a1ae-9f45c19a0504?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <Navigation></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-content-container1">
              <h1 className="home-text10">
                <span>
                  Freshers, your ultimate welcome party is here! Dive into
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text12">Freshtopia Fiesta</span>
                <br className="Heading1"></br>
              </h1>
              <span className="home-text14">
                a spectacular first-year fresher’s bash designed to kick off
                your college life in style
              </span>
              <div className="home-btns-container1">
                <a
                  href="https://wa.link/yygd5n"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-primary button-primary button-lg button"
                >
                  register now
                </a>
                <a
                  href="https://wa.link/yygd5n"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-secondary button button-outline button-lg-border"
                >
                  learn more
                </a>
              </div>
            </div>
            <div className="home-video-container">
              <video
                src="https://youtube.com/shorts/XhzdXmYX_po?feature=share"
                muted="true"
                poster="/whatsapp%20image%202024-09-22%20at%2021.21.58_b7a263c4-1200w.jpg"
                autoPlay="true"
                controls="true"
                className="home-video"
              ></video>
            </div>
          </div>
          <div className="home-blue-background"></div>
        </div>
        <div className="home-sponsors section-container">
          <div className="home-max-width2 max-content-container">
            <span className="home-text15">proudly sponsored by</span>
            <div className="home-container2">
              <img
                alt="image"
                src="/group%207-1200w.png"
                className="home-image1"
              />
              <img
                alt="image"
                src="/group%208-1200w.png"
                className="home-image2"
              />
            </div>
          </div>
        </div>
        <div className="home-speakers section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-heading-container1">
              <span className="home-text16">
                the idea executor of fRESHTOPIA FIESTA 
              </span>
              <h1 className="home-text17">meet our organizing team </h1>
            </div>
            <div className="home-speakers-container">
              <SpeakerCard
                lastName="jaiswal"
                firstName="payal "
                imageSrc="/whatsapp%20image%202024-09-24%20at%2013.28.35_5c4f239f-300w.jpg"
                rootClassName="speaker-cardroot-class-name"
              ></SpeakerCard>
              <SpeakerCard
                role="digital marketing associate @ WPP"
                lastName="Simpson"
                firstName="Mellisa"
                imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="VP OF Marketing @ BUZZFEED"
                lastName="tevlenko"
                firstName="alina"
                imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="HEAD OF DIGITAL @ HUBSPOT"
                lastName="iprovich"
                firstName="gregor"
                imageSrc="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="marketing officer @ salesforce"
                lastName="daris"
                firstName="damian"
                imageSrc="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="social media manager @ vodafone"
                lastName="warren"
                firstName="matt"
                imageSrc="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0N3x8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="creative director @ BBDO"
                lastName="moore"
                firstName="kathie"
                imageSrc="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="CMO @ youtube Europe"
                lastName="chan"
                firstName="erick"
                imageSrc="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwNHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY4MQ&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
            </div>
          </div>
        </div>
        <div className="home-location">
          <img
            alt="image"
            src="/hotel-tuli-international-1000h.jpg"
            className="home-image3"
          />
          <div className="home-content-container2 section-container">
            <div className="home-container3">
              <span className="home-text18">Tuli International</span>
              <span className="home-text19">
                <span>
                  28 September 2024
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
              <div className="home-container4">
                <span className="home-text22">10 AM to 6 PM</span>
              </div>
              <div className="home-container5">
                <span className="home-text23">beautiful, vibrant party</span>
                <span className="home-text24">
                  Tuli International is a reputable venue that prioritizes the
                  well-being of its guests, especially women. They have strict
                  security measures in place and a zero-tolerance policy for any
                  misconduct. The staff is trained to handle any situation
                  professionally and ensure everyone has a great time
                </span>
                <div className="home-btns-container2">
                  <a
                    href="https://wa.link/yygd5n"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-register button-secondary button button-md"
                  >
                    register
                  </a>
                  <a
                    href="https://wa.link/yygd5n"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-learn-more1 button button-outline button-md-border"
                  >
                    learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-agenda section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-heading-container2">
              <h1 className="home-text25 Heading2">key highlights of events</h1>
              <span className="home-text26">
                more announcements are coming soon
              </span>
            </div>
            <div className="home-events-container">
              <div className="home-column"></div>
              <ContentList1
                content1={
                  <Fragment>
                    <span className="home-text27 thq-body-small">
                      <span>
                        Dance to the latest hits and let the music move you
                      </span>
                      <br></br>
                    </span>
                  </Fragment>
                }
                content2={
                  <Fragment>
                    <span className="home-text30 thq-body-small">
                      {' '}
                      Enjoy a variety of games and activities to break the ice
                      and win cool prizes.
                    </span>
                  </Fragment>
                }
                content3={
                  <Fragment>
                    <span className="home-text31 thq-body-small">
                      Feast on a range of delicious treats that’ll keep you
                      energized all day.
                    </span>
                  </Fragment>
                }
                content4={
                  <Fragment>
                    <span className="home-text32 thq-body-small">
                      Enjoy endless fun and make new friends in a vibrant
                      atmosphere
                    </span>
                  </Fragment>
                }
                heading1={
                  <Fragment>
                    <span className="home-text33 thq-heading-2">
                      🎧 DJ Beats
                    </span>
                  </Fragment>
                }
                heading2={
                  <Fragment>
                    <span className="home-text34 thq-heading-3">
                      🎲 Fun Games
                    </span>
                  </Fragment>
                }
                heading3={
                  <Fragment>
                    <span className="home-text35 thq-heading-3">
                      🍔 Unlimited Food
                    </span>
                  </Fragment>
                }
                heading4={
                  <Fragment>
                    <span className="home-text36 thq-heading-3">
                      🎉 Masti &amp; More
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                }
              ></ContentList1>
            </div>
          </div>
          <img
            alt="image"
            src="/whatsapp%20image%202024-09-22%20at%2021.22.53_d353f375-1500w.jpg"
            className="home-image4"
          />
        </div>
        <div className="home-workshops">
          <div className="home-content-container3">
            <div className="home-container6">
              <h1 className="home-text37 Heading2">
                <span>
                  register for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text40">super insightful</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  workshops for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>your team</span>
              </h1>
              <span className="home-text46">
                get early discounts and group discounts
              </span>
              <span className="home-text47">
                <span>For more info</span>
                <br></br>
                <span>
                  Contact
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Tanish tawri - 8080908567</span>
                <br></br>
                <span>Abhijeet Gour - 9309324632</span>
                <br></br>
                <span>Siddhi manker - 9028902779</span>
                <br></br>
                <span>Madhura alaspure -7796135791</span>
                <br></br>
              </span>
              <a
                href="https://wa.link/yygd5n"
                target="_blank"
                rel="noreferrer noopener"
                className="home-learn-more2 button button-md button-outline"
              >
                learn more
              </a>
            </div>
          </div>
        </div>
        <div className="home-previous-events section-container">
          <div className="home-max-width5 max-content-container">
            <div className="home-heading-container3">
              <h1 className="home-text60 Heading2">
                <span>previous events</span>
              </h1>
              <span className="home-text62">
                Take a tour of our previous conferences
              </span>
            </div>
          </div>
          <div data-type="slider" className="home-slider">
            <Slide rootClassName="slideroot-class-name4"></Slide>
            <Slide
              heading="Slide #2"
              rootClassName="slideroot-class-name1"
            ></Slide>
            <Slide
              heading="Slide #3"
              rootClassName="slideroot-class-name"
            ></Slide>
            <Slide
              heading="Slide #4"
              rootClassName="slideroot-class-name3"
            ></Slide>
            <Slide
              heading="Slide #5"
              rootClassName="slideroot-class-name2"
            ></Slide>
          </div>
          <div className="home-slider-controls">
            <div data-action="previousSlide" className="home-go-left">
              <svg viewBox="0 0 1024 1024" className="home-icon1">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <div data-action="nextSlide" className="home-go-right">
              <svg viewBox="0 0 1024 1024" className="home-icon3">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="footerroot-class-name"></Footer>
    </div>
  )
}

export default Home
