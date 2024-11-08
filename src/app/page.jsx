"use client";
import styles from "./home.module.scss";

// Swiper components, modules, and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

// Sample slider data
const demoSliderData = {
  hero: [
    {
      id: 1,
      title: "Welcome to our website!",
      tagline: "We are dedicated to bringing you the best user experience",
      image: "https://elements-resized.envatousercontent.com/envato-shoebox/60c8/fd35-0cd4-419b-9797-bb6f2feef509/PhilippeDegroote_ID14915_456020_024.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=bf3270d67c71d7e93afee3bfc454007f6dc7f46eea8f53c76f7ee2f75fc23c7c",
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
      image: "https://elements-resized.envatousercontent.com/envato-shoebox/81ba/3d84-ed10-4eef-b9b5-b4c126915c1b/PhilippeDegroote_ID14915_456080_059.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=4ec3ae07bd78f6de83afb051880714ae8c56e55a40424368e149c08414c82858",
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
              <Image
              fill
              src={slide.image}
        alt="hero" />
              <div className={`container ${styles.container}`}>
                <div className={styles.dFlx}>
                  <div className={styles.lftSd}>
                    <div className={styles.cntWrap}>
                      <h1 className={styles.mHead}>{slide.title}</h1>
                      {slide.tagline && (
                        <p className={styles.txt}> {slide.tagline}</p>
                      )}
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

      <section className={styles.about}>
        <div className={"container"}>
          <div className={styles.d_flx}>
            <div className={styles.w50}>
              <div className={styles.imgOuter}>
                <div className={styles.imgWrap}>
                <Image
        src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/31/20/20/ff/d1/v1_E10/E103ZDAK.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=08e7cd11d8d00e35945ffda87091926dd10ca9acb154522b1f2af93fbc4af53f"
        width={676}
        height={768}
        sizes="(max-width: 768px) 100vw, 33vw"
        alt="about"
        layout="responsive" // This is fine if you need responsiveness
      />
                </div>
              </div>
            </div>
            <div className={styles.w50}>
              <div className={styles.cntWrap}>
                <div className={"tleWrap"}>
                  <div className={"mTle"}>ABOUT US</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore placeat ea recusandae voluptate unde quis fugiat
                  mollitia delectus quaerat! Facilis sed atque repudiandae
                  laudantium maiores rerum cumque soluta consectetur dolorem
                  nobis possimus nam eaque fugit, numquam voluptatum suscipit
                  sunt enim, libero ab, voluptas ipsa? Porro, facilis? Accusamus
                  quisquam perferendis blanditiis!
                </p>
                <div className={styles.btnWrap}>
                  <Link
                    href="/about"
                    className={styles.baseBtn}
                    title="click here"
                    aria-label="about"
                  >
                    <span>READ MORE</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    <section class={styles.countSection}>
        <img src="assets/images/count-bg.jpg" width="1920" height="760" loading="lazy" alt="bg"/>
        <div className={"container"}>
            <div className={styles.dFlx}>
                <div className={styles.lftSd}>
                    <div className={styles.globeWrap}>
                        <img src="assets/images/img-globeBg.png" className={styles.imgGlobeBg} width="712" height="712" loading="lazy" alt="globe"/>
                        <img src="assets/images/img-globe.png" className={styles.imgGlobe} width="712" height="712" loading="lazy" alt="globebg"/>
                        <div className={styles.tle}>Impact</div>
                    </div>
                </div>
                <div className={styles.rgtSd}>
                    <div className={styles.itemFlx}>
                        <div className={styles.item}>
                            <div className={styles.countBx} aria-label="count">
                                <div className={styles.bxWrap}>
                                    <div className={styles.iconWrap}>
                                        <img src="https://placehold.co/400x400/png" width="60" height="60" loading="lazy" alt="count"/>
                                    </div>
                                    <h3 className={styles.num}><span className={styles.counter} data-countto="70" data-duration="3000">0</span>%</h3>
                                    <div className={styles.txt}>Reduction in agricultural inputs</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.countBx} aria-label="count">
                                <div className={styles.bxWrap}>
                                    <div className={styles.iconWrap}>
                                        <img src="https://placehold.co/100x100" width="60" height="60" loading="lazy" alt="count"/>
                                    </div>
                                    <h3 className={styles.num}><span className={styles.counter} data-countto="8400" data-duration="3000">0</span></h3>
                                    <div className={styles.txt}>Farmers</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.countBx} aria-label="count">
                                <div className={styles.bxWrap}>
                                    <div className={styles.iconWrap}>
                                        <img src="https://placehold.co/100x100" width="60" height="60" loading="lazy" alt="count"/>
                                    </div>
                                    <h3 className={styles.num}><span className={styles.counter} data-countto="4100" data-duration="3000">0</span></h3>
                                    <div className={styles.txt}>Ha Dead land Recovery</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.countBx} aria-label="count">
                                <div className={styles.bxWrap}>
                                    <div className={styles.iconWrap}>
                                        <img src="https://placehold.co/100x100" width="60" height="60" loading="lazy" alt="count"/>
                                    </div>
                                    <h3 className={styles.num}><span className={styles.counter} data-countto="30" data-duration="3000">0</span>%</h3>
                                    <div className={styles.txt}>Increase in Yield</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.countBx} aria-label="count">
                                <div className={styles.bxWrap}>
                                    <div className={styles.iconWrap}>
                                        <img src="https://placehold.co/100x100" width="60" height="60" alt="count"/>
                                    </div>
                                    <h3 className={styles.num}>$<span className={styles.counter} data-countto="600" data-duration="3000">0</span>K</h3>
                                    <div className={styles.txt}>Profit generated by farmers</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.countBx} aria-label="count">
                                <div className={styles.bxWrap}>
                                    <div className={styles.iconWrap}>
                                        <img src="assets/images/icon-count-6.svg" width="60" height="60" loading="lazy" alt="count"/>
                                    </div>
                                    <h3 className={styles.num}>Zero Pesticide</h3>
                                    <div className={styles.txt}>Application</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Home;
