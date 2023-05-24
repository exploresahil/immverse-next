"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineArrowDown } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Doughnut } from "react-chartjs-2";
import { useCollapse } from 'react-collapsed'

import AOS from "aos";
import "aos/dist/aos.css";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

import MobileScreen1 from "@/public/assets/screens/splash-screen.png";
import MobileScreen2 from "@/public/assets/screens/splash-screen.png";
import MobileScreen3 from "@/public/assets/screens/login-screen.png";
import MobileScreen4 from "@/public/assets/screens/login-screen.png";
import googlePlay from "@/public/assets/logos/googlePlay.svg";
import apple from "@/public/assets/logos/apple.svg";
import team from "@/public/assets/images/team.jpg";

const images = [
  MobileScreen1,
  MobileScreen2,
  MobileScreen3,
  MobileScreen4,
  MobileScreen1,
  MobileScreen2,
  MobileScreen3,
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Home() {
  const [show, setShow] = useState(false);
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  const [visible, setVisible] = useState(false)

  const data = {
    labels: ["Developers", "AI Enginears", "R&D"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [" #2193b0 ", "#808080", "#D71E8A "],

        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <section id="banner">
        <video autoPlay loop disablePictureInPicture>
          <source
            src="assets/videos/hero.mp4"
            type="video/mp4"
            id="hero-video"
          />
        </video>

        <div className="hero-text">
          <h4>Scroll Down</h4>
          <AiOutlineArrowDown size={30} />
        </div>
      </section>
      <section id="secOne">
        <div className="image">
          <div className="screen-container" data-aos="fade-right">
            <Image
              fill
              style={{ objectFit: "contain" }}
              alt="Immverse logo"
              src={MobileScreen1}
            />
          </div>
        </div>
        <div className="text" data-aos="fade-left">
          <h1>
            Imm<span>verse</span>
          </h1>
          <p>Immortalizing Humans</p>
        </div>
      </section>
      <section id="about">
        <div className="text" data-aos="fade-right">
          <h1>Mission</h1>

          <p>We are on a mission to immortalize humans</p>
          <div >

            <section {...getCollapseProps()}>
              Life is finite. Everyone has to die one day, and memories of our
              loved ones would fade away over time. What if we could immortalize
              our loved ones so that we can experience their presence around us
              whenever we miss them.
            </section>
            <button
              {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
              })}
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          </div>
          {/* {show ? (
            <p className="show-text">
              Life is finite. Everyone has to die one day, and memories of our
              loved ones would fade away over time. What if we could immortalize
              our loved ones so that we can experience their presence around us
              whenever we miss them.
            </p>
          ) : null} */}
          {/* <button onClick={() => setShow(!show)}>Know More</button> */}
          <div className="play-main">
            <div className="play-container">
              <Image
                fill
                style={{ objectFit: "contain" }}
                alt="Immverse logo"
                src={googlePlay}
              />
            </div>
            <div className="play-container">
              <Image
                fill
                style={{ objectFit: "contain" }}
                alt="Immverse logo"
                src={apple}
              />
            </div>
          </div>
        </div>
        <div className="image">
          <div className="screen-container" data-aos="fade-left">
            <Image
              fill
              style={{ objectFit: "contain" }}
              alt="Immverse logo"
              src={MobileScreen3}
            />
          </div>
        </div>
      </section>
      <section id="secThree">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={500}
          keyBoardControl={true}
          customTransition="all .7"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {images.slice(0, 5).map((image, index) => {
            return (
              <div className="carousel-container" key={index}>
                <Image
                  alt="Immverse logo"
                  style={{ width: "80%", height: "90%" }}
                  draggable={false}
                  src={image}
                />
              </div>
            );
          })}
        </Carousel>
      </section>
      <section id="team">
        <h2>
          Our <span>Team</span>
        </h2>
        <div className="center">
          <div className="left" data-aos="fade-right">
            <Doughnut data={data} />
          </div>
          <div className="right">
            <div className="screen-container" data-aos="fade-left">
              <Image
                fill
                style={{ objectFit: "cover" }}
                alt="Immverse logo"
                src={team}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <h2>
          Contact <span>Us</span>
        </h2>
        <div className="contact-main" data-aos="fade-up">
          <div className="form-container">
            <p>
              <AiFillHeart className="heart" />
              Hello, Lets get in touch
            </p>
            <form>
              <input placeholder=" Your name" aria-label="Full name" />
              <input
                type="text"
                placeholder=" Your Email"
                aria-label="Full name"
              />
              <input
                type="text"
                placeholder="Phone no"
                aria-label="Full name"
              />
              <input
                type="text"
                placeholder="Message  "
                aria-label="Full name"
              />

              <div className="flex justify-center pt-5">
                <button type="button">SEND MESSAGE</button>
              </div>
            </form>
          </div>
          <div className="contact-text">
            <h4>
              We&apos;d love to Hear <span>from you</span>
            </h4>
            <p>avatars@immverse.ai</p>
          </div>
        </div>
      </section>
    </>
  );
}
