import React from "react";
import Navigation from "@/comps/Navigator";
import DottedHR from "@/comps/DottedHR";
import styles from "@/styles/About_Us.module.css";
function index(props) {
  return (
    <main className={styles.cover}>
      <Navigation />
      <h3>About Us</h3>
      <DottedHR />
      <p>
        Giggy, LLC (ORN) are consultants in the sale and sourcing of new and
        used land drilling rigs, new and used mobile drilling rigs, and new and
        used offshore rigs and vessels from the USA, Canada, Europe, and Asia.
        ORN will also help companies buy or sell drilling rig equipment and
        parts, tubular goods, oil and gas production equipment and oil field
        services. ORN can assist companies with their drilling rig financing.
      </p>
      <img src="/about_us/img0.jpg" alt="" />
      <h3>Management</h3>
      <DottedHR />
      <div className={styles.article}>
        <img src="/about_us/profile.jpg" alt="" />
        <h4>
          Michael P. Mulkern – B.S., M.A., P.G. – President – Giggy, LLC,
          Houston Texas
        </h4>
        <p>
          Michael started his career in oil and gas exploration in 1975 with
          Phillips Petroleum in Oklahoma. He went on to work for several
          companies including BP/Sohio, Marathon Oil and Apache Corp. on oil and
          gas exploration and development projects around the world, working on
          projects in over 50 countries, participating in many new oil and gas
          discoveries. In 2001 he went into consulting and private enterprise.
          Giggy was formed in 2011 with a mission to build a “go-to” destination
          on the web for buying or selling high quality oil drilling rigs and
          related equipment.
        </p>
      </div>
    </main>
  );
}

export default index;
