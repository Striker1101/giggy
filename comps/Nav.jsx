import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Nav.module.css";
import classNames from "classnames";
import { useRef } from "react";
import { useEffect } from "react";
function Nav(props) {
  const land_rig = useRef([1000, 1200, 1300, 1500, 2000, 3000]);
  const offshore_rig = useRef([
    {
      name: "Barge Rigs",
      arrs: [],
    },
    {
      name: "200 ft. Jack-ups",
      arrs: [],
    },
    {
      name: "300 ft. Jack-ups",
      arrs: ["CP-300", "DSJ-300", "Super M2"],
    },
    {
      name: "350 ft. Jack-ups",
      arrs: ["CJ46"],
    },
    {
      name: "400 ft. Jack-ups",
      arrs: ["JU-2000E0", "CP-400"],
    },
    {
      name: "Semi-Submersibles",
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
        item.style.cssText = "background-color: rgb(48, 45, 45); color: wheat";;
        item.children[0].style.cssText =
          "display:none; background-color: rgb(48, 45, 45)";
      });
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href={"/"} className={styles.image}>
          <Image
            style={{
              layout: "fill",
              objectFit: "cover",
              objectPosition: "center",
              margin: "0",
            }}
            src="/icon.svg"
            alt="icon"
            height={150}
            width={55}
          />
          <h1>GIG</h1>
        </Link>
        <h3 className={styles.text}>
          Land DrilLinkng Rigs
          <br />
          Offshore Rigs & Vessels
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
              <Link href={"/about"}>About Us</Link>
              <Link href={"/about/consultant"}>Consultant Fees</Link>
              <Link href={"/about/finance"}> Financing</Link>
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
              <Link href={"/mobile_rig/mobile rig for sale"}>
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
                    href={"/offshore_rig/" + item.name}
                    className="fold"
                  >
                    {item.name}
                    <ul className={styles.sub1}>
                      {item.arrs.map((sub, i) => {
                        return (
                          <Link
                            key={i}
                            href={"/offshore_rig/" + item.name + "/" + sub}
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
              <Link href={"/Equipment/nov-bop-specials"}>nov-bop-specials</Link>
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
