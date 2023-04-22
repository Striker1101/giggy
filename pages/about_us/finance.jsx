import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import Link from "next/link";
import styles from "@/styles/About_Us.module.css";
function Finance(props) {
  return (
    <main className={styles.cons}>
      <Navigation />
      <h3>Financing Your Drilling Rig Purchase</h3>
      <DottedHR />
      <p>
        Giggy may be able to assist companies with their drilling rig
        purchasing. We work with financial institutions ready to serve companies
        with their drilling rigs and other large equipment purchases. Contact us
        through our RFQ for information.
      </p>
    </main>
  );
}

export default Finance;
