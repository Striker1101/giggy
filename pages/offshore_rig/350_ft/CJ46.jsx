import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Offshore.module.css";
import Link from "next/link";
function barge_rig(props) {
  return (
    <main className={styles.cover}>
      <Navigation />
      <h3>CJ46 Jackup</h3>
      <DottedHR />
      <div className={styles.content}>
        <img src="/offshore/CJ46.png" alt="" />
        <div>
          <h4>375FT CJ46-X100-D JACK-UP DRILLING RIG</h4>
          <p>
            Class certification: ABS <br />
            Basic Designer: Gusto MSC
            <br />
            <br />
            Length overall: 65.26m
            <br />
            Breadth Overall: 62.00m
            <br />
            Depth Hull: 8.00-7.75m
            <br />
            Leg Length: 147.4m
            <br />
            Aft Leg Center: 46.00m
            <br />
            Center line aft legs to forward leg: 40.00m
            <br />
            Design draft: 4.50m
            <br />
            Design shelf Lift: 20 years
            <br />
            Accommodation: 124 people
            <br />
            Helicopter type Sikorsky: S61N
            <br />
          </p>
        </div>
      </div>
      <p>
        Cantilever Reach: <br />
        – Max longitudinal reach is 21.34m (70ft) <br />
        – Max transverse reach is 6.05m(20ft) to each side of the hull
        centerline <br />
        – Max Operation deft: 375ft
        <br />
        Drilling unit: NOV (national Oilwell Varco) drilling unit <br />
        <br />
        <a style={{ color: "blue" }} href="/offshore/CJ46-X100-D-.pdf">
          CJ46-X100-D Specifications
        </a>
        <br />
        <br />
        Price: The approximate base price is US$220 million, ex-shipyard,
        depending on final configurations. We will need the LOI & POF for
        official quotation.
      </p>
      <br />
      <br />
    </main>
  );
}

export default barge_rig;
