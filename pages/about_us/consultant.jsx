import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import Link from "next/link";
import styles from "@/styles/About_Us.module.css";
function consultant(props) {
  return (
    <main className={styles.cons}>
      <Navigation />
      <h3>Consultant Fees</h3>
      <DottedHR />
      <p>
        Giggy, LLC standard fee on equipment and services is as follows; 2% on
        thirty million (USD) or more, 5% five to thirty million (USD), 7.5% one
        to five million (USD), and 10% under one million (USD). This applies to
        the sale of equipment, any finder fees, or drilling opportunities
        including turnkey services. All standard fees apply unless otherwise
        stated.
      </p>
    </main>
  );
}

export default consultant;
