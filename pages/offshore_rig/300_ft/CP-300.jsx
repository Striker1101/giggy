import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Offshore.module.css";
import Link from "next/link";
function barge_rig(props) {
  return (
    <main className={styles.cover}>
      <Navigation />
      <h3>CP-300 Jackup</h3>
      <DottedHR />
      <div className={styles.content}>
        <img src="/offshore/CP-300-300x200.jpg" alt="" />
        <div>
          <p>
            CP-300 is a non-self-propelled self-elevating drilling unit, used
            for offshore oil and natural gas exploitation and development
            operation, with the max. operating water depth 91.4m (300 ft), the
            drill capacity of 9000m (30000 ft), provided with such functions as
            drilling of deep well/ cluster well/ horizontal well, cementation,
            and auxiliary production test, etc. This platform is applicable to
            the offshore drilling operation with design environment conditions
            of tropical and subtropical waters.
          </p>
        </div>
      </div>
      <br />
      <br />
      <p>
        For more information about the CP-300 and its availability, please{" "}
        <Link style={{ color: "blue" }} href="/quotes">
          complete our RFQ.
        </Link>
      </p>
    </main>
  );
}

export default barge_rig;
