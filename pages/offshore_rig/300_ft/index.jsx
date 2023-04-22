import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Offshore.module.css";
import Link from "next/link";
function Index(props) {
  return (
    <main className={styles.cover}>
      <Navigation />
      <h3>Jackup Rig 300 foot WD</h3>
      <DottedHR />
      <div className={styles.content}>
        <img src="/offshore/300FT_Offshore_Jackup_Rig.png" alt="" />
        <div>
          <h4>300FT OFFSHORE JACK-UP RIG</h4>
          <p>
            This platform is a non-self-propelled self-elevating drilling rig
            used for offshore oil and natural gas exploitation and development
            operation with the drill capacity of 9000m (30000 ft), provided with
            such functions as drilling, cementation, and auxiliary production
            test, etc.
          </p>
        </div>
      </div>
      <p>
        Maximum operating water depth within 91.4m (300 ft) The hull of the
        platform is triangle box-type structure.
        <br />
        The main dimension of the hull is 60.96m (200 ft) long, 55.78m (180 ft)
        wide, and 7.62m (25 ft) deep.
        <br />
        Hull structure is divided into three layers: main deck, machinery deck,
        and bottom deck. The living area is divided into five layers.
        <br />
        The main equipment of the drill rig of this platform are suitable for
        9000m (30000ft) drill rig. Generator sets, top drive system has been
        globally optimized. <br />
        The maximum design hook load of drill rig is 675t (1488 kips);
        <br />
        the maximum design drilling combination load of cantilever is 1000t
        (2205 kips);
        <br />
        the maximum design variable load at the working condition in drilling is
        3500t (7716 kips) (including hook load);
        <br />
        five big power Cat3516B generator sets; three F-1600HP mud pumps;
        <br />
        three shale shakers and a big torque top drive system are equipped;
        <br />
        the volume of mud pit is 600m3;
        <br />
        the equipment of solid control system are five stages purification;
        <br />
        platform manning: 105 persons.
        <br />
        Price: The approximate base price is US$175 million, ex-shipyard,
        depending on final configurations. We will need the LOI & POF for
        official quotation.
        <br />
        Other 300 ft jackup rigs:
        <br />
        <Link style={{ color: "blue" }} href={"/offshore_rig/300_ft/CP-300"}>
          CP-300
        </Link>
        <br />
        <Link style={{ color: "blue" }} href={"/offshore_rig/300_ft/DSJ-300"}>
          DSJ-300
        </Link>
        <br />
        <Link style={{ color: "blue" }} href={"/offshore_rig/300_ft/Super-M2"}>
          Super M2
        </Link>
        <br />
      </p>
      <br />
      <br />
      <p>
        Next:{" "}
        <Link style={{ color: "blue" }} href="/offshore/350_ft">
          350 ft. Jack-up rig
        </Link>
      </p>
    </main>
  );
}

export default Index;
