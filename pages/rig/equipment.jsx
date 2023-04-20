import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Rig.module.css";
function Equipment(props) {
  return (
    <main>
      <Navigation />
      <h3>Drilling Equipment and Parts </h3>
      <DottedHR />
      <p>
        OilRigsNow can help companies locate drilling rig parts and equipment.
        Below are just some of the equipment. Please fill out our RFQ and we
        will help locate the equipment for you.
      </p>
      <iframe
        width="400"
        height="315"
        src="https://youtu.be/HSE4h8ukplQ"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>
        Top Drives <br />
        Crown Blocks
        <br />
        Traveling Blocks
        <br />
        Hooks
        <br />
        Swivels
        <br />
        Rotary Tables
        <br />
        Drawworks
        <br />
        Mud Pumps Complete mud pumps systems and components Available Now
        <br />
        BOP Many BOP’s and components Available Now
        <br />
        Gensets 3512C, 3512B, 3516 Available Now
        <br />
      </p>
    </main>
  );
}

export default Equipment;
