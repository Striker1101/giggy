import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Mobile_Rig.module.css";

function cabot_750(props) {
  return (
    <main className={styles.cover}>
      <Navigation />

      <h3>Cabot 750</h3>
      <DottedHR />
      <img src="/mobile/cabot.png" alt="" />
      <p>
        Cabot 750 is available for inspection and purchase. Currently stacked in
        North Africa since October 2015. Has up to date certificates and
        inspections. Rig is fully equipped, ready to drill.
      </p>
    </main>
  );
}

export default cabot_750;
