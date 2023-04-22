import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Offshore.module.css";
import Link from "next/link";
function barge_rig(props) {
  return (
    <main className={styles.cover}>
      <Navigation />
      <h3>CP-400</h3>
      <DottedHR />
      <div className={styles.content}>
        <img src="/offshore/cp-400-247x300.png" alt="" />
        <div>
          <p>
            This platform is a non-self-propelled self-elevating drilling rig
            used for offshore oil and natural gas exploitation and development
            operation, with the max. operating water depth 122m (400 ft), the
            drill capacity of 9000m (30000 ft), provided with such functions as
            drilling of deep well/ cluster well/ horizontal well, cementation,
            and auxiliary production test, etc.{" "}
          </p>
        </div>
      </div>

      <br />
      <br />
      <center>
        <h6>
          Oil Rigs Now, LLC <br />
          Houston, TX
          <br />
          713-570-6450
          <br />
          info@OilRigsNow.com
          <br />
        </h6>

        <Link style={{ color: "blue" }} href="/quotes">
          Request for Quote
          <br />
        </Link>
      </center>
    </main>
  );
}

export default barge_rig;
