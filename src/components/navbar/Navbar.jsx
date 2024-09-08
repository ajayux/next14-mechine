import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { headers } from "next/headers";
// import { auth } from "@/lib/auth";

const Navbar = async () => {
  // const session = await auth();

  const session = true;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.d_flx}>
          <div className={styles.lft_sd}>
            <Link href="/" className={styles.logo}>
              Logo
            </Link>
          </div>
          <div className={styles.lft_sd}>
            <Links session={session} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
