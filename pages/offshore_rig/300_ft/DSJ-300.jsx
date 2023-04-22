import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Offshore.module.css";
import Link from "next/link";
function barge_rig(props) {
  return (
    <main className={styles.cover}>
      <Navigation />
      <h3>DSJ-300 Jackup</h3>
      <DottedHR />
      <div className={styles.content}>
        <img src="/offshore/DSJ-300-238x300.png" alt="" />
        <div>
          <p>
            The Self-Elevating Drilling Vessel consists of a modified triangular
            hull with three (3) triangular truss work legs each fitted with spud
            cans at their lower ends. The modified triangular hull is 62.8 m
            long, 60.2 m wide, and 8.0 m deep at the side. The three (3) legs
            are spaced with the forward leg on the centerline of the vessel and
            the two after legs 39.8 m aft and 21.7 m outboard of the centerline
            of the forward leg. The spud cans which form the lower segments of
            each leg are 15.2 m in diameter and 4.572 m high. The quarters house
            is constructed above the main deck and around the bow leg and
            consists of a four (4) story building for a 105 man crew. The
            heliport is mounted forward of the quarters house. The support house
            on top of the quarters, houses the emergency generator room, and the
            jacking control room. The drill floor is located on the substructure
            above the cantilever. The cantilever is capable of being skidded
            fore and aft, and the drill floor can be skidded port and starboard
            of the vessel centerline.
          </p>
        </div>
      </div>
      <br />
      <br />
      <p>
        For more information about the DSJ-300 and its availability, please{" "}
        <Link style={{ color: "blue" }} href="/quotes">
          complete our RFQ.
        </Link>
      </p>
    </main>
  );
}

export default barge_rig;
