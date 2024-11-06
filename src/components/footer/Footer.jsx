import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={"container"}>
                <div className={styles.ftMid}>
                    <div className={styles.ftRow}>
                        <div className={styles.ftCol}>
                            <div className={styles.itemWrap}>
                                <Link href="/" className={styles.logo}>
                                    Logo
                                </Link>
                            </div>
                        </div>
                        <div className={styles.ftCol}>
                            <div className={styles.itemWrap}>
                                <button className={styles.ftTle} type="button">Category</button>
                                <ul className={styles.ftUl}>
                                    <li>
                                        <Link href="/"
                                            className={styles.ftTxt}
                                            aria-label="nav">HAN</Link>
                                    </li>
                                    <li>
                                        <Link href="/"
                                            className={styles.ftTxt}
                                            aria-label="nav">SEAL</Link>
                                    </li>
                                    <li>
                                        <Link href="/"
                                            className={styles.ftTxt}
                                            aria-label="nav">ATTO 3</Link>
                                    </li>
                                    <li>
                                        <Link href="/"
                                            className={styles.ftTxt}
                                            aria-label="nav">QIN PLUS</Link>
                                    </li>
                                    <li>
                                        <Link href="/"
                                            className={styles.ftTxt}
                                            aria-label="nav">SONG PLUS</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.ftCol}>
                            <div className={styles.itemWrap}>
                                <button className={styles.ftTle} type="button">
                                    Quick Links
                                </button>
                                <ul className={styles.ftUl}>
                                    <li>
                                        <Link href="/" className={styles.ftTxt}
                                            aria-label="nav">Offers</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className={styles.ftTxt}
                                            aria-label="nav">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className={styles.ftTxt}
                                            aria-label="nav">Contact</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className={styles.ftTxt}
                                            aria-label="nav">Design &amp; Technology</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className={styles.ftTxt}
                                            aria-label="nav">Blog</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className={styles.ftTxt}
                                            aria-label="nav">News And Stories</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.ftCol}>
                            <div className={styles.itemWrap}>
                                <button className={styles.ftTle} type="button">Ownership</button>
                                <ul className={styles.ftUl}>
                                    <li>
                                        <Link href="/" className={styles.ftTxt}
                                            aria-label="nav">Reviews and Rating</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className={styles.ftTxt}
                                            aria-label="nav">Service</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className={styles.ftTxt}
                                            aria-label="nav">Parts</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className={styles.ftTxt}
                                            aria-label="nav">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className={styles.ftTxt}
                                            aria-label="nav">Warranty</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.ftCol}>
                            <div className={styles.itemWrap}>
                                <ul className={styles.ftSocialUl}>
                                    <li>
                                        <Link href="/" target="_blank" aria-label="social">
                                            <Image src="https://www.bydoman.com/frontend/images/icon-ytube.svg" width="10" height="10" loading="lazy" alt="fb" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" target="_blank" aria-label="social">
                                            <Image src="https://www.bydoman.com/frontend/images/icon-insta.svg" width="10" height="10" loading="lazy" alt="fb" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" target="_blank" aria-label="social">
                                            <Image src="https://www.bydoman.com/frontend/images/icon-linkedin.svg" width="10" height="10" loading="lazy" alt="fb" />
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
                            <p className={styles.ftTxt}>Copyright © 2024 Company Ltd. All Rights Reserved</p>
                        </div>
                        <div className={styles.midSd}>
                            <p className={styles.ftTxt}>
                                <Link
                                    href="/" aria-label="terms">Terms and Conditions</Link>
                            </p>
                            <p className={styles.ftTxt}>
                                <Link
                                    href="/" aria-label="privacy">Privacy Policy</Link>
                            </p>
                            <p className={styles.ftTxt}>
                                <Link
                                    href="/" aria-label="cookie">Cookie Policy</Link>
                            </p>
                        </div>
                        <div className={styles.rgtSd}>
                            <p className={styles.ftTxt}>Crafted By: <Link className={styles.creatorLogo}
                                href="/" target="_blank" aria-label="author">Ajay
                            </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
