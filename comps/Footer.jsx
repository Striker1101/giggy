import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
function Footer(props) {
  return (
    <div>
      <div className={styles.footer}>
        <Link href="#" rel="nofollow">
          Return to top of page
        </Link>

        <p>
          Copyright &#x000A9;&nbsp;2023 &#x000B7;
          <Link href="/">Genesis Framework</Link>
          &#x000B7;
        </p>
      </div>
      <center className={styles.certs}>
        <b>
          Copyright 2011-2018 Giggy, LLC - Houston, TX | 713-570-6450 |
          info@Giggy.com
        </b>{" "}
        | <Link href="/certs/legal-notices/">Legal Notices</Link> |{" "}
        <Link href="/certs/terms-and-conditions/">Terms and Conditions</Link> |{" "}
        <Link href="/certs/privacy-policy/">Privacy Policy</Link>
      </center>
    </div>
  );
}

export default Footer;
