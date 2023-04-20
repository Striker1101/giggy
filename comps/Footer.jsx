import React from "react";
import styles from "../styles/Footer.module.css";
import { EventAvailable } from "@material-ui/icons";
import Link from "next/link";
function Footer(props) {
  
  return (
    <div>
      
      <div class={styles.footer}>
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
          Copyright 2011-2018 Oil Rigs Now, LLC - Houston, TX | 713-570-6450 |
          info@OilRigsNow.com
        </b>{" "}
        | <Link href="/certs/legal-notices/">Legal Notices</Link> |{" "}
        <Link href="/certs/terms-and-conditions/">Terms and Conditions</Link> |{" "}
        <Link href="/certs/privacy-policy/">Privacy Policy</Link>
      </center>
    </div>
  );
}

export default Footer;
