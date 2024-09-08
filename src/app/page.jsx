"use client";
import styles from "./home.module.scss";

// Swiper components, modules, and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

// Sample slider data
const demoSliderData = {
  hero: [
    {
      id: 1,
      title: "Welcome to our website!",
      tagline: "We are dedicated to bringing you the best user experience",
      image: "https://placehold.co/1920x1080",
      buttons: [
        {
          id: 1,
          text: "Explore",
          link: "https://www.pexels.com/@rpnickson/",
          type: "btn-dark btn-circle",
        },
      ],
    },
    {
      id: 2,
      title: "Welcome to 2nd slide!",
      tagline: "We are dedicated to bringing you the best user experience",
      image: "https://placehold.co/1920x1080",
      buttons: [
        {
          id: 1,
          text: "Knoe more",
          link: "https://www.pexels.com/",
          type: "btn-dark btn-circle",
        },
      ],
    },
  ],
};

const Home = () => {
  return (
    <>
      <section className={styles.hero}>
        <Swiper
          navigation
          pagination={{ type: "bullets", clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          modules={[Autoplay, Navigation, Pagination]}
          className={styles.heroSlide}
        >
          {demoSliderData.hero.map((slide) => (
            <SwiperSlide key={slide.id} className={styles.slide_item}>
              <img src={slide.image} width={1920} height={1080} alt="hero" />
              <div className={`container ${styles.container}`}>
                <div className={styles.dFlx}>
                  <div className={styles.lftSd}>
                    <div className={styles.cntWrap}>
                      <h1 className={styles.mHead}>{slide.title}</h1>
                      {slide.tagline && <p className={styles.txt}> {slide.tagline}</p>}
                    </div>
                  </div>
                  <div className={styles.rgtSd}>
                    {slide.buttons.length > 0 && (
                      <div className={styles.btnWrap}>
                        {slide.buttons.map((button) => (
                          <Link
                            key={button.id}
                            href={button.link}
                            className={`baseBtn ${
                              button.type.includes("btn-dark")
                                ? "baseBtn1"
                                : "baseBtn2"
                            }`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {button.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section id="About" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p>
            Welcome to our website! We are dedicated to bringing you the best
            user experience with the latest technologies, including Next.js and
            Swiper.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
