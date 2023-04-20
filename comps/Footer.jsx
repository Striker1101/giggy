import React from "react";
import styles from "../styles/Footer.module.css";
import { EventAvailable } from "@material-ui/icons";
import Link from "next/link";
function Footer(props) {
  const newly = [
    {
      name: "Drilling Rigs",
      content: [
        "4000 HP land rig",
        "3000 HP land rig",
        "2000 HP AC (new) land rig",
        "1500 HP AC (new) land rig",
        "1500 HP Hydraulic (used) land rig",
        "1200 HP Fast Moving (refurbished) rig",
        "1000 HP Super Single (used)",
      ],
    },
    {
      name: "Top Drives",
      content: [
        "GDM 650 1200 HP",
        "TDS-10, -10SA, -11, -11SA (refurbished)",
        "TDS-4S  (2)",
      ],
    },
    {
      nmae: "Mud Pumps",
      content: ["PZ-9 (used)", "FD-1600", "FC-1600", "F-1000"],
    },
    {
      name: "BOPs",
      content: [],
    },
  ];
  const available = [
    {
      name: "Jackups",
      content: [
        "300' CP300, Super M2, DSJ300",
        "350' KFELS 'B', Super 116 E",
        "375' BMC, CJ46",
        "400' JU-2000E, KFELS 'B', CP400, CJ46, KFELS Super 'A'",
      ],
    },
    {
      name: "Semisubmersibles",
      content: ["New and Used Available"],
    },
    {
      name: "Drillships",
      content: ["Ultra Deep Drillships Available"],
    },
    {
      name: "Please complete RFQ for Information",
      content: [],
    },
  ];
  return (
    <div>
      <ul className={styles.cover}>
        <li className={styles.li}>
          <div className={styles.header}>
            <h3>Newly Available Equipment</h3>
            <hr />
          </div>
          {newly.map((item, i) => {
            return (
              <>
                <h4 key={i}>{item.name}</h4>
                <div>
                  {item.content.map((item, i) => {
                    return <p key={i}>{item}</p>;
                  })}
                </div>
              </>
            );
          })}
        </li>
        <li className={styles.li}>
          <div className={styles.header}>
            <h3>Available Offshore Rigs</h3>
            <hr />
          </div>
          {available.map((item, i) => {
            return (
              <>
                <h4 key={i}>{item.name}</h4>
                <div>
                  {item.content.map((item, i) => {
                    return <p key={i}>{item}</p>;
                  })}
                </div>
              </>
            );
          })}
        </li>
        <li className={styles.li}>
          <div className={styles.header}>
            <h3>Contact Us</h3>
            <hr />
          </div>
          <h3>
            Oil Rigs Now, LLC <br />
            Houston, Texas <br />
            713-570-6450 <br />
            info@giggy.com <br />
            Request for Quote
          </h3>
        </li>
      </ul>
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
