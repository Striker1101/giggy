import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/Offshore.module.css";
function Semi_Submersibles() {
  return (
    <main className={styles.cover}>
      <Navigation />
      <h3>Semi-Submersibles</h3>
      <DottedHR />
      <p>
        Oil Rigs Now can source semi-submersible drilling rigs, new or used, for
        sale or charter. Please contact us.
      </p>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://youtu.be/NiJYiqIJDYM"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </main>
  );
}

export default Semi_Submersibles;
