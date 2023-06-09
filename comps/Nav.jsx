import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Nav.module.css";
import { useRef } from "react";
import { useEffect } from "react";
import Icon from "./Icon";
function Nav(props) {
  const land_rig = useRef([1000, 1200, 1300, 1500, 2000, 3000]);
  const offshore_rig = useRef([
    {
      name: "Barge Rigs",
      link: "barge_rig",
      arrs: [],
    },
    {
      name: "200 ft. Jack-ups",
      link: "200_ft",
      arrs: [],
    },
    {
      name: "300 ft. Jack-ups",
      link: "300_ft",
      arrs: ["CP-300", "DSJ-300", "Super-M2"],
    },
    {
      name: "350 ft. Jack-ups",
      link: "350_ft",
      arrs: ["CJ46"],
    },
    {
      name: "400 ft. Jack-ups",
      link: "400_ft",
      arrs: ["JU-2000", "CP-400"],
    },
    {
      name: "Semi-Submersibles",
      link: "semi_submersibles",
      arrs: [],
    },
  ]);
  useEffect(() => {
    const fold = [...document.querySelectorAll(".fold")];
    fold.forEach((item) => {
      item.addEventListener("mouseover", () => {
        item.style.cssText = "background-color: white;color: black";
        item.children[0].style.cssText =
          "display:flex; background-color: white;";
      });
      item.addEventListener("mouseleave", () => {
        item.style.cssText = "background-color: rgb(48, 45, 45); color: wheat";
        item.children[0].style.cssText =
          "display:none; background-color: rgb(48, 45, 45)";
      });
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Icon />
        <h3 className={styles.text}>
          Land Drilling Rigs
          <br />
          Offshore Rigs & Vessels
          <br />
          <br />
          Major Rig Components
          <br />
          713-570-6450
        </h3>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.mainUL}>
          <li className={styles.fold}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className="fold">
            About Us
            <ul className={styles.sub0}>
              <Link href={"/about_us"}>About Us</Link>
              <Link href={"/about_us/consultant"}>Consultant Fees</Link>
              <Link href={"/about_us/finance"}> Financing</Link>
            </ul>
          </li>
          <li className="fold">
            Land Rigs
            <ul className={styles.sub0}>
              {land_rig.current.map((item, index) => {
                return (
                  <Link key={index} href={"/land_rig/" + item}>
                    {item} hp
                  </Link>
                );
              })}
            </ul>
          </li>
          <li className="fold">
            Mobile Rig
            <ul className={styles.sub0}>
              <Link href={"/mobile_rig/mobile_rig_for_sale"}>
                Mobile Workover Drilling Rigs for Sale
              </Link>
              <Link href={"/mobile_rig/cabot_750"}> Cabot 750</Link>
            </ul>
          </li>
          <li className="fold">
            Offshore Rigs
            <ul className={styles.sub0}>
              {offshore_rig.current.map((item, i) => {
                return (
                  <Link
                    key={i}
                    href={"/offshore_rig/" + item.link}
                    className="fold"
                  >
                    {item.name}
                    <ul className={styles.sub1}>
                      {item.arrs.map((sub, i) => {
                        return (
                          <Link
                            key={i}
                            href={"/offshore_rig/" + item.link + "/" + sub}
                          >
                            {sub}
                          </Link>
                        );
                      })}
                    </ul>
                  </Link>
                );
              })}
            </ul>
          </li>
          <li className="fold">
            Equipment
            <ul className={styles.sub0}>
              <Link href={"/equipment/nov_bop_specials"}>nov-bop-specials</Link>
            </ul>
          </li>
          <li className={styles.fold}>
            <Link href={"/quotes"}> Quotes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
