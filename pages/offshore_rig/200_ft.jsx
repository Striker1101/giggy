import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Offshore.module.css";
import Link from "next/link";
function Two_h_ft(props) {
  return (
    <main className={styles.cover}>
      <Navigation />
      <h3>Jack-up Rig 200 foot WD</h3>
      <DottedHR />
      <h4>200FT OFFSHORE DRILLING SLOT JACK-UP RIG</h4>
      <p>
        Class: A1 Drilling Platform <br />
        Classification Society: ABS <br />
        Depth: Max.Water depth: 200ft
        <br />
        Drilling Depth: 18,040ft
        <br />
        Max.Variable Load: 2,370 ST on site 1,350 ST towing
        <br />
        Jacking System: Hydraulic, Electrically powered
        <br />
        Jacking Speed: 1 fpm
        <br />
        Hull Dimensions: 170’ length, 130’ width, 17’ depth
        <br />
        Legs: 4 Lattice Tubular Legs with 22’ side x 25’ high equilateral
        <br />
        triangle spud cans
        <br />
        Drilling area: 32,5’ x 20’
        <br />
        Quarters: accommodation for 85 crew members
        <br />
        Helideck: 80’ x 61’,Cap.: 9 t – rated for AS 332
        <br />
      </p>
      <br />
      <p>
        Next: <Link style={{ color: "blue" }} href="/offshore/300_ft">300 ft. Jack-up rig</Link>
      </p>
    </main>
  );
}

export default Two_h_ft;
