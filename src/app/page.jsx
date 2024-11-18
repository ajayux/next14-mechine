import Image from "next/image"
import Link from "next/link"

import styles from "./home.module.scss";


const HomePage = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.cnt_wrap}>
            <div className={styles.spot_info}><span></span> 16 new tools added</div>
            <h1 className={styles.m_tle}>Your Daily Dose of Inspiration and Knowledge</h1>
            <div className={styles.btn_wrap}>
              <div className={styles.item}>
                <Link href={"/"} className={styles.btn_1}>
                  <Image src="/icon-btn1.svg" alt="icon button" width="24" height="24" />
                  <span>RSS</span>
                </Link>
              </div>
              <div className={styles.item}>
                <Link href={"/"} className={styles.btn_2}>
                  <Image src="/icon-btn2.svg" alt="icon button" width="24" height="24" />
                  <span>Video Posts</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.specs}>
        <div className="container">
          <div className={styles.d_flx}>
            
            <div className={styles.item}>
              <div className={styles.specs_bx}>
                <div className={styles.img_wrap}>
                  <Image src="/specs-1.jpg" alt="specs" width="268" height="360" />
                </div>
                <div className={styles.cnt_wrap}>
                  <div className={styles.info}><Image src="/icon-calendar.png" alt="calendar" width="16" height="16" />May 28, 2024</div>
                  <div className={styles.tle}>The Science of Happiness: Cultivating Joy and Fulfillment in Everyday Life</div>
                  <div className={styles.txt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias.</div>
                  <Link href={"/"} className={styles.rd_more}>
                    <Image src="/icon-arrow.png" alt="arrow" width="16" height="16" />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.specs_bx}>
                <div className={styles.img_wrap}>
                  <Image src="/specs-1.jpg" alt="specs" width="268" height="360" />
                </div>
                <div className={styles.cnt_wrap}>
                  <div className={styles.info}><Image src="/icon-calendar.png" alt="calendar" width="16" height="16" />May 28, 2024</div>
                  <div className={styles.tle}>The Science of Happiness: Cultivating Joy and Fulfillment in Everyday Life</div>
                  <div className={styles.txt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias.</div>
                  <Link href={"/"} className={styles.rd_more}>
                    <Image src="/icon-arrow.png" alt="arrow" width="16" height="16" />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.specs_bx}>
                <div className={styles.img_wrap}>
                  <Image src="/specs-1.jpg" alt="specs" width="268" height="360" />
                </div>
                <div className={styles.cnt_wrap}>
                  <div className={styles.info}><Image src="/icon-calendar.png" alt="calendar" width="16" height="16" />May 28, 2024</div>
                  <div className={styles.tle}>The Science of Happiness: Cultivating Joy and Fulfillment in Everyday Life</div>
                  <div className={styles.txt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias.</div>
                  <Link href={"/"} className={styles.rd_more}>
                    <Image src="/icon-arrow.png" alt="arrow" width="16" height="16" />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.specs_bx}>
                <div className={styles.img_wrap}>
                  <Image src="/specs-1.jpg" alt="specs" width="268" height="360" />
                </div>
                <div className={styles.cnt_wrap}>
                  <div className={styles.info}><Image src="/icon-calendar.png" alt="calendar" width="16" height="16" />May 28, 2024</div>
                  <div className={styles.tle}>The Science of Happiness: Cultivating Joy and Fulfillment in Everyday Life</div>
                  <div className={styles.txt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias.</div>
                  <Link href={"/"} className={styles.rd_more}>
                    <Image src="/icon-arrow.png" alt="arrow" width="16" height="16" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage