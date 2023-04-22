import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Offshore.module.css";
import Link from "next/link";
function barge_rig(props) {
  return (
    <main className={styles.cover}>
      <Navigation />
      <h3>Super M2 Jack-up</h3>
      <DottedHR />
      <div className={styles.content}>
        <img src="/offshore/Super_M2_-_300FT_Jackup_Rig.png" alt="" />
        <div>
          <h4>Super M2 Jack-up Rig</h4>
          <p>
            This platform is a non-self-propelled self-elevating drilling rig
            used for offshore oil and natural gas exploitation and development
            operation with the drill capacity of 9000m (30000 ft), provided with
            such functions as drilling, cementation, and auxiliary production
            test, etc. Maximum operating water depth within 91.4m (300 ft) The
            hull of the platform is triangle box-type structure. The main
            dimension of the hull is 60.96m (200 ft) long, 55.78m (180 ft) wide,
            and 7.62m (25 ft) deep. Hull structure is divided into three layers:
            main deck, machinery deck, and bottom deck. The living area is
            divided into five layers.
          </p>
        </div>
      </div>
      <p>
        <p>
          The main equipments of the drill rig of this platform are suitable for
          9000m (30000ft) drill rig. Generator sets, top drive system has been
          globally optimized. <br />
          The maximum design hook load of drill rig is 675t (1488 kips);
          <br />
          the maximum design drilling combination load of cantilever is 1000t
          (2205 kips); <br />
          the maximum design variable load at the working condition in drilling
          is 3500t (7716 kips) (including hook load); <br />
          five big power Cat3516B generator sets; three F-1600HP mud pumps;{" "}
          <br />
          three shale shakers and a big torque top drive system are equipped;
          <br />
          the volume of mud pit is 600m3; the equipments of solid control system
          are five stages purification; <br />
          platform manning: 105 persons.
          <br />
          <br />
          Class : ABS
          <br />
          <br />
          Principal Dimensions:
          <br />
          Hull Length o.a. : 59.745m (196.01ft)
          <br />
          Hull Breadth o.a. : 55.78m (183.01ft)
          <br />
          Depth Moulded : 7.62m (25ft)
          <br />
          Transit Draught : 5.172m (16.97ft)
          <br />
          No. of Legs : 3<br />
          Leg Length : 125.3m (411.09000000000003ft)
          <br />
          Spud Can Diameter: 12.09m (39.67ft)
          <br />
          Spud Can Height : 4.57m (14.99ft)
          <br />
          <br />
          Price: The approximate base price is US$175 million, ex-shipyard,
          depending on final configurations. We will need the LOI & POF for
          official quotation.
        </p>
      </p>
      <br />
      <br />
      <p>
        For more information about the Super M2 and its availability, please{" "}
        <Link style={{ color: "blue" }} href="/quotes">
          complete our RFQ.
        </Link>
      </p>
    </main>
  );
}

export default barge_rig;
