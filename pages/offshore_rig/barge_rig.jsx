import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Offshore.module.css";
import Link from "next/link";
function barge_rig(props) {
  return (
    <main className={styles.cover}>
      <Navigation />
      <h3>Barge Rigs</h3>
      <DottedHR />
      <div className={styles.content}>
        <img src="/offshore/inland_barge.png" alt="" />
        <div>
          <p>
            Giggy can source barge drilling rigs for sale or lease. Please
            contact us.
          </p>
          <br />
          <br />
          <p>
            Next:{" "}
            <Link style={{ color: "blue" }} href="/offshore/200_ft">
              {" "}
              200 ft. Jack-up rig
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default barge_rig;
