import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Offshore.module.css";
import Link from "next/link";
function Index(props) {
  return (
    <main className={styles.cover}>
      <Navigation />
      <h3>Jack-up Rig 400 foot WD</h3>
      <DottedHR />
      <div className={styles.content}>
        <img
          src="/offshore/400FT_Offshore_Jackup_Rig-e1382816443823.png"
          alt=""
        />
        <div>
          <h4>400FT OFFSHORE JACK-UP RIG</h4>
          <p>
            This platform is a non-self-propelled self-elevating drilling rig
            used for offshore oil and natural gas exploitation and development
            operation, with the max. operating water depth 122m (400 ft), the
            drill capacity of 9000m (30000 ft), provided with such functions as
            drilling of deep well/ cluster well/ horizontal well, cementation,
            and auxiliary production test, etc. The hull of the platform is
            triangle box-type structure.
          </p>
        </div>
      </div>
      <p>
        The main dimension of the hull is 70.27m length, 72.0m width, and 9.5m
        depth. The platform is arranged with three triangle truss work legs,
        each fitted with a spud can at its lower end.
        <br />
        Hull structure is divided into three parts with four decks: main deck,
        intermediate deck, machinery deck, and bottom plate.
        <br />
        Maximum operating water depth: 122m(400ft, including astronomical tide
        and storm tide) <br />
        Platform manning: 120 persons <br />
        Maximum drilling depth of rig (4 1/2” drill pipe): 9000m (30000 ft){" "}
        <br />
        Variable load at drilling condition (including hook load): 3900t
        <br />
        Dimensions of drill floor substructure: 40ft x 40ft
        <br />
        Hook load: 6750kN
        <br />
        Draw works: 2880kW
        <br />
        The platform sets up 5 sets of Cat 1600kW diesel generators as main
        power supply and 1 set 750kW emergency diesel generator as the emergency
        power supply. <br />
        TDS-8A 1150 HP Varco
        <br />
        3 sets of F-2200HL high-pressure mud pumps
        <br />
        Four DERRICK shale shakers
        <br />
        High pressure mud pumps 3 x 2200HP <br />
        Rotary table opening 49 1/2”, 1000HP <br />
        Max working pressure of choke manifold 105MPa
        <br />
        max working pressure of kill manifold 70MPa
        <br />
        Well control equipment
        <br />
        Diverter 40” * 500 psi
        <br />
        BOP 13 5/8” * 105MPa or 18 3/4” * 105 MPa
        <br />
        <br />
        Price: The approximate base price is US$250 million, ex-shipyard,
        depending on final configurations. We will need the LOI & POF for
        official quotation.
        <br />
        <br />
        *************************************************
        <br />{" "}
        <Link style={{ color: "blue" }} href={"/offshore_rig/400_ft/JU-2000E"}>
          JU-2000E
        </Link>
        <br />
        <br />
        <Link style={{ color: "blue" }} href={"/offshore_rig/400_ft/CP-400"}>
          CP-400
        </Link>
        <br />
      </p>
      <br />
      <br />
    </main>
  );
}

export default Index;
