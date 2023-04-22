import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Offshore.module.css";
import Link from "next/link";
function Index(props) {
  return (
    <main className={styles.cover}>
      <Navigation />
      <h3>Jack-up Rigs 350 foot WD</h3>
      <DottedHR />
      <div className={styles.content}>
        <div>
          <h4>350 – 375FT JACK-UP DRILLING RIG</h4>
          <p>
            Class certification: ABS <br />
            Basic Designer: Gusto MSC <br />
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
            Cantilever Reach:
            <br />
            – Max longitudinal reach is 21.34m (70ft)
            <br />
            – Max transverse reach is 6.05m(20ft) to each side of the hull
            centerline
            <br />
            – Max Operation deft: 350ft
            <br />
            Drilling unit: NOV (national Oilwell Varco) drilling unit
            <br />
            <br />
            <a style={{color:"blue"}} href="/offshore/CJ46-X100-D-.pdf">CJ46-X100-D Specifications</a>
            <br />
            <br />
            Price: The approximate base price is US$210 million, ex-shipyard,
            depending on final configurations. We will need the LOI & POF for
            official quotation.
            <br />
          </p>
        </div>
      </div>

      <br />
      <br />
      <p>
        Next:{" "}
        <Link style={{ color: "blue" }} href="/offshore/400_ft">
          400 ft. Jack-up rig
        </Link>
      </p>
    </main>
  );
}

export default Index;
