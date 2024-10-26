import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="Footer">
    <div className={styles.lg_container}>
        <div className={styles.ftMid}>
            <div className={styles.ftAccordion} id="FtAcco">
                                <div className={styles.ftCol}>
                    <div className={styles.itemWrap}>
                                <Link href="https://www.bydoman.com/en" className={styles.logoWrap} aria-label="Logo">
                                    <Image src="https://www.bydoman.com/frontend/images/logo-light.svg" width="270" height="60" loading="lazy"
                                        alt="logo" />
                                </Link>
                    </div>
                </div>
                                <div className={styles.ftCol}>
                    <div className={styles.accordion_header}>
                        <button className={styles.accordion_button} type="button" data-bs-toggle="collapse"
                            data-bs-target="#FtAccoItem1" aria-expanded="true" aria-controls="FtAccoItem1">
                            <span className={styles.ftTle}>BYDCars</span>
                        </button>
                    </div>
                    <div id="FtAccoItem1" className={styles.accordion_collapse} aria-labelledby="FtAccoItem1"
                        data-bs-parent="#FtAcco">
                        <div className={styles.accordion_body}>
                            <ul className={styles.ftUl}>
                                                                                                                                <li>
                                    <Link href="https://www.bydoman.com/en/model/han-2024"
                                        className={styles.ftTxt}
                                        aria-label="nav">HAN</Link>
                                </li>
                                                                                                                                <li>
                                    <Link href="https://www.bydoman.com/en/model/seal-2024"
                                        className={styles.ftTxt}
                                        aria-label="nav">SEAL</Link>
                                </li>
                                                                                                                                <li>
                                    <Link href="https://www.bydoman.com/en/model/atto-3-2024"
                                        className={styles.ftTxt}
                                        aria-label="nav">ATTO 3</Link>
                                </li>
                                                                                                                                <li>
                                    <Link href="https://www.bydoman.com/en/model/qin-plus-2024"
                                        className={styles.ftTxt}
                                        aria-label="nav">QIN PLUS</Link>
                                </li>
                                                                                                                                <li>
                                    <Link href="https://www.bydoman.com/en/model/song-plus-2024"
                                        className={styles.ftTxt}
                                        aria-label="nav">SONG PLUS</Link>
                                </li>
                                                                                                                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.ftCol}>
                    <div className={styles.accordion_header}>
                        <button className={styles.accordion_button} type="button" data-bs-toggle="collapse"
                            data-bs-target="#FtAccoItem2" aria-expanded="true" aria-controls="FtAccoItem_2">
                            <span
                                className={styles.ftTle}>Quick Links</span>
                        </button>
                    </div>
                    <div id="FtAccoItem2" className={styles.accordion_collapse} aria-labelledby="FtAccoItem2"
                        data-bs-parent="#FtAcco">
                        <div className={styles.accordion_body}>
                            <ul className={styles.ftUl}>
                                <li>
                                    <Link href="https://www.bydoman.com/en/offer" className={styles.ftTxt}
                                        aria-label="nav">Offers</Link>
                                </li>
                                <li>
                                    <Link href="https://www.bydoman.com/en/about" className={styles.ftTxt}
                                        aria-label="nav">About Us</Link>
                                </li>
                                <li>
                                    <Link href="https://www.bydoman.com/en/contact" className={styles.ftTxt}
                                        aria-label="nav">Contact</Link>
                                </li>
                                <li>
                                    <Link href="https://www.bydoman.com/en/design-and-technology" className={styles.ftTxt}
                                        aria-label="nav">Design &amp; Technology</Link>
                                </li>
                                <li>
                                    <Link href="https://www.bydoman.com/en/blog" className={styles.ftTxt}
                                        aria-label="nav">Blog</Link>
                                </li>
                                <li>
                                    <Link href="https://www.bydoman.com/en/news-and-stories" className={styles.ftTxt}
                                        aria-label="nav">News And Stories</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.ftCol}>
                    <div className={styles.accordion_header}>
                        <button className={styles.accordion_button} type="button" data-bs-toggle="collapse"
                            data-bs-target="#FtAccoItem3" aria-expanded="true" aria-controls="FtAccoItem_3">
                            <span className={styles.ftTle}>Ownership</span>
                        </button>
                    </div>
                    <div id="FtAccoItem3" className={styles.accordion_collapse} aria-labelledby="FtAccoItem_3"
                        data-bs-parent="#FtAcco">
                        <div className={styles.accordion_body}>
                            <ul className={styles.ftUl}>
                                <li>
                                    <Link href="https://www.bydoman.com/en/review" className={styles.ftTxt}
                                        aria-label="nav">Reviews and Rating</Link>
                                </li>
                                <li>
                                    <Link href="https://www.bydoman.com/en/service" className={styles.ftTxt}
                                        aria-label="nav">Service</Link>
                                </li>
                                <li>
                                    <Link href="https://www.bydoman.com/en/parts" className={styles.ftTxt}
                                        aria-label="nav">Parts</Link>
                                </li>
                                <li>
                                    <Link href="https://www.bydoman.com/en/faq" className={styles.ftTxt}
                                        aria-label="nav">FAQs</Link>
                                </li>
                                <li>
                                    <Link href="https://www.bydoman.com/en/warranty" className={styles.ftTxt}
                                        aria-label="nav">Warranty</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                                <div className={styles.ftCol}>
                    <div className={styles.itemWrap}>
                        <ul className={styles.ftSocialUl}>
                                                        <li>
                                <Link href="https://youtube.com/@byd_oman" target="_blank" aria-label="social">
                                    <Image src="https://www.bydoman.com/frontend/images/icon-ytube.svg" width="10" height="10" loading="lazy" alt="fb"/>
                                </Link>
                            </li>
                                                        <li>
                                <Link href="https://www.instagram.com/byd_oman" target="_blank" aria-label="social">
                                    <Image src="https://www.bydoman.com/frontend/images/icon-insta.svg" width="10" height="10" loading="lazy" alt="fb"/>
                                </Link>
                            </li>
                                                        <li>
                                <Link href="https://www.linkedin.com/company/byd-oman/" target="_blank" aria-label="social">
                                    <Image src="https://www.bydoman.com/frontend/images/icon-linkedin.svg" width="10" height="10" loading="lazy" alt="fb"/>
                                </Link>
                            </li>
                                                    </ul>
                    </div>
                </div>
                            </div>
        </div>
        <div className={styles.ftBtm}>
            <div className={styles.dFlx}>
                <div className={styles.lftSd}>
                    <p className={styles.ftTxt}>Copyright © 2024 BYD Company Ltd. All Rights Reserved</p>
                </div>
                <div className={styles.midSd}>
                    <p className={styles.ftTxt}>
                      <Link
                            href="https://www.bydoman.com/en/policy/terms-and-condition" aria-label="terms">Terms and Conditions</Link>
                    </p>
                    <p className={styles.ftTxt}>
                      <Link
                            href="https://www.bydoman.com/en/policy/privacy-policy" aria-label="privacy">Privacy Policy</Link>
                    </p>
                    <p className={styles.ftTxt}>
                      <Link
                            href="https://www.bydoman.com/en/policy/cookie-policy" aria-label="cookie">Cookie Policy</Link>
                    </p>
                </div>
                <div className={styles.rgtSd}>
                    <p className={styles.ftTxt}>Crafted By: <Link className={styles.creatorLogo}
                            href="https://www.intersmartsolution.com/" target="_blank" aria-label="intersmart">
                            <Image src="https://www.bydoman.com/frontend/images/logo-intersmart.svg" width="10" height="14"
                                loading="lazy" alt="intersmart" />
                        </Link></p>
                </div>
            </div>
        </div>
    </div>
</footer>
  );
};

export default Footer;
