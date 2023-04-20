import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import Link from "next/link";
import styles from "@/styles/Rig.module.css";
function index(props) {
  return (
    <main className={styles.cover}>
      <Navigation />
      <h2>Drilling Rigs for Sale</h2>
      <DottedHR />
      <p>
        OilRigsNow.com is a broker for new and used land drilling rigs, new and
        used mobile drilling rigs, and new and used offshore rigs from the USA,
        Canada, Europe, and China. Please follow the links below for some of the
        current offerings. Please send us a RFQ. Let us know if you need a rig
        that is not listed.
      </p>
      <h3>
        <Link href={"/rig/land_rig_for_sale"}>Land Drilling Rigs</Link>
      </h3>
      <DottedHR />
      <h3>
        <Link href={"/rig/mobile_rig_for_sale"}>
          Mobile Workover/Drilling Rigs
        </Link>
      </h3>
      <DottedHR />
      <h3>
        <Link href={"/rig/offsore_rig_for_sale"}>Offshore Drilling Rigs</Link>
      </h3>
      <DottedHR />
    </main>
  );
}

export default index;
