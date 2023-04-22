import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const newly = [
    {
      name: "Drilling Rigs",
      content: [
        "4000 HP land rig",
        "3000 HP land rig",
        "2000 HP AC (new) land rig",
        "1500 HP AC (new) land rig",
        "1500 HP Hydraulic (used) land rig",
        "1200 HP Fast Moving (refurbished) rig",
        "1000 HP Super Single (used)",
      ],
    },
    {
      name: "Top Drives",
      content: [
        "GDM 650 1200 HP",
        "TDS-10, -10SA, -11, -11SA (refurbished)",
        "TDS-4S  (2)",
      ],
    },
    {
      nmae: "Mud Pumps",
      content: ["PZ-9 (used)", "FD-1600", "FC-1600", "F-1000"],
    },
    {
      name: "BOPs",
      content: [],
    },
  ];
  const available = [
    {
      name: "Jackups",
      content: [
        "300' CP300, Super M2, DSJ300",
        "350' KFELS 'B', Super 116 E",
        "375' BMC, CJ46",
        "400' JU-2000E, KFELS 'B', CP400, CJ46, KFELS Super 'A'",
      ],
    },
    {
      name: "Semisubmersibles",
      content: ["New and Used Available"],
    },
    {
      name: "Drillships",
      content: ["Ultra Deep Drillships Available"],
    },
    {
      name: "Please complete RFQ for Information",
      content: [],
    },
  ];
  return (
    <>
      <Head>
        <title>giggy</title>
        <meta name="description" content="sales of rig and equipments" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main>
        <div className={styles.about}>
          <p>
            Giggy, LLC (GG) are consultants in the sale and sourcing of new and
            used land drilling rigs, new and used mobile drilling rigs, and new
            and used offshore rigs and vessels from the USA, Canada, Europe, and
            Asia. ORN will also help companies buy or sell drilling rig
            equipment and parts, tubular goods, oil and gas production equipment
            and oil field services. ORN can assist companies with their drilling
            rig financing.
            <Link style={{ textDecoration: "underline" }} href={"/about"}>
              [Read More About Us…]
            </Link>
          </p>
          <img src="/home/img0.jpg" alt="home" />
        </div>
        <ul className={styles.sales}>
          <li>
            <h4>Drilling Rigs for Sale</h4>
            <hr />
            <Link href={"/rig"}>
              <img src="/home/img1.png" alt="" />
              <h2>Drilling Rigs for Sale</h2>
            </Link>
          </li>
          <li>
            <h4>Olifield Equipment and Parts</h4>
            <hr />
            <Link href={"/rig/equipment"}>
              <img src="/home/img2.png" alt="" />
              <h2>Drilling Equipments</h2>
            </Link>
          </li>
          <li>
            <h4>Offshore Rigs & Vessels</h4>
            <hr />
            <Link href={"/rig/offsore_rig_for_sale"}>
              <img src="/home/img3.jpg" alt="" />
              <h2>Offshore Rigs & Vessels</h2>
            </Link>
          </li>
        </ul>
        <ul className={styles.cover}>
          <li className={styles.li}>
            <div className={styles.header}>
              <h3>Newly Available Equipment</h3>
              <hr />
            </div>
            {newly.map((item, i) => {
              return (
                <>
                  <h4 key={i}>{item.name}</h4>
                  <div>
                    {item.content.map((item, i) => {
                      return <p key={i}>{item}</p>;
                    })}
                  </div>
                </>
              );
            })}
          </li>
          <li className={styles.li}>
            <div className={styles.header}>
              <h3>Available Offshore Rigs</h3>
              <hr />
            </div>
            {available.map((item, i) => {
              return (
                <>
                  <h4 key={i}>{item.name}</h4>
                  <div>
                    {item.content.map((item, i) => {
                      return <p key={i}>{item}</p>;
                    })}
                  </div>
                </>
              );
            })}
          </li>
          <li className={styles.li}>
            <div className={styles.header}>
              <h3>Contact Us</h3>
              <hr />
            </div>
            <h3>
              Giggy, LLC <br />
              Houston, Texas <br />
              713-570-6450 <br />
              info@giggy.com <br />
              Request for Quote
            </h3>
          </li>
        </ul>
      </main>
    </>
  );
}
