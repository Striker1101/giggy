import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Offshore.module.css";
import Link from "next/link";
function barge_rig(props) {
  return (
    <main className={styles.cover}>
      <Navigation />
      <h3>JU-2000E</h3>
      <DottedHR />
      <div className={styles.content}>
        <img src="/offshore/JU-2000E-292x300.png" alt="" />
        <div>
          <p>
            The F&G JU-2000E is a self-elevating drilling unit designed for
            all-year, harsh-environment operation in approximately 400 feet of
            water. This unit is designed to meet the 50-year-return
            environmental conditions in accordance with classification society
            assessment criteria & SNAME T & R Bulletin 5.5.
          </p>
        </div>
      </div>
      <p>
        GENERAL DESCRIPTION Metric <br />
        Quarters Capacity 150 man
        <br />
        Operating Water Depth 122 m<br />
        Usable Deck Area 2,845 m squared
        <br />
        Max. Drilling Variable Deck Load 6,486 m.tons
        <br />
        Max. Survival Variable Deck Load 2,995 m.tons
        <br />
        Max. Combined Variable Deck Load 1,360 m.tons
        <br />
        Max. Cantilever Extension 22.9 m<br />
        Max. Drill Floor Offset +/- 4.6 m<br />
        <a href="/offshore/Bro_JU-2000E_8_16_2012.pdf">Specifications</a>
        <br />
      </p>
      <br />
      <br />
      <p>
        Price is approximately $230 million. Please contact us by{" "}
        <Link style={{ color: "blue" }} href="/quotes">
          RFQ
        </Link>{" "}
        for more information.
      </p>
    </main>
  );
}

export default barge_rig;
